import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-registry"
import { BlogDetailClient } from "./blog-detail-client"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAbsoluteUrl } from "@/lib/site-config"
import { getBlogFAQBySlug } from "@/lib/blog-faq-registry"
import { BlogJsonLd } from "@/components/blog-json-ld"
import { getBlogContentEnrichment, getEnrichedBlogContent } from "@/lib/blog-content-enrichment"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }> | { slug: string }
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "블로그 글을 찾을 수 없습니다",
      description: "요청하신 블로그 글을 찾을 수 없습니다.",
    }
  }

  const rawCanonical = getAbsoluteUrl(`/blog/${post.slug}`)
  // trailingSlash: true 설정에 맞게 / 통일
  const canonicalUrl = rawCanonical.endsWith("/") ? rawCanonical : `${rawCanonical}/`

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.description,
    keywords: post.targetKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.description,
      url: canonicalUrl,
      type: "article",
      locale: "ko_KR",
      siteName: "텍스터브",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.description,
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const enrichment = getBlogContentEnrichment(slug)
  const enrichedPost = {
    ...post,
    content: getEnrichedBlogContent(slug, post.content),
    aeoQuestion: post.aeoQuestion ?? enrichment?.aeoQuestion,
    aeoAnswer: post.aeoAnswer ?? enrichment?.aeoAnswer,
  }
  const faqItems = getBlogFAQBySlug(slug)?.items ?? []
  const relatedPosts = getAllBlogPosts()
    .filter((candidate) => candidate.slug !== slug)
    .filter((candidate) => !post.category || candidate.category === post.category)
    .slice(0, 2)
    .map(({ slug, title, description }) => ({ slug, title, description }))

  return (
    <>
      <BlogDetailClient
        post={enrichedPost}
        faqItems={faqItems}
        relatedPosts={relatedPosts}
      />
      <BlogJsonLd post={enrichedPost} faqItems={faqItems} />
    </>
  )
}

