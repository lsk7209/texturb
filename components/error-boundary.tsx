"use client"

import type React from "react"

import { Component, type ReactNode } from "react"
import { AlertTriangle, Home, RotateCcw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 에러 리포팅 (프로덕션 환경에서만)
    if (process.env.NODE_ENV === "production") {
      try {
        const errorData = {
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          userAgent: typeof window !== "undefined" ? window.navigator.userAgent : undefined,
          url: typeof window !== "undefined" ? window.location.href : undefined,
        }
        if (typeof fetch !== "undefined") {
          fetch("/api/errors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(errorData),
          }).catch(() => {
            // 에러 리포팅 실패는 무시
          })
        }
      } catch (reportingError) {
        // 에러 리포팅 자체가 실패해도 앱은 계속 동작
      }
    } else {
      // 개발 환경에서는 콘솔에 출력
      console.error("[ErrorBoundary] Error caught:", error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-card rounded-xl border border-border p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-xl font-bold mb-2">도구 실행 중 오류가 발생했습니다</h2>
            <p className="text-muted-foreground mb-6">페이지를 새로고침하거나, 문제가 계속되면 문의해 주세요.</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
              >
                <Home className="w-4 h-4" />
                홈으로 가기
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity"
              >
                <RotateCcw className="w-4 h-4" />
                새로고침
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
