/**
 * Cloudflare Pages Functions - Hourly Cron Job
 * 매시간 실행되는 크론 작업
 * 
 * 사용 예시:
 * - 실시간 통계 업데이트
 * - 캐시 갱신
 * - 알림 전송
 */

import type { OnRequestHandler } from "@cloudflare/next-on-pages"
import { logger } from "@/lib/logger"

export const onRequest: OnRequestHandler = async (context) => {
  const { env, request } = context

  // Cron 요청 검증
  const authHeader = request.headers.get("X-Cron-Auth")
  const expectedAuth = env.CRON_SECRET || "your-secret-key"

  if (authHeader !== expectedAuth) {
    return new Response("Unauthorized", { status: 401 })
  }

  const startTime = Date.now()
  const timeout = 2 * 60 * 1000 // 2분 타임아웃

  try {
    const db = env.DB as D1Database

    // 시간별 통계 업데이트
    const hourlyStats = await db
      .prepare(
        `
        SELECT 
          strftime('%Y-%m-%d %H:00:00', created_at) as hour,
          COUNT(*) as usage_count
        FROM tool_usage
        WHERE created_at >= datetime('now', '-1 hour')
        GROUP BY strftime('%Y-%m-%d %H:00:00', created_at)
      `
      )
      .all<{
        hour: string
        usage_count: number
      }>()

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
        message: "Hourly cron job completed",
        duration: `${duration}ms`,
        statsCount: hourlyStats.results?.length || 0,
        stats: hourlyStats.results,
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
    logger.error("Hourly cron job failed", error instanceof Error ? error : new Error(errorMessage), {
      cron: "hourly",
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

