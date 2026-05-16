import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH29: BlogPost[] = [
  {
    slug: "sns-hashtag-character-limit",
    title: "해시태그 글자수·개수 가이드 — Instagram·YouTube·X·LinkedIn 공식 기준",
    description: "Instagram 해시태그 최대 30개·100자, YouTube 최대 60개, LinkedIn 권장 3~5개 등 플랫폼별 해시태그 공식 기준을 총정리합니다.",
    publishedAt: "2026-07-26",
    metaTitle: "해시태그 글자수·개수 가이드 — 플랫폼별 공식 기준 총정리 (2026)",
    metaDescription: "Instagram 해시태그 최대 30개, YouTube 최대 60개(제목 3개 이하 권장), LinkedIn 3~5개. 플랫폼별 해시태그 공식 기준을 정리합니다.",
    targetKeywords: ["해시태그 글자수", "인스타그램 해시태그 개수", "유튜브 해시태그 개수", "해시태그 길이 제한"],
    category: "소셜미디어",
    tags: ["해시태그", "Instagram", "YouTube", "X", "LinkedIn", "TikTok"],
    aeoQuestion: "Instagram 해시태그는 최대 몇 개까지 달 수 있나요?",
    aeoAnswer: "Meta Business Help Center 공식 기준에 따르면 Instagram 게시물당 해시태그 최대 30개까지 추가할 수 있으며, 해시태그 1개당 최대 100자까지 입력 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "소셜미디어 캡션 글자수 가이드", link: "/blog/social-media-caption-length-guide" }
    ],
    content: `<p>2023년 YouTube는 게시물 제목에 해시태그 3개 이상을 넣으면 해당 영상의 전체 해시태그를 무효화한다는 정책을 공식 가이드에 명시했다. 해시태그를 많이 쓸수록 좋다는 통념이 플랫폼 정책과 충돌하는 지점이다. Instagram 기준 최대 30개를 허용하지만 Meta 공식은 5~10개를 효과적이라고 권장한다.</p>

<h2>플랫폼별 해시태그 개수·글자수 공식 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 개수</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">개당 최대 글자수</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Instagram</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">30개</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Meta Business Help Center</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">TikTok</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">별도 최대 없음</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">캡션 2,200자 내</td>
<td style="border:1px solid #ddd;padding:8px 12px">TikTok for Business 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube (설명란)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 60개</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">설명란 5,000자 내</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">YouTube (제목)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1~2개 권장</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">제목 100자 내</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">X (트위터)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">280자 한도 내</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">280자 한도 공유</td>
<td style="border:1px solid #ddd;padding:8px 12px">X 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">LinkedIn</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3~5개 권장</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">게시물 3,000자 내</td>
<td style="border:1px solid #ddd;padding:8px 12px">LinkedIn 공식 도움말</td>
</tr>
</tbody>
</table>
</div>

<h2>YouTube 해시태그 특이 규정</h2>
<p>YouTube Help 공식 가이드는 해시태그에 대한 명확한 제한을 명시한다.</p>

<ul>
<li>영상 제목에 해시태그를 <strong>3개 이상</strong> 넣으면 해당 영상에 달린 <strong>모든 해시태그가 무효화</strong>된다.</li>
<li>설명란에는 최대 60개까지 허용하지만, 15개 이상은 스팸으로 간주될 수 있다.</li>
<li>해시태그를 통한 검색 노출은 설명란 첫 3개 해시태그가 제목 바로 위에 표시된다(YouTube 공식).</li>
</ul>

<div style="background:#fef2f2;border:1px solid #fecaca;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>YouTube 제목 해시태그 경고</strong><br>
YouTube Help 공식: 제목에 해시태그 3개 이상 → 전체 해시태그 무효화. 제목에는 1~2개 이하로 유지할 것.
</div>

<h2>해시태그 글자수 최적화 프로세스</h2>
<p>효과적인 해시태그 전략을 위해 아래 프로세스를 플랫폼별로 적용한다.</p>

<ol>
<li><strong>크기별 혼합</strong>: 소형(게시물 수 1만 이하) + 중형(1만~50만) + 대형(50만 이상) 해시태그를 혼합. Meta Business Help Center는 소형·중형 해시태그가 상위 노출 가능성이 높다고 설명한다.</li>
<li><strong>글자수 확인</strong>: 한국어 해시태그는 짧을수록 입력하기 쉽고 검색에서 노출 가능성이 높다. Instagram 100자 한도 내에서 10~30자 범위가 일반적.</li>
<li><strong>플랫폼 한도 준수</strong>: Instagram은 30개, YouTube 설명란은 15개 이하 권장.</li>
<li><strong>캡션 잘림 구간 이후 배치</strong>: Instagram 기준 125자 잘림 이후에 해시태그를 배치(Meta Business Help Center 권장).</li>
</ol>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>Instagram 해시태그 30개를 모두 써야 하나요?</strong></dt>
<dd>Meta Business Help Center 공식은 5~10개의 관련성 높은 해시태그가 30개의 무관한 해시태그보다 효과적이라고 권고합니다. 최대 개수를 채우는 것보다 타겟과의 관련성이 더 중요합니다.</dd>
<dt><strong>해시태그 글자수가 도달에 영향을 미치나요?</strong></dt>
<dd>Meta Business Help Center와 TikTok for Business 공식 모두 해시태그 글자수 자체가 도달에 직접 영향을 준다고 명시하지는 않습니다. 다만 구체적이고 검색 가능한 해시태그가 일반적인 짧은 해시태그보다 타겟 도달에 유리합니다.</dd>
</dl>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Meta Business Help Center", link: "https://www.facebook.com/business/help", description: "Instagram 해시태그 공식 기준" },
      { text: "YouTube Help 공식", link: "https://support.google.com/youtube/", description: "YouTube 해시태그 규정 공식" }
    ]
  },
  {
    slug: "book-proposal-word-count",
    title: "출판 기획서·책 제안서 분량 가이드 — 국내외 기준 비교",
    description: "출판사에 제출하는 도서 기획서의 적정 분량은 몇 페이지일까? 문화체육관광부 출판 지원 기준과 미국 Book Proposal 기준을 비교합니다.",
    publishedAt: "2026-07-27",
    metaTitle: "출판 기획서·책 제안서 분량 가이드 — 국내외 기준 비교 (2026)",
    metaDescription: "문체부 출판 지원 기획서 3~5페이지, 미국 Book Proposal 30~50페이지. 국내외 출판 기획서 분량과 필수 구성 요소를 정리합니다.",
    targetKeywords: ["출판 기획서 분량", "책 제안서 글자수", "출판사 제안서 길이", "도서 기획서"],
    category: "출판·글쓰기",
    tags: ["출판기획서", "도서제안서", "Book Proposal", "출판", "작가"],
    aeoQuestion: "출판사에 제출하는 도서 기획서는 몇 페이지가 적당한가요?",
    aeoAnswer: "국내 출판사 일반 제출용은 A4 3~5페이지가 일반적입니다. 문화체육관광부 출판 지원 공모 기준도 3~5페이지 범위입니다. 미국 Literary Agent용 Book Proposal은 30~50페이지가 일반적입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "학술 논문 분량 가이드", link: "/blog/academic-paper-word-count-guide" }
    ],
    content: `<p>출판사에 기획서를 제출할 때 얼마나 써야 할까? 국내 출판사는 A4 3~5페이지를 선호하는 반면, 미국 Literary Agent에게 보내는 Book Proposal은 30~50페이지가 일반적이다. 이 차이는 출판 계약 관행과 독자 시장의 규모 차이에서 비롯된다.</p>

<div class="speakable-summary" style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>한 줄 요약</strong><br>
국내 출판사 기획서: <strong>A4 3~5페이지</strong> (2,400~4,000자). 미국 Literary Agent 제안서: <strong>30~50페이지</strong>.
</div>

<h2>국내 출판 기획서 분량 기준</h2>
<p>문화체육관광부는 매년 출판 진흥 지원 사업을 운영하며, 공모 신청서 형식에서 기획서 분량 기준을 공시한다. 일반적으로 A4 3~5페이지(한국어 약 2,400~4,000자)가 기준이며, 지원 사업 유형에 따라 차이가 있다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">제출 대상</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">비고</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">국내 출판사 일반 투고</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3~5페이지</td>
<td style="border:1px solid #ddd;padding:8px 12px">출판사마다 양식 상이, 공식 확인 필요</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">문화체육관광부 출판 지원 공모</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3~5페이지</td>
<td style="border:1px solid #ddd;padding:8px 12px">문체부 공식 공모 기준 (연도별 공고 확인)</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">한국출판문화산업진흥원 지원</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">공모별 양식 상이</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국출판문화산업진흥원 공식 공고 확인</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">미국 Literary Agent Book Proposal</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">30~50페이지</td>
<td style="border:1px solid #ddd;padding:8px 12px">개요 + 시장 분석 + 샘플 챕터 포함</td>
</tr>
</tbody>
</table>
</div>

<h2>효과적인 기획서 구성 요소와 분량 배분</h2>
<p>A4 4페이지 기준 출판 기획서의 항목별 권장 분량:</p>

<ul>
<li><strong>책 제목 + 한 줄 요약 (1~2문장)</strong>: 50~100자. 편집자가 가장 먼저 보는 부분.</li>
<li><strong>기획 의도 / 책이 필요한 이유</strong>: 300~600자. 왜 지금 이 책인가.</li>
<li><strong>독자 타겟</strong>: 200~400자. 누가 읽을 것인가, 왜 구매할 것인가.</li>
<li><strong>목차 초안</strong>: 장 제목 + 각 장 100자 요약 × 장 수. 전체 300~800자.</li>
<li><strong>저자 소개</strong>: 200~400자. 이 책을 쓸 자격, 관련 경력·전문성 중심.</li>
<li><strong>샘플 원고</strong>: 1~2장 (약 5,000~10,000자). 실제 문체와 깊이를 보여주는 핵심 부분.</li>
</ul>

<h2>국내 vs 미국 기획서 분량 차이의 사례</h2>
<p>미국 출판 시장에서 Literary Agent에게 보내는 Book Proposal이 긴 이유는 계약 구조 때문이다. 미국 에이전트는 기획서를 여러 출판사에 경매 형태로 제출하며, 출판사는 기획서만으로 수십만 달러의 선인세를 결정한다. 따라서 기획서가 시장 분석·경쟁 도서 분석·마케팅 계획까지 포함하는 30~50페이지 분량이 된다.</p>

<p>국내는 편집자가 저자를 직접 만나 추가 논의를 거치는 방식이 일반적이므로, 초기 기획서는 3~5페이지의 핵심 요약본으로 충분하다. 한국출판문화산업진흥원은 공모 심사에서 기획서의 완성도와 시장성을 평가 기준으로 삼는다고 공식 가이드에 명시한다.</p>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>샘플 원고는 기획서에 반드시 포함해야 하나요?</strong></dt>
<dd>국내 출판사에 따라 다릅니다. 일부 출판사는 기획서만으로도 미팅을 진행하고, 다른 곳은 샘플 원고 1~2챕터를 필수로 요청합니다. 투고 전 해당 출판사 공식 투고 가이드라인을 확인하는 것이 필수입니다.</dd>
<dt><strong>목차 초안이 나중에 바뀌면 계약에 문제가 되나요?</strong></dt>
<dd>기획 단계의 목차는 확정이 아닙니다. 문화체육관광부 출판 지원 사업 약관에서도 기획서 내용의 수정 가능성을 허용하는 조항을 포함합니다. 다만 큰 방향성이 바뀌면 출판사와 협의가 필요합니다.</dd>
</dl>

<p>기획서 각 항목의 글자수를 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 측정하고 위 권장 범위와 대조해 보자. 앞으로 AI 보조 원고 작성이 일반화되면서 기획서 단계에서 샘플 챕터 요구가 줄어들 것이라는 전망도 출판 업계에서 논의되고 있다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "문화체육관광부", link: "https://www.mcst.go.kr/", description: "출판 지원 공모 공식 기준" },
      { text: "한국출판문화산업진흥원", link: "https://www.kpipa.or.kr/", description: "출판 지원 사업 공식" }
    ]
  },
  {
    slug: "customer-service-script-length",
    title: "고객 서비스 스크립트 분량 가이드 — 채널별 응대 텍스트 최적 길이",
    description: "전화 CS 스크립트, 채팅 상담, 이메일 응대의 최적 분량 기준과 한국소비자원 응대 표준을 인과관계 관점으로 정리합니다.",
    publishedAt: "2026-07-28",
    metaTitle: "고객 서비스 스크립트 분량 가이드 — 전화·채팅·이메일 기준",
    metaDescription: "전화 CS 스크립트 1~3분 분량, 채팅 상담 메시지 100~200자, 이메일 응대 300~600자. 한국소비자원 공식 기준 기반 채널별 CS 분량 가이드.",
    targetKeywords: ["CS 스크립트 분량", "고객 서비스 스크립트 길이", "채팅 상담 글자수", "콜센터 스크립트"],
    category: "고객 서비스",
    tags: ["CS", "콜센터", "채팅상담", "이메일응대", "고객서비스"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "챗봇 메시지 분량 가이드", link: "/blog/chatbot-message-length-guide" }
    ],
    content: `<p>CS 스크립트가 너무 길면 상담원이 암기하지 못해 읽어 내려가는 느낌을 주고, 너무 짧으면 중요한 정보가 누락된다. 이 인과관계는 채널마다 다르게 작용한다. 전화 스크립트는 발화 속도에 제한이 있고, 채팅 상담은 메시지 버블 단위로 끊어 읽힌다. 이메일은 스크롤을 넘기면 이탈한다.</p>

<h2>채널별 CS 스크립트 분량 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">채널</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기준 근거</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">전화 인사 스크립트</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">10~20초 (60~120자)</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국소비자원 표준 응대 가이드</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">전화 문제 해결 스크립트</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1~3분 (300~900자)</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국소비자원 표준 응대 가이드</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">채팅 상담 메시지 (1개)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~200자</td>
<td style="border:1px solid #ddd;padding:8px 12px">카카오 오픈빌더 공식 권고</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">이메일 응대</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~600자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Mailchimp 공식 이메일 가이드 기준 응용</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">FAQ 답변 (1항목)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~150자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Google 검색센터 speakable 권고 기준</td>
</tr>
</tbody>
</table>
</div>

<h2>너무 긴 스크립트의 문제 — 인과관계 분석</h2>
<p>CS 스크립트 분량과 응대 품질의 관계는 명확한 인과 구조를 가진다.</p>

<ul>
<li><strong>전화 스크립트가 과도하게 길 경우</strong>: 상담원이 대본에 집중하느라 고객 반응 파악에 소홀해진다. 고용노동부 콜센터 감정노동자 보호 가이드는 과도한 스크립트 암기 압박이 감정노동 강도를 높인다고 명시한다.</li>
<li><strong>채팅 메시지가 한 버블에 너무 길 경우</strong>: 카카오 오픈빌더 공식 가이드는 400자 한도 내 버블에 과도한 정보를 담으면 고객이 '더 보기' 없이 이탈한다고 설명한다. 분리 발송이 권장된다.</li>
<li><strong>이메일 응대가 너무 짧을 경우</strong>: 고객의 문의가 해결되지 않아 재문의로 이어진다. 한국소비자원 공식 통계에 따르면 반복 문의가 상담 비용을 증가시키는 주요 원인으로 분석된다.</li>
</ul>

<h2>스크립트 유형별 최적 구조</h2>
<p>채널별 스크립트 구조 설계 원칙:</p>

<ul>
<li><strong>전화 인사</strong>: 브랜드명 + 담당자명 + 도움 제안. "안녕하세요, [브랜드] 고객센터 [이름]입니다. 무엇을 도와드릴까요?" 형태로 15~20자.</li>
<li><strong>채팅 문제 해결</strong>: 문제 확인 → 해결 방법 안내(분리 발송) → CTA. 각 메시지 100~200자.</li>
<li><strong>이메일 응대</strong>: 문의 감사 + 문제 요약 + 해결 방법 + 추가 문의 안내. 총 300~600자.</li>
</ul>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>금융 민원 응대 특이사항</strong><br>
금융위원회 공식 금융 민원 처리 가이드는 민원 응대 시 처리 기한(영업일 기준)과 회신 방식을 명시하도록 규정한다. 금융업 CS 스크립트는 이 규정 준수 관련 안내 문구를 필수로 포함해야 한다.
</div>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>CS 스크립트를 글자수로 제한해야 하나요?</strong></dt>
<dd>채널별 특성에 따라 자연스러운 한도가 존재합니다. 전화는 발화 속도, 채팅은 플랫폼 버블 크기, 이메일은 스크롤 피로도가 실질적인 제한입니다. 글자수 제한보다 '고객이 이해했는가'를 기준으로 설계하는 것이 효과적입니다.</dd>
</dl>

<p>CS 스크립트 초안의 글자수를 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 측정하고 채널별 권장 범위와 대조해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "한국소비자원", link: "https://www.kca.go.kr/", description: "소비자 응대 표준 가이드 공식" },
      { text: "고용노동부", link: "https://www.moel.go.kr/", description: "콜센터 감정노동자 보호 가이드" }
    ]
  },
  {
    slug: "app-store-screenshot-text-length",
    title: "앱스토어 스크린샷 텍스트 분량 가이드 — iOS·Android 공식 기준",
    description: "App Store Connect와 Google Play Console의 스크린샷 텍스트 오버레이 공식 기준과 효과적인 5단계 스크린샷 텍스트 작성법을 정리합니다.",
    publishedAt: "2026-07-29",
    metaTitle: "앱스토어 스크린샷 텍스트 분량 가이드 — iOS·Android 기준 (2026)",
    metaDescription: "App Store 스크린샷 최대 10장, Google Play 최대 8장. 스크린샷 오버레이 텍스트 헤드라인 20~30자, 서브카피 40~60자 기준을 정리합니다.",
    targetKeywords: ["앱스토어 스크린샷 텍스트", "구글플레이 스크린샷 글자수", "앱 스크린샷 문구", "ASO 스크린샷"],
    category: "앱 마케팅·ASO",
    tags: ["App Store", "Google Play", "스크린샷", "ASO", "앱마케팅"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "앱스토어 설명 분량 가이드", link: "/blog/app-store-description-word-count" }
    ],
    content: `<p>앱스토어 스크린샷에서 텍스트가 과도하게 많으면 화면 자체를 가리고, 너무 적으면 기능이 전달되지 않는다. 이 비판적 균형이 스크린샷 텍스트 설계의 핵심이다. Apple Developer Documentation은 App Store 스크린샷에서 텍스트보다 앱의 실제 UI가 주인공이어야 한다는 원칙을 명시한다.</p>

