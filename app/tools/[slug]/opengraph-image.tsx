import { ImageResponse } from "next/og"
import { getUtilityBySlug } from "@/lib/utilities-registry"

export const alt = "텍스터브 도구"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const tool = getUtilityBySlug(params.slug)
  const title = tool?.name ?? "텍스터브 도구"
  const description = tool?.description ?? "무료 텍스트 편집 도구"

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 24 }}>
          텍스터브 · 도구
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 28,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            lineHeight: 1.4,
            opacity: 0.85,
            display: "flex",
          }}
        >
          {description}
        </div>
        <div style={{ marginTop: "auto", fontSize: 26, opacity: 0.6, display: "flex" }}>
          texturb.com
        </div>
      </div>
    ),
    { ...size },
  )
}
