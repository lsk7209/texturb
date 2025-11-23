/**
 * D1 트랜잭션 및 동시성 제어
 * Race condition 방지를 위한 트랜잭션 헬퍼
 */

import { getD1Database, type D1Database } from "./d1-client"
import { logger } from "@/lib/logger"
import { retryD1Operation } from "./retry-d1"

/**
 * 트랜잭션 실행
 * 여러 쿼리를 원자적으로 실행
 */
export async function executeTransaction<T>(
  operations: Array<{ query: string; params?: unknown[] }>,
  options: { retryOnConflict?: boolean } = {}
): Promise<{ success: boolean; results: T[][]; error: Error | null }> {
  const db = getD1Database()

  if (!db) {
    return {
      success: false,
      results: [],
      error: new Error("Database not available in this environment"),
    }
  }

  const { retryOnConflict = true } = options

  try {
    // D1은 BEGIN TRANSACTION을 지원하지 않지만,
    // 배치 실행으로 원자성을 보장할 수 있습니다
    const statements = operations.map((op) => {
      let stmt = db.prepare(op.query)
      if (op.params && op.params.length > 0) {
        stmt = stmt.bind(...op.params)
      }
      return stmt
    })

    const results = await retryD1Operation(
      async () => {
        return await db.batch<T>(statements)
      },
      {
        maxRetries: retryOnConflict ? 3 : 1,
        baseDelay: 50,
      }
    )

    const success = results.every((r) => r.success)
    const data = results.map((r) => r.results || [])

    if (!success) {
      const failedIndices = results
        .map((r, i) => (!r.success ? i : null))
        .filter((i) => i !== null) as number[]

      logger.warn("Transaction partially failed", undefined, {
        failedOperations: failedIndices,
        totalOperations: operations.length,
      })
    }

    return {
      success,
      results: data,
      error: null,
    }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Transaction failed")
    logger.error("Transaction failed", dbError, {
      operationCount: operations.length,
    })
    return {
      success: false,
      results: [],
      error: dbError,
    }
  }
}

/**
 * Optimistic Locking을 위한 버전 체크
 */
export async function executeWithVersionCheck<T>(
  query: string,
  params: unknown[],
  versionColumn: string = "version",
  idColumn: string = "id"
): Promise<{ success: boolean; error: Error | null; data?: T }> {
  const db = getD1Database()

  if (!db) {
    return {
      success: false,
      error: new Error("Database not available in this environment"),
    }
  }

  try {
    // 버전 체크를 포함한 업데이트
    const updateQuery = `
      UPDATE ${query.split("UPDATE")[1]?.split("SET")[0]?.trim() || "table"}
      SET ${query.split("SET")[1]?.split("WHERE")[0] || ""}, ${versionColumn} = ${versionColumn} + 1
      WHERE ${query.split("WHERE")[1] || ""} AND ${versionColumn} = ?
    `

    const result = await db.prepare(updateQuery).bind(...params).run()

    if (result.meta.rows_written === 0) {
      return {
        success: false,
        error: new Error("Version conflict: data was modified by another transaction"),
      }
    }

    return {
      success: true,
      error: null,
      data: result as unknown as T,
    }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Version check failed")
    logger.error("Version check failed", dbError)
    return {
      success: false,
      error: dbError,
    }
  }
}

