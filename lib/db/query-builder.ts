/**
 * 타입 안전한 쿼리 빌더
 * SQL Injection 방지 및 타입 안정성 보장
 */

/**
 * WHERE 조건 빌더
 */
export class WhereBuilder {
  private conditions: string[] = []
  private params: unknown[] = []

  /**
   * 등호 조건 추가
   */
  equals(column: string, value: unknown): this {
    this.conditions.push(`${column} = ?`)
    this.params.push(value)
    return this
  }

  /**
   * IN 조건 추가
   */
  in(column: string, values: unknown[]): this {
    if (values.length === 0) {
      return this
    }
    const placeholders = values.map(() => "?").join(", ")
    this.conditions.push(`${column} IN (${placeholders})`)
    this.params.push(...values)
    return this
  }

  /**
   * LIKE 조건 추가
   */
  like(column: string, pattern: string): this {
    this.conditions.push(`${column} LIKE ?`)
    this.params.push(pattern)
    return this
  }

  /**
   * 범위 조건 추가
   */
  between(column: string, min: unknown, max: unknown): this {
    this.conditions.push(`${column} BETWEEN ? AND ?`)
    this.params.push(min, max)
    return this
  }

  /**
   * SQL 및 파라미터 반환
   */
  build(): { sql: string; params: unknown[] } {
    if (this.conditions.length === 0) {
      return { sql: "", params: [] }
    }

    return {
      sql: `WHERE ${this.conditions.join(" AND ")}`,
      params: this.params,
    }
  }
}

/**
 * SELECT 쿼리 빌더
 */
export class SelectBuilder {
  private columns: string[] = []
  private table: string = ""
  private whereBuilder = new WhereBuilder()
  private orderByClause: string = ""
  private limitValue?: number

  /**
   * 컬럼 선택
   */
  select(...columns: string[]): this {
    this.columns = columns
    return this
  }

  /**
   * 테이블 지정
   */
  from(table: string): this {
    this.table = table
    return this
  }

  /**
   * WHERE 조건 시작
   */
  where(): WhereBuilder {
    return this.whereBuilder
  }

  /**
   * 정렬
   */
  orderBy(column: string, direction: "ASC" | "DESC" = "ASC"): this {
    this.orderByClause = `ORDER BY ${column} ${direction}`
    return this
  }

  /**
   * 개수 제한
   */
  limit(count: number): this {
    this.limitValue = count
    return this
  }

  /**
   * SQL 쿼리 생성
   */
  toSQL(): { query: string; params: unknown[] } {
    const columns = this.columns.length > 0 ? this.columns.join(", ") : "*"
    let query = `SELECT ${columns} FROM ${this.table}`

    const where = this.whereBuilder.build()
    if (where.sql) {
      query += ` ${where.sql}`
    }

    if (this.orderByClause) {
      query += ` ${this.orderByClause}`
    }

    if (this.limitValue !== undefined) {
      query += ` LIMIT ?`
      where.params.push(this.limitValue)
    }

    return {
      query,
      params: where.params,
    }
  }
}

/**
 * INSERT 쿼리 빌더
 */
export class InsertBuilder {
  private table: string = ""
  private insertValues: Record<string, unknown> = {}

  /**
   * 테이블 지정
   */
  into(table: string): this {
    this.table = table
    return this
  }

  /**
   * 값 설정
   */
  values(data: Record<string, unknown>): this {
    this.insertValues = data
    return this
  }

  /**
   * SQL 쿼리 생성
   */
  toSQL(): { query: string; params: unknown[] } {
    const columns = Object.keys(this.insertValues)
    const placeholders = columns.map(() => "?").join(", ")
    const params = Object.values(this.insertValues)

    const query = `INSERT INTO ${this.table} (${columns.join(", ")}) VALUES (${placeholders})`

    return { query, params }
  }
}

