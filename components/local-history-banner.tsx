"use client"

import { X, RotateCcw } from "lucide-react"
import type { LocalHistory } from "@/hooks/use-local-history"

interface LocalHistoryBannerProps {
  history: LocalHistory
  onRestore: () => void
  onDismiss: () => void
}

export function LocalHistoryBanner({ history, onRestore, onDismiss }: LocalHistoryBannerProps) {
  const lastUpdated = new Date(history.lastUpdatedAt).toLocaleString("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div
      className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-4 md:p-5 shadow-sm mb-6"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
          <RotateCcw className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground mb-1">이전에 작업하던 텍스트가 있습니다.</h3>
          <p className="text-sm text-muted-foreground mb-4">
            마지막 작업을 불러와 바로 이어서 수정할 수 있습니다. <span className="text-xs">({lastUpdated})</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={onRestore}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label="이전 작업 불러오기"
            >
              불러오기
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2 bg-background hover:bg-muted text-foreground text-sm font-medium rounded-lg border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="삭제하기"
            >
              삭제하기
            </button>
          </div>
        </div>

        <button
          onClick={onDismiss}
          className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="배너 닫기"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
