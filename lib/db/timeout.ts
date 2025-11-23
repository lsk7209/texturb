/**
 * D1 쿼리 타임아웃 처리
 * 장기 실행 쿼리 방지
 */

import { logger } from "@/lib/logger"

const DEFAULT_TIMEOUT_MS = 30000 // 30초

/**
 * 타임아웃이 있는 Promise 래퍼
 */
export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
  errorMessage: string = "Operation timeout"
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => {
        reject(new Error(`${errorMessage} (${timeoutMs}ms)`))
      }, timeoutMs)
    ),
  ])
}

/**
 * 타임아웃이 있는 D1 쿼리 실행
 */
export async function executeWithTimeout<T>(
  queryFn: () => Promise<T>,
  timeoutMs: number = DEFAULT_TIMEOUT_MS
): Promise<T> {
  try {
    return await withTimeout(queryFn(), timeoutMs, "Database query timeout")
  } catch (error) {
    if (error instanceof Error && error.message.includes("timeout")) {
      logger.error("Database query timeout", error, { timeoutMs })
    }
    throw error
  }
}

