export type ToolDetail = {
  toolId: string
  useCases: string[]
  tips: string[]
  relatedToolIds: string[]
  relatedWorkflowIds: string[]
  relatedGuideSlugs: string[]
}

export const TOOL_DETAILS: ToolDetail[] = [
  {
    toolId: "line-break-cleaner",
    useCases: [
      "복사하면서 줄바꿈이 이상하게 깨진 텍스트를 정리할 때",
      "PDF나 워드에서 복사한 글에 불필요한 줄바꿈이 너무 많을 때",
      "여러 문서를 합칠 때 줄바꿈 스타일이 뒤죽박죽인 경우",
      "블로그나 이메일 작성 전 텍스트 포맷을 깔끔하게 정리하고 싶을 때",
    ],
    tips: [
      "먼저 '줄바꿈 제거' 옵션으로 정리한 후, 필요한 부분만 수동으로 줄바꿈을 추가하세요",
      "공백 정리와 함께 사용하면 텍스트가 훨씬 깔끔해집니다",
      "변환 후 미리보기에서 결과를 확인한 다음 '입력창에 적용'하여 다음 작업으로 이어가세요",
    ],
    relatedToolIds: ["trim-whitespace", "remove-blank-lines", "char-counter"],
    relatedWorkflowIds: ["blog-post-cleanup"],
    relatedGuideSlugs: ["blog-post-cleanup-guide"],
  },
  {
    toolId: "char-counter",
    useCases: [
      "자기소개서나 에세이의 글자수 제한을 맞춰야 할 때",
      "블로그 글의 분량을 확인하고 목표 분량을 설정할 때",
      "SNS 게시물이나 댓글의 글자수를 체크할 때",
      "번역이나 원고 작업 시 단어 수와 글자 수를 함께 확인할 때",
    ],
    tips: [
      "목표 글자수를 설정하면 현재 진행률을 퍼센트로 볼 수 있습니다",
      "공백 포함/제외 옵션을 전환하여 정확한 분량을 체크하세요",
      "단어 수는 영문 콘텐츠 작성 시 특히 유용합니다",
      "실시간으로 카운트되므로 작성하면서 분량을 조절할 수 있습니다",
    ],
    relatedToolIds: ["sentence-counter", "paragraph-counter", "line-break-cleaner"],
    relatedWorkflowIds: ["blog-post-cleanup", "resume-length-check"],
    relatedGuideSlugs: ["blog-post-cleanup-guide", "resume-length-guide"],
  },
  {
    toolId: "sentence-counter",
    useCases: [
      "긴 문장이 너무 많아 가독성이 떨어지는지 확인할 때",
      "자소서나 에세이에서 문장 호흡을 체크할 때",
      "블로그 글의 평균 문장 길이를 분석하고 싶을 때",
      "번역 작업 시 원문과 번역문의 문장 수를 비교할 때",
    ],
    tips: [
      "평균 문장 길이가 50자 이상이면 짧게 나누는 것을 고려해보세요",
      "마침표, 물음표, 느낌표 기준으로 카운트됩니다",
      "문장별 요약 정보를 보면 어느 문장이 너무 긴지 바로 알 수 있습니다",
    ],
    relatedToolIds: ["paragraph-counter", "char-counter", "line-break-cleaner"],
    relatedWorkflowIds: ["blog-post-cleanup", "resume-length-check"],
    relatedGuideSlugs: ["resume-length-guide"],
  },
  {
    toolId: "title-length-checker",
    useCases: [
      "블로그 포스트 제목이 검색 결과에서 잘릴지 미리 확인할 때",
      "SEO를 고려한 적정 길이의 제목을 작성할 때",
      "여러 제목 후보 중 가장 효과적인 길이를 선택할 때",
      "소셜 미디어 공유 시 제목 표시를 최적화하고 싶을 때",
    ],
    tips: [
      "일반적으로 36~55자 사이가 검색 결과에서 가장 잘 보입니다",
      "핵심 키워드는 제목 앞부분에 배치하세요 (뒷부분은 잘릴 수 있음)",
      "픽셀 추정값은 대략적인 참고용이며, 실제 환경에서 테스트해보는 것이 좋습니다",
    ],
    relatedToolIds: ["meta-description-checker", "slug-generator", "char-counter"],
    relatedWorkflowIds: ["blog-post-cleanup"],
    relatedGuideSlugs: ["blog-post-cleanup-guide"],
  },
  {
    toolId: "case-converter",
    useCases: [
      "영문 제목이나 헤드라인의 대소문자를 일관되게 만들 때",
      "코드나 변수명을 변환할 때",
      "문서의 영문 부분을 표준화할 때",
      "소셜 미디어 게시물의 스타일을 통일할 때",
    ],
    tips: [
      "Title Case는 제목이나 헤드라인에 적합합니다",
      "Sentence case는 일반 문장에 자연스럽습니다",
      "전체 대문자는 강조나 제목에 사용하세요",
      "변환 후 특수한 약어나 고유명사는 수동으로 수정하세요",
    ],
    relatedToolIds: ["slug-generator", "title-length-checker"],
    relatedWorkflowIds: ["blog-post-cleanup"],
    relatedGuideSlugs: ["blog-post-cleanup-guide", "dev-docs-guide"],
  },
  {
    toolId: "symbol-picker",
    useCases: [
      "제목이나 헤드라인에 특수문자를 추가하고 싶을 때",
      "닉네임이나 사용자명에 특수문자를 넣고 싶을 때",
      "문서에 시각적 강조를 추가하고 싶을 때",
      "리스트나 메뉴에 아이콘을 넣고 싶을 때",
    ],
    tips: [
      "카테고리별로 정리되어 있어 원하는 특수문자를 쉽게 찾을 수 있습니다",
      "클릭 한 번으로 복사되므로 빠르게 사용할 수 있습니다",
      "특수문자를 조합하여 더 복잡한 장식을 만들 수 있습니다",
    ],
    relatedToolIds: ["quote-bracket-style-converter"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
  {
    toolId: "trim-whitespace",
    useCases: [
      "코드나 스크립트의 들여쓰기를 정리할 때",
      "리스트나 데이터의 앞뒤 공백을 제거할 때",
      "복사한 텍스트의 불필요한 공백을 정리할 때",
      "CSV나 TSV 데이터를 정리할 때",
    ],
    tips: [
      "각 줄별 정리는 코드나 리스트 정리에 유용합니다",
      "전체 텍스트 정리는 문서 전체의 앞뒤 공백만 제거합니다",
      "들여쓰기를 유지하려면 전체 텍스트 정리 옵션을 사용하세요",
    ],
    relatedToolIds: ["line-break-cleaner", "remove-blank-lines"],
    relatedWorkflowIds: ["blog-post-cleanup"],
    relatedGuideSlugs: ["blog-post-cleanup-guide"],
  },
  {
    toolId: "remove-blank-lines",
    useCases: [
      "문서의 불필요한 빈 줄을 정리할 때",
      "코드에서 빈 줄을 제거할 때",
      "리스트나 데이터를 압축할 때",
      "문단 간격을 일정하게 맞출 때",
    ],
    tips: [
      "연속 빈 줄을 1줄만 남기면 문단 구분은 유지하면서 깔끔하게 정리됩니다",
      "모든 빈 줄 제거는 리스트나 코드 정리에 유용합니다",
      "문단 구분을 유지하려면 연속 빈 줄 옵션을 사용하세요",
    ],
    relatedToolIds: ["line-break-cleaner", "trim-whitespace"],
    relatedWorkflowIds: ["blog-post-cleanup"],
    relatedGuideSlugs: ["blog-post-cleanup-guide"],
  },
  {
    toolId: "dedupe-lines",
    useCases: [
      "리스트에서 중복 항목을 제거할 때",
      "데이터 정리 시 중복 레코드를 제거할 때",
      "로그 파일에서 중복 줄을 제거할 때",
      "검색 결과나 목록을 정리할 때",
    ],
    tips: [
      "정렬 후 중복 제거를 하면 결과가 더 깔끔합니다",
      "중복 제거 전후 줄 수를 확인할 수 있습니다",
      "대소문자가 다른 경우 별도 줄로 처리됩니다",
    ],
    relatedToolIds: ["sort-lines", "line-break-cleaner"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
  {
    toolId: "paragraph-counter",
    useCases: [
      "글의 구조를 파악하고 싶을 때",
      "문단이 너무 길거나 짧은지 확인할 때",
      "가독성을 개선하고 싶을 때",
      "문서의 논리적 구조를 체크할 때",
    ],
    tips: [
      "문단 수를 확인하여 글의 구조를 파악할 수 있습니다",
      "평균 문단 길이로 가독성을 체크하세요",
      "너무 긴 문단은 적절히 나누는 것이 좋습니다",
    ],
    relatedToolIds: ["sentence-counter", "char-counter"],
    relatedWorkflowIds: ["blog-post-cleanup", "resume-length-check"],
    relatedGuideSlugs: ["blog-post-cleanup-guide", "resume-length-guide"],
  },
  {
    toolId: "sort-lines",
    useCases: [
      "리스트를 가나다순이나 ABC순으로 정렬할 때",
      "데이터를 길이 순으로 정렬할 때",
      "검색 결과를 정리할 때",
      "목록을 체계적으로 정리할 때",
    ],
    tips: [
      "가나다/ABC 순으로 정렬하면 리스트를 체계적으로 정리할 수 있습니다",
      "길이 순 정렬은 짧은 항목부터 긴 항목까지 정리할 때 유용합니다",
      "중복 제거 옵션과 함께 사용하면 더 깔끔합니다",
    ],
    relatedToolIds: ["dedupe-lines"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
  {
    toolId: "markdown-to-html",
    useCases: [
      "마크다운을 블로그나 웹 에디터에 붙여넣을 때",
      "기술 문서를 HTML로 변환할 때",
      "마크다운을 웹페이지에 삽입할 때",
      "문서를 HTML 형식으로 변환할 때",
    ],
    tips: [
      "블로그나 웹 에디터에 마크다운을 HTML로 변환하여 사용할 수 있습니다",
      "줄바꿈에 <br> 태그를 추가하면 포맷이 유지됩니다",
      "코드 블록을 <pre><code>로 감싸면 들여쓰기가 보존됩니다",
    ],
    relatedToolIds: ["html-to-text", "md-format-cleaner"],
    relatedWorkflowIds: ["dev-docs-format"],
    relatedGuideSlugs: ["dev-docs-guide"],
  },
  {
    toolId: "html-to-text",
    useCases: [
      "웹페이지 내용을 텍스트로 추출할 때",
      "HTML 문서에서 순수 텍스트만 필요할 때",
      "웹 콘텐츠를 문서로 옮길 때",
      "HTML 태그를 제거하고 내용만 추출할 때",
    ],
    tips: [
      "웹페이지 내용을 텍스트로 추출할 때 유용합니다",
      "줄바꿈 보존 옵션으로 원본 구조를 유지할 수 있습니다",
      "연속 공백을 줄이면 더 깔끔한 텍스트를 얻을 수 있습니다",
    ],
    relatedToolIds: ["markdown-to-html", "md-format-cleaner"],
    relatedWorkflowIds: ["dev-docs-format"],
    relatedGuideSlugs: ["dev-docs-guide"],
  },
  {
    toolId: "slug-generator",
    useCases: [
      "블로그 포스트의 URL 슬러그를 만들 때",
      "파일명을 URL 친화적으로 만들 때",
      "SEO를 위한 슬러그를 생성할 때",
      "제목을 URL 형식으로 변환할 때",
    ],
    tips: [
      "한글 제목을 입력하면 자동으로 영문 URL 친화적인 형태로 변환됩니다",
      "SEO를 위해 핵심 키워드가 포함된 짧고 명확한 슬러그를 사용하세요",
      "블로그 플랫폼마다 슬러그 규칙이 다를 수 있으니 확인 후 사용하세요",
    ],
    relatedToolIds: ["case-converter", "title-length-checker"],
    relatedWorkflowIds: ["blog-post-cleanup", "dev-docs-format"],
    relatedGuideSlugs: ["blog-post-cleanup-guide", "dev-docs-guide"],
  },
  {
    toolId: "md-format-cleaner",
    useCases: [
      "AI가 생성한 마크다운을 정리할 때",
      "여러 소스를 합친 문서의 포맷을 통일할 때",
      "마크다운 문법 오류를 수정할 때",
      "기술 문서의 포맷을 표준화할 때",
    ],
    tips: [
      "AI가 생성한 마크다운을 정리할 때 매우 유용합니다",
      "헤더와 리스트의 띄어쓰기를 자동으로 교정합니다",
      "여러 소스를 합친 문서의 포맷을 통일할 수 있습니다",
    ],
    relatedToolIds: ["markdown-to-html", "slug-generator"],
    relatedWorkflowIds: ["dev-docs-format"],
    relatedGuideSlugs: ["dev-docs-guide"],
  },
  {
    toolId: "email-extractor",
    useCases: [
      "문서에서 이메일 주소만 추출할 때",
      "연락처 목록을 만들 때",
      "이메일 주소를 정리할 때",
      "데이터에서 이메일을 분리할 때",
    ],
    tips: [
      "문서나 텍스트에서 이메일 주소만 빠르게 추출할 수 있습니다",
      "중복 제거 옵션으로 고유한 이메일만 얻을 수 있습니다",
      "도메인별 정렬로 이메일을 체계적으로 관리할 수 있습니다",
    ],
    relatedToolIds: ["url-extractor"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
  {
    toolId: "url-extractor",
    useCases: [
      "문서에서 URL만 추출할 때",
      "링크 목록을 만들 때",
      "URL을 정리하고 정제할 때",
      "웹 크롤링 결과를 정리할 때",
    ],
    tips: [
      "문서에서 모든 URL을 한 번에 추출할 수 있습니다",
      "UTM 파라미터 제거로 깔끔한 URL을 얻을 수 있습니다",
      "중복 제거로 고유한 URL만 추출할 수 있습니다",
    ],
    relatedToolIds: ["email-extractor"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
  {
    toolId: "meta-description-checker",
    useCases: [
      "SEO를 위해 메타 설명 길이를 최적화할 때",
      "검색 결과에 표시될 설명을 작성할 때",
      "블로그 포스트의 메타 설명을 체크할 때",
      "웹페이지의 SEO 요소를 점검할 때",
    ],
    tips: [
      "SEO를 위해 메타 설명 길이를 최적화하세요",
      "한국어는 80~160자, 영어는 120~160자가 권장 범위입니다",
      "핵심 키워드를 앞부분에 배치하세요",
    ],
    relatedToolIds: ["title-length-checker", "char-counter"],
    relatedWorkflowIds: ["blog-post-cleanup"],
    relatedGuideSlugs: ["blog-post-cleanup-guide"],
  },
  {
    toolId: "list-style-converter",
    useCases: [
      "리스트 스타일을 통일할 때",
      "마크다운 리스트를 다른 형식으로 변환할 때",
      "문서의 리스트 포맷을 표준화할 때",
      "다양한 리스트 스타일을 시도해볼 때",
    ],
    tips: [
      "하이픈, 별표, 번호 등 다양한 리스트 스타일을 서로 변환할 수 있습니다",
      "들여쓰기는 그대로 유지됩니다",
      "번호 매기기를 1부터 다시 시작할 수 있습니다",
    ],
    relatedToolIds: ["md-format-cleaner"],
    relatedWorkflowIds: ["dev-docs-format"],
    relatedGuideSlugs: ["dev-docs-guide"],
  },
  {
    toolId: "table-markdown-converter",
    useCases: [
      "엑셀 데이터를 마크다운 표로 변환할 때",
      "보고서에 표를 삽입할 때",
      "깃허브 README에 표를 만들 때",
      "노션이나 블로그에 표를 옮길 때",
    ],
    tips: [
      "엑셀에서 복사한 데이터를 마크다운 표로 변환할 수 있습니다",
      "첫 줄을 헤더로 처리하면 표가 더 깔끔해집니다",
      "마크다운 표를 CSV나 TSV로도 변환할 수 있습니다",
    ],
    relatedToolIds: ["number-formatter", "date-format-converter"],
    relatedWorkflowIds: ["report-data-format"],
    relatedGuideSlugs: ["report-table-guide"],
  },
  {
    toolId: "number-formatter",
    useCases: [
      "금액이나 통계 수치를 보고서 형식에 맞게 정리할 때",
      "숫자에 천 단위 콤마를 추가할 때",
      "소수점 자리수를 통일할 때",
      "재무 보고서나 통계 자료를 정리할 때",
    ],
    tips: [
      "금액이나 통계 수치를 보고서 형식에 맞게 정리할 수 있습니다",
      "천 단위 콤마로 가독성을 높일 수 있습니다",
      "소수점 자리수를 통일하여 일관된 포맷을 만들 수 있습니다",
    ],
    relatedToolIds: ["date-format-converter", "table-markdown-converter"],
    relatedWorkflowIds: ["report-data-format"],
    relatedGuideSlugs: ["report-table-guide"],
  },
  {
    toolId: "date-format-converter",
    useCases: [
      "여러 날짜 형식을 하나로 통일할 때",
      "보고서의 날짜 표기를 일관되게 만들 때",
      "데이터의 날짜 포맷을 변환할 때",
      "문서의 날짜 형식을 표준화할 때",
    ],
    tips: [
      "여러 날짜 형식을 하나로 통일할 수 있습니다",
      "YYYY-MM-DD, YYYY.MM.DD, YYYY/MM/DD, YYYY년 M월 D일 형식을 지원합니다",
      "보고서나 문서의 날짜 표기를 일관되게 만들 수 있습니다",
    ],
    relatedToolIds: ["number-formatter", "table-markdown-converter"],
    relatedWorkflowIds: ["report-data-format"],
    relatedGuideSlugs: ["report-table-guide"],
  },
  {
    toolId: "fullwidth-halfwidth-converter",
    useCases: [
      "일본어 문서의 문자 폭을 변환할 때",
      "특정 서식 요구사항에 맞출 때",
      "전각과 반각 문자를 통일할 때",
      "문서의 문자 폭을 표준화할 때",
    ],
    tips: [
      "일본어 문서나 특정 서식 요구사항에 맞출 때 사용합니다",
      "전각과 반각을 서로 변환할 수 있습니다",
      "일반적으로는 반각을 사용합니다",
    ],
    relatedToolIds: ["quote-bracket-style-converter"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
  {
    toolId: "quote-bracket-style-converter",
    useCases: [
      "따옴표와 괄호 스타일을 통일할 때",
      "문서의 문장부호를 표준화할 때",
      "인용부호 스타일을 변환할 때",
      "문서의 일관성을 높일 때",
    ],
    tips: [
      "따옴표와 괄호 스타일을 통일하여 문서의 일관성을 높일 수 있습니다",
      "직선 따옴표, 둥근 따옴표, 다양한 괄호 스타일을 지원합니다",
      "따옴표와 괄호를 각각 독립적으로 변환할 수 있습니다",
    ],
    relatedToolIds: ["symbol-picker", "fullwidth-halfwidth-converter"],
    relatedWorkflowIds: [],
    relatedGuideSlugs: [],
  },
]

export function getToolDetailById(toolId: string): ToolDetail | undefined {
  return TOOL_DETAILS.find((detail) => detail.toolId === toolId)
}
