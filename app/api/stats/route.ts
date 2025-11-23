/**
 * API Route: 통계 조회
 * Vercel Postgres 데이터베이스에서 통계를 조회하는 API
 */

import { NextResponse } from "next/server"
import { getToolStats, getDailyStats } from "@/lib/db/queries-vercel"
import { logger } from "@/lib/logger"
import { validateId, validateDateString } from "@/lib/db/validation"
import { createSafeErrorResponse } from "@/lib/errors/sanitize"

// Vercel Postgres는 Node.js Runtime에서 더 안정적으로 동작
export const runtime = "nodejs" // Vercel Node.js Runtime 사용

// 통계 조회는 캐싱 가능 (5분)
export const revalidate = 300

export async function GET(request: Request) {
  try {
    // Vercel Edge Runtime에서는 Next.js 캐싱을 사용
    // revalidate 설정으로 자동 캐싱됨

    const { searchParams } = new URL(request.url)
    const toolId = searchParams.get("toolId")
    const date = searchParams.get("date")

    // 도구별 통계 조회
    if (toolId) {
      // 입력 검증
      try {
        validateId(toolId)
      } catch (validationError) {
        logger.warn("Invalid toolId format", {
          toolId,
          error: validationError instanceof Error ? validationError.message : String(validationError),
        })
        return NextResponse.json({ error: "Invalid toolId format" }, { status: 400 })
      }

      const result = await getToolStats(toolId)
      if (result.error) {
        return NextResponse.json({ error: result.error.message }, { status: 500 })
      }
      
      const response = NextResponse.json({ data: result.data })
      response.headers.set("X-Cache", "MISS")
      response.headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=60")
      
      return response
    }

    // 일일 통계 조회
    if (date) {
      // 입력 검증
      try {
        validateDateString(date)
      } catch (validationError) {
        logger.warn("Invalid date format", {
          date,
          error: validationError instanceof Error ? validationError.message : String(validationError),
        })
        return NextResponse.json({ error: "Invalid date format (expected YYYY-MM-DD)" }, { status: 400 })
      }

      const result = await getDailyStats(date)
      if (result.error) {
        return NextResponse.json({ error: result.error.message }, { status: 500 })
      }
      
      const response = NextResponse.json({ data: result.data })
      response.headers.set("X-Cache", "MISS")
      response.headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=60")
      
      return response
    }

    return NextResponse.json({ error: "toolId or date parameter required" }, { status: 400 })
  } catch (error) {
    logger.error("Stats API error", error)
    const safeError = createSafeErrorResponse(error)
    return NextResponse.json({ error: safeError.message, requestId: safeError.requestId }, { status: 500 })
  }
}

