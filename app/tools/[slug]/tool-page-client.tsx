"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { UTILITIES } from "@/lib/utilities-registry"
import { TextStudioMain } from "@/components/text-studio/text-studio-main"
import { PrivacyMessage } from "@/components/privacy-message"
import { ShareEmbedPanel } from "@/components/share-embed-panel"
import { ErrorBoundary } from "@/components/error-boundary"
import { ToolContentSection } from "@/components/tool-content-section"
import { FeedbackWidget } from "@/components/feedback-widget"
import { BugReportLink } from "@/components/bug-report-link"
import { AdSlot } from "@/components/ad-slot"
import { FavoriteToggle } from "@/components/favorite-toggle"
import { useRecentTools } from "@/hooks/use-recent-tools"
import { ToolDetailSection } from "@/components/tool-detail-section"
import { useToolView } from "@/hooks/use-analytics"
import { ToolFAQSection } from "@/components/tool-faq-section"
import { ToolJsonLd } from "@/components/tool-json-ld"

interface ToolPageClientProps {
  slug: string
  searchParams: { [key: string]: string | string[] | undefined }
}

export function ToolPageClient({ slug, searchParams }: ToolPageClientProps) {
  const tool = UTILITIES.find((t) => t.slug === slug)
  const { addRecentTool } = useRecentTools()

  useToolView(tool?.id || slug)

  useEffect(() => {
    if (tool) {
      addRecentTool(tool.id)
    }
  }, [tool, addRecentTool])

  if (!tool) {
    notFound()
  }

  const activeTab = tool.tabId || "cleanup"

  return (
    <main className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl space-y-8">
        <div className="space-y-4">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1" aria-hidden="true" />
            다른 유틸 보기
          </Link>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                {tool.category}
              </span>
              <FavoriteToggle toolId={tool.id} variant="full" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
            <p className="text-lg text-muted-foreground">{tool.description}</p>
          </div>
        </div>

        <ErrorBoundary>
          <TextStudioMain key={tool.slug} initialTab={activeTab} toolId={tool.slug} searchParams={searchParams} />
        </ErrorBoundary>

        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_TOOL_PAGE || ""} format="horizontal" />

        <ToolDetailSection toolId={tool.id} />

        <ToolFAQSection toolId={tool.id} />

        <ToolContentSection toolId={tool.id} />

        <FeedbackWidget toolId={tool.id} />

        <div className="flex justify-center">
          <BugReportLink toolId={tool.id} />
        </div>

        <ShareEmbedPanel toolSlug={tool.slug} toolName={tool.name} currentOptions={searchParams} />

        <PrivacyMessage />
      </div>
      <ToolJsonLd toolName={tool.name} toolDescription={tool.description} toolSlug={tool.slug} />
    </main>
  )
}

