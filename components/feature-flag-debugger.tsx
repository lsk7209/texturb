"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getClientFlags, setFlag, clearFlags, type FeatureFlags } from "@/lib/feature-flags"

export function FeatureFlagDebugger() {
  const [open, setOpen] = useState(false)
  const [flags, setFlags] = useState<FeatureFlags>(getClientFlags())

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  const handleToggle = (key: keyof FeatureFlags) => {
    const newValue = !flags[key]
    setFlag(key, newValue)
    setFlags({ ...flags, [key]: newValue })
  }

  const handleReset = () => {
    clearFlags()
    setFlags(getClientFlags())
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="Open feature flags"
      >
        <Settings className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-card border border-border rounded-lg shadow-xl p-4 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Feature Flags</h3>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={handleReset}>
            Reset
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {Object.entries(flags).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center justify-between text-xs cursor-pointer hover:bg-muted/50 p-2 rounded"
          >
            <span className="font-mono">{key}</span>
            <input
              type="checkbox"
              checked={value || false}
              onChange={() => handleToggle(key as keyof FeatureFlags)}
              className="w-4 h-4"
            />
          </label>
        ))}
      </div>
    </div>
  )
}
