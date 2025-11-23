/**
 * Vercel Postgres 데이터베이스 클라이언트
 * Vercel Postgres를 사용하기 위한 유틸리티 함수들
 * 연결 풀링 및 성능 최적화 포함
 * 
 * 일반 문자열 쿼리($1, $2 형식)를 지원하기 위해 postgres 패키지 사용
 */

import { logger } from "@/lib/logger"
import { getPostgresClient } from "./postgres-pool"

/**
 * PostgreSQL 쿼리 결과 타입
 */
export interface PostgresResult<T = unknown> {
  rows: T[]
  rowCount: number
}

/**
 * 안전한 데이터베이스 쿼리 실행 헬퍼
 */
export async function safeQuery<T = unknown>(
  query: string,
  params: unknown[] = []
): Promise<{ data: T[] | null; error: Error | null }> {
  try {
    // postgres 패키지를 사용하여 일반 문자열 쿼리 실행
    // $1, $2 형식의 파라미터화된 쿼리 지원
    const client = getPostgresClient()
    if (!client) {
      throw new Error("Postgres client not available")
    }
    
    const result = await client.unsafe(query, params) as unknown as { rows: T[]; count: number }
    
    return {
      data: Array.isArray(result) ? result : (result.rows || []),
      error: null,
    }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Database query failed")
    logger.error("Database query failed", dbError, {
      query: query.substring(0, 100), // 보안: 쿼리 일부만 로깅
      params: params.length,
    })
    return {
      data: null,
      error: dbError,
    }
  }
}

/**
 * 안전한 데이터베이스 실행 헬퍼 (INSERT, UPDATE, DELETE)
 */
export async function safeExecute(
  query: string,
  params: unknown[] = []
): Promise<{ success: boolean; error: Error | null; rowCount?: number }> {
  try {
    // postgres 패키지를 사용하여 일반 문자열 쿼리 실행
    const client = getPostgresClient()
    if (!client) {
      throw new Error("Postgres client not available")
    }
    
    // postgres 패키지는 query 메서드로 파라미터화된 쿼리 실행
    const result = await (client as any).query(query, params) as { count: number }[]
    
    return {
      success: true,
      error: null,
      rowCount: Array.isArray(result) ? result.length : (result as any).count || 0,
    }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Database execution failed")
    logger.error("Database execution failed", dbError, {
      query: query.substring(0, 100), // 보안: 쿼리 일부만 로깅
      params: params.length,
    })
    return {
      success: false,
      error: dbError,
    }
  }
}

/**
 * 배치 실행 헬퍼
 */
export async function safeBatchExecute(
  operations: Array<{ query: string; params: unknown[] }>
): Promise<{ successCount: number; errorCount: number }> {
  let successCount = 0
  let errorCount = 0

  // PostgreSQL은 트랜잭션으로 배치 실행
  try {
    const client = getPostgresClient()
    if (!client) {
      throw new Error("Postgres client not available")
    }
    
    // postgres 패키지의 트랜잭션 사용
    await (client as any).begin(async (sql: any) => {
      for (const op of operations) {
        try {
          await sql.query(op.query, op.params)
          successCount++
        } catch (error) {
          errorCount++
          logger.warn("Batch operation failed", {
            query: op.query.substring(0, 100),
            error: error instanceof Error ? error.message : String(error),
          })
          // 트랜잭션 롤백을 위해 에러를 다시 throw
          throw error
        }
      }
    })
  } catch (error) {
    // 트랜잭션 실패 시 모든 작업 롤백
    logger.error("Batch transaction failed", error instanceof Error ? error : new Error(String(error)))
  }

  return { successCount, errorCount }
}

/**
 * 단일 행 조회 헬퍼
 */
export async function safeQueryFirst<T = unknown>(
  query: string,
  params: unknown[] = []
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const client = getPostgresClient()
    if (!client) {
      throw new Error("Postgres client not available")
    }
    
    // postgres 패키지는 query 메서드로 파라미터화된 쿼리 실행
    const result = await (client as any).query(query, params) as T[]
    
    return {
      data: Array.isArray(result) && result.length > 0 ? result[0] : null,
      error: null,
    }
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Database query failed")
    logger.error("Database query failed", dbError, {
      query: query.substring(0, 100),
      params: params.length,
    })
    return {
      data: null,
      error: dbError,
    }
  }
}

/**
 * PostgreSQL 데이터베이스 연결 확인
 */
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    const client = getPostgresClient()
    if (!client) {
      return false
    }
    await (client as any).query("SELECT 1")
    return true
  } catch (error) {
    logger.error("Database connection check failed", error instanceof Error ? error : new Error(String(error)))
    return false
  }
}

