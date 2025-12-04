import { HomePageContent } from "@/components/home-page-content"
import { HomePageJsonLd } from "@/components/home-page-json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  // 핵심 키워드를 앞쪽에 배치
  title: "글자수 세기 텍스트 편집 도구 모음 - 텍스터브 | 무료 온라인 텍스트 작업실",
  description: "글자수 세기, 줄바꿈 정리, 대소문자 변환 등 블로그·자소서·보고서 작성에 필요한 30개 이상의 텍스트 편집 도구를 무료로 제공합니다. 모든 작업은 브라우저에서 안전하게 처리됩니다.",
  keywords: [
    "텍스트 편집",
    "글자수 세기",
    "줄바꿈 정리",
    "대소문자 변환",
    "텍스트 변환",
    "마크다운 변환",
    "자기소개서",
    "블로그 글",
    "텍스트 도구",
    "무료 텍스트 편집기",
    "온라인 텍스트 도구",
    "텍스트 처리",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "텍스터브 - 텍스트 작업실",
    description: "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com",
    siteName: "텍스터브",
    type: "website",
    locale: "ko_KR",
  },
}

export default function Home() {
  return (
    <>
      <HomePageJsonLd />
      <HomePageContent />
    </>
  )
}
