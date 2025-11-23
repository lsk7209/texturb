/**
 * 재시도 유틸리티
 * D1 데이터베이스 쿼리 실패 시 재시도 로직
 */

interface RetryOptions {
  maxRetries?: number
  delayMs?: number
  backoffMultiplier?: number
}

/**
 * 재시도 로직이 포함된 함수 실행
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxRetries = 3, delayMs = 1000, backoffMultiplier = 2 } = options

  let lastError: Error | unknown

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      // 마지막 시도가 아니면 재시도
      if (attempt < maxRetries) {
        const delay = delayMs * Math.pow(backoffMultiplier, attempt)
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }

      // 재시도 횟수 초과
      throw error
    }
  }

  throw lastError
}

/**
 * D1 데이터베이스 쿼리 재시도 헬퍼
 */
export async function retryD1Query<T>(
  queryFn: () => Promise<T>,
  options?: RetryOptions
): Promise<T> {
  return withRetry(queryFn, {
    maxRetries: 3,
    delayMs: 500,
    backoffMultiplier: 1.5,
    ...options,
  })
}