<h2>1단계. 플랫폼별 스크린샷 공식 기준 파악</h2>
<p>스크린샷 텍스트 작성 전에 플랫폼별 기본 규칙을 파악한다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">App Store (iOS)</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">Google Play (Android)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">최대 스크린샷 수</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">10장</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">8장</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">텍스트 오버레이 허용 여부</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">허용 (UI 화면 가리지 않는 범위)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">허용</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">첫 화면 자동 재생</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">프리뷰 영상 가능</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">그래픽 이미지 또는 영상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">텍스트 금지 사항</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">수상 주장 직접 사용 금지</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">가격 표시 금지</td>
</tr>
</tbody>
</table>
</div>
<p>Apple Developer Documentation은 스크린샷이 "앱의 기능을 명확하고 직관적으로 보여야 한다"고 명시한다. Google Play Console 공식 가이드는 스크린샷이 앱의 핵심 가치를 전달해야 한다고 안내한다.</p>

<h2>2단계. 스크린샷별 핵심 메시지 결정</h2>
<p>최대 10장(iOS) 또는 8장(Android) 스크린샷 각각에 메시지 1개를 배정한다. 순서 배열:</p>

<ol>
<li><strong>1번 스크린샷 (가장 중요)</strong>: 앱의 핵심 가치 제안. 전환율에 가장 큰 영향. Apple Developer Documentation은 이 화면이 탐색 결과에서 표시되는 화면임을 명시.</li>
<li><strong>2~4번</strong>: 주요 기능 소개. 기능별 1화면.</li>
<li><strong>5~7번</strong>: 차별화 포인트. 경쟁앱과 다른 점.</li>
<li><strong>8~10번(iOS) / 8번(Android)</strong>: 사회적 증거(수상, 이용자 수) 또는 신뢰 지표.</li>
</ol>

