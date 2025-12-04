import { JsonLd } from "./json-ld"
import { getAbsoluteUrl } from "@/lib/site-config"

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url.startsWith("http") ? item.url : getAbsoluteUrl(item.url) }),
    })),
  }

  return <JsonLd data={data} />
}

