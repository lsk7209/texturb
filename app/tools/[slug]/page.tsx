import { UTILITIES } from "@/lib/utilities-registry"
import { ToolPageClient } from "./tool-page-client"
import type { Metadata } from "next"

interface ToolPageProps {
  params: Promise<{ slug: string }> | { slug: string }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined }
}

export function generateStaticParams() {
  return UTILITIES.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug
  const tool = UTILITIES.find((t) => t.slug === slug)

  if (!tool) {
    return {
      title: "도구를 찾을 수 없습니다",
      description: "요청하신 도구를 찾을 수 없습니다.",
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"
  const canonicalUrl = `${baseUrl}/tools/${tool.slug}`
  // 핵심 키워드를 앞쪽에 배치
  const primaryKeyword = tool.keywords[0] || tool.name
  const metaTitle = `${primaryKeyword} ${tool.name} - 무료 온라인 텍스트 편집 도구 | 텍스터브`
  const metaDescription = `${primaryKeyword} ${tool.description} ${tool.keywords.slice(1).join(", ")} 등 텍스트 작업을 빠르고 쉽게 처리할 수 있는 무료 온라인 도구입니다.`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...tool.keywords, "텍스트 편집", "무료 도구", "온라인 도구", tool.category],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "website",
      locale: "ko_KR",
      siteName: "텍스터브",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function ToolPage({ params, searchParams }: ToolPageProps) {
  // Next.js 15 호환: params와 searchParams가 Promise인 경우 처리
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const resolvedSearchParams = typeof searchParams === "object" && "then" in searchParams ? await searchParams : searchParams
  const slug = resolvedParams.slug

  return <ToolPageClient slug={slug} searchParams={resolvedSearchParams} />
}
