"use client"

import { useEffect, useRef } from "react"

interface AdSlotProps {
  slot: string
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
}

export function AdSlot({ slot, format = "auto", responsive = true, className = "" }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle && adRef.current) {
      try {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (err) {
        console.error("AdSense error:", err)
      }
    }
  }, [])

  // Don't render if AdSense ID is not configured
  if (!process.env.NEXT_PUBLIC_ADSENSE_ID) {
    return null
  }

  return (
    <div className={`ad-container my-8 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
