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
    const { publishScheduledPosts } = await import("@/lib/db/post-queries");
    const published = await publishScheduledPosts();

    return NextResponse.json({
      success: true,
      duration: `${Date.now() - startTime}ms`,
      cleaned: Number(result.rowsAffected) || 0,
      published: published.count,
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
