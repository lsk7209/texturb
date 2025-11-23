export const MAX_TEXT_LENGTH = 20000

export interface ValidationResult {
  isValid: boolean
  error?: string
}

export function validateTextLength(text: string): ValidationResult {
  if (text.length > MAX_TEXT_LENGTH) {
    return {
      isValid: false,
      error: `텍스트가 너무 깁니다. ${MAX_TEXT_LENGTH.toLocaleString()}자 이하로 나누어 처리해 주세요.`,
    }
  }
  return { isValid: true }
}

export function validateDateFormat(dateString: string, format: string): ValidationResult {
  const formats: Record<string, RegExp> = {
    "YYYY-MM-DD": /^\d{4}-\d{2}-\d{2}$/,
    "YYYY.MM.DD": /^\d{4}\.\d{2}\.\d{2}$/,
    "YYYY/MM/DD": /^\d{4}\/\d{2}\/\d{2}$/,
  }

  const regex = formats[format]
  if (!regex) {
    return { isValid: false, error: "지원하지 않는 날짜 형식입니다." }
  }

  if (!regex.test(dateString.trim())) {
    return {
      isValid: false,
      error: `형식을 인식하지 못한 줄이 있습니다. ${format} 형식을 참고해 주세요.`,
    }
  }

  return { isValid: true }
}

export function validateNumberFormat(text: string): ValidationResult {
  const lines = text.split("\n").filter((line) => line.trim())
  const invalidLines: number[] = []

  lines.forEach((line, index) => {
    const cleaned = line.replace(/[,\s]/g, "")
    if (!/^-?\d+\.?\d*$/.test(cleaned)) {
      invalidLines.push(index + 1)
    }
  })

  if (invalidLines.length > 0) {
    return {
      isValid: false,
      error: `${invalidLines.join(", ")}번째 줄의 형식을 인식할 수 없습니다. 숫자만 입력해 주세요.`,
    }
  }

  return { isValid: true }
}
