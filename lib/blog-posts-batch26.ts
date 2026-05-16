import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH26: BlogPost[] = [
  {
    slug: "video-script-word-count-guide",
    title: "동영상 스크립트 분량 가이드 — 유튜브·숏폼·광고 유형별 기준",
    description: "유튜브, TikTok, 광고 영상의 스크립트 분량 기준을 공식 출처 기반으로 정리합니다. 발화 속도로 계산하는 스크립트 분량 공식도 포함합니다.",
    publishedAt: "2026-07-11",
    metaTitle: "동영상 스크립트 분량 가이드 — 유튜브·숏폼·광고 기준 (2026)",
    metaDescription: "유튜브 1분=약 300자, 6초 범퍼 광고=약 20자. 영상 유형별 스크립트 분량과 발화 속도 계산법을 공식 출처로 정리합니다.",
    targetKeywords: ["동영상 스크립트 분량", "유튜브 스크립트 길이", "숏폼 스크립트 글자수", "영상 대본 분량"],
    category: "영상 콘텐츠",
    tags: ["YouTube", "TikTok", "스크립트", "대본", "숏폼", "광고"],
    aeoQuestion: "유튜브 동영상 1분 스크립트는 몇 글자인가요?",
    aeoAnswer: "한국어 평균 발화 속도(분당 약 270~350자)를 기준으로, 유튜브 동영상 1분 스크립트는 약 270~350자입니다. 영어 기준은 분당 130~150단어입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "소셜미디어 캡션 글자수 가이드", link: "/blog/social-media-caption-length-guide" }
    ],
    content: `<p>영상 스크립트의 분량은 몇 자로 써야 할까? 답은 영상 길이와 발화 속도에서 나온다. 한국어 평균 발화 속도는 분당 약 270~350자다. 유튜브 10분 영상이라면 스크립트 분량은 약 2,700~3,500자가 된다. 광고 영상은 다르다. YouTube Ads 공식 기준으로 6초 범퍼 광고는 약 20~25자(한국어)만 담을 수 있다.</p>

<div class="speakable-summary" style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>한 줄 요약</strong><br>
스크립트 분량(자) = 영상 길이(초) ÷ 60 × 발화 속도(분당 270~350자). 광고는 플랫폼별 고정 기준 적용.
</div>

<h2>영상 유형별 스크립트 분량 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">영상 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 길이</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">스크립트 분량(한국어)</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">TikTok 숏폼</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">15~60초</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">70~350자</td>
<td style="border:1px solid #ddd;padding:8px 12px">TikTok for Business 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Shorts</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 60초</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 350자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube 일반 (중편)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3~10분</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">800~3,500자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">YouTube 장편</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">10분 이상</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,700자 이상</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube 범퍼 광고</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">6초 (고정)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 20~25자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Ads 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">YouTube 스킵 불가 광고</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">15~20초</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 65~110자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Ads 공식</td>
</tr>
</tbody>
</table>
</div>

<h2>발화 속도로 계산하는 스크립트 분량</h2>
<p>스크립트 분량을 가장 정확하게 추정하는 방법은 발화 속도를 기준으로 계산하는 것이다. 발화 속도는 내용의 복잡성, 발화자의 스타일, 의도적 포즈(Pause) 삽입 여부에 따라 달라진다.</p>

<ul>
<li><strong>느린 발화 (강의·해설형)</strong>: 분당 230~270자. 설명이 많은 교육 콘텐츠에 적합.</li>
<li><strong>표준 발화 (일반 유튜브)</strong>: 분당 270~320자. 대부분의 유튜브 영상에 해당.</li>
<li><strong>빠른 발화 (뉴스·요약형)</strong>: 분당 320~380자. 숏폼이나 요약 영상에 적합.</li>
</ul>

<div style="background:#fff7ed;border:1px solid #fed7aa;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>TikTok 21~34초 권장 길이</strong><br>
TikTok for Business 공식 가이드는 21~34초 영상이 완시청률(View-Through Rate) 최적이라고 명시한다. 이 기준을 스크립트 분량으로 환산하면 약 95~195자(표준 발화 기준)다.
</div>

<h2>광고 영상 스크립트 분량 기준</h2>
<p>광고 영상은 플랫폼이 길이를 고정하기 때문에 스크립트 분량도 자동으로 결정된다. YouTube Ads 공식 기준에 따르면:</p>

<ul>
<li><strong>6초 범퍼 광고</strong>: 핵심 메시지 1가지만. 한국어 약 20~25자. 브랜드명 + 핵심 혜택 한 문장.</li>
<li><strong>15초 스킵 불가 광고</strong>: 약 65~80자(표준 발화). 훅 + 핵심 메시지 + CTA 구조.</li>
<li><strong>15~30초 스킵 가능 광고</strong>: 첫 5초(약 25자)가 스킵 전 노출 구간이므로 훅을 앞에 배치해야 한다(YouTube Ads 공식).</li>
</ul>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>유튜브 5분 영상 스크립트는 몇 자인가요?</strong></dt>
<dd>표준 발화 속도(분당 270~320자) 기준으로 약 1,350~1,600자입니다. 포즈와 화면 전환 시간을 감안해 실제 스크립트는 이보다 10~15% 짧게 작성하는 것이 일반적입니다.</dd>
<dt><strong>스크립트 없이 즉흥으로 촬영해도 되나요?</strong></dt>
<dd>YouTube Help 공식 문서는 자막(Caption) 정확도를 높이기 위해 스크립트 기반 촬영을 권장합니다. 정확한 자막은 접근성을 높이고 YouTube 검색 인덱싱에도 긍정적 영향을 미칩니다.</dd>
<dt><strong>TikTok 숏폼 스크립트 최적 분량은 얼마인가요?</strong></dt>
<dd>TikTok for Business 공식에 따르면 21~34초 영상이 완시청률 최적입니다. 이를 표준 발화 속도로 환산하면 약 95~195자가 적정 스크립트 분량입니다.</dd>
</dl>

<p>스크립트 초안을 작성한 뒤 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 분량을 측정하고 목표 영상 길이와 대조해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "YouTube Ads 공식", link: "https://ads.google.com/intl/ko_kr/home/campaigns/video-ads/", description: "YouTube 광고 유형별 공식 기준" },
      { text: "TikTok for Business", link: "https://www.tiktok.com/business/", description: "TikTok 영상 최적 길이 공식 가이드" }
    ]
  },
  {
    slug: "academic-paper-word-count-guide",
    title: "학술 논문 분량 가이드 — KCI 학술지·학위논문·초록 기준 총정리",
    description: "한국연구재단 KCI 등재지 투고 분량, 석사·박사 학위논문 기준, 논문 초록 분량을 공식 출처 기반으로 정리합니다.",
    publishedAt: "2026-07-12",
    metaTitle: "학술 논문 분량 가이드 — KCI·학위논문·초록 공식 기준 (2026)",
    metaDescription: "KCI 등재지 학술 논문 6,000~12,000자, 석사논문 50,000~100,000자, 초록 200~400자 기준을 공식 출처로 정리합니다.",
    targetKeywords: ["학술 논문 분량", "논문 글자수", "KCI 논문 길이", "학위논문 분량"],
    category: "학술·연구",
    tags: ["학술논문", "KCI", "학위논문", "초록", "연구보고서"],
    aeoQuestion: "KCI 등재 학술 논문은 몇 자로 써야 하나요?",
    aeoAnswer: "한국연구재단 KCI 등재지의 일반적인 논문 투고 분량은 한국어 기준 6,000~12,000자입니다. 학술지별로 투고 규정이 다르므로 해당 학술지 공식 규정을 반드시 확인해야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "이력서 글자수 가이드", link: "/blog/resume-word-count-guide" }
    ],
    content: `<p>2024년 한국연구재단 학술지인용색인(KCI) 통계에 따르면, KCI 등재지에 게재된 한국어 논문의 평균 분량은 약 8,000~10,000자 수준이다. 논문을 처음 쓰는 연구자가 '얼마나 써야 하는가'를 고민하는 이유는 명확하다. 너무 짧으면 심사에서 탈락하고, 너무 길면 투고 규정 위반이 된다.</p>

<h2>학술지별 투고 분량 기준 비교</h2>
<p>학술 논문 분량 기준은 학술지마다 다르다. 한국연구재단 KCI에 등록된 학술지는 각각 투고 규정을 공시하며, 분량 기준은 학술지 편집위원회가 자율적으로 정한다. 일반적인 범위는 아래와 같다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">논문 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">일반적 분량 기준</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 기준 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">KCI 등재지 한국어 논문</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">6,000~12,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국연구재단 KCI 학술지별 투고 규정</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">KCI 등재지 영문 논문</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">4,000~8,000 단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국연구재단 KCI 학술지별 투고 규정</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">석사 학위논문</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50,000~100,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">각 대학원 학위논문 작성 지침</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">박사 학위논문</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100,000~300,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">각 대학원 학위논문 작성 지침</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">한국어 초록 (KCI 기준)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~400자</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국연구재단 KCI 투고 규정</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">영문 초록 (KCI 기준)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">150~250 단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국연구재단 KCI 투고 규정</td>
</tr>
</tbody>
</table>
</div>

<p>위 범위는 학술지별로 편차가 크다. 반드시 투고하려는 학술지의 공식 투고 규정(KCI 학술지 정보 페이지에서 확인 가능)을 먼저 확인해야 한다.</p>

<h2>학위논문 분량 기준</h2>
<p>석사·박사 학위논문의 분량 기준은 각 대학원이 자율적으로 정한다. 교육부는 학위논문에 관한 표준 분량 기준을 별도로 제시하지 않으나, 대부분의 국내 대학원은 아래와 같은 범위를 내규로 운영한다.</p>

<ul>
<li><strong>석사논문</strong>: A4 50~100페이지, 한국어 기준 약 50,000~100,000자. 일부 대학원은 최소 페이지 수를 명시적으로 규정.</li>
<li><strong>박사논문</strong>: A4 150페이지 이상이 일반적이며, 분야에 따라 300~500페이지에 달하는 경우도 있다.</li>
<li><strong>연구계획서</strong>: 일반적으로 3,000~10,000자. 대학원 심사 양식에 따라 결정.</li>
</ul>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>초록 작성 기준</strong><br>
KCI 투고 규정의 일반적 기준: 한국어 초록 200~400자, 영문 초록 150~250 단어. 초록은 목적·방법·결과·결론을 각각 1~2문장으로 압축해야 한다.
</div>

<h2>논문 구성 요소별 분량</h2>
<p>KCI 등재지 논문(6,000~12,000자 기준)의 일반적인 구성 요소별 분량 배분은 아래와 같다.</p>

<ul>
<li><strong>서론</strong>: 전체의 10~15% → 600~1,800자. 연구 배경, 목적, 선행 연구 검토.</li>
<li><strong>이론적 배경 / 문헌 검토</strong>: 15~25% → 900~3,000자. 핵심 개념 정의와 선행 연구 분석.</li>
<li><strong>연구 방법</strong>: 10~15% → 600~1,800자. 연구 설계, 자료 수집, 분석 방법.</li>
<li><strong>결과 및 논의</strong>: 35~45% → 2,100~5,400자. 데이터 제시와 해석이 가장 긴 부분.</li>
<li><strong>결론</strong>: 10~15% → 600~1,800자. 요약, 함의, 한계, 향후 연구 방향.</li>
</ul>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>투고하려는 학술지의 분량 기준은 어디서 확인하나요?</strong></dt>
<dd>한국연구재단 학술지인용색인(KCI) 홈페이지에서 학술지명을 검색하면 해당 학술지의 투고 규정 파일을 확인할 수 있습니다. 규정 파일에 분량 기준이 명시됩니다.</dd>
<dt><strong>학술지 분량 초과 시 어떻게 되나요?</strong></dt>
<dd>대부분의 학술지는 분량 초과 논문을 심사 전 반송(Return)합니다. 초과분을 줄이거나 별도의 승인을 받아야 합니다. 분량 제한 초과는 형식 요건 위반으로 처리되므로 투고 전 반드시 확인해야 합니다.</dd>
<dt><strong>영어 논문과 한국어 논문의 분량 기준이 다른가요?</strong></dt>
<dd>같은 학술지라도 영어 논문은 한국어 논문보다 단어 기준으로 분량이 더 많게 설정되는 경우가 많습니다. KCI 등재지의 경우 영문 투고 규정을 한국어 규정과 별도로 공시하므로 반드시 해당 버전의 규정을 확인해야 합니다.</dd>
</dl>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "한국연구재단 KCI", link: "https://www.kci.go.kr/", description: "KCI 등재지 투고 규정 공식 확인" }
    ]
  },
  {
    slug: "resume-word-count-guide",
    title: "이력서·자기소개서 글자수 가이드 — 워크넷 기준과 직군별 최적 분량",
    description: "이력서와 자기소개서의 항목별 권장 글자수를 워크넷·고용노동부 공식 기준으로 정리합니다. 대기업·스타트업·공무원 시험별 기준 차이도 포함합니다.",
    publishedAt: "2026-07-13",
    metaTitle: "이력서·자기소개서 글자수 가이드 — 워크넷·공무원 기준 (2026)",
    metaDescription: "워크넷 자기소개서 항목당 400~1,000자, 공무원 시험 자기소개서 기준. 이력서 분량 역사적 변화와 직군별 최적 분량을 정리합니다.",
    targetKeywords: ["이력서 글자수", "자기소개서 분량", "자기소개서 글자수", "이력서 분량"],
    category: "취업·커리어",
    tags: ["이력서", "자기소개서", "취업", "워크넷", "공무원"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "채용공고 글자수 가이드", link: "/blog/job-description-word-count-guide" }
    ],
    content: `<p>인쇄된 이력서 한 장을 손으로 쓰던 시대와 온라인 지원서에 글자수 제한이 붙는 지금은 다르다. 워크넷(고용노동부 공식 취업 포털)의 표준 이력서 양식은 자기소개서 항목당 <strong>400~1,000자</strong>를 입력 가능 범위로 설정한다. 반면 대기업 공채 사이트는 항목당 1,500자 이상을 요구하는 경우도 있다.</p>

<h2>이력서 분량의 역사적 변화</h2>
<p>한국의 이력서 문화는 세 단계를 거쳐 변해왔다.</p>

<ul>
<li><strong>1990년대 이전 — 수기 이력서</strong>: A4 1~2매, 양식 없이 직접 작성. 분량보다 필체와 형식이 평가 기준이었다.</li>
<li><strong>2000년대 — 온라인 입력 전환</strong>: 잡코리아·사람인 등 취업 플랫폼이 등장하면서 항목별 글자수 제한이 생겼다. 고용노동부 워크넷은 이 시기에 온라인 이력서 표준 양식을 도입했다.</li>
<li><strong>2010년대 이후 — ATS 최적화 시대</strong>: 지원자 추적 시스템(ATS)이 확산되면서 키워드 밀도와 구조화된 정보가 분량만큼 중요해졌다. 글자수보다 핵심 역량 키워드 포함 여부가 서류 통과를 결정하는 경우가 늘었다.</li>
</ul>

<h2>플랫폼별 자기소개서 분량 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼/유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">항목당 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">워크넷 표준 이력서</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">400~1,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">고용노동부 워크넷 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">5급 공개채용 자기소개서</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">항목당 500자 이내</td>
<td style="border:1px solid #ddd;padding:8px 12px">인사혁신처 공채 공고 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">9급 공개채용 자기소개서</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">항목당 400자 이내</td>
<td style="border:1px solid #ddd;padding:8px 12px">인사혁신처 공채 공고 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">중소벤처기업부 청년 취업 지원</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">항목당 700자 이내</td>
<td style="border:1px solid #ddd;padding:8px 12px">중소벤처기업부 공식</td>
</tr>
</tbody>
</table>
</div>

<h2>자기소개서 항목별 권장 분량</h2>
<p>일반적인 자기소개서 항목별 권장 분량은 아래와 같다. 플랫폼 제한 내에서 아래 비율을 참고해 배분한다.</p>

<ul>
<li><strong>성장 과정 / 지원 동기</strong>: 제한의 30~40%. 구체적 경험 1~2가지로 구성.</li>
<li><strong>직무 역량 / 경험</strong>: 제한의 40~50%. STAR 기법(상황-과제-행동-결과)으로 서술.</li>
<li><strong>입사 후 목표</strong>: 제한의 20~30%. 회사 미션과 연결된 구체적 계획.</li>
</ul>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>워크넷 이력서 작성 팁</strong><br>
고용노동부 워크넷 공식 이력서 작성 가이드는 자기소개서 항목당 400~1,000자 범위에서 <strong>80~90%를 채우는 것</strong>을 권장한다. 제한의 50% 이하는 성의 부족으로 평가될 수 있다.
</div>

<h2>직군별 이력서 분량 차이</h2>
<p>직군과 지원 단계에 따라 최적 분량이 다르다.</p>

<ul>
<li><strong>개발직군</strong>: GitHub 링크·포트폴리오 URL이 핵심. 자기소개서 분량보다 링크의 콘텐츠 품질이 더 중요.</li>
<li><strong>마케팅·기획직군</strong>: 성과 수치(매출 N% 향상, CTR N% 개선)를 포함한 실적 중심 서술.</li>
<li><strong>공무원 시험</strong>: 인사혁신처 공식 항목(지원 동기, 장단점, 직무 관련 경험)을 항목당 400~500자 이내로 간결하게.</li>
</ul>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>자기소개서는 몇 자가 가장 좋은가요?</strong></dt>
<dd>고용노동부 워크넷 기준 항목당 400~1,000자가 일반적인 입력 범위입니다. 플랫폼 제한의 80~90%를 채우는 것이 권장됩니다. 가장 중요한 것은 분량보다 구체적인 경험과 수치 포함 여부입니다.</dd>
<dt><strong>공무원 자기소개서 글자수 기준이 따로 있나요?</strong></dt>
<dd>인사혁신처의 5급 공채는 항목당 500자, 9급 공채는 400자 이내가 일반적인 공식 기준입니다. 연도별 공채 공고에서 정확한 제한을 반드시 확인하세요.</dd>
</dl>

<p>자기소개서 초안을 작성한 뒤 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 항목별 분량을 정확히 측정하고 플랫폼 제한과 대조해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "고용노동부 워크넷", link: "https://www.work.go.kr/", description: "표준 이력서 양식 공식 제공" },
      { text: "인사혁신처 공채 정보", link: "https://www.mpm.go.kr/", description: "공무원 자기소개서 공식 기준" }
    ]
  },
  {
    slug: "product-review-word-count-guide",
    title: "쇼핑몰 상품 리뷰 글자수 가이드 — 네이버·쿠팡·공정위 기준",
    description: "쇼핑몰 상품 리뷰의 플랫폼별 글자수 기준과 공정거래위원회 추천·보증 심사지침을 5단계 작성 프로세스로 정리합니다.",
    publishedAt: "2026-07-14",
    metaTitle: "상품 리뷰 글자수 가이드 — 네이버·쿠팡·공정위 기준 (2026)",
    metaDescription: "쿠팡 리뷰 최대 1,000자, 네이버 쇼핑 최소 20자 권장. 공정거래위원회 추천·보증 심사지침과 함께 5단계 리뷰 작성 프로세스를 정리합니다.",
    targetKeywords: ["상품 리뷰 글자수", "쿠팡 리뷰 길이", "네이버 리뷰 분량", "쇼핑몰 리뷰 기준"],
    category: "이커머스",
    tags: ["상품리뷰", "쿠팡", "네이버쇼핑", "이커머스", "공정거래위원회"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "로컬 리뷰 글자수 가이드", link: "/blog/local-review-word-count-guide" }
    ],
    content: `<p>짧은 리뷰("좋아요 ★★★★★")는 다른 구매자에게 거의 정보를 주지 못한다. 반면 1,000자짜리 장문 리뷰는 플랫폼 한도를 초과하거나 읽힐 가능성이 낮아진다. 쿠팡은 리뷰 입력 최대치를 1,000자로 공식 설정했고, 네이버 쇼핑 파트너센터는 20자 이상을 포토 리뷰 추가 포인트 기준으로 명시하고 있다.</p>

