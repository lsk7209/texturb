/**
 * Turso(libsql) 데이터베이스 클라이언트
 * 환경변수 미설정 시 graceful degradation 지원
 */

import {
  createClient,
  type Client,
  type InStatement,
  type InValue,
} from "@libsql/client";
import { logger } from "@/lib/logger";

let client: Client | null = null;

export function getTursoClient(): Client | null {
  if (client) return client;

  const url = process.env.TURSO_DATABASE_URL;
  if (!url) {
    // DB 없이도 앱이 동작하도록 조용히 처리
    return null;
  }

  try {
    client = createClient({
      url,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
    return client;
  } catch (error) {
    logger.error(
      "Turso 클라이언트 생성 실패",
      error instanceof Error ? error : new Error(String(error)),
    );
    return null;
  }
}

export async function safeQuery<T = Record<string, unknown>>(
  sql: string,
  args: InValue[] = [],
): Promise<{ data: T[] | null; error: Error | null }> {
  const db = getTursoClient();
  if (!db) return { data: [], error: null }; // DB 없으면 빈 배열 반환

  try {
    const result = await db.execute({ sql, args });
    return { data: result.rows as unknown as T[], error: null };
  } catch (error) {
    const dbError = error instanceof Error ? error : new Error("Query failed");
    logger.error("DB 쿼리 실패", dbError, { query: sql.substring(0, 100) });
    return { data: null, error: dbError };
  }
}

export async function safeExecute(
  sql: string,
  args: InValue[] = [],
): Promise<{ success: boolean; error: Error | null }> {
  const db = getTursoClient();
  if (!db) return { success: true, error: null }; // DB 없으면 성공으로 처리 (fire-and-forget)

  try {
    await db.execute({ sql, args });
    return { success: true, error: null };
  } catch (error) {
    const dbError =
      error instanceof Error ? error : new Error("Execution failed");
    logger.error("DB 실행 실패", dbError, { query: sql.substring(0, 100) });
    return { success: false, error: dbError };
  }
}

export async function safeBatch(
  statements: InStatement[],
): Promise<{ successCount: number; errorCount: number }> {
  const db = getTursoClient();
  if (!db) return { successCount: statements.length, errorCount: 0 };

  try {
    await db.batch(statements, "write");
    return { successCount: statements.length, errorCount: 0 };
  } catch (error) {
    logger.error(
      "DB 배치 실패",
      error instanceof Error ? error : new Error(String(error)),
    );
    return { successCount: 0, errorCount: statements.length };
  }
}

export async function checkDatabaseConnection(): Promise<boolean> {
  const db = getTursoClient();
  if (!db) return false;

  try {
    await db.execute("SELECT 1");
    return true;
  } catch {
    return false;
  }
}
