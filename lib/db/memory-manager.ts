/**
 * D1 데이터베이스 메모리 관리
 * Statement 캐시 및 리소스 정리
 */

import { clearStatementCache, getStatementCacheSize } from "./d1-client"
import { logger } from "@/lib/logger"

/**
 * 메모리 사용량 모니터링
 */
export interface MemoryStats {
  statementCacheSize: number
  timestamp: number
}

/**
 * 현재 메모리 사용량 조회
 */
export function getMemoryStats(): MemoryStats {
  return {
    statementCacheSize: getStatementCacheSize(),
    timestamp: Date.now(),
  }
}

/**
 * 메모리 정리 (주기적으로 호출 권장)
 */
export function cleanupMemory(): void {
  const beforeSize = getStatementCacheSize()
  clearStatementCache()
  const afterSize = getStatementCacheSize()

  logger.debug("Memory cleanup completed", {
    beforeSize,
    afterSize,
    cleared: beforeSize - afterSize,
  })
}

/**
 * 메모리 사용량이 임계값을 초과하는지 확인
 */
export function isMemoryThresholdExceeded(threshold: number = 80): boolean {
  const stats = getMemoryStats()
  return stats.statementCacheSize >= threshold
}

/**
 * 자동 메모리 정리 (임계값 초과 시)
 */
export function autoCleanupMemory(threshold: number = 80): boolean {
  if (isMemoryThresholdExceeded(threshold)) {
    cleanupMemory()
    return true
  }
  return false
}

