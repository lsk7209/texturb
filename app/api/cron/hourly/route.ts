/**
 * Vercel Cron Job - Hourly (매시간)
 * 오래된 임시 데이터 정리 + 신규 발행 글 IndexNow 및 GSC 사이트맵 자동 제출
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

    // 1. 예약된 DB posts 발행
    const { publishScheduledPosts, getPublishedPosts } = await import("@/lib/db/post-queries");
    const published = await publishScheduledPosts();

    // 2. 최근 2시간 이내에 발행 시점(publishedAt)이 도래한 정적 블로그 포스트 감지
    const { getAllBlogPosts } = await import("@/lib/blog-registry");
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
    const now = new Date();
    const newlyPublishedStatic = getAllBlogPosts().filter((p) => {
      const pubDate = new Date(p.publishedAt);
      return pubDate >= twoHoursAgo && pubDate <= now;
    });

    // 새 글(DB 또는 정적 글)이 감지되면 IndexNow + GSC 사이트맵 제출
    let indexNowResult = null;
    let sitemapPing = null;
    const totalNewCount = published.count + newlyPublishedStatic.length;

    if (totalNewCount > 0) {
      const { submitUrlsToIndexNow } = await import("@/lib/indexnow");
      const { pingAllSearchEngines } = await import("@/lib/gsc-ping");
      const { submitSitemapToSearchConsole } = await import("@/lib/gsc-sitemap");
      const { getCanonicalSiteUrl } = await import("@/lib/site-config");
      const baseUrl = getCanonicalSiteUrl();

      const newUrls: string[] = [];

      // DB 신규 글 URL 추가
      if (published.count > 0) {
        const { data: recentPosts } = await getPublishedPosts(undefined, published.count + 5);
        for (const p of (recentPosts ?? []).slice(0, published.count)) {
          newUrls.push(`${baseUrl}/${p.type === "guide" ? "guides" : "blog"}/ai/${p.slug}`);
        }
      }

      // 정적 신규 글 URL 추가
      for (const sp of newlyPublishedStatic) {
        newUrls.push(`${baseUrl}/blog/${sp.slug}`);
      }

      // sitemap URL도 함께 제출
      newUrls.push(`${baseUrl}/sitemap.xml`);

      // IndexNow 및 GSC 사이트맵 API 병렬 제출
      [indexNowResult, sitemapPing] = await Promise.all([
        submitUrlsToIndexNow(newUrls),
        Promise.all([pingAllSearchEngines(), submitSitemapToSearchConsole()]),
      ]);
    }

    return NextResponse.json({
      success: true,
      duration: `${Date.now() - startTime}ms`,
      cleaned: Number(result.rowsAffected) || 0,
      publishedDb: published.count,
      publishedStatic: newlyPublishedStatic.length,
      submittedUrlsCount: totalNewCount > 0 ? totalNewCount + 1 : 0,
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
