"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HighlightToolsProps {
  onInsert: (char: string) => void
}

const CATEGORIES = [
  { id: "decor", label: "제목 장식" },
  { id: "bracket", label: "괄호/박스" },
  { id: "arrow", label: "화살표" },
  { id: "line", label: "구분선" },
  { id: "math", label: "수학/기호" },
]

const CHAR_MAP: Record<string, { char: string; desc: string }[]> = {
  decor: [
    { char: "✦", desc: "반짝임" },
    { char: "✨", desc: "스파클" },
    { char: "📌", desc: "핀" },
    { char: "💡", desc: "팁" },
    { char: "✅", desc: "체크" },
    { char: "🔥", desc: "강조" },
    { char: "⭐", desc: "별" },
    { char: "📢", desc: "공지" },
    { char: "📍", desc: "위치" },
    { char: "💭", desc: "생각" },
  ],
  bracket: [
    { char: "「 」", desc: "낫표" },
    { char: "『 』", desc: "겹낫표" },
    { char: "【 】", desc: "강조 괄호" },
    { char: "⟨ ⟩", desc: "수학 괄호" },
    { char: "《 》", desc: "이중 꺾쇠" },
    { char: "Example", desc: "박스" }, // Placeholder logic needed if we want real box drawing chars
    { char: "[]", desc: "대괄호" },
    { char: "{}", desc: "중괄호" },
  ],
  arrow: [
    { char: "➜", desc: "굵은 화살표" },
    { char: "→", desc: "기본 화살표" },
    { char: "➤", desc: "강조 화살표" },
    { char: "►", desc: "재생" },
    { char: "⇒", desc: "이중 화살표" },
    { char: "↔", desc: "양방향" },
    { char: "⤴", desc: "커브" },
    { char: "⤵", desc: "아래 커브" },
  ],
  line: [
    { char: "━━━━━━━━", desc: "굵은 선" },
    { char: "────────", desc: "얇은 선" },
    { char: "········", desc: "점선" },
    { char: "════════", desc: "이중선" },
    { char: "---", desc: "대시" },
  ],
  math: [
    { char: "×", desc: "곱하기" },
    { char: "÷", desc: "나누기" },
    { char: "±", desc: "플러스마이너스" },
    { char: "≠", desc: "같지 않음" },
    { char: "≤", desc: "이하" },
    { char: "≥", desc: "이상" },
    { char: "∞", desc: "무한대" },
    { char: "∴", desc: "그러므로" },
  ],
}

export function HighlightTools({ onInsert }: HighlightToolsProps) {
  const [activeCat, setActiveCat] = useState("decor")

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
              activeCat === cat.id
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
        {CHAR_MAP[activeCat]?.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onInsert(item.char)}
            className="flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group"
          >
            <span className="text-xl font-medium text-slate-800 mb-1 group-hover:text-blue-600">{item.char}</span>
            <span className="text-[10px] text-slate-400 group-hover:text-blue-400">{item.desc}</span>
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-400 text-center">클릭하면 입력창의 텍스트 끝에 자동으로 추가됩니다.</p>
    </div>
  )
}
