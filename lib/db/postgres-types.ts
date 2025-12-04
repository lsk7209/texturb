/**
 * Postgres 쿼리 결과 타입 정의
 * @vercel/postgres의 unsafe 메서드 반환 타입을 안전하게 처리
 */

export interface PostgresQueryResult<T = unknown> {
  rows: T[]
  rowCount?: number
}

export interface PostgresRow {
  [key: string]: unknown
}

/**
 * Postgres 쿼리 결과를 안전하게 배열로 변환
 */
export function normalizePostgresResult<T extends PostgresRow = PostgresRow>(
  result: unknown
): T[] {
  if (Array.isArray(result)) {
    return result as T[]
  }

  if (result && typeof result === "object" && "rows" in result) {
    const typedResult = result as PostgresQueryResult<T>
    return Array.isArray(typedResult.rows) ? typedResult.rows : []
  }

  return []
}

/**
 * 단일 행 결과 추출
 */
export function extractSingleRow<T extends PostgresRow = PostgresRow>(
  result: unknown
): T | null {
  const rows = normalizePostgresResult<T>(result)
  return rows.length > 0 ? rows[0] : null
}

/**
 * 행 개수 추출 (DELETE, UPDATE 등)
 */
export function extractRowCount(result: unknown): number {
  if (result && typeof result === "object") {
    if ("rowCount" in result && typeof result.rowCount === "number") {
      return result.rowCount
    }
    if ("count" in result && typeof result.count === "number") {
      return result.count
    }
    if (Array.isArray(result)) {
      return result.length
    }
  }
  return 0
}

