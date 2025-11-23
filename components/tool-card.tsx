"use client"

import { memo } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FavoriteToggle } from "./favorite-toggle"

/**
 * Component: ToolCard
 * @param {Object} tool - 도구 정보 객체 [Required]
 * @param {string} tool.id - 도구 고유 ID
 * @param {string} tool.slug - 도구 URL 슬러그
 * @param {string} tool.name - 도구 이름
 * @param {string} tool.category - 도구 카테고리
 * @param {string} tool.description - 도구 설명
 * @param {boolean} showFavorite - 즐겨찾기 토글 표시 여부 [Optional, default=false]
 * @example <ToolCard tool={{ id: "char-counter", slug: "char-counter", name: "글자수 세기", category: "분석", description: "텍스트의 글자수를 세어줍니다" }} showFavorite />
 */
interface ToolCardProps {
  tool: {
    id: string
    slug: string
    name: string
    category: string
    description: string
  }
  showFavorite?: boolean
}

function ToolCardComponent({ tool, showFavorite = false }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block relative"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">{tool.category}</span>
        {showFavorite && <FavoriteToggle toolId={tool.id} variant="icon" />}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
      <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        사용하기 <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
      </div>
    </Link>
  )
}

// 메모이제이션으로 불필요한 리렌더링 방지
export const ToolCard = memo(ToolCardComponent, (prevProps, nextProps) => {
  // tool 객체의 내용이 같으면 리렌더링하지 않음
  return (
    prevProps.tool.id === nextProps.tool.id &&
    prevProps.tool.slug === nextProps.tool.slug &&
    prevProps.tool.name === nextProps.tool.name &&
    prevProps.tool.category === nextProps.tool.category &&
    prevProps.tool.description === nextProps.tool.description &&
    prevProps.showFavorite === nextProps.showFavorite
  )
})
