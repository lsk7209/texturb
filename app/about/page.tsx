import type { Metadata } from "next"
import Link from "next/link"
import { PenTool, Shield, Zap, Heart, Users, Globe } from "lucide-react"
import { SITE_PERSONA } from "@/lib/persona"

export const metadata: Metadata = {
  title: "텍스터브 소개 - 글 쓰는 사람을 위한 무료 텍스트 작업실",
  description:
    "텍스터브는 블로그 운영자, 취업 준비생, 직장인을 위한 텍스트 유틸리티 작업실입니다. 글자수 세기, 줄바꿈 정리, 대소문자 변환 등 30개 이상 도구를 완전 무료로 제공합니다.",
  keywords: [
    "텍스터브 소개",
    "텍스트 편집 도구",
    "무료 텍스트 도구",
    "텍스트 작업실",
    "글자수 세기",
    "줄바꿈 정리",
    "자소서 글자수",
    "블로그 글자수",
  ],
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "텍스터브 소개 - 글 쓰는 사람을 위한 무료 텍스트 작업실",
    description:
      "텍스터브는 블로그·자소서·보고서 작성에 필요한 30개 이상의 텍스트 편집 도구를 무료로 제공합니다.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"}/about/`,
    type: "website",
    locale: "ko_KR",
    siteName: "텍스터브",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">텍스터브 소개</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {SITE_PERSONA.fullTagline}
          </p>
        </div>

        <div className="space-y-10">
          {/* Mission Section */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              우리의 미션
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              {SITE_PERSONA.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              텍스터브는 글을 쓰는 모든 사람들이 더 쉽고 빠르게 텍스트 작업을 할 수 있도록 돕습니다.
              복잡한 도구 설치나 회원가입 없이 브라우저에서 바로 사용하고, 모든 데이터는 사용자의
              기기에서만 처리됩니다.
            </p>
          </section>

          {/* Target Users Section */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              이런 분들이 사용합니다
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SITE_PERSONA.targetUsers.map((user) => (
                <div key={user.id} className="p-4 bg-accent/30 rounded-lg">
                  <h3 className="font-semibold mb-1">{user.label}</h3>
                  <p className="text-sm text-muted-foreground">{user.useCase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Value Props */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">주요 특징</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {SITE_PERSONA.valueProps.map((prop) => (
                <div key={prop.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                    <p className="text-muted-foreground text-sm">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <PenTool className="w-6 h-6 text-primary" />
              제공하는 도구
            </h2>
            <div className="space-y-4">
              {[
                {
                  emoji: "📊",
                  title: "글자수 및 분량 측정",
                  desc: "자소서, 블로그 글, SNS 게시물 작성 시 필요한 글자수, 단어수, 문장 수, 문단 수를 실시간으로 정확히 측정합니다.",
                },
                {
                  emoji: "🧹",
                  title: "텍스트 정리 및 서식",
                  desc: "복사-붙여넣기 과정에서 생긴 불필요한 줄바꿈, 공백, 탭 문자를 자동으로 정리합니다.",
                },
                {
                  emoji: "🔤",
                  title: "대소문자 및 케이스 변환",
                  desc: "영문 텍스트의 UPPERCASE, lowercase, Title Case, Sentence case 변환을 지원합니다.",
                },
                {
                  emoji: "✨",
                  title: "특수문자 및 기호",
                  desc: "제목, 닉네임, 게시물에 사용할 수 있는 다양한 특수문자와 유니코드 기호를 제공합니다.",
                },
                {
                  emoji: "🔄",
                  title: "포맷 변환",
                  desc: "마크다운, HTML, CSV, TSV, JSON 등 다양한 포맷 간 변환을 지원합니다.",
                },
                {
                  emoji: "🔍",
                  title: "SEO·메타 도구",
                  desc: "블로그 포스트의 메타 제목·설명 글자수 확인, Open Graph 미리보기 등 SEO 작업을 지원합니다.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.emoji} {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy Section */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              개인정보 보호
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              텍스터브는 사용자의 개인정보와 텍스트 데이터를 최우선으로 보호합니다.
              모든 텍스트 처리는 사용자의 브라우저에서만 이루어지며, 입력한 텍스트는
              절대 서버로 전송되지 않습니다.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> 서버에 텍스트 데이터 저장 없음
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> 회원가입·로그인 불필요
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> 쿠키는 기능 개선 목적만 사용
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> 제3자 데이터 판매 없음
              </li>
            </ul>
          </section>

          {/* Global Reach */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              서비스 현황
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">30+</p>
                <p className="text-muted-foreground">무료 텍스트 도구</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-muted-foreground">브라우저 처리 (서버 미전송)</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">0원</p>
                <p className="text-muted-foreground">모든 기능 영구 무료</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">문의하기</h2>
            <p className="text-muted-foreground mb-4">
              텍스터브에 대한 문의사항이나 도구 추가 요청이 있으시면 언제든지 연락해 주세요.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-1">이메일</p>
              <p className="text-muted-foreground">{SITE_PERSONA.contact.email}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center space-x-4">
          <Link href="/" className="text-primary hover:underline">
            ← 홈으로 돌아가기
          </Link>
          <Link href="/tools/" className="text-primary hover:underline">
            도구 목록 보기 →
          </Link>
        </div>
      </div>
    </main>
  )
}
