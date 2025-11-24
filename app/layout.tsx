import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CommandPalette } from "@/components/command-palette"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "텍스터브 - 텍스트 작업실",
    template: "%s | 텍스터브",
  },
  description: "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요. 글자수 세기, 줄바꿈 정리, 대소문자 변환 등 30개 이상의 텍스트 편집 도구를 무료로 제공합니다.",
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
  ],
  authors: [{ name: "텍스터브" }],
  creator: "텍스터브",
  publisher: "텍스터브",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.texturb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.texturb.com",
    siteName: "텍스터브",
    title: "텍스터브 - 텍스트 작업실",
    description: "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요.",
  },
  twitter: {
    card: "summary_large_image",
    title: "텍스터브 - 텍스트 작업실",
    description: "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google 사이트 인증 */}
        <meta name="google-site-verification" content="pp446b4VybV_rrn7abw4UbiGPKrZ7wP6KUWZ98XKdYA" />
        
        {/* Naver 사이트 인증 */}
        <meta name="naver-site-verification" content="a1ca64b9740fded60d00d81fb349f78a083727fc" />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3050601904412736"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
        <CommandPalette />
        <Toaster />
      </body>
    </html>
  )
}
