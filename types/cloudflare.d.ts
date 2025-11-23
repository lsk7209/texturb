/**
 * Cloudflare 환경 타입 정의
 */

// Cloudflare D1 Database 타입
export interface D1Database {
  prepare(query: string): D1PreparedStatement
  exec(query: string): Promise<D1ExecResult>
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  first<T = unknown>(colName?: string): Promise<T | null>
  run(): Promise<D1Result>
  all<T = unknown>(): Promise<D1Result<T>>
  raw<T = unknown>(): Promise<T[]>
}

export interface D1Result<T = unknown> {
  results: T[]
  success: boolean
  meta: {
    duration: number
    rows_read: number
    rows_written: number
    last_row_id: number
    changed_db: boolean
  }
}

export interface D1ExecResult {
  count: number
  duration: number
}

// Cloudflare Pages Functions 타입
export interface Env {
  DB?: D1Database
  CRON_SECRET?: string
  NODE_ENV?: "development" | "production" | "test"
  [key: string]: unknown
}

// Cloudflare Workers 환경 타입
export interface WorkersEnv extends Env {
  DB: D1Database
  CRON_SECRET: string
}

export interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void
  passThroughOnException(): void
}

export interface OnRequestHandler {
  (context: {
    request: Request
    next: () => Promise<Response>
    env: Env
    waitUntil: (promise: Promise<unknown>) => void
  }): Response | Promise<Response>
}

// Cloudflare Workers Cron 타입
export interface ScheduledEvent {
  type: "scheduled"
  scheduledTime: number
  cron: string
}

// 전역 타입 확장
declare global {
  interface Request {
    cf?: {
      country?: string
      colo?: string
      timezone?: string
      region?: string
      city?: string
      continent?: string
      latitude?: string
      longitude?: string
      postalCode?: string
      metroCode?: string
      regionCode?: string
    }
  }
}

