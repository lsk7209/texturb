/**
 * Cloudflare D1 데이터베이스 클라이언트
 * Cloudflare D1을 사용하기 위한 유틸리티 함수들
 */

import { logger } from "@/lib/logger"
import { measureQuery } from "./performance"
import { retryD1Query } from "./retry-d1"
import { withCircuitBreaker } from "./circuit-breaker"
import { executeWithTimeout } from "./timeout"
import { getRequestContext } from "@cloudflare/next-on-pages"

export interface D1Database {
  prepare(query: string): D1PreparedStatement
  exec(query: string): Promise<D1ExecResult>
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  first<T = unknown>(colName?: string): Promise<T | null>
  run(): Promise<D1Result>
  all<T = unknown>(): Promise<D1Result<T>>
  raw<T = unknown>(): Promise<T[]>
}

export interface D1Result<T = unknown> {
  results: T[]
  success: boolean
  meta: {
    duration: number
    rows_read: number
    rows_written: number
    last_row_id: number
    changed_db: boolean
  }
}

export interface D1ExecResult {
  count: number
  duration: number
}

/**
 * 서버 사이드에서 D1 데이터베이스 인스턴스를 가져옵니다
 * @cloudflare/next-on-pages의 getRequestContext를 우선 사용
 */
export function getD1Database(): D1Database | null {
  // 1. @cloudflare/next-on-pages의 getRequestContext 우선 사용 (권장)
  try {
    const { env } = getRequestContext()
    if (env?.DB) {
      return env.DB as D1Database
    }
  } catch (error) {
    // getRequestContext가 사용 불가능한 경우 (함수 외부 호출 등)
    logger.debug("getRequestContext not available, trying fallback", { error })
  }

  // 2. Cloudflare Workers 환경 (env 바인딩)
  if (typeof globalThis !== "undefined") {
    const env = (globalThis as { env?: { DB?: D1Database } }).env
    if (env?.DB) {
      return env.DB
    }
  }

  // 3. Process 환경 변수 (개발 환경)
  if (typeof process !== "undefined" && process.env.DB) {
    return process.env.DB as unknown as D1Database
  }

  // 로깅은 성능에 영향을 줄 수 있으므로 개발 환경에서만
  if (process.env.NODE_ENV === "development") {
    logger.warn("D1 Database binding not found", undefined, {
      environment: typeof process !== "undefined" ? "pages" : "workers",
    })
  }

  return null
}

/**
 * 안전한 데이터베이스 쿼리 실행 헬퍼
 */
export async function safeQuery<T = unknown>(
  query: string,
  params: unknown[] = []
): Promise<{ data: T[] | null; error: Error | null }> {
  const db = getD1Database()

  if (!db) {
    return {
      data: null,
      error: new Error("Database not available in this environment"),
    }
  }

  try {
    const { result, duration } = await measureQuery(
      () =>
        executeWithTimeout(
          () =>
            withCircuitBreaker(() =>
              retryD1Query(async () => {
                // 캐시된 statement 사용 (성능 최적화)
                let statement = getCachedStatement(query, db)
                if (params.length > 0) {
                  statement = statement.bind(...params)
                }
                return await statement.all<T>()
              })
            ),
          30000 // 30초 타임아웃
        ),
      query
    )

    if (!result.success) {
      logger.warn("Database query returned unsuccessful result", {
        query: query.substring(0, 100), // 보안: 쿼리 일부만 로깅
        params: params.length,
        duration: `${duration}ms`,
      })
    }

    return {
      data: result.results,
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
 * D1 데이터베이스 연결 풀링 및 최적화를 위한 헬퍼
 * Prepared statement 재사용을 위한 캐시
 * 
 * 메모리 관리: 최대 100개의 statement만 캐시 (LRU 방식)
 * 
 * @deprecated getPooledStatement 사용 권장 (더 나은 쿼리 정규화)
 */
const MAX_CACHE_SIZE = 100
const statementCache = new Map<string, D1PreparedStatement>()

/**
 * 캐시된 prepared statement 가져오기
 * LRU 방식으로 메모리 사용량 제한
 * 
 * @deprecated getPooledStatement 사용 권장
 */
export function getCachedStatement(query: string, db: D1Database): D1PreparedStatement {
  const cacheKey = query.trim()
  
  // 캐시에 있으면 사용하고 맨 뒤로 이동 (LRU)
  if (statementCache.has(cacheKey)) {
    const stmt = statementCache.get(cacheKey)!
    // LRU: 기존 항목을 삭제하고 다시 추가하여 최신으로 만듦
    statementCache.delete(cacheKey)
    statementCache.set(cacheKey, stmt)
    return stmt
  }
  
  // 캐시 크기 제한: 최대 크기 초과 시 가장 오래된 항목 제거
  if (statementCache.size >= MAX_CACHE_SIZE) {
    const firstKey = statementCache.keys().next().value
    if (firstKey) {
      statementCache.delete(firstKey)
    }
  }
  
  // 새 statement 생성 및 캐시
  const stmt = db.prepare(query)
  statementCache.set(cacheKey, stmt)
  
  return stmt
}

/**
 * Statement 캐시 초기화 (테스트 또는 메모리 관리용)
 */
export function clearStatementCache(): void {
  statementCache.clear()
}

/**
 * 현재 캐시된 statement 개수 반환
 */
export function getStatementCacheSize(): number {
  return statementCache.size
}

/**
 * 안전한 데이터베이스 실행 헬퍼 (INSERT, UPDATE, DELETE)
 */
export async function safeExecute(
  query: string,
  params: unknown[] = []
): Promise<{ success: boolean; error: Error | null; meta?: D1Result["meta"] }> {
  const db = getD1Database()

  if (!db) {
    return {
      success: false,
      error: new Error("Database not available in this environment"),
    }
  }

  try {
    const result = await executeWithTimeout(
      () =>
        withCircuitBreaker(() =>
          retryD1Query(async () => {
            // 캐시된 statement 사용 (성능 최적화)
            let statement = getCachedStatement(query, db)
            if (params.length > 0) {
              statement = statement.bind(...params)
            }
            return await statement.run()
          })
        ),
      30000 // 30초 타임아웃
    )

    if (!result.success) {
      logger.warn("Database execution returned unsuccessful result", {
        query: query.substring(0, 100), // 보안: 쿼리 일부만 로깅
        params: params.length,
      })
    }

    return {
      success: result.success,
      error: null,
      meta: result.meta,
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

