/**
 * Cloudflare D1 Batch Operations
 * 여러 쿼리를 배치로 실행하여 성능 최적화
 */

import { getD1Database, type D1Database, type D1PreparedStatement, getCachedStatement } from "./d1-client"
import { logger } from "@/lib/logger"
import { withCircuitBreaker } from "./circuit-breaker"
import { retryD1Operation } from "./retry-d1"
import { executeWithTimeout } from "./timeout"

export interface BatchOperation {
  query: string
  params?: unknown[]
}

/**
 * 배치 쿼리 실행
 * 여러 쿼리를 한 번에 실행하여 네트워크 왕복 횟수 감소
 */
export async function executeBatch<T = unknown>(
  operations: BatchOperation[]
): Promise<{ results: T[][]; errors: Error[] }> {
  const db = getD1Database()

  if (!db) {
    const error = new Error("Database not available in this environment")
    logger.error("Batch execution failed", error)
    return {
      results: [],
      errors: operations.map(() => error),
    }
  }

  try {
    // Circuit Breaker, 재시도, 타임아웃으로 배치 실행
    const batchResults = await executeWithTimeout(
      () =>
        withCircuitBreaker(() =>
          retryD1Operation(async () => {
            // Prepared statements 생성 (캐시된 statement 재사용)
            const statements: D1PreparedStatement[] = operations.map((op) => {
              // 캐시된 statement 사용 (성능 최적화)
              let stmt = getCachedStatement(op.query, db)
              if (op.params && op.params.length > 0) {
                stmt = stmt.bind(...op.params)
              }
              return stmt
            })

            // 배치 실행
            return await db.batch<T>(statements)
          })
        ),
      60000 // 배치 작업은 60초 타임아웃 (여러 쿼리 실행)
    )

    // 결과 및 에러 분리
    const results: T[][] = []
    const errors: Error[] = []

    batchResults.forEach((result, index) => {
      if (result.success) {
        results.push(result.results || [])
        errors.push(null as unknown as Error)
      } else {
        const error = new Error(`Batch operation ${index} failed`)
        logger.error("Batch operation failed", error, {
          query: operations[index].query,
          params: operations[index].params?.length || 0,
        })
        results.push([])
        errors.push(error)
      }
    })

    return { results, errors }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Batch execution failed")
    logger.error("Batch execution error", dbError, { operationCount: operations.length })
    return {
      results: [],
      errors: operations.map(() => dbError),
    }
  }
}

/**
 * 안전한 배치 실행 (에러가 있어도 계속 진행)
 */
export async function safeBatchExecute<T = unknown>(
  operations: BatchOperation[]
): Promise<{ results: T[][]; successCount: number; errorCount: number }> {
  const { results, errors } = await executeBatch<T>(operations)

  const successCount = errors.filter((e) => !e).length
  const errorCount = errors.filter((e) => e).length

  return {
    results,
    successCount,
    errorCount,
  }
}

