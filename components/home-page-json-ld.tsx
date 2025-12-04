"use client"

import { JsonLd } from "./json-ld"
import { UTILITIES } from "@/lib/utilities-registry"
import { getSiteUrl, getToolUrl } from "@/lib/site-config"

export function HomePageJsonLd() {
  const baseUrl = getSiteUrl()

  const siteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "텍스터브",
    alternateName: "텍스터브 - 텍스트 작업실",
    url: baseUrl,
    description: "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요. 글자수 세기, 줄바꿈 정리, 대소문자 변환 등 30개 이상의 텍스트 편집 도구를 무료로 제공합니다.",
    inLanguage: "ko",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/tools?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "텍스터브",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "무료 온라인 텍스트 편집 도구를 제공하는 서비스",
    sameAs: [],
  }

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "텍스터브 도구 목록",
    description: "30개 이상의 무료 텍스트 편집 도구",
    itemListElement: UTILITIES.slice(0, 20).map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description,
        url: getToolUrl(tool.slug),
        applicationCategory: "UtilityApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "KRW",
        },
      },
    })),
  }

  return (
    <>
      <JsonLd data={siteData} />
      <JsonLd data={organizationData} />
      <JsonLd data={softwareApplicationData} />
    </>
  )
}

