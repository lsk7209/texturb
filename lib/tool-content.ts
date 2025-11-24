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
    relatedTools: ["sentence-counter", "paragraph-counter", "title-length-checker"],
    relatedGuides: ["resume-length-guide", "blog-post-cleanup-guide"],
  },
  "line-break-cleaner": {
    usageTips: [
      "PDF에서 복사한 텍스트는 줄바꿈이 깨지는 경우가 많으니 먼저 이 도구로 정리하세요.",
      "줄 간격 옵션을 조정해 문단 구분을 명확하게 만들 수 있습니다.",
      "연속된 공백이 많은 텍스트는 공백 정리 옵션을 함께 사용하면 효과적입니다.",
    ],
    faq: [
      {
        question: "이 도구는 어디에 저장되나요?",
        answer:
          "입력한 텍스트는 서버에 전송되지 않고, 브라우저 안에서만 처리됩니다. 모든 작업이 로컬에서 이루어져 안전합니다.",
      },
      {
        question: "PDF에서 복사한 텍스트가 이상해요",
        answer:
          'PDF는 줄바꿈이 자동으로 삽입되는 경우가 많습니다. "줄바꿈 제거" 옵션을 선택하면 불필요한 줄바꿈을 정리할 수 있습니다.',
      },
      {
        question: "문단 구분은 어떻게 유지하나요?",
        answer: "빈 줄(연속된 줄바꿈)은 문단 구분으로 인식하여 유지됩니다. 줄바꿈 제거 시에도 빈 줄은 보존됩니다.",
      },
      {
        question: "최대 몇 글자까지 처리할 수 있나요?",
        answer:
          "현재는 약 20,000자까지 안정적으로 처리하도록 권장하고 있습니다. 그 이상의 긴 텍스트는 여러 번 나눠서 작업하시는 것을 추천합니다.",
      },
    ],
    relatedTools: ["trim-whitespace", "remove-blank-lines"],
    relatedGuides: ["blog-post-cleanup-guide"],
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
        question: "한글 제목은 어떻게 변환되나요?",
        answer:
          "한글은 영문 소문자로 변환되거나 제거됩니다. URL 친화적인 형태로 자동 변환됩니다.",
      },
      {
        question: "불용어 제거 옵션이란?",
        answer:
          "영문 제목에서 'a', 'the', 'of' 같은 짧은 불용어를 제거하여 더 간결한 슬러그를 만듭니다.",
      },
      {
        question: "한글이 왜 영어로 바뀌나요?",
        answer:
          '한글을 로마자로 음역(transliterate)하여 URL 친화적인 형태로 변환합니다. 예: "텍스트 도구" → "text-tool"',
      },
    ],
    relatedTools: ["case-converter", "title-length-checker"],
    relatedGuides: ["blog-post-cleanup-guide", "dev-docs-guide"],
  },
  "title-length-checker": {
    usageTips: [
      "검색 결과에서 제목이 잘리지 않으려면 36~55자 범위로 작성하세요.",
      "핵심 키워드는 제목 앞부분에 배치하는 것이 좋습니다.",
      "모바일과 데스크톱에서 보이는 길이가 다를 수 있으니 참고하세요.",
    ],
    faq: [
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
    relatedGuides: ["blog-post-cleanup-guide"],
  },
  "case-converter": {
    usageTips: [
      "영문 제목이나 헤드라인에는 Title Case를 사용하면 전문적으로 보입니다.",
      "일반 문장에는 Sentence case가 자연스럽습니다.",
      "전체 대문자나 소문자로 변환하면 강조 효과를 낼 수 있습니다.",
    ],
    faq: [
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
      {
        question: "약어는 어떻게 처리되나요?",
        answer:
          "현재는 기본 변환 규칙을 따릅니다. 특수한 약어나 고유명사는 변환 후 수동으로 수정하는 것을 권장합니다.",
      },
    ],
    relatedTools: ["slug-generator", "title-length-checker"],
    relatedGuides: ["blog-post-cleanup-guide", "dev-docs-guide"],
  },
  "symbol-picker": {
    usageTips: [
      "제목에 특수문자를 추가하면 시각적으로 강조됩니다.",
      "카테고리별로 정리되어 있어 원하는 특수문자를 쉽게 찾을 수 있습니다.",
      "클릭 한 번으로 복사되므로 빠르게 사용할 수 있습니다.",
    ],
    faq: [
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
    relatedTools: ["quote-bracket-style-converter"],
    relatedGuides: [],
  },
  "trim-whitespace": {
    usageTips: [
      "각 줄별 정리는 코드나 리스트 정리에 유용합니다.",
      "전체 텍스트 정리는 문서 전체의 앞뒤 공백만 제거합니다.",
      "들여쓰기를 유지하려면 전체 텍스트 정리 옵션을 사용하세요.",
    ],
    faq: [
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
      {
        question: "코드 정리에 사용할 수 있나요?",
        answer:
          "네, 각 줄별 정리 옵션을 사용하면 코드의 들여쓰기를 정리할 수 있습니다. 다만 들여쓰기가 중요한 경우 주의해서 사용하세요.",
      },
    ],
    relatedTools: ["line-break-cleaner", "remove-blank-lines"],
    relatedGuides: ["blog-post-cleanup-guide"],
  },
  "remove-blank-lines": {
    usageTips: [
      "연속 빈 줄을 1줄만 남기면 문단 구분은 유지하면서 깔끔하게 정리됩니다.",
      "모든 빈 줄 제거는 리스트나 코드 정리에 유용합니다.",
      "문단 구분을 유지하려면 연속 빈 줄 옵션을 사용하세요.",
    ],
    faq: [
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
      {
        question: "코드에서 빈 줄을 제거해도 되나요?",
        answer:
          "네, 모든 빈 줄 제거 옵션을 사용하면 코드의 빈 줄을 완전히 제거할 수 있습니다. 다만 가독성을 위해 필요한 빈 줄은 유지하는 것이 좋습니다.",
      },
    ],
    relatedTools: ["line-break-cleaner", "trim-whitespace"],
    relatedGuides: ["blog-post-cleanup-guide"],
  },
  "sentence-counter": {
    usageTips: [
      "평균 문장 길이를 확인하여 가독성을 체크하세요.",
      "50자 이상의 긴 문장이 많으면 짧게 나누는 것을 고려해보세요.",
      "자소서나 에세이 작성 시 문장 호흡을 조절하는 데 유용합니다.",
    ],
    faq: [
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
    relatedTools: ["paragraph-counter", "char-counter", "line-break-cleaner"],
    relatedGuides: ["resume-length-guide", "blog-post-cleanup-guide"],
  },
  "dedupe-lines": {
    usageTips: [
      "정렬 후 중복 제거를 하면 결과가 더 깔끔합니다.",
      "리스트나 데이터 정리에 매우 유용합니다.",
      "중복 제거 전후 줄 수를 확인할 수 있습니다.",
    ],
    faq: [
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
      {
        question: "중복 제거 후 몇 개가 남나요?",
        answer:
          "중복 제거 전후 줄 수를 확인할 수 있습니다. 완전히 동일한 줄은 하나만 남고 나머지는 제거됩니다.",
      },
    ],
    relatedTools: ["sort-lines", "line-break-cleaner"],
    relatedGuides: [],
  },
  "paragraph-counter": {
    usageTips: [
      "문단 수를 확인하여 글의 구조를 파악할 수 있습니다.",
      "평균 문단 길이로 가독성을 체크하세요.",
      "너무 긴 문단은 적절히 나누는 것이 좋습니다.",
    ],
    faq: [
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
      {
        question: "문단이 너무 길면 어떻게 하나요?",
        answer:
          "평균 문단 길이가 300자 이상이면 문단이 너무 긴 것입니다. 논리적인 단위로 문단을 나누는 것이 좋습니다.",
      },
    ],
    relatedTools: ["sentence-counter", "char-counter"],
    relatedGuides: ["blog-post-cleanup-guide", "resume-length-guide"],
  },
  "sort-lines": {
    usageTips: [
      "가나다/ABC 순으로 정렬하면 리스트를 체계적으로 정리할 수 있습니다.",
      "길이 순 정렬은 짧은 항목부터 긴 항목까지 정리할 때 유용합니다.",
      "중복 제거 옵션과 함께 사용하면 더 깔끔합니다.",
    ],
    faq: [
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
      {
        question: "정렬 후 원래 순서로 돌아갈 수 있나요?",
        answer:
          "정렬은 원본을 변경하므로, 원래 순서가 필요하면 정렬 전에 복사본을 만들어 두는 것이 좋습니다.",
      },
    ],
    relatedTools: ["dedupe-lines"],
    relatedGuides: [],
  },
  "markdown-to-html": {
    usageTips: [
      "블로그나 웹 에디터에 마크다운을 HTML로 변환하여 사용할 수 있습니다.",
      "줄바꿈에 <br> 태그를 추가하면 포맷이 유지됩니다.",
      "코드 블록을 <pre><code>로 감싸면 들여쓰기가 보존됩니다.",
    ],
    faq: [
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
      {
        question: "코드 블록은 어떻게 변환되나요?",
        answer:
          "코드 블록을 <pre><code>로 감싸면 들여쓰기가 보존됩니다. 언어별 하이라이팅은 지원하지 않습니다.",
      },
    ],
    relatedTools: ["html-to-text", "md-format-cleaner"],
    relatedGuides: ["dev-docs-guide"],
  },
  "html-to-text": {
    usageTips: [
      "웹페이지 내용을 텍스트로 추출할 때 유용합니다.",
      "줄바꿈 보존 옵션으로 원본 구조를 유지할 수 있습니다.",
      "연속 공백을 줄이면 더 깔끔한 텍스트를 얻을 수 있습니다.",
    ],
    faq: [
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
      {
        question: "줄바꿈 보존 옵션은 무엇인가요?",
        answer:
          "원본 HTML의 줄바꿈 구조를 유지하여 텍스트로 변환합니다. 이 옵션을 사용하면 원본의 구조가 더 잘 보존됩니다.",
      },
    ],
    relatedTools: ["markdown-to-html", "md-format-cleaner"],
    relatedGuides: ["dev-docs-guide"],
  },
  "md-format-cleaner": {
    usageTips: [
      "AI가 생성한 마크다운을 정리할 때 매우 유용합니다.",
      "여러 소스를 합친 문서의 포맷을 통일할 수 있습니다.",
      "헤더와 리스트의 띄어쓰기를 자동으로 교정합니다.",
    ],
    faq: [
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
      {
        question: "AI가 생성한 마크다운도 정리할 수 있나요?",
        answer:
          "네, AI가 생성한 마크다운이나 여러 소스를 합친 문서를 정리할 때 특히 유용합니다.",
      },
    ],
    relatedTools: ["markdown-to-html", "slug-generator"],
    relatedGuides: ["dev-docs-guide"],
  },
  "email-extractor": {
    usageTips: [
      "문서나 텍스트에서 이메일 주소만 빠르게 추출할 수 있습니다.",
      "중복 제거 옵션으로 고유한 이메일만 얻을 수 있습니다.",
      "도메인별 정렬로 이메일을 체계적으로 관리할 수 있습니다.",
    ],
    faq: [
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
      {
        question: "도메인별로 정렬할 수 있나요?",
        answer:
          "네, 도메인별 정렬 옵션을 사용하면 이메일을 도메인별로 그룹화하여 체계적으로 관리할 수 있습니다.",
      },
    ],
    relatedTools: ["url-extractor"],
    relatedGuides: [],
  },
  "url-extractor": {
    usageTips: [
      "문서에서 모든 URL을 한 번에 추출할 수 있습니다.",
      "UTM 파라미터 제거로 깔끔한 URL을 얻을 수 있습니다.",
      "중복 제거로 고유한 URL만 추출할 수 있습니다.",
    ],
    faq: [
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
      {
        question: "중복 URL은 어떻게 처리하나요?",
        answer:
          "중복 제거 옵션을 선택하면 동일한 URL은 한 번만 표시됩니다.",
      },
    ],
    relatedTools: ["email-extractor"],
    relatedGuides: [],
  },
  "meta-description-checker": {
    usageTips: [
      "SEO를 위해 메타 설명 길이를 최적화하세요.",
      "한국어는 80~160자, 영어는 120~160자가 권장 범위입니다.",
      "핵심 키워드를 앞부분에 배치하세요.",
    ],
    faq: [
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
      {
        question: "SEO에 어떤 영향을 미치나요?",
        answer:
          "적절한 길이의 메타 설명은 검색 결과에서 클릭률을 높이고, 핵심 키워드를 포함하면 SEO에 도움이 됩니다.",
      },
    ],
    relatedTools: ["title-length-checker", "char-counter"],
    relatedGuides: ["blog-post-cleanup-guide"],
  },
  "list-style-converter": {
    usageTips: [
      "하이픈, 별표, 번호 등 다양한 리스트 스타일을 서로 변환할 수 있습니다.",
      "들여쓰기는 그대로 유지됩니다.",
      "번호 매기기를 1부터 다시 시작할 수 있습니다.",
    ],
    faq: [
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
      {
        question: "번호 매기기를 다시 시작할 수 있나요?",
        answer:
          "네, 번호 매기기 스타일로 변환할 때 1부터 다시 시작할 수 있습니다.",
      },
    ],
    relatedTools: ["md-format-cleaner"],
    relatedGuides: ["dev-docs-guide"],
  },
  "table-markdown-converter": {
    usageTips: [
      "엑셀에서 복사한 데이터를 마크다운 표로 변환할 수 있습니다.",
      "첫 줄을 헤더로 처리하면 표가 더 깔끔해집니다.",
      "마크다운 표를 CSV나 TSV로도 변환할 수 있습니다.",
    ],
    faq: [
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
      {
        question: "마크다운 표를 CSV로 변환할 수 있나요?",
        answer:
          "네, 마크다운 표를 CSV나 TSV 형식으로도 변환할 수 있습니다.",
      },
    ],
    relatedTools: ["number-formatter", "date-format-converter"],
    relatedGuides: ["report-table-guide"],
  },
  "number-formatter": {
    usageTips: [
      "금액이나 통계 수치를 보고서 형식에 맞게 정리할 수 있습니다.",
      "천 단위 콤마로 가독성을 높일 수 있습니다.",
      "소수점 자리수를 통일하여 일관된 포맷을 만들 수 있습니다.",
    ],
    faq: [
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
      {
        question: "콤마가 들어간 숫자는 계산이 안 되지 않나요?",
        answer:
          "네, 콤마가 들어가면 텍스트로 취급됩니다. 엑셀에서 계산할 때는 콤마 없는 원본을 사용하고, 보고서나 문서용으로만 콤마 포맷을 적용하세요.",
      },
    ],
    relatedTools: ["date-format-converter", "table-markdown-converter"],
    relatedGuides: ["report-table-guide"],
  },
  "date-format-converter": {
    usageTips: [
      "여러 날짜 형식을 하나로 통일할 수 있습니다.",
      "YYYY-MM-DD, YYYY.MM.DD, YYYY/MM/DD, YYYY년 M월 D일 형식을 지원합니다.",
      "보고서나 문서의 날짜 표기를 일관되게 만들 수 있습니다.",
    ],
    faq: [
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
      {
        question: "잘못된 날짜 형식은 어떻게 되나요?",
        answer:
          "잘못된 날짜 형식(예: 13월, 32일)은 변환되지 않을 수 있습니다. 올바른 날짜 형식만 변환됩니다.",
      },
    ],
    relatedTools: ["number-formatter", "table-markdown-converter"],
    relatedGuides: ["report-table-guide"],
  },
  "fullwidth-halfwidth-converter": {
    usageTips: [
      "일본어 문서나 특정 서식 요구사항에 맞출 때 사용합니다.",
      "전각과 반각을 서로 변환할 수 있습니다.",
      "일반적으로는 반각을 사용합니다.",
    ],
    faq: [
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
      {
        question: "한글에도 적용되나요?",
        answer:
          "네, 한글, 영문, 숫자 등 모든 문자에 적용됩니다. 전각과 반각을 서로 변환할 수 있습니다.",
      },
    ],
    relatedTools: ["quote-bracket-style-converter"],
    relatedGuides: [],
  },
  "quote-bracket-style-converter": {
    usageTips: [
      "따옴표와 괄호 스타일을 통일하여 문서의 일관성을 높일 수 있습니다.",
      "직선 따옴표, 둥근 따옴표, 다양한 괄호 스타일을 지원합니다.",
      "따옴표와 괄호를 각각 독립적으로 변환할 수 있습니다.",
    ],
    faq: [
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
      {
        question: "따옴표와 괄호를 따로 변환할 수 있나요?",
        answer:
          "네, 따옴표와 괄호를 각각 독립적으로 변환할 수 있습니다. 원하는 스타일만 선택하여 변환할 수 있습니다.",
      },
    ],
    relatedTools: ["symbol-picker", "fullwidth-halfwidth-converter"],
    relatedGuides: [],
  },
}

export function getToolContent(toolId: string): ToolContent | null {
  return TOOL_CONTENT[toolId] || null
}
