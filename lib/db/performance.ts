/**
 * D1 데이터베이스 성능 모니터링 및 최적화
 */

import { logger } from "@/lib/logger"

export interface QueryMetrics {
  query: string
  duration: number
  rowsRead?: number
  rowsWritten?: number
  timestamp: number
}

/**
 * 쿼리 성능 메트릭 수집
 */
export function logQueryMetrics(metrics: QueryMetrics): void {
  // 프로덕션에서는 성능이 느린 쿼리만 로깅
  const isSlowQuery = metrics.duration > 1000 // 1초 이상

  if (isSlowQuery) {
    logger.warn("Slow database query detected", new Error("Slow query"), {
      query: metrics.query.substring(0, 100), // 처음 100자만
      duration: `${metrics.duration}ms`,
      rowsRead: metrics.rowsRead,
      rowsWritten: metrics.rowsWritten,
    })
  }
}

/**
 * 쿼리 실행 시간 측정 헬퍼
 */
export async function measureQuery<T>(
  queryFn: () => Promise<T>,
  query: string
): Promise<{ result: T; duration: number }> {
  const startTime = performance.now()
  const result = await queryFn()
  const duration = performance.now() - startTime

  logQueryMetrics({
    query,
    duration,
    timestamp: Date.now(),
  })

  return { result, duration }
}

