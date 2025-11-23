/**
 * D1 데이터베이스 헬스 체크
 * 연결 상태 및 성능 모니터링
 */

import { getD1Database } from "./d1-client"
import { logger } from "@/lib/logger"
import { executeWithTimeout } from "./timeout"

export interface HealthCheckResult {
  healthy: boolean
  latency?: number
  error?: string
  timestamp: string
}

/**
 * D1 데이터베이스 헬스 체크
 */
export async function checkD1Health(): Promise<HealthCheckResult> {
  const startTime = Date.now()
  const db = getD1Database()

  if (!db) {
    return {
      healthy: false,
      error: "Database not available",
      timestamp: new Date().toISOString(),
    }
  }

  try {
    // 간단한 쿼리로 연결 상태 확인
    await executeWithTimeout(
      () => db.prepare("SELECT 1 as health_check").first(),
      5000 // 5초 타임아웃
    )

    const latency = Date.now() - startTime

    return {
      healthy: true,
      latency,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    logger.error("D1 health check failed", error)

    return {
      healthy: false,
      error: errorMessage,
      latency: Date.now() - startTime,
      timestamp: new Date().toISOString(),
    }
  }
}

/**
 * 주기적인 헬스 체크 (크론 작업에서 사용)
 */
export async function periodicHealthCheck(): Promise<void> {
  const result = await checkD1Health()

  if (!result.healthy) {
    logger.warn("D1 health check failed", {
      error: result.error,
      latency: result.latency,
    })
  } else {
    logger.debug("D1 health check passed", {
      latency: result.latency,
    })
  }
}

