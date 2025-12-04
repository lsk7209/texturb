import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "텍스트 편집 도구 모음 - 글자수 세기, 줄바꿈 정리, 대소문자 변환 | 텍스터브",
  description: "글자수 세기, 줄바꿈 정리, 대소문자 변환, 특수문자 입력 등 텍스트 작업에 필요한 모든 도구를 한곳에서 무료로 사용하세요. 회원가입 없이 브라우저에서 바로 실행되며, 입력한 텍스트는 서버에 저장되지 않아 안전합니다.",
  keywords: [
    "텍스트 편집 도구",
    "글자수 세기",
    "줄바꿈 정리",
    "대소문자 변환",
    "텍스트 변환",
    "무료 텍스트 도구",
    "온라인 텍스트 편집기",
    "자기소개서 글자수",
    "블로그 글 편집",
  ],
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "텍스트 편집 도구 모음 - 글자수 세기, 줄바꿈 정리 | 텍스터브",
    description: "글자수 세기, 줄바꿈 정리, 대소문자 변환 등 텍스트 작업에 필요한 모든 도구를 한곳에서 무료로 사용하세요.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"}/tools`,
    type: "website",
    locale: "ko_KR",
    siteName: "텍스터브",
  },
  twitter: {
    card: "summary_large_image",
    title: "텍스트 편집 도구 모음 - 글자수 세기, 줄바꿈 정리 | 텍스터브",
    description: "글자수 세기, 줄바꿈 정리, 대소문자 변환 등 텍스트 작업에 필요한 모든 도구를 한곳에서 무료로 사용하세요.",
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

