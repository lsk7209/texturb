import { GUIDES } from "@/lib/guides-registry"
import { GuideDetailClient } from "./guide-detail-client"

interface GuideDetailPageProps {
  params: Promise<{ slug: string }> | { slug: string }
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  // Next.js 15 호환: params가 Promise인 경우 처리
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const slug = resolvedParams.slug

  return <GuideDetailClient slug={slug} />
}
