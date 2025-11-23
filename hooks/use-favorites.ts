"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { getStorageItem, setStorageItem } from "@/lib/storage"

const MAX_FAVORITES = 20
const STORAGE_KEY = "textStudio.favorites"

/**
 * Hook: useFavorites
 * 즐겨찾기 도구 관리를 위한 커스텀 훅
 * @returns {Object} favorites, toggleFavorite, isFavorite
 * @example const { favorites, toggleFavorite, isFavorite } = useFavorites()
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const stored = getStorageItem<string[]>(STORAGE_KEY, [])
    if (Array.isArray(stored)) {
      setFavorites(stored)
    }
  }, [])

  const toggleFavorite = useCallback(
    (toolId: string) => {
      setFavorites((prev) => {
        let updated: string[]
        if (prev.includes(toolId)) {
          updated = prev.filter((id) => id !== toolId)
        } else {
          updated = [...prev, toolId].slice(0, MAX_FAVORITES)
        }
        setStorageItem(STORAGE_KEY, updated)
        return updated
      })
    },
    [] // 의존성 없음 - 함수는 안정적
  )

  const isFavorite = useCallback(
    (toolId: string) => favorites.includes(toolId),
    [favorites]
  )

  // favorites 배열을 메모이제이션하여 불필요한 재생성 방지
  const memoizedFavorites = useMemo(() => favorites, [favorites])

  return {
    favorites: memoizedFavorites,
    toggleFavorite,
    isFavorite,
  }
}
