import { createSign } from "node:crypto"
import { getCanonicalSiteUrl } from "@/lib/site-config"

type GscServiceAccount = {
  client_email: string
  private_key: string
  token_uri?: string
}

export type GscSitemapSubmitResult = {
  success: boolean
  skipped?: boolean
  siteUrl: string
  sitemapUrl: string
  status?: number
  error?: string
}

function base64url(input: string | Buffer): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
}

function getServiceAccount(): GscServiceAccount | null {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON
  if (raw) {
    return JSON.parse(raw) as GscServiceAccount
  }

  const clientEmail = process.env.GSC_CLIENT_EMAIL
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, "\n")
  if (clientEmail && privateKey) {
    return {
      client_email: clientEmail,
      private_key: privateKey,
      token_uri: "https://oauth2.googleapis.com/token",
    }
  }

  return null
}

async function getAccessToken(account: GscServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const claim = base64url(
    JSON.stringify({
      iss: account.client_email,
      scope: "https://www.googleapis.com/auth/webmasters",
      aud: account.token_uri || "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    }),
  )
  const unsignedJwt = `${header}.${claim}`
  const signature = createSign("RSA-SHA256").update(unsignedJwt).sign(account.private_key)
  const assertion = `${unsignedJwt}.${base64url(signature)}`

  const res = await fetch(account.token_uri || "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  })

  const data = (await res.json()) as {
    access_token?: string
    error?: string
    error_description?: string
  }
  if (!res.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || `Token request failed: HTTP ${res.status}`)
  }

  return data.access_token
}

export async function submitSitemapToSearchConsole(): Promise<GscSitemapSubmitResult> {
  const rawBase = (process.env.GSC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || getCanonicalSiteUrl()).trim()
  const siteUrl = rawBase.endsWith("/") ? rawBase : `${rawBase}/`
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString()
  const account = getServiceAccount()

  if (!account) {
    return {
      success: false,
      skipped: true,
      siteUrl,
      sitemapUrl,
      error: "GSC service account env is not configured",
    }
  }

  try {
    const token = await getAccessToken(account)
    const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      siteUrl,
    )}/sitemaps/${encodeURIComponent(sitemapUrl)}`
    const res = await fetch(endpoint, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!res.ok) {
      return {
        success: false,
        siteUrl,
        sitemapUrl,
        status: res.status,
        error: await res.text(),
      }
    }

    return { success: true, siteUrl, sitemapUrl, status: res.status }
  } catch (error) {
    return {
      success: false,
      siteUrl,
      sitemapUrl,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
