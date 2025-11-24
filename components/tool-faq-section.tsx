"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { getToolFAQById } from "@/lib/tool-faq-registry"

interface ToolFAQSectionProps {
  toolId: string
}

export function ToolFAQSection({ toolId }: ToolFAQSectionProps) {
  const faqData = getToolFAQById(toolId)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!faqData || faqData.items.length === 0) {
    return null
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="space-y-4 sm:space-y-6 py-6 sm:py-8 border-t border-border" aria-labelledby="faq-heading">
      <div className="flex items-center gap-2 sm:gap-3">
        <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold">
          자주 묻는 질문
        </h2>
      </div>

      <div className="space-y-2.5 sm:space-y-3">
        {faqData.items.map((item, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset min-h-[56px] sm:min-h-[64px]"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-sm sm:text-base leading-tight pr-2">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />
              )}
            </button>

            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-muted-foreground leading-relaxed"
                role="region"
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
