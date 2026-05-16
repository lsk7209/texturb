/**
 * 텍스터브 사이트 페르소나 정의
 *
 * 페르소나: "글 쓰는 사람의 작업대"
 * - 대상: 블로그 운영자, 취업 준비생(자소서), 직장인(보고서/기획서), 콘텐츠 크리에이터
 * - 톤: 친근하고 실용적, 군더더기 없음, 즉각적인 해결
 * - 포지셔닝: 설치 불필요, 회원가입 불필요, 개인정보 수집 없음, 브라우저에서 즉시 사용
 * - 핵심 가치: 빠름 > 안전(개인정보) > 다양한 기능
 */

export const SITE_PERSONA = {
  name: "텍스터브",
  tagline: "텍스트 작업실",
  fullTagline: "글 쓰는 사람을 위한 텍스트 작업실",
  description: "블로그·자소서·보고서 쓰다가 막히면, 그냥 여기다 붙여넣으세요.",
  longDescription:
    "텍스터브는 글 쓰는 모든 사람의 편에 서는 텍스트 유틸리티 작업실입니다. " +
    "복잡한 설치나 회원가입 없이, 브라우저에서 바로 글자수를 세고, 줄바꿈을 정리하고, " +
    "대소문자를 변환하세요. 30개 이상의 도구가 모두 무료입니다.",

  // 핵심 사용자 그룹
  targetUsers: [
    { id: "blogger", label: "블로그 운영자", useCase: "글자수 세기, SEO 메타 작성" },
    { id: "jobseeker", label: "취업 준비생", useCase: "자소서 글자수·공백 정리" },
    { id: "office", label: "직장인", useCase: "보고서·기획서 텍스트 정리" },
    { id: "creator", label: "콘텐츠 크리에이터", useCase: "SNS 글자수, 특수문자" },
    { id: "developer", label: "개발자", useCase: "JSON/CSV 변환, 인코딩" },
  ],

  // 핵심 가치 제안
  valueProps: [
    { icon: "⚡", title: "즉시 사용", desc: "설치·가입 없이 붙여넣기만 하면 됩니다." },
    { icon: "🔒", title: "개인정보 보호", desc: "모든 작업은 브라우저에서만 처리됩니다." },
    { icon: "🆓", title: "완전 무료", desc: "30개 이상 모든 도구가 영구 무료입니다." },
    { icon: "📱", title: "모바일 완벽 지원", desc: "PC·스마트폰 어디서나 동일하게 동작합니다." },
  ],

  // 브랜드 키워드 (SEO)
  primaryKeywords: ["글자수 세기", "텍스트 편집", "줄바꿈 정리"],
  secondaryKeywords: ["대소문자 변환", "마크다운 변환", "자기소개서 글자수", "블로그 글자수"],
  longTailKeywords: [
    "글자수 세기 무료",
    "자소서 글자수 세기",
    "줄바꿈 없애기",
    "온라인 텍스트 편집기",
    "특수문자 변환",
  ],

  // 소셜/연락처
  contact: {
    email: "contact@texturb.com",
    github: "https://github.com/lsk7209/texturb",
  },

  // 브랜드 색상 참조
  brandColor: "hsl(262 83% 58%)", // --primary
} as const

export type SitePersona = typeof SITE_PERSONA
