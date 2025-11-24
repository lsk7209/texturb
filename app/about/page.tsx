import type { Metadata } from "next"
import Link from "next/link"
import { PenTool, Shield, Zap, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "텍스터브 소개 | 텍스터브",
  description: "텍스터브는 글 쓰는 사람을 위한 텍스트 유틸리티 작업실입니다.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">텍스터브 소개</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            글 쓰는 사람을 위한 텍스트 유틸리티 작업실
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission Section */}
          <section className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              우리의 미션
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              텍스터브는 글을 쓰는 모든 사람들이 더 쉽고 빠르게 텍스트 작업을 할 수 있도록 돕는 것을 목표로 합니다. 
              복잡한 도구 설치나 회원가입 없이, 브라우저에서 바로 사용할 수 있는 간편한 텍스트 편집 도구를 제공합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              우리는 사용자의 개인정보를 최우선으로 생각하며, 모든 텍스트 처리는 사용자의 브라우저에서만 이루어집니다. 
              서버에 데이터를 저장하지 않아 안전하고 빠른 서비스를 제공합니다.
            </p>
          </section>

          {/* Features Section */}
          <section className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">주요 특징</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">즉시 사용 가능</h3>
                  <p className="text-muted-foreground text-sm">
                    회원가입이나 설치 없이 웹 브라우저에서 바로 사용할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">개인정보 보호</h3>
                  <p className="text-muted-foreground text-sm">
                    모든 작업이 브라우저에서 처리되어 서버에 데이터가 전송되지 않습니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">다양한 도구</h3>
                  <p className="text-muted-foreground text-sm">
                    글자수 세기, 줄바꿈 정리, 대소문자 변환 등 30개 이상의 텍스트 편집 도구를 제공합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">무료 서비스</h3>
                  <p className="text-muted-foreground text-sm">
                    모든 기능을 무료로 제공하며, 광고 없이 사용할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">제공하는 서비스</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">📊 글자수 및 분량 측정</h3>
                <p className="text-muted-foreground">
                  자기소개서, 블로그 글, SNS 게시물 작성 시 필요한 글자수, 단어수, 문장 수, 문단 수를 정확하게 측정합니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🧹 텍스트 정리 및 서식</h3>
                <p className="text-muted-foreground">
                  복사-붙여넣기 과정에서 생긴 불필요한 줄바꿈, 공백, 탭 문자를 자동으로 정리합니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🔤 대소문자 및 언어 변환</h3>
                <p className="text-muted-foreground">
                  영문 텍스트의 대문자, 소문자, 타이틀 케이스, 문장 케이스 변환을 지원합니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">✨ 특수문자 및 기호</h3>
                <p className="text-muted-foreground">
                  제목, 닉네임, 게시물에 사용할 수 있는 다양한 특수문자와 유니코드 기호를 제공합니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🔄 포맷 변환</h3>
                <p className="text-muted-foreground">
                  마크다운, HTML, CSV, TSV 등 다양한 포맷 간 변환을 지원합니다.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">문의하기</h2>
            <p className="text-muted-foreground mb-4">
              텍스터브에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해 주세요.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">이메일</p>
              <p className="text-muted-foreground">contact@texturb.com</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-primary hover:underline">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  )
}

