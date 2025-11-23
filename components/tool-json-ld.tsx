import { JsonLd } from "./json-ld"

interface ToolJsonLdProps {
  toolName: string
  toolDescription: string
  toolSlug: string
}

export function ToolJsonLd({ toolName, toolDescription, toolSlug }: ToolJsonLdProps) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://texterve.com"

  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolName,
    applicationCategory: "Utility",
    operatingSystem: "Web",
    description: toolDescription,
    url: `${baseUrl}/tools/${toolSlug}`,
    inLanguage: "ko",
  }

  return <JsonLd data={data} />
}
