/**
 * D1 데이터베이스 Rate Limit 처리
 * Cloudflare D1의 rate limit을 고려한 요청 제어
 */

import { logger } from "@/lib/logger"

export interface RateLimitInfo {
  remaining: number
  resetTime: number
}

/**
 * Rate limit 에러인지 확인
 */
export function isRateLimitError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false
  }

  const errorMessage = error.message.toLowerCase()
  return (
    errorMessage.includes("rate limit") ||
    errorMessage.includes("too many requests") ||
    errorMessage.includes("429")
  )
}

/**
 * Rate limit 에러 처리
 * Rate limit 에러는 재시도하지 않고 즉시 실패 처리
 */
export function handleRateLimitError(error: unknown): never {
  logger.warn("Rate limit exceeded", {
    error: error instanceof Error ? error.message : String(error),
    action: "rate_limit_detected",
    recommendation: "Wait before retrying",
  })

  throw new Error("Rate limit exceeded. Please try again later.")
}

/**
 * Rate limit 헤더에서 정보 추출 (Cloudflare Workers 응답에서)
 */
export function extractRateLimitInfo(response: Response): RateLimitInfo | null {
  const remaining = response.headers.get("X-RateLimit-Remaining")
  const resetTime = response.headers.get("X-RateLimit-Reset")

  if (remaining && resetTime) {
    return {
          remaining: Number.parseInt(remaining, 10),
          resetTime: Number.parseInt(resetTime, 10) * 1000, // 초를 밀리초로 변환
        }
  }

  return null
}

