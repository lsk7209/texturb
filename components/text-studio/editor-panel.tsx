"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Copy, RotateCcw, Check, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce"
import { logger } from "@/lib/logger"
import type { TabId } from "./text-studio-main"
import { CleanupTools } from "./tools/cleanup-tools"
import { CountTools } from "./tools/count-tools"
import { FormatTools } from "./tools/format-tools"
import { HighlightTools } from "./tools/highlight-tools"

const MAX_TEXT_LENGTH = 20000

interface EditorPanelProps {
  activeTab: TabId
  text: string
  setText: (text: string) => void
  onTextChange?: (text: string) => void
  onApply?: () => void
  showApplyButton?: boolean
  toolId?: string
  onCopy?: () => void
}

export function EditorPanel({
  activeTab,
  text,
  setText,
  onTextChange,
  onApply,
  showApplyButton = false,
  toolId,
  onCopy,
}: EditorPanelProps) {
  const [copied, setCopied] = useState(false)
  const [previewText, setPreviewText] = useState(text)

  const debouncedText = useDebounce(text, 300)

  useEffect(() => {
    setPreviewText(debouncedText)
  }, [debouncedText, activeTab])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(previewText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      onCopy?.()
    } catch (err) {
      logger.error("Failed to copy text", err)
    }
  }, [previewText, onCopy])

  const handleReset = useCallback(() => {
    setText("")
    setPreviewText("")
  }, [setText])

  const handleApplyToInput = useCallback(() => {
    setText(previewText)
    onApply?.()
  }, [previewText, setText, onApply])

  const handleTextChange = useCallback(
    (newText: string) => {
      if (newText.length <= MAX_TEXT_LENGTH) {
        setText(newText)
        onTextChange?.(newText)
      }
    },
    [setText, onTextChange]
  )

  const isOverLimit = useMemo(() => text.length >= MAX_TEXT_LENGTH, [text.length])

  const headerContentMap: Record<TabId, { title: string; desc: string }> = useMemo(
    () => ({
    cleanup: {
      title: "복사해 온 글, 줄바꿈부터 먼저 정리해 볼까요?",
      desc: "복붙하면서 깨진 줄바꿈과 공백을 한 번에 정리합니다.",
    },
    transform: {
      title: "영문 제목과 문장, 보기 좋게 한 번에 변환하세요.",
      desc: "UPPERCASE / lowercase / Title Case / Sentence case를 지원합니다.",
    },
    analysis: {
      title: "글자수·단어수, 타이핑과 동시에 바로 확인하세요.",
      desc: "블로그, 자소서, 보고서에 필요한 분량을 실시간으로 체크합니다.",
    },
    highlight: {
      title: "제목·닉네임에 쓸 특수문자, 클릭 한 번으로 복사하세요.",
      desc: "제목 장식, 괄호, 화살표, 구분선 등 자주 쓰는 특수문자만 모았습니다.",
    },
    }),
    []
  )

  const headerContent = useMemo(
    () => headerContentMap[activeTab] || headerContentMap.cleanup,
    [activeTab, headerContentMap]
  )

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="px-4 py-4 md:px-6 md:py-5 border-b border-border bg-muted/50">
        <h2 className="text-base md:text-lg font-bold mb-1">{headerContent.title}</h2>
        <p className="text-xs md:text-sm text-muted-foreground">{headerContent.desc}</p>
      </div>

      <div className="p-4 md:p-6 space-y-6 md:space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Input Text</label>
          <textarea
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="지금 작성 중인 글을 여기에 붙여넣고, 위 탭을 눌러 필요한 기능을 사용해 보세요."
            className={cn(
              "w-full min-h-[150px] md:min-h-[200px] p-3 md:p-4 rounded-lg border bg-background placeholder:text-muted-foreground text-sm md:text-base",
              "focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-y leading-relaxed",
              isOverLimit ? "border-destructive" : "border-input",
            )}
            aria-label="입력 텍스트"
            aria-describedby="text-length-info"
          />
          <div className="flex justify-between items-center">
            <span
              id="text-length-info"
              className={cn("text-xs", isOverLimit ? "text-destructive font-medium" : "text-muted-foreground")}
            >
              {isOverLimit && "텍스트가 너무 깁니다. "}
              최대 {MAX_TEXT_LENGTH.toLocaleString()}자
            </span>
            <span className="text-xs text-muted-foreground">{text.length.toLocaleString()}자 (공백포함)</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-border"></div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
              Options & Result
            </span>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="bg-muted rounded-lg p-4 md:p-5 border border-border relative">
            {activeTab === "cleanup" && <CleanupTools text={debouncedText} onPreviewChange={setPreviewText} />}
            {activeTab === "analysis" && <CountTools text={debouncedText} />}
            {activeTab === "transform" && <FormatTools text={debouncedText} onPreviewChange={setPreviewText} />}
            {activeTab === "highlight" && <HighlightTools onInsert={(char) => setText(text + char)} />}

            {showApplyButton && (
              <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5">
                <button
                  onClick={handleApplyToInput}
                  className="px-3 py-1.5 bg-background border border-primary/20 text-primary text-xs font-medium rounded-md shadow-sm hover:bg-primary/10 transition-colors flex items-center gap-1"
                  aria-label="변환된 텍스트를 입력창에 적용"
                >
                  <ArrowDown className="w-3 h-3" />
                  <span className="hidden sm:inline">입력창에 적용하기</span>
                  <span className="sm:hidden">적용</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
            aria-label="텍스트 초기화"
          >
            <RotateCcw className="w-4 h-4" />
            초기화
          </button>

          <button
            onClick={handleCopy}
            className={cn(
              "w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm",
              copied
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-primary text-primary-foreground hover:opacity-90",
            )}
            aria-label={copied ? "복사 완료" : "결과 복사"}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                복사 완료!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                결과 복사
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
