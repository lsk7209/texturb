/**
 * GSC + GA4 데이터 분석 스크립트
 * 사용: npx tsx scripts/gsc-ga4-analysis.ts
 */

import * as crypto from "node:crypto"
import * as fs from "node:fs"

const CREDENTIALS_PATH = "D:/env/gsc_credentials.json"
const GA4_PROPERTY_ID = "532887366"
const GSC_SITE_URL = "https://texturb.com/"

interface ServiceAccount {
  client_email: string
  private_key: string
  project_id: string
}

// JWT 생성 (RS256)
function createJwt(credentials: ServiceAccount, scopes: string[]): string {
  const now = Math.floor(Date.now() / 1000)
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url")
  const payload = Buffer.from(
    JSON.stringify({
      iss: credentials.client_email,
      scope: scopes.join(" "),
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  ).toString("base64url")

  const data = `${header}.${payload}`
  const sign = crypto.createSign("RSA-SHA256")
  sign.update(data)
  const signature = sign.sign(credentials.private_key, "base64url")

  return `${data}.${signature}`
}

// 액세스 토큰 발급
async function getAccessToken(credentials: ServiceAccount, scopes: string[]): Promise<string> {
  const jwt = createJwt(credentials, scopes)
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Token error: ${res.status} ${err}`)
  }
  const data = await res.json() as { access_token: string }
  return data.access_token
}

// GSC Search Analytics 조회
async function queryGSC(token: string) {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 90) // 최근 90일

  const fmt = (d: Date) => d.toISOString().split("T")[0]

  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE_URL)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: fmt(startDate),
        endDate: fmt(endDate),
        dimensions: ["query"],
        rowLimit: 50,
        startRow: 0,
      }),
    }
  )

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`GSC Query error: ${res.status} ${err}`)
  }
  return await res.json()
}

// GSC 페이지별 성과 조회
async function queryGSCPages(token: string) {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 90)
  const fmt = (d: Date) => d.toISOString().split("T")[0]

  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE_URL)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: fmt(startDate),
        endDate: fmt(endDate),
        dimensions: ["page"],
        rowLimit: 30,
      }),
    }
  )
  if (!res.ok) throw new Error(`GSC Pages error: ${res.status} ${await res.text()}`)
  return await res.json()
}

// GA4 Report 조회 - 페이지별 세션/이탈률
async function queryGA4(token: string) {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 90)
  const fmt = (d: Date) => d.toISOString().split("T")[0]

  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: fmt(startDate), endDate: fmt(endDate) }],
        dimensions: [{ name: "pagePath" }],
        metrics: [
          { name: "sessions" },
          { name: "bounceRate" },
          { name: "averageSessionDuration" },
          { name: "screenPageViews" },
          { name: "newUsers" },
        ],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 30,
      }),
    }
  )
  if (!res.ok) throw new Error(`GA4 error: ${res.status} ${await res.text()}`)
  return await res.json()
}

// GA4 트래픽 소스 조회
async function queryGA4Source(token: string) {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 90)
  const fmt = (d: Date) => d.toISOString().split("T")[0]

  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: fmt(startDate), endDate: fmt(endDate) }],
        dimensions: [{ name: "sessionDefaultChannelGrouping" }],
        metrics: [
          { name: "sessions" },
          { name: "newUsers" },
          { name: "bounceRate" },
        ],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 10,
      }),
    }
  )
  if (!res.ok) throw new Error(`GA4 Source error: ${res.status} ${await res.text()}`)
  return await res.json()
}

// GA4 디바이스 조회
async function queryGA4Device(token: string) {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 90)
  const fmt = (d: Date) => d.toISOString().split("T")[0]

  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: fmt(startDate), endDate: fmt(endDate) }],
        dimensions: [{ name: "deviceCategory" }],
        metrics: [
          { name: "sessions" },
          { name: "bounceRate" },
          { name: "averageSessionDuration" },
        ],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 5,
      }),
    }
  )
  if (!res.ok) throw new Error(`GA4 Device error: ${res.status} ${await res.text()}`)
  return await res.json()
}

async function main() {
  const credentials: ServiceAccount = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8"))

  console.log("=== 텍스터브 GSC + GA4 분석 ===\n")
  console.log(`서비스 계정: ${credentials.client_email}`)
  console.log(`GA4 Property: ${GA4_PROPERTY_ID}`)
  console.log(`GSC 사이트: ${GSC_SITE_URL}\n`)

  // GSC 토큰 (webmasters scope)
  console.log("GSC 토큰 발급 중...")
  const gscToken = await getAccessToken(credentials, [
    "https://www.googleapis.com/auth/webmasters.readonly",
  ])

  // GA4 토큰 (analytics scope)
  console.log("GA4 토큰 발급 중...")
  const ga4Token = await getAccessToken(credentials, [
    "https://www.googleapis.com/auth/analytics.readonly",
  ])

  // 병렬 조회
  console.log("데이터 조회 중...\n")
  const [gscQueries, gscPages, ga4Pages, ga4Sources, ga4Devices] = await Promise.all([
    queryGSC(gscToken).catch(e => ({ error: e.message })),
    queryGSCPages(gscToken).catch(e => ({ error: e.message })),
    queryGA4(ga4Token).catch(e => ({ error: e.message })),
    queryGA4Source(ga4Token).catch(e => ({ error: e.message })),
    queryGA4Device(ga4Token).catch(e => ({ error: e.message })),
  ])

  console.log("=".repeat(60))
  console.log("📊 GSC - 상위 검색어 (최근 90일)")
  console.log("=".repeat(60))
  if ("error" in gscQueries) {
    console.log("❌ 오류:", gscQueries.error)
  } else {
    const rows = (gscQueries as any).rows ?? []
    if (rows.length === 0) {
      console.log("데이터 없음 (서비스 계정이 GSC에 추가되지 않았거나 데이터 부족)")
    }
    rows.slice(0, 20).forEach((row: any, i: number) => {
      const query = row.keys[0]
      const clicks = row.clicks.toFixed(0)
      const impressions = row.impressions.toFixed(0)
      const ctr = (row.ctr * 100).toFixed(1)
      const position = row.position.toFixed(1)
      console.log(
        `${(i + 1).toString().padStart(2)}. [클릭:${clicks.padStart(5)} 노출:${impressions.padStart(7)} CTR:${ctr.padStart(5)}% 순위:${position.padStart(6)}] ${query}`
      )
    })
  }

  console.log("\n" + "=".repeat(60))
  console.log("📄 GSC - 상위 페이지 성과 (최근 90일)")
  console.log("=".repeat(60))
  if ("error" in gscPages) {
    console.log("❌ 오류:", gscPages.error)
  } else {
    const rows = (gscPages as any).rows ?? []
    rows.slice(0, 15).forEach((row: any, i: number) => {
      const page = row.keys[0].replace(GSC_SITE_URL.replace(/\/$/, ""), "")
      const clicks = row.clicks.toFixed(0)
      const impressions = row.impressions.toFixed(0)
      const ctr = (row.ctr * 100).toFixed(1)
      const position = row.position.toFixed(1)
      console.log(
        `${(i + 1).toString().padStart(2)}. [클릭:${clicks.padStart(5)} 노출:${impressions.padStart(7)} CTR:${ctr.padStart(5)}% 순위:${position.padStart(6)}] ${page || "/"}`
      )
    })
  }

  console.log("\n" + "=".repeat(60))
  console.log("📱 GA4 - 트래픽 소스별 세션 (최근 90일)")
  console.log("=".repeat(60))
  if ("error" in ga4Sources) {
    console.log("❌ 오류:", ga4Sources.error)
  } else {
    const data = ga4Sources as any
    const headers = data.dimensionHeaders?.map((h: any) => h.name) ?? []
    const metricHeaders = data.metricHeaders?.map((h: any) => h.name) ?? []
    const rows = data.rows ?? []
    rows.forEach((row: any) => {
      const channel = row.dimensionValues[0].value
      const sessions = row.metricValues[0].value
      const newUsers = row.metricValues[1].value
      const bounceRate = (parseFloat(row.metricValues[2].value) * 100).toFixed(1)
      console.log(`  ${channel.padEnd(20)} 세션:${sessions.padStart(7)}  신규:${newUsers.padStart(7)}  이탈률:${bounceRate}%`)
    })
  }

  console.log("\n" + "=".repeat(60))
  console.log("💻 GA4 - 디바이스별 세션 (최근 90일)")
  console.log("=".repeat(60))
  if ("error" in ga4Devices) {
    console.log("❌ 오류:", ga4Devices.error)
  } else {
    const data = ga4Devices as any
    const rows = data.rows ?? []
    rows.forEach((row: any) => {
      const device = row.dimensionValues[0].value
      const sessions = row.metricValues[0].value
      const bounceRate = (parseFloat(row.metricValues[1].value) * 100).toFixed(1)
      const avgDuration = parseFloat(row.metricValues[2].value).toFixed(0)
      console.log(`  ${device.padEnd(15)} 세션:${sessions.padStart(7)}  이탈률:${bounceRate}%  평균체류:${avgDuration}초`)
    })
  }

  console.log("\n" + "=".repeat(60))
  console.log("📈 GA4 - 상위 페이지 (최근 90일)")
  console.log("=".repeat(60))
  if ("error" in ga4Pages) {
    console.log("❌ 오류:", ga4Pages.error)
  } else {
    const data = ga4Pages as any
    const rows = data.rows ?? []
    if (rows.length === 0) {
      console.log("데이터 없음 (서비스 계정이 GA4에 추가되지 않았거나 데이터 부족)")
    }
    rows.slice(0, 20).forEach((row: any, i: number) => {
      const page = row.dimensionValues[0].value
      const sessions = row.metricValues[0].value
      const bounceRate = (parseFloat(row.metricValues[1].value) * 100).toFixed(1)
      const avgDuration = parseFloat(row.metricValues[2].value).toFixed(0)
      const pageViews = row.metricValues[3].value
      console.log(
        `${(i + 1).toString().padStart(2)}. [세션:${sessions.padStart(6)} PV:${pageViews.padStart(6)} 이탈:${bounceRate.padStart(5)}% 체류:${avgDuration}s] ${page}`
      )
    })
  }

  console.log("\n✅ 분석 완료")
}

main().catch((err) => {
  console.error("❌ 오류:", err.message)
  process.exit(1)
})
