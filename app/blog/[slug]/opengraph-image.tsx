import { ImageResponse } from "next/og"
import { getBlogPostBySlug } from "@/lib/blog-registry"

export const alt = "텍스터브 블로그"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  const title = post?.title ?? "텍스터브 블로그"
  const description = post?.description ?? ""
  const category = post?.category ?? "글쓰기 팁"

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "8px 18px",
            borderRadius: 999,
            background: "#dbeafe",
            color: "#1d4ed8",
            fontSize: 24,
            fontWeight: 600,
            alignSelf: "flex-start",
            marginBottom: 32,
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 24,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.5,
            color: "#475569",
            display: "flex",
          }}
        >
          {description.length > 120 ? description.slice(0, 120) + "…" : description}
        </div>
        <div style={{ marginTop: "auto", fontSize: 26, color: "#64748b", display: "flex" }}>
          texturb.com · 블로그
        </div>
      </div>
    ),
    { ...size },
  )
}
