import { MetadataRoute } from "next"
import { UTILITIES } from "@/lib/utilities-registry"
import { GUIDES } from "@/lib/guides-registry"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"

// Sitemap 재생성 주기 설정 (ISR)
export const revalidate = 3600 // 1시간마다 재생성

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"

  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/workflows`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  // 도구 페이지 (중복 방지: trailing slash 제거)
  const toolPages: MetadataRoute.Sitemap = UTILITIES.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8, // 도구 페이지는 높은 우선순위
  }))

  // 가이드 페이지
  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // 워크플로 페이지
  const workflowPages: MetadataRoute.Sitemap = WORKFLOW_PRESETS.map((workflow) => ({
    url: `${baseUrl}/workflow/${workflow.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...toolPages, ...guidePages, ...workflowPages]
}

