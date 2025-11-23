/**
 * Circuit Breaker 패턴 구현
 * D1 데이터베이스 장애 시 자동 차단 및 복구
 */

import { logger } from "@/lib/logger"

export type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN"

export interface CircuitBreakerConfig {
  failureThreshold: number // 실패 임계값
  successThreshold: number // 반열림 상태에서 성공 임계값
  timeout: number // OPEN 상태 유지 시간 (ms)
  resetTimeout: number // HALF_OPEN 상태 유지 시간 (ms)
}

const DEFAULT_CONFIG: CircuitBreakerConfig = {
  failureThreshold: 5,
  successThreshold: 2,
  timeout: 60000, // 1분
  resetTimeout: 30000, // 30초
}

class CircuitBreaker {
  private state: CircuitState = "CLOSED"
  private failures = 0
  private successes = 0
  private lastFailureTime?: number
  private lastStateChangeTime?: number

  constructor(private config: CircuitBreakerConfig = DEFAULT_CONFIG) {}

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    // 상태 확인 및 전환
    this.updateState()

    if (this.state === "OPEN") {
      throw new CircuitBreakerOpenError("Circuit breaker is OPEN")
    }

    try {
      const result = await operation()
      this.onSuccess()
      return result
    } catch (error) {
      this.onFailure()
      throw error
    }
  }

  private updateState(): void {
    const now = Date.now()

    if (this.state === "OPEN") {
      // 타임아웃 후 HALF_OPEN으로 전환
      if (
        this.lastStateChangeTime &&
        now - this.lastStateChangeTime >= this.config.timeout
      ) {
        this.state = "HALF_OPEN"
        this.lastStateChangeTime = now
        this.successes = 0
        logger.info("Circuit breaker: OPEN -> HALF_OPEN")
      }
    } else if (this.state === "HALF_OPEN") {
      // 성공 임계값 도달 시 CLOSED로 전환
      if (this.successes >= this.config.successThreshold) {
        this.state = "CLOSED"
        this.failures = 0
        this.successes = 0
        logger.info("Circuit breaker: HALF_OPEN -> CLOSED")
      }
      // 리셋 타임아웃 후 다시 OPEN으로
      else if (
        this.lastStateChangeTime &&
        now - this.lastStateChangeTime >= this.config.resetTimeout
      ) {
        this.state = "OPEN"
        this.lastStateChangeTime = now
        logger.warn("Circuit breaker: HALF_OPEN -> OPEN (reset timeout)")
      }
    }
  }

  private onSuccess(): void {
    if (this.state === "HALF_OPEN") {
      this.successes++
    } else {
      // CLOSED 상태에서 성공 시 실패 카운터 리셋
      this.failures = 0
    }
  }

  private onFailure(): void {
    this.failures++
    this.lastFailureTime = Date.now()

    if (this.state === "CLOSED" && this.failures >= this.config.failureThreshold) {
      this.state = "OPEN"
      this.lastStateChangeTime = Date.now()
      logger.error("Circuit breaker: CLOSED -> OPEN", undefined, {
        failures: this.failures,
        threshold: this.config.failureThreshold,
      })
    } else if (this.state === "HALF_OPEN") {
      // HALF_OPEN 상태에서 실패 시 다시 OPEN으로
      this.state = "OPEN"
      this.lastStateChangeTime = Date.now()
      logger.warn("Circuit breaker: HALF_OPEN -> OPEN (failure in half-open state)")
    }
  }

  getState(): CircuitState {
    return this.state
  }

  reset(): void {
    this.state = "CLOSED"
    this.failures = 0
    this.successes = 0
    this.lastFailureTime = undefined
    this.lastStateChangeTime = undefined
    logger.info("Circuit breaker: manually reset to CLOSED")
  }
}

export class CircuitBreakerOpenError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "CircuitBreakerOpenError"
  }
}

// 전역 Circuit Breaker 인스턴스 (D1 데이터베이스용)
let d1CircuitBreaker: CircuitBreaker | null = null

/**
 * D1 데이터베이스용 Circuit Breaker 가져오기
 */
export function getD1CircuitBreaker(config?: CircuitBreakerConfig): CircuitBreaker {
  if (!d1CircuitBreaker) {
    d1CircuitBreaker = new CircuitBreaker(config)
  }
  return d1CircuitBreaker
}

/**
 * Circuit Breaker로 D1 작업 실행
 */
export async function withCircuitBreaker<T>(
  operation: () => Promise<T>,
  config?: CircuitBreakerConfig
): Promise<T> {
  const breaker = getD1CircuitBreaker(config)
  return breaker.execute(operation)
}

