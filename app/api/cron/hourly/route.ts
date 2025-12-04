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
import { normalizePostgresResult } from "@/lib/db/postgres-types"
import type { PostgresRow } from "@/lib/db/postgres-types"

// Cron Jobs는 Node.js Runtime에서 실행
export const runtime = "nodejs"
export const dynamic = "force-dynamic" // 동적 렌더링
export const maxDuration = 120 // 2분 최대 실행 시간

export async function GET(request: Request) {
  // Vercel Cron Jobs 인증
  // Vercel은 자동으로 Cron Jobs를 호출하지만, 외부 접근을 방지하기 위해 검증 수행
  const cronSecret = process.env.CRON_SECRET
  
  // CRON_SECRET이 설정된 경우에만 인증 검증
  if (cronSecret) {
    const authHeader = request.headers.get("authorization")
    const expectedAuth = `Bearer ${cronSecret}`
    
    // Bearer 토큰 검증
    if (authHeader !== expectedAuth) {
      // 개발 환경에서는 경고만 출력 (선택사항)
      if (process.env.NODE_ENV === "development") {
        logger.warn("Cron job called without valid authorization in development", {
          hasAuthHeader: !!authHeader,
        })
      } else {
        // 프로덕션 환경에서는 인증 실패 시 거부
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
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
    const hourlyStatsResult = await (client as { unsafe: (query: string, params: unknown[]) => Promise<unknown> }).unsafe(
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

    const statsArray = normalizePostgresResult<PostgresRow & { hour: string; usage_count: number }>(hourlyStatsResult)

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

