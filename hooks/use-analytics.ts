"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { trackEvent, getDeviceType, getSourceFromReferrer, incrementToolUseCount } from "@/lib/analytics"

// Hook to track guide views
export function useGuideView(guideId: string) {
  useEffect(() => {
    trackEvent({
      name: "guide_view",
      params: {
        guide_id: guideId,
        device: getDeviceType(),
        source: getSourceFromReferrer(),
      },
    })
  }, [guideId])
}

// Hook to track blog views
export function useBlogView(blogSlug: string) {
  useEffect(() => {
    trackEvent({
      name: "blog_view",
      params: {
        blog_slug: blogSlug,
        device: getDeviceType(),
        source: getSourceFromReferrer(),
      },
    })
  }, [blogSlug])
}

// Hook to track tool usage
export function useToolTracking(toolId: string) {
  return (inputLength?: number) => {
    // Determine source from referrer only to avoid useSearchParams() issues during SSR
    const source = getSourceFromReferrer()

    trackEvent({
      name: "tool_use",
      params: {
        tool_id: toolId,
        source: source as "direct" | "guide" | "workflow" | "embed" | "extension",
        input_length: inputLength,
      },
    })

    incrementToolUseCount()
  }
}

// Hook to track page views
export function usePageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view with GA4
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "page_view", {
        page_path: pathname,
      })
    }
  }, [pathname])
}

// Hook to track tool page views
export function useToolView(toolId: string) {
  useEffect(() => {
    // Determine source from referrer to avoid useSearchParams() issues during SSR
    const source = getSourceFromReferrer()

    trackEvent({
      name: "guide_view",
      params: {
        guide_id: toolId,
        device: getDeviceType(),
        source,
      },
    })
  }, [toolId])
}
