/**
 * D1 동시성 제어
 * Race condition 방지 및 동시성 최적화
 */

import { getD1Database } from "./d1-client"
import { logger } from "@/lib/logger"
import { retryD1Operation } from "./retry-d1"

/**
 * Optimistic Locking을 사용한 안전한 업데이트
 * 버전 컬럼을 사용하여 동시 수정 감지
 */
export async function safeUpdateWithVersion<T>(
  table: string,
  id: string | number,
  updates: Record<string, unknown>,
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
    // 현재 버전 조회
    const currentResult = await db
      .prepare(`SELECT ${versionColumn} FROM ${table} WHERE ${idColumn} = ?`)
      .bind(id)
      .first<{ [key: string]: number }>()

    if (!currentResult) {
      return {
        success: false,
        error: new Error("Record not found"),
      }
    }

    const currentVersion = currentResult[versionColumn]

    // 업데이트 쿼리 생성
    const setClause = Object.keys(updates)
      .map((key) => `${key} = ?`)
      .join(", ")
    const values = Object.values(updates)

    const updateQuery = `
      UPDATE ${table}
      SET ${setClause}, ${versionColumn} = ${versionColumn} + 1
      WHERE ${idColumn} = ? AND ${versionColumn} = ?
    `

    const result = await retryD1Operation(
      async () => {
        return await db.prepare(updateQuery).bind(...values, id, currentVersion).run()
      },
      {
        maxRetries: 3,
        baseDelay: 50,
      }
    )

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
    const dbError = error instanceof Error ? error : new Error("Update failed")
    logger.error("Safe update with version failed", dbError, { table, id })
    return {
      success: false,
      error: dbError,
    }
  }
}

/**
 * 안전한 UPSERT (Race condition 방지)
 * ON CONFLICT를 사용하되, 재시도 로직으로 동시성 문제 해결
 */
export async function safeUpsert(
  table: string,
  insertData: Record<string, unknown>,
  conflictColumns: string[],
  updateData: Record<string, unknown>
): Promise<{ success: boolean; error: Error | null }> {
  const db = getD1Database()

  if (!db) {
    return {
      success: false,
      error: new Error("Database not available in this environment"),
    }
  }

  try {
    const insertColumns = Object.keys(insertData)
    const insertValues = Object.values(insertData)
    const placeholders = insertColumns.map(() => "?").join(", ")

    const updateClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ")
    const updateValues = Object.values(updateData)

    const conflictClause = conflictColumns.join(", ")

    const query = `
      INSERT INTO ${table} (${insertColumns.join(", ")})
      VALUES (${placeholders})
      ON CONFLICT(${conflictClause}) DO UPDATE SET
        ${updateClause}
    `

    const result = await retryD1Operation(
      async () => {
        return await db.prepare(query).bind(...insertValues, ...updateValues).run()
      },
      {
        maxRetries: 3,
        baseDelay: 50,
      }
    )

    return {
      success: result.success,
      error: null,
    }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Upsert failed")
    logger.error("Safe upsert failed", dbError, { table, conflictColumns })
    return {
      success: false,
      error: dbError,
    }
  }
}

/**
 * 배치 작업에서 동시성 제어
 * 순차 실행으로 race condition 방지
 */
export async function safeSequentialBatch<T>(
  operations: Array<{ query: string; params?: unknown[] }>,
  options: { delayBetweenOps?: number } = {}
): Promise<{ results: T[][]; errors: Error[] }> {
  const { delayBetweenOps = 10 } = options
  const results: T[][] = []
  const errors: Error[] = []

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i]

    try {
      const db = getD1Database()
      if (!db) {
        throw new Error("Database not available")
      }

      let stmt = db.prepare(op.query)
      if (op.params && op.params.length > 0) {
        stmt = stmt.bind(...op.params)
      }

      const result = await stmt.all<T>()

      if (result.success) {
        results.push(result.results || [])
        errors.push(null as unknown as Error)
      } else {
        const error = new Error(`Operation ${i} failed`)
        errors.push(error)
        results.push([])
      }

      // 다음 작업 전 짧은 지연 (동시성 문제 방지)
      if (i < operations.length - 1 && delayBetweenOps > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayBetweenOps))
      }
    } catch (error) {
      const dbError = error instanceof Error ? error : new Error(`Operation ${i} failed`)
      errors.push(dbError)
      results.push([])
    }
  }

  return { results, errors }
}

