/**
 * Vercel Postgres 연결 풀 관리
 * 성능 최적화를 위한 연결 풀 설정
 * 
 * 일반 문자열 쿼리($1, $2 형식)를 지원하기 위해 postgres 패키지 사용
 */

import { sql } from "@vercel/postgres"
import postgres from "postgres"
import { logger } from "@/lib/logger"

// postgres 클라이언트 인스턴스 (일반 문자열 쿼리용)
let postgresClient: ReturnType<typeof postgres> | null = null

/**
 * postgres 클라이언트 가져오기 (일반 문자열 쿼리용)
 * $1, $2 형식의 파라미터화된 쿼리 지원
 * 
 * Vercel 서버리스 환경 최적화:
 * - 연결 풀은 자동으로 재사용됨 (같은 인스턴스 내에서)
 * - Cold start 시 새 연결 생성
 * - Warm start 시 기존 연결 재사용
 */
export function getPostgresClient() {
  if (!postgresClient) {
    const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL
    if (!connectionString) {
      logger.error("POSTGRES_URL or DATABASE_URL is not set", { context: "postgres-pool" })
      return null
    }
    
    try {
      // Vercel 서버리스 환경에 최적화된 설정
      postgresClient = postgres(connectionString, {
        max: 10, // 서버리스 환경에서는 더 작은 풀 크기 권장
        idle_timeout: 20, // 20초 (서버리스 함수 수명 고려)
        connect_timeout: 5, // 5초 (연결 타임아웃 증가)
        // 서버리스 환경 최적화 옵션
        prepare: false, // prepared statement 비활성화 (서버리스 환경에서 더 안정적)
        transform: {
          undefined: null, // undefined를 null로 변환
        },
      })
      
      logger.debug("Postgres client created", {
        maxConnections: 10,
        environment: process.env.NODE_ENV || "unknown",
      })
    } catch (error) {
      logger.error("Failed to create postgres client", error instanceof Error ? error : new Error(String(error)), {
        context: "postgres-pool",
      })
      return null
    }
  }
  return postgresClient
}

/**
 * Vercel Postgres sql 템플릿 리터럴 가져오기
 * 템플릿 리터럴 쿼리용
 */
export function getPostgresPool() {
  // 템플릿 리터럴 쿼리는 기본 sql 사용
  // 일반 문자열 쿼리는 getPostgresClient() 사용
  return sql
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

