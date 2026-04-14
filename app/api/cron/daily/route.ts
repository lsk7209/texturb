/**
 * Vercel Cron Job - Daily (매일 자정)
 * 일일 통계 집계 + 오래된 세션 정리
 */

import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/db/turso-client";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

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
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = yesterday.toISOString().split("T")[0];

  try {
    const [statsResult, cleanupResult] = await Promise.all([
      db.execute({
        sql: `SELECT COUNT(*) as total_usage,
                COUNT(DISTINCT user_session_id) as unique_sessions,
                json_group_array(json_object('tool_id', tool_id, 'count', cnt)) as top_tools
              FROM (
                SELECT tool_id, COUNT(*) as cnt
                FROM tool_usage
                WHERE DATE(created_at) = ?
                GROUP BY tool_id ORDER BY cnt DESC LIMIT 10
              )`,
        args: [dateStr],
      }),
      db.execute({
        sql: "DELETE FROM sessions WHERE last_accessed < datetime('now', '-30 days')",
        args: [],
      }),
    ]);

    const stats = statsResult.rows[0] as unknown as
      | { total_usage: number; unique_sessions: number; top_tools: string }
      | undefined;

    if (stats) {
      await db.execute({
        sql: `INSERT INTO daily_stats (date, total_usage, unique_sessions, top_tools, updated_at)
              VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
              ON CONFLICT(date) DO UPDATE SET
                total_usage = excluded.total_usage,
                unique_sessions = excluded.unique_sessions,
                top_tools = excluded.top_tools,
                updated_at = CURRENT_TIMESTAMP`,
        args: [
          dateStr,
          stats.total_usage,
          stats.unique_sessions,
          stats.top_tools,
        ],
      });
    }

    // AI 콘텐츠 자동 생성
    try {
      const { getTopicForDate } = await import("@/lib/content/topic-selector");
      const { generatePost } = await import("@/lib/content/gemini-generator");
      const { createPost } = await import("@/lib/db/post-queries");

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 10, 0, 0);

      const topic = getTopicForDate(new Date());
      const post = await generatePost(topic);

      await createPost({
        type: topic.type,
        slug: post.slug,
        title: post.title,
        summary: post.summary,
        content: post.content,
        keywords: post.keywords,
        status: "scheduled",
        tool_id: topic.toolId,
        published_at: tomorrow.toISOString(),
      });
    } catch (contentError) {
      logger.error(
        "콘텐츠 자동 생성 실패",
        contentError instanceof Error
          ? contentError
          : new Error(String(contentError)),
      );
      // 크론은 계속 진행
    }

    return NextResponse.json({
      success: true,
      date: dateStr,
      duration: `${Date.now() - startTime}ms`,
      sessionsCleaned: Number(cleanupResult.rowsAffected) || 0,
    });
  } catch (error) {
    logger.error(
      "Daily cron failed",
      error instanceof Error ? error : new Error(String(error)),
    );
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
