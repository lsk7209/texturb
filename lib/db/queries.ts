/**
 * Turso(libsql) 데이터베이스 쿼리 함수들
 * SQLite 문법 사용 (? 파라미터, CURRENT_TIMESTAMP)
 */

import { safeQuery, safeExecute, safeBatch } from "./turso-client";
import { validateId, validateDateString, sanitizeInput } from "./validation";

export async function logToolUsage(params: {
  toolId: string;
  toolSlug: string;
  sessionId?: string;
  userAgent?: string;
  referrer?: string;
}): Promise<{ success: boolean; error: Error | null }> {
  try {
    const toolId = validateId(params.toolId);
    const toolSlug = validateId(params.toolSlug);
    const sessionId = params.sessionId ? validateId(params.sessionId) : null;
    const userAgent = params.userAgent
      ? sanitizeInput(params.userAgent).substring(0, 500)
      : null;
    const referrer = params.referrer
      ? sanitizeInput(params.referrer).substring(0, 500)
      : null;

    return safeExecute(
      "INSERT INTO tool_usage (tool_id, tool_slug, user_session_id, user_agent, referrer) VALUES (?, ?, ?, ?, ?)",
      [toolId, toolSlug, sessionId, userAgent, referrer],
    );
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error : new Error("Input validation failed"),
    };
  }
}

export async function getToolStats(toolId: string) {
  try {
    const validatedId = validateId(toolId);
    return safeQuery<{
      tool_id: string;
      tool_slug: string;
      usage_count: number;
      unique_sessions: number;
      last_used: string;
    }>(
      `SELECT tool_id, tool_slug,
        COUNT(*) as usage_count,
        COUNT(DISTINCT user_session_id) as unique_sessions,
        MAX(created_at) as last_used
       FROM tool_usage WHERE tool_id = ? GROUP BY tool_id, tool_slug`,
      [validatedId],
    );
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error : new Error("Input validation failed"),
    };
  }
}

export async function getDailyStats(date: string) {
  try {
    const validatedDate = validateDateString(date);
    return safeQuery<{
      date: string;
      total_usage: number;
      unique_sessions: number;
      top_tools: string;
    }>(
      `SELECT DATE(created_at) as date,
        COUNT(*) as total_usage,
        COUNT(DISTINCT user_session_id) as unique_sessions,
        json_group_array(json_object('tool_id', tool_id, 'count', cnt)) as top_tools
       FROM (
         SELECT created_at, user_session_id, tool_id, COUNT(*) as cnt
         FROM tool_usage
         WHERE DATE(created_at) = ?
         GROUP BY created_at, user_session_id, tool_id
         ORDER BY cnt DESC LIMIT 10
       ) GROUP BY DATE(created_at)`,
      [validatedDate],
    );
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error : new Error("Input validation failed"),
    };
  }
}

export async function upsertSession(params: {
  sessionId: string;
  userAgent?: string;
  referrer?: string;
}): Promise<{ success: boolean; error: Error | null }> {
  try {
    const sessionId = validateId(params.sessionId);
    const userAgent = params.userAgent
      ? sanitizeInput(params.userAgent).substring(0, 500)
      : null;
    const referrer = params.referrer
      ? sanitizeInput(params.referrer).substring(0, 500)
      : null;

    return safeExecute(
      `INSERT INTO sessions (id, user_agent, referrer, last_accessed, tool_count) VALUES (?, ?, ?, CURRENT_TIMESTAMP, 1)
       ON CONFLICT (id) DO UPDATE SET last_accessed = CURRENT_TIMESTAMP, tool_count = tool_count + 1`,
      [sessionId, userAgent, referrer],
    );
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error : new Error("Input validation failed"),
    };
  }
}

export async function batchLogUsage(params: {
  toolId: string;
  toolSlug: string;
  sessionId: string;
  userAgent?: string;
  referrer?: string;
}): Promise<{ successCount: number; errorCount: number }> {
  try {
    const toolId = validateId(params.toolId);
    const toolSlug = validateId(params.toolSlug);
    const sessionId = validateId(params.sessionId);
    const userAgent = params.userAgent
      ? sanitizeInput(params.userAgent).substring(0, 500)
      : null;
    const referrer = params.referrer
      ? sanitizeInput(params.referrer).substring(0, 500)
      : null;

    return safeBatch([
      {
        sql: `INSERT INTO sessions (id, user_agent, referrer, last_accessed, tool_count) VALUES (?, ?, ?, CURRENT_TIMESTAMP, 1)
              ON CONFLICT (id) DO UPDATE SET last_accessed = CURRENT_TIMESTAMP, tool_count = tool_count + 1`,
        args: [sessionId, userAgent, referrer],
      },
      {
        sql: "INSERT INTO tool_usage (tool_id, tool_slug, user_session_id, user_agent, referrer) VALUES (?, ?, ?, ?, ?)",
        args: [toolId, toolSlug, sessionId, userAgent, referrer],
      },
    ]);
  } catch {
    return { successCount: 0, errorCount: 2 };
  }
}