<h2>3단계. 텍스트 분량 기준 적용</h2>
<p>스크린샷 오버레이 텍스트의 권장 분량:</p>

<ul>
<li><strong>헤드라인</strong>: 20~30자. 핵심 기능 또는 혜택을 한 문장으로. 화면 상단 또는 하단에 배치.</li>
<li><strong>서브카피 (선택)</strong>: 40~60자. 헤드라인 보완 설명. 헤드라인의 50% 이하 폰트 크기.</li>
<li><strong>텍스트 없는 스크린샷도 가능</strong>: UI가 직관적인 경우 텍스트 없이 화면만 보여주는 것이 더 효과적일 수 있다 (Apple Developer Documentation 권고).</li>
</ul>

<h2>4단계. App Store vs Google Play 텍스트 금지 사항 확인</h2>
<ul>
<li><strong>Apple Developer Documentation 금지사항</strong>: "앱스토어 최고", "#1 앱" 등 수상 주장을 직접 텍스트로 표시하면 리뷰 거절 사유가 된다. 수상 정보는 별도의 증거와 함께 제출해야 한다.</li>
<li><strong>Google Play Console 금지사항</strong>: 스크린샷에 가격·프로모션 텍스트 표시 불가. 가격은 스토어 리스팅의 별도 필드를 사용해야 한다.</li>
</ul>

