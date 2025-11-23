"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { getGuideFAQBySlug } from "@/lib/guide-faq-registry"

interface GuideFAQSectionProps {
  guideSlug: string
}

export function GuideFAQSection({ guideSlug }: GuideFAQSectionProps) {
  const faqData = getGuideFAQBySlug(guideSlug)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!faqData || faqData.items.length === 0) {
    return null
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="mt-12 space-y-6 p-8 md:p-12 bg-white rounded-2xl shadow-sm border border-slate-200"
      aria-labelledby="guide-faq-heading"
    >
      <div className="flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="guide-faq-heading" className="text-2xl font-bold text-slate-900">
          이 가이드에 대해 자주 묻는 질문
        </h2>
      </div>

      <div className="space-y-3">
        {faqData.items.map((item, index) => (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-expanded={openIndex === index}
              aria-controls={`guide-faq-answer-${index}`}
            >
              <span className="font-semibold text-base text-slate-900">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" aria-hidden="true" />
              )}
            </button>

            {openIndex === index && (
              <div id={`guide-faq-answer-${index}`} className="p-4 pt-0 text-slate-600 leading-relaxed" role="region">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
