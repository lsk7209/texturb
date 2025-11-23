"use client"

import { useState, useEffect } from "react"
import { getClientFlags, type FeatureFlags } from "@/lib/feature-flags"

export function useFeatureFlag(flag: keyof FeatureFlags): boolean {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const flags = getClientFlags()
    setEnabled(flags[flag] || false)
  }, [flag])

  return enabled
}

export function useFeatureFlags(): FeatureFlags {
  const [flags, setFlags] = useState<FeatureFlags>({})

  useEffect(() => {
    setFlags(getClientFlags())
  }, [])

  return flags
}
