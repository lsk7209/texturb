/**
 * D1 데이터베이스 입력 검증
 * SQL Injection 방지 및 데이터 무결성 보장
 */

/**
 * SQL Injection 위험이 있는 문자 패턴
 */
const SQL_INJECTION_PATTERNS = [
  /('|(\\')|(;)|(\\)|(\/\*)|(\*\/)|(--)|(\[)|(\])|(\%27)|(\%3B)|(\%2F)|(\%2A))/gi,
  /(union|select|insert|update|delete|drop|create|alter|exec|execute|script)/gi,
]

/**
 * 입력값이 SQL Injection 위험이 있는지 검사
 */
export function isSQLInjectionRisk(input: string): boolean {
  if (!input || typeof input !== "string") {
    return false
  }

  return SQL_INJECTION_PATTERNS.some((pattern) => pattern.test(input))
}

/**
 * 입력값 검증 및 정제
 */
export function sanitizeInput(input: unknown): string {
  if (input === null || input === undefined) {
    return ""
  }

  const str = String(input).trim()

  // SQL Injection 위험 검사
  if (isSQLInjectionRisk(str)) {
    throw new Error("Invalid input detected: potential SQL injection risk")
  }

  return str
}

/**
 * 숫자 입력 검증
 */
export function validateNumber(input: unknown): number {
  if (typeof input === "number") {
    if (!isFinite(input) || isNaN(input)) {
      throw new Error("Invalid number: must be finite")
    }
    return input
  }

  if (typeof input === "string") {
    const num = Number.parseFloat(input)
    if (isNaN(num) || !isFinite(num)) {
      throw new Error("Invalid number format")
    }
    return num
  }

  throw new Error("Input must be a number")
}

/**
 * 날짜 문자열 검증 (YYYY-MM-DD 형식)
 */
export function validateDateString(input: unknown): string {
  const str = sanitizeInput(input)

  // YYYY-MM-DD 형식 검증
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(str)) {
    throw new Error("Invalid date format: must be YYYY-MM-DD")
  }

  // 유효한 날짜인지 확인
  const date = new Date(str)
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date: not a valid calendar date")
  }

  return str
}

/**
 * ID 검증 (알파벳, 숫자, 하이픈, 언더스코어만 허용)
 */
export function validateId(input: unknown): string {
  const str = sanitizeInput(input)

  // ID 형식 검증: 알파벳, 숫자, 하이픈, 언더스코어만 허용
  const idRegex = /^[a-zA-Z0-9_-]+$/
  if (!idRegex.test(str)) {
    throw new Error("Invalid ID format: only alphanumeric, hyphen, and underscore allowed")
  }

  return str
}

