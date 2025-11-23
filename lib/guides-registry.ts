export type GuideSection = {
  title: string
  content: string
  relatedToolId?: string
}

export type Guide = {
  slug: string
  title: string
  description: string
  relatedWorkflowId?: string
  sections: GuideSection[]
}

export const GUIDES: Guide[] = [
  {
    slug: "blog-post-cleanup-guide",
    title: "블로그 글, 복붙 후 줄바꿈·글자수·제목까지 한 번에 정리하는 법",
    description: "네이버, 티스토리, 브런치 등 블로그 포스팅 전 필수 체크리스트와 정리 방법을 소개합니다.",
    relatedWorkflowId: "blog-post-cleanup",
    sections: [
      {
        title: "왜 블로그 글 정리가 필요한가요?",
        content:
          "다른 곳에서 작성한 글을 블로그 에디터에 붙여넣으면 줄바꿈이 깨지거나 불필요한 공백이 들어가는 경우가 많습니다. 깔끔한 포스팅을 위해 발행 전 텍스트 정리는 필수입니다.",
      },
      {
        title: "1단계: 줄바꿈과 공백 정리하기",
        content:
          "가장 먼저 할 일은 텍스트의 기본 서식을 다듬는 것입니다. '글 정리' 도구를 사용해 불필요한 빈 줄을 제거하고, 문단 사이 간격을 일정하게 맞추세요.",
        relatedToolId: "line-break-cleaner",
      },
      {
        title: "2단계: 적절한 분량 확인하기",
        content:
          "검색 엔진 최적화(SEO)를 위해서는 적절한 글자수가 중요합니다. 보통 1,500자 이상의 글이 좋은 평가를 받습니다. 공백 제외 글자수를 확인해보세요.",
        relatedToolId: "char-counter",
      },
      {
        title: "3단계: 가독성 높은 구조 만들기",
        content:
          "한 문단이 너무 길면 독자가 읽기 힘듭니다. 문단 수 세기 도구로 전체적인 구조를 파악하고, 너무 긴 문단은 적절히 나누어 주세요.",
        relatedToolId: "paragraph-counter",
      },
      {
        title: "4단계: 검색에 잘 걸리는 제목 짓기",
        content:
          "제목은 검색 결과에서 가장 먼저 보이는 부분입니다. 제목 길이 체크 도구로 PC와 모바일 검색 결과에서 제목이 잘리지 않는지 확인하세요.",
        relatedToolId: "title-length-checker",
      },
    ],
  },
  {
    slug: "resume-length-guide",
    title: "이력서·자소서 분량, 글자수와 문장 수로 정확히 맞추는 방법",
    description: "합격을 부르는 자기소개서, 문항별 글자수 제한을 딱 맞추고 가독성을 높이는 비결을 알려드립니다.",
    relatedWorkflowId: "resume-length-check",
    sections: [
      {
        title: "자소서 분량, 왜 중요할까요?",
        content:
          "기업마다 요구하는 글자수 제한은 반드시 지켜야 할 기본 규칙입니다. 너무 짧으면 성의 없어 보이고, 넘치면 제출조차 불가능할 수 있습니다.",
      },
      {
        title: "1단계: 목표 글자수 설정하고 작성하기",
        content:
          "각 문항의 제한 글자수(예: 500자, 1000자)를 미리 설정해두고 작성하세요. 글자수 세기 도구의 '목표 설정' 기능을 활용하면 편리합니다.",
        relatedToolId: "char-counter",
      },
      {
        title: "2단계: 간결한 문장으로 다듬기",
        content:
          "좋은 자소서는 문장이 간결하고 명확합니다. 문장 수 세기 도구로 평균 문장 길이를 확인하고, 너무 길어진 문장은 두 개로 나누세요.",
        relatedToolId: "sentence-counter",
      },
      {
        title: "3단계: 문단 나누기로 가독성 높이기",
        content:
          "빽빽한 글은 읽는 사람을 지치게 합니다. 문단 수 세기 도구를 활용해 내용을 논리적인 단위로 나누고, 적절한 줄바꿈을 넣어주세요.",
        relatedToolId: "paragraph-counter",
      },
    ],
  },
  {
    slug: "report-table-guide",
    title: "보고서용 표·숫자·날짜 포맷, 엑셀 데이터로 3분 안에 정리하기",
    description:
      "엑셀에서 복사한 데이터를 깔끔한 마크다운 표로 변환하고, 숫자와 날짜 서식을 보고서 표준에 맞게 통일하는 방법을 알아봅니다.",
    relatedWorkflowId: "report-data-format",
    sections: [
      {
        title: "데이터 정리, 왜 시간이 오래 걸릴까요?",
        content:
          "엑셀 데이터를 문서에 붙여넣으면 서식이 깨지거나, 숫자 단위와 날짜 표기가 제각각인 경우가 많습니다. 이를 하나씩 수정하는 것은 비효율적입니다.",
      },
      {
        title: "1단계: 엑셀 표를 마크다운으로 변환하기",
        content:
          "엑셀이나 스프레드시트의 데이터를 복사해서 표 변환기에 붙여넣으세요. 클릭 한 번으로 웹 문서에 바로 쓸 수 있는 깔끔한 마크다운 표가 완성됩니다.",
        relatedToolId: "table-markdown-converter",
      },
      {
        title: "2단계: 숫자 서식 통일하기",
        content:
          "금액이나 통계 수치는 천 단위 콤마(,)와 소수점 자릿수가 중요합니다. 숫자 포맷 정리 도구로 들쑥날쑥한 숫자들을 표준 서식으로 맞추세요.",
        relatedToolId: "number-formatter",
      },
      {
        title: "3단계: 날짜 표기 표준화하기",
        content:
          "2024-01-01, 2024.1.1 등 섞여 있는 날짜 형식을 하나로 통일하세요. 보고서의 신뢰도는 이런 디테일에서 시작됩니다.",
        relatedToolId: "date-format-converter",
      },
    ],
  },
  {
    slug: "dev-docs-guide",
    title: "개발 문서와 기술 블로그를 위한 마크다운 완벽 가이드",
    description:
      "가독성 좋은 기술 문서를 작성하기 위한 마크다운 정리 팁과 URL 슬러그 생성, 포맷 변환 노하우를 공유합니다.",
    relatedWorkflowId: "dev-docs-format",
    sections: [
      {
        title: "기술 문서의 핵심은 가독성입니다",
        content:
          "코드가 포함된 기술 문서는 구조가 명확해야 합니다. 들여쓰기, 공백, 그리고 의미 있는 URL 구조가 문서의 품질을 결정합니다.",
      },
      {
        title: "1단계: 마크다운 문법 정리하기",
        content:
          "작성하다 보면 꼬이기 쉬운 마크다운 들여쓰기와 공백을 정리하세요. 마크다운 포맷 정리 도구가 문서의 구조를 깔끔하게 잡아줍니다.",
        relatedToolId: "md-format-cleaner",
      },
      {
        title: "2단계: SEO 친화적인 슬러그 만들기",
        content:
          "문서의 제목을 URL로 사용할 때는 영문 소문자와 하이픈(-)으로 구성된 슬러그가 좋습니다. 슬러그 생성기로 제목을 URL 친화적으로 변환하세요.",
        relatedToolId: "slug-generator",
      },
      {
        title: "3단계: 필요에 따라 포맷 변환하기",
        content:
          "작성한 마크다운을 HTML로 변환해야 하거나, 반대로 HTML을 마크다운으로 가져와야 할 때 변환 도구를 활용하면 작업 시간을 단축할 수 있습니다.",
        relatedToolId: "markdown-to-html",
      },
    ],
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug)
}
