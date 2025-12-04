/**
 * 환경 변수 검증 및 타입 안전한 접근
 * 애플리케이션 시작 시 필수 환경 변수 검증
 */

import { logger } from "@/lib/logger"

interface EnvConfig {
  // 필수 환경 변수
  required?: {
    [key: string]: {
      description: string
      validator?: (value: string) => boolean
      errorMessage?: string
    }
  }
  // 선택적 환경 변수 (기본값 제공)
  optional?: {
    [key: string]: {
      description: string
      defaultValue: string
      validator?: (value: string) => boolean
    }
  }
}

/**
 * 환경 변수 검증
 */
export function validateEnv(config: EnvConfig = {}): {
  valid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  // 필수 환경 변수 검증
  if (config.required) {
    for (const [key, { description, validator, errorMessage }] of Object.entries(config.required)) {
      const value = process.env[key]
      
      if (!value) {
        errors.push(`필수 환경 변수 ${key}가 설정되지 않았습니다. (${description})`)
        continue
      }

      if (validator && !validator(value)) {
        errors.push(errorMessage || `환경 변수 ${key}의 값이 유효하지 않습니다. (${description})`)
      }
    }
  }

  // 선택적 환경 변수 검증
  if (config.optional) {
    for (const [key, { description, validator }] of Object.entries(config.optional)) {
      const value = process.env[key]
      
      if (value && validator && !validator(value)) {
        warnings.push(`환경 변수 ${key}의 값이 유효하지 않습니다. 기본값을 사용합니다. (${description})`)
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * 프로덕션 환경 변수 검증
 */
export function validateProductionEnv(): void {
  if (process.env.NODE_ENV !== "production") {
    return // 개발 환경에서는 검증 건너뛰기
  }

  const validation = validateEnv({
    optional: {
      NEXT_PUBLIC_SITE_URL: {
        description: "사이트 URL",
        defaultValue: "https://texturb.com",
        validator: (value) => {
          try {
            new URL(value)
            return true
          } catch {
            return false
          }
        },
      },
    },
  })

  if (validation.errors.length > 0) {
    logger.error("환경 변수 검증 실패", new Error(validation.errors.join("; ")), {
      context: "env-validation",
      errors: validation.errors,
    })
  }

  if (validation.warnings.length > 0) {
    logger.warn("환경 변수 경고", {
      context: "env-validation",
      warnings: validation.warnings,
    })
  }
}

/**
 * URL 형식 검증
 */
export function isValidUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

/**
 * 숫자 범위 검증
 */
export function isValidNumber(value: string, min?: number, max?: number): boolean {
  const num = Number.parseInt(value, 10)
  if (isNaN(num)) return false
  if (min !== undefined && num < min) return false
  if (max !== undefined && num > max) return false
  return true
}

