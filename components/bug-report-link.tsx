"use client"

import { Bug } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BugReportLinkProps {
  toolId?: string
  className?: string
}

export function BugReportLink({ toolId, className }: BugReportLinkProps) {
  const handleClick = () => {
    const baseUrl = "https://forms.google.com/your-form-id" // Replace with actual form URL
    const params = new URLSearchParams()

    if (toolId) {
      params.set("tool_id", toolId)
    }
    params.set("url", window.location.href)

    window.open(`${baseUrl}?${params.toString()}`, "_blank")
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleClick} className={className}>
      <Bug className="w-4 h-4 mr-2" />
      버그 신고·기능 제안
    </Button>
  )
}
