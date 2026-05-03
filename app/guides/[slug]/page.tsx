import { GUIDES } from "@/lib/guides-registry"
import { GuideDetail } from "./guide-detail"
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
  // 가이드 제목 그대로 사용 (검색 의도 정확히 반영)
  const metaTitle = `${guide.title} | 텍스터브 가이드`
  const baseDesc = `${guide.description} 단계별 실전 가이드와 활용 팁을 제공합니다.`
  const metaDescription = baseDesc.length > 155 ? baseDesc.slice(0, 152) + "…" : baseDesc

  // 가이드 제목/설명에서 키워드 추출
  const titleWords = guide.title
    .replace(/[,.|·\-:?!]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1)
    .slice(0, 5)

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      ...titleWords,
      "텍스트 편집 가이드",
      "텍스트 작업 가이드",
      "텍스터브",
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
      authors: ["텍스터브 편집팀"],
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

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  // Next.js 15 호환: params가 Promise인 경우 처리
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug

  return <GuideDetail slug={slug} />
}
