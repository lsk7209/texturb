"use client"

import { useEffect } from "react"
import { AlertTriangle, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 에러 리포팅 (프로덕션 환경)
    if (process.env.NODE_ENV === "production" && typeof fetch !== "undefined") {
      fetch("/api/errors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: window.navigator.userAgent,
        }),
      }).catch(() => {
        // 에러 리포팅 실패는 무시
      })
    }
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-xl border border-border p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold mb-2">페이지 로딩 중 오류가 발생했습니다</h1>
        <p className="text-muted-foreground mb-6">일시적인 문제일 수 있습니다. 다시 시도해 주세요.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            홈으로 가기
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity"
          >
            다시 시도
          </button>
        </div>
      </div>
    </div>
  )
}
