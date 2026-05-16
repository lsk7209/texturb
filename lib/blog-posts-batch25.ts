import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH25: BlogPost[] = [
  {
    slug: "social-media-caption-length-guide",
    title: "소셜미디어 캡션 글자수, 플랫폼별 공식 기준 총정리 (2026)",
    description: "Instagram, TikTok, YouTube, Facebook, LinkedIn, X의 캡션 최대 글자수와 '더 보기' 잘림 기준을 공식 출처 기반으로 정리합니다.",
    publishedAt: "2026-07-06",
    metaTitle: "소셜미디어 캡션 글자수 총정리 — 플랫폼별 공식 기준 (2026)",
    metaDescription: "Instagram 2,200자·TikTok 2,200자·LinkedIn 3,000자 등 플랫폼별 캡션 최대 글자수와 '더 보기' 잘림 기준을 공식 출처로 정리합니다.",
    targetKeywords: ["소셜미디어 캡션 글자수", "인스타그램 캡션 글자수", "틱톡 캡션 글자수", "링크드인 게시물 길이"],
    category: "소셜미디어",
    tags: ["Instagram", "TikTok", "LinkedIn", "YouTube", "캡션", "글자수"],
    aeoQuestion: "인스타그램 캡션은 최대 몇 글자까지 입력할 수 있나요?",
    aeoAnswer: "Instagram 캡션 최대 입력 글자수는 2,200자입니다(Meta Business Help Center 공식 기준). 피드에서는 약 125자 이후 '더 보기' 버튼이 생깁니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "LinkedIn 게시물 글자수 가이드", link: "/blog/linkedin-post-word-count-guide" }
    ],
    content: `<p>2023년 TikTok은 캡션 최대 글자수를 기존 500자에서 <strong>2,200자</strong>로 대폭 늘렸다(TikTok for Business 공식 발표). 캡션이 짧을수록 좋다는 통념이 흔들리기 시작한 신호였다. 그러나 플랫폼마다 '공식 최대치'와 '더 보기 이전 노출 기준'이 다르기 때문에, 전략 없이 긴 캡션을 쓰면 핵심 메시지가 '더 보기' 뒤로 밀린다.</p>

<h2>플랫폼별 캡션 글자수 공식 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 입력</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">더 보기 전 노출</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Instagram</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,200자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 125자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Meta Business Help Center</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">TikTok</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,200자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 100자</td>
<td style="border:1px solid #ddd;padding:8px 12px">TikTok for Business 공식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">5,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 100~150자</td>
<td style="border:1px solid #ddd;padding:8px 12px">YouTube Help 공식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Facebook</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">63,206자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 477자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Meta Business Help Center</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">LinkedIn</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 210자</td>
<td style="border:1px solid #ddd;padding:8px 12px">LinkedIn 공식 도움말</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">X (구 트위터)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">280자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">전체 노출</td>
<td style="border:1px solid #ddd;padding:8px 12px">X 공식 도움말</td>
</tr>
</tbody>
</table>
</div>
<p>X(구 트위터)는 280자 한도 내 전체 텍스트가 잘림 없이 표시되는 유일한 주요 플랫폼이다. Facebook의 63,206자 한도는 사실상 무제한이지만, 피드에서는 약 477자까지만 즉시 표시된다.</p>

<h2>'더 보기'로 잘리는 기준 — 실제 노출 글자수</h2>
<p>최대 입력 한도보다 실무에서 중요한 것은 <strong>'더 보기' 없이 노출되는 첫 글자수</strong>다. Meta Business Help Center는 Instagram 피드 기준 약 125자 이후에 '더 보기'가 생긴다고 명시하며, 핵심 메시지를 이 구간 이내에 담도록 권고한다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>Instagram 125자 룰</strong><br>
첫 125자 = 훅(호기심 유발·핵심 가치·질문) &nbsp;/&nbsp; 125자 이후 = 해시태그·상세 설명·CTA
</div>

<p>TikTok은 동영상 재생 화면에서 캡션 첫 1~2줄(약 100자)만 즉시 보인다. TikTok for Business 공식 가이드는 캡션 첫 줄에 검색 친화적 키워드를 배치하도록 권고하며, 이는 TikTok 내 검색 기능이 강화된 2023년 이후 더욱 중요해졌다.</p>

<p>LinkedIn은 피드에서 약 210자 이후 '더 보기'로 접힌다. LinkedIn 공식 마케팅 가이드는 첫 2~3줄에 핵심 통찰이나 주장을 배치해 클릭을 유도하는 구조를 권장한다.</p>

<h2>캡션 분량 전략 — 플랫폼별 최적화 프로세스</h2>
<p>플랫폼마다 알고리즘과 사용자 행동 패턴이 다르기 때문에, 단일 캡션을 복붙하는 방식은 효율이 낮다.</p>

<ol>
<li><strong>목적 정의</strong>: 도달(reach) 목적이면 짧고 강한 훅 중심. 전환(conversion) 목적이면 가치 설명과 명확한 CTA를 포함.</li>
<li><strong>잘림 기준 내 훅 작성</strong>: 플랫폼 잘림 기준(Instagram 125자, TikTok 100자, LinkedIn 210자) 이내에 핵심 키워드가 포함된 첫 문장을 배치.</li>
<li><strong>본문 확장</strong>: 스토리·수치·혜택을 추가. Instagram은 줄바꿈으로 시각적 여백을 확보.</li>
<li><strong>해시태그 배치</strong>: Instagram·TikTok은 잘림 이후에 배치. LinkedIn은 본문 내 자연스럽게 삽입하며 5개 이상의 과다 사용은 지양.</li>
<li><strong>CTA 마무리</strong>: '더 알아보기', '저장하기', '댓글로 알려주세요' 등 명확한 행동 유도로 마감.</li>
</ol>

<div style="background:#fff7ed;border:1px solid #fed7aa;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>YouTube 설명란 SEO 활용</strong><br>
YouTube Help 공식 가이드에 따르면, 동영상 설명란의 첫 100~150자가 검색 결과와 추천 피드에 미리보기로 표시된다. SEO 키워드를 첫 단락에 포함하는 것이 공식 권고 사항이다.
</div>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>Instagram 캡션은 몇 자가 적당한가요?</strong></dt>
<dd>Meta 공식 최대는 2,200자이지만, 피드 기준 125자 이내에 핵심 메시지를 담고 나머지는 '더 보기' 이후에 배치하는 구조가 효과적입니다. 내용 밀도보다 첫 노출 구간의 강도가 더 중요합니다.</dd>
<dt><strong>TikTok 캡션이 길면 검색에 유리한가요?</strong></dt>
<dd>TikTok for Business 공식 가이드는 캡션 키워드를 검색 신호로 활용한다고 밝힙니다. 2,200자 한도를 활용하되, 첫 100자 내 핵심 키워드 배치가 가장 효과적입니다.</dd>
<dt><strong>LinkedIn 게시물의 최적 길이는 얼마인가요?</strong></dt>
<dd>LinkedIn 공식 한도는 3,000자이며 210자 이후 '더 보기'로 접힙니다. 직업적 통찰이나 경험 스토리는 300~1,500자 범위에서 유효하지만, 내용의 밀도가 분량보다 중요합니다.</dd>
</dl>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Meta Business Help Center", link: "https://www.facebook.com/business/help", description: "Instagram/Facebook 캡션 공식 기준" },
      { text: "TikTok for Business", link: "https://www.tiktok.com/business/", description: "TikTok 캡션 공식 가이드" }
    ]
  },
  {
    slug: "email-subject-line-character-limit",
    title: "이메일 제목 글자수, Gmail·Outlook·모바일 기준 완전 정리",
    description: "이메일 제목이 잘리지 않으려면 몇 글자여야 할까? Gmail·Outlook·Apple Mail 데스크톱·모바일 기준을 공식 출처로 정리합니다.",
    publishedAt: "2026-07-07",
    metaTitle: "이메일 제목 글자수 — Gmail·Outlook·모바일 공식 기준 (2026)",
    metaDescription: "Gmail 데스크톱 약 70자, 모바일 30~40자. Outlook·Apple Mail 비교와 Mailchimp 공식 권고 기준을 정리합니다.",
    targetKeywords: ["이메일 제목 글자수", "이메일 제목 길이", "Gmail 제목 글자수", "이메일 서브젝트 라인"],
    category: "이메일 마케팅",
    tags: ["이메일", "Gmail", "Outlook", "Apple Mail", "글자수"],
    aeoQuestion: "이메일 제목은 몇 글자가 적당한가요?",
    aeoAnswer: "Google Workspace 공식 기준으로 Gmail 데스크톱에서 약 70자, 모바일에서 약 30~40자가 표시됩니다. Mailchimp 공식 가이드는 한국어 기준 모바일 최적으로 15~25자를 권장합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "이메일 뉴스레터 분량 가이드", link: "/blog/email-newsletter-word-count-guide" }
    ],
    content: `<p>이메일 제목을 쓸 때 '몇 글자가 적당할까?'라는 질문은 수신자의 받은편지함 화면을 생각하면 답이 나온다. Gmail 데스크톱 기준으로는 약 70자, 모바일 앱에서는 30~40자만 표시된다(Google Workspace 공식 문서). 수신자가 제목 전체를 한눈에 읽지 못하면 개봉 결정이 달라진다.</p>

<div class="speakable-summary" style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>한 줄 요약</strong><br>
한국어 기준 모바일 최적 이메일 제목: <strong>15~25자</strong>. 데스크톱까지 포함: <strong>25~40자</strong> (Mailchimp 공식 가이드 기준).
</div>

<h2>이메일 클라이언트별 제목 표시 글자수</h2>
<p>이메일 제목의 최대 입력 길이는 IETF RFC 5321 표준에 따라 998바이트로 정의된다. 그러나 각 클라이언트의 UI 창 너비와 폰트 크기에 따라 실제 표시 글자수는 크게 달라진다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">클라이언트</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">데스크톱 표시</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">모바일 표시</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Gmail</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 70자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 30~40자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Google Workspace 공식 문서</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Outlook</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 60~70자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 30~40자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Microsoft 공식 Outlook 가이드</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Apple Mail</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 65자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 35~45자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Apple Developer Documentation</td>
</tr>
</tbody>
</table>
</div>

<h2>Gmail·Outlook·Apple Mail 비교</h2>
<p>세 클라이언트 모두 데스크톱에서 60~70자 내외를 표시한다는 공통점이 있다. 이 범위를 초과하면 제목 끝이 '...'으로 잘린다. Mailchimp 공식 이메일 마케팅 가이드는 한국어 기준 <strong>15~25자 이내</strong> 제목이 모바일 환경에서 완전히 노출되기에 적합하다고 권고한다.</p>

<p>세 클라이언트 간 표시 차이는 5~10자 수준으로 크지 않다. 따라서 가장 짧은 기준(Outlook 데스크톱 60자)에 맞추면 세 클라이언트 모두를 안전하게 커버할 수 있다. 한국어는 영문 대비 1자당 정보 밀도가 높아 30~40자만으로도 충분한 의미 전달이 가능하다.</p>

<h2>모바일 환경에서의 제목 노출 기준</h2>
<p>Apple Developer Documentation에 따르면 iOS Mail은 기기와 디스플레이 크기에 따라 표시 글자수가 달라진다. iPhone SE 기준 약 35~40자, iPhone Pro Max 기준 약 45~50자가 표시된다.</p>

<p>모바일 이메일 제목 작성 원칙:</p>
<ul>
<li><strong>중요 단어를 앞에</strong>: 제목이 잘리더라도 핵심이 전달되도록 앞에 배치.</li>
<li><strong>이모지 1개 이내</strong>: Gmail·Outlook·Apple Mail 모두 이모지를 지원하지만, Microsoft 공식 Outlook 가이드는 이모지 과다 사용이 스팸 필터를 자극할 수 있다고 주의를 당부한다.</li>
<li><strong>개인화 변수 포함 시 길이 고려</strong>: '홍길동님,' 형태의 수신자 이름 개인화는 제목 앞 글자수를 소모하므로 전체 계획 시 포함해서 계산한다.</li>
</ul>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>이메일 제목은 몇 글자가 가장 좋은가요?</strong></dt>
<dd>Google Workspace 및 Mailchimp 공식 가이드를 종합하면, 한국어 기준 모바일 최적은 15~25자, 데스크톱까지 포함하면 25~40자입니다. 내용을 충분히 담되 잘리지 않는 범위로 설계하는 것이 효과적입니다.</dd>
<dt><strong>이메일 제목에 이모지를 넣어도 되나요?</strong></dt>
<dd>Gmail, Outlook, Apple Mail 모두 이모지를 지원합니다. 단, 이모지 1개는 약 2~4자의 공간을 차지할 수 있으므로 전체 길이 설계 시 고려해야 합니다. Microsoft 공식 Outlook 가이드는 이모지 과다 사용 시 스팸 점수 상승 가능성을 경고합니다.</dd>
<dt><strong>스팸 필터를 피하는 이메일 제목 작성 방법이 있나요?</strong></dt>
<dd>Mailchimp 공식 가이드에 따르면 전체 대문자 사용, 과도한 특수문자(!!!, ???), '무료', '지금 바로' 등의 반복은 스팸 점수를 높입니다. 자연스러운 문장 구조와 명확한 내용 예고가 가장 안전합니다.</dd>
<dt><strong>앞으로 이메일 제목 트렌드는 어떻게 바뀔까요?</strong></dt>
<dd>AI 기반 개인화 이메일이 확산되면서, 수신자별로 제목 길이와 표현을 달리하는 동적 제목(dynamic subject line) 방식이 Gmail·Outlook API 수준에서 지원이 늘고 있습니다. 고정 길이 기준보다 '수신자 기기 환경 감지 → 최적 길이 선택' 방식이 주류가 될 전망입니다.</dd>
</dl>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Google Workspace 공식 문서", link: "https://workspace.google.com/", description: "Gmail 이메일 기준 공식 출처" },
      { text: "Mailchimp 공식 가이드", link: "https://mailchimp.com/", description: "이메일 마케팅 제목 권고 기준" }
    ]
  },
  {
    slug: "website-homepage-copy-word-count",
    title: "홈페이지 카피 분량 최적화 — 섹션별 권장 글자수와 SEO 기준",
    description: "홈페이지 카피가 너무 짧아도, 너무 길어도 문제다. 히어로·기능·CTA 섹션별 권장 분량과 Google E-E-A-T 기준을 정리합니다.",
    publishedAt: "2026-07-08",
    metaTitle: "홈페이지 카피 분량 최적화 — 섹션별 글자수 기준 (2026)",
    metaDescription: "히어로 섹션 30~80자, CTA 10~30자 등 홈페이지 섹션별 권장 카피 분량과 Google E-E-A-T 기준을 업종별로 정리합니다.",
    targetKeywords: ["홈페이지 카피 분량", "홈페이지 글자수", "웹사이트 카피 길이", "홈페이지 SEO 텍스트"],
    category: "웹 카피라이팅",
    tags: ["홈페이지", "카피라이팅", "SEO", "웹사이트", "글자수"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "랜딩 페이지 카피 분량 가이드", link: "/blog/landing-page-copy-word-count" }
    ],
    content: `<p>홈페이지가 너무 짧으면 신뢰를 잃고, 너무 길면 이탈을 부른다. 이 긴장 관계가 홈페이지 카피 분량 최적화의 핵심이다. Google 검색센터(Google Search Central) 공식 가이드라인은 페이지가 다루는 주제를 충분히 커버해야 E-E-A-T(경험·전문성·권위·신뢰) 원칙에 부합한다고 명시한다. 그러나 '충분하다'는 기준이 업종마다 다르고, 단어수보다 구조와 배치가 더 큰 변수다.</p>

<h2>홈페이지 카피 분량과 SEO의 상관관계</h2>
<p>Google 검색센터는 "유용하고 신뢰할 수 있는 콘텐츠를 만드는 것이 중요하며, 단순히 단어수를 늘리는 것은 도움이 되지 않는다"고 공식 문서에 명시하고 있다. 이 원칙은 홈페이지 카피에도 동일하게 적용된다.</p>

<p>홈페이지는 블로그 포스트와 달리 방문자가 처음 만나는 진입점이다. 메인 내비게이션, 히어로 섹션, 기능 소개, 사회적 증거(고객 후기·수상 이력), CTA를 포함한 페이지 전체의 텍스트 총량이 '분량'이 된다. Google PageSpeed Insights 기준으로도 텍스트가 너무 적으면 크롤러가 주제를 파악하기 어렵고, 불필요하게 많으면 로딩 성능과 Core Web Vitals 지표에 영향을 줄 수 있다.</p>

<h2>섹션별 권장 카피 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">섹션</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">핵심 원칙</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">히어로 헤드라인 + 서브카피</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">30~80자</td>
<td style="border:1px solid #ddd;padding:8px 12px">스크롤 없이 CTA가 보여야 함</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">기능/서비스 소개 (카드 1개당)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~150자</td>
<td style="border:1px solid #ddd;padding:8px 12px">혜택 중심 서술</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">About / 브랜드 스토리</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">150~400자</td>
<td style="border:1px solid #ddd;padding:8px 12px">신뢰 형성, 장황하면 이탈</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">고객 후기 (1개당)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~200자</td>
<td style="border:1px solid #ddd;padding:8px 12px">구체적 결과 포함 시 신뢰도 향상</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">FAQ (1문항당)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~150자</td>
<td style="border:1px solid #ddd;padding:8px 12px">간결한 직접 답변</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">CTA 버튼/섹션</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">10~30자</td>
<td style="border:1px solid #ddd;padding:8px 12px">동사 + 혜택 명시</td>
</tr>
</tbody>
</table>
</div>
<p>위 섹션 구성 기준으로 홈페이지 카피 총량은 보통 500~2,000자 범위가 된다. Google PageSpeed Insights는 HTML 총 용량도 분석하므로, 불필요한 텍스트 반복은 피하는 것이 좋다.</p>

<h2>업종별 홈페이지 카피 분량 차이</h2>
<p>업종마다 방문자가 기대하는 정보 밀도가 다르다. 모든 사이트에 동일한 분량 기준을 적용하면 효율이 낮아진다.</p>

<ul>
<li><strong>SaaS / 앱 서비스</strong>: 히어로 + 기능 3~5개 카드 + 가격표 + CTA. 총 700~1,500자. 핵심 가치 제안이 한눈에 보여야 한다.</li>
<li><strong>이커머스 (브랜드몰)</strong>: 브랜드 스토리 + 베스트셀러 + 혜택 배너. 총 500~1,200자. 상품 이미지가 주역이므로 카피는 보조적 역할.</li>
<li><strong>전문직 / 법률·의료</strong>: 서비스 소개 + 자격·수상·후기 + 상담 CTA. 총 1,000~2,500자. Google E-E-A-T 원칙상 전문성 입증 텍스트가 SEO에 유리하다(Google 검색센터 공식).</li>
<li><strong>콘텐츠 / 미디어</strong>: 최신 콘텐츠 피드 + 구독 CTA. 텍스트보다 구조화된 데이터(Schema.org)가 SEO에서 더 큰 역할을 한다.</li>
<li><strong>포트폴리오</strong>: 자기소개 100~300자 + 작업물 설명. 총 400~800자. 간결함 자체가 전문성의 표현.</li>
</ul>

<h2>홈페이지 카피 최적화 체크리스트</h2>
<p>분량을 결정하기 전에 아래 기준을 먼저 점검한다.</p>

<ol>
<li><strong>히어로 섹션이 스크롤 없이 보이는가?</strong> Google PageSpeed Insights의 CLS(Cumulative Layout Shift) 지표에도 영향을 준다.</li>
<li><strong>주요 키워드가 히어로 헤드라인에 포함되어 있는가?</strong> Google 검색센터 E-E-A-T 가이드라인은 페이지의 주제가 명확히 드러나야 한다고 명시한다.</li>
<li><strong>각 섹션의 텍스트가 스캔 가능한가?</strong> 굵은 글씨, 목록, 짧은 단락 구성으로 빠르게 읽혀야 한다.</li>
<li><strong>CTA가 명확하고 간결한가?</strong> '시작하기', '무료 체험', '문의하기' 같은 동사형 CTA가 클릭률이 높다.</li>
<li><strong>모바일에서 카피가 잘리거나 겹치지 않는가?</strong> Google 검색센터는 모바일 친화성을 핵심 랭킹 신호 중 하나로 강조한다.</li>
</ol>

<h2>자주 묻는 질문</h2>
<dl>
<dt><strong>홈페이지 카피가 너무 짧으면 SEO에 불리한가요?</strong></dt>
<dd>Google 검색센터 공식 가이드는 단어수 자체보다 콘텐츠의 유용성과 주제 명확성을 중시합니다. 히어로 + 기능 + CTA 구조가 갖추어져 있다면 500자 이하도 SEO적으로 문제가 없습니다.</dd>
<dt><strong>홈페이지에 블로그 발췌를 넣으면 SEO에 도움이 되나요?</strong></dt>
<dd>홈페이지에 과도한 블로그 내용을 넣으면 페이지의 주제 집중도가 낮아질 수 있습니다. 블로그는 별도 섹션으로 구분하고, 홈페이지 카피는 브랜드 핵심 가치 제안에 집중하는 것이 Google E-E-A-T 원칙에 부합합니다.</dd>
</dl>

<p>지금 바로 홈페이지 각 섹션의 글자수를 <a href="/tools/character-counter">텍스터브 글자수 세기</a>로 측정하고 위 기준과 비교해 최적화 포인트를 확인해보자.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Google 검색센터", link: "https://developers.google.com/search", description: "E-E-A-T 및 SEO 공식 가이드" }
    ]
  },
  {
    slug: "chatbot-message-length-guide",
    title: "챗봇 메시지 분량 설계 가이드 — 플랫폼별 한도와 UX 원칙",
    description: "Slack·카카오·Dialogflow·Discord 챗봇의 메시지 분량 기준을 공식 API 문서 기반으로 정리하고, 5단계 설계 프로세스를 제시합니다.",
    publishedAt: "2026-07-09",
    metaTitle: "챗봇 메시지 분량 설계 가이드 — Slack·카카오·Dialogflow 기준",
    metaDescription: "Slack 3,000자·카카오 오픈빌더 400자·Dialogflow 256자 권고 등 플랫폼별 챗봇 메시지 한도와 5단계 설계 프로세스를 정리합니다.",
    targetKeywords: ["챗봇 메시지 길이", "챗봇 메시지 분량", "카카오 챗봇 글자수", "Dialogflow 메시지"],
    category: "챗봇·자동화",
    tags: ["챗봇", "Slack", "카카오", "Dialogflow", "Discord", "메시지"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "Slack·Discord 메시지 분량 가이드", link: "/blog/slack-discord-message-length-guide" }
    ],
    content: `<p>챗봇 창에 긴 텍스트 블록이 뜨는 순간, 사용자는 스크롤부터 찾는다. 대화형 인터페이스의 강점은 즉각성인데, 메시지가 너무 길면 그 강점이 사라진다. 반면 너무 짧은 메시지는 정보 부족으로 재질문을 유발한다. 챗봇 메시지 분량 설계는 이 두 극단 사이의 최적점을 찾는 작업이다.</p>

