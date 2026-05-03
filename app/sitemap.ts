import { MetadataRoute } from "next";
import { UTILITIES } from "@/lib/utilities-registry";
import { GUIDES } from "@/lib/guides-registry";
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry";
import { BLOG_POSTS } from "@/lib/blog-registry";
import { getPublishedPosts } from "@/lib/db/post-queries";

// Sitemap 재생성 주기 설정 (ISR)
export const revalidate = 3600; // 1시간마다 재생성

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com";

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
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 도구 페이지 — 홈 추천 도구는 우선순위 상향
  const toolPages: MetadataRoute.Sitemap = UTILITIES.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: tool.showOnHome ? 0.9 : 0.8,
  }));

  // 가이드 페이지 (검색 의도 강한 콘텐츠 → 우선순위 상향)
  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 워크플로 페이지
  const workflowPages: MetadataRoute.Sitemap = WORKFLOW_PRESETS.map(
    (workflow) => ({
      url: `${baseUrl}/workflow/${workflow.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  // 블로그 페이지
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // AI 자동 생성 블로그/가이드 포스트 (DB) — 큐레이션 콘텐츠보다 낮은 우선순위
  const { data: aiPosts } = await getPublishedPosts(undefined, 500);
  const aiPages: MetadataRoute.Sitemap = (aiPosts ?? []).map((post) => ({
    url: `${baseUrl}/${post.type === "guide" ? "guides" : "blog"}/ai/${post.slug}`,
    lastModified: new Date(post.published_at ?? post.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...guidePages,
    ...workflowPages,
    ...blogPages,
    ...aiPages,
  ];
}
