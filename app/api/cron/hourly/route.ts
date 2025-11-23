/**
 * Vercel Cron Job - Hourly
 * 매시간 실행되는 크론 작업
 * 
 * Vercel Cron Jobs 설정:
 * vercel.json에 cron 설정 추가 필요
 */

import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import { logger } from "@/lib/logger"

// Cron Jobs는 Node.js Runtime에서 실행
export const runtime = "nodejs"

export async function GET(request: Request) {
  // Cron 요청 검증 (Vercel Cron Secret)
  const authHeader = request.headers.get("authorization")
  const expectedAuth = `Bearer ${process.env.CRON_SECRET || "your-secret-key"}`

  if (authHeader !== expectedAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const startTime = Date.now()
  const timeout = 2 * 60 * 1000 // 2분 타임아웃

  try {
    // 시간별 통계 업데이트
    const hourlyStats = await sql.query(
      `
      SELECT 
        DATE_TRUNC('hour', created_at) as hour,
        COUNT(*) as usage_count
      FROM tool_usage
      WHERE created_at >= NOW() - INTERVAL '1 hour'
      GROUP BY DATE_TRUNC('hour', created_at)
    `
    )

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

    return NextResponse.json({
      success: true,
      message: "Hourly cron job completed",
      duration: `${duration}ms`,
      statsCount: hourlyStats.rows?.length || 0,
      stats: hourlyStats.rows,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    const errorStack = error instanceof Error ? error.stack : undefined

    logger.error("Hourly cron job failed", error instanceof Error ? error : new Error(errorMessage), {
      cron: "hourly",
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

