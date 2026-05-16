"use client"

import { JsonLd } from "./json-ld"
import { UTILITIES } from "@/lib/utilities-registry"
import { getSiteUrl, getToolUrl } from "@/lib/site-config"
import { SITE_PERSONA } from "@/lib/persona"

export function HomePageJsonLd() {
  const baseUrl = getSiteUrl()

  const siteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_PERSONA.name,
    alternateName: `${SITE_PERSONA.name} - ${SITE_PERSONA.tagline}`,
    url: baseUrl,
    description: SITE_PERSONA.longDescription,
    inLanguage: "ko",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/tools/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_PERSONA.name,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    description: SITE_PERSONA.longDescription,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_PERSONA.contact.email,
      contactType: "customer support",
      availableLanguage: "Korean",
    },
    sameAs: [SITE_PERSONA.contact.github],
  }

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "텍스터브 무료 텍스트 도구 목록",
    description: "글자수 세기, 줄바꿈 정리, 대소문자 변환 등 30개 이상의 무료 텍스트 편집 도구",
    numberOfItems: UTILITIES.length,
    itemListElement: UTILITIES.slice(0, 20).map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description,
        url: getToolUrl(tool.slug),
        applicationCategory: "UtilityApplication",
        applicationSubCategory: tool.category,
        operatingSystem: "Web Browser",
        inLanguage: "ko",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "KRW",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "텍스터브는 무료인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네, 텍스터브의 모든 텍스트 편집 도구는 완전 무료입니다. 회원가입이나 결제 없이 바로 사용하실 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "글자수 세기 도구는 어떻게 사용하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "텍스트를 입력창에 붙여넣거나 직접 입력하면 글자수, 단어수, 줄 수가 실시간으로 표시됩니다. 공백 포함/제외 옵션도 지원합니다.",
        },
      },
      {
        "@type": "Question",
        name: "입력한 텍스트가 서버에 저장되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "아니요. 텍스터브의 모든 텍스트 처리는 사용자의 브라우저에서만 이루어집니다. 서버에 텍스트 데이터가 전송되거나 저장되지 않아 개인정보가 안전하게 보호됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "모바일에서도 사용할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네, 텍스터브는 스마트폰과 태블릿을 포함한 모든 기기에서 동일하게 동작합니다. 앱 설치 없이 모바일 브라우저에서 바로 사용하세요.",
        },
      },
      {
        "@type": "Question",
        name: "어떤 텍스트 도구들을 제공하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "글자수·단어수 세기, 줄바꿈 정리, 대소문자 변환, 특수문자·기호, 마크다운 변환, HTML 변환, CSV/TSV 변환, 자소서 글자수 등 30개 이상의 텍스트 편집 도구를 제공합니다.",
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={siteData} />
      <JsonLd data={organizationData} />
      <JsonLd data={softwareApplicationData} />
      <JsonLd data={faqData} />
    </>
  )
}
