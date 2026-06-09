import { HomePageContent } from "@/components/home-page-content";
import { HomePageJsonLd } from "@/components/home-page-json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // 핵심 키워드를 앞쪽에 배치
  title:
    "글자수 세기 텍스트 편집 도구 모음 - 텍스터브 | 무료 온라인 텍스트 작업실",
  description:
    "글자수 세기, 줄바꿈 정리, 대소문자 변환 등 블로그·자소서·보고서 작성에 필요한 30개 이상의 텍스트 편집 도구를 무료로 제공합니다. 모든 작업은 브라우저에서 안전하게 처리됩니다.",
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
  // trailing slash는 next.config.mjs의 trailingSlash: true로 통일
  openGraph: {
    title: "텍스터브 - 텍스트 작업실",
    description:
      "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com",
    siteName: "텍스터브",
    type: "website",
    locale: "ko_KR",
  },
};

const TOOL_CATEGORIES = [
  {
    title: "글자수·분량 측정",
    tools: [
      {
        name: "글자수 세기",
        desc: "공백 포함·제외, 단어 수, 문장 수, 단락 수를 동시에 측정합니다.",
      },
      {
        name: "바이트 수 계산",
        desc: "UTF-8 기준 바이트 크기를 실시간으로 확인합니다.",
      },
      {
        name: "읽기 시간 계산기",
        desc: "평균 독서 속도 기준으로 예상 읽기 시간을 표시합니다.",
      },
    ],
  },
  {
    title: "텍스트 변환·정리",
    tools: [
      {
        name: "줄바꿈 정리",
        desc: "불필요한 공백 줄과 연속 줄바꿈을 한 번에 정리합니다.",
      },
      {
        name: "대소문자 변환",
        desc: "전체 대문자, 소문자, 첫 글자 대문자로 일괄 변환합니다.",
      },
      {
        name: "공백 제거",
        desc: "앞뒤 공백, 연속 공백, 줄 간 공백을 원하는 방식으로 정리합니다.",
      },
      {
        name: "특수문자 제거",
        desc: "이모지, 특수기호, HTML 태그를 선택해서 제거합니다.",
      },
    ],
  },
  {
    title: "형식 변환",
    tools: [
      {
        name: "마크다운 변환",
        desc: "일반 텍스트를 마크다운 형식으로, 또는 반대로 변환합니다.",
      },
      {
        name: "HTML 인코딩·디코딩",
        desc: "HTML 특수문자를 엔티티 코드로 변환하거나 원래대로 돌립니다.",
      },
      {
        name: "URL 인코딩·디코딩",
        desc: "한글·특수문자를 URL 안전 형식으로 변환합니다.",
      },
      {
        name: "JSON 포맷터",
        desc: "JSON을 보기 좋게 들여쓰기하거나 압축합니다.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "입력한 텍스트가 서버에 저장되나요?",
    a: "아닙니다. 텍스터브의 모든 도구는 브라우저에서만 작동하며, 입력한 텍스트는 서버에 전송되거나 저장되지 않습니다. 민감한 문서도 안심하고 사용할 수 있습니다.",
  },
  {
    q: "글자수 세기에서 공백은 어떻게 처리하나요?",
    a: "공백 포함과 공백 제외 글자수를 동시에 표시합니다. 자기소개서나 공모전처럼 공백 제외 기준을 요구하는 경우에도 한 화면에서 바로 확인할 수 있습니다.",
  },
  {
    q: "모바일에서도 사용할 수 있나요?",
    a: "네. 텍스터브는 모바일 환경에 최적화되어 있습니다. 스마트폰이나 태블릿에서도 빠르게 텍스트를 붙여넣고 편집할 수 있습니다.",
  },
  {
    q: "자기소개서 글자수는 어떻게 세나요?",
    a: "글자수 세기 도구에 자기소개서 내용을 붙여넣으면 됩니다. 기업마다 공백 포함·제외 기준이 다르므로 두 수치를 모두 확인하세요. 특정 항목만 세고 싶으면 해당 문단만 선택해 붙여넣으면 됩니다.",
  },
  {
    q: "블로그 글쓰기에 어떻게 활용하나요?",
    a: "줄바꿈 정리로 단락 간격을 통일하고, 글자수 세기로 분량을 관리합니다. 네이버 블로그는 공백 포함 기준을 주로 사용하므로 공백 포함 글자수를 기준으로 삼으세요.",
  },
  {
    q: "이력을 이어서 작업할 수 있나요?",
    a: "텍스터브의 도구는 브라우저를 닫으면 입력값이 초기화됩니다. 계속 작업이 필요하다면 중간에 결과를 복사해 문서 편집기에 저장하고, 다음에 다시 붙여넣어 이어서 사용하세요.",
  },
  {
    q: "JSON 포맷터는 어떤 경우에 쓰나요?",
    a: "API 응답 데이터를 확인하거나 설정 파일을 정리할 때 유용합니다. 압축된 JSON을 붙여넣으면 들여쓰기된 형식으로 바꿔주고, 반대로 최소화가 필요하면 압축 모드로 전환하면 됩니다.",
  },
];

export default function Home() {
  return (
    <>
      <HomePageJsonLd />
      <HomePageContent />

      <section className="tool-category-section">
        <div className="container">
          <h2>도구 카테고리</h2>
          <p>
            텍스터브는 글자수 세기, 텍스트 변환, 형식 정리 등
            블로그·자소서·보고서 작성에 필요한 도구를 한 곳에 모았습니다. 모든
            작업은 브라우저에서 처리되어 개인정보 걱정 없이 사용할 수 있습니다.
          </p>
          <div className="category-grid">
            {TOOL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="category-group">
                <h3>{cat.title}</h3>
                <ul>
                  {cat.tools.map((tool) => (
                    <li key={tool.name}>
                      <strong>{tool.name}</strong>
                      <span>{tool.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>자주 묻는 질문</h2>
          {FAQS.map((item) => (
            <article key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
