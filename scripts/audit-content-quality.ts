import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { getAllBlogPosts, type BlogPost } from "../lib/blog-registry"
import { getBlogContentEnrichment, getEnrichedBlogContent } from "../lib/blog-content-enrichment"

type Finding = {
  label: string
  points: number
}

type AuditRow = {
  slug: string
  title: string
  url: string
  category: string
  publishedAt: string
  score: number
  recommendation: "strengthen" | "merge-or-noindex" | "monitor"
  metrics: {
    words: number
    h2: number
    h3: number
    internalLinks: number
    externalLinks: number
    hasCta: boolean
    hasAeo: boolean
    hasMetaTitle: boolean
    hasMetaDescription: boolean
  }
  findings: Finding[]
}

const SITE_URL = "https://www.texturb.com"
const OUTPUT_PATH = join("docs", "content-quality-audit.md")
const LOW_WORD_THRESHOLD = 900
const WEAK_WORD_THRESHOLD = 1300

function stripHtml(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/[`*_>#|[\](){}-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function countWords(value: string): number {
  const text = stripHtml(value)
  return text ? text.split(" ").length : 0
}

function countMatches(value: string, pattern: RegExp): number {
  return [...value.matchAll(pattern)].length
}

function evaluatePost(post: BlogPost): AuditRow {
  const findings: Finding[] = []
  const enrichment = getBlogContentEnrichment(post.slug)
  const content = getEnrichedBlogContent(post.slug, post.content || "")
  const words = countWords(content)
  const h2 = countMatches(content, /^##\s+/gm) + countMatches(content, /<h2[\s>]/gi)
  const h3 = countMatches(content, /^###\s+/gm) + countMatches(content, /<h3[\s>]/gi)
  const inlineInternalLinks = countMatches(content, /href=["']\/(?!\/)/gi)
  const inlineExternalLinks = countMatches(content, /href=["']https?:\/\//gi)
  const internalLinks = (post.inlinks?.length ?? 0) + inlineInternalLinks
  const externalLinks = (post.outlinks?.length ?? 0) + inlineExternalLinks
  const hasCta = Boolean(post.cta?.link && post.cta.text)
  const hasAeo = Boolean(
    (post.aeoQuestion && post.aeoAnswer) ||
      (enrichment?.aeoQuestion && enrichment.aeoAnswer),
  )
  const hasMetaTitle = Boolean(post.metaTitle && post.metaTitle.length >= 20)
  const hasMetaDescription = Boolean(
    post.metaDescription &&
      post.metaDescription.length >= 70 &&
      post.metaDescription.length <= 180,
  )

  if (words < LOW_WORD_THRESHOLD) {
    findings.push({ label: `본문 분량 낮음(${words} words)`, points: 28 })
  } else if (words < WEAK_WORD_THRESHOLD) {
    findings.push({ label: `본문 분량 보강 권장(${words} words)`, points: 14 })
  }

  if (h2 < 3) findings.push({ label: `H2 구조 부족(${h2})`, points: 14 })
  if (h2 > 0 && h3 === 0) findings.push({ label: "H3 보조 구조 없음", points: 8 })
  if (!hasMetaTitle) findings.push({ label: "metaTitle 보강 필요", points: 10 })
  if (!hasMetaDescription) findings.push({ label: "metaDescription 길이/품질 점검 필요", points: 10 })
  if (internalLinks < 2) findings.push({ label: `내부 링크 부족(${internalLinks})`, points: 12 })
  if (externalLinks < 1) findings.push({ label: "외부 신뢰 출처 없음", points: 12 })
  if (!hasCta) findings.push({ label: "CTA 없음", points: 8 })
  if (!hasAeo) findings.push({ label: "AEO 질문/답변 필드 없음", points: 8 })

  const score = findings.reduce((sum, finding) => sum + finding.points, 0)
  const recommendation =
    score >= 46 ? "merge-or-noindex" : score >= 24 ? "strengthen" : "monitor"

  return {
    slug: post.slug,
    title: post.title,
    url: `${SITE_URL}/blog/${post.slug}/`,
    category: post.category || "uncategorized",
    publishedAt: post.publishedAt,
    score,
    recommendation,
    metrics: {
      words,
      h2,
      h3,
      internalLinks,
      externalLinks,
      hasCta,
      hasAeo,
      hasMetaTitle,
      hasMetaDescription,
    },
    findings,
  }
}

function groupByRecommendation(rows: AuditRow[]) {
  return rows.reduce<Record<AuditRow["recommendation"], number>>(
    (acc, row) => {
      acc[row.recommendation] += 1
      return acc
    },
    { "merge-or-noindex": 0, strengthen: 0, monitor: 0 },
  )
}

function renderTable(rows: AuditRow[]): string {
  return [
    "| Priority | URL | Score | Recommendation | Key gaps |",
    "| --- | --- | ---: | --- | --- |",
    ...rows.map((row, index) => {
      const gaps = row.findings
        .slice(0, 4)
        .map((finding) => finding.label.replace(/\|/g, "/"))
        .join("<br>")
      return `| ${index + 1} | ${row.url} | ${row.score} | ${row.recommendation} | ${gaps} |`
    }),
  ].join("\n")
}

function renderMarkdown(rows: AuditRow[]): string {
  const summary = groupByRecommendation(rows)
  const topRows = rows.slice(0, 30)
  const byCategory = [...rows.reduce<Map<string, number>>((map, row) => {
    map.set(row.category, (map.get(row.category) ?? 0) + 1)
    return map
  }, new Map())]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)

  return `# Content Quality Audit

Generated: ${new Date().toISOString()}

Scope: published static blog posts from \`getAllBlogPosts()\`. This audit does not rewrite article bodies. It flags likely SEO, GEO, AEO, and AdSense review risks from local structured fields and article markup.

## Summary

- Published posts audited: ${rows.length}
- Merge or noindex review: ${summary["merge-or-noindex"]}
- Strengthen first: ${summary.strengthen}
- Monitor: ${summary.monitor}

## Highest Priority URLs

${renderTable(topRows)}

## Category Concentration

| Category | Flagged posts |
| --- | ---: |
${byCategory.map(([category, count]) => `| ${category.replace(/\|/g, "/")} | ${count} |`).join("\n")}

## Recommended Workflow

1. Strengthen the top 20 URLs before creating new posts.
2. For each URL, add first-hand examples, clearer H2/H3 hierarchy, at least two relevant internal links, and one official/source-quality outbound citation.
3. Merge or noindex pages that target the same intent and cannot be made meaningfully distinct.
4. Keep AdSense Auto Ads only; do not add manual ad slots to thin articles.
5. Re-run \`npx tsx scripts/audit-content-quality.ts\` after each content batch.
`
}

function main() {
  const rows = getAllBlogPosts()
    .map(evaluatePost)
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))

  mkdirSync("docs", { recursive: true })
  writeFileSync(OUTPUT_PATH, renderMarkdown(rows), "utf8")

  const summary = groupByRecommendation(rows)
  console.log(
    JSON.stringify(
      {
        output: OUTPUT_PATH,
        flaggedPosts: rows.length,
        ...summary,
        topUrls: rows.slice(0, 10).map((row) => ({
          url: row.url,
          score: row.score,
          recommendation: row.recommendation,
          findings: row.findings.slice(0, 3).map((finding) => finding.label),
        })),
      },
      null,
      2,
    ),
  )
}

main()
