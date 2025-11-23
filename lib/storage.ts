/**
 * localStorage 유틸리티
 * 안전하고 최적화된 localStorage 접근을 제공합니다
 */

import { logger } from "@/lib/logger"

/**
 * localStorage에 안전하게 값을 저장합니다
 */
export function setStorageItem(key: string, value: unknown): boolean {
  try {
    if (typeof window === "undefined") {
      return false
    }

    const serialized = JSON.stringify(value)
    localStorage.setItem(key, serialized)
    return true
  } catch (error) {
    logger.error("Failed to set storage item", error, { key })
    return false
  }
}

/**
 * localStorage에서 안전하게 값을 가져옵니다
 */
export function getStorageItem<T = unknown>(key: string, defaultValue: T | null = null): T | null {
  try {
    if (typeof window === "undefined") {
      return defaultValue
    }

    const item = localStorage.getItem(key)
    if (item === null) {
      return defaultValue
    }

    return JSON.parse(item) as T
  } catch (error) {
    logger.error("Failed to get storage item", error, { key })
    return defaultValue
  }
}

/**
 * localStorage에서 항목을 안전하게 제거합니다
 */
export function removeStorageItem(key: string): boolean {
  try {
    if (typeof window === "undefined") {
      return false
    }

    localStorage.removeItem(key)
    return true
  } catch (error) {
    logger.error("Failed to remove storage item", error, { key })
    return false
  }
}

/**
 * localStorage가 사용 가능한지 확인합니다
 */
export function isStorageAvailable(): boolean {
  try {
    if (typeof window === "undefined") {
      return false
    }

    const test = "__storage_test__"
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