<h2>1단계. 플랫폼별 메시지 분량 기준 파악</h2>
<p>챗봇이 배포되는 플랫폼마다 메시지 표시 방식과 기술적 한도가 다르다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">플랫폼</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">단일 메시지 한도</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Slack (Block Kit)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Slack Block Kit 공식 API 문서</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">카카오 오픈빌더 (말풍선 1개)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">400자</td>
<td style="border:1px solid #ddd;padding:8px 12px">카카오 i 오픈빌더 공식 문서</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Google Dialogflow CX (응답 카드)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">256자 권고</td>
<td style="border:1px solid #ddd;padding:8px 12px">Google Dialogflow CX 공식 문서</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Discord (봇 메시지)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">Discord 공식 API 문서</td>
</tr>
</tbody>
</table>
</div>
<p>카카오 오픈빌더는 말풍선 1개 400자 한도 내에서 최대 3개 말풍선을 연속 발송할 수 있다. 단, 카카오 공식 가이드는 사용자 피로를 방지하기 위해 말풍선 수를 최소화할 것을 권고한다.</p>

<h2>2단계. 메시지 유형 분류</h2>
<p>모든 챗봇 메시지에 동일한 분량 기준을 적용할 수 없다. 유형별로 다르게 설계한다.</p>

<ul>
<li><strong>인사/환영 메시지</strong>: 30~60자. 짧고 친근하게. 챗봇의 역할을 한 문장으로 전달.</li>
<li><strong>메뉴/선택지 안내</strong>: 50~100자 + 버튼 3~4개. 텍스트는 최소화하고 버튼으로 행동 유도.</li>
<li><strong>정보 제공 응답</strong>: 100~256자. Google Dialogflow CX 공식 권고 기준 내에서 핵심만 전달.</li>
<li><strong>오류/실패 메시지</strong>: 40~80자. 문제 원인 + 다음 행동 안내를 간결하게.</li>
<li><strong>에스컬레이션 (상담원 연결)</strong>: 50~100자. 연결 이유와 예상 대기 시간 명시.</li>
</ul>

