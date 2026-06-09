export function getCanonicalSiteUrl(): string {
  const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com").trim()
  const siteUrl = new URL(rawSiteUrl)

  if (siteUrl.hostname === "texturb.com") {
    siteUrl.hostname = "www.texturb.com"
  }

  siteUrl.pathname = ""
  siteUrl.search = ""
  siteUrl.hash = ""

  return siteUrl.origin
}

export function getSiteUrl(): string {
  if (typeof window === "undefined") {
    return getCanonicalSiteUrl()
  }

  return window.location.origin
}

export function getAbsoluteUrl(path: string): string {
  const baseUrl = getCanonicalSiteUrl()
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

export function getToolUrl(slug: string): string {
  return getAbsoluteUrl(`/tools/${slug}`)
}

export function getGuideUrl(slug: string): string {
  return getAbsoluteUrl(`/guides/${slug}`)
}

export function getWorkflowUrl(slug: string): string {
  return getAbsoluteUrl(`/workflow/${slug}`)
}
