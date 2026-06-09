/**
 * IndexNow 수동 제출 API
 * POST /api/indexnow - 특정 URL 또는 최근 발행 글 제출
 */

import { NextResponse } from "next/server"
import { submitUrlsToIndexNow } from "@/lib/indexnow"
import { pingAllSearchEngines } from "@/lib/gsc-ping"
import { submitSitemapToSearchConsole } from "@/lib/gsc-sitemap"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret) {
    const auth = request.headers.get("authorization")
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  try {
    const body = await request.json().catch(() => ({}))
    const urls: string[] = body.urls ?? []

    const [indexNowResult, sitemapPing, searchConsole] = await Promise.all([
      urls.length > 0 ? submitUrlsToIndexNow(urls) : Promise.resolve({ success: true, submitted: 0, errors: [] }),
      pingAllSearchEngines(),
      submitSitemapToSearchConsole(),
    ])

    return NextResponse.json({
      success: true,
      indexNow: indexNowResult,
      sitemapPing,
      searchConsole,
    })
  } catch (err) {
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 }
    )
  }
}
