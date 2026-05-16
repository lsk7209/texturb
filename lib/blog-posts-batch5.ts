import type { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH5: BlogPost[] = [
  {
    slug: "press-release-text-length-guide",
    title: "보도자료 작성 가이드 - 글자수와 형식 표준",
    description: "언론사가 실제로 채택하는 보도자료의 적정 분량과 형식 기준을 한국PR협회·AP스타일 기준으로 정리했습니다.",
    publishedAt: "2026-05-03",
    metaTitle: "보도자료 작성 가이드 - 글자수와 형식 표준",
    metaDescription: "보도자료 권장 분량은 A4 1-2매(500-800자). 한국PR협회와 AP스타일 기준의 제목·리드·본문·배포 시각 규칙을 정리합니다.",
    targetKeywords: ["보도자료 글자수", "보도자료 작성법", "보도자료 형식", "PR 글자수"],
    category: "텍스트 편집",
    tags: ["보도자료", "PR", "글자수기준"],
    aeoQuestion: "보도자료의 적정 글자수는 얼마인가요?",
    aeoAnswer: "한국PR협회 권장 기준은 A4 1-2매(본문 500-800자)입니다. AP스타일은 400-500단어(영문 기준)를 권장하며, 제목은 50자 이내, 리드 문단은 5W1H를 한 문장에 담아야 합니다.",
    cta: { text: "글자수 세기 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "기획서 글자수 기준", link: "/blog/business-plan-length-guide/" },
      { text: "텍스트 분석 도구", link: "/tools/" },
    ],
    outlinks: [
      { text: "한국PR협회 공식 사이트", link: "https://www.kpra.or.kr", description: "한국PR협회" },
    ],
    canonicalUrl: "https://texturb.com/blog/press-release-text-length-guide/",
    content: `보도자료 한 건을 배포하는 데 얼마나 많은 글자가 필요할까? 한국 언론사 담당자 설문에서 "500자 미만 보도자료는 신뢰도가 낮다"는 응답이 62%였고, "1,000자 초과는 읽지 않는다"는 응답도 58%였다(한국PR협회, 2023). 적정 분량이 곧 채택률을 결정한다.

## 한국 기준 - 한국PR협회 권장 형식

한국PR협회가 공표한 보도자료 표준 가이드라인에 따르면 권장 분량은 다음과 같다.

| 구성 요소 | 권장 분량 |
|---|---|
| 제목 | 40자 이내 |
| 부제목 (선택) | 30자 이내 |
| 리드 문단 | 100-150자 (5W1H 포함) |
| 본문 | 400-600자 |
| 배포처 정보 | 50자 이내 |
| 총계 | A4 1-2매 |

리드 문단은 기사 전체를 요약하는 첫 문장이다. 편집자가 리드만 읽고도 기사 가치를 판단하므로, 누가(Who)·무엇을(What)·언제(When)·어디서(Where)·왜(Why)·어떻게(How)를 압축해야 한다.

## 국제 기준 - AP스타일과 PR Newswire

AP스타일(Associated Press Stylebook)은 영문 보도자료 기준으로 전 세계 PR업계에서 통용된다.

- **본문**: 400-500단어 (한글 환산 약 600-750자)
- **제목**: 65자(한글 약 30자) 이내
- **하이퍼링크**: 본문당 3개 이하 권장

PR Newswire(세계 최대 보도자료 배포망)의 분석에 따르면 401-500단어 보도자료의 픽업률이 가장 높으며, 700단어 초과 시 채택률이 27% 감소했다.

## 배포 시각과 요일

보도자료 배포 타이밍도 채택률에 영향을 미친다.

> **통계**: 화요일·수요일 오전 10-11시 배포 보도자료의 오픈율이 전체 평균 대비 34% 높다(Cision 2024 State of the Media Report).

- **피해야 할 시각**: 금요일 오후, 월요일 오전
- **공휴일 전날**: 최소 2일 전 또는 공휴일 이후로 연기

## 제목 작성 5원칙

1. 숫자나 구체적 성과를 포함한다 ("매출 30% 성장" > "실적 향상")
2. 능동태로 작성한다 ("~가 출시" > "~이 출시됨")
3. 회사명 + 제품/서비스명 + 핵심 성과 구조
4. 검색엔진 키워드를 자연스럽게 포함
5. 클릭베이트성 표현 지양 (언론 신뢰도 훼손)

## 첨부 이미지와 멀티미디어

사진을 포함한 보도자료의 픽업률은 텍스트 단독 대비 최대 45% 높다(PR Newswire 내부 데이터). 권장 해상도는 300dpi 이상, 파일 크기는 5MB 이하로 제한한다.

## 핵심 정리

보도자료의 황금 비율: **제목 40자 이내 + 리드 100-150자 + 본문 400-600자**. 이 범위를 벗어나면 편집자의 주목을 받기 어렵다. Texturb 글자수 세기 도구를 활용해 작성 중에 실시간으로 분량을 확인할 수 있다.`,
  },
  {
    slug: "alt-text-accessibility-guide",
    title: "웹 접근성을 위한 alt 텍스트 글자수 기준",
    description: "WCAG 2.1과 한국 웹 접근성 인증 기준에 따른 이미지 alt 텍스트 작성법과 권장 글자수를 사례별로 설명합니다.",
    publishedAt: "2026-05-03",
    metaTitle: "웹 접근성 alt 텍스트 글자수 기준 - WCAG 2.1",
    metaDescription: "WCAG 2.1 권장 alt 텍스트는 125자 이내. 장식용 이미지, 텍스트 포함 이미지, 복잡한 차트별 작성법을 사례와 함께 정리합니다.",
    targetKeywords: ["alt 텍스트 글자수", "웹 접근성 alt", "WCAG 이미지 대체 텍스트"],
    category: "텍스트 편집",
    tags: ["웹접근성", "alt텍스트", "WCAG"],
    aeoQuestion: "alt 텍스트는 몇 글자까지 써야 하나요?",
    aeoAnswer: "WCAG 2.1에서는 alt 텍스트를 125자(영문 기준) 이내로 권장합니다. 스크린리더는 더 긴 텍스트도 읽을 수 있지만, 125자를 초과하면 사용자가 피로감을 느낍니다. 장식용 이미지는 alt=\"\"(빈 값)을 사용합니다.",
    cta: { text: "텍스트 편집 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "구글 검색 제목 글자수 기준", link: "/blog/google-title-pixel-cutoff-guide/" },
      { text: "글자수 세기", link: "/tools/char-counter/" },
    ],
    outlinks: [
      { text: "WCAG 2.1 공식 문서", link: "https://www.w3.org/TR/WCAG21/", description: "W3C" },
    ],
    canonicalUrl: "https://texturb.com/blog/alt-text-accessibility-guide/",
    content: `웹사이트 이미지에 alt 텍스트가 없으면 시각 장애인 사용자는 이미지 내용을 전혀 파악할 수 없다. 한국 웹 접근성 실태 조사에 따르면 국내 주요 사이트의 41%가 이미지 alt 텍스트를 누락하거나 부적절하게 작성하고 있다(한국지능정보사회진흥원, 2023).

## WCAG 2.1 alt 텍스트 기준

W3C의 웹 콘텐츠 접근성 지침(WCAG 2.1) 성공 기준 1.1.1에 따르면 모든 비텍스트 콘텐츠에는 동등한 대안 텍스트가 필요하다.

> **권장 길이**: alt 텍스트는 125자(영문) 이내. 한글 기준 약 60-70자.

스크린리더 JAWS와 NVDA는 512자까지 읽을 수 있지만, 125자를 초과하면 사용자의 인지 부하가 증가한다는 연구 결과가 있다(WebAIM, 2022).

## 이미지 유형별 작성 기준

### 1. 정보 전달 이미지
제품 사진, 사람 얼굴, 장소 등 내용이 중요한 이미지.

- **잘못된 예**: \`alt="이미지"\`, \`alt="사진1.jpg"\`
- **올바른 예**: \`alt="서울 광화문 광장 세종대왕 동상, 2024년 봄"\`

핵심 정보(누가, 무엇을, 어디서)를 간결하게 작성한다.

### 2. 장식용 이미지
배경 패턴, 구분선, 순수 장식 목적 이미지.

\`\`\`html
<img src="divider.png" alt="">
\`\`\`

빈 alt 속성(\`alt=""\`)을 사용하면 스크린리더가 해당 이미지를 건너뛴다. alt 속성 자체를 생략하면 스크린리더가 파일명을 읽어 버린다는 점을 주의해야 한다.

### 3. 텍스트 포함 이미지
버튼, 배너, 로고처럼 텍스트가 이미지 안에 있는 경우.

- alt에는 이미지 내의 텍스트를 그대로 포함한다
- 예: \`alt="지금 무료 체험하기"\` (버튼 이미지의 경우)

### 4. 복잡한 차트·그래프
alt로 모든 데이터를 전달하기 어려울 때는 짧은 alt + 상세 설명 본문 조합을 사용한다.

\`\`\`html
<img src="chart.png" alt="2024년 분기별 매출 추이 차트">
<p>위 차트 데이터: 1분기 12억, 2분기 15억, 3분기 11억, 4분기 18억</p>
\`\`\`

## 한국 웹 접근성 인증 마크(WA) 기준

과학기술정보통신부 고시 「한국형 웹 콘텐츠 접근성 지침 2.1」에서도 대안 텍스트 제공을 필수 기준(검사 항목 1.1.1)으로 정하고 있다. WA 인증 심사에서 alt 누락은 즉시 불합격 사유가 된다.

## 실무 체크리스트

- [ ] 모든 \`<img>\` 태그에 alt 속성이 있는가?
- [ ] 장식용 이미지는 \`alt=""\`로 처리했는가?
- [ ] alt 텍스트가 125자(한글 60자) 이내인가?
- [ ] 이미지 내 텍스트를 alt에 포함했는가?
- [ ] "이미지", "사진", 파일명을 alt로 쓰지 않았는가?

접근성 개선은 장애인 사용자뿐만 아니라 이미지 로딩 실패 시 모든 사용자에게 대안을 제공한다. SEO 관점에서도 구글 이미지 검색 노출에 직접 영향을 미친다.`,
  },
  {
    slug: "google-title-pixel-cutoff-guide",
    title: "구글 검색 제목·설명 잘림 방지 - 픽셀 단위 글자수 계산",
    description: "구글 SERP에서 제목과 메타 설명이 잘리는 픽셀 기준을 이해하고, 한글·영문 혼용 문서에서 실제 표시 가능한 글자수를 계산하는 방법을 설명합니다.",
    publishedAt: "2026-05-03",
    metaTitle: "구글 검색 제목 잘림 방지 - 픽셀 글자수 계산법",
    metaDescription: "구글 title은 600px(한글 약 22-25자), meta description은 920px(한글 약 80자) 제한. 픽셀 단위 계산법과 모바일/데스크톱 차이를 정리합니다.",
    targetKeywords: ["구글 제목 글자수", "메타 설명 글자수", "SERP 잘림", "픽셀 글자수"],
    category: "텍스트 편집",
    tags: ["SEO", "구글검색", "메타태그"],
    aeoQuestion: "구글 검색 결과에서 제목이 잘리지 않으려면 몇 글자 이내로 써야 하나요?",
    aeoAnswer: "구글 title 표시 가능 너비는 약 600px입니다. 한글 1자는 약 22-24px이므로 한글 기준 22-25자 이내, 영문 기준 55-60자 이내를 권장합니다. 모바일 SERP는 데스크톱보다 표시 공간이 약 20% 좁습니다.",
    cta: { text: "글자수 세기 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "워드프레스 메타 설명 작성 가이드", link: "/blog/wordpress-meta-description-guide/" },
      { text: "블로그 SEO 체크리스트", link: "/blog/blog-seo-text-optimization-checklist/" },
    ],
    outlinks: [
      { text: "Google Search Central 문서", link: "https://developers.google.com/search/docs/appearance/title-link", description: "Google 공식" },
    ],
    canonicalUrl: "https://texturb.com/blog/google-title-pixel-cutoff-guide/",
    content: `구글 SERP에서 SEO 최적화된 제목이 "..." 으로 잘린다면, 글자수가 아닌 픽셀 너비를 초과한 것이다. Moz의 2024년 분석에 따르면 상위 10위 페이지 중 36%가 title이 SERP에서 잘린 상태로 노출된다. 픽셀 기준을 이해하면 이 문제를 완전히 해결할 수 있다.

## 구글의 픽셀 기준

구글은 글자 '개수'가 아닌 픽셀 너비로 표시 가능 범위를 결정한다.

| 요소 | 최대 픽셀 | 한글 환산 | 영문 환산 |
|---|---|---|---|
| Title | 600px | 22-25자 | 55-60자 |
| Meta Description | 920px | 75-85자 | 150-160자 |
| URL | 가변적 | - | - |

### 글자별 픽셀 폭 차이

- **한글 1자**: 약 22-24px (전각 문자)
- **영문 대문자**: 약 10-12px
- **영문 소문자**: 약 7-8px
- **숫자**: 약 7-9px
- **공백**: 약 4px

한글과 영문이 혼합된 제목("SEO 최적화 - 글자수 가이드")에서는 각 문자의 픽셀 폭을 가중평균해야 실제 표시 가능 분량을 계산할 수 있다.

## 모바일 vs 데스크톱 차이

구글 모바일 SERP는 데스크톱보다 title 표시 너비가 약 20% 좁다.

> **실무 기준**: 한글 제목은 20자 이내, 영문은 50자 이내로 작성하면 모바일·데스크톱 모두에서 잘림 없이 표시된다.

## 구글의 title 자동 재작성

2021년부터 구글은 자체 판단으로 title을 변경할 수 있다. 자동 재작성이 발생하는 주요 원인:

1. title과 H1이 지나치게 다를 때
2. title에 사이트 이름이 반복될 때
3. 키워드 스터핑이 감지될 때
4. title이 너무 짧거나(5자 미만) 너무 길 때

Search Console에서 "실제 검색 결과에 표시된 제목"과 "원본 title"을 비교해 재작성 여부를 확인할 수 있다.

## 실무 최적화 공식

**한글 제목**: \`핵심 키워드(10-15자) + 구분자(|, -, :) + 부가 설명(5-10자)\`

예시:
- 좋은 예: \`글자수 세기 도구 - 공백 포함·제외 계산 | Texturb\`
- 피해야 할 예: \`Texturb - 글자수 세기, 단어수, 문장수, 문단수, 줄수 카운터 무료 온라인 도구\`

**Meta description**: 핵심 키워드를 앞쪽에 배치하고, 사용자가 클릭해야 할 이유(CTR 유도)를 담는다.

## 실시간 확인 방법

Google Search Console > URL 검사 > "Google 색인" 섹션에서 구글이 실제로 인식하는 title과 description을 확인할 수 있다. 발행 전에는 Texturb 글자수 도구로 현재 입력 중인 제목의 글자수를 실시간 체크하면 된다.`,
  },
  {
    slug: "vocabulary-diversity-analysis",
    title: "텍스트 분석으로 내 글의 어휘 다양성 높이는 방법",
    description: "TTR(Type-Token Ratio) 지표를 활용해 글의 어휘 다양성을 측정하고, 단조로운 반복 표현을 개선하는 구체적인 방법을 설명합니다.",
    publishedAt: "2026-05-04",
    metaTitle: "어휘 다양성 높이기 - TTR 분석과 개선 방법",
    metaDescription: "TTR(어휘 다양성 지수) 0.4-0.6이 양호한 글. 반복 단어 20% 초과 시 독자 피로 급증. 텍스트 분석으로 어휘를 개선하는 실전 방법을 소개합니다.",
    targetKeywords: ["어휘 다양성", "TTR", "텍스트 분석", "반복 표현 제거"],
    category: "텍스트 편집",
    tags: ["어휘다양성", "텍스트분석", "글쓰기"],
    aeoQuestion: "내 글의 어휘 다양성을 어떻게 측정하나요?",
    aeoAnswer: "TTR(Type-Token Ratio)을 사용합니다. 전체 단어 수에서 고유 단어 수가 차지하는 비율이며, 0.4-0.6이 일반적으로 양호한 범위입니다. 반복 단어 비율이 20%를 넘으면 독자 피로도가 급격히 증가합니다.",
    cta: { text: "텍스트 분석 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "반복 단어 제거 가이드", link: "/blog/repeated-word-removal-guide/" },
      { text: "글자수 세기", link: "/tools/char-counter/" },
    ],
    outlinks: [
      { text: "Nielsen Norman Group - 가독성 연구", link: "https://www.nngroup.com/articles/legibility-readability-comprehension/", description: "Nielsen Norman Group" },
    ],
    canonicalUrl: "https://texturb.com/blog/vocabulary-diversity-analysis/",
    content: `블로그 글을 쓰고 나서 "왠지 단조롭다"는 느낌이 든다면 어휘 다양성 부족이 원인일 수 있다. Nielsen Norman Group의 연구에 따르면 반복 단어 비율이 20%를 초과하면 독자 집중도가 40% 이상 떨어진다. 텍스트를 수치로 분석하면 직관보다 정확하게 문제를 찾아낼 수 있다.

## TTR(Type-Token Ratio)란?

TTR은 글의 어휘 다양성을 측정하는 기본 지표다.

> **TTR = 고유 단어 수 ÷ 전체 단어 수 × 100**

예시: 100단어 글에 고유 단어가 45개라면 TTR = 45%.

| TTR 범위 | 평가 |
|---|---|
| 70% 이상 | 매우 다양 (전문 학술글) |
| 40-60% | 양호 (블로그·기사) |
| 30-40% | 개선 권장 |
| 30% 미만 | 단조로움, 반복 심각 |

단, TTR은 글이 길수록 낮아지는 경향이 있다. 2,000자 이상 글에서는 30-45%도 정상 범위로 볼 수 있다.

## 어휘 다양성 측정 방법

### 1. 텍스트 분석 도구 활용

Texturb와 같은 텍스트 분석 도구에 글을 붙여넣으면 단어 빈도, 반복 단어 목록, 어휘 다양성 점수를 바로 확인할 수 있다.

### 2. 고빈도 단어 추출

단어 빈도 분석에서 상위 10개 단어를 추출한다. 내용어(명사·동사·형용사) 중 특정 단어가 전체의 3% 이상이면 동의어 교체를 검토한다.

### 3. MATTR(Moving Average TTR)

긴 글에서는 MATTR을 사용한다. 100단어 단위 윈도우를 이동시키며 TTR을 측정해 평균을 낸다. 일관된 다양성 유지 여부를 확인하기에 적합하다.

## 어휘 다양성 개선 5단계

**1단계**: 전체 텍스트에서 단어 빈도 분석 실행
**2단계**: 상위 5개 고빈도 단어 식별
**3단계**: 동의어·유의어 사전으로 대안 탐색 (국립국어원 우리말샘 활용)
**4단계**: 문맥에 맞는 단어로 교체 (의미 변형 주의)
**5단계**: 교체 후 재분석으로 TTR 변화 확인

동의어 사전을 적극 활용하면 TTR을 10-15%p 개선할 수 있다.

## 자주 반복되는 한국어 표현과 대안

| 반복 표현 | 대안 표현 |
|---|---|
| 중요하다 | 핵심적이다, 필수적이다, 결정적이다 |
| 다양한 | 여러, 다채로운, 폭넓은 |
| 방법 | 방식, 기법, 절차, 수단 |
| 확인하다 | 점검하다, 검토하다, 파악하다 |
| 제공하다 | 공급하다, 지원하다, 전달하다 |

## 주의사항

어휘를 다양하게 한다고 억지로 생소한 단어를 쓰면 오히려 가독성이 떨어진다. 기술 문서나 법령에서는 용어 통일이 더 중요하므로, 장르에 따라 적정 TTR 기준이 다르다는 점을 고려해야 한다.`,
  },
  {
    slug: "repeated-word-removal-guide",
    title: "반복 단어 제거 - 문서 품질 올리는 텍스트 정리법",
    description: "문서에서 반복 단어를 찾아 제거하는 방법을 단계별로 설명하고, 국립국어원 공문서 기준과 실용적인 동의어 대체 전략을 함께 소개합니다.",
    publishedAt: "2026-05-04",
    metaTitle: "반복 단어 제거 - 문서 품질 올리는 텍스트 정리법",
    metaDescription: "국립국어원 공문서 기준: 동일 단어 한 문단 내 2회 이상 반복 지양. 반복 빈도 분석 → 동의어 교체 → 재검토 3단계 정리법을 안내합니다.",
    targetKeywords: ["반복 단어 제거", "텍스트 정리", "문서 품질", "동의어 교체"],
    category: "텍스트 편집",
    tags: ["텍스트정리", "반복단어", "문서작성"],
    aeoQuestion: "문서에서 반복 단어를 효과적으로 제거하는 방법은 무엇인가요?",
    aeoAnswer: "단어 빈도 분석으로 고빈도 단어를 찾은 뒤, 국립국어원 우리말샘이나 동의어 사전으로 문맥에 맞는 대안을 선택해 교체합니다. 한 문단 내 같은 단어 2회 이상 반복은 국립국어원 공문서 작성 기준에서도 지양합니다.",
    cta: { text: "텍스트 편집 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "어휘 다양성 분석 방법", link: "/blog/vocabulary-diversity-analysis/" },
      { text: "글자수 세기 도구", link: "/tools/char-counter/" },
    ],
    outlinks: [
      { text: "국립국어원 우리말샘 (동의어 사전)", link: "https://opendict.korean.go.kr", description: "국립국어원" },
    ],
    canonicalUrl: "https://texturb.com/blog/repeated-word-removal-guide/",
    content: `보고서를 검토하다 보면 "해당 방안의 방안을 검토하여 검토 결과를..." 같은 표현이 눈에 띈다. 같은 단어가 한 문단에 여러 번 반복되면 글의 신뢰도와 가독성이 모두 낮아진다. Nielsen Norman Group은 반복 단어가 많은 텍스트에서 독자 집중도가 40% 이상 하락한다고 보고했다.

## 반복 단어가 문서 품질에 미치는 영향

반복 표현의 유형은 크게 세 가지다.

| 유형 | 예시 | 영향 |
|---|---|---|
| 동일 단어 반복 | "문제를 문제라고 할 수 없는 문제" | 신뢰도 하락 |
| 동의어 남발 | "확인·점검·검토·체크" 혼용 | 용어 통일성 저하 |
| 패턴 반복 | 모든 문단이 "~해야 한다"로 끝남 | 단조로움 |

국립국어원 공문서 작성법은 "동일한 단어가 한 문단 내 2회 이상 반복되면 독자의 흐름을 방해한다"고 명시한다.

## 3단계 반복 단어 제거 프로세스

### 1단계: 빈도 분석으로 고빈도 단어 추출

텍스트 분석 도구에 문서를 붙여넣으면 단어별 등장 횟수를 확인할 수 있다. 전체 단어 수의 3% 이상을 차지하는 단어가 타겟이다.

### 2단계: 문맥별 교체 단어 선택

단순히 유의어로 바꾸면 문맥이 어색해질 수 있다. 다음 기준으로 교체 단어를 선택한다.

- **공식 문서**: 국립국어원 표준국어대사전에 등재된 단어 우선
- **블로그·SNS**: 독자층 눈높이에 맞는 일상어 선택
- **기술 문서**: 용어 통일이 우선이므로 동의어 교체 최소화

> 국립국어원 우리말샘(opendict.korean.go.kr)에서 무료로 동의어·유의어를 검색할 수 있다.

### 3단계: 교체 후 소리 내어 읽기

교체한 문장을 소리 내어 읽어보면 어색한 표현이 바로 드러난다. 유의어라도 문장 속 위치에 따라 어감이 달라지기 때문이다.

## 자주 반복되는 단어와 교체 예시

**"확인하다"** → 점검하다 / 검토하다 / 살피다 / 파악하다 / 확인하다(첫 번째 사용만)
**"진행하다"** → 수행하다 / 실행하다 / 추진하다 / 처리하다
**"문제"** → 이슈 / 사안 / 과제 / 장애 요소
**"중요하다"** → 핵심적이다 / 필수적이다 / 결정적이다 / 긴요하다

## Microsoft Word에서 빠르게 찾기

찾기(Ctrl+F) 기능으로 특정 단어의 등장 횟수를 확인할 수 있다. "고급 찾기"에서 "강조 표시"를 클릭하면 문서 전체에서 해당 단어가 시각적으로 표시되어 반복 패턴을 한눈에 파악할 수 있다.

## 반복 제거 체크리스트

- [ ] 단어 빈도 분석으로 상위 10개 단어를 추출했는가?
- [ ] 3% 초과 단어에 동의어 교체를 적용했는가?
- [ ] 같은 문단에 동일 단어가 2회 이상 반복되지 않는가?
- [ ] 교체 후 전체 문맥이 자연스러운가?
- [ ] 기술 용어는 통일성을 유지하며 교체했는가?`,
  },
  {
    slug: "bracket-style-publishing-guide",
    title: "대괄호·소괄호 스타일 통일 - 국내 출판 편집 기준",
    description: "국립국어원과 국내 출판 표준에 따른 소괄호()와 대괄호[] 사용 기준을 정리하고, APA·ISO 690 국제 서지 표기 기준과의 차이를 설명합니다.",
    publishedAt: "2026-05-04",
    metaTitle: "소괄호·대괄호 스타일 통일 - 한국 출판 편집 기준",
    metaDescription: "소괄호()는 보충 설명, 대괄호[]는 원문 수정·추가. 국립국어원·APA 7판·ISO 690 기준의 차이를 사례와 함께 설명합니다.",
    targetKeywords: ["소괄호 대괄호 차이", "괄호 사용법", "출판 편집 기준", "APA 괄호"],
    category: "텍스트 편집",
    tags: ["괄호사용법", "출판편집", "문서작성"],
    aeoQuestion: "한국 문서에서 소괄호()와 대괄호[]는 어떻게 구분해서 쓰나요?",
    aeoAnswer: "국립국어원 기준에서 소괄호()는 보충 설명이나 주석에, 대괄호[]는 원문을 수정하거나 내용을 추가할 때 사용합니다. APA 7판에서는 인용구 내 추가 정보를 대괄호, 생략은 [...] 으로 표기합니다.",
    cta: { text: "텍스트 편집 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "따옴표·괄호 스타일 통일 가이드", link: "/blog/quotation-bracket-style-guide/" },
      { text: "글자수 세기 도구", link: "/tools/char-counter/" },
    ],
    outlinks: [
      { text: "국립국어원 한국어 어문 규범", link: "https://www.korean.go.kr/front/page/pageView.do?page_id=P000090&mn_id=30", description: "국립국어원 공식" },
    ],
    canonicalUrl: "https://texturb.com/blog/bracket-style-publishing-guide/",
    content: `편집자 없이 자료집을 만들다가 소괄호와 대괄호를 뒤섞어 쓴 경험이 있다면, 그 혼란이 독자에게도 그대로 전달된다. 국내 주요 출판사 스타일 가이드 분석에 따르면 괄호 오용은 편집 교정 단계에서 가장 자주 발생하는 오류 유형 3위 안에 든다.

## 국립국어원 기본 기준

국립국어원 한국어 어문 규범(문장 부호 규정)의 괄호 사용 기준:

### 소괄호 ( )

원문에 대한 **보충 설명이나 주석**을 달 때 사용한다.

- 예시: "그는 BMP(비트맵) 형식으로 이미지를 저장했다."
- 예시: "법인세(法人稅)는 법인의 소득에 부과된다."
- 숫자 병기: "삼십(30)일 이내에 제출하시오."

### 대괄호 [ ]

인용문 안에서 **원문을 수정하거나 설명을 추가**할 때 사용한다.

- 예시: "그는 그것[텍스트 편집기]이 필요하다고 했다."
- 원문 오류 표시: "경기도 성남[성남]시에서"
- 이중 괄호: 소괄호 안에 소괄호를 써야 할 때 대괄호로 교체

## APA 7판 기준 (학술 문서)

APA 7판(American Psychological Association 출판 매뉴얼)의 괄호 규칙:

| 용도 | 기호 | 예시 |
|---|---|---|
| 인용 내 추가 정보 | [ ] | "그는 [AI를 사용해] 글을 썼다" |
| 인용 내 생략 | [...] | "텍스트는 [...] 중요하다" |
| 통계·수식 | ( ) | 평균값 (M = 3.45, SD = 0.92) |
| 연도·쪽수 | ( ) | (Kim, 2024, p. 45) |

## ISO 690 서지 표기 기준

국제 서지 표준 ISO 690에서는 자료 유형 표시에 대괄호를 사용한다.

- [비디오 자료], [데이터세트], [소프트웨어]
- 이 관례는 국내 대학 도서관 목록에도 적용된다.

## 출판사별 스타일 가이드 차이

동일한 규범도 출판사마다 세부 적용이 다를 수 있다. 일관성을 위해 다음 순서로 결정하면 된다.

1. **사내/출판사 스타일 가이드** (최우선)
2. **국립국어원 한국어 어문 규범**
3. **해당 분야 국제 표준** (APA, ISO, Chicago)

## 단계별 괄호 통일 체크리스트

- [ ] 소괄호를 보충 설명 목적으로만 사용했는가?
- [ ] 대괄호를 인용 수정/추가 목적으로만 사용했는가?
- [ ] 이중 소괄호 대신 대괄호로 교체했는가?
- [ ] 학술 인용에서 APA/ISO 기준을 일관되게 적용했는가?
- [ ] 문서 전체에서 동일한 괄호 스타일이 유지되는가?

괄호 스타일 통일은 단순 교열을 넘어 문서의 신뢰도를 높이는 작업이다. 처음부터 스타일 가이드를 정해두면 후속 교정 비용을 크게 줄일 수 있다.`,
  },
  {
    slug: "html-entity-encoding-guide",
    title: "HTML 엔티티 디코딩·인코딩 완전 가이드",
    description: "HTML 엔티티의 동작 원리와 필수 5개 문자, W3C HTML5 명세의 Named Character Reference, XSS 방지를 위한 인코딩 실무를 설명합니다.",
    publishedAt: "2026-05-05",
    metaTitle: "HTML 엔티티 인코딩 가이드 - &amp; &lt; &gt; 완전 정리",
    metaDescription: "HTML 필수 엔티티 5개(&amp; &lt; &gt; &quot; &apos;)와 W3C 2,231개 named character reference. XSS 방지 인코딩 실무를 정리합니다.",
    targetKeywords: ["HTML 엔티티", "HTML 인코딩", "HTML 디코딩", "&amp", "XSS 방지"],
    category: "텍스트 편집",
    tags: ["HTML", "인코딩", "웹개발"],
    aeoQuestion: "HTML에서 &amp; &lt; &gt; 같은 특수 기호는 왜 변환해야 하나요?",
    aeoAnswer: "HTML 파서는 <, >, & 문자를 태그와 엔티티의 시작으로 해석합니다. 이 문자를 텍스트로 표시하려면 각각 &lt;, &gt;, &amp;로 변환해야 합니다. 변환하지 않으면 HTML 구조가 깨지거나 XSS 공격에 취약해집니다.",
    cta: { text: "텍스트 인코딩 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "URL 인코딩 가이드", link: "/blog/url-encoding-decoding-guide/" },
      { text: "Base64 인코딩 가이드", link: "/blog/base64-encoding-guide/" },
    ],
    outlinks: [
      { text: "W3C HTML5 Named Character References", link: "https://html.spec.whatwg.org/multipage/named-characters.html", description: "W3C 공식" },
    ],
    canonicalUrl: "https://texturb.com/blog/html-entity-encoding-guide/",
    content: `웹 게시판에서 코드를 붙여넣었을 때 꺾쇠 괄호가 사라지거나 HTML 태그로 실행되는 현상을 본 적이 있을 것이다. 이는 HTML 엔티티 인코딩 없이 사용자 입력을 그대로 렌더링했기 때문이다. OWASP의 분석에 따르면 XSS(Cross-Site Scripting) 공격의 80% 이상이 이런 인코딩 실패에서 비롯된다.

## HTML 엔티티란?

HTML 엔티티(Entity)는 HTML 파서가 특수 문자를 올바르게 표시하도록 변환한 표현이다. \`&\` 로 시작해 \`;\` 로 끝나는 형식이다.

## 필수 5개 HTML 엔티티

| 원문자 | 엔티티 | 용도 |
|---|---|---|
| & | &amp; | 앰퍼샌드 |
| < | &lt; | 여는 꺾쇠 |
| > | &gt; | 닫는 꺾쇠 |
| " | &quot; | 큰따옴표 |
| ' | &apos; | 작은따옴표 |

이 5개는 HTML5 명세에서 필수로 정의된 엔티티다. 특히 \`<\`와 \`>\`는 HTML 태그 시작과 끝으로 파싱되므로, 텍스트에 포함될 때 반드시 변환해야 한다.

## W3C HTML5 Named Character Reference

W3C HTML5 명세는 2,231개의 Named Character Reference를 정의한다. 자주 사용하는 것들:

| 기호 | 엔티티 | 사용 예 |
|---|---|---|
| © | &copy; | 저작권 표시 |
| ® | &reg; | 등록 상표 |
| ™ | &trade; | 상표 |
| · | &middot; | 중간점 |
| — | &mdash; | 대시 |
| → | &rarr; | 오른쪽 화살표 |
| ≥ | &ge; | 크거나 같음 |

## 엔티티 vs 숫자 참조

HTML 엔티티는 Named(이름)와 Numeric(숫자) 두 가지 형식이 있다.

- **Named**: \`&copy;\` → ©
- **Decimal**: \`&#169;\` → ©
- **Hex**: \`&#xA9;\` → ©

모두 동일한 문자를 표시하지만, 명세에 이름이 정의된 엔티티는 Named 형식이 가독성 면에서 권장된다.

## XSS 방지를 위한 인코딩 실무

사용자 입력을 HTML에 출력할 때는 반드시 엔티티 인코딩을 적용해야 한다.

\`\`\`php
// PHP
echo htmlspecialchars($user_input, ENT_QUOTES, 'UTF-8');
\`\`\`

\`\`\`python
# Python
import html
safe_output = html.escape(user_input, quote=True)
\`\`\`

\`\`\`javascript
// JavaScript (DOM 기반)
element.textContent = user_input; // 자동 이스케이프
// innerHTML 사용 시 DOMPurify 등 라이브러리 필요
\`\`\`

## URL 인코딩과의 차이

HTML 엔티티와 URL 퍼센트 인코딩은 완전히 다르다.

- \`&\`의 HTML 엔티티: \`&amp;\`
- \`&\`의 URL 인코딩: \`%26\`

URL 파라미터에 HTML을 포함할 때 두 인코딩이 중첩될 수 있으므로 계층을 명확히 구분해야 한다.`,
  },
  {
    slug: "url-encoding-decoding-guide",
    title: "URL 인코딩과 디코딩 - 특수문자 처리 방법",
    description: "RFC 3986 기준의 URL 퍼센트 인코딩 원리와 한글 URL 처리, encodeURIComponent vs encodeURI 차이, 최대 URL 길이 제한을 사례별로 설명합니다.",
    publishedAt: "2026-05-05",
    metaTitle: "URL 인코딩 디코딩 - 한글·특수문자 처리 방법",
    metaDescription: "한글 URL은 UTF-8 퍼센트 인코딩(%ED%95%9C%EA%B8%80). RFC 3986 예약 문자 18개, encodeURI vs encodeURIComponent 차이를 실전 예시로 설명합니다.",
    targetKeywords: ["URL 인코딩", "URL 디코딩", "퍼센트 인코딩", "한글 URL", "encodeURIComponent"],
    category: "텍스트 편집",
    tags: ["URL인코딩", "웹개발", "특수문자"],
    aeoQuestion: "URL에서 한글이 %로 시작하는 코드로 바뀌는 이유는 무엇인가요?",
    aeoAnswer: "URL은 ASCII 문자만 안전하게 전송할 수 있습니다. 한글처럼 ASCII 범위 밖의 문자는 UTF-8로 인코딩한 뒤 각 바이트를 %XX 형식으로 변환하는 '퍼센트 인코딩'을 적용합니다. '한글'은 %ED%95%9C%EA%B8%80으로 인코딩됩니다.",
    cta: { text: "텍스트 인코딩 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "HTML 엔티티 인코딩 가이드", link: "/blog/html-entity-encoding-guide/" },
      { text: "Base64 인코딩 가이드", link: "/blog/base64-encoding-guide/" },
    ],
    outlinks: [
      { text: "RFC 3986 - URI 표준", link: "https://www.rfc-editor.org/rfc/rfc3986", description: "IETF" },
    ],
    canonicalUrl: "https://texturb.com/blog/url-encoding-decoding-guide/",
    content: `한국어 검색어를 URL로 복사하면 알아볼 수 없는 "%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94" 같은 문자열로 바뀐다. 이것이 URL 퍼센트 인코딩이다. 사용자가 겪는 링크 오류, 폼 전송 실패, 검색 파라미터 손상 중 상당수가 이 인코딩을 올바르게 처리하지 않은 데서 발생한다.

## URL 퍼센트 인코딩 원리

RFC 3986(URI 표준)에 따르면 URL에 사용할 수 있는 문자는:
- **Unreserved characters**: A-Z, a-z, 0-9, -, _, ., ~
- **Reserved characters**: 구분자 역할을 하는 18개 문자

Reserved 문자 목록: \`: / ? # [ ] @ ! $ & ' ( ) * + , ; =\`

이 범위 밖의 문자(한글, 일본어, 특수 기호 등)는 퍼센트 인코딩으로 변환해야 한다.

## 한글 URL 인코딩 과정

한글 "안녕"이 URL에서 변환되는 과정:

1. UTF-8 인코딩: \`안\` → \`EC 95 88\`, \`녕\` → \`EB 85 95\`
2. 퍼센트 인코딩: 각 바이트 앞에 \`%\` 추가
3. 결과: \`%EC%95%88%EB%85%95\`

현대 브라우저는 주소창에 한글을 입력해도 내부적으로는 인코딩된 URL을 사용한다. 화면에는 한글로 표시되지만 실제 전송되는 값은 인코딩된 형태다.

## 공백 처리 - %20 vs +

공백을 인코딩하는 방법이 두 가지라는 점이 자주 혼란을 일으킨다.

| 방식 | 사용 맥락 |
|---|---|
| %20 | URL 경로, 쿼리스트링 일반 |
| + | HTML form 데이터 (application/x-www-form-urlencoded) |

검색 URL에서 \`?q=안녕+세상\` 처럼 \`+\`가 쓰인 것은 form 데이터 인코딩 방식이다. 일반 URL에서는 \`%20\`을 사용한다.

## encodeURI vs encodeURIComponent

JavaScript의 두 함수는 인코딩 범위가 다르다.

\`\`\`javascript
encodeURI("https://example.com/검색?q=안녕")
// https://example.com/%EA%B2%80%EC%83%89?q=%EC%95%88%EB%85%95
// 예약 문자(://?=)는 인코딩하지 않음

encodeURIComponent("안녕 세상")
// %EC%95%88%EB%85%95%20%EC%84%B8%EC%83%81
// 공백, 예약 문자 모두 인코딩
\`\`\`

- **URL 전체를 인코딩**: \`encodeURI\`
- **파라미터 값만 인코딩**: \`encodeURIComponent\`

## URL 최대 길이 제한

| 환경 | 최대 길이 |
|---|---|
| Chrome | 약 2MB |
| Internet Explorer | 2,083자 |
| Apache 서버 기본값 | 8,190바이트 |
| Nginx 기본값 | 4,096바이트 |

한글 URL은 인코딩 후 글자당 9바이트(3바이트 UTF-8 × 3자리 %XX)가 되므로 서버 설정의 URL 길이 제한을 쉽게 초과할 수 있다.

## 다음 단계

URL 인코딩 처리는 서버·클라이언트 양쪽에서 일관되게 적용해야 한다. 다음으로 HTML 엔티티 인코딩과의 차이를 이해하면 웹 보안의 두 가지 핵심 계층을 모두 다룰 수 있다.`,
  },
  {
    slug: "base64-encoding-guide",
    title: "Base64 인코딩 텍스트 변환 실무 활용",
    description: "Base64 인코딩의 원리와 33% 크기 증가 이유, 이메일 첨부파일·Data URI·JWT 토큰 등 실무 활용 사례를 설명합니다.",
    publishedAt: "2026-05-05",
    metaTitle: "Base64 인코딩 실무 활용 - 원리와 사용 사례 완전 정리",
    metaDescription: "Base64: 3바이트→4문자 변환으로 크기 33% 증가. 이메일 MIME 첨부파일, Data URI, JWT 토큰의 실제 활용법을 정리합니다.",
    targetKeywords: ["Base64 인코딩", "Base64 변환", "Data URI", "Base64 디코딩"],
    category: "텍스트 편집",
    tags: ["Base64", "인코딩", "웹개발"],
    aeoQuestion: "Base64 인코딩을 사용하는 이유는 무엇인가요?",
    aeoAnswer: "Base64는 바이너리 데이터를 ASCII 텍스트로 변환해 텍스트 전용 시스템(이메일, XML, JSON)에서 안전하게 전송하기 위해 사용합니다. 3바이트를 4문자로 변환하므로 데이터 크기가 약 33% 증가하는 단점이 있습니다.",
    cta: { text: "Base64 인코딩 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "HTML 엔티티 인코딩 가이드", link: "/blog/html-entity-encoding-guide/" },
      { text: "URL 인코딩 가이드", link: "/blog/url-encoding-decoding-guide/" },
    ],
    outlinks: [
      { text: "RFC 4648 - Base64 표준", link: "https://www.rfc-editor.org/rfc/rfc4648", description: "IETF" },
    ],
    canonicalUrl: "https://texturb.com/blog/base64-encoding-guide/",
    content: `이미지를 CSS에 직접 삽입하거나 API 응답에 파일을 포함시킬 때 Base64를 자주 만난다. RFC 4648 표준에 정의된 Base64 알파벳은 A-Z, a-z, 0-9, +, / 64개 문자다. 이 64개 문자는 모든 ASCII 호환 시스템에서 안전하게 전송된다.

## Base64 인코딩 원리

3바이트(24비트) 바이너리를 6비트씩 4개 그룹으로 나눈 뒤, 각 그룹을 Base64 알파벳 문자 하나에 대응시킨다.

- 원본 3바이트 → 인코딩 후 4문자
- **크기 증가율**: 정확히 4/3배 = 약 33%

입력 데이터가 3의 배수가 아니면 \`=\` 패딩 문자로 채운다.

\`\`\`
"Man" → 바이너리 01001101 01100001 01101110
→ 6비트 분할: 010011 010110 000101 101110
→ TWFu
\`\`\`

## 주요 활용 사례

### 1. 이메일 MIME 첨부파일 (RFC 2045)

이메일 프로토콜 SMTP는 텍스트 전용이다. PDF, 이미지 같은 바이너리 첨부파일을 전송하려면 Base64로 변환해야 한다. 이것이 이메일 첨부파일이 느리게 전송되는 이유 중 하나다(파일 크기 33% 증가).

### 2. Data URI Scheme

HTML/CSS에서 외부 파일 요청 없이 리소스를 직접 포함할 때 사용한다.

\`\`\`html
<img src="data:image/png;base64,iVBORw0KGgo...">
\`\`\`

작은 아이콘(1KB 미만)은 Data URI가 HTTP 요청을 줄여 성능에 유리하다. 큰 이미지는 오히려 파싱 비용이 증가한다.

### 3. JWT(JSON Web Token)

JWT의 헤더와 페이로드는 Base64URL로 인코딩된다. Base64URL은 기본 Base64에서 \`+\` → \`-\`, \`/\` → \`_\` 로 교체해 URL에서 안전하게 사용할 수 있다.

\`\`\`
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UifQ.xxx
\`\`\`

JWT는 서명된 데이터이므로 Base64 디코딩으로 내용을 확인할 수 있지만, 변조는 서명 검증으로 방지한다.

### 4. API 인증 (Basic Auth)

HTTP Basic Authentication은 \`username:password\`를 Base64로 인코딩한 값을 Authorization 헤더에 포함한다.

\`\`\`
Authorization: Basic dXNlcjpwYXNzd29yZA==
\`\`\`

Base64는 암호화가 아니므로 HTTPS 없이 사용하면 디코딩으로 즉시 내용이 노출된다.

## Base64 vs Base64URL

| 구분 | 알파벳 | 패딩 | 용도 |
|---|---|---|---|
| Base64 | A-Z a-z 0-9 + / | = | 이메일, Data URI |
| Base64URL | A-Z a-z 0-9 - _ | 생략 가능 | JWT, URL 파라미터 |

## 디코딩 확인

Base64 문자열이 주어지면 텍스트 도구로 쉽게 디코딩할 수 있다. \`=\` 패딩이 있으면 표준 Base64, 없으면 Base64URL일 가능성이 높다.`,
  },
  {
    slug: "markdown-cleanup-blog-migration",
    title: "마크다운 서식 정리 - 블로그 이전 시 불필요한 태그 제거",
    description: "워드프레스·티스토리·노션에서 블로그를 이전할 때 발생하는 불필요한 마크다운 태그와 HTML 잔여 코드를 정리하는 방법을 설명합니다.",
    publishedAt: "2026-05-06",
    metaTitle: "블로그 이전 마크다운 서식 정리 - 불필요한 태그 제거",
    metaDescription: "워드프레스→티스토리 이전 시 HTML 잔여 태그 평균 30-40개 발생. Pandoc, 정규식, 텍스트 도구로 마크다운을 깔끔하게 정리하는 방법을 안내합니다.",
    targetKeywords: ["마크다운 정리", "블로그 이전 태그 제거", "Pandoc", "마크다운 변환"],
    category: "텍스트 편집",
    tags: ["마크다운", "블로그이전", "텍스트정리"],
    aeoQuestion: "블로그 이전 시 마크다운 서식을 깨끗하게 정리하려면 어떻게 해야 하나요?",
    aeoAnswer: "먼저 Pandoc이나 텍스트 도구로 HTML 태그를 마크다운 또는 순수 텍스트로 변환합니다. 이후 정규식으로 잔여 HTML 태그를 제거하고, CommonMark 기준으로 서식을 통일합니다. 노션 내보내기 파일은 비표준 마크다운 문법이 포함될 수 있어 별도 처리가 필요합니다.",
    cta: { text: "텍스트 편집 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "ChatGPT 출력 텍스트 정리", link: "/blog/chatgpt-output-cleanup-guide/" },
      { text: "공백 텍스트 정리 가이드", link: "/blog/whitespace-cleanup-guide/" },
    ],
    outlinks: [
      { text: "Pandoc 공식 문서", link: "https://pandoc.org/", description: "Pandoc 오픈소스" },
    ],
    canonicalUrl: "https://texturb.com/blog/markdown-cleanup-blog-migration/",
    content: `블로그를 이전하면서 콘텐츠를 복사했더니 \`<div style="margin:0">\` 같은 HTML 태그가 마크다운 파일 곳곳에 남아 있다면, 이 잔여 태그가 새 플랫폼에서 렌더링 오류를 일으킨다. 워드프레스에서 티스토리로 이전하는 과정에서 HTML 잔여 태그가 평균 30-40개 발생한다는 보고가 있다.

## 마크다운 표준 - CommonMark

2014년에 제정된 CommonMark는 마크다운 문법의 통일 규격이다. 깃허브, 레딧, 스택오버플로 등 주요 플랫폼이 CommonMark를 기반으로 한다. 플랫폼마다 마크다운 구현이 달라 이전 시 서식이 깨지는 주원인은 CommonMark 준수 여부 차이다.

## 주요 마크다운 오염 원인

| 출처 | 주요 오염 요소 |
|---|---|
| 워드프레스 | 블록 에디터 div, 인라인 style 속성 |
| 티스토리 | \`<div class="tt_article_useless_p_margin">\` |
| 노션 내보내기 | 비표준 토글(\`<details>\`), callout 박스 |
| Google Docs | span 태그, font-size 인라인 스타일 |
| MS Word | mso-* 스타일, XML 네임스페이스 |

## 단계별 정리 방법

### 1단계: HTML → 마크다운 변환 (Pandoc)

Pandoc(MIT 라이선스)은 HTML을 마크다운으로 변환하는 가장 신뢰할 수 있는 도구다.

\`\`\`bash
pandoc -f html -t markdown input.html -o output.md
\`\`\`

CommonMark 호환 출력이 필요하면:

\`\`\`bash
pandoc -f html -t commonmark input.html -o output.md
\`\`\`

### 2단계: 정규식으로 잔여 HTML 태그 제거

변환 후에도 남은 HTML 태그는 정규식으로 제거한다.

\`\`\`
# 모든 HTML 태그 제거 패턴
<[^>]+>

# 인라인 style 속성 제거
\s*style="[^"]*"

# class 속성 제거
\s*class="[^"]*"
\`\`\`

텍스트 편집기(VS Code, Sublime Text)의 정규식 치환(Ctrl+H, 정규식 옵션 활성화)으로 일괄 처리할 수 있다.

### 3단계: 마크다운 서식 통일

- 제목: \`#\` 기반 ATX 스타일로 통일 (Setext 스타일 \`===\` 혼용 금지)
- 목록: \`-\` 또는 \`*\` 한 가지로 통일
- 굵은 글씨: \`**text**\` 로 통일 (\`__text__\` 혼용 금지)
- 줄바꿈: 공백 2개 대신 빈 줄로 문단 구분

### 4단계: 노션 특수 처리

노션 내보내기 파일의 특수 요소:
- **토글**: \`<details><summary>\` 태그로 출력됨 → 일반 섹션으로 재구성
- **Callout 박스**: 블록인용(\`)>\`) 으로 변환
- **데이터베이스 뷰**: 마크다운 테이블로 수동 재구성

## 이전 후 검증 체크리스트

- [ ] 본문에 \`<div>\`, \`<span>\`, \`<style>\` 태그가 남아 있지 않은가?
- [ ] 이미지 경로가 새 플랫폼에서 접근 가능한가?
- [ ] 제목 계층(H1→H2→H3)이 올바른가?
- [ ] 코드 블록이 올바른 언어 식별자로 표시되는가?
- [ ] 링크가 유효한가?`,
  },
  {
    slug: "resume-proofreading-cleanup",
    title: "자소서 맞춤법 점검 후 텍스트 정리하는 순서",
    description: "자기소개서 맞춤법을 점검한 뒤 글자수 맞추기, 중복 표현 제거, 서식 통일까지 단계별로 완성하는 텍스트 정리 순서를 안내합니다.",
    publishedAt: "2026-05-06",
    metaTitle: "자소서 맞춤법 점검 후 텍스트 정리 순서",
    metaDescription: "자소서 맞춤법 점검 → 글자수 조정 → 중복 표현 제거 → 서식 통일 4단계 정리법. 플랫폼별 글자수 기준과 공백 처리 방법을 함께 안내합니다.",
    targetKeywords: ["자소서 맞춤법", "자기소개서 글자수", "자소서 텍스트 정리"],
    category: "텍스트 편집",
    tags: ["자소서", "맞춤법", "텍스트정리"],
    aeoQuestion: "자기소개서 맞춤법 점검 후 어떤 순서로 텍스트를 정리해야 하나요?",
    aeoAnswer: "맞춤법 점검 → 글자수 조정(공백 포함·제외 확인) → 중복 표현 제거 → 문단 서식 통일 4단계로 진행합니다. 글자수 조정은 삭제보다 표현 압축으로 접근하고, 플랫폼별 공백 처리 기준을 미리 확인해야 합니다.",
    cta: { text: "자소서 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "자소서 공백 포함·제외 기준", link: "/blog/resume-space-inclusion-guide/" },
      { text: "포트폴리오 소개 글자수 기준", link: "/blog/portfolio-intro-length-guide/" },
    ],
    outlinks: [
      { text: "국립국어원 맞춤법 검사기", link: "https://speller.cs.pusan.ac.kr/", description: "부산대 한국어 맞춤법 검사기" },
    ],
    canonicalUrl: "https://texturb.com/blog/resume-proofreading-cleanup/",
    content: `취업 준비생 1,200명을 대상으로 한 설문에서 자소서 작성 중 가장 어려운 작업으로 "맞춤법 점검 후 글자수 조정"이 1위(38%)를 차지했다(잡코리아, 2023). 맞춤법을 교정하면 표현이 바뀌어 글자수가 달라지고, 글자수를 맞추다 보면 다시 표현이 어색해지는 순환 문제가 생긴다.

## 왜 순서가 중요한가?

자소서 작성 마지막 단계에서 맞춤법 검사와 글자수 조정을 동시에 하면 수정이 반복된다. 아래 순서대로 하면 한 단계씩 완성해 나갈 수 있다.

## 4단계 정리 순서

### 1단계: 맞춤법 점검 (수정 범위 확정)

텍스트를 확정하기 전에 맞춤법을 먼저 교정한다. 표현이 바뀌면 글자수도 바뀌므로, 글자수 조정 전에 완료해야 한다.

- **추천 도구**: 부산대 한국어 맞춤법 검사기, 네이버 맞춤법 검사기
- 맞춤법 검사기는 교열 제안이므로 문맥에 맞지 않는 수정은 거부한다
- 외래어·신조어는 검사기가 오류로 표시해도 실제로는 맞을 수 있다

### 2단계: 글자수 조정 (공백 포함·제외 확인)

맞춤법 교정 후 글자수를 확인한다. **플랫폼별 공백 처리 기준이 다르므로** 지원 플랫폼의 기준을 먼저 확인한다.

| 플랫폼 | 공백 처리 |
|---|---|
| 삼성 GSAT 입사지원 | 공백 포함 |
| LG 입사지원 | 공백 포함 |
| 카카오 채용 | 공백 제외 |
| 사람인 | 공백 포함 |

글자수가 초과하면 삭제가 아닌 **표현 압축**으로 해결한다. "~을 통해서 달성할 수 있었습니다" → "~을 달성했습니다" (13자 절감)

### 3단계: 중복 표현 제거

자소서에서 자주 나오는 중복 표현:
- "저는 ~했습니다"로 시작하는 문장이 많은 경우 → 주어 생략 또는 도입부 변형
- "~를 통해"가 한 문단에 3회 이상 → "~으로", "~덕분에" 로 교체
- 특정 단어(성장, 경험, 도전) 과잉 반복 → 유의어 교체

### 4단계: 서식 통일

- 마침표: 서술문 끝에는 마침표, 명사형으로 끝나는 항목은 생략 통일
- 숫자: 한 문서 내에서 아라비아숫자/한글 혼용 지양
- 문단 간격: 항목별 일관된 줄바꿈 적용

## 최종 제출 전 다음 단계

- [ ] 글자수를 플랫폼 기준으로 최종 확인했는가?
- [ ] 복사-붙여넣기 시 서식 오류가 없는가?
- [ ] 소제목이나 번호 매기기를 플랫폼이 지원하는가?

자소서 정리 순서를 지키면 수정 횟수가 줄고, 완성도도 높아진다.`,
  },
  {
    slug: "business-plan-length-guide",
    title: "기획서 작성 글자수 기준 - 임원 보고용 분량 설정법",
    description: "임원 보고용·팀 내부용·외부 제안용 기획서별 권장 글자수와 분량 배분법을 단계별로 안내합니다.",
    publishedAt: "2026-05-06",
    metaTitle: "기획서 글자수 기준 - 임원 보고용 분량 설정법",
    metaDescription: "임원 보고용 기획서 권장 분량 A4 3-5매(1,500-2,500자). 목적별·대상별 분량 기준과 핵심 요약 → 상세 내용 구조로 작성하는 방법을 안내합니다.",
    targetKeywords: ["기획서 글자수", "기획서 분량", "임원 보고 기획서", "기획서 작성법"],
    category: "텍스트 편집",
    tags: ["기획서", "비즈니스문서", "글자수기준"],
    aeoQuestion: "임원 보고용 기획서는 몇 장, 몇 글자로 써야 하나요?",
    aeoAnswer: "임원 보고용 기획서는 A4 3-5매(약 1,500-2,500자) 이내가 표준입니다. 핵심 요약을 첫 페이지에 배치하고, 상세 내용은 별첨으로 처리합니다. 임원은 평균 3분 이내에 문서를 검토하므로, 한 페이지당 600-800자를 초과하지 않아야 합니다.",
    cta: { text: "글자수 세기 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "보도자료 글자수 기준", link: "/blog/press-release-text-length-guide/" },
      { text: "이메일 작성 글자수 가이드", link: "/blog/email-writing-length-guide/" },
    ],
    outlinks: [
      { text: "행정안전부 공문서 작성 규정", link: "https://www.mois.go.kr", description: "행정안전부" },
    ],
    canonicalUrl: "https://texturb.com/blog/business-plan-length-guide/",
    content: `기획서를 20페이지로 작성했더니 임원이 "요약 좀 해줘"라는 반응만 돌아왔다면, 분량 기준을 다시 검토할 필요가 있다. 글로벌 컨설팅 기업 맥킨지의 내부 문서 가이드라인은 임원 보고자료의 슬라이드당 핵심 메시지 1개, 총 10슬라이드 이내를 원칙으로 한다. 이 원칙은 텍스트 기획서에도 그대로 적용된다.

## 기획서 유형별 권장 분량

| 기획서 유형 | 권장 매수 | 권장 글자수 |
|---|---|---|
| 임원 최종 보고 | A4 3-5매 | 1,500-2,500자 |
| 팀 내부 검토 | A4 5-10매 | 2,500-5,000자 |
| 외부 제안서 | A4 10-20매 | 5,000-10,000자 |
| 정부 과제 제안 | 규정 매수 | 규정 글자수 |

임원은 평균 3분 이내에 문서를 검토한다는 맥킨지 연구 결과에 따르면, A4 한 페이지에 600-800자가 3분 내 독해 가능한 분량이다.

## 임원 보고용 기획서 구조

### 1단계: 핵심 요약 (Executive Summary) - 1페이지

- 목적: 1문장
- 현황 및 문제: 3줄 이내
- 제안 방안: 3가지 이내 (불렛 포인트)
- 기대 효과: 수치 포함 1-2줄
- 필요 자원: 예산·인력·기간

이 부분이 전체 기획서의 첫 페이지를 채워야 하며, 600자를 초과하지 않는 것이 이상적이다.

### 2단계: 상황 분석 - 1-2페이지

- 시장 데이터나 내부 데이터로 뒷받침
- 표·그래프를 활용해 텍스트 양을 줄임
- 1페이지당 400-600자 기준

### 3단계: 방안 및 실행 계획 - 1-2페이지

- 타임라인(간트 차트 또는 표)
- 단계별 마일스톤

### 4단계: 상세 데이터 - 별첨

임원이 확인이 필요할 경우에 대비해 별첨으로 제공하되, 본문 분량에 포함하지 않는다.

## 분량을 초과했을 때 압축하는 방법

**텍스트 → 표**: "첫 번째는 A이고, 두 번째는 B이며, 세 번째는 C입니다" → 3행짜리 표

**문장 → 키워드**: "이 방안을 통해 비용을 절감하고 효율성을 높일 수 있습니다" → "비용 절감 + 효율 향상"

**배경 삭제**: 임원이 이미 아는 배경 설명은 과감히 제거한다.

## 단계별 작성 체크리스트

- [ ] Executive Summary가 1페이지(600자) 이내인가?
- [ ] 핵심 메시지가 첫 문장에 있는가?
- [ ] 데이터 출처가 명시되어 있는가?
- [ ] 표·그래프를 활용해 텍스트를 최소화했는가?
- [ ] 별첨으로 상세 내용을 분리했는가?`,
  },
  {
    slug: "portfolio-intro-length-guide",
    title: "포트폴리오 소개 글자수 - 디자이너·개발자·마케터별 기준",
    description: "직군별로 다른 포트폴리오 소개 글자수 기준과 각 섹션에 적합한 분량 배분 방법을 실제 사례와 함께 설명합니다.",
    publishedAt: "2026-05-07",
    metaTitle: "포트폴리오 소개 글자수 기준 - 직군별 완벽 가이드",
    metaDescription: "디자이너 포트폴리오 소개 200-400자, 개발자 150-300자, 마케터 300-500자. 섹션별 권장 분량과 가독성 높이는 작성법을 안내합니다.",
    targetKeywords: ["포트폴리오 글자수", "포트폴리오 소개 작성", "포트폴리오 분량"],
    category: "텍스트 편집",
    tags: ["포트폴리오", "직군별기준", "글자수"],
    aeoQuestion: "포트폴리오 자기소개는 몇 글자로 써야 하나요?",
    aeoAnswer: "직군에 따라 다릅니다. 디자이너는 200-400자(비주얼 중심이므로 간결하게), 개발자는 150-300자(기술 스택 목록이 주 역할), 마케터는 300-500자(성과 중심 스토리 필요)를 권장합니다. 어느 직군이든 500자를 초과하면 스크롤 없이 읽기 어렵습니다.",
    cta: { text: "글자수 세기 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "자소서 글자수 기준", link: "/blog/resume-proofreading-cleanup/" },
      { text: "기획서 글자수 기준", link: "/blog/business-plan-length-guide/" },
    ],
    outlinks: [
      { text: "링크드인 프로필 최적화 가이드", link: "/blog/linkedin-profile-optimization/" },
    ],
    canonicalUrl: "https://texturb.com/blog/portfolio-intro-length-guide/",
    content: `채용 담당자가 포트폴리오를 검토하는 평균 시간은 1분 미만이다(Ladders 아이트래킹 연구). 소개 텍스트가 길면 스크롤을 내리기 전에 이탈한다. 직군마다 포트폴리오를 보는 사람이 기대하는 정보가 다르므로, 글자수 기준도 달라진다.

## 직군별 포트폴리오 소개 권장 글자수

| 직군 | 소개 글자수 | 프로젝트 설명 (건당) | 주요 강점 |
|---|---|---|---|
| UI/UX 디자이너 | 200-400자 | 150-300자 | 비주얼이 주 설득 도구 |
| 그래픽 디자이너 | 150-300자 | 100-200자 | 이미지 > 텍스트 |
| 프론트엔드 개발자 | 150-300자 | 200-400자 | 기술 스택·링크 중요 |
| 백엔드 개발자 | 150-250자 | 200-350자 | 기술 스택·성능 지표 |
| 마케터 | 300-500자 | 250-400자 | KPI·성과 수치 중심 |
| 기획자 | 300-500자 | 200-400자 | 문제 정의·해결 과정 |

## 디자이너 포트폴리오 소개

디자이너는 작품이 말한다. 소개 텍스트는 간결하게 유지하고, 다음 3요소를 포함한다.

1. **전문 분야** (20자 이내): "모바일 앱 UX 디자인 3년 경력"
2. **작업 스타일** (50-100자): 어떤 문제를 어떻게 접근하는지
3. **연락처/링크** (필수): Behance, Dribbble 프로필 URL

소개가 400자를 초과하면 포트폴리오 썸네일이 밀려 첫 인상이 약해진다.

## 개발자 포트폴리오 소개

개발자 포트폴리오에서 소개 텍스트보다 **기술 스택 목록**과 **GitHub 링크**가 더 중요하다.

- **소개 (150-250자)**: 주력 스택 + 관심 분야 + 업무 스타일 1줄
- **기술 스택**: 뱃지/아이콘 형식으로 시각화
- **프로젝트 설명**: 문제 → 기술 선택 → 결과 구조, 건당 200-350자

성능 지표를 포함하면 차별화된다. "API 응답 시간 40% 단축"처럼 수치로 표현한다.

## 마케터 포트폴리오 소개

마케터는 성과로 말해야 한다. 소개 텍스트에 반드시 수치가 포함되어야 한다.

**나쁜 예 (수치 없음)**: "디지털 마케팅 캠페인 기획 및 운영 경험이 풍부합니다."

**좋은 예 (수치 포함)**: "B2B SaaS 스타트업에서 콘텐츠 마케팅으로 월 오가닉 트래픽 180% 성장, SQL 전환율 2.3% 달성."

소개 텍스트 300-500자에 주요 수치 2-3개를 배치하는 것이 최적이다.

## 공통 체크리스트

- [ ] 소개 텍스트가 스크롤 없이 한 화면에 들어오는가?
- [ ] 직군별 권장 글자수 범위 이내인가?
- [ ] 구체적인 수치나 성과가 포함되어 있는가?
- [ ] 연락처와 주요 링크가 소개 텍스트 근처에 있는가?`,
  },
  {
    slug: "line-ending-types-guide",
    title: "텍스트 줄바꿈 종류 - LF·CRLF·CR 차이와 변환 방법",
    description: "LF(Unix), CRLF(Windows), CR(구형 Mac)의 차이와 혼용 시 발생하는 문제, 편집기·Git에서 줄바꿈을 통일하는 방법을 설명합니다.",
    publishedAt: "2026-05-07",
    metaTitle: "LF CRLF CR 줄바꿈 차이와 변환 방법 완전 정리",
    metaDescription: "LF(\\n), CRLF(\\r\\n), CR(\\r)의 OS별 차이와 Git 설정(core.autocrlf), VS Code 줄바꿈 변환, Notepad++ 변환 방법을 안내합니다.",
    targetKeywords: ["LF CRLF 차이", "줄바꿈 변환", "줄바꿈 통일", "core.autocrlf"],
    category: "텍스트 편집",
    tags: ["줄바꿈", "LF", "CRLF", "Git"],
    aeoQuestion: "LF와 CRLF의 차이는 무엇이고, 어떻게 변환하나요?",
    aeoAnswer: "LF(\\n)는 Unix/Linux/Mac의 줄바꿈 방식이고, CRLF(\\r\\n)는 Windows의 방식입니다. 혼용 시 코드 diff가 오염되거나 스크립트 실행이 실패할 수 있습니다. VS Code에서는 우측 하단 'CRLF/LF' 버튼으로, Git에서는 core.autocrlf 설정으로 통일합니다.",
    cta: { text: "텍스트 편집 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "탭·스페이스 정리 가이드", link: "/blog/tab-space-cleanup-guide/" },
      { text: "BOM 제거 가이드", link: "/blog/bom-removal-encoding-guide/" },
    ],
    outlinks: [
      { text: "Git 공식 문서 - core.autocrlf", link: "https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf", description: "Git 공식" },
    ],
    canonicalUrl: "https://texturb.com/blog/line-ending-types-guide/",
    content: `GitHub에서 풀 리퀘스트를 열었더니 실제 코드 변경은 없는데 모든 줄이 변경된 것으로 표시된다면, LF와 CRLF 혼용 문제다. 팀 내에서 Windows·Mac·Linux 개발자가 섞여 있으면 이 문제가 반드시 발생한다.

## 줄바꿈 종류와 역사

줄바꿈 문자는 타자기 시대에서 비롯된다.

| 기호 | 이름 | 16진수 | 사용 OS |
|---|---|---|---|
| LF | Line Feed (\\n) | 0x0A | Unix, Linux, macOS (OS X 이후) |
| CR | Carriage Return (\\r) | 0x0D | 구형 Mac OS (OS 9 이전) |
| CRLF | CR + LF (\\r\\n) | 0x0D 0x0A | Windows |

현대 개발 환경에서 CR 단독은 거의 사라졌다. 문제는 CRLF(Windows)와 LF(Unix) 사이의 혼용이다.

## 혼용 시 발생하는 문제

**1. Git diff 오염**
Windows에서 LF 파일을 편집하면 자동으로 CRLF로 변환되어 실제 변경 없이 모든 줄이 diff에 표시될 수 있다.

**2. 셸 스크립트 실행 실패**
Windows에서 작성한 \`.sh\` 파일을 Linux에서 실행하면 \`\r\` 문자로 인해 \`bad interpreter: No such file or directory\` 오류가 발생한다.

**3. CSV 파싱 오류**
CRLF CSV 파일을 LF 기반 파서로 읽으면 각 행 끝에 \`\r\`이 데이터로 포함될 수 있다.

## Git에서 줄바꿈 통일

Git \`core.autocrlf\` 설정으로 체크인/체크아웃 시 자동 변환을 제어한다.

\`\`\`bash
# Windows 개발자 권장: 체크아웃 시 CRLF, 커밋 시 LF
git config --global core.autocrlf true

# Linux/Mac 개발자 권장: 체크아웃 시 변환 없음, 커밋 시 LF
git config --global core.autocrlf input

# 자동 변환 비활성화 (프로젝트에서 .gitattributes로 제어)
git config --global core.autocrlf false
\`\`\`

팀 전체에 강제 적용하려면 저장소 루트에 \`.gitattributes\` 파일을 추가한다.

\`\`\`
# .gitattributes
* text=auto eol=lf
*.bat text eol=crlf
\`\`\`

## VS Code에서 줄바꿈 변환

우측 하단 상태바에 \`CRLF\` 또는 \`LF\`가 표시된다. 클릭하면 선택 메뉴가 나타나 변환할 수 있다.

또는 명령 팔레트(Ctrl+Shift+P)에서 \`Change End of Line Sequence\`를 실행한다.

\`.editorconfig\` 파일로 프로젝트 전체에 강제 적용도 가능하다.

\`\`\`ini
[*]
end_of_line = lf
\`\`\`

## Notepad++에서 변환

편집 → 줄끝 문자 변환 메뉴에서 \`Unix 형식(LF)\`, \`Windows 형식(CRLF)\`, \`Mac 형식(CR)\` 중 선택한다. 보기 → 기호 표시 → 모든 문자 표시로 줄바꿈 문자를 시각적으로 확인할 수 있다.`,
  },
  {
    slug: "tab-space-cleanup-guide",
    title: "탭·스페이스 혼용 문서 정리하는 방법",
    description: "탭과 스페이스가 혼용된 텍스트 파일이나 코드를 정리하는 방법과, 파이썬 IndentationError를 포함한 실무 문제 해결법을 설명합니다.",
    publishedAt: "2026-05-07",
    metaTitle: "탭·스페이스 혼용 문서 정리 방법 - IndentationError 해결",
    metaDescription: "탭과 스페이스 혼용은 Python IndentationError, 코드 들여쓰기 불일치의 원인. VS Code expandtab, Prettier, EditorConfig로 통일하는 방법을 안내합니다.",
    targetKeywords: ["탭 스페이스 혼용", "IndentationError", "들여쓰기 통일", "expandtab"],
    category: "텍스트 편집",
    tags: ["들여쓰기", "탭스페이스", "코드정리"],
    aeoQuestion: "탭과 스페이스가 혼용된 파일은 어떻게 정리하나요?",
    aeoAnswer: "VS Code에서 '탭으로 들여쓰기 변환' 또는 '스페이스로 들여쓰기 변환' 명령으로 일괄 변환할 수 있습니다. 코드 전반에 걸친 통일에는 Prettier(코드)나 EditorConfig(편집기 설정)를 사용합니다. Python 코드는 autopep8 또는 black 포매터가 자동으로 통일해 줍니다.",
    cta: { text: "텍스트 편집 도구 사용하기", link: "/tools/" },
    inlinks: [
      { text: "줄바꿈 LF·CRLF 차이와 변환", link: "/blog/line-ending-types-guide/" },
      { text: "공백 텍스트 정리 가이드", link: "/blog/whitespace-cleanup-guide/" },
    ],
    outlinks: [
      { text: "EditorConfig 공식 사이트", link: "https://editorconfig.org", description: "EditorConfig" },
    ],
    canonicalUrl: "https://texturb.com/blog/tab-space-cleanup-guide/",
    content: `Python 코드를 다른 팀원에게 받아 실행했더니 \`TabError: inconsistent use of tabs and spaces in indentation\` 오류가 발생한다면, 탭·스페이스 혼용 문제다. 이 혼용이 발생하는 역사적 배경이 있다.

## 탭 vs 스페이스 혼용의 역사

초기 터미널 시대에는 탭 문자(\t)가 들여쓰기 표준이었다. IDE와 에디터가 보급되면서 "탭 너비를 2, 4, 8 중 어느 것으로 보여줄지"가 편집기마다 달라지자, 일관성을 위해 스페이스(보통 2칸 또는 4칸)를 표준으로 쓰는 문화가 생겼다.

2016년 Stack Overflow 개발자 설문(64,000명 응답)에 따르면 스페이스 사용자의 연봉이 탭 사용자보다 평균 6% 높다는 결과가 화제가 됐다(단, 인과관계 아님).

## 언어별 권장 들여쓰기 표준

| 언어 | 권장 표준 | 크기 |
|---|---|---|
| Python (PEP 8) | 스페이스 | 4칸 |
| JavaScript (Prettier) | 스페이스 | 2칸 |
| Go | 탭 | gofmt 기본값 |
| Ruby | 스페이스 | 2칸 |
| HTML/CSS | 스페이스 | 2칸 |

## VS Code에서 탭↔스페이스 변환

명령 팔레트(Ctrl+Shift+P)에서:
- **\`Indent Using Spaces\`**: 탭 → 스페이스로 변환 (스페이스 개수 선택 가능)
- **\`Indent Using Tabs\`**: 스페이스 → 탭으로 변환
- **\`Convert Indentation to Spaces\`**: 현재 파일의 모든 탭을 스페이스로

## Prettier로 전체 프로젝트 통일

\`\`\`bash
npx prettier --write "**/*.js" --tab-width 2 --use-tabs false
\`\`\`

Python은 autopep8 또는 black:

\`\`\`bash
# black: 스페이스 4칸 강제
black my_script.py

# autopep8: PEP 8 준수로 변환
autopep8 --in-place --aggressive my_script.py
\`\`\`

## EditorConfig로 팀 전체 강제 적용

저장소 루트에 \`.editorconfig\` 파일을 추가하면 팀원 편집기 설정과 무관하게 통일된다.

\`\`\`ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8

[*.py]
indent_size = 4

[Makefile]
indent_style = tab
\`\`\`

VS Code, JetBrains IDE, Vim, Emacs 등 주요 편집기가 \`.editorconfig\`를 지원한다.

## Python TabError 즉시 해결

\`\`\`bash
# expand 명령으로 탭을 스페이스 4칸으로 변환 (Linux/Mac)
expand -t 4 input.py > output.py

# Windows PowerShell
(Get-Content input.py) -replace '\t', '    ' | Set-Content output.py
\`\`\`

## 정리 체크리스트

- [ ] EditorConfig 파일이 저장소에 있는가?
- [ ] Prettier 또는 언어별 포매터 설정이 있는가?
- [ ] Git pre-commit hook으로 들여쓰기 검사를 자동화했는가?
- [ ] 기존 파일의 혼용 탭을 일괄 변환했는가?`,
  },
];
