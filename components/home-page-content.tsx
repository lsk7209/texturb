"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"
import { UTILITIES } from "@/lib/utilities-registry"
import { useLocalHistory } from "@/hooks/use-local-history"
import { useRecentTools } from "@/hooks/use-recent-tools"
import { useFavorites } from "@/hooks/use-favorites"
import dynamic from "next/dynamic"

// 큰 컴포넌트들을 dynamic import로 lazy load
const LocalHistoryBanner = dynamic(() => import("./local-history-banner").then((mod) => ({ default: mod.LocalHistoryBanner })), {
  ssr: false, // 클라이언트 전용 컴포넌트
})

const StepTabs = dynamic(() => import("./text-studio/step-tabs").then((mod) => ({ default: mod.StepTabs })), {
  loading: () => <div className="h-12 w-full animate-pulse bg-muted rounded-md" />,
})

const EditorPanel = dynamic(() => import("./text-studio/editor-panel").then((mod) => ({ default: mod.EditorPanel })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-md" />,
})

import type { TabId } from "@/components/text-studio/text-studio-main"

export function HomePageContent() {
  const [activeTab, setActiveTab] = useState<TabId>("cleanup")
  const [inputText, setInputText] = useState("")
  const [previewText, setPreviewText] = useState("")
  const { history, saveHistory, clearHistory } = useLocalHistory()
  const { recentTools } = useRecentTools()
  const { favorites } = useFavorites()

  // 즐겨찾기 도구 목록 메모이제이션
  const favoriteTools = useMemo(() => {
    return favorites.slice(0, 6)
      .map((toolId) => UTILITIES.find((u) => u.id === toolId))
      .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined)
  }, [favorites])

  // 최근 사용 도구 목록 메모이제이션
  const recentToolsList = useMemo(() => {
    return recentTools.slice(0, 6)
      .map((toolId) => UTILITIES.find((u) => u.id === toolId))
      .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined)
  }, [recentTools])

  const handleRestore = () => {
    if (history) {
      setInputText(history.inputText)
      // LocalHistoryBanner는 history가 없으면 자동으로 사라집니다
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {history && <LocalHistoryBanner history={history} onRestore={handleRestore} onDismiss={clearHistory} />}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-5 sm:space-y-7 pb-6 sm:pb-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                텍스트 작업,{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  한 번에
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                글자수 세기, 줄바꿈 정리, 대소문자 변환 등 텍스트 작업에 필요한 모든 도구를 한곳에서 무료로 사용하세요.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
              <Link
                href="/tools"
                className="px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              >
                전체 도구 보기
              </Link>
              <Link
                href="/guides"
                className="px-7 py-3.5 bg-card border-2 border-border text-foreground rounded-lg font-semibold hover:bg-accent hover:border-primary/20 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              >
                사용 가이드
              </Link>
            </div>
          </div>

          {/* Main Studio */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">바로 시작하기</h2>
            </div>
            <StepTabs
              activeTab={activeTab as TabId}
              onTabChange={(tab) => setActiveTab(tab as TabId)}
            />
            <EditorPanel activeTab={activeTab as TabId} text={inputText} setText={setInputText} onTextChange={setInputText} />
          </div>

          {/* Favorites Section */}
          {favoriteTools.length > 0 && (
            <section className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">즐겨찾기</h2>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {favoriteTools.map((tool) => (
                  <Link key={tool.id} href={`/tools/${tool.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    <Card className="hover:bg-accent transition-all cursor-pointer h-full hover:shadow-lg border-2 hover:border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base sm:text-lg leading-snug">{tool.name}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed mt-1.5">{tool.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Recent Tools Section */}
          {recentToolsList.length > 0 && (
            <section className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">최근 사용한 도구</h2>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentToolsList.map((tool) => (
                  <Link key={tool.id} href={`/tools/${tool.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    <Card className="hover:bg-accent transition-all cursor-pointer h-full hover:shadow-lg border-2 hover:border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base sm:text-lg leading-snug">{tool.name}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed mt-1.5">{tool.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Workflows Section */}
          <section className="space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">상황별 작업 워크플로</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {WORKFLOW_PRESETS.map((workflow) => (
                <Card key={workflow.id} className="hover:shadow-lg transition-all border-2 hover:border-primary/20 hover:scale-[1.01]">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg leading-snug">{workflow.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-1.5">{workflow.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/workflow/${workflow.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                      <Button className="w-full min-h-[48px] text-sm sm:text-base font-semibold shadow-md hover:shadow-primary hover:scale-[1.02] active:scale-[0.98] transition-all" size="lg">
                        워크플로 시작
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
