// Analytics event tracking system for 텍스터브

export type AnalyticsEvent =
  | {
      name: "tool_use"
      params: {
        tool_id: string
        source: "direct" | "guide" | "workflow" | "embed" | "extension"
        input_length?: number
      }
    }
  | {
      name: "guide_view"
      params: {
        guide_id: string
        device: "mobile" | "tablet" | "desktop"
        source: string
      }
    }
  | {
      name: "guide_to_tool_click"
      params: {
        guide_id: string
        tool_id: string
      }
    }
  | {
      name: "workflow_start"
      params: {
        workflow_id: string
      }
    }
  | {
      name: "workflow_step"
      params: {
        workflow_id: string
        step_index: number
        tool_id: string
      }
    }
  | {
      name: "tool_feedback"
      params: {
        tool_id: string
        rating: 1 | 2 | 3
        reason?: string
      }
    }
  | {
      name: "session_end"
      params: {
        session_id: string
        page_count: number
        tool_use_count: number
      }
    }
  | {
      name: "tool_view"
      params: {
        tool_id: string
        device: "mobile" | "tablet" | "desktop"
        source: "direct" | "internal" | "guide" | "workflow" | "embed" | "extension"
      }
    }

// Track events to GA4 or other analytics providers
export function trackEvent(event: AnalyticsEvent) {
  // GA4 gtag tracking
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", event.name, event.params)
  }

  // Console log in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event.name, event.params)
  }
}

// Device detection helper
export function getDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop"

  const width = window.innerWidth
  if (width < 768) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

// Get referrer source
export function getSourceFromReferrer(): string {
  if (typeof document === "undefined") return "direct"

  const referrer = document.referrer
  if (!referrer) return "direct"

  try {
    const url = new URL(referrer)
    const hostname = url.hostname

    // Search engines
    if (hostname.includes("google")) return "google"
    if (hostname.includes("bing")) return "bing"
    if (hostname.includes("naver")) return "naver"

    // Social
    if (hostname.includes("facebook")) return "facebook"
    if (hostname.includes("twitter") || hostname.includes("x.com")) return "twitter"

    // Internal
    if (hostname === window.location.hostname) return "internal"

    return "external"
  } catch {
    return "unknown"
  }
}

// Session tracking
const SESSION_KEY = "textterv_session"

export interface SessionData {
  id: string
  pageCount: number
  toolUseCount: number
  startTime: number
}

export function getSession(): SessionData {
  if (typeof window === "undefined") {
    return { id: "", pageCount: 0, toolUseCount: 0, startTime: Date.now() }
  }

  const stored = localStorage.getItem(SESSION_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      // Fall through to create new session
    }
  }

  // Create new session
  const session: SessionData = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    pageCount: 0,
    toolUseCount: 0,
    startTime: Date.now(),
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}

export function updateSession(updates: Partial<SessionData>) {
  if (typeof window === "undefined") return

  const session = getSession()
  const updated = { ...session, ...updates }
  localStorage.setItem(SESSION_KEY, JSON.stringify(updated))
}

export function incrementPageCount() {
  const session = getSession()
  updateSession({ pageCount: session.pageCount + 1 })
}

export function incrementToolUseCount() {
  const session = getSession()
  updateSession({ toolUseCount: session.toolUseCount + 1 })
}

// Track session end on page unload
// 주의: beforeunload는 신뢰할 수 없으므로 visibilitychange도 함께 사용
if (typeof window !== "undefined") {
  const handleBeforeUnload = () => {
    const session = getSession()
    // navigator.sendBeacon을 사용하여 더 안정적으로 전송
    if (navigator.sendBeacon) {
      const data = JSON.stringify({
        name: "session_end",
        params: {
          session_id: session.id,
          page_count: session.pageCount,
          tool_use_count: session.toolUseCount,
        },
      })
      navigator.sendBeacon("/api/analytics", data)
    } else {
      trackEvent({
        name: "session_end",
        params: {
          session_id: session.id,
          page_count: session.pageCount,
          tool_use_count: session.toolUseCount,
        },
      })
    }
  }

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      handleBeforeUnload()
    }
  }

  window.addEventListener("beforeunload", handleBeforeUnload)
  document.addEventListener("visibilitychange", handleVisibilityChange)

  // Track page views
  const handleLoad = () => {
    incrementPageCount()
  }
  window.addEventListener("load", handleLoad)

  // Cleanup은 페이지가 언로드될 때 자동으로 처리되므로 명시적 cleanup 불필요
  // 단, SPA 환경에서는 필요할 수 있음
}
