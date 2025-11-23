/**
 * Cloudflare Workers - Hourly Cron Job
 * 매시간 실행되는 크론 작업
 * 
 * 배포 방법:
 * wrangler publish --name cron-hourly
 */

import type { ScheduledEvent, ExecutionContext, D1Database } from "@/types/cloudflare"

interface LogContext {
  [key: string]: unknown
}

interface Env {
  DB: D1Database
  CRON_SECRET?: string
}

function log(level: "info" | "error", message: string, context?: LogContext): void {
  const timestamp = new Date().toISOString()
  const contextStr = context ? ` ${JSON.stringify(context)}` : ""
  console[level](`[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`)
}

export default {
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    const db = env.DB
    const startTime = Date.now()
    
    // 타임아웃 설정 (2분)
    const timeout = 2 * 60 * 1000
    const timeoutId = setTimeout(() => {
      log("error", "Hourly cron job timeout", {
        duration: `${Date.now() - startTime}ms`,
        cron: event.cron,
      })
    }, timeout)

    try {
      // 시간별 통계 조회
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

      clearTimeout(timeoutId)
      
      const duration = Date.now() - startTime
      log("info", "Hourly cron job completed", {
        duration: `${duration}ms`,
        statsCount: hourlyStats.results?.length || 0,
      })

      // 필요시 추가 작업 수행
      // 예: 실시간 알림, 캐시 갱신 등
    } catch (error) {
      clearTimeout(timeoutId)
      const duration = Date.now() - startTime
      log("error", "Hourly cron job failed", {
        error: error instanceof Error ? error.message : String(error),
        duration: `${duration}ms`,
        cron: event.cron,
        scheduledTime: new Date(event.scheduledTime).toISOString(),
      })

      // 에러를 다시 throw하여 Cloudflare가 재시도할 수 있도록 함
      throw error
    }
  },
}

