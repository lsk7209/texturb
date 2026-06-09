/**
 * IndexNow - 새 URL을 Bing/Yandex/Naver 등 검색엔진에 즉시 알림
 * https://www.indexnow.org/
 */

import { getCanonicalSiteUrl } from "@/lib/site-config"

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || ""
const BASE_URL = getCanonicalSiteUrl()

export interface IndexNowResult {
  success: boolean
  submitted: number
  errors: string[]
}

export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (!INDEXNOW_KEY) {
    return { success: false, submitted: 0, errors: ["INDEXNOW_KEY not configured"] }
  }
  if (urls.length === 0) {
    return { success: true, submitted: 0, errors: [] }
  }

  const host = new URL(BASE_URL).hostname
  const keyLocation = `${BASE_URL}/${INDEXNOW_KEY}.txt`

  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: urls.slice(0, 10000), // IndexNow 최대 10000 URLs/요청
  }

  const errors: string[] = []

  // Bing + IndexNow 공식 엔드포인트에 제출
  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ]

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(10000),
      })
      if (!res.ok && res.status !== 202) {
        errors.push(`${endpoint}: HTTP ${res.status}`)
      }
    } catch (err) {
      errors.push(`${endpoint}: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  return {
    success: errors.length < endpoints.length,
    submitted: urls.length,
    errors,
  }
}

export async function submitSingleUrl(path: string): Promise<IndexNowResult> {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`
  return submitUrlsToIndexNow([url])
}
