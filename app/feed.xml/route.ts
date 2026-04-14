import { BLOG_POSTS } from "@/lib/blog-registry";
import { getPublishedPosts } from "@/lib/db/post-queries";

export const revalidate = 3600;

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com";

  // 정적 블로그 포스트
  const staticItems = BLOG_POSTS.map((post) => ({
    title: post.title,
    link: `${baseUrl}/blog/${post.slug}`,
    description: post.description ?? "",
    pubDate: new Date(post.publishedAt).toUTCString(),
  }));

  // AI 자동 생성 포스트 (DB)
  const { data: aiPosts } = await getPublishedPosts(undefined, 100);
  const aiItems = (aiPosts ?? []).map((post) => ({
    title: post.title,
    link: `${baseUrl}/${post.type === "guide" ? "guides" : "blog"}/ai/${post.slug}`,
    description: post.summary,
    pubDate: new Date(post.published_at ?? post.created_at).toUTCString(),
  }));

  // 최신순 정렬, 최대 50개
  const items = [...staticItems, ...aiItems]
    .sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
    )
    .slice(0, 50);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>텍스터브 - 텍스트 작업실</title>
    <link>${baseUrl}</link>
    <description>블로그·자소서·보고서 작성에 필요한 텍스트 편집 도구와 가이드</description>
    <language>ko</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items
      .map(
        (item) => `<item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`,
      )
      .join("\n    ")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
