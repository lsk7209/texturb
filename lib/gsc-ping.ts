/**
 * Google Search Console & Naver 사이트맵 핑
 * 새 컨텐츠 발행 시 사이트맵을 검색엔진에 즉시 제출
 */

import { getCanonicalSiteUrl } from "@/lib/site-config"
import { submitSitemapToSearchConsole } from "@/lib/gsc-sitemap"

const BASE_URL = getCanonicalSiteUrl()

export interface GscPingResult {
  success: boolean
  sitemapUrl: string
  error?: string
}

/**
 * Google Search Console API를 통해 sitemap.xml 제출
 * (구형 google.com/ping 엔드포인트는 2023년 12월 영구 폐지되었으므로 공식 Search Console API 사용)
 */
export async function pingSitemapToGoogle(): Promise<GscPingResult> {
  const sitemapUrl = `${BASE_URL}/sitemap.xml`

  try {
    const apiResult = await submitSitemapToSearchConsole()
    if (apiResult.success) {
      return {
        success: true,
        sitemapUrl,
      }
    }

    // 서비스 계정이 미설정된 경우(로컬 개발 등)
    if (apiResult.skipped) {
      return {
        success: true,
        sitemapUrl,
        error: "GSC service account skipped (local/dev mode)",
      }
    }

    return {
      success: false,
      sitemapUrl,
      error: apiResult.error || `GSC API HTTP ${apiResult.status}`,
    }
  } catch (err) {
    return {
      success: false,
      sitemapUrl,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

/**
 * Naver 서치어드바이저 사이트맵 핑
 */
export async function pingSitemapToNaver(): Promise<GscPingResult> {
  const sitemapUrl = `${BASE_URL}/sitemap.xml`

  try {
    const pingUrl = `https://searchadvisor.naver.com/site/sitemap?url=${encodeURIComponent(sitemapUrl)}`
    const res = await fetch(pingUrl, {
      method: "GET",
      signal: AbortSignal.timeout(10000),
    })

    return {
      success: res.ok,
      sitemapUrl,
      error: res.ok ? undefined : `HTTP ${res.status}`,
    }
  } catch (err) {
    return {
      success: false,
      sitemapUrl,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

export async function pingAllSearchEngines(): Promise<{
  google: GscPingResult
  naver: GscPingResult
}> {
  const [google, naver] = await Promise.allSettled([
    pingSitemapToGoogle(),
    pingSitemapToNaver(),
  ])

  return {
    google:
      google.status === "fulfilled"
        ? google.value
        : { success: false, sitemapUrl: `${BASE_URL}/sitemap.xml`, error: "Request failed" },
    naver:
      naver.status === "fulfilled"
        ? naver.value
        : { success: false, sitemapUrl: `${BASE_URL}/sitemap.xml`, error: "Request failed" },
  }
}
