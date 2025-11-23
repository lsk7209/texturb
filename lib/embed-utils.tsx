// Embed widget utilities for iframe integration

const EMBEDDABLE_TOOLS = ["char-counter", "slug-generator", "title-length-checker", "meta-description-checker"]

export function isEmbeddable(toolSlug: string): boolean {
  return EMBEDDABLE_TOOLS.includes(toolSlug)
}

interface EmbedOptions {
  theme?: "light" | "dark" | "auto"
  lang?: "ko" | "en"
  width?: string
  height?: string
}

export function generateEmbedCode(toolSlug: string, options: EmbedOptions = {}): string {
  const { theme = "light", lang = "ko", width = "100%", height = "380px" } = options

  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const params = new URLSearchParams()

  if (theme) params.set("theme", theme)
  if (lang) params.set("lang", lang)

  const queryString = params.toString()
  const embedUrl = `${baseUrl}/embed/${toolSlug}${queryString ? `?${queryString}` : ""}`

  const maxWidth = width === "100%" ? "max-width:480px;" : ""

  return `<iframe
  src="${embedUrl}"
  style="width:${width};${maxWidth}height:${height};border:1px solid #E5E7EB;border-radius:12px;"
  loading="lazy"
></iframe>`
}

export function getEmbedHeight(toolSlug: string): string {
  const heightMap: Record<string, string> = {
    "char-counter": "380px",
    "slug-generator": "320px",
    "title-length-checker": "360px",
    "meta-description-checker": "360px",
  }

  return heightMap[toolSlug] || "380px"
}
