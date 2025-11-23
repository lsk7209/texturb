/**
 * API Route: 도구 사용 기록
 * Vercel Postgres 데이터베이스에 도구 사용을 기록하는 API
 */

import { NextResponse } from "next/server"
import { batchLogUsage } from "@/lib/db/queries-vercel"
import { logger } from "@/lib/logger"
import { validateId } from "@/lib/db/validation"
import { createSafeErrorResponse } from "@/lib/errors/sanitize"

// Vercel Postgres는 Node.js Runtime에서 더 안정적으로 동작
// Edge Runtime에서는 제한이 있을 수 있으므로 Node.js Runtime 사용
export const runtime = "nodejs" // Vercel Node.js Runtime 사용

// POST 요청은 캐싱하지 않음
export const dynamic = "force-dynamic" // 동적 렌더링
export const fetchCache = "default-no-store" // 캐시 사용 안 함

export async function POST(request: Request) {
  let toolId: string | undefined
  let toolSlug: string | undefined
  
  try {
    const body = await request.json()
    toolId = body.toolId
    toolSlug = body.toolSlug
    const sessionId = body.sessionId

    // 입력 검증
    if (!toolId || !toolSlug) {
      return NextResponse.json({ error: "toolId and toolSlug are required" }, { status: 400 })
    }

    // ID 형식 검증
    try {
      validateId(toolId)
      validateId(toolSlug)
      if (sessionId) {
        validateId(sessionId)
      }
    } catch (validationError) {
      logger.warn("Invalid input format", {
        toolId,
        toolSlug,
        error: validationError instanceof Error ? validationError.message : String(validationError),
      })
      return NextResponse.json(
        { error: "Invalid input format" },
        { status: 400 }
      )
    }

    const userAgent = request.headers.get("user-agent") || undefined
    const referrer = request.headers.get("referer") || undefined

    // 배치 실행으로 최적화: 세션 업데이트와 사용 기록을 동시에 실행
    if (sessionId) {
      const batchResult = await batchLogUsage({
        toolId,
        toolSlug,
        sessionId,
        userAgent,
        referrer,
      })
      
      if (batchResult.errorCount > 0) {
        logger.warn("Some batch operations failed", { 
          successCount: batchResult.successCount, 
          errorCount: batchResult.errorCount 
        })
      }

      return NextResponse.json({ 
        success: true,
        batchResults: batchResult.successCount 
      })
    }

    // 세션이 없는 경우 사용 기록만 저장
    const { logToolUsage } = await import("@/lib/db/queries-vercel")
    const result = await logToolUsage({
      toolId,
      toolSlug,
      sessionId,
      userAgent,
      referrer,
    })

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Usage API error", error, { toolId, toolSlug })
    const safeError = createSafeErrorResponse(error)
    return NextResponse.json({ error: safeError.message, requestId: safeError.requestId }, { status: 500 })
  }
}

