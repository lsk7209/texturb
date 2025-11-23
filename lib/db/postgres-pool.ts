/**
 * Vercel Postgres 연결 풀 관리
 * 성능 최적화를 위한 연결 풀 설정
 */

import { createPool, sql } from "@vercel/postgres"
import { logger } from "@/lib/logger"

// 전역 연결 풀 인스턴스
let poolInstance: ReturnType<typeof createPool> | null = null

/**
 * 최적화된 연결 풀 가져오기
 * Vercel Postgres는 자동으로 연결 풀을 관리하지만,
 * 커스텀 설정이 필요한 경우 사용
 */
export function getPostgresPool() {
  if (!poolInstance && process.env.POSTGRES_URL) {
    poolInstance = createPool({
      connectionString: process.env.POSTGRES_URL,
      max: 20, // 최대 연결 수 (Vercel 권장값)
      idleTimeoutMillis: 30000, // 30초 유휴 타임아웃
      connectionTimeoutMillis: 2000, // 2초 연결 타임아웃
    })
    
    logger.debug("Postgres connection pool created", {
      maxConnections: 20,
    })
  }
  
  // 커스텀 풀이 없으면 기본 sql 사용 (이미 최적화됨)
  return poolInstance || sql
}

/**
 * postgres 클라이언트 정리 (테스트 또는 종료 시)
 */
export async function closePostgresPool(): Promise<void> {
  if (postgresClient) {
    try {
      await postgresClient.end()
      postgresClient = null
      logger.debug("Postgres client closed")
    } catch (error) {
      logger.error("Failed to close postgres client", error instanceof Error ? error : new Error(String(error)))
    }
  }
}

/**
 * 연결 풀 상태 확인
 */
export function getPoolStatus() {
  if (postgresClient) {
    return {
      type: "postgres",
      maxConnections: 20,
      note: "Using postgres package for parameterized queries",
    }
  }
  return {
    type: "vercel-sql",
    note: "Using Vercel's default sql for template literals",
  }
}

