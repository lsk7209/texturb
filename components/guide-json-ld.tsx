import { JsonLd } from "./json-ld"
import { getAbsoluteUrl } from "@/lib/site-config"
import type { GuideFAQItem } from "@/lib/guide-faq-registry"
import type { Guide } from "@/lib/guides-registry"

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

interface GuideHowToJsonLdProps {
  guide: Guide
}

export function GuideHowToJsonLd({ guide }: GuideHowToJsonLdProps) {
  // 첫 섹션은 도입부일 가능성이 높아 단계로 보지 않음
  const stepSections = guide.sections.length > 1 ? guide.sections.slice(1) : guide.sections
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.description,
    inLanguage: "ko-KR",
    step: stepSections.map((section, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: section.title,
      text: section.content.replace(/\s+/g, " ").slice(0, 500),
      ...(section.relatedToolId && {
        url: getAbsoluteUrl(`/tools/${section.relatedToolId}`),
      }),
    })),
  }
  return <JsonLd data={data} />
}

export function GuideBreadcrumbJsonLd({ guide }: GuideHowToJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: getAbsoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "가이드", item: getAbsoluteUrl("/guides") },
      { "@type": "ListItem", position: 3, name: guide.title, item: getAbsoluteUrl(`/guides/${guide.slug}`) },
    ],
  }
  return <JsonLd data={data} />
}
