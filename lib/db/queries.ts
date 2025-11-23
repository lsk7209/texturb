/**
 * Cloudflare D1 데이터베이스 쿼리 함수들
 * 도구 사용 통계 및 세션 관리를 위한 쿼리
 */

import { safeQuery, safeExecute, type D1Database } from "./d1-client"
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
    const userAgent = params.userAgent ? sanitizeInput(params.userAgent).substring(0, 500) : null // 최대 길이 제한
    const referrer = params.referrer ? sanitizeInput(params.referrer).substring(0, 500) : null

    return safeExecute(
      `
      INSERT INTO tool_usage (tool_id, tool_slug, user_session_id, user_agent, referrer)
      VALUES (?, ?, ?, ?, ?)
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
      count: number
      unique_sessions: number
      last_used: string
    }>(
      `
      SELECT 
        COUNT(*) as count,
        COUNT(DISTINCT user_session_id) as unique_sessions,
        MAX(created_at) as last_used
      FROM tool_usage
      WHERE tool_id = ?
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
      SELECT date, total_usage, unique_sessions, top_tools
      FROM daily_stats
      WHERE date = ?
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
 * Race condition 방지를 위해 재시도 로직 포함
 */
export async function upsertSession(params: {
  sessionId: string
  userAgent?: string
  referrer?: string
}): Promise<{ success: boolean; error: Error | null }> {
  // 입력 검증
  try {
    const sessionId = validateId(params.sessionId)
    const userAgent = params.userAgent ? sanitizeInput(params.userAgent).substring(0, 500) : null
    const referrer = params.referrer ? sanitizeInput(params.referrer).substring(0, 500) : null

    // ON CONFLICT를 사용하되, 재시도로 동시성 문제 해결
    return safeExecute(
      `
      INSERT INTO sessions (id, user_agent, referrer, last_accessed, tool_count)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, 1)
      ON CONFLICT(id) DO UPDATE SET
        last_accessed = CURRENT_TIMESTAMP,
        tool_count = tool_count + 1
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
 * 오래된 세션 정리 (30일 이상)
 */
export async function cleanupOldSessions(): Promise<{ success: boolean; error: Error | null }> {
  return safeExecute(
    `
    DELETE FROM sessions
    WHERE last_accessed < datetime('now', '-30 days')
  `
  )
}

/**
 * 일일 통계 집계
 */
export async function aggregateDailyStats(date: string): Promise<{ success: boolean; error: Error | null }> {
  // 입력 검증
  let validatedDate: string
  try {
    validatedDate = validateDateString(date)
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Input validation failed"),
    }
  }

  // 하루 동안의 통계 집계
  const statsResult = await safeQuery<{
    total_usage: number
    unique_sessions: number
    top_tools: string
  }>(
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
  `,
    [validatedDate]
  )

  if (statsResult.error || !statsResult.data || statsResult.data.length === 0) {
    return { success: false, error: statsResult.error || new Error("Failed to aggregate stats") }
  }

  const stats = statsResult.data[0]

  // 일일 통계 저장 또는 업데이트
  return safeExecute(
    `
    INSERT INTO daily_stats (date, total_usage, unique_sessions, top_tools, updated_at)
    VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(date) DO UPDATE SET
      total_usage = ?,
      unique_sessions = ?,
      top_tools = ?,
      updated_at = CURRENT_TIMESTAMP
  `,
    [
      validatedDate,
      stats.total_usage,
      stats.unique_sessions,
      stats.top_tools,
      stats.total_usage,
      stats.unique_sessions,
      stats.top_tools,
    ]
  )
}