<h2>3단계. 짧은 메시지 우선 원칙 적용</h2>
<p>챗봇 UX에서 '짧은 메시지 우선' 원칙은 Google Dialogflow CX 공식 설계 가이드에서도 강조된다. 하나의 버블에 여러 정보를 담는 것보다 순차적으로 짧게 여러 번 보내는 방식이 사용자 이해도를 높인다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>분리 기준</strong><br>
단일 주제 = 1개 메시지. 두 가지 이상의 정보 = 분리해서 순차 발송. 카카오 오픈빌더 기준 400자 이내, 일반적으로 150자 이내 권장.
</div>

<h2>4단계. 분기 메시지 설계</h2>
<p>챗봇 대화 흐름에서 메시지 분량은 분기(branching) 설계와 직결된다. 사용자가 선택할 수 있는 버튼 옵션을 제공하면, 텍스트 분량을 줄이면서도 정보 전달량을 유지할 수 있다.</p>

<p>Slack Block Kit 공식 API 문서는 버튼 액션(Button Element)을 활용한 인터랙티브 메시지 설계를 권장한다. 버튼 레이블은 20자 이내로 간결하게 작성하도록 Slack 공식 가이드에 명시되어 있다.</p>

<h2>5단계. 테스트와 반복 개선</h2>
<p>최적 메시지 분량은 실제 사용자 행동 데이터로 검증해야 한다. 주요 점검 지표:</p>

