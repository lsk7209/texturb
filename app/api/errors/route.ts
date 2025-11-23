/**
 * API Route: 에러 리포팅
 * 클라이언트 사이드 에러를 수집하는 API (선택적)
 */

/**
 * API Route: 에러 리포팅
 * 클라이언트 사이드 에러를 수집하는 API
 * 보안: 민감한 정보 필터링 및 Rate Limiting
 */

import { NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import { sanitizeErrorStack, sanitizeErrorMessage } from "@/lib/errors/sanitize"
import { checkRateLimit } from "@/lib/errors/rate-limit"

export const runtime = "edge"

export async function POST(request: Request) {
  try {
    // Rate Limiting 체크 (IP당 1분에 최대 10개)
    const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown"
    const rateLimit = checkRateLimit(ip, 10, 60000)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded",
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
            "X-RateLimit-Limit": "10",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateLimit.resetTime),
          },
        }
      )
    }

    const errorData = await request.json()

    // 민감한 정보 필터링
    const sanitizedMessage = sanitizeErrorMessage(errorData.message || "Unknown error")
    const sanitizedStack = sanitizeErrorStack(errorData.stack)

    // 에러 정보 로깅 (정제된 정보만)
    logger.error("Client-side error reported", new Error(sanitizedMessage), {
      stack: sanitizedStack,
      componentStack: errorData.componentStack ? sanitizeErrorStack(errorData.componentStack) : undefined,
      userAgent: errorData.userAgent?.substring(0, 200), // 길이 제한
      url: errorData.url ? new URL(errorData.url).pathname : undefined, // 경로만 저장
      timestamp: errorData.timestamp,
      ip: ip.substring(0, 50), // IP 일부만 저장
    })

    // 필요시 D1 데이터베이스에 저장하거나 외부 서비스로 전송
    // 예: Sentry, LogRocket 등

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Error reporting API failed", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

