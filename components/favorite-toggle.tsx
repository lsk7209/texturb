"use client"

import { Star } from "lucide-react"
import { useFavorites } from "@/hooks/use-favorites"

/**
 * Component: FavoriteToggle
 * @param {string} toolId - 도구 고유 ID [Required]
 * @param {"icon" | "full"} variant - 표시 형태 (아이콘만 또는 텍스트 포함) [Optional, default="icon"]
 * @param {string} className - 추가 CSS 클래스 [Optional]
 * @example <FavoriteToggle toolId="char-counter" variant="icon" />
 */
interface FavoriteToggleProps {
  toolId: string
  variant?: "icon" | "full"
  className?: string
}

export function FavoriteToggle({ toolId, variant = "icon", className = "" }: FavoriteToggleProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(toolId)

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(toolId)
      }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        favorited
          ? "bg-yellow-50 text-yellow-600 hover:bg-yellow-100 border border-yellow-200"
          : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
      } ${className}`}
      aria-label={favorited ? "즐겨찾기 해제" : "즐겨찾기 추가"}
    >
      <Star className={`w-4 h-4 ${favorited ? "fill-current" : ""}`} aria-hidden="true" />
      {variant === "full" && <span className="text-sm font-medium">{favorited ? "즐겨찾기 해제" : "즐겨찾기"}</span>}
    </button>
  )
}
