/**
 * Vercel 환경 타입 정의
 */

/**
 * Vercel Postgres 클라이언트 타입
 */
export interface VercelPostgresClient {
  query<T = unknown>(query: string, params?: unknown[]): Promise<{ rows: T[]; rowCount: number }>
  begin<T>(callback: (sql: VercelPostgresClient) => Promise<T>): Promise<T>
}

/**
 * Vercel 환경 변수 타입
 */
export interface VercelEnv {
  POSTGRES_URL?: string
  DATABASE_URL?: string
  CRON_SECRET?: string
  NODE_ENV?: "development" | "production" | "test"
  [key: string]: string | undefined
}

/**
 * Vercel Cron Job 요청 타입
 */
export interface VercelCronRequest extends Request {
  headers: Headers & {
    get(name: "authorization"): string | null
  }
}

