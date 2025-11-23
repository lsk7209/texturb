"use client"

import { useState } from "react"
import { Share2, Code, Copy, Check } from "lucide-react"
import { generateShareUrl } from "@/lib/url-utils"
import { generateEmbedCode, isEmbeddable } from "@/lib/embed-utils"
import { useToast } from "@/hooks/use-toast"

/**
 * Component: ShareEmbedPanel
 * 도구 공유 링크 및 임베드 코드를 생성하는 패널
 * @param {string} toolSlug - 도구 슬러그 [Required]
 * @param {string} toolName - 도구 이름 [Required]
 * @param {Record<string, unknown>} currentOptions - 현재 도구 옵션 설정 [Optional]
 * @example <ShareEmbedPanel toolSlug="char-counter" toolName="글자수 세기" currentOptions={{ lang: "ko" }} />
 */
interface ShareEmbedPanelProps {
  toolSlug: string
  toolName: string
  currentOptions?: Record<string, unknown>
}

export function ShareEmbedPanel({ toolSlug, toolName, currentOptions = {} }: ShareEmbedPanelProps) {
  const [showEmbed, setShowEmbed] = useState(false)
  const [copiedShare, setCopiedShare] = useState(false)
  const [copiedEmbed, setCopiedEmbed] = useState(false)
  const { toast } = useToast()

  const shareUrl = generateShareUrl(toolSlug, currentOptions)
  const embedCode = isEmbeddable(toolSlug) ? generateEmbedCode(toolSlug, { theme: "light" }) : ""

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopiedShare(true)
      setTimeout(() => setCopiedShare(false), 2000)
      toast({
        title: "링크 복사 완료",
        description: "현재 도구 설정 링크가 클립보드에 복사되었습니다.",
      })
    } catch (err) {
      console.error("Failed to copy share URL", err)
    }
  }

  const handleCopyEmbed = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setCopiedEmbed(true)
      setTimeout(() => setCopiedEmbed(false), 2000)
      toast({
        title: "임베드 코드 복사 완료",
        description: "블로그나 웹사이트에 붙여넣어 사용하세요.",
      })
    } catch (err) {
      console.error("Failed to copy embed code", err)
    }
  }

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-border bg-muted/50">
        <h3 className="text-sm font-bold text-foreground">공유 및 임베드</h3>
        <p className="text-xs text-muted-foreground mt-1">이 도구를 다른 사람과 공유하거나 웹사이트에 삽입하세요</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Share Link Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">현재 설정 공유 링크</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 text-sm bg-muted border border-border rounded-lg text-foreground font-mono"
            />
            <button
              onClick={handleCopyShare}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                copiedShare
                  ? "bg-green-100 text-green-700 border border-green-300 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {copiedShare ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedShare ? "복사됨" : "복사"}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            이 링크로 현재 도구와 옵션 설정을 공유할 수 있습니다. 텍스트 내용은 포함되지 않습니다.
          </p>
        </div>

        {isEmbeddable(toolSlug) && (
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-semibold text-foreground">임베드 코드</span>
              </div>
              <button
                onClick={() => setShowEmbed(!showEmbed)}
                className="text-xs text-primary hover:text-primary/80 font-medium"
              >
                {showEmbed ? "숨기기" : "보기"}
              </button>
            </div>

            {showEmbed && (
              <>
                <textarea
                  value={embedCode}
                  readOnly
                  rows={6}
                  className="w-full px-3 py-2 text-xs bg-slate-900 text-green-400 border border-slate-700 rounded-lg font-mono resize-none"
                />
                <button
                  onClick={handleCopyEmbed}
                  className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                    copiedEmbed
                      ? "bg-green-100 text-green-700 border border-green-300 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                  }`}
                >
                  {copiedEmbed ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedEmbed ? "임베드 코드 복사됨" : "임베드 코드 복사"}
                </button>
                <p className="text-xs text-muted-foreground">
                  이 코드를 블로그나 웹사이트에 붙여넣어 {toolName} 도구를 직접 사용할 수 있습니다.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
