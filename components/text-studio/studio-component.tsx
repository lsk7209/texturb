"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export type TabId = "cleanup" | "count" | "format" | "highlight"

/**
 * Component: StudioComponent
 * 텍스트 입력 및 출력을 표시하는 기본 스튜디오 컴포넌트
 * @param {string} toolId - 도구 ID [Optional]
 * @param {string} initialText - 초기 텍스트 값 [Optional]
 * @param {string} text - 제어된 텍스트 값 [Optional]
 * @param {(text: string) => void} onTextChange - 텍스트 변경 핸들러 [Optional]
 * @example <StudioComponent initialText="Hello" onTextChange={(text) => console.log(text)} />
 */
interface StudioComponentProps {
  toolId?: string
  initialText?: string
  text?: string
  onTextChange?: (text: string) => void
}

export function StudioComponent({ initialText = "", text, onTextChange }: StudioComponentProps) {
  const [internalText, setInternalText] = useState(initialText)

  const currentText = text ?? internalText
  const handleTextChange = (newText: string) => {
    if (onTextChange) {
      onTextChange(newText)
    } else {
      setInternalText(newText)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">입력</h2>
        <Textarea
          value={currentText}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="텍스트를 입력하세요..."
          className="min-h-[400px] font-mono"
        />
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">출력</h2>
        <div className="min-h-[400px] p-4 bg-muted rounded-md font-mono whitespace-pre-wrap">
          {currentText || "텍스트가 여기에 표시됩니다..."}
        </div>
      </Card>
    </div>
  )
}