<h2>1단계. 플랫폼 리뷰 정책 확인</h2>
<p>리뷰를 작성하기 전에 해당 플랫폼의 공식 리뷰 정책과 글자수 기준을 확인한다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">최소 기준</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 입력</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">쿠팡</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">별도 최소 기준 없음</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">쿠팡 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">네이버 쇼핑</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">20자 이상 권장</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">플랫폼 설정에 따라 상이</td>
<td style="border:1px solid #ddd;padding:8px 12px">네이버 쇼핑 파트너센터 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">카카오 선물하기</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">별도 최소 기준 없음</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500자</td>
<td style="border:1px solid #ddd;padding:8px 12px">카카오 공식</td>
</tr>
</tbody>
</table>
</div>

<h2>2단계. 리뷰 구조 설계</h2>
<p>효과적인 리뷰는 아래 4가지 요소를 포함한다. 이 구조를 기준으로 각 요소별 분량을 배분한다.</p>

<ol>
<li><strong>구매 맥락</strong> (30~60자): 어떤 목적으로 샀는지. 다른 구매자가 공감할 수 있는 상황 제시.</li>
<li><strong>실제 사용 경험</strong> (100~300자): 가장 중요한 부분. 구체적 수치(사용 기간, 효과 등)를 포함.</li>
<li><strong>장단점 정리</strong> (80~200자): 장점 2~3가지, 단점 1~2가지. 균형 잡힌 서술이 신뢰도를 높인다.</li>
<li><strong>추천 여부</strong> (30~60자): 어떤 사람에게 추천하는지 또는 비추천하는지 명확히.</li>
</ol>

