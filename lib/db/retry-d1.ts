/**
 * Cloudflare D1 재시도 로직
 * Cloudflare 권장 패턴에 따른 재시도 및 에러 처리
 */

import { logger } from "@/lib/logger"
import { isRateLimitError, handleRateLimitError } from "./rate-limit"

export interface RetryOptions {
  maxRetries?: number
  baseDelay?: number
  maxDelay?: number
  backoffMultiplier?: number
}

/**
 * D1 재시도 가능한 에러인지 확인
 * Cloudflare 권장 패턴에 따라 재시도 가능한 에러만 재시도
 */
function isRetryableError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false
  }

  const errorMessage = error.message.toLowerCase()
  const retryablePatterns = [
    "network connection lost",
    "storage caused object to be reset",
    "reset because its code was updated",
    "timeout",
    "temporary",
    "rate limit", // Rate limit은 짧은 지연 후 재시도 가능
  ]

  return retryablePatterns.some((pattern) => errorMessage.includes(pattern))
}

/**
 * Exponential backoff를 사용한 재시도
 * Cloudflare D1 권장 패턴 적용
 */
export async function retryD1Operation<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxRetries = 5,
    baseDelay = 100,
    maxDelay = 10000,
    backoffMultiplier = 2,
  } = options

  let lastError: Error | unknown

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error

      // Rate limit 에러는 재시도하지 않음
      if (isRateLimitError(error)) {
        handleRateLimitError(error)
      }

      // 재시도 가능한 에러가 아니면 즉시 throw
      if (!isRetryableError(error)) {
        logger.warn("Non-retryable error encountered", { error, attempt })
        throw error
      }

      // 마지막 시도가 아니면 재시도
      if (attempt < maxRetries) {
        const delay = Math.min(
          baseDelay * Math.pow(backoffMultiplier, attempt),
          maxDelay
        )

        logger.debug("Retrying D1 operation", {
          attempt: attempt + 1,
          maxRetries,
          delay: `${delay}ms`,
          error: error instanceof Error ? error.message : String(error),
        })

        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }

      // 재시도 횟수 초과
      logger.error("D1 operation failed after all retries", error, {
        maxRetries,
        attempts: attempt + 1,
      })
      throw error
    }
  }

  throw lastError
}

/**
 * D1 쿼리 재시도 헬퍼 (특화된 버전)
 */
export async function retryD1Query<T>(
  queryFn: () => Promise<T>,
  options?: RetryOptions
): Promise<T> {
  return retryD1Operation(queryFn, {
    maxRetries: 5,
    baseDelay: 100,
    maxDelay: 5000,
    backoffMultiplier: 2,
    ...options,
  })
}