<h2>5단계. 다국어 스크린샷 분량 고려</h2>
<p>App Store Connect와 Google Play Console 모두 언어별 로컬 스크린샷을 별도 제출할 수 있다. 한국어 텍스트는 같은 내용의 영문 대비 약 30~40% 짧은 글자수로 동일한 정보를 전달할 수 있다. 다국어 앱의 경우 언어별 헤드라인 분량을 개별 최적화하는 것을 Apple Developer Documentation은 권고한다.</p>

<p>스크린샷 텍스트를 작성한 뒤 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 헤드라인·서브카피 분량을 확인하고 화면 비율과 맞는지 조정해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Apple Developer Documentation", link: "https://developer.apple.com/", description: "App Store 스크린샷 공식 가이드" },
      { text: "Google Play Console", link: "https://play.google.com/console/", description: "Android 스크린샷 공식 가이드" }
    ]
  },
  {
    slug: "event-invitation-word-count",
    title: "행사 초대장 글자수 가이드 — 청첩장·기업 행사·디지털 초대 기준 비교",
    description: "결혼 청첩장, 기업 행사 초대장, 세미나 초대 이메일의 최적 글자수를 카카오페이 청첩장·디지털 서비스 기준으로 비교 정리합니다.",
    publishedAt: "2026-07-30",
    metaTitle: "행사 초대장 글자수 가이드 — 청첩장·기업 행사·이메일 초대 기준",
    metaDescription: "카카오페이 청첩장 인사말 최대 1,000자, 기업 행사 초대 이메일 200~400자 권장. 행사 유형별 초대장 글자수 기준을 정리합니다.",
    targetKeywords: ["청첩장 글자수", "행사 초대장 분량", "기업 행사 초대 메일", "디지털 청첩장 글자수"],
    category: "이벤트·행사",
    tags: ["초대장", "청첩장", "기업행사", "이메일초대", "디지털청첩장"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "이메일 제목 글자수 가이드", link: "/blog/email-subject-line-character-limit" }
    ],
    content: `<blockquote style="border-left:4px solid #94a3b8;padding:12px 20px;margin:20px 0;background:#f8fafc;color:#475569;font-style:italic">
"봄날의 화창한 날, 두 사람이 하나가 됩니다." — 전통 인쇄 청첩장의 전형적 문구 (1980~1990년대)
</blockquote>

<p>1980년대 인쇄 청첩장은 봄·가을 계절 문구로 시작하는 약 200~300자 분량이 표준이었다. 디지털 청첩장이 등장한 현재는 제한이 없어진 대신 읽히지 않는 긴 인사말이 문제가 됐다. 카카오페이 청첩장 공식 서비스는 인사말 최대 1,000자를 제공하지만, 실제 효과적인 분량은 200~400자로 줄었다.</p>

<h2>청첩장 글자수의 역사적 변화</h2>
<p>한국 청첩장 텍스트의 변화는 인쇄 기술과 디지털 전환의 역사를 반영한다.</p>

<ul>
<li><strong>1960~1980년대 인쇄 청첩장</strong>: A5 크기 인쇄물. 계절 시 문구 + 날짜/장소 중심. 약 150~300자.</li>
<li><strong>1990~2000년대</strong>: 컬러 인쇄와 사진 삽입 청첩장 등장. 주인공 부각으로 텍스트 분량은 비슷하게 유지.</li>
<li><strong>2010년대 디지털 청첩장 등장</strong>: 카카오톡 기반 디지털 청첩장이 보급. 텍스트 한도가 없어지면서 장문 인사말 시도가 증가.</li>
<li><strong>현재</strong>: 카카오페이, 모바일인비테이션 등 공식 플랫폼이 인사말 최대 글자수를 설정. 간결한 디지털 청첩장이 트렌드.</li>
</ul>

<h2>행사 유형별 초대장 글자수 기준 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">초대장 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">인사말/본문 권장 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 기준 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">카카오페이 디지털 청첩장</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~400자 권장 (최대 1,000자)</td>
<td style="border:1px solid #ddd;padding:8px 12px">카카오페이 공식 청첩장 서비스</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">기업 행사 초대 이메일</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~400자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Mailchimp 공식 이벤트 초대 가이드</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">세미나·컨퍼런스 초대</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~600자</td>
<td style="border:1px solid #ddd;padding:8px 12px">업계 관행 기준</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">정부·공공기관 행사 초대</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~500자</td>
<td style="border:1px solid #ddd;padding:8px 12px">행정안전부 공문서 작성 규정</td>
</tr>
</tbody>
</table>
</div>

<h2>효과적인 초대장 핵심 정보 구성</h2>
<p>행사 유형에 관계없이 초대장에 반드시 포함해야 할 5가지 핵심 정보:</p>

<ol>
<li><strong>행사명 / 행사 성격</strong>: 결혼식, 출판 기념회, 세미나 등. 1~2문장으로 명확히.</li>
<li><strong>날짜·시간</strong>: 연·월·일·요일·시간(오전/오후 포함). 약 20~30자.</li>
<li><strong>장소</strong>: 건물명 + 층수 + 홀명. 약 30~50자. 약도 또는 지도 링크 추가 권장.</li>
<li><strong>초대 문구 / 인사말</strong>: 카카오페이 기준 200~400자가 효과적인 범위.</li>
<li><strong>RSVP / 연락처</strong>: 참석 여부 확인 방법. 전화번호 또는 온라인 양식 링크.</li>
</ol>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>모바일 초대장 표시 기준</strong><br>
카카오페이 공식 청첩장 서비스는 스마트폰 화면에서 스크롤 없이 보이는 영역(Above the fold)에 날짜·시간·장소를 배치하도록 권고한다. 인사말은 스크롤 이후에 위치해도 무방하다.
</div>

<p>초대장 텍스트를 작성한 뒤 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 인사말 분량을 측정하고 플랫폼 최대치와 권장 범위와 대조해 보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "카카오페이 청첩장", link: "https://pay.kakao.com/", description: "디지털 청첩장 공식 서비스" },
      { text: "Mailchimp 공식", link: "https://mailchimp.com/", description: "이벤트 초대 이메일 공식 가이드" }
    ]
  }
];
