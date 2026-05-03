import { ImageResponse } from "next/og"
import { getGuideBySlug } from "@/lib/guides-registry"

export const alt = "텍스터브 가이드"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)
  const title = guide?.title ?? "텍스터브 가이드"
  const description = guide?.description ?? "단계별 텍스트 작업 가이드"

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, marginBottom: 24 }}>
          텍스터브 · 가이드
        </div>
        <div
          style={{
            fontSize: 64,
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
            fontSize: 30,
            lineHeight: 1.5,
            opacity: 0.92,
            display: "flex",
          }}
        >
          {description.length > 140 ? description.slice(0, 140) + "…" : description}
        </div>
        <div style={{ marginTop: "auto", fontSize: 26, opacity: 0.7, display: "flex" }}>
          texturb.com
        </div>
      </div>
    ),
    { ...size },
  )
}
