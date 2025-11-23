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

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

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
        setIsOpen((prev) => !prev)
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
      <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Palette */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="도구, 워크플로, 가이드 검색... (Ctrl + / 또는 Cmd + /)"
              className="flex-1 outline-none text-slate-900 placeholder:text-slate-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <kbd className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-300">ESC</kbd>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-slate-500">검색 결과가 없습니다.</div>
            ) : (
              <div className="py-2">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${
                      index === selectedIndex ? "bg-slate-100" : ""
                    }`}
                    onClick={() => {
                      router.push(item.url)
                      setIsOpen(false)
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="mt-1 text-slate-500">{getIcon(item.type)}</div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-slate-900">{item.title}</span>
                        <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-1">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>방향키로 이동, Enter로 선택</span>
            <span>Ctrl + / 또는 Cmd + /로 열기</span>
          </div>
        </div>
      </div>
    </>
  )
}
