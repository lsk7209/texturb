// Tool-specific usage tips, FAQs, and related tools

export interface ToolContent {
  usageTips: string[]
  faq: Array<{ question: string; answer: string }>
  relatedTools: string[]
  relatedGuides: string[]
}

export const TOOL_CONTENT: Record<string, ToolContent> = {
  "char-counter": {
    usageTips: [
      "목표 글자수를 설정하면 현재 진행률을 실시간으로 확인할 수 있습니다.",
      "공백 포함/제외 옵션을 활용해 플랫폼별 요구사항에 맞춰 측정하세요.",
      "자소서나 리포트 작성 시 각 문항마다 별도로 분량을 체크하면 효율적입니다.",
    ],
    faq: [
      {
        question: "공백 포함/제외의 차이는 무엇인가요?",
        answer:
          "공백 포함은 띄어쓰기와 줄바꿈을 모두 포함한 글자수이고, 공백 제외는 실제 문자만 센 글자수입니다. 대부분의 자소서나 지원서는 공백 포함 기준을 사용합니다.",
      },
      {
        question: "단어 수는 어떻게 세나요?",
        answer:
          "공백이나 구두점으로 구분된 단위를 하나의 단어로 계산합니다. 한글의 경우 띄어쓰기 기준, 영문의 경우 공백과 하이픈 등을 기준으로 구분됩니다.",
      },
    ],
    relatedTools: ["sentence-counter", "paragraph-counter", "title-length-checker"],
    relatedGuides: ["resume-cover-letter-length", "blog-post-cleanup"],
  },
  "line-break-cleaner": {
    usageTips: [
      "PDF에서 복사한 텍스트는 줄바꿈이 깨지는 경우가 많으니 먼저 이 도구로 정리하세요.",
      "줄 간격 옵션을 조정해 문단 구분을 명확하게 만들 수 있습니다.",
      "연속된 공백이 많은 텍스트는 공백 정리 옵션을 함께 사용하면 효과적입니다.",
    ],
    faq: [
      {
        question: "PDF에서 복사한 텍스트가 이상해요",
        answer:
          'PDF는 줄바꿈이 자동으로 삽입되는 경우가 많습니다. "줄바꿈 제거" 옵션을 선택하면 불필요한 줄바꿈을 정리할 수 있습니다.',
      },
      {
        question: "문단 구분은 어떻게 유지하나요?",
        answer: "빈 줄(연속된 줄바꿈)은 문단 구분으로 인식하여 유지됩니다. 줄바꿈 제거 시에도 빈 줄은 보존됩니다.",
      },
    ],
    relatedTools: ["trim-whitespace", "remove-blank-lines"],
    relatedGuides: ["blog-post-cleanup"],
  },
  "slug-generator": {
    usageTips: [
      "한글 제목을 입력하면 자동으로 영문 URL 친화적인 형태로 변환됩니다.",
      "SEO를 위해 핵심 키워드가 포함된 짧고 명확한 슬러그를 사용하세요.",
      "블로그 플랫폼마다 슬러그 규칙이 다를 수 있으니 확인 후 사용하세요.",
    ],
    faq: [
      {
        question: "슬러그가 왜 필요한가요?",
        answer:
          "URL에 사용되는 고유 식별자로, SEO와 가독성을 높이는 데 중요합니다. 한글 제목 대신 영문 슬러그를 사용하면 URL이 깔끔해집니다.",
      },
      {
        question: "한글이 왜 영어로 바뀌나요?",
        answer:
          '한글을 로마자로 음역(transliterate)하여 URL 친화적인 형태로 변환합니다. 예: "텍스트 도구" → "text-tool"',
      },
    ],
    relatedTools: ["case-converter", "title-length-checker"],
    relatedGuides: ["blog-post-cleanup", "dev-docs-format"],
  },
  "title-length-checker": {
    usageTips: [
      "검색 결과에서 제목이 잘리지 않으려면 36~55자 범위로 작성하세요.",
      "핵심 키워드는 제목 앞부분에 배치하는 것이 좋습니다.",
      "모바일과 데스크톱에서 보이는 길이가 다를 수 있으니 참고하세요.",
    ],
    faq: [
      {
        question: "픽셀 폭은 어떻게 계산하나요?",
        answer:
          "한글, 영문, 숫자 등 문자 종류별로 평균 폭을 계산하여 대략적인 픽셀 값을 추정합니다. 실제 표시는 폰트와 브라우저에 따라 다를 수 있습니다.",
      },
      {
        question: "SEO에 최적인 제목 길이는?",
        answer:
          '일반적으로 50~60자(영문 기준) 또는 30~40자(한글 기준)가 검색 결과에서 잘 표시됩니다. 너무 길면 뒷부분이 "..."으로 잘립니다.',
      },
    ],
    relatedTools: ["meta-description-checker", "char-counter"],
    relatedGuides: ["blog-post-cleanup"],
  },
}

export function getToolContent(toolId: string): ToolContent | null {
  return TOOL_CONTENT[toolId] || null
}
