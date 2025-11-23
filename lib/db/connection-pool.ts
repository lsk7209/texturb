/**
 * D1 연결 풀 관리
 * Prepared Statement 재사용 및 연결 최적화
 */

import { logger } from "@/lib/logger"
import type { D1Database, D1PreparedStatement } from "./d1-client"

/**
 * Prepared Statement 풀
 * 동일한 쿼리에 대해 재사용 가능한 statement 캐싱
 */
class StatementPool {
  private pool = new Map<string, D1PreparedStatement>()
  private readonly maxSize: number

  constructor(maxSize: number = 100) {
    this.maxSize = maxSize
  }

  /**
   * Statement 가져오기 또는 생성
   */
  get(query: string, db: D1Database): D1PreparedStatement {
    const key = this.normalizeQuery(query)

    // 캐시에서 찾기
    const cached = this.pool.get(key)
    if (cached) {
      return cached
    }

    // 풀 크기 제한
    if (this.pool.size >= this.maxSize) {
      this.evictOldest()
    }

    // 새 statement 생성 및 캐싱
    const statement = db.prepare(query)
    this.pool.set(key, statement)

    logger.debug("New statement added to pool", {
      poolSize: this.pool.size,
      maxSize: this.maxSize,
    })

    return statement
  }

  /**
   * 쿼리 정규화 (공백, 주석 제거)
   */
  private normalizeQuery(query: string): string {
    return query
      .trim()
      .replace(/\s+/g, " ") // 여러 공백을 하나로
      .replace(/--.*$/gm, "") // SQL 주석 제거
      .replace(/\/\*[\s\S]*?\*\//g, "") // 블록 주석 제거
  }

  /**
   * 가장 오래된 statement 제거 (FIFO)
   */
  private evictOldest(): void {
    const firstKey = this.pool.keys().next().value
    if (firstKey) {
      this.pool.delete(firstKey)
      logger.debug("Evicted oldest statement from pool", { key: firstKey })
    }
  }

  /**
   * 풀 크기 반환
   */
  size(): number {
    return this.pool.size
  }

  /**
   * 풀 초기화
   */
  clear(): void {
    this.pool.clear()
    logger.debug("Statement pool cleared")
  }

  /**
   * 풀 통계
   */
  getStats() {
    return {
      size: this.pool.size,
      maxSize: this.maxSize,
      utilization: (this.pool.size / this.maxSize) * 100,
    }
  }
}

// 전역 Statement 풀 인스턴스
const globalStatementPool = new StatementPool(100)

/**
 * Statement 풀에서 statement 가져오기
 */
export function getPooledStatement(query: string, db: D1Database): D1PreparedStatement {
  return globalStatementPool.get(query, db)
}

/**
 * Statement 풀 통계
 */
export function getPoolStats() {
  return globalStatementPool.getStats()
}

/**
 * Statement 풀 초기화
 */
export function clearStatementPool(): void {
  globalStatementPool.clear()
}

