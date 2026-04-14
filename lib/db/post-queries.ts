import type { InValue } from "@libsql/client";
import { safeQuery, safeExecute, getTursoClient } from "./turso-client";

export interface Post {
  id: number;
  type: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  keywords: string | null;
  status: string;
  tool_id: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreatePostParams {
  type: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  keywords?: string[];
  status?: string;
  tool_id?: string;
  published_at?: string;
}

export async function createPost(
  params: CreatePostParams,
): Promise<{ success: boolean; error: Error | null }> {
  const keywords = params.keywords ? JSON.stringify(params.keywords) : null;
  return safeExecute(
    `INSERT INTO posts (type, slug, title, summary, content, keywords, status, tool_id, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      params.type,
      params.slug,
      params.title,
      params.summary,
      params.content,
      keywords,
      params.status ?? "draft",
      params.tool_id ?? null,
      params.published_at ?? null,
    ],
  );
}

export async function getPublishedPosts(
  type?: string,
  limit = 20,
): Promise<{ data: Post[] | null; error: Error | null }> {
  if (type) {
    return safeQuery<Post>(
      `SELECT * FROM posts WHERE status = 'published' AND type = ? ORDER BY published_at DESC LIMIT ?`,
      [type, limit],
    );
  }
  return safeQuery<Post>(
    `SELECT * FROM posts WHERE status = 'published' ORDER BY published_at DESC LIMIT ?`,
    [limit],
  );
}

export async function getPostBySlug(
  slug: string,
): Promise<{ data: Post | null; error: Error | null }> {
  const result = await safeQuery<Post>(
    `SELECT * FROM posts WHERE slug = ? AND status = 'published' LIMIT 1`,
    [slug],
  );
  return { data: result.data?.[0] ?? null, error: result.error };
}

export async function publishScheduledPosts(): Promise<{
  success: boolean;
  count: number;
}> {
  const db = getTursoClient();
  if (!db) return { success: true, count: 0 };
  try {
    const result = await db.execute({
      sql: `UPDATE posts SET status = 'published', updated_at = CURRENT_TIMESTAMP
            WHERE status = 'scheduled' AND published_at <= datetime('now')`,
      args: [],
    });
    return { success: true, count: Number(result.rowsAffected) || 0 };
  } catch {
    return { success: false, count: 0 };
  }
}

export async function updatePost(
  id: number,
  params: Partial<CreatePostParams>,
): Promise<{ success: boolean; error: Error | null }> {
  const sets: string[] = [];
  const args: InValue[] = [];
  if (params.title !== undefined) {
    sets.push("title = ?");
    args.push(params.title);
  }
  if (params.summary !== undefined) {
    sets.push("summary = ?");
    args.push(params.summary);
  }
  if (params.content !== undefined) {
    sets.push("content = ?");
    args.push(params.content);
  }
  if (params.status !== undefined) {
    sets.push("status = ?");
    args.push(params.status);
  }
  if (params.published_at !== undefined) {
    sets.push("published_at = ?");
    args.push(params.published_at);
  }
  if (sets.length === 0) return { success: true, error: null };
  sets.push("updated_at = CURRENT_TIMESTAMP");
  args.push(id);
  return safeExecute(`UPDATE posts SET ${sets.join(", ")} WHERE id = ?`, args);
}

export async function deletePost(
  id: number,
): Promise<{ success: boolean; error: Error | null }> {
  return safeExecute("DELETE FROM posts WHERE id = ?", [id]);
}

export async function getAllPostsAdmin(): Promise<{
  data: Post[] | null;
  error: Error | null;
}> {
  return safeQuery<Post>(`SELECT * FROM posts ORDER BY created_at DESC`);
}
