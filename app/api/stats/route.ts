/**
 * API Route: 통계 조회
 * Cloudflare D1 데이터베이스에서 통계를 조회하는 API
 */

import { NextResponse } from "next/server"
import { getToolStats, getDailyStats } from "@/lib/db/queries"
import { logger } from "@/lib/logger"
import { validateId, validateDateString } from "@/lib/db/validation"
import { getRequestContext } from "@cloudflare/next-on-pages"
import { createSafeErrorResponse } from "@/lib/errors/sanitize"
import { safePromise } from "@/lib/utils/promise-handler"

export const runtime = "edge" // Cloudflare Edge Runtime 사용

// 통계 조회는 캐싱 가능 (5분)
export const revalidate = 300

export async function GET(request: Request) {
  try {
    const { ctx } = getRequestContext()
    
    // Cloudflare 캐시 확인 (Edge에서만 동작)
    // 안전한 Promise 실행으로 에러 처리
    const cacheKey = new Request(request.url, request)
    // Cloudflare Cache API는 런타임에 사용 가능하지만 타입 정의가 없을 수 있음
    const cache = typeof caches !== "undefined" ? (caches as { default?: Cache }).default : undefined
    
    // 캐시가 사용 가능한 경우에만 확인
    let cachedResponse: Response | null = null
    if (cache) {
      const result = await safePromise(cache.match(cacheKey), "cache.match")
      cachedResponse = result.data || null
    }
    
    if (cachedResponse) {
      return new Response(cachedResponse.body, {
        status: cachedResponse.status,
        headers: {
          ...Object.fromEntries(cachedResponse.headers),
          "X-Cache": "HIT",
        },
      })
    }

    const { searchParams } = new URL(request.url)
    const toolId = searchParams.get("toolId")
    const date = searchParams.get("date")

    // 도구별 통계 조회
    if (toolId) {
      // 입력 검증
      try {
        validateId(toolId)
      } catch (validationError) {
        logger.warn("Invalid toolId format", validationError, { toolId })
        return NextResponse.json({ error: "Invalid toolId format" }, { status: 400 })
      }

      const result = await getToolStats(toolId)
      if (result.error) {
        return NextResponse.json({ error: result.error.message }, { status: 500 })
      }
      
      const response = NextResponse.json({ data: result.data })
      response.headers.set("X-Cache", "MISS")
      
      // Cloudflare 캐시에 저장 (5분) - 비동기로 실행 (에러 무시)
      if (ctx?.waitUntil) {
        ctx.waitUntil(
          safePromise(cache.put(cacheKey, response.clone()), "cache.put").catch(() => {
            // 캐시 저장 실패는 무시 (응답은 정상 반환)
          })
        )
      }
      
      return response
    }

    // 일일 통계 조회
    if (date) {
      // 입력 검증
      try {
        validateDateString(date)
      } catch (validationError) {
        logger.warn("Invalid date format", validationError, { date })
        return NextResponse.json({ error: "Invalid date format (expected YYYY-MM-DD)" }, { status: 400 })
      }

      const result = await getDailyStats(date)
      if (result.error) {
        return NextResponse.json({ error: result.error.message }, { status: 500 })
      }
      
      const response = NextResponse.json({ data: result.data })
      response.headers.set("X-Cache", "MISS")
      
      // Cloudflare 캐시에 저장 (5분) - 비동기로 실행 (에러 무시)
      if (cache && ctx?.waitUntil) {
        ctx.waitUntil(
          safePromise(cache.put(cacheKey, response.clone()), "cache.put").catch(() => {
            // 캐시 저장 실패는 무시 (응답은 정상 반환)
          })
        )
      }
      
      return response
    }

    return NextResponse.json({ error: "toolId or date parameter required" }, { status: 400 })
  } catch (error) {
    logger.error("Stats API error", error)
    const safeError = createSafeErrorResponse(error)
    return NextResponse.json({ error: safeError.message, requestId: safeError.requestId }, { status: 500 })
  }
}

