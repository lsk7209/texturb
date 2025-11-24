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
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

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
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Header Section */}
          <div className="space-y-4">
            <BreadcrumbNav
              items={[
                { label: "홈", href: "/" },
                { label: "도구", href: "/tools" },
                { label: tool.name },
              ]}
            />

            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {tool.category}
                </span>
                <FavoriteToggle toolId={tool.id} variant="full" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{tool.name}</h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">{tool.description}</p>
            </div>
          </div>

          {/* Main Tool Section */}
          <div className="w-full">
            <ErrorBoundary>
              <TextStudioMain key={tool.slug} initialTab={activeTab} toolId={tool.slug} searchParams={searchParams} />
            </ErrorBoundary>
          </div>

          {/* Ad Slot */}
          <div className="flex justify-center">
            <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_TOOL_PAGE || ""} format="horizontal" />
          </div>

          {/* Additional Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <ToolDetailSection toolId={tool.id} />
              <ToolFAQSection toolId={tool.id} />
              <ToolContentSection toolId={tool.id} />
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 space-y-6">
                <FeedbackWidget toolId={tool.id} />
                <div className="flex flex-col items-center gap-4">
                  <BugReportLink toolId={tool.id} />
                </div>
                <ShareEmbedPanel toolSlug={tool.slug} toolName={tool.name} currentOptions={searchParams} />
              </div>
            </div>
          </div>

          {/* Privacy Message */}
          <PrivacyMessage />
        </div>
      </div>
      <ToolJsonLd toolName={tool.name} toolDescription={tool.description} toolSlug={tool.slug} />
    </main>
  )
}

