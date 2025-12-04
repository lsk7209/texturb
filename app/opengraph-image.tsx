import { ImageResponse } from "next/og"

export const alt = "텍스터브 - 텍스트 작업실"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          텍스터브
        </div>
        <div
          style={{
            fontSize: 40,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          텍스트 작업, 한 번에
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            opacity: 0.9,
          }}
        >
          글자수 세기 · 줄바꿈 정리 · 대소문자 변환
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

