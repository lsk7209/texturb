import { UTILITIES } from "@/lib/utilities-registry"
import { GUIDES } from "@/lib/guides-registry"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"
import { BLOG_POSTS } from "@/lib/blog-registry"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"
  const currentDate = new Date().toUTCString()

  // RSS 피드 생성
  const rssItems = [
    // 메인 페이지
    {
      title: "텍스터브 - 텍스트 작업실",
      link: baseUrl,
      description: "글 쓰는 사람을 위한 텍스트 유틸리티 작업실",
      pubDate: currentDate,
    },
    // 도구 페이지
    ...UTILITIES.map((tool) => ({
      title: tool.name,
      link: `${baseUrl}/tools/${tool.slug}`,
      description: tool.description,
      pubDate: currentDate,
    })),
    // 가이드 페이지
    ...GUIDES.map((guide) => ({
      title: guide.title,
      link: `${baseUrl}/guides/${guide.slug}`,
      description: guide.description,
      pubDate: currentDate,
    })),
    // 워크플로 페이지
    ...WORKFLOW_PRESETS.map((workflow) => ({
      title: workflow.title,
      link: `${baseUrl}/workflow/${workflow.slug}`,
      description: workflow.description,
      pubDate: currentDate,
    })),
    // 블로그 포스트
    ...BLOG_POSTS.map((post) => ({
      title: post.title,
      link: `${baseUrl}/blog/${post.slug}`,
      description: post.description,
      pubDate: new Date(post.publishedAt).toUTCString(),
    })),
  ]

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>텍스터브 - 텍스트 작업실</title>
    <link>${baseUrl}</link>
    <description>글 쓰는 사람을 위한 텍스트 유틸리티 작업실</description>
    <language>ko-KR</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${rssItems
      .map(
        (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`
      )
      .join("\n")}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

