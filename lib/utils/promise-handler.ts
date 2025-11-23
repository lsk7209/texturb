/**
 * Promise 에러 핸들링 유틸리티
 * Unhandled promise rejections 방지
 */

import { logger } from "@/lib/logger"

/**
 * 안전한 Promise 실행
 * 에러를 자동으로 캐치하고 로깅
 */
export async function safePromise<T>(
  promise: Promise<T>,
  context?: string
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const data = await promise
    return { data, error: null }
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    logger.error(`Promise failed${context ? ` in ${context}` : ""}`, err)
    return { data: null, error: err }
  }
}

/**
 * Promise.all을 안전하게 실행
 * 일부 실패해도 계속 진행
 */
export async function safePromiseAll<T>(
  promises: Promise<T>[],
  context?: string
): Promise<{ results: Array<T | null>; errors: Array<Error | null> }> {
  const results = await Promise.allSettled(promises)

  const data: Array<T | null> = []
  const errors: Array<Error | null> = []

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      data.push(result.value)
      errors.push(null)
    } else {
      const err = result.reason instanceof Error ? result.reason : new Error(String(result.reason))
      logger.error(`Promise ${index} failed${context ? ` in ${context}` : ""}`, err)
      data.push(null)
      errors.push(err)
    }
  })

  return { results: data, errors }
}

/**
 * Promise.race를 안전하게 실행
 */
export async function safePromiseRace<T>(
  promises: Promise<T>[],
  context?: string
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const data = await Promise.race(promises)
    return { data, error: null }
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    logger.error(`Promise race failed${context ? ` in ${context}` : ""}`, err)
    return { data: null, error: err }
  }
}

/**
 * 타임아웃이 있는 Promise 실행
 */
export async function promiseWithTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  context?: string
): Promise<{ data: T | null; error: Error | null }> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Promise timeout after ${timeoutMs}ms${context ? ` in ${context}` : ""}`))
    }, timeoutMs)
  })

  try {
    const data = await Promise.race([promise, timeoutPromise])
    return { data, error: null }
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    logger.error("Promise timeout", err, { timeoutMs, context })
    return { data: null, error: err }
  }
}

