import { JsonLd } from "./json-ld"
import type { GuideFAQItem } from "@/lib/guide-faq-registry"

interface GuideJsonLdProps {
  faqItems: GuideFAQItem[]
}

export function GuideJsonLd({ faqItems }: GuideJsonLdProps) {
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
  }

  return <JsonLd data={data} />
}
