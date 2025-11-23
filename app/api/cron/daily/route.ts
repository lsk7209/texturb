/**
 * Vercel Cron Job - Daily
 * 매일 자정에 실행되는 크론 작업
 * 
 * Vercel Cron Jobs 설정:
 * vercel.json에 cron 설정 추가 필요
 */

import { NextResponse } from "next/server"
import postgres from "postgres"
import { logger } from "@/lib/logger"

// postgres 클라이언트 생성 (일반 문자열 쿼리용)
const getPostgresClient = () => {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL not set")
  }
  return postgres(process.env.POSTGRES_URL, {
    max: 20,
    idle_timeout: 30,
    connect_timeout: 2,
  })
}

// Cron Jobs는 Node.js Runtime에서 실행
export const runtime = "nodejs"
export const dynamic = "force-dynamic" // 동적 렌더링
export const maxDuration = 300 // 5분 최대 실행 시간

export async function GET(request: Request) {
  // Cron 요청 검증 (Vercel Cron Secret)
  const authHeader = request.headers.get("authorization")
  const expectedAuth = `Bearer ${process.env.CRON_SECRET || "your-secret-key"}`

  if (authHeader !== expectedAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const startTime = Date.now()
  const timeout = 5 * 60 * 1000 // 5분 타임아웃

  try {
    // 어제 날짜 계산
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const dateStr = yesterday.toISOString().split("T")[0]

    const client = getPostgresClient()
    
    // 병렬 실행으로 최적화: 통계 집계와 세션 정리를 동시에
    const [statsResult, cleanupResult] = await Promise.all([
      // 일일 통계 집계
      (client as any).unsafe(
        `
        SELECT 
          COUNT(*) as total_usage,
          COUNT(DISTINCT user_session_id) as unique_sessions,
          json_agg(json_build_object('tool_id', tool_id, 'count', cnt))::text as top_tools
        FROM (
          SELECT 
            tool_id,
            COUNT(*) as cnt
          FROM tool_usage
          WHERE DATE(created_at) = $1
          GROUP BY tool_id
          ORDER BY cnt DESC
          LIMIT 10
        ) subquery
      `,
        [dateStr]
      ),
      // 오래된 세션 데이터 정리 (30일 이상)
      (client as any).unsafe(
        `
        DELETE FROM sessions
        WHERE last_accessed < NOW() - INTERVAL '30 days'
      `,
        []
      ),
    ])

    const stats = Array.isArray(statsResult) ? statsResult[0] : (statsResult as any).rows?.[0] as {
      total_usage: number
      unique_sessions: number
      top_tools: string
    }

    // 통계 저장
    if (stats) {
      await (client as any).unsafe(
        `
        INSERT INTO daily_stats (date, total_usage, unique_sessions, top_tools, updated_at)
        VALUES ($1, $2, $3, $4, NOW())
        ON CONFLICT(date) DO UPDATE SET
          total_usage = $2,
          unique_sessions = $3,
          top_tools = $4,
          updated_at = NOW()
      `,
        [dateStr, stats.total_usage, stats.unique_sessions, stats.top_tools]
      )
    }
    
    // 시간별 통계도 함께 집계 (Hobby 플랜 제한으로 시간별 크론 작업 제거됨)
    const hourlyStats = await (client as any).unsafe(
      `
      SELECT 
        DATE_TRUNC('hour', created_at) as hour,
        COUNT(*) as usage_count
      FROM tool_usage
      WHERE DATE(created_at) = $1
      GROUP BY DATE_TRUNC('hour', created_at)
      ORDER BY hour ASC
    `,
      [dateStr]
    )

    // 클라이언트 정리
    await client.end()

    const duration = Date.now() - startTime

    // 타임아웃 체크
    if (duration > timeout) {
      return NextResponse.json(
        {
          success: false,
          error: "Operation timeout",
          duration: `${duration}ms`,
          timestamp: new Date().toISOString(),
        },
        { status: 504 }
      )
    }

    const cleanupCount = Array.isArray(cleanupResult) 
      ? cleanupResult.length 
      : (cleanupResult as any).count || 0

    const hourlyStatsArray = Array.isArray(hourlyStats) ? hourlyStats : (hourlyStats as any).rows || []

    return NextResponse.json({
      success: true,
      message: "Daily cron job completed",
      date: dateStr,
      duration: `${duration}ms`,
      sessionsCleaned: cleanupCount,
      hourlyStatsCount: hourlyStatsArray.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    const errorStack = error instanceof Error ? error.stack : undefined

    logger.error("Daily cron job failed", error instanceof Error ? error : new Error(errorMessage), {
      cron: "daily",
      duration: `${Date.now() - startTime}ms`,
      stack: errorStack,
    })

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

