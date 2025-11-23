/**
 * Cloudflare Workers - Daily Cron Job
 * 매일 자정에 실행되는 크론 작업
 * 
 * 배포 방법:
 * wrangler publish --name cron-daily
 */

interface LogContext {
  date?: string
  operation?: string
  [key: string]: unknown
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
    
    // 타임아웃 설정 (5분)
    const timeout = 5 * 60 * 1000
    const timeoutId = setTimeout(() => {
      log("error", "Daily cron job timeout", {
        duration: `${Date.now() - startTime}ms`,
        cron: event.cron,
      })
    }, timeout)

    try {
      // 어제 날짜 계산
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const dateStr = yesterday.toISOString().split("T")[0]

      // 병렬 실행으로 최적화: 통계 집계와 세션 정리를 동시에
      const statsQuery = db
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

      const cleanupQuery = db
        .prepare(
          `
          DELETE FROM sessions
          WHERE last_accessed < datetime('now', '-30 days')
        `
        )

      // 병렬 실행 (Promise.all 사용)
      const [statsResult, cleanupResult] = await Promise.all([
        statsQuery.first<{
          total_usage: number
          unique_sessions: number
          top_tools: string
        }>(),
        cleanupQuery.run(),
      ])

      // 통계 저장 (배치 결과를 받은 후)
      if (statsResult) {
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
            statsResult.total_usage,
            statsResult.unique_sessions,
            statsResult.top_tools,
            statsResult.total_usage,
            statsResult.unique_sessions,
            statsResult.top_tools
          )
          .run()
      }

      clearTimeout(timeoutId)
      
      const duration = Date.now() - startTime
      log("info", "Daily cron job completed", {
        date: dateStr,
        duration: `${duration}ms`,
        sessionsCleaned: cleanupResult.meta?.rows_written || 0,
        statsProcessed: statsResult ? 1 : 0,
      })
    } catch (error) {
      clearTimeout(timeoutId)
      const duration = Date.now() - startTime
      log("error", "Daily cron job failed", {
        error: error instanceof Error ? error.message : String(error),
        duration: `${duration}ms`,
        cron: event.cron,
        scheduledTime: new Date(event.scheduledTime).toISOString(),
      })

      // Rate limit 에러는 재시도하지 않음 (Cloudflare가 자동으로 재시도하므로)
      if (error instanceof Error && error.message.toLowerCase().includes("rate limit")) {
        log("warn", "Rate limit encountered, skipping retry", {
          cron: event.cron,
          scheduledTime: new Date(event.scheduledTime).toISOString(),
        })
        return
      }

      // 다른 에러는 재시도 가능하도록 throw
      throw error
    }
  },
}

interface Env {
  DB: D1Database
}

