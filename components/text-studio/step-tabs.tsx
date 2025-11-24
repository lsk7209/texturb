"use client"

import { cn } from "@/lib/utils"
import { AlignLeft, FileText, Type, Sparkles } from "lucide-react"
import type { TabId } from "./text-studio-main"

interface StepTabsProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function StepTabs({ activeTab, onTabChange }: StepTabsProps) {
  const tabs = [
    {
      id: "cleanup" as TabId,
      label: "글 정리(줄바꿈)",
      icon: AlignLeft,
    },
    {
      id: "count" as TabId,
      label: "글자수·길이",
      icon: FileText,
    },
    {
      id: "format" as TabId,
      label: "대소문자 변환",
      icon: Type,
    },
    {
      id: "highlight" as TabId,
      label: "특수문자·기호",
      icon: Sparkles,
    },
  ]

  return (
    <div
      className="w-full overflow-x-auto pb-2 sm:pb-3 md:pb-0 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
      role="tablist"
      aria-label="텍스트 작업 도구"
    >
      <div className="flex md:grid md:grid-cols-4 gap-2 sm:gap-3 min-w-[max-content] md:min-w-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                "flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border min-h-[44px] shrink-0",
                isActive
                  ? "bg-card border-primary/30 text-primary shadow-sm ring-1 ring-primary/20"
                  : "bg-muted/50 border-transparent text-muted-foreground hover:bg-card hover:text-foreground hover:border-border",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
            >
              <Icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
