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

type TabId = "cleanup" | "count" | "format" | "highlight"

export function HomePageContent() {
  const [activeTab, setActiveTab] = useState<TabId>("cleanup")
  const [inputText, setInputText] = useState("")
  const [previewText, setPreviewText] = useState("")
  const { history, loadHistory, clearHistory } = useLocalHistory()
  const { recentTools } = useRecentTools()
  const { favorites } = useFavorites()

  const handleLoadHistory = () => {
    if (history) {
      setInputText(history.inputText)
      setPreviewText(history.previewText)
      setActiveTab(history.activeTab as TabId)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {history && <LocalHistoryBanner onLoad={handleLoadHistory} onClear={clearHistory} />}

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Studio */}
          <div className="space-y-6">
            <StepTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <EditorPanel activeTab={activeTab} text={inputText} setText={setInputText} onTextChange={setInputText} />
          </div>

          {/* Favorites Section */}
          {favorites.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">즐겨찾기</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {favorites.slice(0, 6).map((toolId) => {
                  const tool = UTILITIES.find((u) => u.id === toolId)
                  if (!tool) return null
                  return (
                    <Link key={tool.id} href={`/tools/${tool.id}`}>
                      <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
                        <CardHeader>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
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
            <section>
              <h2 className="text-2xl font-semibold mb-4">최근 사용한 도구</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recentTools.slice(0, 6).map((toolId) => {
                  const tool = UTILITIES.find((u) => u.id === toolId)
                  if (!tool) return null
                  return (
                    <Link key={tool.id} href={`/tools/${tool.id}`}>
                      <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
                        <CardHeader>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {/* Workflows Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">상황별 작업 워크플로</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {WORKFLOW_PRESETS.map((workflow) => (
                <Card key={workflow.id}>
                  <CardHeader>
                    <CardTitle>{workflow.name}</CardTitle>
                    <CardDescription>{workflow.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/workflow/${workflow.slug}`}>
                      <Button className="w-full">워크플로 시작</Button>
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
