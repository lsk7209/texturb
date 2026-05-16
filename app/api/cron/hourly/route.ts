/**
 * Vercel Cron Job - Hourly (매시간)
 * 오래된 임시 데이터 정리
 */

import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/db/turso-client";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const db = getTursoClient();
  if (!db) {
    return NextResponse.json({
      success: true,
      message: "DB not configured, skipping",
    });
  }

  const startTime = Date.now();

  try {
    // 24시간 이상 비활성 세션 정리
    const result = await db.execute({
      sql: "DELETE FROM sessions WHERE last_accessed < datetime('now', '-24 hours') AND tool_count = 0",
      args: [],
    });

    // 예약된 posts 발행
    const { publishScheduledPosts, getPublishedPosts } = await import("@/lib/db/post-queries");
    const published = await publishScheduledPosts();

    // 새 글이 발행되면 IndexNow + GSC 사이트맵 핑
    let indexNowResult = null;
    let sitemapPing = null;
    if (published.count > 0) {
      const { submitUrlsToIndexNow } = await import("@/lib/indexnow");
      const { pingAllSearchEngines } = await import("@/lib/gsc-ping");
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com";

      // 방금 발행된 글 URL 목록 수집
      const { data: recentPosts } = await getPublishedPosts(undefined, published.count + 5);
      const newUrls = (recentPosts ?? [])
        .slice(0, published.count)
        .map((p) => `${baseUrl}/${p.type === "guide" ? "guides" : "blog"}/ai/${p.slug}`);

      // sitemap URL도 추가
      newUrls.push(`${baseUrl}/sitemap.xml`);

      [indexNowResult, sitemapPing] = await Promise.all([
        submitUrlsToIndexNow(newUrls),
        pingAllSearchEngines(),
      ]);
    }

    return NextResponse.json({
      success: true,
      duration: `${Date.now() - startTime}ms`,
      cleaned: Number(result.rowsAffected) || 0,
      published: published.count,
      indexNow: indexNowResult,
      sitemapPing,
    });
  } catch (error) {
    logger.error(
      "Hourly cron failed",
      error instanceof Error ? error : new Error(String(error)),
    );
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
