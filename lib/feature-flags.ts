// Feature flags for A/B testing and gradual rollouts

export type FeatureFlags = {
  // Layout experiments
  newToolsLayout?: boolean
  compactToolCards?: boolean
  showToolThumbnails?: boolean

  // Copy experiments
  boldHeroCopy?: boolean
  shortenedDescriptions?: boolean

  // Feature toggles
  enableAdvancedOptions?: boolean
  showRelatedContent?: boolean
  enableAutoSave?: boolean

  // Monetization
  showPremiumFeatures?: boolean
  enableDonations?: boolean
}

const DEFAULT_FLAGS: FeatureFlags = {
  newToolsLayout: false,
  compactToolCards: false,
  showToolThumbnails: false,
  boldHeroCopy: false,
  shortenedDescriptions: false,
  enableAdvancedOptions: false,
  showRelatedContent: true,
  enableAutoSave: false,
  showPremiumFeatures: false,
  enableDonations: false,
}

// Get flags from environment variables (for server-side)
export function getServerFlags(): FeatureFlags {
  return {
    ...DEFAULT_FLAGS,
    newToolsLayout: process.env.NEXT_PUBLIC_FF_NEW_TOOLS_LAYOUT === "true",
    compactToolCards: process.env.NEXT_PUBLIC_FF_COMPACT_CARDS === "true",
    boldHeroCopy: process.env.NEXT_PUBLIC_FF_BOLD_HERO === "true",
    enableAdvancedOptions: process.env.NEXT_PUBLIC_FF_ADVANCED_OPTIONS === "true",
    showRelatedContent: process.env.NEXT_PUBLIC_FF_RELATED_CONTENT !== "false",
  }
}

// Get flags from localStorage (for client-side overrides)
export function getClientFlags(): FeatureFlags {
  if (typeof window === "undefined") {
    return getServerFlags()
  }

  const serverFlags = getServerFlags()
  const stored = localStorage.getItem("text_studio_flags")

  if (stored) {
    try {
      const overrides = JSON.parse(stored)
      return { ...serverFlags, ...overrides }
    } catch {
      // Fall through to return server flags
    }
  }

  return serverFlags
}

// Set flag override in localStorage
export function setFlag(key: keyof FeatureFlags, value: boolean) {
  if (typeof window === "undefined") return

  const flags = getClientFlags()
  flags[key] = value
  localStorage.setItem("text_studio_flags", JSON.stringify(flags))
}

// Clear all flag overrides
export function clearFlags() {
  if (typeof window === "undefined") return
  localStorage.removeItem("text_studio_flags")
}

// Check if a specific flag is enabled
export function isEnabled(flag: keyof FeatureFlags): boolean {
  const flags = typeof window !== "undefined" ? getClientFlags() : getServerFlags()
  return flags[flag] || false
}

// Debug: expose flags on window in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  ;(window as any).__TEXT_STUDIO_FLAGS__ = {
    get: getClientFlags,
    set: setFlag,
    clear: clearFlags,
    isEnabled,
  }
}
