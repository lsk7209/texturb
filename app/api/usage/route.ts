/**
 * API Route: 도구 사용 기록
 * Cloudflare D1 데이터베이스에 도구 사용을 기록하는 API
 */

import { NextResponse } from "next/server"
import { logToolUsage, upsertSession } from "@/lib/db/queries"
import { safeBatchExecute } from "@/lib/db/batch"
import { logger } from "@/lib/logger"
import { getD1Database } from "@/lib/db/d1-client"
import { validateId } from "@/lib/db/validation"
import { createSafeErrorResponse } from "@/lib/errors/sanitize"

export const runtime = "edge" // Cloudflare Edge Runtime 사용

// Edge runtime에서 캐싱 (최대 1분)
export const revalidate = 60

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

    // getD1Database를 사용하여 D1 접근 (Edge runtime 최적화)
    // getD1Database는 내부적으로 getRequestContext를 사용하며 타입 안전성을 보장합니다
    const db = getD1Database()

    // 배치 실행으로 최적화: 세션 업데이트와 사용 기록을 동시에 실행
    if (db && sessionId) {
      // 직접 배치 실행으로 성능 최적화
      // 입력 검증된 값 사용
      const validatedToolId = validateId(toolId)
      const validatedToolSlug = validateId(toolSlug)
      const validatedSessionId = validateId(sessionId)

      const operations = [
        {
          query: `
            INSERT INTO sessions (id, user_agent, referrer, last_accessed)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(id) DO UPDATE SET
              last_accessed = CURRENT_TIMESTAMP,
              tool_count = tool_count + 1
          `,
          params: [validatedSessionId, userAgent || null, referrer || null],
        },
        {
          query: `
            INSERT INTO tool_usage (tool_id, tool_slug, user_session_id, user_agent, referrer)
            VALUES (?, ?, ?, ?, ?)
          `,
          params: [validatedToolId, validatedToolSlug, validatedSessionId, userAgent || null, referrer || null],
        },
      ]

      const batchResult = await safeBatchExecute(operations)
      
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

    // Fallback: 순차 실행 (배치가 불가능한 경우)
    if (sessionId) {
      await upsertSession({
        sessionId,
        userAgent,
        referrer,
      })
    }

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

