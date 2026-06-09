/**
 * Google Search Console 사이트맵 핑
 * 새 컨텐츠 발행 시 사이트맵을 GSC에 즉시 제출
 */

import { getCanonicalSiteUrl } from "@/lib/site-config"

const BASE_URL = getCanonicalSiteUrl()

export interface GscPingResult {
  success: boolean
  sitemapUrl: string
  error?: string
}

/**
 * Google에 sitemap.xml 핑 전송
 * Google은 공식적으로 sitemap ping을 deprecated했지만
 * 여전히 동작하며 빠른 크롤링을 유도함
 */
export async function pingSitemapToGoogle(): Promise<GscPingResult> {
  const sitemapUrl = `${BASE_URL}/sitemap.xml`

  try {
    // Google Sitemap Ping (deprecated but still works)
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    const res = await fetch(pingUrl, {
      method: "GET",
      signal: AbortSignal.timeout(10000),
    })

    return {
      success: res.ok || res.status === 200,
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
    google: google.status === "fulfilled" ? google.value : { success: false, sitemapUrl: `${BASE_URL}/sitemap.xml`, error: "Request failed" },
    naver: naver.status === "fulfilled" ? naver.value : { success: false, sitemapUrl: `${BASE_URL}/sitemap.xml`, error: "Request failed" },
  }
}
