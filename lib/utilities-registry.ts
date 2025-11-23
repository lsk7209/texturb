export type UtilityTool = {
  id: string
  name: string
  slug: string
  category: string
  description: string
  keywords: string[]
  showOnHome?: boolean
  tabId?: "cleanup" | "count" | "format" | "highlight"
}

export const UTILITY_CATEGORIES = [
  "글 길이/분량",
  "서식/정렬",
  "언어·케이스",
  "특수문자·기호",
  "변환",
  "메타·SEO",
  "추출·정리",
] as const

export const UTILITIES: UtilityTool[] = [
  {
    id: "line-break-cleaner",
    name: "글 정리(줄바꿈·공백)",
    slug: "line-break-cleaner",
    category: "서식/정렬",
    description: "복붙하면서 깨진 줄바꿈·공백을 한 번에 정리합니다.",
    keywords: ["줄바꿈", "공백", "정리"],
    showOnHome: true,
    tabId: "cleanup",
  },
  {
    id: "char-counter",
    name: "글자수·단어수 세기",
    slug: "char-counter",
    category: "글 길이/분량",
    description: "글자수·단어수·줄 수와 목표 글자수를 함께 보여줍니다.",
    keywords: ["글자수", "단어수", "자소서"],
    showOnHome: true,
    tabId: "count",
  },
  {
    id: "case-converter",
    name: "대소문자 변환",
    slug: "case-converter",
    category: "언어·케이스",
    description: "UPPERCASE / lowercase / Title Case / Sentence case를 지원합니다.",
    keywords: ["대문자", "소문자", "title case"],
    showOnHome: true,
    tabId: "format",
  },
  {
    id: "symbol-picker",
    name: "특수문자·기호",
    slug: "symbol-picker",
    category: "특수문자·기호",
    description: "제목·닉네임에 쓸 특수문자를 클릭 한 번으로 복사합니다.",
    keywords: ["특수문자", "기호", "닉네임"],
    showOnHome: true,
    tabId: "highlight",
  },
  // Phase 1 Utilities
  {
    id: "sentence-counter",
    name: "문장 수 세기",
    slug: "sentence-counter",
    category: "글 길이/분량",
    description: "마침표·물음표·느낌표 기준으로 문장 수를 세고, 평균 문장 길이를 보여줍니다.",
    keywords: ["문장 수", "문장 개수", "평균 문장 길이"],
    showOnHome: false,
    tabId: "count",
  },
  {
    id: "trim-whitespace",
    name: "양쪽 공백 정리",
    slug: "trim-whitespace",
    category: "서식/정렬",
    description: "각 줄 또는 전체 텍스트의 앞뒤 공백·탭을 제거해 문자열을 정리합니다.",
    keywords: ["공백 제거", "trim", "앞뒤 공백"],
    showOnHome: false,
    tabId: "cleanup",
  },
  {
    id: "remove-blank-lines",
    name: "빈 줄 제거",
    slug: "remove-blank-lines",
    category: "서식/정렬",
    description: "연속된 빈 줄을 정리해 문단 간격을 깔끔하게 맞춥니다.",
    keywords: ["빈 줄 제거", "줄 간격", "문단 정리"],
    showOnHome: false,
    tabId: "cleanup",
  },
  {
    id: "dedupe-lines",
    name: "중복 줄 제거",
    slug: "dedupe-lines",
    category: "서식/정렬",
    description: "완전히 같은 줄을 하나만 남기고 제거해 리스트를 정리합니다.",
    keywords: ["중복 제거", "리스트", "unique"],
    showOnHome: false,
    tabId: "cleanup",
  },
  {
    id: "markdown-to-html",
    name: "마크다운 → HTML 변환",
    slug: "markdown-to-html",
    category: "변환",
    description: "기본 마크다운 문법을 블로그·에디터용 HTML로 변환합니다.",
    keywords: ["마크다운", "HTML", "변환"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "html-to-text",
    name: "HTML 태그 제거",
    slug: "html-to-text",
    category: "변환",
    description: "HTML 코드에서 태그를 제거하고 순수 텍스트만 추출합니다.",
    keywords: ["html 태그 제거", "plain text"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "slug-generator",
    name: "슬러그 생성기",
    slug: "slug-generator",
    category: "메타·SEO",
    description: "한글 제목을 영문 소문자-kebab-case 슬러그로 변환합니다.",
    keywords: ["슬러그", "kebab-case", "URL"],
    showOnHome: false,
    tabId: "format",
  },
  // Phase 2 Utilities
  {
    id: "paragraph-counter",
    name: "문단 수 세기",
    slug: "paragraph-counter",
    category: "글 길이/분량",
    description: "빈 줄 기준으로 문단 수를 세고, 평균 문단 길이를 보여줍니다.",
    keywords: ["문단 수", "문단 길이"],
    showOnHome: false,
    tabId: "count",
  },
  {
    id: "sort-lines",
    name: "줄 정렬",
    slug: "sort-lines",
    category: "서식/정렬",
    description: "줄 단위 텍스트를 가나다/ABC/길이 기준으로 정렬합니다.",
    keywords: ["정렬", "가나다순", "ABC순"],
    showOnHome: false,
    tabId: "cleanup",
  },
  {
    id: "md-format-cleaner",
    name: "마크다운 포맷 정리",
    slug: "md-format-cleaner",
    category: "변환",
    description: "마크다운 문법 주변 공백·줄바꿈을 깨끗하게 정리합니다.",
    keywords: ["마크다운", "포맷", "정리"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "email-extractor",
    name: "이메일 추출기",
    slug: "email-extractor",
    category: "추출·정리",
    description: "텍스트에서 이메일 주소만 추출해 한 줄씩 나열합니다.",
    keywords: ["이메일", "추출", "email"],
    showOnHome: false,
    tabId: "cleanup",
  },
  {
    id: "url-extractor",
    name: "URL 추출기",
    slug: "url-extractor",
    category: "추출·정리",
    description: "URL만 뽑아서 리스트를 만들고 중복을 제거합니다.",
    keywords: ["URL", "링크", "추출"],
    showOnHome: false,
    tabId: "cleanup",
  },
  {
    id: "title-length-checker",
    name: "제목 길이/픽셀 체크",
    slug: "title-length-checker",
    category: "메타·SEO",
    description: "제목 문자열의 글자수와 대략적인 SERP 픽셀 폭을 추정합니다.",
    keywords: ["제목 길이", "SEO", "픽셀"],
    showOnHome: false,
    tabId: "count",
  },
  {
    id: "meta-description-checker",
    name: "메타 설명 길이 체크",
    slug: "meta-description-checker",
    category: "메타·SEO",
    description: "메타 설명 텍스트가 적절한 길이인지 체크합니다.",
    keywords: ["메타 설명", "SEO", "description"],
    showOnHome: false,
    tabId: "count",
  },
  // Phase 3 Utilities
  {
    id: "list-style-converter",
    name: "리스트 서식 변환기",
    slug: "list-style-converter",
    category: "서식/정렬",
    description: "하이픈·별표·번호 리스트를 서로 다른 스타일로 변환합니다.",
    keywords: ["리스트", "불릿", "번호 매기기", "목록 변환"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "table-markdown-converter",
    name: "표 변환기 (TSV/CSV ↔ Markdown)",
    slug: "table-markdown-converter",
    category: "변환",
    description: "엑셀·CSV·TSV 데이터를 마크다운 표로, 혹은 그 반대로 변환합니다.",
    keywords: ["표 변환", "마크다운 표", "CSV", "TSV", "엑셀"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "number-formatter",
    name: "숫자 포맷 정리",
    slug: "number-formatter",
    category: "서식/정렬",
    description: "금액·수치를 천 단위 콤마·소수점 자리수에 맞게 정리합니다.",
    keywords: ["숫자 포맷", "천 단위 콤마", "금액 표기", "소수점"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "date-format-converter",
    name: "날짜 표기 변환기",
    slug: "date-format-converter",
    category: "변환",
    description: "YYYY-MM-DD, 2025년 1월 1일 등 날짜 표기를 서로 변환합니다.",
    keywords: ["날짜 포맷", "date format", "YYYY-MM-DD"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "fullwidth-halfwidth-converter",
    name: "전각·반각 변환기",
    slug: "fullwidth-halfwidth-converter",
    category: "변환",
    description: "전각(Ｆｕｌｌｗｉｄｔｈ)과 반각(Fullwidth) 문자 사이를 변환합니다.",
    keywords: ["전각", "반각", "fullwidth", "halfwidth"],
    showOnHome: false,
    tabId: "format",
  },
  {
    id: "quote-bracket-style-converter",
    name: "따옴표·괄호 스타일 변환기",
    slug: "quote-bracket-style-converter",
    category: "서식/정렬",
    description: "따옴표·괄호 스타일을 통일합니다.",
    keywords: ["따옴표", "괄호 스타일", "인용부호", "문장부호 정리"],
    showOnHome: false,
    tabId: "format",
  },
]

export function getUtilityBySlug(slug: string): UtilityTool | undefined {
  return UTILITIES.find((util) => util.slug === slug)
}

export function getHomeUtilities(): UtilityTool[] {
  return UTILITIES.filter((util) => util.showOnHome)
}

export function getUtilitiesByCategory(category: string): UtilityTool[] {
  return UTILITIES.filter((util) => util.category === category)
}

export function searchUtilities(query: string): UtilityTool[] {
  const lowerQuery = query.toLowerCase()
  return UTILITIES.filter(
    (util) =>
      util.name.toLowerCase().includes(lowerQuery) ||
      util.description.toLowerCase().includes(lowerQuery) ||
      util.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)),
  )
}
