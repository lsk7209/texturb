import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH28: BlogPost[] = [
  {
    slug: "whatsapp-message-length-guide",
    title: "WhatsApp 메시지 분량 가이드 — 비즈니스 템플릿·일반 메시지 기준",
    description: "WhatsApp 일반 메시지와 비즈니스 API 템플릿 메시지의 공식 글자수 기준을 Meta 공식 문서 기반으로 정리합니다.",
    publishedAt: "2026-07-21",
    metaTitle: "WhatsApp 메시지 분량 가이드 — 비즈니스 API·일반 메시지 기준",
    metaDescription: "WhatsApp 일반 메시지 최대 65,536자, 비즈니스 메시지 템플릿 최대 1,024자, Status 700자. Meta 공식 문서 기반으로 정리합니다.",
    targetKeywords: ["WhatsApp 메시지 글자수", "WhatsApp 비즈니스 메시지 길이", "카카오톡 WhatsApp 비교", "메시지 앱 분량"],
    category: "메시징·커뮤니케이션",
    tags: ["WhatsApp", "WhatsApp Business", "메시지", "비즈니스", "API"],
    aeoQuestion: "WhatsApp 비즈니스 메시지 템플릿은 최대 몇 글자인가요?",
    aeoAnswer: "WhatsApp Business API 공식 문서에 따르면 비즈니스 메시지 템플릿(Message Template)의 최대 글자수는 1,024자입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "카카오 알림톡·친구톡 메시지 분량 가이드", link: "/blog/kakao-friendtalk-alimtalk-message-length" }
    ],
    content: `<p>WhatsApp은 전 세계 20억 명 이상이 사용하는 메시징 플랫폼으로, 국내보다 해외 비즈니스 커뮤니케이션에서 더 많이 쓰인다. WhatsApp Business API 공식 문서에 따르면 비즈니스 메시지 템플릿의 최대 글자수는 <strong>1,024자</strong>로 카카오 알림톡의 1,000자와 거의 같은 수준이다. 반면 일반 개인 채팅 메시지는 65,536자라는 사실상 무제한에 가까운 한도를 갖는다.</p>

<h2>WhatsApp 메시지 유형별 공식 글자수 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">메시지 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 글자수</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">일반 채팅 메시지</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">65,536자</td>
<td style="border:1px solid #ddd;padding:8px 12px">WhatsApp 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">비즈니스 메시지 템플릿</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,024자</td>
<td style="border:1px solid #ddd;padding:8px 12px">WhatsApp Business API 공식 문서</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Status (스토리 텍스트)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">700자</td>
<td style="border:1px solid #ddd;padding:8px 12px">WhatsApp 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">그룹 설명(Group Description)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">512자</td>
<td style="border:1px solid #ddd;padding:8px 12px">WhatsApp 공식 도움말</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">프로필 소개(About)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">139자</td>
<td style="border:1px solid #ddd;padding:8px 12px">WhatsApp 공식 도움말</td>
</tr>
</tbody>
</table>
</div>

<h2>카카오 알림톡·SMS와 분량 비교</h2>
<p>국내 비즈니스 메시징 서비스와의 분량 비교는 해외 플랫폼 연동 시 기준 결정에 도움이 된다.</p>

<ul>
<li><strong>WhatsApp 비즈니스 템플릿</strong>: 최대 1,024자. 영문·한국어·이모지 모두 동일 기준 (WhatsApp Business API 공식).</li>
<li><strong>카카오 알림톡</strong>: 최대 1,000자 (카카오 i 오픈빌더 공식).</li>
<li><strong>SMS</strong>: 최대 90바이트(한국어 약 40~45자). 초과 시 MMS로 자동 전환 (이동통신사 표준).</li>
</ul>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>WhatsApp 비즈니스 템플릿 특이사항</strong><br>
WhatsApp Business API 공식 문서에 따르면 비즈니스 메시지 템플릿은 Meta의 사전 승인이 필요하다. 1,024자 한도 내에서 헤더(60자) + 본문(1,024자) + 버튼 텍스트(20자/버튼) 구조로 구성된다.
</div>

<h2>WhatsApp 비즈니스 메시지 최적 분량 전략</h2>
<p>WhatsApp Business API 공식 가이드는 아래와 같은 메시지 분량 원칙을 제시한다.</p>

<ul>
<li><strong>알림성 메시지 (주문 확인, 배송 안내)</strong>: 100~200자. 핵심 정보(주문번호, 상태, 예상 시간)만 포함.</li>
<li><strong>마케팅 메시지 (프로모션, 쿠폰)</strong>: 150~400자. 혜택 + CTA 명확히. WhatsApp Business API 공식은 명확한 수신 동의(Opt-in)를 받은 대상에게만 마케팅 메시지를 발송하도록 의무화.</li>
<li><strong>고객 지원 메시지</strong>: 100~300자. 질문에 직접 답변 + 추가 도움 제공 안내.</li>
</ul>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>WhatsApp 비즈니스 메시지가 읽히지 않을 때 어떻게 하나요?</strong></dt>
<dd>WhatsApp Business API 공식 가이드는 메시지 도달률 저하의 주요 원인으로 과도한 마케팅 메시지 발송을 지목합니다. 수신자가 스팸 신고를 하면 발신 계정의 품질 등급이 낮아져 발송이 제한될 수 있습니다. 메시지 빈도와 분량을 최소화하고, 수신 동의를 명확히 받은 대상에게만 발송해야 합니다.</dd>
<dt><strong>WhatsApp 메시지와 카카오톡 메시지 중 어느 것이 더 긴가요?</strong></dt>
<dd>일반 채팅 메시지 기준으로 WhatsApp(65,536자)과 카카오톡(공식 한도 미공개, 실질적으로 수천 자 이상)은 모두 실용적 한도가 충분히 크습니다. 비즈니스 메시지 기준으로는 WhatsApp 비즈니스 템플릿(1,024자)과 카카오 알림톡(1,000자)이 거의 동일한 수준입니다.</dd>
</dl>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "WhatsApp Business API 공식 문서", link: "https://developers.facebook.com/docs/whatsapp", description: "WhatsApp 비즈니스 메시지 공식 기준" }
    ]
  },
  {
    slug: "real-estate-listing-description-length",
    title: "부동산 매물 설명 글자수 가이드 — 네이버 부동산·직방 공식 기준",
    description: "부동산 매물 설명의 최적 분량은 몇 자일까? 네이버 부동산·직방 공식 기준과 아파트·단독주택·상가별 권장 분량을 정리합니다.",
    publishedAt: "2026-07-22",
    metaTitle: "부동산 매물 설명 글자수 — 네이버 부동산·직방 기준 (2026)",
    metaDescription: "네이버 부동산 매물 설명 최대 1,000자, 직방 최대 2,000자. 아파트·오피스텔·상가별 권장 분량과 효과적인 매물 설명 구조를 정리합니다.",
    targetKeywords: ["부동산 매물 설명 글자수", "부동산 설명문 길이", "네이버 부동산 글자수", "매물 설명 분량"],
    category: "부동산",
    tags: ["부동산", "매물설명", "네이버부동산", "직방", "중개"],
    aeoQuestion: "부동산 매물 설명은 몇 자가 적당한가요?",
    aeoAnswer: "네이버 부동산 매물 설명 최대 입력은 1,000자입니다. 아파트 매물의 경우 300~600자, 상가·오피스는 600~1,000자가 일반적으로 효과적인 범위입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "피치덱 텍스트 분량 가이드", link: "/blog/pitch-deck-text-length" }
    ],
    content: `<p>부동산 매물 설명을 얼마나 써야 하는가? 너무 짧으면 신뢰를 주지 못하고, 너무 길면 요점이 묻힌다. 네이버 부동산 파트너 공식 가이드는 매물 설명란 최대 1,000자를 제공하며, 이 범위 내에서 입지·시설·특징을 구체적으로 기재할 것을 권장한다.</p>

<div class="speakable-summary" style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>한 줄 요약</strong><br>
부동산 매물 설명 권장 범위: 아파트·오피스텔 <strong>300~600자</strong>, 상가·오피스 <strong>600~1,000자</strong>. 네이버 부동산 공식 최대: 1,000자.
</div>

<h2>플랫폼별 매물 설명 글자수 공식 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">매물 설명 최대</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">네이버 부동산</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">네이버 부동산 파트너 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">직방</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">직방 공식 파트너 가이드</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">국토교통부 실거래가 공개시스템</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">필수 기재 항목 중심</td>
<td style="border:1px solid #ddd;padding:8px 12px">국토교통부 공식</td>
</tr>
</tbody>
</table>
</div>

<h2>매물 유형별 권장 분량</h2>
<p>매물 유형마다 구매자·임차인이 필요로 하는 정보의 양이 다르다.</p>

<ul>
<li><strong>아파트·오피스텔</strong>: 300~600자. 층수·향·내부 상태·관리비·주차 정보가 핵심. 단지명과 면적(전용/공급)은 플랫폼이 자동 표시하므로 설명에 중복 기재 불필요.</li>
<li><strong>단독주택·빌라</strong>: 400~700자. 건물 연식, 주차 가능 여부, 채광, 인근 대중교통 접근성 포함.</li>
<li><strong>상가·오피스</strong>: 600~1,000자. 업종 제한 여부, 권리금·보증금 구조, 유동인구 정보, 전기 용량 등 상업적 판단에 필요한 세부 정보 포함.</li>
<li><strong>토지</strong>: 400~800자. 지목, 용도지역(국토교통부 공식 용도지역 분류 기준), 도로 접면, 개발 가능 여부 포함.</li>
</ul>

<h2>효과적인 매물 설명 구조</h2>
<p>네이버 부동산 파트너 가이드가 권장하는 매물 설명 구성 요소:</p>

<ol>
<li><strong>핵심 강점 (50~100자)</strong>: 가장 중요한 장점 1~2가지. 첫 문장에서 바로 제시.</li>
<li><strong>내부 시설 및 상태 (100~200자)</strong>: 최근 인테리어 여부, 풀옵션 구성, 주요 시설 상태.</li>
<li><strong>위치 및 교통 (100~200자)</strong>: 역세권 여부, 버스 노선, 주요 거점까지의 거리.</li>
<li><strong>관리비·부대 비용 (50~100자)</strong>: 월 관리비 금액, 포함 항목, 주차비 별도 여부.</li>
<li><strong>연락처 안내 (30~50자)</strong>: 플랫폼 메시지 또는 전화 연결 유도.</li>
</ol>

<div style="background:#fff7ed;border:1px solid #fed7aa;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>공인중개사법 표시·광고 주의</strong><br>
국토교통부 공인중개사법은 부동산 광고에 허위·과장 표현을 금지합니다. '최고 입지', '반드시 오르는' 등 근거 없는 단정적 표현은 과장 광고로 제재 대상이 될 수 있습니다(국토교통부 공식 가이드).
</div>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>매물 설명에 사진이 있으면 텍스트를 줄여도 되나요?</strong></dt>
<dd>네이버 부동산 파트너 가이드는 사진과 텍스트 설명이 서로 보완 관계라고 설명합니다. 사진이 외관과 내부 상태를 보여준다면, 텍스트는 교통·관리비·계약 조건 등 사진으로 알 수 없는 정보를 담아야 합니다.</dd>
<dt><strong>허위 매물 등록을 피하려면 어떻게 해야 하나요?</strong></dt>
<dd>국토교통부와 네이버 부동산·직방 모두 허위 매물 신고 시스템을 운영합니다. 설명에 기재한 가격·면적·상태가 실제와 다를 경우 신고 대상이 되며, 반복 허위 등록 시 플랫폼 이용 제한 조치가 취해집니다.</dd>
</dl>

<p>매물 설명 초안을 작성한 뒤 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 분량을 확인하고 플랫폼별 최대 입력 한도와 대조해 보자. AI 기반 매물 설명 자동 생성 서비스가 확산되면서, 키워드 최적화된 매물 설명의 중요성이 더욱 커질 것으로 전망된다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "네이버 부동산 파트너", link: "https://land.naver.com/", description: "네이버 부동산 매물 설명 공식 기준" },
      { text: "국토교통부", link: "https://www.molit.go.kr/", description: "부동산 광고 표시 기준 공식" }
    ]
  },
  {
    slug: "linkedin-article-vs-post-length",
    title: "LinkedIn 아티클 vs 게시물 — 분량 차이와 도달 전략 완전 가이드",
    description: "LinkedIn 아티클(최대 125,000자)과 게시물(최대 3,000자)의 분량 차이, 적합한 콘텐츠 유형, 도달 전략을 LinkedIn 공식 기준으로 정리합니다.",
    publishedAt: "2026-07-23",
    metaTitle: "LinkedIn 아티클 vs 게시물 분량 가이드 — 언제 무엇을 쓸까 (2026)",
    metaDescription: "LinkedIn 아티클 최대 125,000자 vs 게시물 3,000자. 형식별 적합한 콘텐츠 유형과 도달 전략을 LinkedIn 공식 가이드 기반으로 정리합니다.",
    targetKeywords: ["LinkedIn 아티클 길이", "LinkedIn 아티클 분량", "링크드인 아티클 vs 포스트", "LinkedIn 글자수"],
    category: "LinkedIn·전문직 SNS",
    tags: ["LinkedIn", "아티클", "게시물", "콘텐츠", "B2B"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "LinkedIn 게시물 글자수 가이드", link: "/blog/linkedin-post-word-count-guide" }
    ],
    content: `<p>LinkedIn에서 긴 글을 쓸 때 고민이 생긴다. 게시물(Post)에 쓸까, 아티클(Article)에 쓸까. 게시물은 피드에 즉시 노출되고, 아티클은 프로필에 영구 저장된다. LinkedIn 공식 도움말에 따르면 게시물 최대는 3,000자, 아티클 최대는 125,000자(영문 기준)다.</p>

<h2>LinkedIn 아티클과 게시물의 차이 — 형식과 도달</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">게시물 (Post)</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">아티클 (Article)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">최대 글자수</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">125,000자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">피드 노출</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">즉시 피드에 표시</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">팔로워 피드에 배포됨</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">프로필 저장</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">활동 섹션에 표시</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">프로필 아티클 섹션에 고정</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">검색 인덱싱</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">LinkedIn 내부 검색</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">LinkedIn + 외부 검색엔진 인덱싱</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">서식 지원</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">제한적 (줄바꿈, 이모지)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">H1·H2, 굵기, 이미지, 링크</td>
</tr>
</tbody>
</table>
</div>
<p>LinkedIn 공식 도움말에 따르면 아티클은 Google 등 외부 검색엔진에도 인덱싱된다. 이는 게시물에는 없는 SEO 효과다. 반면 피드 알고리즘 노출은 게시물이 더 즉각적이다.</p>

<h2>아티클 최적 분량</h2>
<p>LinkedIn 공식 마케팅 가이드는 아티클의 최대 125,000자 한도 중 실제 효과적인 분량에 대해 아래를 권고한다.</p>

<ul>
<li><strong>짧은 아티클 (500~1,500자)</strong>: 단일 통찰이나 전문적 의견 공유. 게시물과 유사하지만 프로필에 영구 저장되는 형식.</li>
<li><strong>표준 아티클 (1,500~3,000자)</strong>: 직업적 경험 공유, 업계 분석, 튜토리얼. 가장 많이 사용되는 분량 범위.</li>
<li><strong>심층 아티클 (3,000~7,000자)</strong>: 연구 기반 분석, 단계별 가이드. 외부 검색 유입 기대 시 유리.</li>
<li><strong>7,000자 이상</strong>: 백서(White Paper) 수준. LinkedIn 공식은 이 경우 별도 문서 링크를 아티클에 포함하는 방식을 권장.</li>
</ul>

<h2>게시물에서 아티클로 넘어가야 할 시점</h2>
<p>게시물 3,000자 한도가 부족해지거나, 아래 조건에 해당할 때 아티클을 선택한다.</p>

<ul>
<li>내용이 시간이 지나도 가치를 유지하는 에버그린 콘텐츠일 때</li>
<li>외부 검색엔진 노출을 원할 때 (LinkedIn 공식: 아티클은 구글 검색에 인덱싱)</li>
<li>프로필에 전문성 포트폴리오로 쌓고 싶을 때</li>
<li>이미지·표·링크를 구조적으로 포함해야 할 때</li>
</ul>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>Newsletter 기능 참고</strong><br>
LinkedIn 공식은 Newsletter 기능을 통해 아티클을 구독자에게 정기 배포할 수 있다고 안내한다. Newsletter 아티클은 일반 아티클과 동일한 125,000자 한도를 공유하며, 구독자 이메일 알림이 자동으로 발송된다.
</div>

<h2>콘텐츠 유형별 LinkedIn 분량 전략</h2>
<ul>
<li><strong>업계 소식 공유 + 짧은 의견</strong>: 게시물, 200~500자.</li>
<li><strong>개인 경험 스토리</strong>: 게시물, 500~1,500자. 첫 210자(기본 노출 구간)에 훅 배치.</li>
<li><strong>How-to 가이드</strong>: 아티클, 1,500~3,000자. 단계별 구조 + H2 소제목.</li>
<li><strong>연구 결과 공유</strong>: 아티클, 2,000~5,000자. 데이터 출처와 방법론 명시.</li>
<li><strong>채용 공고</strong>: 게시물, 300~600자 + LinkedIn Jobs 연동.</li>
</ul>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>LinkedIn 아티클은 게시물보다 더 많은 사람에게 노출되나요?</strong></dt>
<dd>LinkedIn 공식 마케팅 가이드에 따르면 게시물이 피드 알고리즘의 즉각적 노출에서 유리하고, 아티클은 외부 검색엔진 인덱싱으로 장기 유입에서 유리합니다. 단기 도달은 게시물, 장기 SEO는 아티클이 강점입니다.</dd>
<dt><strong>게시물을 아티클로 변환할 수 있나요?</strong></dt>
<dd>LinkedIn 공식 기능상 게시물을 직접 아티클로 변환하는 기능은 없습니다. 게시물 내용을 복사해 새 아티클로 작성하는 방식으로 전환할 수 있습니다. 이 경우 원문 게시물과의 중복 콘텐츠 여부를 LinkedIn 공식 콘텐츠 정책 내에서 확인하는 것이 좋습니다.</dd>
</dl>

<p>아티클 또는 게시물 초안을 작성한 뒤 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 분량을 확인하고 형식별 최적 범위와 대조해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "LinkedIn 공식 도움말", link: "https://www.linkedin.com/help/linkedin", description: "아티클·게시물 공식 기준" }
    ]
  },
  {
    slug: "content-brief-word-count",
    title: "콘텐츠 브리프 분량 가이드 — 효과적인 브리프의 적정 길이와 구성",
    description: "콘텐츠 브리프는 얼마나 상세해야 할까? 너무 짧아도 너무 길어도 문제다. 간단 브리프 vs 상세 브리프의 분량 기준과 5단계 작성 프로세스를 정리합니다.",
    publishedAt: "2026-07-24",
    metaTitle: "콘텐츠 브리프 분량 가이드 — 적정 길이와 필수 항목 (2026)",
    metaDescription: "콘텐츠 브리프 간단형 1페이지·상세형 3~5페이지 기준. Google 검색센터 SEO 원칙을 반영한 5단계 브리프 작성 프로세스를 정리합니다.",
    targetKeywords: ["콘텐츠 브리프 분량", "콘텐츠 브리프 길이", "SEO 브리프 작성", "콘텐츠 기획서"],
    category: "콘텐츠 마케팅",
    tags: ["콘텐츠 브리프", "SEO", "콘텐츠 마케팅", "기획", "글쓰기"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "블로그 서론 분량 가이드", link: "/blog/blog-post-introduction-word-count" }
    ],
    content: `<p>너무 짧은 브리프는 작성자를 방황하게 하고, 너무 긴 브리프는 창의성을 질식시킨다. 콘텐츠 브리프(Content Brief)는 작성자에게 방향을 주는 문서이지 완성된 글의 뼈대가 아니다. Google 검색센터 공식 가이드는 콘텐츠가 "주제를 충분히 다루어야" 한다고 명시하는데, 브리프에서 '목표 분량'을 정하지 않으면 이 기준을 맞추기 어렵다.</p>

