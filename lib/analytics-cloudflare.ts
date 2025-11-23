/**
 * Cloudflare 최적화된 Analytics 유틸리티
 * D1 데이터베이스를 사용한 서버 사이드 분석
 */

import { logToolUsage, upsertSession } from "@/lib/db/queries"
import { logger } from "@/lib/logger"

/**
 * 도구 사용 추적 (서버 사이드)
 * Cloudflare D1에 사용 통계를 기록합니다
 */
export async function trackToolUsage(params: {
  toolId: string
  toolSlug: string
  sessionId?: string
  userAgent?: string
  referrer?: string
}): Promise<void> {
  try {
    // 세션 업데이트
    if (params.sessionId) {
      await upsertSession({
        sessionId: params.sessionId,
        userAgent: params.userAgent,
        referrer: params.referrer,
      })
    }

    // 도구 사용 기록
    await logToolUsage({
      toolId: params.toolId,
      toolSlug: params.toolSlug,
      sessionId: params.sessionId,
      userAgent: params.userAgent,
      referrer: params.referrer,
    })
  } catch (error) {
    // 에러 로깅만 하고 사용자 경험에는 영향 없음
    logger.error("Failed to track tool usage", error, { toolId: params.toolId })
  }
}

/**
 * 페이지 뷰 추적 (서버 사이드)
 */
export async function trackPageView(params: {
  path: string
  sessionId?: string
  userAgent?: string
  referrer?: string
}): Promise<void> {
  try {
    if (params.sessionId) {
      await upsertSession({
        sessionId: params.sessionId,
        userAgent: params.userAgent,
        referrer: params.referrer,
      })
    }
  } catch (error) {
    logger.error("Failed to track page view", error, { path: params.path })
  }
}

/**
 * 클라이언트 사이드에서 사용할 수 있는 추적 함수
 * API Route를 통해 서버 사이드 추적을 호출합니다
 */
export async function trackToolUsageClient(params: {
  toolId: string
  toolSlug: string
  sessionId?: string
}): Promise<void> {
  try {
    const response = await fetch("/api/usage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      const errorText = await response.text()
      logger.error("Failed to track usage via API", new Error(errorText), { toolId: params.toolId })
    }
  } catch (error) {
    // 네트워크 오류 등은 조용히 처리 (사용자 경험에 영향 없음)
    logger.debug("Failed to track usage (network error)", error, { toolId: params.toolId })
  }
}

