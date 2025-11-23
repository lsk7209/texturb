"use client"

import { FileText, AlignLeft, Type, Sparkles } from "lucide-react"
import type { TabId } from "./text-studio/text-studio-main"

interface SiteCapabilitiesBarProps {
  onSelect: (tab: TabId) => void
}

export function SiteCapabilitiesBar({ onSelect }: SiteCapabilitiesBarProps) {
  const capabilities = [
    {
      id: "cleanup" as TabId,
      icon: AlignLeft,
      label: "글 정리(줄바꿈·공백)",
    },
    {
      id: "count" as TabId,
      icon: FileText,
      label: "글자수·단어수·줄 수 체크",
    },
    {
      id: "format" as TabId,
      icon: Type,
      label: "영문 대소문자 변환",
    },
    {
      id: "highlight" as TabId,
      icon: Sparkles,
      label: "특수문자·기호 복사",
    },
  ]

  return (
    <div className="w-full border-b border-slate-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center py-3 gap-2 md:gap-4">
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => onSelect(cap.id)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              <cap.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {cap.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