<h2>3단계. 분량 기준 설정</h2>
<p>리뷰 분량은 상품 카테고리와 복잡성에 따라 다르게 설정한다.</p>

<ul>
<li><strong>소모품 (생필품, 식품)</strong>: 100~200자. 맛·향·효과 중심의 간결한 서술.</li>
<li><strong>전자제품 / 가전</strong>: 300~600자. 설치 과정, 사용감, 내구성 등 상세 정보 포함.</li>
<li><strong>패션 / 뷰티</strong>: 150~400자. 착용감, 색감 실물 비교, 사이즈 정보 포함.</li>
<li><strong>서비스 (배송, CS)</strong>: 100~200자. 배송 속도, 포장 상태, 고객 서비스 경험.</li>
</ul>

<h2>4단계. 공정거래위원회 가이드라인 준수</h2>
<p>공정거래위원회 추천·보증 심사지침(공정위 공식)에 따르면, 대가를 받고 작성한 리뷰(협찬·무상 제공·포인트 제공 등)는 반드시 그 사실을 명시해야 한다. 이를 표기하지 않으면 부당한 광고 행위로 제재 대상이 된다.</p>

<div style="background:#fef2f2;border:1px solid #fecaca;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>협찬·대가 표기 의무</strong><br>
공정거래위원회 심사지침: 무상 제공·포인트·현금 등 어떤 형태의 대가를 받았더라도 '제품 협찬받음', '리뷰 포인트 적립', '광고' 등을 명시해야 합니다(공정거래위원회 공식 추천·보증 심사지침).
</div>

