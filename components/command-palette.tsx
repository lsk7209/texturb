"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Workflow, BookOpen } from "lucide-react"
import { UTILITIES } from "@/lib/utilities-registry"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"
import { GUIDES } from "@/lib/guides-registry"

type SearchItem = {
  type: "tool" | "workflow" | "guide"
  id: string
  title: string
  description: string
  url: string
}

interface CommandPaletteProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function CommandPalette({ open: controlledOpen, onOpenChange }: CommandPaletteProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setIsOpen = (value: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(value)
    }
    onOpenChange?.(value)
  }

  // Build search index
  const searchItems: SearchItem[] = [
    ...UTILITIES.map((tool) => ({
      type: "tool" as const,
      id: tool.id,
      title: tool.name,
      description: tool.description,
      url: `/tools/${tool.slug}`,
    })),
    ...WORKFLOW_PRESETS.map((workflow) => ({
      type: "workflow" as const,
      id: workflow.id,
      title: workflow.title,
      description: workflow.description,
      url: `/workflows/${workflow.id}`,
    })),
    ...GUIDES.map((guide) => ({
      type: "guide" as const,
      id: guide.slug,
      title: guide.title,
      description: guide.description,
      url: `/guides/${guide.slug}`,
    })),
  ]

  // Filter items based on query
  const filteredItems = query
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
    : searchItems.slice(0, 10)

  // Keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Open/close palette with Ctrl+/ or Cmd+/
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault()
        setIsOpen(!isOpen)
        setQuery("")
        setSelectedIndex(0)
        return
      }

      if (!isOpen) return

      // Navigate with arrow keys
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          router.push(filteredItems[selectedIndex].url)
          setIsOpen(false)
        }
      } else if (e.key === "Escape") {
        e.preventDefault()
        setIsOpen(false)
      }
    },
    [isOpen, filteredItems, selectedIndex, router],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  if (!isOpen) return null

  const getIcon = (type: SearchItem["type"]) => {
    switch (type) {
      case "tool":
        return <FileText className="w-4 h-4" />
      case "workflow":
        return <Workflow className="w-4 h-4" />
      case "guide":
        return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeLabel = (type: SearchItem["type"]) => {
    switch (type) {
      case "tool":
        return "도구"
      case "workflow":
        return "워크플로"
      case "guide":
        return "가이드"
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" 
        onClick={() => {
          setIsOpen(false)
          setQuery("")
        }}
        aria-hidden="true"
      />

      {/* Palette */}
      <div 
        className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="text"
              placeholder="도구, 워크플로, 가이드 검색... (Ctrl + / 또는 Cmd + /)"
              className="flex-1 outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              aria-label="검색 입력"
            />
            <kbd className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border hidden sm:inline">ESC</kbd>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <p className="text-sm">검색 결과가 없습니다.</p>
                {query.trim() && (
                  <p className="text-xs text-muted-foreground/70 mt-1">다른 키워드로 검색해 보세요.</p>
                )}
              </div>
            ) : (
              <div className="py-2">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-start gap-3 px-4 py-3 hover:bg-accent transition-colors text-left ${
                      index === selectedIndex ? "bg-accent" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      router.push(item.url)
                      setIsOpen(false)
                      setQuery("")
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    aria-label={`${item.title} - ${getTypeLabel(item.type)}`}
                  >
                    <div className="mt-1 text-muted-foreground shrink-0">{getIcon(item.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground">{item.title}</span>
                        <span className="px-1.5 py-0.5 bg-muted text-muted-foreground text-xs rounded shrink-0">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-2 bg-muted/50 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 text-xs text-muted-foreground">
            <span>방향키로 이동, Enter로 선택</span>
            <span className="hidden sm:inline">Ctrl + / 또는 Cmd + /로 열기</span>
          </div>
        </div>
      </div>
    </>
  )
}
