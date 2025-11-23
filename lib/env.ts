/**
 * 타입 안전한 환경 변수 접근
 * Cloudflare 환경에서 안전하게 환경 변수에 접근
 */

/**
 * 서버 사이드 환경 변수 (타입 안전)
 */
export function getEnvVar(key: string, defaultValue?: string): string {
  // Cloudflare Pages Functions 환경
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key]!
  }

  // Cloudflare Workers 환경
  if (typeof globalThis !== "undefined") {
    const env = (globalThis as { env?: Record<string, string> }).env
    if (env && env[key]) {
      return env[key]
    }
  }

  if (defaultValue !== undefined) {
    return defaultValue
  }

  throw new Error(`Environment variable ${key} is not set`)
}

/**
 * 선택적 환경 변수 가져오기
 */
export function getOptionalEnvVar(key: string, defaultValue: string = ""): string {
  try {
    return getEnvVar(key, defaultValue)
  } catch {
    return defaultValue
  }
}

/**
 * 숫자 환경 변수
 */
export function getEnvNumber(key: string, defaultValue?: number): number {
  const value = getEnvVar(key, defaultValue?.toString())
  const num = Number.parseInt(value, 10)

  if (isNaN(num)) {
    if (defaultValue !== undefined) {
      return defaultValue
    }
    throw new Error(`Environment variable ${key} is not a valid number`)
  }

  return num
}

/**
 * 불린 환경 변수
 */
export function getEnvBoolean(key: string, defaultValue: boolean = false): boolean {
  const value = getEnvVar(key, defaultValue.toString())
  return value === "true" || value === "1" || value === "yes"
}

/**
 * Cloudflare D1 Database 바인딩 가져오기
 */
export function getD1Binding(): D1Database | null {
  // Cloudflare Pages Functions
  if (typeof process !== "undefined" && process.env.DB) {
    return process.env.DB as unknown as D1Database
  }

  // Cloudflare Workers
  if (typeof globalThis !== "undefined") {
    const env = (globalThis as { env?: { DB?: D1Database } }).env
    if (env?.DB) {
      return env.DB
    }
  }

  return null
}

// 타입 정의
interface D1Database {
  prepare(query: string): D1PreparedStatement
  exec(query: string): Promise<D1ExecResult>
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  first<T = unknown>(colName?: string): Promise<T | null>
  run(): Promise<D1Result>
  all<T = unknown>(): Promise<D1Result<T>>
  raw<T = unknown>(): Promise<T[]>
}

interface D1Result<T = unknown> {
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

interface D1ExecResult {
  count: number
  duration: number
}

