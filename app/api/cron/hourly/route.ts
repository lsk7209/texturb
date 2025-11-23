/**
 * Vercel Cron Job - Hourly
 * 매시간 실행되는 크론 작업
 * 
 * Vercel Cron Jobs 설정:
 * vercel.json에 cron 설정 추가 필요
 */

import { NextResponse } from "next/server"
import { getPostgresClient } from "@/lib/db/postgres-pool"
import { logger } from "@/lib/logger"

// Cron Jobs는 Node.js Runtime에서 실행
export const runtime = "nodejs"
export const dynamic = "force-dynamic" // 동적 렌더링
export const maxDuration = 120 // 2분 최대 실행 시간

export async function GET(request: Request) {
  // Cron 요청 검증
  // Vercel Cron Jobs는 자동으로 호출되지만, 보안을 위해 검증 수행
  const authHeader = request.headers.get("authorization")
  const vercelSignature = request.headers.get("x-vercel-signature")
  const cronSecret = process.env.CRON_SECRET

  // 개발 환경에서는 인증을 건너뛸 수 있음 (선택사항)
  if (process.env.NODE_ENV === "development" && !cronSecret) {
    // 개발 환경에서만 인증 건너뛰기
  } else if (cronSecret) {
    // CRON_SECRET이 설정된 경우 Bearer 토큰 검증
    const expectedAuth = `Bearer ${cronSecret}`
    if (authHeader !== expectedAuth && !vercelSignature) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  const startTime = Date.now()
  const timeout = 2 * 60 * 1000 // 2분 타임아웃

  try {
    const client = getPostgresClient()
    if (!client) {
      throw new Error("Postgres client not available")
    }
    
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
    
    // 연결 풀은 자동으로 관리되므로 end() 호출 불필요
    // Vercel 서버리스 환경에서는 요청 종료 시 자동으로 정리됨

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

