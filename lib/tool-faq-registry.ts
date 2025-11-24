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
  {
    toolId: "case-converter",
    items: [
      {
        question: "Title Case와 Sentence case의 차이는 무엇인가요?",
        answer:
          "Title Case는 모든 단어의 첫 글자를 대문자로 만듭니다 (예: 'Hello World'). Sentence case는 문장의 첫 글자만 대문자로 만듭니다 (예: 'Hello world').",
      },
      {
        question: "한글 텍스트에도 적용되나요?",
        answer:
          "한글은 대소문자 구분이 없으므로 영문 텍스트에만 적용됩니다. 한글과 영문이 섞인 경우 영문 부분만 변환됩니다.",
      },
      {
        question: "약어나 고유명사는 어떻게 처리되나요?",
        answer:
          "현재는 기본적인 변환 규칙을 따릅니다. 특수한 약어나 고유명사는 변환 후 수동으로 수정하는 것을 권장합니다.",
      },
    ],
  },
  {
    toolId: "symbol-picker",
    items: [
      {
        question: "특수문자는 어떻게 복사하나요?",
        answer:
          "원하는 특수문자를 클릭하면 자동으로 클립보드에 복사됩니다. 입력창에 직접 붙여넣거나 다른 곳에 사용할 수 있습니다.",
      },
      {
        question: "모바일에서도 사용할 수 있나요?",
        answer:
          "네, 모바일 브라우저에서도 동일하게 작동합니다. 특수문자를 클릭하면 자동으로 복사됩니다.",
      },
      {
        question: "특수문자를 찾을 수 없어요",
        answer:
          "카테고리 탭(제목 장식, 괄호/박스, 화살표, 구분선, 수학/기호)을 전환하여 원하는 특수문자를 찾아보세요.",
      },
    ],
  },
  {
    toolId: "trim-whitespace",
    items: [
      {
        question: "전체 텍스트와 각 줄별 정리의 차이는?",
        answer:
          "전체 텍스트 정리는 텍스트의 맨 앞과 맨 뒤 공백만 제거합니다. 각 줄별 정리는 모든 줄의 앞뒤 공백을 제거합니다.",
      },
      {
        question: "들여쓰기가 사라지나요?",
        answer:
          "각 줄별 정리 옵션을 사용하면 들여쓰기 공백도 제거됩니다. 들여쓰기를 유지하려면 전체 텍스트 정리 옵션을 사용하세요.",
      },
    ],
  },
  {
    toolId: "remove-blank-lines",
    items: [
      {
        question: "연속 빈 줄과 모든 빈 줄의 차이는?",
        answer:
          "연속 빈 줄은 여러 개의 빈 줄을 하나로 줄입니다. 모든 빈 줄은 빈 줄을 완전히 제거합니다.",
      },
      {
        question: "문단 구분은 어떻게 유지하나요?",
        answer:
          "연속 빈 줄을 1줄만 남기기 옵션을 사용하면 문단 구분은 유지하면서 불필요한 빈 줄만 정리할 수 있습니다.",
      },
    ],
  },
  {
    toolId: "dedupe-lines",
    items: [
      {
        question: "중복 제거 전 정렬이 필요한가요?",
        answer:
          "필수는 아니지만, 정렬 후 중복 제거를 하면 결과가 더 깔끔하게 정리됩니다.",
      },
      {
        question: "대소문자 구분이 되나요?",
        answer:
          "네, 완전히 동일한 줄만 중복으로 인식합니다. 대소문자가 다른 경우 별도 줄로 처리됩니다.",
      },
    ],
  },
  {
    toolId: "paragraph-counter",
    items: [
      {
        question: "문단은 어떻게 구분하나요?",
        answer:
          "빈 줄(엔터 두 번) 기준으로 문단을 구분합니다. 또는 줄바꿈 기준으로 모든 줄을 문단으로 인식할 수도 있습니다.",
      },
      {
        question: "평균 문단 길이는 어떻게 계산되나요?",
        answer:
          "전체 문단의 글자수를 문단 수로 나눈 값입니다. 이 값을 통해 문단이 너무 길거나 짧은지 확인할 수 있습니다.",
      },
    ],
  },
  {
    toolId: "sort-lines",
    items: [
      {
        question: "정렬 기준은 무엇인가요?",
        answer:
          "가나다/ABC 순(오름차순, 내림차순)과 길이 순(짧은 순, 긴 순)을 선택할 수 있습니다.",
      },
      {
        question: "숫자도 정렬되나요?",
        answer:
          "문자열 기준으로 정렬되므로 숫자는 사전순으로 정렬됩니다. 숫자 크기 순으로 정렬하려면 숫자만 있는 줄에서만 작동합니다.",
      },
    ],
  },
  {
    toolId: "markdown-to-html",
    items: [
      {
        question: "어떤 마크다운 문법을 지원하나요?",
        answer:
          "기본적인 문법(헤더, 볼드, 이탤릭, 링크)을 지원합니다. 복잡한 표나 코드 블록은 추가 옵션을 통해 처리할 수 있습니다.",
      },
      {
        question: "블로그에 바로 붙여넣을 수 있나요?",
        answer:
          "네, 변환된 HTML을 복사해서 블로그 에디터의 HTML 모드에 붙여넣으면 됩니다.",
      },
    ],
  },
  {
    toolId: "html-to-text",
    items: [
      {
        question: "모든 HTML 태그가 제거되나요?",
        answer:
          "네, 모든 HTML 태그를 제거하고 순수 텍스트만 추출합니다. 줄바꿈 보존 옵션으로 원본 구조를 유지할 수 있습니다.",
      },
      {
        question: "이미지나 링크 정보는 어떻게 되나요?",
        answer:
          "이미지 alt 텍스트나 링크 텍스트는 유지되지만, URL이나 이미지 경로는 제거됩니다.",
      },
    ],
  },
  {
    toolId: "slug-generator",
    items: [
      {
        question: "한글 제목은 어떻게 변환되나요?",
        answer:
          "한글은 영문 소문자로 변환되거나 제거됩니다. URL 친화적인 형태로 자동 변환됩니다.",
      },
      {
        question: "불용어 제거 옵션이란?",
        answer:
          "영문 제목에서 'a', 'the', 'of' 같은 짧은 불용어를 제거하여 더 간결한 슬러그를 만듭니다.",
      },
    ],
  },
  {
    toolId: "md-format-cleaner",
    items: [
      {
        question: "어떤 마크다운 문제를 해결하나요?",
        answer:
          "헤더와 리스트의 띄어쓰기 누락, 연속 빈 줄, 탭 문자 등을 자동으로 정리합니다.",
      },
      {
        question: "기존 마크다운 구조는 유지되나요?",
        answer:
          "네, 내용은 그대로 유지하면서 포맷만 정리합니다. 구조나 의미는 변경되지 않습니다.",
      },
    ],
  },
  {
    toolId: "email-extractor",
    items: [
      {
        question: "어떤 형식의 이메일을 찾나요?",
        answer:
          "일반적인 이메일 형식 (예: user@example.com)을 자동으로 찾아 추출합니다.",
      },
      {
        question: "중복 이메일은 어떻게 처리하나요?",
        answer:
          "중복 제거 옵션을 선택하면 동일한 이메일 주소는 한 번만 표시됩니다.",
      },
    ],
  },
  {
    toolId: "url-extractor",
    items: [
      {
        question: "어떤 URL 형식을 지원하나요?",
        answer:
          "http://, https://로 시작하는 모든 URL을 추출합니다. UTM 파라미터 제거 옵션도 제공됩니다.",
      },
      {
        question: "UTM 파라미터를 제거하면 어떻게 되나요?",
        answer:
          "URL에서 ?utm_source, ?utm_medium 같은 UTM 파라미터를 제거하여 깔끔한 URL을 만듭니다.",
      },
    ],
  },
  {
    toolId: "meta-description-checker",
    items: [
      {
        question: "권장 길이는 얼마인가요?",
        answer:
          "한국어 기준 80~160자, 영어 기준 120~160자가 검색 결과에서 잘 표시되는 범위입니다.",
      },
      {
        question: "너무 길거나 짧으면 어떻게 되나요?",
        answer:
          "너무 짧으면 검색 결과에서 정보가 부족해 보이고, 너무 길면 뒷부분이 잘립니다. 권장 범위 내에서 작성하는 것이 좋습니다.",
      },
    ],
  },
  {
    toolId: "list-style-converter",
    items: [
      {
        question: "어떤 리스트 스타일을 지원하나요?",
        answer:
          "하이픈(-), 별표(*), 번호(1.), 괄호 번호((1)) 스타일을 서로 변환할 수 있습니다.",
      },
      {
        question: "들여쓰기는 유지되나요?",
        answer:
          "네, 원본의 들여쓰기는 그대로 유지하면서 리스트 마커만 변경합니다.",
      },
    ],
  },
  {
    toolId: "table-markdown-converter",
    items: [
      {
        question: "엑셀 데이터를 어떻게 변환하나요?",
        answer:
          "엑셀에서 복사한 데이터를 붙여넣으면 자동으로 TSV 형식으로 인식되어 마크다운 표로 변환됩니다.",
      },
      {
        question: "첫 줄을 헤더로 처리하는 옵션이란?",
        answer:
          "첫 줄을 표의 헤더 행으로 처리하여 마크다운 표에서 구분선이 자동으로 추가됩니다.",
      },
    ],
  },
  {
    toolId: "number-formatter",
    items: [
      {
        question: "천 단위 콤마는 어떻게 추가하나요?",
        answer:
          "천 단위 콤마 사용 옵션을 선택하면 숫자에 자동으로 콤마가 추가됩니다 (예: 1000 → 1,000).",
      },
      {
        question: "소수점 자리수는 어떻게 설정하나요?",
        answer:
          "소수점 자리수 옵션에서 0~10 사이의 값을 설정할 수 있습니다. 설정한 자리수로 반올림됩니다.",
      },
    ],
  },
  {
    toolId: "date-format-converter",
    items: [
      {
        question: "어떤 날짜 형식을 지원하나요?",
        answer:
          "YYYY-MM-DD, YYYY.MM.DD, YYYY/MM/DD, YYYY년 M월 D일 형식을 서로 변환할 수 있습니다.",
      },
      {
        question: "날짜 형식이 섞여 있어도 되나요?",
        answer:
          "네, 여러 형식이 섞여 있어도 각각 인식하여 선택한 출력 형식으로 통일합니다.",
      },
    ],
  },
  {
    toolId: "fullwidth-halfwidth-converter",
    items: [
      {
        question: "전각과 반각의 차이는?",
        answer:
          "전각은 한 글자가 두 칸을 차지하는 문자(예: Ｆｕｌｌ)이고, 반각은 한 칸을 차지하는 문자(예: Full)입니다.",
      },
      {
        question: "언제 사용하나요?",
        answer:
          "일본어 문서나 특정 서식 요구사항에 맞추기 위해 사용합니다. 일반적으로는 반각을 사용합니다.",
      },
    ],
  },
  {
    toolId: "quote-bracket-style-converter",
    items: [
      {
        question: "어떤 따옴표 스타일을 지원하나요?",
        answer:
          "직선 따옴표(\"), 둥근 큰따옴표(\"\"), 둥근 작은따옴표('')를 지원합니다.",
      },
      {
        question: "괄호 스타일은?",
        answer:
          "소괄호(()), 대괄호([]), 렌즈형 괄호(【】)를 서로 변환할 수 있습니다.",
      },
    ],
  },
]

export function getToolFAQById(toolId: string): ToolFAQ | undefined {
  return TOOL_FAQS.find((faq) => faq.toolId === toolId)
}
