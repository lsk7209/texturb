"use client"

import { useState, useEffect, useCallback } from "react"
import { getStorageItem, setStorageItem, removeStorageItem } from "@/lib/storage"

export interface LocalHistory {
  lastUpdatedAt: string // ISO string
  sourceToolId?: string // e.g. "line-break-cleaner"
  inputText: string
}

const STORAGE_KEY = "textStudio.localHistory"

export function useLocalHistory() {
  const [history, setHistory] = useState<LocalHistory | null>(null)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = getStorageItem<LocalHistory>(STORAGE_KEY, null)
    if (stored) {
      setHistory(stored)
    }
  }, [])

  // Save history to localStorage
  const saveHistory = useCallback((inputText: string, sourceToolId?: string) => {
    if (!inputText.trim()) return

    const newHistory: LocalHistory = {
      lastUpdatedAt: new Date().toISOString(),
      sourceToolId,
      inputText,
    }

    if (setStorageItem(STORAGE_KEY, newHistory)) {
      setHistory(newHistory)
    }
  }, [])

  // Clear history
  const clearHistory = useCallback(() => {
    if (removeStorageItem(STORAGE_KEY)) {
      setHistory(null)
    }
  }, [])

  return {
    history,
    saveHistory,
    clearHistory,
  }
}
