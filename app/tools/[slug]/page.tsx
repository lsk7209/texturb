import { UTILITIES } from "@/lib/utilities-registry"
import { ToolPageClient } from "./tool-page-client"

interface ToolPageProps {
  params: Promise<{ slug: string }> | { slug: string }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined }
}

export function generateStaticParams() {
  return UTILITIES.map((tool) => ({
    slug: tool.slug,
  }))
}

export default async function ToolPage({ params, searchParams }: ToolPageProps) {
  // Next.js 15 호환: params와 searchParams가 Promise인 경우 처리
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const resolvedSearchParams = typeof searchParams === "object" && "then" in searchParams ? await searchParams : searchParams
  const slug = resolvedParams.slug

  return <ToolPageClient slug={slug} searchParams={resolvedSearchParams} />
}