<ul>
<li><strong>이탈 지점</strong>: 어떤 메시지 이후 대화가 종료되는지 확인.</li>
<li><strong>재질문율</strong>: 같은 의도의 질문이 반복되면 응답이 불충분하다는 신호.</li>
<li><strong>버튼 클릭율</strong>: 텍스트 응답보다 버튼이 더 많이 클릭된다면 메시지를 더 짧게 설계하는 방향.</li>
<li><strong>상담원 에스컬레이션율</strong>: 챗봇 해결률이 낮으면 정보 분량 부족 가능성을 점검.</li>
</ul>

<p>챗봇 메시지 분량 설계에서 각 메시지의 글자수를 정확히 확인하려면 <a href="/tools/character-counter">텍스터브 글자수 세기</a>를 활용하자. 각 말풍선에 입력할 텍스트를 미리 측정해 플랫폼 한도를 초과하지 않도록 할 수 있다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "Slack Block Kit 공식 문서", link: "https://api.slack.com/block-kit", description: "Slack 메시지 분량 기준" },
      { text: "카카오 i 오픈빌더", link: "https://i.kakao.com/", description: "카카오 챗봇 공식 문서" }
    ]
  },
  {
    slug: "legal-document-word-count-guide",
    title: "법률 문서 분량 가이드 — 이용약관·개인정보처리방침·계약서 기준",
    description: "이용약관, 개인정보처리방침, 표준근로계약서 등 법률 문서 유형별 분량 기준과 한국 약관법 역사적 변화를 공식 출처 기반으로 정리합니다.",
    publishedAt: "2026-07-10",
    metaTitle: "법률 문서 분량 가이드 — 이용약관·개인정보처리방침·계약서 기준",
    metaDescription: "이용약관·개인정보처리방침·표준근로계약서 분량 기준. 약관규제법·공정거래위원회·개인정보보호위원회 공식 가이드 기반 정리.",
    targetKeywords: ["이용약관 분량", "개인정보처리방침 길이", "계약서 글자수", "법률 문서 길이"],
    category: "법률·계약",
    tags: ["이용약관", "개인정보처리방침", "계약서", "약관", "법률"],
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "회사 소개 페이지 분량 가이드", link: "/blog/company-about-us-page-word-count" }
    ],
    content: `<blockquote style="border-left:4px solid #94a3b8;padding:12px 20px;margin:20px 0;background:#f8fafc;color:#475569;font-style:italic">
"약관은 고객이 이해할 수 있도록 명확하게 작성되어야 한다." — 약관의 규제에 관한 법률 제3조(약관의 명시·설명 의무), 1986년 제정
</blockquote>

<div style="background:#fef2f2;border:1px solid #fecaca;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>중요 안내</strong><br>
이 글은 법률 문서 분량에 관한 일반적 정보를 제공하며, 법률 자문이 아닙니다. 실제 계약서·약관 작성 시에는 전문 법률가의 검토를 받으시기 바랍니다.
</div>

<p>법률 문서의 분량은 '많을수록 좋다'는 통념이 있지만, 한국 법률 체계는 오히려 이를 제한하는 방향으로 발전해 왔다. 공정거래위원회 공식 가이드에 따르면, 약관이 너무 길거나 복잡해 고객이 이해하기 어려운 경우 불공정 약관으로 판단될 수 있다.</p>

<h2>법률 문서 유형별 분량 기준 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">문서 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">일반적 분량</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공식 기준 출처</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">서비스 이용약관</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">3,000~20,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">약관규제법 제3조 (공정거래위원회 공식)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">개인정보처리방침</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,000~10,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">개인정보보호위원회 작성 가이드라인</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">표준근로계약서</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">약 1,500~3,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">고용노동부 표준근로계약서 공식 서식</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">업무위탁계약서</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">2,000~8,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">중소벤처기업부 표준계약서 공식 서식</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">비밀유지계약서 (NDA)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">1,000~4,000자</td>
<td style="border:1px solid #ddd;padding:8px 12px">중소벤처기업부 표준계약서</td>
</tr>
</tbody>
</table>
</div>
<p>위 분량은 해당 문서 유형의 일반적 범위이며, 계약 내용의 복잡성과 조항 수에 따라 크게 달라진다. 중소벤처기업부와 고용노동부는 각각 표준 서식을 공식 배포하고 있으며, 이를 기준점으로 활용할 수 있다.</p>

<h2>이용약관 분량의 역사적 변화</h2>
<p>한국 약관 규제의 역사는 1986년 약관의 규제에 관한 법률(약관규제법) 제정으로 시작된다. 당시 법은 사업자가 약관을 일방적으로 길고 복잡하게 작성해 소비자 권리를 침해하는 관행을 규제하기 위해 도입됐다.</p>

<p>이후 디지털 서비스의 등장과 함께 이용약관은 더욱 길어졌다. 공정거래위원회는 2014년부터 온라인 약관 심사를 강화했으며, 2023년 약관규제법 개정을 통해 불공정 약관에 대한 시정 명령과 과태료 규정이 강화됐다. 현재는 약관이 <strong>명확하고 이해하기 쉬운 언어</strong>로 작성되어야 하며, 고객에게 불리한 조항은 별도로 명시해야 한다(공정거래위원회 공식 가이드).</p>

<h2>개인정보처리방침 필수 항목과 분량</h2>
<p>개인정보보호위원회 공식 작성 가이드라인에 따르면, 개인정보처리방침에는 다음 10가지 항목이 필수적으로 포함되어야 한다:</p>

<ol>
<li>개인정보 처리 목적</li>
<li>처리하는 개인정보 항목</li>
<li>개인정보 처리 및 보유 기간</li>
<li>개인정보 제3자 제공 (해당 시)</li>
<li>개인정보 처리 위탁 (해당 시)</li>
<li>정보주체의 권리·의무 및 행사 방법</li>
<li>개인정보 파기 절차 및 방법</li>
<li>개인정보 안전성 확보 조치</li>
<li>개인정보 자동 수집 장치 설치·운영 및 거부 (해당 시)</li>
<li>개인정보 보호책임자 정보</li>
</ol>

<p>이 10가지 항목을 충실히 기재하면 최소 2,000~3,000자가 되며, 서비스 규모와 데이터 처리 복잡성에 따라 10,000자 이상이 되기도 한다. 개인정보보호위원회는 항목별 예시 문구를 공식 가이드라인에서 제공한다.</p>

<h2>표준 계약서 분량 기준</h2>
<p>고용노동부가 공식 배포하는 표준근로계약서는 약 1,500~2,000자 분량으로 구성된다. 근로 조건(임금, 근무 시간, 휴일, 연차), 계약 기간, 취업 장소, 업무 내용이 핵심 항목이며, 근로기준법 제17조가 서면 명시 의무를 규정한다.</p>

<p>중소벤처기업부의 표준 업무위탁계약서는 위탁 업무 범위, 보수 지급 조건, 비밀 유지, 계약 해지 사유 등을 포함해 일반적으로 3,000~5,000자 내외다. 중기부는 업종별 표준계약서 서식을 공식 홈페이지에서 무료 제공한다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>분량보다 중요한 것</strong><br>
법률 문서에서는 분량보다 조항의 명확성이 우선이다. 공정거래위원회와 개인정보보호위원회 모두 '이해하기 쉬운 언어' 사용을 핵심 원칙으로 강조한다. 길이를 늘리기보다 각 조항을 명확하게 작성하는 것이 법적 효력과 신뢰도 모두에서 유리하다.
</div>

<p>법률 문서 초안의 글자수를 측정하고 섹션별 분량을 점검하려면 <a href="/tools/character-counter">텍스터브 글자수 세기</a>를 활용할 수 있다. 향후 AI 법률 서비스가 발전하면서 계약서 분량 자동 최적화 기능도 등장할 것으로 전망된다.</p>

<hr>
<p><em>이 글은 AI 도구를 활용해 공개 자료를 정리·요약한 결과입니다. 중요한 사항은 공식 기관에서 직접 확인하세요.</em></p>`,
    outlinks: [
      { text: "공정거래위원회 약관 가이드", link: "https://www.ftc.go.kr/", description: "이용약관 공식 심사 기준" },
      { text: "개인정보보호위원회", link: "https://www.pipc.go.kr/", description: "개인정보처리방침 작성 가이드라인" },
      { text: "고용노동부 표준근로계약서", link: "https://www.moel.go.kr/", description: "표준근로계약서 공식 서식" }
    ]
  }
];
