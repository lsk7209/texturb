"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, PenTool } from "lucide-react"
import { TextStudioMain, type TabId } from "@/components/text-studio/text-studio-main"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"
import { useRecentTools } from "@/hooks/use-recent-tools"
import { useFavorites } from "@/hooks/use-favorites"
import { UTILITIES } from "@/lib/utilities-registry"
import { ToolCard } from "@/components/tool-card"
import { useLocalHistory } from "@/hooks/use-local-history"
import { LocalHistoryBanner } from "@/components/local-history-banner"

/**
 * Component: HomeClient
 * 홈 페이지의 클라이언트 컴포넌트로, 텍스트 스튜디오와 도구 목록을 표시합니다.
 * Steps: 1) 로컬 히스토리 복원 → 2) 즐겨찾기/최근 도구 표시 → 3) 워크플로 추천
 * @example <HomeClient />
 */
export function HomeClient() {
  const [activeTab, setActiveTab] = useState<TabId>("cleanup")
  const [restoredText, setRestoredText] = useState("")
  const [showBanner, setShowBanner] = useState(true)

  const { recentTools } = useRecentTools()
  const { favorites } = useFavorites()
  const { history, saveHistory, clearHistory } = useLocalHistory()

  const recentUtilities = useMemo(
    () =>
      recentTools
        .slice(0, 3)
        .map((id) => UTILITIES.find((u) => u.id === id))
        .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined),
    [recentTools],
  )

  const favoriteUtilities = useMemo(
    () =>
      favorites
        .slice(0, 4)
        .map((id) => UTILITIES.find((u) => u.id === id))
        .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined),
    [favorites],
  )

  const handleRestore = useCallback(() => {
    if (history) {
      setRestoredText(history.inputText)
      setShowBanner(false)
    }
  }, [history])

  const handleDismiss = useCallback(() => {
    clearHistory()
    setShowBanner(false)
  }, [clearHistory])

  const handleTextChange = useCallback(
    (text: string) => {
      if (text.trim()) {
        saveHistory(text, activeTab)
      }
    },
    [saveHistory, activeTab],
  )

  const handleTabChange = useCallback(
    (tab: string) => {
      setActiveTab(tab as TabId)
    },
    [],
  )

  return (
    <>
      <section aria-label="텍스트 작업 스튜디오">
        {history && showBanner && (
          <LocalHistoryBanner history={history} onRestore={handleRestore} onDismiss={handleDismiss} />
        )}
        <TextStudioMain
          activeTab={activeTab}
          onTabChange={handleTabChange}
          initialText={restoredText}
          onTextChange={handleTextChange}
          enableTracking={false}
        />
      </section>

      {favoriteUtilities.length > 0 && (
        <section className="max-w-5xl mx-auto" aria-labelledby="favorites-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="favorites-heading" className="text-2xl font-bold">
              자주 쓰는 도구
            </h2>
            <Link
              href="/tools"
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
            >
              전체 도구 <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteUtilities.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showFavorite />
            ))}
          </div>
        </section>
      )}

      {recentUtilities.length > 0 && (
        <section className="max-w-5xl mx-auto" aria-labelledby="recent-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="recent-heading" className="text-2xl font-bold">
              최근 사용 도구
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentUtilities.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showFavorite />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-5xl mx-auto" aria-labelledby="workflows-heading">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 id="workflows-heading" className="text-2xl font-bold">
              상황별 워크플로
            </h2>
            <p className="text-muted-foreground mt-1">자주 하는 작업을 묶어서 더 빠르게 처리하세요.</p>
          </div>
          <Link
            href="/workflows"
            className="text-sm font-bold text-muted-foreground hover:text-foreground flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
          >
            전체 보기 <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {WORKFLOW_PRESETS.slice(0, 2).map((workflow) => {
            const Icon = PenTool
            return (
              <Link
                key={workflow.id}
                href={`/workflow/${workflow.slug}`}
                className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-border/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`${workflow.title} 워크플로 시작하기`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {workflow.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{workflow.description}</p>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="bg-muted px-2 py-1 rounded-md">{workflow.steps.length}단계 코스</span>
                      <span aria-hidden="true">•</span>
                      <span className="sr-only">단계:</span>
                      <span>{workflow.steps.map((s) => s.title).join(" → ")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
