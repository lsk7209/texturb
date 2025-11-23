/**
 * 타입 안전한 환경 변수 접근
 * Vercel 환경에서 안전하게 환경 변수에 접근
 */

/**
 * 서버 사이드 환경 변수 (타입 안전)
 */
export function getEnvVar(key: string, defaultValue?: string): string {
  // Vercel/Node.js 환경
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key]!
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
 * Vercel Postgres 연결 문자열 가져오기
 */
export function getPostgresUrl(): string | null {
  // Vercel Postgres URL 우선
  if (typeof process !== "undefined" && process.env.POSTGRES_URL) {
    return process.env.POSTGRES_URL
  }

  // 일반 DATABASE_URL도 지원
  if (typeof process !== "undefined" && process.env.DATABASE_URL) {
    return process.env.DATABASE_URL
  }

  return null
}

