/**
 * 에러 메시지 정제
 * 민감한 정보가 노출되지 않도록 에러 메시지 필터링
 */

/**
 * 민감한 정보 패턴
 */
const SENSITIVE_PATTERNS = [
  /password/i,
  /secret/i,
  /token/i,
  /key/i,
  /api[_-]?key/i,
  /auth/i,
  /credential/i,
  /database/i,
  /connection[_-]?string/i,
  /sql/i,
  /query/i,
]

/**
 * 에러 메시지에서 민감한 정보 제거
 */
export function sanitizeErrorMessage(message: string): string {
  let sanitized = message

  // 민감한 패턴이 포함된 경우 일반적인 메시지로 대체
  for (const pattern of SENSITIVE_PATTERNS) {
    if (pattern.test(sanitized)) {
      return "An error occurred. Please try again later."
    }
  }

  // 스택 트레이스 제거 (프로덕션)
  if (process.env.NODE_ENV === "production") {
    // 파일 경로 제거
    sanitized = sanitized.replace(/\/[^\s]+/g, "[path]")
    // 라인 번호 제거
    sanitized = sanitized.replace(/:\d+:\d+/g, "")
  }

  return sanitized
}

/**
 * 에러 객체에서 안전한 에러 메시지 생성
 */
export function createSafeErrorMessage(error: unknown, defaultMessage: string = "An error occurred"): string {
  if (!(error instanceof Error)) {
    return defaultMessage
  }

  // 개발 환경에서는 원본 메시지 반환
  if (process.env.NODE_ENV === "development") {
    return error.message
  }

  // 프로덕션에서는 정제된 메시지 반환
  return sanitizeErrorMessage(error.message) || defaultMessage
}

/**
 * 에러 스택에서 민감한 정보 제거
 */
export function sanitizeErrorStack(stack?: string): string | undefined {
  if (!stack || process.env.NODE_ENV === "development") {
    return stack
  }

  // 파일 경로 제거
  let sanitized = stack.replace(/\/[^\s]+/g, "[path]")
  // 라인 번호 제거
  sanitized = sanitized.replace(/:\d+:\d+/g, "")

  return sanitized
}

/**
 * 클라이언트에 반환할 안전한 에러 객체 생성
 */
export function createSafeErrorResponse(error: unknown): {
  message: string
  code?: string
  requestId?: string
} {
  const requestId = crypto.randomUUID()

  if (error instanceof Error) {
    return {
      message: createSafeErrorMessage(error),
      code: error.name,
      requestId,
    }
  }

  return {
    message: "An error occurred. Please try again later.",
    requestId,
  }
}

