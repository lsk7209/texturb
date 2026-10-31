export type WorkflowStep = {
  stepId: number
  title: string
  description: string
  toolId: string
}

export type WorkflowPreset = {
  id: string
  slug: string // Added slug field for URL routing
  title: string
  description: string
  icon: string // Lucide icon name
  steps: WorkflowStep[]
}

export const WORKFLOW_PRESETS: WorkflowPreset[] = [
  {
    id: "blog-post-cleanup",
    slug: "blog-post-cleanup",
    title: "블로그 글 정리 워크플로",
    description: "블로그 글을 붙여넣고 줄바꿈·글자수·제목까지 한 번에 점검합니다.",
    icon: "PenTool",
    steps: [
      {
        stepId: 1,
        title: "글 정리",
        description: "복붙하면서 깨진 줄바꿈과 공백을 먼저 정리합니다.",
        toolId: "line-break-cleaner",
      },
      {
        stepId: 2,
        title: "분량 체크",
        description: "글자수, 단어수, 줄 수를 확인하여 목표 분량을 맞춥니다.",
        toolId: "char-counter",
      },
      {
        stepId: 3,
        title: "구조 점검",
        description: "문장과 문단 구조를 확인하여 가독성을 높입니다.",
        toolId: "paragraph-counter",
      },
      {
        stepId: 4,
        title: "SEO 점검",
        description: "검색 노출을 위해 제목과 메타 설명을 최적화합니다.",
        toolId: "title-length-checker",
      },
    ],
  },
  {
    id: "resume-length-check",
    slug: "resume-length-check",
    title: "자소서 분량 관리 워크플로",
    description: "자기소개서 문항별 글자수와 문장 호흡을 완벽하게 맞춥니다.",
    icon: "FileText",
    steps: [
      {
        stepId: 1,
        title: "목표 설정",
        description: "작성한 내용을 붙여넣고 목표 글자수를 설정합니다.",
        toolId: "char-counter",
      },
      {
        stepId: 2,
        title: "문장 호흡",
        description: "너무 긴 문장이 없는지 문장 단위로 점검합니다.",
        toolId: "sentence-counter",
      },
      {
        stepId: 3,
        title: "문단 분배",
        description: "가독성을 위해 문단이 적절히 나뉘었는지 확인합니다.",
        toolId: "paragraph-counter",
      },
    ],
  },
  {
    id: "report-data-format",
    slug: "report-data-format",
    title: "표·숫자 정리 워크플로",
    description: "엑셀 데이터를 보고서용 표와 깔끔한 숫자 포맷으로 변환합니다.",
    icon: "Table",
    steps: [
      {
        stepId: 1,
        title: "표 변환",
        description: "엑셀/CSV 데이터를 마크다운 표로 변환합니다.",
        toolId: "table-markdown-converter",
      },
      {
        stepId: 2,
        title: "숫자 서식",
        description: "금액과 수치에 천 단위 콤마와 소수점을 적용합니다.",
        toolId: "number-formatter",
      },
      {
        stepId: 3,
        title: "날짜 통일",
        description: "날짜 표기 형식을 문서 스타일에 맞게 통일합니다.",
        toolId: "date-format-converter",
      },
    ],
  },
  {
    id: "dev-docs-format",
    slug: "dev-docs-format",
    title: "개발 문서 포맷 워크플로",
    description: "기술 문서를 위한 마크다운 정리와 슬러그 생성을 돕습니다.",
    icon: "Code",
    steps: [
      {
        stepId: 1,
        title: "마크다운 정리",
        description: "마크다운 문법의 공백과 들여쓰기를 정리합니다.",
        toolId: "md-format-cleaner",
      },
      {
        stepId: 2,
        title: "슬러그 생성",
        description: "문서 제목을 URL용 슬러그로 변환합니다.",
        toolId: "slug-generator",
      },
      {
        stepId: 3,
        title: "포맷 변환",
        description: "필요에 따라 HTML로 변환하거나 태그를 제거합니다.",
        toolId: "markdown-to-html",
      },
    ],
  },
  {
    id: "email-writing-format",
    slug: "email-writing-format",
    title: "이메일 작성 정리 워크플로",
    description: "비즈니스 이메일의 가독성을 높이고 문단 분량과 서식을 한 번에 다듬습니다.",
    icon: "Mail",
    steps: [
      {
        stepId: 1,
        title: "줄바꿈·여백 정돈",
        description: "복붙 과정에서 깨진 불필요한 줄바꿈과 연속 공백을 정리합니다.",
        toolId: "line-break-cleaner",
      },
      {
        stepId: 2,
        title: "이메일 분량 점검",
        description: "용건이 한눈에 들어오도록 단어 수와 글자수를 확인합니다.",
        toolId: "char-counter",
      },
      {
        stepId: 3,
        title: "영문 직함·대소문자",
        description: "영문 직함, 프로젝트명, 약어의 대소문자를 정돈합니다.",
        toolId: "case-converter",
      },
    ],
  },
  {
    id: "sns-post-format",
    slug: "sns-post-format",
    title: "SNS 피드 작성 워크플로",
    description: "인스타그램, 스레드, X 피드에 최적화된 줄바꿈과 글자수, 기호를 맞춥니다.",
    icon: "Share2",
    steps: [
      {
        stepId: 1,
        title: "피드 줄바꿈 정리",
        description: "모바일에서 읽기 편하도록 문단 사이 줄바꿈 간격을 통일합니다.",
        toolId: "line-break-cleaner",
      },
      {
        stepId: 2,
        title: "플랫폼 글자수 체크",
        description: "캡션 첫 줄 더보기 노출과 플랫폼별 최대 글자수를 확인합니다.",
        toolId: "char-counter",
      },
      {
        stepId: 3,
        title: "특수기호·이모지",
        description: "주목도를 높여줄 글머리 기호와 특수문자를 삽입합니다.",
        toolId: "symbol-picker",
      },
    ],
  },
  {
    id: "academic-paper-format",
    slug: "academic-paper-format",
    title: "논문·학술 문서 정리 워크플로",
    description: "학술 보고서의 공백 제외 글자수와 표, 날짜 표기를 통일합니다.",
    icon: "BookOpen",
    steps: [
      {
        stepId: 1,
        title: "공백 제외 글자수",
        description: "학회나 과제 규정에 맞춰 공백 제외 기준 글자수를 측정합니다.",
        toolId: "char-counter",
      },
      {
        stepId: 2,
        title: "데이터 표 마크다운",
        description: "분석 수치와 통계 데이터를 깔끔한 표 서식으로 변환합니다.",
        toolId: "table-markdown-converter",
      },
      {
        stepId: 3,
        title: "인용·날짜 포맷",
        description: "참고 문헌 및 조사 일자 표기를 표준 형식으로 통일합니다.",
        toolId: "date-format-converter",
      },
    ],
  },
  {
    id: "marketing-copy-format",
    slug: "marketing-copy-format",
    title: "마케팅 카피·SEO 워크플로",
    description: "광고 카피와 상세페이지 제목, 검색 메타 디스크립션을 최적화합니다.",
    icon: "Target",
    steps: [
      {
        stepId: 1,
        title: "제목·카피 길이",
        description: "모바일 및 검색창에서 잘리지 않도록 제목 길이를 점검합니다.",
        toolId: "title-length-checker",
      },
      {
        stepId: 2,
        title: "메타 설명 검증",
        description: "클릭을 유도하는 75~120자 내외의 메타 설명을 다듬습니다.",
        toolId: "meta-description-checker",
      },
      {
        stepId: 3,
        title: "핵심 키워드 빈도",
        description: "주요 키워드가 자연스럽게 반복 배치되었는지 분석합니다.",
        toolId: "word-frequency",
      },
    ],
  },
  {
    id: "translation-cleanup-format",
    slug: "translation-cleanup-format",
    title: "번역문 후처리 워크플로",
    description: "기계 번역 후 깨진 줄바꿈과 불규칙한 공백, 전각 기호를 한 번에 정돈합니다.",
    icon: "Languages",
    steps: [
      {
        stepId: 1,
        title: "줄바꿈 복원",
        description: "문장 도중에 부자연스럽게 잘린 줄바꿈을 문단 단위로 합칩니다.",
        toolId: "line-break-cleaner",
      },
      {
        stepId: 2,
        title: "연속 공백 정리",
        description: "단어 사이에 발생한 2칸 이상의 공백을 1칸으로 정리합니다.",
        toolId: "trim-whitespace",
      },
      {
        stepId: 3,
        title: "전각·반각 통일",
        description: "전각 알파벳·숫자·문장부호를 표준 반각 문자로 변환합니다.",
        toolId: "fullwidth-halfwidth-converter",
      },
    ],
  },
]

export function getWorkflowBySlug(slug: string): WorkflowPreset | undefined {
  return WORKFLOW_PRESETS.find((workflow) => workflow.slug === slug)
}

export function getWorkflowById(id: string): WorkflowPreset | undefined {
  return WORKFLOW_PRESETS.find((workflow) => workflow.id === id)
}
