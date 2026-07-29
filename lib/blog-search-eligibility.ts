import type { BlogPost } from "@/lib/blog-registry"
import { getBlogContentEnrichment, getEnrichedBlogContent } from "@/lib/blog-content-enrichment"

const LOW_WORD_THRESHOLD = 900
const WEAK_WORD_THRESHOLD = 1300
const MERGE_OR_NOINDEX_SCORE = 46

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

/**
 * A static article below this threshold remains available to existing visitors,
 * but is not promoted to crawlers until it is substantively improved.
 */
export function getBlogSearchRiskScore(post: BlogPost): number {
  const enrichment = getBlogContentEnrichment(post.slug)
  const content = getEnrichedBlogContent(post.slug, post.content || "")
  const words = countWords(content)
  const h2 = countMatches(content, /^##\s+/gm) + countMatches(content, /<h2[\s>]/gi)
  const h3 = countMatches(content, /^###\s+/gm) + countMatches(content, /<h3[\s>]/gi)
  const inlineInternalLinks = countMatches(content, /href=["']\/(?!\/)/gi)
  const inlineExternalLinks = countMatches(content, /href=["']https?:\/\//gi)
  const internalLinks = (post.inlinks?.length ?? 0) + inlineInternalLinks
  const externalLinks = (post.outlinks?.length ?? 0) + inlineExternalLinks
  const hasMetaTitle = Boolean(post.metaTitle && post.metaTitle.length >= 20)
  const hasMetaDescription = Boolean(
    post.metaDescription && post.metaDescription.length >= 70 && post.metaDescription.length <= 180,
  )
  const hasCta = Boolean(post.cta?.link && post.cta.text)
  const hasAeo = Boolean(
    (post.aeoQuestion && post.aeoAnswer) ||
      (enrichment?.aeoQuestion && enrichment.aeoAnswer),
  )

  let score = 0
  if (words < LOW_WORD_THRESHOLD) score += 28
  else if (words < WEAK_WORD_THRESHOLD) score += 14
  if (h2 < 3) score += 14
  if (h2 > 0 && h3 === 0) score += 8
  if (!hasMetaTitle) score += 10
  if (!hasMetaDescription) score += 10
  if (internalLinks < 2) score += 12
  if (externalLinks < 1) score += 12
  if (!hasCta) score += 8
  if (!hasAeo) score += 8
  return score
}

export function isIndexableBlogPost(post: BlogPost): boolean {
  return getBlogSearchRiskScore(post) < MERGE_OR_NOINDEX_SCORE
}

export function getIndexableBlogPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter(isIndexableBlogPost)
}
