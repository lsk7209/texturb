import { JsonLd } from "./json-ld"
import type { ToolFAQItem } from "@/lib/tool-faq-registry"
import { getToolUrl } from "@/lib/site-config"

interface ToolFAQJsonLdProps {
  faqItems: ToolFAQItem[]
  toolName: string
  toolSlug: string
}

export function ToolFAQJsonLd({ faqItems, toolName, toolSlug }: ToolFAQJsonLdProps) {
  if (!faqItems || faqItems.length === 0) {
    return null
  }

  const toolUrl = getToolUrl(toolSlug)

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    about: {
      "@type": "SoftwareApplication",
      name: toolName,
      url: toolUrl,
    },
  }

  return <JsonLd data={data} />
}

