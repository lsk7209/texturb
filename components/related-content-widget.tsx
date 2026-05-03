import Link from "next/link"
import { BookOpen, FileText } from "lucide-react"
import { GUIDES } from "@/lib/guides-registry"
import { BLOG_POSTS } from "@/lib/blog-registry"

interface RelatedContentWidgetProps {
  toolId: string
  toolKeywords?: string[]
  maxItems?: number
}

/**
 * 도구 페이지에서 관련 가이드·블로그 글로 내부 링크를 강화하는 위젯.
 * 1) 가이드 섹션의 relatedToolId 매칭
 * 2) 블로그의 targetKeywords가 도구 키워드와 겹치는 글
 */
export function RelatedContentWidget({
  toolId,
  toolKeywords = [],
  maxItems = 3,
}: RelatedContentWidgetProps) {
  const relatedGuides = GUIDES.filter((g) =>
    g.sections.some((s) => s.relatedToolId === toolId),
  ).slice(0, maxItems)

  const lowerKeywords = toolKeywords.map((k) => k.toLowerCase())
  const relatedPosts = BLOG_POSTS.filter((p) =>
    p.targetKeywords.some((k) => lowerKeywords.includes(k.toLowerCase())),
  ).slice(0, maxItems)

  if (relatedGuides.length === 0 && relatedPosts.length === 0) return null

  return (
    <aside className="rounded-xl border border-border bg-card p-5 space-y-5">
      {relatedGuides.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold mb-3">
            <BookOpen className="w-4 h-4" /> 관련 가이드
          </h3>
          <ul className="space-y-2">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground line-clamp-2"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {relatedPosts.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold mb-3">
            <FileText className="w-4 h-4" /> 관련 글
          </h3>
          <ul className="space-y-2">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground line-clamp-2"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