<h2>1단계. 브리프 유형 결정</h2>
<p>콘텐츠 목적과 작성자 경험에 따라 브리프 유형을 선택한다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">브리프 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">적합한 상황</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">간단 브리프</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 1페이지 (500~1,000자)</td>
<td style="border:1px solid #ddd;padding:8px 12px">경험 있는 작성자, 반복 주제, 짧은 글 (1,000자 이하)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">표준 브리프</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 2~3페이지 (1,500~3,000자)</td>
<td style="border:1px solid #ddd;padding:8px 12px">블로그 포스트, SEO 최적화 글, 신규 작성자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">상세 브리프</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3~5페이지 (3,000~5,000자)</td>
<td style="border:1px solid #ddd;padding:8px 12px">장문 콘텐츠, 기술 문서, 외부 프리랜서 발주</td>
</tr>
</tbody>
</table>
</div>

<h2>2단계. 필수 항목 작성</h2>
<p>유형에 관계없이 모든 브리프에 포함해야 하는 필수 항목은 다음과 같다.</p>

<ul>
<li><strong>타겟 키워드</strong>: 주 키워드 1개 + 보조 키워드 2~5개. Google 검색센터 공식은 타겟 키워드를 제목과 첫 단락에 자연스럽게 포함하도록 권고.</li>
<li><strong>목표 독자</strong>: 누가 읽는가. 전문가인지 일반인인지에 따라 용어 수준이 달라짐.</li>
<li><strong>목표 단어수 / 글자수</strong>: 경쟁사 콘텐츠 분량을 참고해 설정. Google 검색센터는 '충분한 주제 커버리지'를 권고하며, 이를 수치로 표현한 것이 목표 분량.</li>
<li><strong>H2 목록 (초안)</strong>: 주요 소제목 3~7개. 작성자가 구조를 쉽게 파악하도록.</li>
<li><strong>참고 URL</strong>: 경쟁사 상위 노출 콘텐츠 2~3개. 반드시 '참고'용, 표절 금지.</li>
</ul>

