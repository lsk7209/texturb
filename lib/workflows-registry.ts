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
    slug: "blog-post-cleanup", // Added slug matching id
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
    slug: "resume-length-check", // Added slug matching id
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
    slug: "report-data-format", // Added slug matching id
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
    slug: "dev-docs-format", // Added slug matching id
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
]

export function getWorkflowBySlug(slug: string): WorkflowPreset | undefined {
  return WORKFLOW_PRESETS.find((workflow) => workflow.slug === slug)
}

export function getWorkflowById(id: string): WorkflowPreset | undefined {
  return WORKFLOW_PRESETS.find((workflow) => workflow.id === id)
}

export const WORKFLOWS = WORKFLOW_PRESETS
