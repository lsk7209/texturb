/**
 * 에러 리포팅 Rate Limiting
 * 과도한 에러 리포팅 방지
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

// IP별 Rate Limit 저장 (메모리 기반, Edge에서만 유효)
const rateLimitStore = new Map<string, RateLimitEntry>()

// 정기적으로 오래된 항목 정리 (5분마다)
if (typeof globalThis !== "undefined") {
  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key)
      }
    }
  }, 5 * 60 * 1000) // 5분
}

/**
 * Rate Limit 체크
 * @param identifier IP 주소 또는 식별자
 * @param maxRequests 최대 요청 수
 * @param windowMs 시간 윈도우 (밀리초)
 * @returns Rate limit 초과 여부
 */
export function checkRateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(identifier)

  if (!entry || now > entry.resetTime) {
    // 새 항목 또는 만료된 항목
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: now + windowMs,
    }
  }

  if (entry.count >= maxRequests) {
    // Rate limit 초과
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    }
  }

  // 카운트 증가
  entry.count++
  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetTime: entry.resetTime,
  }
}

/**
 * Rate Limit 정보 조회
 */
export function getRateLimitInfo(identifier: string): { count: number; resetTime: number } | null {
  return rateLimitStore.get(identifier) || null
}

