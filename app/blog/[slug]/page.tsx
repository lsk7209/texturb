import { BLOG_POSTS } from "@/lib/blog-registry"
import { BlogDetailClient } from "./blog-detail-client"
import type { Metadata } from "next"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }> | { slug: string }
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "블로그 글을 찾을 수 없습니다",
      description: "요청하신 블로그 글을 찾을 수 없습니다.",
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"
  const canonicalUrl = post.canonicalUrl || `${baseUrl}/blog/${post.slug}`

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

  return <BlogDetailClient slug={slug} />
}

