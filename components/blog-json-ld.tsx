import { JsonLd } from "./json-ld"
import type { BlogFAQItem } from "@/lib/blog-faq-registry"

interface BlogJsonLdProps {
  faqItems: BlogFAQItem[]
}

export function BlogJsonLd({ faqItems }: BlogJsonLdProps) {
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

