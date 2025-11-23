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
 */
export function getPostgresClient() {
  if (!postgresClient && process.env.POSTGRES_URL) {
    postgresClient = postgres(process.env.POSTGRES_URL, {
      max: 20, // 최대 연결 수
      idle_timeout: 30, // 30초
      connect_timeout: 2, // 2초
    })
    
    logger.debug("Postgres client created", {
      maxConnections: 20,
    })
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

