import { JsonLd } from "./json-ld"
import { getToolUrl } from "@/lib/site-config"

interface ToolJsonLdProps {
  toolName: string
  toolDescription: string
  toolSlug: string
  category?: string
  keywords?: string[]
}

export function ToolJsonLd({ toolName, toolDescription, toolSlug, category, keywords }: ToolJsonLdProps) {
  const toolUrl = getToolUrl(toolSlug)

  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolName,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    description: toolDescription,
    url: toolUrl,
    inLanguage: "ko",
    ...(category && { applicationSubCategory: category }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
  }

  return <JsonLd data={data} />
}
