export type ToolFAQItem = {
  question: string
  answer: string
}

export type ToolFAQ = {
  toolId: string
  items: ToolFAQItem[]
}

export const TOOL_FAQS: ToolFAQ[] = [
  {
    toolId: "line-break-cleaner",
    items: [
      {
        question: "이 도구는 어디에 저장되나요?",
        answer:
          "입력한 텍스트는 서버에 전송되지 않고, 브라우저 안에서만 처리됩니다. 모든 작업이 로컬에서 이루어져 안전합니다.",
      },
      {
        question: "PDF에서 복사해 온 텍스트도 정리할 수 있나요?",
        answer:
          "가능합니다. PDF, 워드, 웹페이지 등 어디서 복사하든 줄바꿈과 공백 규칙을 선택해 한 번에 정리할 수 있습니다.",
      },
      {
        question: "최대 몇 글자까지 처리할 수 있나요?",
        answer:
          "현재는 약 20,000자까지 안정적으로 처리하도록 권장하고 있습니다. 그 이상의 긴 텍스트는 여러 번 나눠서 작업하시는 것을 추천합니다.",
      },
    ],
  },
  {
    toolId: "char-counter",
    items: [
      {
        question: "공백 포함과 제외의 차이는 무엇인가요?",
        answer:
          "공백 포함은 띄어쓰기와 줄바꿈을 모두 포함한 글자수이고, 공백 제외는 실제 글자와 숫자, 특수문자만 센 값입니다. 대부분의 플랫폼은 공백 포함 기준을 사용합니다.",
      },
      {
        question: "목표 글자수를 설정하면 어떻게 되나요?",
        answer:
          "목표를 설정하면 현재 작성한 분량이 목표 대비 몇 퍼센트인지 실시간으로 보여줍니다. 자소서나 보고서 작성 시 분량을 맞추는 데 유용합니다.",
      },
      {
        question: "복사한 텍스트의 글자수도 정확히 셀 수 있나요?",
        answer:
          "네, 복사해서 붙여넣은 텍스트도 정확하게 카운트됩니다. 다만 숨겨진 서식이나 특수문자가 포함되어 있으면 '줄바꿈 정리' 도구로 먼저 정리하는 것을 추천합니다.",
      },
    ],
  },
  {
    toolId: "sentence-counter",
    items: [
      {
        question: "문장은 어떤 기준으로 구분하나요?",
        answer:
          "마침표(.), 느낌표(!), 물음표(?)를 기준으로 문장을 구분합니다. 줄임표(...)나 특수한 경우는 하나의 문장으로 처리됩니다.",
      },
      {
        question: "평균 문장 길이가 얼마나 되어야 좋나요?",
        answer:
          "일반적으로 30~50자 사이가 읽기 편한 길이입니다. 50자가 넘는 문장이 많다면 짧게 나누는 것을 고려해보세요.",
      },
      {
        question: "문장별 상세 정보는 어떻게 보나요?",
        answer:
          "결과 영역에서 각 문장의 글자 수와 단어 수를 표 형태로 확인할 수 있습니다. 특히 긴 문장을 찾아서 수정할 때 유용합니다.",
      },
    ],
  },
  {
    toolId: "title-length-checker",
    items: [
      {
        question: "검색 결과에 표시되는 제목 길이는 어떻게 결정되나요?",
        answer:
          "구글은 대략 600픽셀, 네이버는 약 30~35자 내외로 제목을 표시합니다. 한글 기준으로 36~55자 사이가 대부분의 검색엔진에서 잘 보입니다.",
      },
      {
        question: "제목이 너무 길면 어떻게 되나요?",
        answer:
          "검색 결과에서 뒷부분이 '...'으로 잘립니다. 핵심 키워드와 중요한 내용은 제목 앞부분에 배치하는 것이 좋습니다.",
      },
      {
        question: "픽셀 길이 추정은 정확한가요?",
        answer:
          "한글, 영문, 숫자 등의 평균 너비를 기반으로 추정한 값입니다. 실제 환경에서는 폰트와 디바이스에 따라 다를 수 있으니 참고용으로 활용하세요.",
      },
    ],
  },
]

export function getToolFAQById(toolId: string): ToolFAQ | undefined {
  return TOOL_FAQS.find((faq) => faq.toolId === toolId)
}
