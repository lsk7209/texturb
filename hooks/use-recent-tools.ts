"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { getStorageItem, setStorageItem } from "@/lib/storage"

const MAX_RECENT = 6
const STORAGE_KEY = "textStudio.recentTools"

/**
 * Hook: useRecentTools
 * 최근 사용한 도구 목록을 관리하는 커스텀 훅
 * @returns {Object} recentTools, addRecentTool
 * @example const { recentTools, addRecentTool } = useRecentTools()
 */
export function useRecentTools() {
  const [recentTools, setRecentTools] = useState<string[]>([])

  useEffect(() => {
    const stored = getStorageItem<string[]>(STORAGE_KEY, [])
    if (Array.isArray(stored)) {
      setRecentTools(stored)
    }
  }, [])

  const addRecentTool = useCallback((toolId: string) => {
    setRecentTools((prev) => {
      const filtered = prev.filter((id) => id !== toolId)
      const updated = [toolId, ...filtered].slice(0, MAX_RECENT)
      setStorageItem(STORAGE_KEY, updated)
      return updated
    })
  }, [])

  // recentTools 배열을 메모이제이션
  const memoizedRecentTools = useMemo(() => recentTools, [recentTools])

  return {
    recentTools: memoizedRecentTools,
    addRecentTool,
  }
}
