import { GUIDES } from "@/lib/guides-registry"
import { GuideDetailClient } from "./guide-detail-client"
import type { Metadata } from "next"

interface GuideDetailPageProps {
  params: Promise<{ slug: string }> | { slug: string }
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: GuideDetailPageProps): Promise<Metadata> {
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug
  const guide = GUIDES.find((g) => g.slug === slug)

  if (!guide) {
    return {
      title: "가이드를 찾을 수 없습니다",
      description: "요청하신 가이드를 찾을 수 없습니다.",
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"
  const canonicalUrl = `${baseUrl}/guides/${guide.slug}`
  // 핵심 키워드를 앞쪽에 배치
  const titleKeywords = guide.title.split(" ").slice(0, 3).join(" ")
  const metaTitle = `${titleKeywords} - 텍스트 편집 가이드 | 텍스터브`
  const metaDescription = `${guide.description} 단계별 가이드와 실전 팁을 제공합니다.`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "텍스트 편집 가이드",
      "블로그 글 정리",
      "자소서 작성법",
      guide.title.split(" ")[0],
      "텍스트 작업 가이드",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
      locale: "ko_KR",
      siteName: "텍스터브",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  }
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  // Next.js 15 호환: params가 Promise인 경우 처리
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug

  return <GuideDetailClient slug={slug} />
}
