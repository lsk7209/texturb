"use client"

import { useState, useMemo, useCallback } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CountToolsProps {
  text: string
  toolId?: string
}

export function CountTools({ text, toolId }: CountToolsProps) {
  const [targetCount, setTargetCount] = useState<string>("1000")
  const [paragraphMode, setParagraphMode] = useState<"empty" | "whitespace">("empty")
  const [metaLang, setMetaLang] = useState<"ko" | "en">("ko")

  const [sentenceEndings, setSentenceEndings] = useState({
    period: true,
    question: true,
    exclamation: true,
  })

  // 통계 계산을 useMemo로 최적화
  const charCount = useMemo(() => text.length, [text])
  const charCountNoSpace = useMemo(() => text.replace(/\s/g, "").length, [text])
  const wordCount = useMemo(() => {
    const trimmed = text.trim()
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length
  }, [text])
  const lineCount = useMemo(() => (text === "" ? 0 : text.split(/\r\n|\r|\n/).length), [text])

  const getSentenceStats = useCallback(() => {
    if (!text.trim()) return { count: 0, avg: 0, max: 0, min: 0 }

    let pattern = ""
    if (sentenceEndings.period) pattern += "\\."
    if (sentenceEndings.question) pattern += "\\?"
    if (sentenceEndings.exclamation) pattern += "\\!"

    if (!pattern) return { count: 0, avg: 0, max: 0, min: 0 }

    const regex = new RegExp(`[${pattern}]+`, "g")
    const sentences = text
      .split(regex)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    if (sentences.length === 0) return { count: 0, avg: 0, max: 0, min: 0 }

    const lengths = sentences.map((s) => s.length)
    const totalLength = lengths.reduce((a, b) => a + b, 0)

    return {
      count: sentences.length,
      avg: Math.round(totalLength / sentences.length),
      max: Math.max(...lengths),
      min: Math.min(...lengths),
    }
  }, [text, sentenceEndings])

  const getParagraphStats = useCallback(() => {
    if (!text.trim()) return { count: 0, avgChar: 0, avgSentence: 0 }

    let paragraphs: string[] = []
    if (paragraphMode === "empty") {
      paragraphs = text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter((p) => p.length > 0)
    } else {
      paragraphs = text
        .split(/\n/)
        .map((p) => p.trim())
        .filter((p) => p.length > 0)
    }

    if (paragraphs.length === 0) return { count: 0, avgChar: 0, avgSentence: 0 }

    const totalChars = paragraphs.reduce((acc, p) => acc + p.length, 0)

    const totalSentences = paragraphs.reduce((acc, p) => {
      return acc + (p.match(/[.!?]+/g) || []).length
    }, 0)

    return {
      count: paragraphs.length,
      avgChar: Math.round(totalChars / paragraphs.length),
      avgSentence: Math.round((totalSentences / paragraphs.length) * 10) / 10,
    }
  }, [text, paragraphMode])

  const getTitleStats = useCallback(() => {
    let pixels = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i)
      if (char >= 0xac00 && char <= 0xd7a3)
        pixels += 16 // Korean
      else if (char >= 65 && char <= 90)
        pixels += 10 // Uppercase
      else if (char >= 97 && char <= 122)
        pixels += 8 // Lowercase
      else if (char >= 48 && char <= 57)
        pixels += 9 // Numbers
      else pixels += 6 // Others
    }

    const len = text.length
    let status = ""
    let statusColor = ""

    if (len === 0) {
      status = "제목을 입력해주세요."
      statusColor = "text-slate-500"
    } else if (len <= 20) {
      status = "너무 짧습니다. 정보를 조금 더 추가해 보세요."
      statusColor = "text-orange-600"
    } else if (len <= 35) {
      status = "짧지만 핵심 전달이 된다면 괜찮습니다."
      statusColor = "text-blue-600"
    } else if (len <= 55) {
      status = "적정 길이입니다. 검색 결과에서 잘 보일 가능성이 높습니다."
      statusColor = "text-green-600"
    } else {
      status = "너무 길어 잘릴 수 있습니다. 앞부분 위주로 핵심을 배치해 보세요."
      statusColor = "text-red-600"
    }

    return {
      length: text.length,
      pixels: pixels,
      isTooLong: pixels > 600,
      status,
      statusColor,
    }
  }, [text])

  const getMetaDescStats = useCallback(() => {
    const len = text.length
    let status = ""
    let statusColor = ""

    if (len === 0) {
      status = "메타 설명을 입력해주세요."
      statusColor = "text-slate-500"
    } else if (len <= 40) {
      status = "너무 짧습니다. 사용자가 이해할 수 있을 만큼 내용을 보완해 주세요."
      statusColor = "text-orange-600"
    } else if (len <= 80) {
      status = "조금 짧은 편입니다. 핵심 정보를 1~2문장 정도로 늘려 보세요."
      statusColor = "text-blue-600"
    } else if (len <= 160) {
      status = "권장 범위 안입니다. 핵심 키워드가 포함되었는지 확인해 보세요."
      statusColor = "text-green-600"
    } else {
      status = "너무 길어 잘릴 수 있습니다. 앞부분에 핵심 정보를 배치하고 뒤를 줄여 보세요."
      statusColor = "text-red-600"
    }

    return {
      length: text.length,
      status,
      statusColor,
    }
  }

  // 통계 계산 결과를 useMemo로 메모이제이션
  const sentenceStats = useMemo(() => getSentenceStats(), [getSentenceStats])
  const paragraphStats = useMemo(() => getParagraphStats(), [getParagraphStats])
  const titleStats = useMemo(() => getTitleStats(), [getTitleStats])
  const metaStats = useMemo(() => getMetaDescStats(), [getMetaDescStats])

  // 목표 글자수 관련 계산을 useMemo로 최적화
  const target = useMemo(() => Number.parseInt(targetCount) || 0, [targetCount])
  const percentage = useMemo(() => (target > 0 ? Math.min((charCount / target) * 100, 100) : 0), [charCount, target])
  const diff = useMemo(() => charCount - target, [charCount, target])

  if (toolId === "sentence-counter") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="전체 문장 수" value={`${sentenceStats.count.toLocaleString()}문장`} />
          <StatCard label="평균 문장 길이" value={`${sentenceStats.avg.toLocaleString()}자`} />
          <StatCard label="최장 문장" value={`${sentenceStats.max.toLocaleString()}자`} />
          <StatCard label="최단 문장" value={`${sentenceStats.min.toLocaleString()}자`} />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">문장 구분 기준</Label>
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="period"
                checked={sentenceEndings.period}
                onCheckedChange={(c) => setSentenceEndings((prev) => ({ ...prev, period: c as boolean }))}
              />
              <Label htmlFor="period" className="font-normal cursor-pointer">
                마침표(.)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="question"
                checked={sentenceEndings.question}
                onCheckedChange={(c) => setSentenceEndings((prev) => ({ ...prev, question: c as boolean }))}
              />
              <Label htmlFor="question" className="font-normal cursor-pointer">
                물음표(?)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exclamation"
                checked={sentenceEndings.exclamation}
                onCheckedChange={(c) => setSentenceEndings((prev) => ({ ...prev, exclamation: c as boolean }))}
              />
              <Label htmlFor="exclamation" className="font-normal cursor-pointer">
                느낌표(!)
              </Label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (toolId === "paragraph-counter") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="전체 문단 수" value={`${paragraphStats.count.toLocaleString()}개`} />
          <StatCard label="평균 문단 글자수" value={`${paragraphStats.avgChar.toLocaleString()}자`} />
          <StatCard label="평균 문단 문장수" value={`${paragraphStats.avgSentence.toLocaleString()}문장`} />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">문단 구분 기준</Label>
          <RadioGroup
            value={paragraphMode}
            onValueChange={(v) => setParagraphMode(v as "count" | "split")}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="empty" id="para-empty" />
              <Label htmlFor="para-empty" className="font-normal cursor-pointer">
                완전 빈 줄 (엔터 두 번) 기준
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="whitespace" id="para-whitespace" />
              <Label htmlFor="para-whitespace" className="font-normal cursor-pointer">
                줄바꿈 기준 (모든 줄을 문단으로)
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    )
  }

  if (toolId === "title-length-checker") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard label="글자 수" value={`${titleStats.length.toLocaleString()}자`} />
          <StatCard
            label="예상 픽셀 너비 (Google SERP)"
            value={`${titleStats.pixels.toLocaleString()}px`}
            highlight={titleStats.isTooLong}
          />
        </div>
        <div
          className={`p-4 rounded-lg border ${titleStats.statusColor.replace("text-", "bg-").replace("600", "50")} ${titleStats.statusColor.replace("text-", "border-").replace("600", "200")} ${titleStats.statusColor}`}
        >
          {titleStats.status}
        </div>
      </div>
    )
  }

  if (toolId === "meta-description-checker") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <StatCard label="글자 수" value={`${metaStats.length.toLocaleString()}자`} />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">기준 언어</Label>
          <RadioGroup value={metaLang} onValueChange={(v) => setMetaLang(v as "ko" | "en")} className="flex flex-row gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ko" id="meta-ko" />
              <Label htmlFor="meta-ko" className="font-normal cursor-pointer">
                한국어 기준
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="meta-en" />
              <Label htmlFor="meta-en" className="font-normal cursor-pointer">
                영어 기준
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>권장 길이: 80 ~ 160자</span>
            <span className={metaStats.statusColor}>{metaStats.status}</span>
          </div>
          <Progress
            value={Math.min((metaStats.length / 160) * 100, 100)}
            className={`h-2 ${metaStats.length > 160 ? "bg-red-100" : ""}`}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="전체 글자수 (공백포함)" value={`${charCount.toLocaleString()}자`} />
        <StatCard label="글자수 (공백제외)" value={`${charCountNoSpace.toLocaleString()}자`} />
        <StatCard label="단어 수" value={`${wordCount.toLocaleString()}개`} />
        <StatCard label="줄 수" value={`${lineCount.toLocaleString()}줄`} />
      </div>

      <div className="pt-4 border-t border-slate-200/60">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="target" className="text-sm font-medium text-slate-700">
              목표 글자수 설정
            </Label>
            <Input
              id="target"
              type="number"
              value={targetCount}
              onChange={(e) => setTargetCount(e.target.value)}
              placeholder="예: 1000"
              className="max-w-[200px]"
            />
          </div>
          <div className="flex-1 md:text-right">
            <p className={`text-sm font-medium ${diff > 0 ? "text-orange-600" : "text-blue-600"}`}>
              {target > 0
                ? diff > 0
                  ? `목표 ${target.toLocaleString()}자 기준, 현재 +${diff.toLocaleString()}자 초과입니다.`
                  : `목표 ${target.toLocaleString()}자까지 ${Math.abs(diff).toLocaleString()}자 남았습니다.`
                : "목표 글자수를 입력해보세요."}
            </p>
          </div>
        </div>

        {target > 0 && (
          <div className="space-y-1">
            <Progress value={percentage} className="h-2" />
            <div className="flex justify-between text-xs text-slate-400">
              <span>0</span>
              <span>{target.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`bg-white p-4 rounded-lg border shadow-sm text-center space-y-1 ${highlight ? "border-red-200 bg-red-50" : "border-slate-200"}`}
    >
      <div className="text-xs text-slate-500">{label}</div>
      <div className={`text-xl font-bold ${highlight ? "text-red-600" : "text-slate-900"}`}>{value}</div>
    </div>
  )
}
