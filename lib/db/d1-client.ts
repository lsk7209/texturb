/**
 * Cloudflare D1 데이터베이스 클라이언트
 * Cloudflare D1을 사용하기 위한 유틸리티 함수들
 */

/**
 * @deprecated Cloudflare D1 클라이언트는 Vercel 마이그레이션으로 더 이상 사용되지 않습니다.
 * Vercel Postgres를 사용하려면 lib/db/postgres-client.ts를 참조하세요.
 */

import { logger } from "@/lib/logger"

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
/**
 * @deprecated Vercel 마이그레이션으로 더 이상 사용되지 않습니다.
 * Vercel Postgres를 사용하려면 lib/db/postgres-client.ts의 함수들을 사용하세요.
 */
export function getD1Database(): D1Database | null {
  // Vercel 환경에서는 D1을 사용하지 않음
  if (process.env.NODE_ENV === "development") {
    logger.debug("D1 Database is deprecated, use Vercel Postgres instead")
  }
  return null
}

/**
 * @deprecated Vercel 마이그레이션으로 더 이상 사용되지 않습니다.
 * Vercel Postgres를 사용하려면 lib/db/postgres-client.ts의 safeQuery를 사용하세요.
 */
export async function safeQuery<T = unknown>(
  query: string,
  params: unknown[] = []
): Promise<{ data: T[] | null; error: Error | null }> {
  // Vercel 환경에서는 D1을 사용하지 않음
  return {
    data: null,
    error: new Error("D1 Database is deprecated. Use Vercel Postgres instead."),
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
 * @deprecated Vercel 마이그레이션으로 더 이상 사용되지 않습니다.
 */
export function getCachedStatement(query: string, db: D1Database): D1PreparedStatement {
  // 더미 구현: Vercel 환경에서는 사용되지 않음
  return db.prepare(query)
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
 * @deprecated Vercel 마이그레이션으로 더 이상 사용되지 않습니다.
 * Vercel Postgres를 사용하려면 lib/db/postgres-client.ts의 safeExecute를 사용하세요.
 */
export async function safeExecute(
  query: string,
  params: unknown[] = []
): Promise<{ success: boolean; error: Error | null; meta?: D1Result["meta"] }> {
  // Vercel 환경에서는 D1을 사용하지 않음
  return {
    success: false,
    error: new Error("D1 Database is deprecated. Use Vercel Postgres instead."),
  }
}

