import type { Metadata } from "next"
import type React from "react"
import { getAbsoluteUrl } from "@/lib/site-config"
import { getWorkflowById } from "@/lib/workflows-registry"

interface WorkflowIdLayoutProps {
  children: React.ReactNode
  params: Promise<{ id: string }> | { id: string }
}

export async function generateMetadata({ params }: WorkflowIdLayoutProps): Promise<Metadata> {
  const resolvedParams = typeof params === "object" && "then" in params ? await params : params
  const workflow = getWorkflowById(resolvedParams.id)

  if (!workflow) {
    return {
      title: "워크플로를 찾을 수 없습니다 | 텍스터브",
      description: "요청한 텍스트 작업 워크플로를 찾을 수 없습니다.",
    }
  }

  const canonicalUrl = getAbsoluteUrl(`/workflows/${workflow.id}`)
  const title = `${workflow.title} | 텍스터브`

  return {
    title,
    description: workflow.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: workflow.description,
      url: canonicalUrl,
      type: "website",
      locale: "ko_KR",
      siteName: "텍스터브",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: workflow.description,
    },
  }
}

export default function WorkflowIdLayout({ children }: WorkflowIdLayoutProps) {
  return children
}