<h2>3단계. 목표 분량 산정</h2>
<p>목표 분량은 경쟁사 분석을 기반으로 설정하는 것이 Google 검색센터의 간접 권고와 일치한다. 주요 검색어에서 1~3위를 차지하는 콘텐츠의 평균 분량을 측정하고, 이를 10~20% 초과하는 목표를 설정하면 주제 커버리지에서 우위를 가질 수 있다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>분량 vs 품질</strong><br>
Google 검색센터 공식은 "더 많은 단어수가 더 좋은 콘텐츠를 의미하지 않는다"고 명확히 밝힌다. 목표 분량은 최소한의 가이드이지 채우기 위한 목표가 아니다.
</div>

<h2>4단계. 브리프 길이 최적화</h2>
<p>브리프 자체가 너무 길면 작성자 부담이 증가하고 실제 글 작성 전에 방향성 혼란이 생긴다. 브리프를 간결하게 유지하는 원칙:</p>

<ul>
<li>필수 항목은 표 또는 불릿 리스트로 정리. 산문(prose)으로 쓰지 않음.</li>
<li>참고 URL은 최대 3개. 더 많으면 작성자가 모두 읽기 어렵다.</li>
<li>어조·스타일 가이드는 별도 문서로 분리. 브리프마다 반복 기재 불필요.</li>
</ul>

