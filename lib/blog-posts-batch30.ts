import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH30: BlogPost[] = [
  {
    slug: "meeting-agenda-word-count",
    title: "회의 안건 분량 가이드 — 플랫폼별 입력 한도와 최적 길이",
    description: "Microsoft Teams 5,000자, Google Calendar 8,000자, Zoom 10,240자 — 회의 안건 공식 입력 한도와 실제로 효과적인 분량을 정리합니다.",
    publishedAt: "2026-07-31",
    metaTitle: "회의 안건 분량 가이드 — 플랫폼별 입력 한도와 최적 길이 (2026)",
    metaDescription: "Microsoft Teams 5,000자, Google Calendar 8,000자, Zoom 10,240자. 회의 안건 공식 입력 한도와 실제 효과적인 분량, 안건 항목별 작성 구조를 정리합니다.",
    targetKeywords: ["회의 안건 분량", "회의 안건 글자수", "미팅 어젠다 길이", "Teams 회의 안건"],
    category: "비즈니스 문서",
    tags: ["회의", "안건", "어젠다", "Microsoft Teams", "Google Calendar", "Zoom"],
    aeoQuestion: "회의 안건은 몇 자가 적당한가요?",
    aeoAnswer: "회의 안건 항목 하나는 15~30자의 간결한 제목 형식이 국제 회의 표준(Robert's Rules of Order)에서 권장됩니다. 안건 전체 설명은 100~300자로, 목적·소요 시간·담당자를 명시하면 충분합니다. Microsoft Teams·Google Calendar 입력란은 5,000~8,000자까지 허용하지만 길수록 읽히지 않습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "이메일 제목줄 글자수 가이드", link: "/blog/email-subject-line-character-limit" }
    ],
    outlinks: [
      { text: "Microsoft Teams 공식 도움말", link: "https://support.microsoft.com/microsoft-teams", description: "Teams 회의 기능 공식 안내" },
      { text: "Google Calendar 공식 도움말", link: "https://support.google.com/calendar/", description: "Google Calendar 이벤트 기능 공식 안내" }
    ],
    content: `<p>회의 안건은 몇 자가 적당한가? 플랫폼 입력란이 수천 자를 허용한다고 해서 길게 쓸수록 좋은 것은 아닙니다. Microsoft Teams는 회의 설명란에 최대 5,000자를 허용하고, Google Calendar는 8,000자까지 입력할 수 있습니다. 그러나 실제 회의 전 안건을 읽는 시간은 2~3분입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
안건 항목 1개: 15~30자 제목. 전체 안건 설명: 100~300자. 플랫폼 입력 한도(5,000~10,000자)가 아니라 참석자가 2분 내에 파악할 수 있는 분량이 기준입니다.
</div>

<h2>플랫폼별 회의 안건 입력 공식 한도</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">공식 입력 한도</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Microsoft Teams</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">5,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Teams 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Google Calendar</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 8,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Google Workspace 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Zoom 웨비나 설명</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">10,240자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Zoom Help Center 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Slack 채널 설명</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">250자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Slack 공식 API 문서</td>
</tr>
</tbody>
</table>
</div>

<h2>"상세한 안건이 좋은 회의를 만든다" — 이 통념의 함정</h2>

<p>안건이 상세할수록 회의가 체계적으로 진행된다는 통념이 있습니다. 하지만 Robert's Rules of Order — 전 세계 공식 회의 표준으로 사용되는 절차 규범 — 는 각 안건 항목을 "동사+목적어" 형식의 간결한 제목(2~5단어, 영문 기준)으로 표기하도록 권장합니다. 한국어 기준으로는 15~30자 내외입니다.</p>

<p>안건을 길게 쓰면 두 가지 문제가 생깁니다. 첫째, 참석자가 사전에 읽지 않고 회의에 들어옵니다. 안건이 길수록 읽는 부담이 커지고, 회의 시작 직전에 스크롤하다 포기합니다. 둘째, 안건에 결론을 미리 담으면 토론 동기가 줄어듭니다. 안건은 방향을 제시하되 결론을 예단하지 않는 문장이 효과적입니다.</p>

<div style="background:#fef2f2;border:1px solid #fecaca;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>안건 항목 1개의 권장 구조</strong><br>
제목(15~30자) + 소요 시간(숫자) + 담당자(이름) + 목적 한 문장(30~50자)<br>
예: "Q3 마케팅 예산 검토 — 15분, 김팀장, 분기 배분 승인"
</div>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>사전 자료를 안건에 직접 첨부해야 하나요?</strong></dt>
<dd>안건 본문에 자료를 붙여넣는 것보다 링크나 첨부파일을 별도로 제공하는 방식이 낫습니다. Microsoft Teams와 Google Calendar는 파일 첨부 기능을 지원하므로, 안건 설명은 간결하게 유지하고 참고 자료는 파일로 연결하세요.</dd>

<dt><strong>온라인 회의와 오프라인 회의의 안건 분량이 달라야 하나요?</strong></dt>
<dd>기본 원칙은 동일합니다. 온라인 회의는 화면 분할 환경에서 안건을 보므로, 오히려 더 짧고 항목이 명확한 안건이 효과적입니다.</dd>

<dt><strong>안건 없이 회의해도 되나요?</strong></dt>
<dd>단순 정보 공유나 브레인스토밍 세션은 간략한 목적 1~2줄이면 충분합니다. 그러나 의사결정이 필요한 회의는 반드시 각 안건 항목과 담당자를 명시해야 회의 효율이 높아집니다.</dd>
</dl>

<p>AI 기반 회의록 자동 생성과 안건 제안 도구가 보편화되면서, 앞으로 회의 안건은 더욱 간결한 제목 형식으로 표준화될 전망입니다. 안건 분량 확인은 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`
  },
  {
    slug: "instagram-story-text-length",
    title: "인스타그램 스토리 텍스트 길이 가이드 — 공식 기준과 최적 배치",
    description: "Instagram Stories 텍스트 스티커 최대 200자, 안전 영역 기준, 피드·릴스와의 비교까지 — 스토리 텍스트 분량 공식 기준을 총정리합니다.",
    publishedAt: "2026-08-01",
    metaTitle: "인스타그램 스토리 텍스트 길이 — 공식 기준과 최적 배치 전략 (2026)",
    metaDescription: "Instagram Stories 텍스트 스티커 최대 200자, 피드 캡션 2,200자, 릴스 캡션 2,200자. 플랫폼 공식 기준과 가독성 높은 스토리 텍스트 배치 전략을 정리합니다.",
    targetKeywords: ["인스타그램 스토리 텍스트 길이", "스토리 글자수", "인스타그램 스토리 텍스트 기준", "Stories 텍스트 한도"],
    category: "소셜미디어",
    tags: ["Instagram", "스토리", "텍스트 길이", "소셜미디어", "콘텐츠 전략"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "소셜미디어 캡션 글자수 가이드", link: "/blog/social-media-caption-length-guide" },
      { text: "인스타그램 바이오 글자수 가이드", link: "/blog/social-media-bio-character-limit" }
    ],
    outlinks: [
      { text: "Instagram 공식 도움말", link: "https://help.instagram.com/", description: "인스타그램 스토리 공식 안내" },
      { text: "Meta Business Help Center", link: "https://www.facebook.com/business/help", description: "Meta 광고 및 크리에이터 공식 기준" }
    ],
    content: `<p>Instagram Stories 텍스트 스티커의 공식 최대 글자수는 200자입니다 — Meta Business Help Center 기준. 그러나 실제 가독성을 유지하는 구간은 그보다 훨씬 짧습니다. 스토리 화면의 안전 영역과 텍스트 크기를 고려하면, 30~50자 이내의 짧은 문구가 가장 효과적으로 전달됩니다.</p>

<h2>Instagram 스토리 vs 피드 vs 릴스 텍스트 기준 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">형식</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">공식 한도</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">미리보기 표시</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">텍스트 위치</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Stories 텍스트 스티커</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">전체 표시</td>
<td style="border:1px solid #ddd;padding:8px 12px">화면 위에 오버레이</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">피드 게시물 캡션</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,200자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 125자</td>
<td style="border:1px solid #ddd;padding:8px 12px">이미지 아래 텍스트</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">릴스 캡션</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,200자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 55자</td>
<td style="border:1px solid #ddd;padding:8px 12px">영상 하단 오버레이</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">스토리 링크 스티커 텍스트</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 30자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">전체 표시</td>
<td style="border:1px solid #ddd;padding:8px 12px">버튼형 스티커</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">스토리 투표 스티커 선택지</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">각 30자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">전체 표시</td>
<td style="border:1px solid #ddd;padding:8px 12px">2개 선택지</td>
</tr>
</tbody>
</table>
</div>

<h2>안전 영역과 실질 텍스트 공간</h2>

<p>Meta Business Help Center는 Instagram Stories의 9:16 비율 화면에서 상단과 하단 각 250픽셀(화면 높이의 약 14%)을 안전 영역 바깥으로 안내합니다. 이 영역에는 프로필 아이콘, 타임바, 메시지 버튼이 겹칩니다.</p>

<p>실질적으로 텍스트를 배치할 수 있는 안전 영역은 중앙 약 72%입니다. 1920×1080px 기준 스토리 화면에서 텍스트 영역은 세로 약 1,200px 내외입니다. 이 공간에 여러 줄 텍스트를 채우면 가독성이 급격히 떨어집니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>스토리 텍스트 가독성 기준</strong><br>
• 텍스트 스티커 1개: 20~40자 이내 권장<br>
• 화면에 텍스트 스티커 2개 이상: 각 15~25자 이내<br>
• 링크 스티커 CTA 텍스트: 10~15자 이내
</div>

<h2>형식별 텍스트 전략</h2>

<p><strong>피드 vs 스토리 텍스트 전략의 핵심 차이점.</strong> 피드는 2,200자 캡션 공간이 있어 서술형 설명, 해시태그 묶음, CTA를 포함할 수 있습니다. 반면 스토리는 화면 위에 텍스트를 오버레이 방식으로 얹기 때문에 짧고 임팩트 있는 문구가 효과적입니다. 피드용 콘텐츠를 스토리로 그대로 공유하면 텍스트가 읽히지 않는 이유입니다.</p>

<p><strong>릴스 캡션과의 차이.</strong> 릴스 캡션은 2,200자를 지원하지만 재생 화면에서 첫 55자 내외만 표시됩니다. 스토리는 캡션 개념 자체가 없고 텍스트 스티커만 사용하므로 형식이 근본적으로 다릅니다.</p>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>스토리에 긴 텍스트를 넣으면 잘리나요?</strong></dt>
<dd>잘리지는 않지만, 텍스트 스티커 크기를 조절하면 화면 안전 영역 바깥으로 나가거나 다른 스티커와 겹칩니다. 200자 한도 이내라도 화면에 모두 표시되려면 글자 크기를 아주 작게 조절해야 하며, 그 경우 가독성이 크게 떨어집니다.</dd>

<dt><strong>스토리 투표 스티커 질문 텍스트도 글자수 제한이 있나요?</strong></dt>
<dd>네. 투표 스티커의 질문 텍스트는 약 70자 이내, 각 선택지는 30자 이내가 공식 기준입니다.</dd>

<dt><strong>스토리 텍스트 SEO 효과가 있나요?</strong></dt>
<dd>없습니다. Instagram Stories는 24시간 후 사라지며 검색 엔진에 색인되지 않습니다. 스토리 텍스트는 팔로워 참여와 브랜드 인지 목적으로만 활용하세요.</dd>
</dl>

<p>스토리 텍스트 분량을 미리 확인하려면 <a href="/tools/character-counter">글자수 세기 도구</a>에서 내용을 작성해보세요. 피드·릴스 캡션 분량은 <a href="/blog/social-media-caption-length-guide">소셜미디어 캡션 글자수 가이드</a>에서 확인하세요.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`
  },
  {
    slug: "technical-documentation-word-count",
    title: "기술 문서 분량 기준: 유형별 권장 단어수와 실제 사례 분석",
    description: "API 레퍼런스부터 Getting Started 가이드까지 — Google, Apple, GitHub, Stripe 등 주요 서비스의 기술 문서 분량 기준과 Write the Docs 조사를 바탕으로 정리합니다.",
    publishedAt: "2026-08-02",
    metaTitle: "기술 문서 분량 기준 — 유형별 권장 단어수와 실제 사례 (2026)",
    metaDescription: "Google 개발자 문서 스타일 가이드 400~800단어, API 레퍼런스 50~150단어. 기술 문서 유형별 권장 분량과 주요 서비스 실제 사례를 정리합니다.",
    targetKeywords: ["기술 문서 분량", "API 문서 단어수", "개발자 문서 길이", "기술 문서 작성 가이드"],
    category: "콘텐츠 분량 가이드",
    tags: ["기술 문서", "API 문서", "개발자 문서", "테크니컬 라이팅", "문서 작성"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "보고서 분량 가이드", link: "/blog/government-report-word-count-guide" }
    ],
    outlinks: [
      { text: "Google Developer Documentation Style Guide", link: "https://developers.google.com/style", description: "구글 개발자 문서 공식 스타일 가이드" },
      { text: "Apple Developer Documentation", link: "https://developer.apple.com/documentation/", description: "Apple 개발자 문서 공식" },
      { text: "Write the Docs", link: "https://www.writethedocs.org/", description: "기술 문서 작성 커뮤니티 공식" }
    ],
    content: `<p>API 문서 첫 페이지를 열고 무엇을 찾아야 할지 모르는 상황 — 텍스트가 너무 많아 요점이 묻혀 있거나, 반대로 너무 짧아 이해가 안 되는 경우입니다. 기술 문서의 분량은 단순히 "상세히 설명하면 좋다"는 원칙으로는 풀리지 않습니다. 문서 유형마다 독자가 원하는 정보의 밀도와 목적이 다릅니다.</p>

<h2>기술 문서 유형별 권장 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">문서 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">출처·기준</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">개념 설명(Conceptual docs)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">400~800단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">Google Developer Documentation Style Guide</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Getting Started 가이드</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500~1,200단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">Apple Developer 가이드 기준, Google Style Guide</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">API 엔드포인트 레퍼런스</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~150단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">Apple Developer Documentation 기준</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">튜토리얼(단계별 실습)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">800~2,000단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">Write the Docs 커뮤니티 가이드라인</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">FAQ·Troubleshooting</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">각 항목 50~200단어</td>
<td style="border:1px solid #ddd;padding:8px 12px">Google Style Guide 권고</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">릴리스 노트</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">각 항목 1~3문장</td>
<td style="border:1px solid #ddd;padding:8px 12px">업계 표준 관행</td>
</tr>
</tbody>
</table>
</div>

<p>Google Developer Documentation Style Guide는 개념 문서는 400~800단어, 한 화면에서 읽히는 분량을 목표로 권장합니다. Apple Developer Documentation은 함수·클래스 레퍼런스는 50~150단어의 간결한 설명, 심층 가이드는 500~2,000단어를 기준으로 합니다.</p>

<h2>실제 주요 서비스 문서 사례 분석</h2>

<p>Write the Docs 커뮤니티가 2021년 실시한 조사에서 기술 작가의 64%가 "페이지당 500~1,500단어"를 목표 분량으로 답했습니다. 실제 주요 서비스 문서는 어떻게 구성되어 있을까요?</p>

<p><strong>GitHub REST API 문서.</strong> GitHub의 API 엔드포인트 레퍼런스 페이지는 엔드포인트 설명이 평균 200~400단어로 구성됩니다. 파라미터 표, 응답 예시 코드, 권한 요구 사항이 고정 구조로 배치되어 있어, 개발자가 정해진 위치에서 원하는 정보를 즉시 찾을 수 있습니다.</p>

<p><strong>Stripe API 문서.</strong> Stripe의 Getting Started 가이드는 약 800~1,200단어로 구성됩니다. 결제 API의 특성상 보안 요구 사항, 테스트 키 사용법, 에러 처리가 필수 포함 항목입니다. 긴 설명보다 코드 예시 비중이 높아, 텍스트만 계산하면 400~600단어 수준입니다.</p>

<p><strong>Apple Developer Documentation.</strong> SwiftUI나 UIKit의 클래스 레퍼런스는 선언 코드, 개요(100~200단어), 파라미터 설명(각 20~50단어), 예시 코드로 구성됩니다. 가이드 문서는 500~1,500단어 범위로, 복잡한 API는 여러 페이지로 분할합니다.</p>

<h2>독자 유형별 분량 전략</h2>

<p>기술 문서의 적정 분량은 독자가 문서를 어떻게 읽는지에 따라 달라집니다.</p>

<p><strong>처음 배우는 독자(학습 목적).</strong> Getting Started, 튜토리얼에서는 분량이 길어도 됩니다. 독자는 처음부터 끝까지 순서대로 읽으며, 맥락과 예시가 이해에 필수적입니다. 800~2,000단어가 적절합니다.</p>

<p><strong>이미 알고 있는 독자(참조 목적).</strong> API 레퍼런스, 설정 파라미터 목록에서는 짧을수록 좋습니다. 독자는 Ctrl+F로 특정 함수나 파라미터를 찾은 뒤 해당 항목만 읽습니다. 50~200단어 이내가 효과적입니다.</p>

<p><strong>문제를 해결하려는 독자(태스크 목적).</strong> Troubleshooting, How-To 가이드에서는 문제 해결에 필요한 최소한의 단계와 코드만 제공합니다. 300~800단어가 일반적이며, 긴 설명보다 명확한 단계 구분이 중요합니다.</p>

<h2>기술 문서 분량 최적화 원칙</h2>

<p>Google Style Guide는 문서 분량 최적화를 위해 "한 페이지, 하나의 목표"를 권장합니다. 하나의 문서 페이지에서 여러 목표(개념 설명 + 튜토리얼 + 레퍼런스)를 동시에 달성하려 하면 분량이 무한정 늘어납니다. 목표를 하나로 좁히면 적정 분량이 자연스럽게 결정됩니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>분량 결정 체크리스트</strong><br>
1. 이 문서의 독자는 처음 배우는 사람인가, 참조하는 사람인가?<br>
2. 독자가 이 페이지에서 완료해야 할 단일 태스크는 무엇인가?<br>
3. 코드 예시가 설명을 대체할 수 있는가?<br>
4. 500단어 이상이 필요하다면, 페이지를 나눌 수 있는가?
</div>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>한국어 기술 문서는 영어 기술 문서보다 분량이 달라야 하나요?</strong></dt>
<dd>단어 기준이 아닌 "한 화면 분량"을 기준으로 삼으면 언어 차이를 넘어서 적용할 수 있습니다. 한국어는 같은 의미를 영어 단어의 60~70% 글자 수로 표현할 수 있어, 권장 단어수보다 글자수 기준을 적용하는 것이 더 실용적입니다.</dd>

<dt><strong>README 파일 분량 기준은 무엇인가요?</strong></dt>
<dd>GitHub는 공식 README 작성 가이드에서 분량을 명시하지 않지만, 업계 관행으로 설치 방법·기본 사용법·기여 가이드를 포함한 200~600단어가 일반적입니다. 복잡한 프로젝트는 별도 문서 사이트로 상세 내용을 분리하고 README는 간결하게 유지합니다.</dd>
</dl>

<p>기술 문서 분량에 정답은 없지만, "독자가 필요한 것만 담는" 원칙은 변하지 않습니다. AI 기반 문서 생성 도구가 보편화되면서 오히려 분량 조절과 불필요한 내용 제거 능력이 더 중요해질 전망입니다. 분량 확인은 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`
  },
  {
    slug: "wedding-speech-word-count",
    title: "결혼식 축사 분량: 3분 vs 5분, 몇 자가 적당한가",
    description: "짧으면 성의 없고 길면 하객이 지루해하는 결혼식 축사. 국립국어원 발화 속도 기준으로 계산한 분량과 5단계 작성 가이드를 정리합니다.",
    publishedAt: "2026-08-03",
    metaTitle: "결혼식 축사 분량 가이드 — 3분·5분 몇 자인가 (2026)",
    metaDescription: "한국어 자연 발화 속도 280~320자/분 기준 — 3분 축사 840~960자, 5분 축사 1,400~1,600자. 분량 계산법과 5단계 축사 작성 가이드를 정리합니다.",
    targetKeywords: ["결혼식 축사 분량", "축사 글자수", "결혼식 스피치 길이", "축사 작성"],
    category: "글쓰기",
    tags: ["결혼식", "축사", "스피치", "분량", "글쓰기"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "행사 초대장 글자수 가이드", link: "/blog/event-invitation-word-count" }
    ],
    content: `<p>결혼식 축사에는 보이지 않는 딜레마가 있습니다. 너무 짧으면 성의 없어 보이고, 너무 길면 하객이 지루해하고 식이 늘어집니다. 명확한 분량 기준이 있다면 이 고민은 해결됩니다.</p>

<h2>1단계. 배정 시간 확인하기</h2>

<p>축사를 쓰기 전에 반드시 배정 시간을 확인해야 합니다. 일반적인 한국 결혼식 식순에서 축사는 3~5분이 배정됩니다. 공식 행사나 청첩 축사는 3분, 친밀한 관계에서의 축사나 식장 측에서 별도 요청한 경우 5분 내외입니다.</p>

<p>배정 시간을 확인하지 않고 분량을 결정하면, 축사 중간에 사회자가 시간 초과를 알리는 난처한 상황이 발생할 수 있습니다.</p>

<h2>2단계. 발화 속도로 분량 역산하기</h2>

<p>국립국어원의 발화 속도 연구에 따르면 한국어 자연스러운 발화 속도는 분당 약 280~320자입니다. 이를 기준으로 하면:</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">배정 시간</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">실제 원고 기준</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">2분</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">560~640자</td>
<td style="border:1px solid #ddd;padding:8px 12px">A4 0.5~0.7페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">3분</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">840~960자</td>
<td style="border:1px solid #ddd;padding:8px 12px">A4 약 1페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">4분</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,120~1,280자</td>
<td style="border:1px solid #ddd;padding:8px 12px">A4 1~1.3페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">5분</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,400~1,600자</td>
<td style="border:1px solid #ddd;padding:8px 12px">A4 1.5~1.7페이지</td>
</tr>
</tbody>
</table>
</div>

<p>분당 300자를 기준점으로 삼는 것이 가장 실용적입니다. 긴장하면 빨라지고, 강조할 때 느려지는 변동을 감안해 목표 분량의 ±10% 범위 안에서 마무리하는 것이 좋습니다.</p>

<div style="background:#fef9c3;border:1px solid #fde68a;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>방송통신심의위원회 자막 기준 참고</strong><br>
방통위 자막 기준(초당 8자 이하)으로 계산하면 1분 = 약 480자입니다. 이는 자막이 표시되는 속도 기준으로, 실제 말하기 속도(280~320자/분)보다 빠릅니다. 축사는 자막 기준이 아닌 발화 속도 기준을 사용하세요.
</div>

<h2>3단계. 핵심 구조 잡기</h2>

<p>3분(약 900자) 축사의 권장 구조:</p>
<ul>
<li><strong>인사 및 소개 (60~80자)</strong>: "저는 신랑과 ~년간 함께 일해 온..."</li>
<li><strong>에피소드 1개 (300~400자)</strong>: 두 사람의 관계를 보여주는 구체적 장면</li>
<li><strong>덕담 및 격려 (200~300자)</strong>: 두 사람의 미래에 대한 진심 어린 바람</li>
<li><strong>마무리 (80~100자)</strong>: 하객과 함께 두 사람을 축하하는 마무리 문장</li>
</ul>

<p>에피소드는 1개만 사용하는 것이 핵심입니다. 에피소드를 여러 개 넣으면 분량이 늘어나고, 집중도가 분산됩니다. 가장 인상적인 장면 하나를 선택해 구체적으로 묘사하세요.</p>

<h2>4단계. 초고 작성 후 글자수 측정</h2>

<p>초고를 먼저 쓰고, 글자수 도구로 분량을 확인합니다. 3분 축사가 목표라면 840~960자 범위에 들어오는지 확인하세요. 초고가 1,200자를 넘는다면 에피소드 상세 묘사를 줄이거나 덕담을 간결하게 다듬습니다.</p>

<p><a href="/tools/character-counter">글자수 세기 도구</a>로 분량을 정확히 파악한 후 발화 속도를 계산하면 예상 소요 시간을 미리 확인할 수 있습니다.</p>

<h2>5단계. 리허설로 최종 조정</h2>

<p>글자수가 기준에 맞더라도 반드시 소리 내어 읽는 리허설이 필요합니다. 이유는 두 가지입니다. 첫째, 글로 쓴 문장이 말로 읽으면 어색한 경우가 많습니다. 둘째, 실제 발화 속도는 글자수 계산과 다를 수 있습니다.</p>

<p>리허설 시 타이머를 재고, 배정 시간의 90% 내외에서 마무리되는지 확인하세요. 시간이 초과된다면 마지막 덕담 단락에서 문장을 1~2개 줄이는 것이 가장 자연스럽습니다.</p>

<p>결혼식 축사에서 중요한 것은 분량이 아니라 진심입니다. 그러나 적절한 분량을 지키는 것이 그 진심을 가장 잘 전달하는 방법이기도 합니다. 배정 시간을 존중하는 것이 신랑·신부에 대한 예의입니다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`
  },
  {
    slug: "youtube-community-post-length",
    title: "유튜브 커뮤니티 게시물 글자수 — 플랫폼별 분량 비교 분석",
    description: "YouTube Community 게시물 최대 5,000자 vs X(트위터) 280자 vs Instagram 2,200자 — 유튜브 커뮤니티 공식 글자수 기준과 게시물 유형별 최적 분량을 정리합니다.",
    publishedAt: "2026-08-04",
    metaTitle: "유튜브 커뮤니티 게시물 글자수 — 플랫폼별 비교 분석 (2026)",
    metaDescription: "YouTube Community 최대 5,000자, 투표 선택지 30자. 유튜브 커뮤니티 공식 글자수 기준과 X·Instagram 등 타 플랫폼 비교, 유형별 최적 분량을 정리합니다.",
    targetKeywords: ["유튜브 커뮤니티 글자수", "YouTube Community 분량", "유튜브 커뮤니티 게시물 길이", "커뮤니티 탭 글자수"],
    category: "소셜미디어",
    tags: ["YouTube", "커뮤니티", "글자수", "소셜미디어", "콘텐츠 전략"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "소셜미디어 캡션 글자수 가이드", link: "/blog/social-media-caption-length-guide" }
    ],
    outlinks: [
      { text: "YouTube Help 공식", link: "https://support.google.com/youtube/", description: "유튜브 커뮤니티 탭 공식 도움말" }
    ],
    content: `<p>"유튜브 커뮤니티는 SNS를 대체할 크리에이터 전용 공간이 될 것"이라는 유튜브의 설명처럼, Community 탭은 긴 텍스트 게시물과 이미지, 투표, 링크를 모두 지원합니다. 하지만 최대 5,000자라는 넉넉한 한도가 반드시 긴 글을 쓰라는 의미는 아닙니다.</p>

<h2>YouTube Community 게시물 유형별 공식 글자수 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">게시물 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">공식 한도</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">텍스트 게시물</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">5,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">투표 질문 텍스트</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">5,000자 내</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식 도움말</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">투표 선택지 텍스트</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">각 30자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">투표 선택지 개수</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 5개</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식 도움말</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">이미지 첨부</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 5장</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식 도움말</td>
</tr>
</tbody>
</table>
</div>

<h2>경쟁 플랫폼 커뮤니티 분량 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">게시물 최대 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">YouTube 대비</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Community</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">5,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">기준</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Instagram 피드</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,200자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">44%</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Discord 메시지</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">40%</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">LinkedIn 게시물</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">60%</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">X(트위터)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">280자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">5.6%</td>
</tr>
</tbody>
</table>
</div>

<p>YouTube Community의 5,000자 한도는 주요 소셜 플랫폼 중 가장 넉넉합니다. X(트위터) 280자의 약 17.8배, Instagram의 약 2.3배입니다. Discord 공식 문서는 일반 메시지 2,000자 한도를 명시합니다.</p>

<h2>게시물 유형별 최적 분량 전략</h2>

<p><strong>공지·업데이트 게시물.</strong> 새 영상 업로드 알림, 일정 공지에는 100~300자가 적합합니다. 핵심 정보(날짜, 링크, 핵심 내용)만 담고 영상이나 외부 링크로 유도합니다.</p>

<p><strong>커뮤니티 의견 수렴 게시물.</strong> 시청자 의견을 묻는 질문형 게시물은 200~500자가 효과적입니다. 질문의 배경을 충분히 설명하되, 댓글로 답하고 싶은 의욕을 줄 만큼의 짧은 분량을 유지합니다.</p>

<p><strong>긴 형식 뒷이야기·에세이.</strong> 채널 운영 소감, 구독자에게 보내는 편지 형식은 500~1,500자가 적합합니다. 5,000자 한도의 30% 내외에서 읽히기 충분한 분량입니다.</p>

<p><strong>투표 게시물.</strong> 선택지는 반드시 30자 이내로 작성해야 하며, 질문 설명은 100~200자로 간결하게 유지하는 것이 투표 참여율에 유리합니다.</p>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>유튜브 커뮤니티 게시물이 검색 결과에 노출되나요?</strong></dt>
<dd>YouTube 공식 도움말에 따르면 Community 게시물은 YouTube 내 검색 및 구독 피드에 노출됩니다. 구글 검색 결과에는 일반적으로 노출되지 않으므로, 외부 SEO 효과보다 채널 구독자 참여 목적으로 활용하는 것이 적합합니다.</dd>

<dt><strong>커뮤니티 탭 이용 자격이 있나요?</strong></dt>
<dd>YouTube Help 공식에 따르면 구독자 수 500명 이상 채널에서 커뮤니티 탭을 사용할 수 있습니다. 기준은 YouTube 정책에 따라 변경될 수 있으므로 공식 도움말을 확인하세요.</dd>
</dl>

<p>YouTube Community 탭은 구독자와 소통하는 저비용 채널로 자리잡고 있습니다. 앞으로 AI 기반 커뮤니티 게시물 자동 작성 기능이 강화될 것으로 예상되며, 플랫폼이 텍스트 기반 콘텐츠에 더 많은 기능을 추가할 가능성이 높습니다. 분량 확인은 <a href="/tools/character-counter">글자수 세기 도구</a>에서 할 수 있습니다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`
  }
];
