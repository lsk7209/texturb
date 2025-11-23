"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

interface CleanupToolsProps {
  text: string
  onPreviewChange?: (text: string) => void
  toolId?: string
}

export function CleanupTools({ text, onPreviewChange, toolId }: CleanupToolsProps) {
  const [mode, setMode] = useState<"keep" | "remove" | "space">("keep")
  const [reduceSpaces, setReduceSpaces] = useState(false)
  const [trimMode, setTrimMode] = useState<"all" | "lines">("all")
  const [blankLineMode, setBlankLineMode] = useState<"single" | "all">("single")
  const [sortBeforeDedupe, setSortBeforeDedupe] = useState(false)
  const [dedupeInSort, setDedupeInSort] = useState(false)
  const [sortMode, setSortMode] = useState<"asc" | "desc" | "length-asc" | "length-desc">("asc")
  const [uniqueOnly, setUniqueOnly] = useState(true)
  const [groupByDomain, setGroupByDomain] = useState(false)
  const [removeUtm, setRemoveUtm] = useState(false)

  // Preview 계산을 useMemo로 최적화
  const preview = useMemo(() => {
    let result = text
    if (toolId === "trim-whitespace") {
      if (trimMode === "all") return result.trim()
      return result
        .split("\n")
        .map((line) => line.trim())
        .join("\n")
    }
    if (toolId === "remove-blank-lines") {
      if (blankLineMode === "single") return result.replace(/\n\s*\n/g, "\n\n")
      return result.replace(/^\s*[\r\n]/gm, "")
    }
    if (toolId === "dedupe-lines") {
      const lines = result.split("\n")
      if (sortBeforeDedupe) lines.sort()
      return [...new Set(lines)].join("\n")
    }
    if (toolId === "sort-lines") {
      let lines = result.split("\n").filter((l) => l.trim() !== "")
      if (sortMode === "asc") lines.sort()
      else if (sortMode === "desc") lines.sort().reverse()
      else if (sortMode === "length-asc") lines.sort((a, b) => a.length - b.length)
      else if (sortMode === "length-desc") lines.sort((a, b) => b.length - a.length)
      if (dedupeInSort) lines = [...new Set(lines)]
      return lines.join("\n")
    }
    if (toolId === "email-extractor") {
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
      const matches = text.match(emailRegex) || []
      const emails = uniqueOnly ? [...new Set(matches)] : matches
      if (groupByDomain) {
        emails.sort((a, b) => {
          const domainA = a.split("@")[1] || ""
          const domainB = b.split("@")[1] || ""
          return domainA.localeCompare(domainB)
        })
      }
      return emails.join("\n")
    }
    if (toolId === "url-extractor") {
      const urlRegex =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g
      const matches = text.match(urlRegex) || []
      let urls = uniqueOnly ? [...new Set(matches)] : matches
      if (removeUtm) {
        urls = urls.map((url) => {
          try {
            const urlObj = new URL(url)
            const params = new URLSearchParams(urlObj.search)
            const keys = Array.from(params.keys())
            keys.forEach((key) => {
              if (key.startsWith("utm_")) params.delete(key)
            })
            urlObj.search = params.toString()
            return urlObj.toString()
          } catch (e) {
            return url
          }
        })
        if (uniqueOnly) urls = [...new Set(urls)]
      }
      return urls.join("\n")
    }

    if (mode === "remove") result = result.replace(/[\r\n]+/g, "")
    else if (mode === "space") result = result.replace(/[\r\n]+/g, " ")
    if (reduceSpaces) result = result.replace(/\s+/g, " ").trim()
    return result
  }, [
    text,
    mode,
    reduceSpaces,
    trimMode,
    blankLineMode,
    sortBeforeDedupe,
    sortMode,
    uniqueOnly,
    dedupeInSort,
    groupByDomain,
    removeUtm,
    toolId,
  ])

  // Preview 변경 시 onPreviewChange 호출
  useEffect(() => {
    onPreviewChange?.(preview)
  }, [preview, onPreviewChange])

  // Controls 렌더링을 useMemo로 최적화
  const renderControls = useMemo(() => {
    if (toolId === "trim-whitespace") {
      return (
        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">공백 정리 옵션</Label>
          <RadioGroup
            value={trimMode}
            onValueChange={(v) => setTrimMode(v as "all" | "lines")}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="trim-all" />
              <Label htmlFor="trim-all" className="font-normal cursor-pointer">
                전체 텍스트 앞뒤 공백 제거
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lines" id="trim-lines" />
              <Label htmlFor="trim-lines" className="font-normal cursor-pointer">
                각 줄별로 앞뒤 공백 제거
              </Label>
            </div>
          </RadioGroup>
        </div>
      )
    }

    if (toolId === "remove-blank-lines") {
      return (
        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">빈 줄 처리 옵션</Label>
          <RadioGroup
            value={blankLineMode}
            onValueChange={(v) => setBlankLineMode(v as "single" | "all")}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="single" id="blank-single" />
              <Label htmlFor="blank-single" className="font-normal cursor-pointer">
                연속된 빈 줄을 1줄만 남기기
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="blank-all" />
              <Label htmlFor="blank-all" className="font-normal cursor-pointer">
                모든 빈 줄 없애기 (완전 제거)
              </Label>
            </div>
          </RadioGroup>
        </div>
      )
    }

    if (toolId === "dedupe-lines") {
      const originalLines = text.split("\n").length
      const newLines = preview.split("\n").length
      const removed = originalLines - newLines

      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="sort" checked={sortBeforeDedupe} onCheckedChange={(c) => setSortBeforeDedupe(c as boolean)} />
            <Label htmlFor="sort" className="font-normal cursor-pointer">
              중복 제거 전에 사전순으로 정렬
            </Label>
          </div>
          <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded">
            원본 {originalLines}줄 → 중복 제거 후 {newLines}줄 ({removed}개 제거됨)
          </div>
        </div>
      )
    }

    if (toolId === "sort-lines") {
      const originalLines = text.split("\n").filter((l) => l.trim()).length
      const newLines = preview.split("\n").length

      return (
        <div className="space-y-4">
          <div className="space-y-3">
            <Label className="text-sm font-medium text-slate-700">정렬 기준</Label>
            <RadioGroup
              value={sortMode}
              onValueChange={(v) => setSortMode(v as "asc" | "desc" | "length-asc" | "length-desc")}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="asc" id="sort-asc" />
                <Label htmlFor="sort-asc" className="font-normal cursor-pointer">
                  가나다/ABC 순 (오름차순)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="desc" id="sort-desc" />
                <Label htmlFor="sort-desc" className="font-normal cursor-pointer">
                  가나다/ABC 역순 (내림차순)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="length-asc" id="sort-len-asc" />
                <Label htmlFor="sort-len-asc" className="font-normal cursor-pointer">
                  길이 짧은 순
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="length-desc" id="sort-len-desc" />
                <Label htmlFor="sort-len-desc" className="font-normal cursor-pointer">
                  길이 긴 순
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dedupe-sort"
                checked={dedupeInSort}
                onCheckedChange={(c) => setDedupeInSort(c as boolean)}
              />
              <Label htmlFor="dedupe-sort" className="font-normal cursor-pointer">
                중복 줄 제거하기
              </Label>
            </div>
          </div>

          <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded">
            원본 {originalLines}줄 → 정렬 후 {newLines}줄
          </div>
        </div>
      )
    }

    if (toolId === "email-extractor") {
      const count = preview.split("\n").filter((l) => l).length
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="unique" checked={uniqueOnly} onCheckedChange={(c) => setUniqueOnly(c as boolean)} />
            <Label htmlFor="unique" className="font-normal cursor-pointer">
              중복 이메일 제거
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="group" checked={groupByDomain} onCheckedChange={(c) => setGroupByDomain(c as boolean)} />
            <Label htmlFor="group" className="font-normal cursor-pointer">
              도메인별로 정렬하기
            </Label>
          </div>
          <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded">{count}개 추출됨</div>
        </div>
      )
    }

    if (toolId === "url-extractor") {
      const count = preview.split("\n").filter((l) => l).length
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="unique-url" checked={uniqueOnly} onCheckedChange={(c) => setUniqueOnly(c as boolean)} />
            <Label htmlFor="unique-url" className="font-normal cursor-pointer">
              중복 URL 제거
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="utm" checked={removeUtm} onCheckedChange={(c) => setRemoveUtm(c as boolean)} />
            <Label htmlFor="utm" className="font-normal cursor-pointer">
              UTM 파라미터 제거 (?utm_...)
            </Label>
          </div>
          <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded">{count}개 추출됨</div>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">줄바꿈 처리</Label>
          <RadioGroup value={mode} onValueChange={(v) => setMode(v as "keep" | "remove" | "space")} className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="keep" id="keep" />
              <Label htmlFor="keep" className="font-normal cursor-pointer">
                줄바꿈 유지 (기본)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remove" id="remove" />
              <Label htmlFor="remove" className="font-normal cursor-pointer">
                줄바꿈 제거 (한 줄로)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="space" id="space" />
              <Label htmlFor="space" className="font-normal cursor-pointer">
                줄바꿈을 공백으로 변경
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="reduce" checked={reduceSpaces} onCheckedChange={(c) => setReduceSpaces(c as boolean)} />
            <Label htmlFor="reduce" className="font-normal cursor-pointer">
              연속된 공백을 1개로 줄이기
            </Label>
          </div>
        </div>
      </div>
    )
    return null
  }, [toolId, trimMode, blankLineMode, sortBeforeDedupe, sortMode, dedupeInSort, uniqueOnly, groupByDomain, removeUtm, mode, reduceSpaces, text, preview])

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">{renderControls}</div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">미리보기</Label>
          <div className="w-full h-[160px] p-3 rounded border border-slate-200 bg-white text-sm text-slate-600 overflow-y-auto whitespace-pre-wrap">
            {preview || <span className="text-slate-300">결과가 여기에 표시됩니다.</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
