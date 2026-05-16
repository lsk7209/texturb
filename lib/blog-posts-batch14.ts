import type { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH14: BlogPost[] = [
  {
    slug: "social-media-bio-length-guide",
    title: "소셜 미디어 바이오(Bio) 글자수 최적화 - 플랫폼별 기준",
    description: "인스타그램, 트위터, 링크드인, 틱톡 등 플랫폼별 Bio(자기소개) 최대 글자수와 프로필 방문자를 팔로워로 전환하는 바이오 작성법을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "소셜 미디어 바이오 글자수 - 플랫폼별 최적화 가이드",
    metaDescription: "인스타그램 Bio 최대 150자, 트위터 160자, 링크드인 요약 2,000자. 팔로워 전환율을 높이는 Bio 작성 공식과 플랫폼별 최적 분량을 안내합니다.",
    targetKeywords: ["소셜 미디어 바이오 글자수", "인스타그램 바이오 최적화", "링크드인 프로필 작성"],
    category: "텍스트 편집",
    tags: ["소셜미디어", "프로필", "바이오", "SNS"],
    aeoQuestion: "각 소셜 미디어 플랫폼의 바이오(Bio) 최대 글자수는 얼마인가요?",
    aeoAnswer: "플랫폼별 바이오 글자수 제한: 인스타그램 150자, 트위터(X) 160자, 링크드인 요약 2,000자(최적 200-400자), 틱톡 80자, 페이스북 101자, 유튜브 채널 소개 1,000자입니다. 대부분의 플랫폼에서 최대치보다 70-80% 수준으로 작성하면 핵심 정보가 잘 전달됩니다.",
    cta: { text: "바이오 텍스트 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "유튜브 채널 소개 글자수", link: "/blog/youtube-channel-description-guide/" },
      { text: "글자수 세기", link: "/tools/char-counter/" },
    ],
    outlinks: [
      { text: "인스타그램 비즈니스 센터", link: "https://business.instagram.com", description: "인스타그램 공식 비즈니스 가이드" },
    ],
    canonicalUrl: "https://texturb.com/blog/social-media-bio-length-guide/",
    content: `인스타그램 프로필을 방문한 사람이 팔로우 버튼을 누를지 결정하는 데 걸리는 시간은 평균 2-3초다. 150자 바이오가 그 결정을 좌우한다.

## 플랫폼별 바이오 글자수 제한

| 플랫폼 | 최대 글자수 | 권장 사용 분량 | 링크 허용 |
|---|---|---|---|
| 인스타그램 | 150자 | 100-130자 | 외부 링크 1개 별도 |
| 트위터(X) | 160자 | 120-150자 | URL 포함 시 23자 차감 |
| 틱톡 | 80자 | 60-75자 | 없음 (외부 링크 별도) |
| 링크드인 요약 | 2,000자 | 200-400자 | 포함 가능 |
| 유튜브 채널 소개 | 1,000자 | 300-600자 | 포함 가능 |
| 페이스북 페이지 | 101자 | 80-100자 | 없음 |

## 전환율 높은 바이오 공식

**인스타그램 바이오 (120자 목표)**
\`\`\`
[직함 또는 전문 분야] 📝
[주요 성과 또는 수치]
[독자에게 주는 가치]
[CTA + 링크]
\`\`\`

예시:
\`\`\`
텍스트 편집 도구 | texturb.com 🛠
글자수·맞춤법·공백 한번에 정리
블로거·마케터·작가를 위한 무료 도구
👇 지금 무료로 사용하기
\`\`\`

## 이모지 활용과 글자수

인스타그램과 트위터에서 이모지는 1-2글자(플랫폼에 따라 다름)를 차지한다. 이모지는 텍스트 블록을 시각적으로 분리해 가독성을 높이지만, 글자수 예산을 잡아먹으므로 2-3개로 제한한다.

## 링크드인 요약 최적화

링크드인 요약(About 섹션)은 2,000자가 최대지만, 검색 결과와 프로필 미리보기에서는 처음 300자만 표시된다. 처음 200자에 핵심 전문성과 가치 제안을 압축해야 한다.`,
  },
  {
    slug: "youtube-channel-description-guide",
    title: "유튜브 채널 소개 글자수 최적화 방법",
    description: "유튜브 채널 소개(About) 섹션의 최적 글자수, 구독자 유도 문구, 검색 최적화를 위한 키워드 배치 전략을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "유튜브 채널 소개 글자수 최적화 - SEO와 구독자 유도",
    metaDescription: "유튜브 채널 소개 최대 1,000자, 검색 노출 최적 300-500자. 첫 100자에 핵심 키워드 배치 필수. 구독자를 늘리는 채널 소개 작성 전략.",
    targetKeywords: ["유튜브 채널 소개 글자수", "유튜브 About 섹션", "유튜브 채널 SEO"],
    category: "텍스트 편집",
    tags: ["유튜브", "채널최적화", "SEO"],
    aeoQuestion: "유튜브 채널 소개(About)는 몇 글자로 작성해야 하나요?",
    aeoAnswer: "유튜브 채널 소개의 최대 글자수는 1,000자이지만, 검색 결과와 채널 홈에서 처음 100-150자만 표시됩니다. 처음 100자에 채널 주제 키워드를 자연스럽게 포함하고, 전체 300-500자로 채널 가치와 업로드 주기를 설명하는 것이 최적입니다.",
    cta: { text: "채널 소개 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "소셜 미디어 바이오 글자수", link: "/blog/social-media-bio-length-guide/" },
      { text: "팟캐스트 쇼노트 글자수", link: "/blog/podcast-shownotes-length-guide/" },
    ],
    outlinks: [
      { text: "유튜브 채널 최적화 공식 가이드", link: "https://support.google.com/youtube/answer/1714408", description: "유튜브 공식 도움말" },
    ],
    canonicalUrl: "https://texturb.com/blog/youtube-channel-description-guide/",
    content: `유튜브 채널 소개를 비워두거나 "안녕하세요, 유튜브 채널입니다"처럼 단순하게 작성하는 채널이 많다. 채널 소개는 유튜브 내부 검색에서 채널이 발견되는 핵심 텍스트다.

## 유튜브 채널 소개 표시 위치

| 표시 위치 | 표시 글자수 | 비고 |
|---|---|---|
| 유튜브 검색 결과 | 첫 100-150자 | 가장 중요 |
| 채널 홈 About 탭 | 전체 | 1,000자까지 |
| Google 검색 결과 | 첫 155자 | 메타 디스크립션 역할 |

## 최적 채널 소개 구조 (350-500자)

\`\`\`
[채널 핵심 주제 + 타겟 시청자] - 처음 100자 이내
예: "텍스트 편집과 글쓰기 생산성을 높이는 도구와 팁을 공유합니다.
    블로거, 작가, 마케터를 위한 실용적인 콘텐츠를 매주 올립니다."

[채널이 제공하는 가치] - 100-200자
주요 콘텐츠 유형: 튜토리얼, 비교 리뷰, 실전 팁 등

[업로드 주기] - 50자
"매주 화·목요일 새 영상 업로드"

[CTA] - 50자
"구독하고 알림 설정하면 새 영상을 놓치지 않아요."
\`\`\`

## 채널 소개 SEO 전략

유튜브는 채널 소개에서 키워드를 추출해 채널 주제를 파악한다. 주요 타겟 키워드를 첫 150자 안에 자연스럽게 포함하면 관련 검색에서 채널이 추천될 가능성이 높아진다. 단, 키워드 나열은 피하고 자연스러운 문장으로 작성한다.`,
  },
  {
    slug: "featured-snippet-text-guide",
    title: "Featured Snippet 최적화 - 40~60단어 답변 작성법",
    description: "구글 검색 결과 상단의 Featured Snippet(강조 스니펫)에 선정되기 위한 텍스트 형식, 분량, 구조 최적화 방법을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "Featured Snippet 최적화 - 답변 형식 텍스트 작성법",
    metaDescription: "구글 Featured Snippet 선정 조건: 40-60단어(한글 80-150자) 직접 답변. 단락형·목록형·표형 스니펫 최적화 방법과 텍스트 구조 가이드.",
    targetKeywords: ["Featured Snippet 최적화", "강조 스니펫 작성", "구글 스니펫"],
    category: "텍스트 편집",
    tags: ["Featured Snippet", "SEO", "구글최적화"],
    aeoQuestion: "구글 Featured Snippet에 선정되려면 텍스트를 어떻게 작성해야 하나요?",
    aeoAnswer: "구글 Featured Snippet에 선정되려면 검색 질문에 대한 직접적인 답변을 40-60단어(한글 기준 80-150자)로 작성해야 합니다. H2나 H3 제목을 질문 형식으로 작성하고, 바로 아래에 정의-설명-예시 순으로 간결하게 답변을 배치합니다. 목록형 스니펫은 8개 이하 항목, 표형 스니펫은 4열 이하가 권장됩니다.",
    cta: { text: "스니펫 텍스트 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "SEO 콘텐츠 최소 글자수 기준", link: "/blog/seo-content-minimum-length/" },
      { text: "블로그 포스트 구조 설계", link: "/blog/blog-post-structure-guide/" },
    ],
    outlinks: [
      { text: "구글 Featured Snippet 공식 가이드", link: "https://developers.google.com/search/docs/appearance/featured-snippets", description: "구글 공식 스니펫 가이드" },
    ],
    canonicalUrl: "https://texturb.com/blog/featured-snippet-text-guide/",
    content: `구글 검색 결과 1위보다 0위(Featured Snippet)를 목표로 하는 전략이 있다. Ahrefs(2023) 분석에 따르면 Featured Snippet을 보유한 페이지의 클릭률은 동일 1위 페이지 대비 평균 2.1배 높다.

## Featured Snippet 3가지 유형

| 유형 | 선정 조건 | 텍스트 형식 |
|---|---|---|
| 단락형 | 정의·설명 질문 | 40-60단어 직접 답변 단락 |
| 목록형 | 순서·방법 질문 | 번호 또는 글머리 기호 목록, 8항목 이하 |
| 표형 | 비교·데이터 질문 | 2-4열 표, 제목 행 명확 |

## 단락형 스니펫 최적화 텍스트 구조

검색 질문: "Featured Snippet이란 무엇인가요?"

\`\`\`
H2: Featured Snippet이란 무엇인가요?

[답변 단락 - 80-150자]
Featured Snippet은 구글 검색 결과 상단에 표시되는
강조 박스로, 검색자의 질문에 가장 직접적으로
답하는 콘텐츠를 자동으로 발췌해 보여줍니다.
'0위'라고도 불리며, 클릭률이 1위보다 높은 경우가 많습니다.

[추가 설명 - 선택]
\`\`\`

## 목록형 스니펫 최적화

단계별 방법을 설명하는 콘텐츠에서 목록형 스니펫이 자주 선정된다.

- H2 제목: "~하는 방법" 또는 "~하는 X가지 단계"
- 번호 목록으로 8개 이하 항목
- 각 항목은 15-30자 내외의 명확한 행동 문구

## 스니펫 선정을 돕는 추가 요소

- Q&A 구조: H3으로 질문, 바로 아래 단락으로 답변
- Schema.org FAQPage 마크업 추가
- 기존 스니펫 보유 경쟁자보다 더 명확한 답변 제공`,
  },
  {
    slug: "aeo-content-guide",
    title: "AEO(Answer Engine Optimization) 콘텐츠 작성법",
    description: "AI 검색 엔진과 음성 검색에서 답변으로 채택되기 위한 AEO 콘텐츠 작성 전략, 텍스트 구조, 분량 기준을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "AEO 콘텐츠 작성법 - AI 검색 답변 최적화 가이드",
    metaDescription: "AEO(Answer Engine Optimization)은 Perplexity·ChatGPT·구글 SGE에서 답변으로 채택되는 콘텐츠 전략. 직접 답변형 구조, 40-80자 요약, Schema 마크업 가이드.",
    targetKeywords: ["AEO 콘텐츠 작성", "Answer Engine Optimization", "AI 검색 최적화"],
    category: "텍스트 편집",
    tags: ["AEO", "AI검색", "SEO", "Perplexity"],
    aeoQuestion: "AEO(Answer Engine Optimization)이란 무엇이며 어떻게 적용하나요?",
    aeoAnswer: "AEO(Answer Engine Optimization)는 Perplexity, ChatGPT, 구글 SGE 같은 AI 기반 검색 엔진에서 답변 소스로 채택되도록 콘텐츠를 최적화하는 전략입니다. 핵심은 검색자의 질문에 첫 문장에서 직접 답하고, 40-80자 요약 답변 뒤에 상세 설명을 배치하는 구조입니다. 정확한 출처 명시와 구조화된 데이터(Schema.org)가 채택 확률을 높입니다.",
    cta: { text: "AEO 텍스트 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "Featured Snippet 최적화", link: "/blog/featured-snippet-text-guide/" },
      { text: "SEO 콘텐츠 최소 글자수", link: "/blog/seo-content-minimum-length/" },
    ],
    outlinks: [
      { text: "구글 AI Overviews 가이드", link: "https://developers.google.com/search", description: "구글 검색 공식 문서" },
    ],
    canonicalUrl: "https://texturb.com/blog/aeo-content-guide/",
    content: `2024년 Perplexity AI의 월 활성 사용자가 1,500만 명을 돌파했다. ChatGPT에 질문하고 구글 SGE(Search Generative Experience)가 답변을 생성하는 시대에, 콘텐츠가 AI 답변의 소스로 채택되는 것이 새로운 SEO 전략이 됐다.

## AEO vs SEO 차이점

| 항목 | 전통 SEO | AEO |
|---|---|---|
| 목표 | 검색 결과 순위 | AI 답변 소스 채택 |
| 핵심 지표 | 클릭률(CTR) | 인용율(Citation Rate) |
| 텍스트 구조 | 키워드 중심 | 질문-답변 중심 |
| 분량 | 길수록 유리 | 간결한 직접 답변 우선 |
| 출처 신뢰도 | 도메인 권위 | 정확성·출처 명시 |

## AEO 콘텐츠 구조

\`\`\`
[질문 형식 제목]
"X란 무엇인가요?" / "X하는 방법은?"

[직접 답변 - 40-80자]
← AI가 이 부분을 인용

[배경 설명 - 200-400자]
← 왜, 어떻게의 상세 설명

[구체적 사례/데이터 - 200-400자]
← 신뢰도를 높이는 근거

[관련 질문 FAQ]
← 후속 질문 대응
\`\`\`

## 출처 신뢰도 향상

Perplexity와 ChatGPT는 웹 검색 시 신뢰할 수 있는 출처를 우선 인용한다. 콘텐츠 내에 다음을 포함하면 채택 확률이 높아진다:
- 구체적 연구·통계 출처 명시
- 날짜가 명확한 최신 데이터
- 권위 있는 기관 언급 (정부, 대학, 연구소)`,
  },
  {
    slug: "content-update-strategy-guide",
    title: "콘텐츠 업데이트 주기와 텍스트 보완 전략",
    description: "발행한 블로그 글의 업데이트 주기, 어떤 텍스트를 보완해야 하는지, SEO 회복과 트래픽 유지를 위한 콘텐츠 리프레시 전략을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "콘텐츠 업데이트 주기와 텍스트 보완 전략",
    metaDescription: "블로그 콘텐츠 업데이트 권장 주기: 뉴스형 3-6개월, 가이드형 6-12개월. 업데이트 시 트래픽 평균 22% 증가. 어떤 텍스트를 보완해야 SEO가 회복되는지 분석.",
    targetKeywords: ["콘텐츠 업데이트 전략", "블로그 리프레시", "SEO 콘텐츠 보완"],
    category: "텍스트 편집",
    tags: ["콘텐츠업데이트", "SEO", "블로그관리"],
    aeoQuestion: "블로그 글은 얼마나 자주 업데이트해야 SEO에 유리한가요?",
    aeoAnswer: "콘텐츠 유형에 따라 다릅니다. 뉴스·트렌드형 콘텐츠는 3-6개월, 에버그린 가이드는 6-12개월, 통계·법규 기반 콘텐츠는 연 1회 이상 업데이트가 권장됩니다. Ahrefs(2023) 분석에 따르면 콘텐츠를 업데이트한 페이지는 6개월 후 평균 트래픽이 22% 증가했습니다.",
    cta: { text: "콘텐츠 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "에버그린 콘텐츠 분량 기준", link: "/blog/evergreen-content-length-guide/" },
      { text: "SEO 콘텐츠 최소 글자수", link: "/blog/seo-content-minimum-length/" },
    ],
    outlinks: [
      { text: "Ahrefs 콘텐츠 업데이트 연구", link: "https://ahrefs.com/blog", description: "SEO 도구 및 연구 블로그" },
    ],
    canonicalUrl: "https://texturb.com/blog/content-update-strategy-guide/",
    content: `2022년 구글 알고리즘 업데이트 이후 "신선도(freshness)"가 검색 랭킹에 미치는 영향이 커졌다. 특히 YMYL(Your Money Your Life) 주제—건강, 금융, 법률—에서 오래된 정보는 빠르게 순위를 잃는다.

## 콘텐츠 유형별 업데이트 주기

| 콘텐츠 유형 | 권장 업데이트 주기 | 주요 업데이트 항목 |
|---|---|---|
| 뉴스·트렌드 | 3-6개월 | 최신 동향·통계 교체 |
| How-to 가이드 | 6-12개월 | 도구·방법 변경사항 반영 |
| 법규·정책 기반 | 법 개정 시 즉시 | 변경된 조항·기준 수정 |
| 제품 비교 리뷰 | 신제품 출시 시 | 새 모델 추가·가격 업데이트 |
| 에버그린 가이드 | 연 1회 | 출처·링크 확인, 사례 추가 |

## 업데이트가 필요한 신호

트래픽이 다음과 같이 변화할 때 업데이트를 검토한다:
- 최근 3개월간 오가닉 트래픽 20%+ 감소
- 평균 클릭 순위가 3위 이상 하락
- 게시일로부터 1년 이상 경과

## 효과적인 텍스트 보완 방법

### 무엇을 추가하나
1. 최신 통계·연구 데이터 교체
2. 새로 등장한 도구·방법 추가 섹션
3. 독자 FAQ 반영 (댓글, 검색 쿼리 분석)
4. 내부 링크 추가 (새로 발행된 관련 글)

### 무엇을 제거하나
1. 더 이상 유효하지 않은 정보
2. 서비스가 종료된 도구 언급
3. 오래된 스크린샷·인터페이스 설명

## 업데이트 발행 처리

업데이트 후 발행일을 현재 날짜로 변경하고, 글 상단에 "최종 업데이트: YYYY년 MM월"을 명시한다. 이는 독자 신뢰도와 구글 신선도 신호 모두에 긍정적이다.`,
  },
  {
    slug: "multilingual-content-text-guide",
    title: "다국어 콘텐츠 관리 - 언어별 글자수 차이 대응법",
    description: "한국어 콘텐츠를 영어, 일본어, 중국어로 번역할 때 발생하는 글자수 차이를 레이아웃 깨짐 없이 관리하는 방법을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "다국어 콘텐츠 글자수 차이 대응법 - 언어별 비교",
    metaDescription: "한국어→영어 번역 시 분량 20-30% 증가. 한국어→중국어 10% 감소. 다국어 UI 텍스트 레이아웃 깨짐 방지를 위한 여유 공간 설계와 번역 텍스트 관리법.",
    targetKeywords: ["다국어 콘텐츠 글자수", "번역 텍스트 길이 차이", "i18n 텍스트 관리"],
    category: "텍스트 편집",
    tags: ["다국어", "번역", "i18n", "현지화"],
    aeoQuestion: "한국어를 다른 언어로 번역할 때 글자수가 어떻게 달라지나요?",
    aeoAnswer: "언어별 번역 시 분량 변화: 한국어→영어 +20~30% 증가, 한국어→일본어 ±5% (거의 비슷), 한국어→중국어 -10~15% 감소, 한국어→독일어 +30~40% 증가입니다. UI 텍스트(버튼, 라벨)는 영어 기준으로 설계하면 독일어·프랑스어 번역 시 공간이 부족해지므로, 영어 대비 30-40% 여유 공간을 확보해야 합니다.",
    cta: { text: "텍스트 글자수 측정하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "한국어·중국어·일본어 글자수 비교", link: "/blog/korean-chinese-japanese-char-count/" },
      { text: "영문 번역 분량 조정 가이드", link: "/blog/translation-text-length-ratio/" },
    ],
    outlinks: [
      { text: "W3C 국제화 가이드", link: "https://www.w3.org/International/", description: "웹 국제화 공식 가이드" },
    ],
    canonicalUrl: "https://texturb.com/blog/multilingual-content-text-guide/",
    content: `한국어 앱 버튼 "저장하기"를 독일어로 번역하면 "Speichern"(7자)이 된다. 한국어(4자)보다 약 75% 길다. 버튼 크기를 한국어 기준으로 설계했다면 독일어 버튼이 잘린다.

## 언어별 텍스트 길이 비교

| 출발 언어 | 목적 언어 | 텍스트 길이 변화 | 비고 |
|---|---|---|---|
| 한국어 | 영어 | +20-30% | 조사 제거, 어순 변화 |
| 한국어 | 일본어 | ±5% | 문법 유사, 한자 공유 |
| 한국어 | 중국어 | -10-15% | 한자 압축 효과 |
| 한국어 | 독일어 | +30-40% | 복합어로 길어짐 |
| 한국어 | 아랍어 | -10-20% | RTL 언어, 압축적 |

## UI 텍스트 설계 원칙

소프트웨어·앱 UI 텍스트를 설계할 때 다음 원칙을 적용한다:

1. **영어를 기준 언어로 설계**: 영어는 중간 길이이므로 기준으로 적절
2. **30-40% 확장 여유 공간**: 독일어·프랑스어 대응
3. **단행 텍스트는 2배 여유**: 버튼, 레이블, 네비게이션 항목

## 번역 텍스트 관리 파일 구조

React·Next.js 프로젝트에서 i18n(국제화) 관리:

\`\`\`json
// ko.json
{
  "save_button": "저장하기",    // 5자
  "cancel_button": "취소"      // 2자
}

// de.json
{
  "save_button": "Speichern",  // 9자 (80% 더 길음)
  "cancel_button": "Abbrechen" // 9자 (350% 더 길음)
}
\`\`\`

## 한국어 콘텐츠의 특수 번역 과제

한국어에는 존댓말 체계가 있어 번역 시 어조 결정이 필요하다. "합니다" 체를 영어로 번역할 때 formal 또는 casual 중 선택해야 하며, 이 결정이 전체 번역 분량에도 영향을 준다.`,
  },
  {
    slug: "sentence-length-readability-guide",
    title: "짧은 문장과 긴 문장의 가독성 비교 - 최적 문장 길이",
    description: "문장 길이가 독자의 이해도와 읽기 속도에 미치는 영향을 연구 데이터로 분석하고, 한국어 글쓰기에서 최적 문장 길이 기준을 제시합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "문장 길이와 가독성 비교 - 한국어 최적 문장 길이",
    metaDescription: "한국어 최적 문장 길이 30-50자. 20자 미만=너무 단조로움, 80자 이상=이해도 저하. 문장 길이와 독자 이탈률 연구 데이터와 실전 문장 조정 기법.",
    targetKeywords: ["문장 길이 가독성", "최적 문장 길이", "한국어 글쓰기 문장"],
    category: "텍스트 편집",
    tags: ["문장길이", "가독성", "글쓰기"],
    aeoQuestion: "한국어 글쓰기에서 최적 문장 길이는 몇 글자인가요?",
    aeoAnswer: "한국어 일반 독자를 위한 최적 문장 길이는 30-50자입니다. 20자 미만 문장이 연속되면 단조롭고 끊기는 느낌을 주며, 80자 이상 문장이 계속되면 독자의 이해도와 집중력이 낮아집니다. 가장 효과적인 방법은 짧은 문장(20-30자)과 중간 문장(40-50자)을 2:1 비율로 섞는 것입니다.",
    cta: { text: "문장 길이 분석하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "텍스트 압축 편집 기법", link: "/blog/text-compression-editing-guide/" },
      { text: "단락 길이 최적화", link: "/blog/paragraph-length-mobile-guide/" },
    ],
    outlinks: [
      { text: "Flesch Reading Ease 공식", link: "https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests", description: "가독성 측정 방법" },
    ],
    canonicalUrl: "https://texturb.com/blog/sentence-length-readability-guide/",
    content: `헤밍웨이의 소설 문장 평균 길이는 7단어(영문)다. 그의 문장이 명확하고 강렬한 이유가 있다. 반면 법률 문서의 평균 문장 길이는 40단어 이상이며, 이해하기 어렵기로 악명 높다.

## 문장 길이별 독자 반응

Nielsen Norman Group의 웹 텍스트 가독성 연구(2020):

| 문장 길이 | 독자 반응 | 완독률 영향 |
|---|---|---|
| 15자 미만 | 단조롭고 끊기는 느낌 | 중립 |
| 15-30자 | 명확하고 임팩트 있음 | 긍정 |
| 30-50자 | 가장 자연스러운 구간 | 최고 |
| 50-80자 | 내용은 전달되나 집중력 요구 | 약간 부정 |
| 80자 이상 | 이해도 저하, 이탈 증가 | 부정 |

## 한국어 특성과 문장 길이

한국어는 술어(동사·형용사)가 문장 끝에 오는 SOV 구조다. 긴 문장에서는 독자가 끝에 도달하기 전에 앞 내용을 잊는 "문장 끝 효과"가 발생한다. 특히 조건절, 이유절이 중첩된 문장은 70자를 넘으면 이해가 어려워진다.

**분리 전**: "텍스터브는 글자수 세기, 공백 제거, 맞춤법 검사 등 다양한 기능을 제공하며, 모바일과 PC에서 모두 사용 가능하고, 별도 로그인 없이 바로 이용할 수 있습니다." (82자)

**분리 후**: "텍스터브는 글자수 세기, 공백 제거, 맞춤법 검사 기능을 제공합니다. 모바일과 PC에서 모두 사용 가능하며, 로그인 없이 바로 이용할 수 있습니다." (두 문장, 각 40자/37자)

## 문장 길이 다양화 전략

같은 길이의 문장이 반복되면 리듬이 단조로워진다. 짧은 문장(10-25자)으로 강조하고, 중간 문장(30-50자)으로 설명하고, 가끔 긴 문장(50-70자)으로 맥락을 연결하는 패턴이 효과적이다.`,
  },
  {
    slug: "paragraph-length-mobile-guide",
    title: "단락 길이 최적화 - 모바일 독자를 위한 텍스트 구조",
    description: "모바일 화면에서 텍스트 이탈률을 낮추는 최적 단락 길이와 스캔 가능한 텍스트 구조를 데이터와 함께 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "단락 길이 최적화 - 모바일 독자를 위한 텍스트 구조",
    metaDescription: "모바일 최적 단락 길이 2-4문장(80-150자). 5줄 이상 단락은 모바일에서 텍스트 블록으로 인식. 이탈률 낮추는 모바일 퍼스트 텍스트 구조 가이드.",
    targetKeywords: ["단락 길이 최적화", "모바일 텍스트 구조", "블로그 가독성"],
    category: "텍스트 편집",
    tags: ["단락길이", "모바일최적화", "가독성"],
    aeoQuestion: "모바일에서 읽기 좋은 단락 길이는 몇 줄이나 몇 글자인가요?",
    aeoAnswer: "모바일 독자를 위한 최적 단락 길이는 2-4문장(80-150자)입니다. 스마트폰 화면(375px 기준)에서 5줄 이상 단락은 '텍스트 블록'처럼 보여 독자가 스크롤을 건너뛰거나 포기하는 경향이 있습니다. 단락 사이 여백을 충분히 주고, 핵심 내용은 굵게 강조하면 스캔 가능성이 높아집니다.",
    cta: { text: "텍스트 구조 분석하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "문장 길이와 가독성 비교", link: "/blog/sentence-length-readability-guide/" },
      { text: "블로그 포스트 구조 설계", link: "/blog/blog-post-structure-guide/" },
    ],
    outlinks: [
      { text: "Nielsen Norman Group 모바일 가독성", link: "https://www.nngroup.com", description: "UX 연구 기관" },
    ],
    canonicalUrl: "https://texturb.com/blog/paragraph-length-mobile-guide/",
    content: `블로그 글의 모바일 이탈률이 PC보다 높은 가장 큰 원인은 텍스트 밀도다. 5줄 이상 단락이 3개 연속 나오면 모바일 독자의 절반이 스크롤을 포기한다.

## 모바일 화면에서 단락이 보이는 방식

375px 스마트폰(iPhone SE 기준), 16px 폰트, 줄 간격 1.5배:
- 화면 1뷰에 약 8-10줄이 표시됨
- 5줄 이상 단락은 화면의 절반 이상을 차지
- 단락 구분 없으면 텍스트 블록으로 인식

## 단락 길이 기준

| 단락 길이 | 줄 수 (모바일) | 독자 반응 |
|---|---|---|
| 1-2문장 (50-80자) | 1-2줄 | 빠르게 읽힘, 짧은 느낌 |
| 2-4문장 (80-150자) | 2-4줄 | 최적 구간 |
| 4-6문장 (150-250자) | 4-6줄 | 스캔 어려움 시작 |
| 6문장 이상 (250자+) | 6줄+ | 이탈률 증가 |

## 모바일 친화적 텍스트 구조 기법

### 1. 굵게 강조로 스캔 가능성 높이기
단락 내 핵심 단어 1-2개를 굵게(bold) 표시하면 스캐너(빠르게 훑는 독자)가 핵심 정보를 파악한다.

### 2. 목록 활용
3가지 이상의 정보는 단락 대신 번호 목록이나 글머리 기호로 변환한다. 같은 내용이 훨씬 읽기 쉬워진다.

### 3. 단락 간 여백
마크다운에서 빈 줄 하나, HTML에서 \`<p>\` 태그 사용으로 단락 구분을 명확히 한다. 단락 사이 여백은 독자가 숨 쉴 공간을 준다.`,
  },
  {
    slug: "error-message-text-guide",
    title: "오류 메시지 텍스트 작성 가이드 - UX 관점",
    description: "앱과 웹 서비스의 오류 메시지 텍스트를 사용자 친화적으로 작성하는 방법, 최적 글자수, 좋은 오류 메시지의 4가지 요소를 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "오류 메시지 텍스트 작성 가이드 - UX 친화적 글쓰기",
    metaDescription: "UX 오류 메시지 최적 길이 30-80자. 좋은 오류 메시지 4요소: 무슨 일인지+왜+어떻게+언제. '오류가 발생했습니다' 대신 구체적 안내 텍스트 작성법.",
    targetKeywords: ["오류 메시지 텍스트", "UX 글쓰기", "에러 메시지 작성"],
    category: "텍스트 편집",
    tags: ["UX글쓰기", "오류메시지", "앱개발"],
    aeoQuestion: "UX 관점에서 좋은 오류 메시지 텍스트는 어떻게 작성하나요?",
    aeoAnswer: "좋은 오류 메시지는 4가지 요소를 포함합니다: 1) 무슨 일이 일어났는지(What), 2) 왜 발생했는지(Why), 3) 어떻게 해결하는지(How), 4) 언제 다시 시도해야 하는지(When). '오류가 발생했습니다'보다 '파일 크기가 10MB를 초과합니다. 10MB 이하 파일을 업로드해 주세요.'가 훨씬 효과적입니다. 최적 길이는 30-80자입니다.",
    cta: { text: "오류 메시지 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "CTA 텍스트 최적화", link: "/blog/cta-text-optimization-guide/" },
      { text: "글자수 세기", link: "/tools/char-counter/" },
    ],
    outlinks: [
      { text: "Nielsen Norman Group 오류 메시지 가이드", link: "https://www.nngroup.com", description: "UX 연구 기관" },
    ],
    canonicalUrl: "https://texturb.com/blog/error-message-text-guide/",
    content: `"오류가 발생했습니다"라는 메시지를 본 사용자는 무엇을 해야 할지 모른다. 이 메시지는 개발자에게도, 사용자에게도 쓸모가 없다. 오류 메시지 UX는 앱 신뢰도에 직접 영향을 준다.

## 나쁜 오류 메시지 vs 좋은 오류 메시지

| 나쁜 예 | 문제점 | 좋은 예 |
|---|---|---|
| "오류가 발생했습니다" | 원인·해결책 없음 | "인터넷 연결을 확인해 주세요." |
| "유효하지 않은 입력" | 어떤 입력인지 불명확 | "이메일 형식이 올바르지 않습니다. (예: user@email.com)" |
| "Error 404" | 사용자가 이해 불가 | "페이지를 찾을 수 없습니다. [홈으로 돌아가기]" |
| "업로드 실패" | 원인 없음 | "파일 크기가 10MB를 초과합니다. (현재: 15MB)" |

## 오류 메시지 4요소

**What** - 무슨 일이 일어났나: "비밀번호가 일치하지 않습니다."
**Why** - 왜 발생했나: "(이전 비밀번호와 동일한 비밀번호는 사용할 수 없습니다)"
**How** - 어떻게 해결하나: "새 비밀번호를 입력해 주세요."
**When** - 언제 다시 시도 가능한가: "5분 후 다시 시도해 주세요." (타임아웃 오류)

## 최적 오류 메시지 길이

- **인라인 폼 오류** (필드 아래 표시): 20-50자
- **토스트 알림**: 30-60자
- **모달 대화상자**: 50-120자
- **전체 페이지 오류**: 80-200자

길수록 사용자가 읽지 않는다. 핵심 해결 방법을 첫 문장에 배치하는 역피라미드 구조를 적용한다.`,
  },
  {
    slug: "spelling-correction-text-workflow",
    title: "한국어 맞춤법 교정 후 텍스트 정리 순서",
    description: "맞춤법 검사 후 텍스트를 최종 완성 상태로 정리하는 단계별 체크리스트와 자주 놓치는 교정 항목을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "한국어 맞춤법 교정 후 텍스트 정리 순서와 체크리스트",
    metaDescription: "맞춤법 교정 후 텍스트 정리 7단계: 띄어쓰기→외래어→숫자 표기→문장 부호→문체 통일→글자수 확인→최종 검토. 자주 놓치는 교정 항목과 도구 안내.",
    targetKeywords: ["맞춤법 교정 순서", "한국어 텍스트 정리", "교정 체크리스트"],
    category: "텍스트 편집",
    tags: ["맞춤법", "교정", "텍스트정리"],
    aeoQuestion: "한국어 맞춤법 교정 후 텍스트를 정리하는 올바른 순서는 무엇인가요?",
    aeoAnswer: "맞춤법 교정 후 텍스트 정리는 7단계로 진행합니다: 1) 띄어쓰기 확인, 2) 외래어·영문 표기 통일, 3) 숫자 단위 표기 통일, 4) 문장 부호 교정, 5) 문체 통일(합니다체/해요체), 6) 글자수 확인, 7) 최종 소리 내어 읽기. 맞춤법 검사기는 띄어쓰기와 외래어 표기를 놓치는 경우가 많으므로 수동 확인이 필요합니다.",
    cta: { text: "텍스트 최종 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "텍스트 압축 편집 기법", link: "/blog/text-compression-editing-guide/" },
      { text: "외래어 표기 통일 방법", link: "/blog/loanword-notation-guide/" },
    ],
    outlinks: [
      { text: "국립국어원 맞춤법 검사기", link: "https://kornorms.korean.go.kr", description: "국립국어원 공식 맞춤법 검사" },
    ],
    canonicalUrl: "https://texturb.com/blog/spelling-correction-text-workflow/",
    content: `맞춤법 검사기를 돌렸다고 텍스트 교정이 끝난 것이 아니다. 검사기는 문맥을 모르므로 "그/게"(거기에/그것이) 혼용을 잡지 못한다. 체계적인 교정 순서가 완성도를 높인다.

## 맞춤법 교정 7단계

**1단계: 맞춤법·문법 검사기 실행**
국립국어원 맞춤법 검사기 또는 네이버·카카오 맞춤법 검사기 실행. 제안된 수정을 무조건 수락하지 말고 맥락을 확인한다.

**2단계: 띄어쓰기 수동 확인**
검사기가 자주 놓치는 띄어쓰기: "만큼/만 큼", "뿐/뿐만 아니라", "대로/대로", "처럼/처럼" 등

**3단계: 외래어·영문 표기 통일**
같은 외래어를 문서 내에서 다르게 표기하지 않도록 통일한다. "컨텐츠/콘텐츠", "웹사이트/웹 사이트" 등

**4단계: 숫자·단위 표기 통일**
"1,234원"과 "1234원", "10 %"와 "10%", "2kg"과 "2 kg"을 통일한다.

**5단계: 문장 부호 교정**
홑따옴표(''), 겹따옴표(""), 큰따옴표, 쉼표 사용을 한국어 표준에 맞게 정리한다.

**6단계: 문체 통일**
"합니다체"와 "해요체"가 혼용되지 않도록 문서 전체를 확인한다.

**7단계: 글자수 확인 + 소리 내어 읽기**
최종 글자수를 확인하고, 소리 내어 읽으면서 어색한 문장을 발견한다. 눈으로 읽을 때 놓친 오류를 소리로 잡을 수 있다.`,
  },
];
