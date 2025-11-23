/**
 * Vercel Postgres 데이터베이스 쿼리 함수들
 * 도구 사용 통계 및 세션 관리를 위한 쿼리
 * PostgreSQL 문법으로 작성됨
 */

import { safeQuery, safeExecute, safeQueryFirst, safeBatchExecute } from "./postgres-client"
import { validateId, validateDateString, sanitizeInput } from "./validation"

/**
 * 도구 사용 기록 저장
 */
export async function logToolUsage(params: {
  toolId: string
  toolSlug: string
  sessionId?: string
  userAgent?: string
  referrer?: string
}): Promise<{ success: boolean; error: Error | null }> {
  // 입력 검증
  try {
    const toolId = validateId(params.toolId)
    const toolSlug = validateId(params.toolSlug)
    const sessionId = params.sessionId ? validateId(params.sessionId) : null
    const userAgent = params.userAgent ? sanitizeInput(params.userAgent).substring(0, 500) : null
    const referrer = params.referrer ? sanitizeInput(params.referrer).substring(0, 500) : null

    return safeExecute(
      `
      INSERT INTO tool_usage (tool_id, tool_slug, user_session_id, user_agent, referrer, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
    `,
      [toolId, toolSlug, sessionId, userAgent, referrer]
    )
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Input validation failed"),
    }
  }
}

/**
 * 도구별 사용 통계 조회
 */
export async function getToolStats(toolId: string) {
  // 입력 검증
  try {
    const validatedToolId = validateId(toolId)

    return safeQuery<{
      tool_id: string
      tool_slug: string
      usage_count: number
      unique_sessions: number
      last_used: string
    }>(
      `
      SELECT 
        tool_id,
        tool_slug,
        COUNT(*) as usage_count,
        COUNT(DISTINCT user_session_id) as unique_sessions,
        MAX(created_at) as last_used
      FROM tool_usage
      WHERE tool_id = $1
      GROUP BY tool_id, tool_slug
    `,
      [validatedToolId]
    )
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error("Input validation failed"),
    }
  }
}

/**
 * 일일 통계 조회
 */
export async function getDailyStats(date: string) {
  // 입력 검증
  try {
    const validatedDate = validateDateString(date)

    return safeQuery<{
      date: string
      total_usage: number
      unique_sessions: number
      top_tools: string
    }>(
      `
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as total_usage,
        COUNT(DISTINCT user_session_id) as unique_sessions,
        json_agg(json_build_object('tool_id', tool_id, 'count', cnt))::text as top_tools
      FROM (
        SELECT 
          created_at,
          user_session_id,
          tool_id,
          COUNT(*) as cnt
        FROM tool_usage
        WHERE DATE(created_at) = $1
        GROUP BY created_at, user_session_id, tool_id
        ORDER BY cnt DESC
        LIMIT 10
      ) subquery
      GROUP BY DATE(created_at)
    `,
      [validatedDate]
    )
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error("Input validation failed"),
    }
  }
}

/**
 * 세션 생성 또는 업데이트
 */
export async function upsertSession(params: {
  sessionId: string
  userAgent?: string
  referrer?: string
}): Promise<{ success: boolean; error: Error | null }> {
  try {
    const sessionId = validateId(params.sessionId)
    const userAgent = params.userAgent ? sanitizeInput(params.userAgent).substring(0, 500) : null
    const referrer = params.referrer ? sanitizeInput(params.referrer).substring(0, 500) : null

    return safeExecute(
      `
      INSERT INTO sessions (id, user_agent, referrer, last_accessed, tool_count)
      VALUES ($1, $2, $3, NOW(), 1)
      ON CONFLICT (id) DO UPDATE SET
        last_accessed = NOW(),
        tool_count = sessions.tool_count + 1
    `,
      [sessionId, userAgent, referrer]
    )
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Input validation failed"),
    }
  }
}

/**
 * 배치로 세션 업데이트 및 사용 기록 저장
 */
export async function batchLogUsage(params: {
  toolId: string
  toolSlug: string
  sessionId: string
  userAgent?: string
  referrer?: string
}): Promise<{ successCount: number; errorCount: number }> {
  try {
    const toolId = validateId(params.toolId)
    const toolSlug = validateId(params.toolSlug)
    const sessionId = validateId(params.sessionId)
    const userAgent = params.userAgent ? sanitizeInput(params.userAgent).substring(0, 500) : null
    const referrer = params.referrer ? sanitizeInput(params.referrer).substring(0, 500) : null

    const operations = [
      {
        query: `
          INSERT INTO sessions (id, user_agent, referrer, last_accessed, tool_count)
          VALUES ($1, $2, $3, NOW(), 1)
          ON CONFLICT (id) DO UPDATE SET
            last_accessed = NOW(),
            tool_count = sessions.tool_count + 1
        `,
        params: [sessionId, userAgent, referrer],
      },
      {
        query: `
          INSERT INTO tool_usage (tool_id, tool_slug, user_session_id, user_agent, referrer, created_at)
          VALUES ($1, $2, $3, $4, $5, NOW())
        `,
        params: [toolId, toolSlug, sessionId, userAgent, referrer],
      },
    ]

    return await safeBatchExecute(operations)
  } catch (error) {
    return {
      successCount: 0,
      errorCount: 2,
    }
  }
}

