/**
 * Vercel Cron Job - Hourly
 * 매시간 실행되는 크론 작업
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
export const maxDuration = 120 // 2분 최대 실행 시간

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
    const client = getPostgresClient()
    
    // 시간별 통계 업데이트
    const hourlyStats = await (client as any).unsafe(
      `
      SELECT 
        DATE_TRUNC('hour', created_at) as hour,
        COUNT(*) as usage_count
      FROM tool_usage
      WHERE created_at >= NOW() - INTERVAL '1 hour'
      GROUP BY DATE_TRUNC('hour', created_at)
    `,
      []
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

    const statsArray = Array.isArray(hourlyStats) ? hourlyStats : (hourlyStats as any).rows || []

    return NextResponse.json({
      success: true,
      message: "Hourly cron job completed",
      duration: `${duration}ms`,
      statsCount: statsArray.length,
      stats: statsArray,
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

