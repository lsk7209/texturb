"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"
import { UTILITIES } from "@/lib/utilities-registry"
import { useLocalHistory } from "@/hooks/use-local-history"
import { useRecentTools } from "@/hooks/use-recent-tools"
import { useFavorites } from "@/hooks/use-favorites"
import { LocalHistoryBanner } from "./local-history-banner"
import { StepTabs } from "./text-studio/step-tabs"
import { EditorPanel } from "./text-studio/editor-panel"

import type { TabId } from "@/components/text-studio/text-studio-main"

export function HomePageContent() {
  const [activeTab, setActiveTab] = useState<TabId>("cleanup")
  const [inputText, setInputText] = useState("")
  const [previewText, setPreviewText] = useState("")
  const { history, saveHistory, clearHistory } = useLocalHistory()
  const { recentTools } = useRecentTools()
  const { favorites } = useFavorites()

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
          <div className="text-center space-y-4 sm:space-y-6 pb-4 sm:pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              텍스트 작업, <span className="text-primary">한 번에</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              글자수 세기, 줄바꿈 정리, 대소문자 변환 등 텍스트 작업에 필요한 모든 도구를 한곳에서 무료로 사용하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
              <Link
                href="/tools"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              >
                전체 도구 보기
              </Link>
              <Link
                href="/guides"
                className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-colors shadow-sm hover:shadow-md text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              >
                사용 가이드
              </Link>
            </div>
          </div>

          {/* Main Studio */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold">바로 시작하기</h2>
            </div>
            <StepTabs
              activeTab={activeTab as TabId}
              onTabChange={(tab) => setActiveTab(tab as TabId)}
            />
            <EditorPanel activeTab={activeTab as TabId} text={inputText} setText={setInputText} onTextChange={setInputText} />
          </div>

          {/* Favorites Section */}
          {favorites.length > 0 && (
            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold leading-tight">즐겨찾기</h2>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {favorites.slice(0, 6).map((toolId) => {
                  const tool = UTILITIES.find((u) => u.id === toolId)
                  if (!tool) return null
                  return (
                    <Link key={tool.id} href={`/tools/${tool.id}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
                      <Card className="hover:bg-accent transition-colors cursor-pointer h-full hover:shadow-md">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base sm:text-lg leading-snug">{tool.name}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed mt-1.5">{tool.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {/* Recent Tools Section */}
          {recentTools.length > 0 && (
            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold leading-tight">최근 사용한 도구</h2>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentTools.slice(0, 6).map((toolId) => {
                  const tool = UTILITIES.find((u) => u.id === toolId)
                  if (!tool) return null
                  return (
                    <Link key={tool.id} href={`/tools/${tool.id}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
                      <Card className="hover:bg-accent transition-colors cursor-pointer h-full hover:shadow-md">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base sm:text-lg leading-snug">{tool.name}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed mt-1.5">{tool.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {/* Workflows Section */}
          <section className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold leading-tight">상황별 작업 워크플로</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {WORKFLOW_PRESETS.map((workflow) => (
                <Card key={workflow.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg leading-snug">{workflow.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-1.5">{workflow.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/workflow/${workflow.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                      <Button className="w-full min-h-[44px] text-sm sm:text-base" size="lg">
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