<h2>5단계. 브리프 검토 및 전달</h2>
<p>브리프 전달 전에 아래를 확인한다.</p>
<ul>
<li>타겟 키워드가 구체적인가? ('마케팅' → '소셜미디어 마케팅 글자수')</li>
<li>목표 분량이 경쟁사 기준으로 설정되었는가?</li>
<li>H2 목록이 독자의 실제 질문을 반영하는가?</li>
</ul>

<p>브리프 초안의 분량을 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 측정하고 유형별 권장 범위와 대조해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Google 검색센터", link: "https://developers.google.com/search", description: "콘텐츠 품질 공식 가이드" }
    ]
  },
  {
    slug: "translation-word-count-billing",
    title: "번역 글자수 단위 가이드 — 한국어 200자/매 기준과 언어별 비교",
    description: "번역 요금 산정 기준인 한국어 200자/매, 영어 word count, 일본어 400자 원고지 단위를 한국번역가협회 기준으로 비교 정리합니다.",
    publishedAt: "2026-07-25",
    metaTitle: "번역 글자수 단위 가이드 — 한국어 200자/매·언어별 기준 비교",
    metaDescription: "한국어 번역 단위 200자/매, 영어 word count, 일본어 400자 원고지. 번역 발주 시 분량 계산법과 언어별 기준을 한국번역가협회 공식 기준으로 정리합니다.",
    targetKeywords: ["번역 글자수", "번역 단위", "번역 매수 계산", "번역료 기준"],
    category: "번역·언어",
    tags: ["번역", "글자수", "매수", "번역료", "한국번역가협회"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "학술 논문 분량 가이드", link: "/blog/academic-paper-word-count-guide" }
    ],
    content: `<blockquote style="border-left:4px solid #94a3b8;padding:12px 20px;margin:20px 0;background:#f8fafc;color:#475569;font-style:italic">
"1매 = 200자." — 한국번역가협회 번역 단위 표준 기준
</blockquote>

<p>번역을 발주하거나 견적을 받을 때 '매수'라는 단위가 등장한다. 한국번역가협회가 표준으로 정한 기준은 <strong>1매 = 200자(한국어)</strong>다. 같은 문서도 언어에 따라 단위가 달라지므로, 번역 발주 전에 원문 언어별 단위를 이해하는 것이 중요하다.</p>

<h2>한국 번역 단위의 역사적 변화</h2>
<p>번역 단위의 역사는 원고 작성 방식의 변화와 함께한다.</p>

<ul>
<li><strong>타자기 시대 (1960~1980년대)</strong>: 원고지(400자) 기준이 지배적이었다. 세로쓰기 원고지 1매 = 400자(20×20칸)가 출판·번역의 표준 단위였다.</li>
<li><strong>워드프로세서 전환 (1990년대)</strong>: 디지털 전환 이후 200자/매 기준이 등장했다. 한국번역가협회는 이 시기에 현행 200자/매 기준을 표준으로 채택했다.</li>
<li><strong>현재</strong>: 200자/매 기준이 업계 표준으로 정착. 일부 기관은 원고지 400자/매를 여전히 사용하므로 계약 전 확인이 필요하다.</li>
</ul>

<h2>언어별 번역 단위 기준 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">언어</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">기본 단위</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">비고</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">한국어 (번역 결과물)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200자 / 1매</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국번역가협회 표준 기준</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">영어 (원문 또는 번역 결과물)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">단어(word) 수</td>
<td style="border:1px solid #ddd;padding:8px 12px">국제 번역 업계 표준</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">일본어</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">400자 / 1매 (원고지)</td>
<td style="border:1px solid #ddd;padding:8px 12px">일본 출판·번역 업계 전통 기준</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">중국어</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">글자(字) 수</td>
<td style="border:1px solid #ddd;padding:8px 12px">공백·부호 포함 여부 계약 시 확인</td>
</tr>
</tbody>
</table>
</div>

<h2>번역 발주 시 분량 계산법</h2>
<p>번역을 발주할 때 원문 분량을 기반으로 번역 매수를 추정하는 계산법:</p>

<ul>
<li><strong>한→영 번역</strong>: 한국어 원문 글자수 ÷ 200 = 원문 매수. 영문 번역 결과물은 원문 대비 약 1.3~1.5배 단어수 증가 (언어 구조 차이)</li>
<li><strong>영→한 번역</strong>: 영문 원문 단어수 × 2.5~3 = 예상 한국어 글자수. 이를 200으로 나누면 한국어 매수</li>
<li><strong>분량 계산 공식</strong>: 한국어 글자수 ÷ 200 = 매수. 예: 5,000자 원고 = 25매</li>
</ul>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>공백·부호 포함 여부 확인</strong><br>
한국번역가협회 기준 200자/매에서 공백(띄어쓰기)·부호(쉼표, 마침표 등)의 포함 여부는 계약서에 명시해야 한다. 공백 포함 여부에 따라 같은 문서도 매수가 10~15% 차이 날 수 있다.
</div>

<h2>번역 단위와 CAT 도구</h2>
<p>현대 번역 작업에서는 CAT(Computer-Assisted Translation) 도구를 사용해 글자수와 반복 구간을 자동 분석한다. SDL Trados, memoQ 등 주요 CAT 도구는 한국어 200자/매 기준을 포함한 다양한 분량 계산 방식을 지원한다. 번역 발주 시 CAT 도구의 분석 결과를 기반으로 한 매수 견적이 점점 일반화되고 있다.</p>

<p>번역할 원문의 글자수를 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 측정하고, 위 공식으로 예상 매수를 계산해 보자. 총 글자수 ÷ 200 = 매수 계산이 즉시 가능하다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "한국번역가협회", link: "https://www.kati.or.kr/", description: "번역 단위 표준 기준 공식" }
    ]
  }
];