<h2>5단계. 플랫폼별 제출 전 체크</h2>
<p>작성 후 제출 전에 아래 항목을 확인한다.</p>

<ul>
<li>플랫폼 최대 글자수를 초과하지 않았는가?</li>
<li>개인 정보(전화번호, 주소)가 포함되지 않았는가?</li>
<li>대가를 받았다면 표기가 명시되어 있는가?</li>
<li>특정 경쟁 제품을 비방하는 내용이 없는가? (공정위 표시·광고법 위반 가능)</li>
</ul>

<p>리뷰 초안의 글자수를 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 확인하고 플랫폼 한도 내에 맞게 조정해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "공정거래위원회", link: "https://www.ftc.go.kr/", description: "추천·보증 심사지침 공식" },
      { text: "네이버 쇼핑 파트너센터", link: "https://partner.shopping.naver.com/", description: "네이버 쇼핑 리뷰 공식 가이드" }
    ]
  },
  {
    slug: "government-report-word-count-guide",
    title: "공문서·행정보고서 분량 가이드 — 행정안전부 공식 기준",
    description: "행정안전부 공문서 작성 규정과 유형별 표준 분량을 정리합니다. 1문1의 원칙, 기안문·보고서·지침문 분량 비교를 포함합니다.",
    publishedAt: "2026-07-15",
    metaTitle: "공문서·행정보고서 분량 가이드 — 행정안전부 기준 (2026)",
    metaDescription: "행정안전부 공문서 작성 규정의 1문1의 원칙, 기안문·보고서·지침문 유형별 분량 기준과 한국 공문서 역사적 변화를 정리합니다.",
    targetKeywords: ["공문서 분량", "행정보고서 길이", "기안문 글자수", "공문서 작성 기준"],
    category: "공문서·행정",
    tags: ["공문서", "행정보고서", "기안문", "행정안전부", "공공기관"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "법률 문서 분량 가이드", link: "/blog/legal-document-word-count-guide" }
    ],
    content: `<blockquote style="border-left:4px solid #94a3b8;padding:12px 20px;margin:20px 0;background:#f8fafc;color:#475569;font-style:italic">
"공문서는 쉽고 간결하게 작성하여 뜻이 분명하게 전달되어야 한다." — 행정 효율과 협업 촉진에 관한 규정(대통령령), 행정안전부 공식
</blockquote>

<p>행정안전부가 주도하는 '알기 쉬운 행정언어' 캠페인은 공문서가 지나치게 길고 어렵다는 비판에서 출발했다. 법령과 관행으로 굳어진 긴 문장, 한자어, 외래어가 공문서 분량을 늘려왔다. 현행 규정은 길이보다 명확성을 우선한다.</p>

<h2>공문서 유형별 분량 기준 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">문서 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">일반적 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 구성</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 기준</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">기안문 (일반)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500~2,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">제목 + 목적 + 내용 + 요청사항</td>
<td style="border:1px solid #ddd;padding:8px 12px">행정 효율과 협업 촉진에 관한 규정</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">현황 보고서</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,000~10,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">개요 + 현황 + 분석 + 대책</td>
<td style="border:1px solid #ddd;padding:8px 12px">각 기관 내규</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">지침·훈령</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3,000~30,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">목적 + 적용 범위 + 조항</td>
<td style="border:1px solid #ddd;padding:8px 12px">법제처 훈령·예규 발령 기준</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">정책 브리핑 자료</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,000~5,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">핵심 메시지 + 배경 + 기대 효과</td>
<td style="border:1px solid #ddd;padding:8px 12px">문화체육관광부 정책 소통 가이드</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">회의록</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,000~5,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">참석자 + 안건 + 논의 내용 + 결정</td>
<td style="border:1px solid #ddd;padding:8px 12px">행정 효율과 협업 촉진에 관한 규정</td>
</tr>
</tbody>
</table>
</div>

<h2>공문서 분량의 역사적 변화</h2>
<p>한국 공문서의 형식 변화는 세 번의 큰 전환점이 있었다.</p>

<ul>
<li><strong>1950~1980년대</strong>: 한자 혼용 세로쓰기 방식. 형식적으로 긴 인사말과 수식어가 문서 앞뒤에 배치되어 실질 내용 비율이 낮았다.</li>
<li><strong>1987~1990년대</strong>: 공문서 규정 개정으로 한글 전용이 의무화됐다. 문서 형식이 가로쓰기로 통일되고, 불필요한 인사말 삭제가 권장됐다.</li>
<li><strong>2000년대 이후</strong>: 행정안전부의 '알기 쉬운 공문서' 정책이 추진됐다. 현행 '행정 효율과 협업 촉진에 관한 규정(대통령령)'은 <strong>1문1의(一文一意) 원칙</strong>을 명시한다. 한 문장에 하나의 내용만 담아야 한다는 이 원칙은 문서 분량을 줄이면서도 명확성을 높이기 위한 핵심 규정이다.</li>
</ul>

<h2>해외 공문서 분량 기준 비교</h2>
<p>국내 공문서 기준을 해외와 비교하면 한국의 규정이 상대적으로 간결함을 지향한다는 점이 드러난다.</p>

<ul>
<li><strong>미국 행정부 문서</strong>: 연방 규제 정보 시스템(federalregister.gov 공식)에서 규제 영향 분석서의 경우 100페이지 이상 요구되는 경우도 있다. 반면 일반 행정 서한(letter)은 A4 1매 이내를 권장.</li>
<li><strong>영국 정부</strong>: UK Government Digital Service 공식 가이드는 정책 문서를 '간결하고 직접적인 언어'로 작성하도록 명시하며, 경우에 따라 단어 수 제한(1,000~2,000 단어)을 권고.</li>
</ul>

<h2>행정안전부 공문서 작성 핵심 원칙</h2>
<p>행정안전부 공식 공문서 작성 지침의 핵심은 분량보다 명확성에 있다.</p>

<ul>
<li><strong>1문1의 원칙</strong>: 한 문장에 하나의 내용. 접속사로 연결된 복합 문장은 분리.</li>
<li><strong>쉬운 언어 사용</strong>: 한자어·외래어보다 쉬운 한국어 표현 우선.</li>
<li><strong>항목화·표 활용</strong>: 긴 문장보다 번호 목록과 표로 정보를 구조화하면 분량이 줄고 가독성이 높아진다.</li>
<li><strong>불필요한 수식어 제거</strong>: '~의 경우에는', '~에 대하여' 등 법령 투식어 삭제.</li>
</ul>

<p>공문서 초안 작성 후 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 각 단락 분량을 측정하고 불필요한 중복 표현을 파악해 보자. 1문1의 원칙에 따라 문장을 나누면 자연스럽게 전체 분량도 줄어든다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "행정안전부 공식", link: "https://www.mois.go.kr/", description: "공문서 작성 규정 공식 출처" },
      { text: "법제처", link: "https://www.moleg.go.kr/", description: "훈령·예규 발령 기준 공식" }
    ]
  }
];
