"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

interface FeedbackWidgetProps {
  toolId: string
  className?: string
}

const FEEDBACK_REASONS = {
  1: ["원하는 기능이 없다", "결과가 잘 안 맞는다", "속도가 느리다", "사용법이 어렵다"],
  2: ["기능이 부족하다", "더 나은 옵션이 필요하다", "결과가 애매하다"],
  3: ["완벽하다", "시간을 절약했다", "정확하다", "사용하기 쉽다"],
}

export function FeedbackWidget({ toolId, className }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<1 | 2 | 3 | null>(null)
  const [showReasons, setShowReasons] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleRatingClick = (selectedRating: 1 | 2 | 3) => {
    setRating(selectedRating)
    setShowReasons(true)

    // Track initial rating
    trackEvent({
      name: "tool_feedback",
      params: {
        tool_id: toolId,
        rating: selectedRating,
      },
    })
  }

  const handleReasonClick = (reason: string) => {
    if (!rating) return

    // Track with reason
    trackEvent({
      name: "tool_feedback",
      params: {
        tool_id: toolId,
        rating,
        reason,
      },
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={cn("bg-muted/50 rounded-lg p-6 text-center", className)}>
        <p className="text-sm text-muted-foreground">피드백 감사합니다!</p>
      </div>
    )
  }

  return (
    <div className={cn("bg-card border border-border rounded-lg p-6", className)}>
      <h3 className="text-sm font-semibold mb-4">이 도구가 도움이 되었나요?</h3>

      <div className="flex gap-3 mb-4">
        <Button
          variant={rating === 3 ? "default" : "outline"}
          size="sm"
          onClick={() => handleRatingClick(3)}
          className="flex-1"
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          많이 도움 됨
        </Button>
        <Button
          variant={rating === 2 ? "default" : "outline"}
          size="sm"
          onClick={() => handleRatingClick(2)}
          className="flex-1"
        >
          <Minus className="w-4 h-4 mr-2" />
          그저 그럼
        </Button>
        <Button
          variant={rating === 1 ? "default" : "outline"}
          size="sm"
          onClick={() => handleRatingClick(1)}
          className="flex-1"
        >
          <ThumbsDown className="w-4 h-4 mr-2" />
          별로임
        </Button>
      </div>

      {showReasons && rating && (
        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground mb-3">
            {rating === 3 ? "어떤 점이 좋았나요?" : "어떤 점이 아쉬웠나요?"}
          </p>
          <div className="flex flex-wrap gap-2">
            {FEEDBACK_REASONS[rating].map((reason) => (
              <Button
                key={reason}
                variant="ghost"
                size="sm"
                onClick={() => handleReasonClick(reason)}
                className="text-xs"
              >
                {reason}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
