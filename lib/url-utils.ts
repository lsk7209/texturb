// Utility functions for deep link and share URL generation

export function getCurrentToolOptions(toolId: string, options: Record<string, unknown>): string {
  const params = new URLSearchParams()

  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value))
    }
  })

  const queryString = params.toString()
  return queryString ? `?${queryString}` : ""
}

export function generateShareUrl(toolSlug: string, options: Record<string, unknown>): string {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const queryString = getCurrentToolOptions(toolSlug, options)
  return `${baseUrl}/tools/${toolSlug}${queryString}`
}

export function parseUrlOptions(searchParams: { [key: string]: string | string[] | undefined }): Record<
  string,
  string
> {
  const options: Record<string, string> = {}
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === "string") {
      options[key] = value
    }
  })
  return options
}
