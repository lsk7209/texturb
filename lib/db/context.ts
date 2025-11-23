/**
 * Cloudflare Request Context 헬퍼
 * @cloudflare/next-on-pages의 getRequestContext를 안전하게 사용
 */

import { logger } from "@/lib/logger"
import type { D1Database } from "./d1-client"

let getRequestContextFn: (() => { env: { DB?: D1Database }; cf?: unknown; ctx?: unknown }) | null = null

/**
 * getRequestContext 함수를 동적으로 로드
 * Edge runtime에서만 사용 가능
 */
async function loadGetRequestContext(): Promise<typeof getRequestContextFn> {
  if (getRequestContextFn) {
    return getRequestContextFn
  }

  try {
    // @cloudflare/next-on-pages에서 동적 import
    const module = await import("@cloudflare/next-on-pages")
    if (module.getRequestContext) {
      getRequestContextFn = module.getRequestContext
      return getRequestContextFn
    }
  } catch (error) {
    // 모듈을 사용할 수 없는 경우 (예: Workers 환경)
    logger.debug("getRequestContext not available", undefined, {
      error: error instanceof Error ? error.message : String(error),
    })
  }

  return null
}

/**
 * Edge runtime에서 D1 데이터베이스를 가져옵니다
 * getRequestContext를 사용하여 타입 안전하게 접근
 */
export async function getD1FromContext(): Promise<D1Database | null> {
  try {
    const getRequestContext = await loadGetRequestContext()
    if (!getRequestContext) {
      return null
    }

    const { env } = getRequestContext()
    return env.DB || null
  } catch (error) {
    logger.warn("Failed to get D1 from context", error instanceof Error ? error : new Error(String(error)))
    return null
  }
}

/**
 * 동기적으로 D1 데이터베이스를 가져옵니다 (가능한 경우)
 * Edge runtime의 API Routes에서 사용
 */
export function getD1FromContextSync(): D1Database | null {
  try {
    // 동적 import는 비동기이므로, 동기 버전은 직접 접근 시도
    if (typeof process !== "undefined" && process.env.DB) {
      return process.env.DB as unknown as D1Database
    }
  } catch {
    // 접근 불가능
  }

  return null
}

