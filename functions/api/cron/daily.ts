/**
 * Cloudflare Pages Functions - Daily Cron Job
 * 매일 자정에 실행되는 크론 작업
 * 
 * 사용 예시:
 * - 통계 데이터 집계
 * - 오래된 데이터 정리
 * - 캐시 무효화
 */

import type { OnRequestHandler } from "@cloudflare/next-on-pages"
import { autoCleanupMemory } from "@/lib/db/memory-manager"
import { logger } from "@/lib/logger"
import { periodicHealthCheck } from "@/lib/db/health-check"

export const onRequest: OnRequestHandler = async (context) => {
  const { env, request } = context

  // Cron 요청 검증 (Cloudflare가 자동으로 설정하는 헤더)
  const authHeader = request.headers.get("X-Cron-Auth")
  const expectedAuth = env.CRON_SECRET || "your-secret-key"

  if (authHeader !== expectedAuth) {
    return new Response("Unauthorized", { status: 401 })
  }

  const startTime = Date.now()
  const timeout = 5 * 60 * 1000 // 5분 타임아웃

  try {
    // D1 데이터베이스 사용
    const db = env.DB as D1Database

    // 어제 날짜 계산
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const dateStr = yesterday.toISOString().split("T")[0]

    // 병렬 실행으로 최적화: 통계 집계와 세션 정리를 동시에
    const [stats, cleanupResult] = await Promise.all([
      // 일일 통계 집계
      db
        .prepare(
          `
          SELECT 
            COUNT(*) as total_usage,
            COUNT(DISTINCT user_session_id) as unique_sessions,
            json_group_array(json_object('tool_id', tool_id, 'count', cnt)) as top_tools
          FROM (
            SELECT 
              tool_id,
              COUNT(*) as cnt
            FROM tool_usage
            WHERE DATE(created_at) = ?
            GROUP BY tool_id
            ORDER BY cnt DESC
            LIMIT 10
          )
        `
        )
        .bind(dateStr)
        .first<{
          total_usage: number
          unique_sessions: number
          top_tools: string
        }>(),
      // 오래된 세션 데이터 정리 (30일 이상)
      db
        .prepare(
          `
          DELETE FROM sessions
          WHERE last_accessed < datetime('now', '-30 days')
        `
        )
        .run(),
    ])

    // 통계 저장
    if (stats) {
      await db
        .prepare(
          `
          INSERT INTO daily_stats (date, total_usage, unique_sessions, top_tools, updated_at)
          VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
          ON CONFLICT(date) DO UPDATE SET
            total_usage = ?,
            unique_sessions = ?,
            top_tools = ?,
            updated_at = CURRENT_TIMESTAMP
        `
        )
        .bind(
          dateStr,
          stats.total_usage,
          stats.unique_sessions,
          stats.top_tools,
          stats.total_usage,
          stats.unique_sessions,
          stats.top_tools
        )
        .run()
    }

    // 메모리 정리 (주기적으로 실행)
    autoCleanupMemory(80)

    // 데이터베이스 헬스 체크
    await periodicHealthCheck()

    const duration = Date.now() - startTime

    // 타임아웃 체크
    if (duration > timeout) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Operation timeout",
          duration: `${duration}ms`,
          timestamp: new Date().toISOString(),
        }),
        {
          status: 504,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Daily cron job completed",
        date: dateStr,
        duration: `${duration}ms`,
        sessionsCleaned: cleanupResult.meta?.rows_written || 0,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    const errorStack = error instanceof Error ? error.stack : undefined

    // 구조화된 에러 로깅
    logger.error("Daily cron job failed", error instanceof Error ? error : new Error(errorMessage), {
      cron: "daily",
      duration: `${Date.now() - startTime}ms`,
      stack: errorStack,
    })

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

