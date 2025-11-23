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
    relatedGuideSlugs: ["blog-post-cleanup"],
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
    relatedGuideSlugs: ["blog-post-cleanup", "resume-cover-letter-length"],
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
    relatedGuideSlugs: ["resume-cover-letter-length"],
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
    relatedGuideSlugs: ["blog-post-cleanup"],
  },
]

export function getToolDetailById(toolId: string): ToolDetail | undefined {
  return TOOL_DETAILS.find((detail) => detail.toolId === toolId)
}
