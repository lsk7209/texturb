import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH59: BlogPost[] = [
  {
    id: "abbreviation-notation-korean-guide",
    slug: "abbreviation-notation-korean-guide",
    title: "약자·약어 표기법 — 국립국어원 공식 가이드",
    excerpt: "한국어 약자와 약어의 올바른 표기 방법을 국립국어원 가이드에 따라 정리합니다. 공문서와 일반 글쓰기에서의 약어 사용 기준을 안내합니다.",
    content: `<h2>약자와 약어의 차이</h2>
<p>약자(略字)는 단어나 어구를 짧게 줄인 글자를 말하고, 약어(略語)는 단어 또는 어구를 줄여 만든 짧은 말입니다. 영어권에서는 두문자어(頭文字語, acronym)라는 개념도 있습니다. 한국어에서는 약어라는 표현을 더 넓게 사용하며, 국립국어원은 약어 표기에 관한 가이드를 제공합니다.</p>

<h2>한국어 약어의 종류</h2>
<p>한국어 약어는 크게 세 가지 방식으로 만들어집니다.</p>
<ul>
  <li><strong>음절 축약</strong>: 여러 음절 단어에서 첫 음절 또는 핵심 음절만 남김 (예: 국어 → 국어, 국립국어원 → 국어원)</li>
  <li><strong>두문자 조합</strong>: 각 단어의 첫 글자를 따서 만듦 (예: 한국방송공사 → KBS, 주민등록번호 → 주민번호)</li>
  <li><strong>한자 약어</strong>: 한자어의 핵심 한자만 사용 (예: 대한민국 → 한국, 일반국도 → 국도)</li>
</ul>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>공문서 약어 사용 원칙</strong><br>
  행정안전부 공문서 작성 지침에 따르면, 약어 사용 시 첫 등장 시 전체 명칭을 먼저 쓰고 이후 약어를 사용합니다.<br>
  예: 행정안전부(이하 '행안부'라 한다)
</div>

<h2>약어 표기 시 주의사항</h2>
<p>약어를 사용할 때는 독자가 그 의미를 명확히 파악할 수 있어야 합니다. 독자층이 일반 대중이라면 전문 약어 사용을 자제하고, 꼭 필요한 경우 처음 사용 시 전체 명칭을 함께 제시해야 합니다.</p>
<ul>
  <li><strong>첫 사용 시 전체 명칭 병기</strong>: 국민건강보험공단(이하 '건보공단')</li>
  <li><strong>일관성 유지</strong>: 한 문서 안에서 동일 약어를 통일해 사용</li>
  <li><strong>공식 약어 확인</strong>: 기관명 약어는 해당 기관이 공식 사용하는 약어를 따름</li>
  <li><strong>외국어 약어 처리</strong>: IMF, WHO처럼 외국어 약어는 한글 병기 가능 (예: IMF(국제통화기금))</li>
</ul>

<h2>국립국어원의 약어 권고</h2>
<p>국립국어원은 공공언어 개선 차원에서 지나치게 많은 약어 사용을 지양할 것을 권고합니다. 특히 공문서, 안내문, 대국민 홍보물에서 일반인이 이해하기 어려운 약어는 전체 명칭으로 풀어쓰는 것이 원칙입니다. 다만 사회적으로 이미 널리 알려진 약어(예: TV, PC, AI)는 그대로 사용해도 무방합니다.</p>

<h2>영어 약어의 한글 표기</h2>
<p>영어 약어를 한글로 표기할 때는 외래어 표기법을 따릅니다. 주요 사례를 정리합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">영어 약어</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">한글 명칭</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">사용 방식</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">UNESCO</td>
    <td style="border:1px solid #ccc;padding:10px">유네스코 / 유엔 교육과학문화기구</td>
    <td style="border:1px solid #ccc;padding:10px">한글 발음 표기 또는 전체 명칭</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">WHO</td>
    <td style="border:1px solid #ccc;padding:10px">세계보건기구</td>
    <td style="border:1px solid #ccc;padding:10px">한글 명칭 사용 권장</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">AI</td>
    <td style="border:1px solid #ccc;padding:10px">인공지능</td>
    <td style="border:1px solid #ccc;padding:10px">영어 약어 또는 한글 병기</td>
  </tr>
</table>

<h2>약어 남용이 글쓰기에 미치는 영향</h2>
<p>약어를 과도하게 사용하면 독자가 글을 읽기 어려워지고 전달 효과가 떨어집니다. 특히 전문 분야 약어를 일반 독자 대상 글에서 설명 없이 사용하면 독자 이탈로 이어질 수 있습니다. 신문 기사, 보도자료, 홍보물에서는 약어 사용 전 해당 독자층이 약어를 이해할 수 있는지 먼저 판단하고, 필요시 첫 등장 시 전체 명칭을 반드시 표기하는 습관을 기르세요. 텍스터브(texturb.com)의 글쓰기 도구를 활용해 문서 내 약어 사용을 점검하면 가독성을 높일 수 있습니다.</p>

<h2>공공기관 명칭 약어 표준 목록</h2>
<p>한국 공공기관의 공식 약어는 각 기관이 직접 사용하는 명칭을 따릅니다. 아래는 자주 사용되는 공공기관 약어 사례입니다.</p>
<ul>
  <li><strong>국립국어원</strong> — 국어원 (약칭), NIKL (영문)</li>
  <li><strong>한국인터넷진흥원</strong> — KISA</li>
  <li><strong>한국콘텐츠진흥원</strong> — KOCCA</li>
  <li><strong>한국방송통신전파진흥원</strong> — KCA</li>
  <li><strong>중소벤처기업부</strong> — 중기부</li>
  <li><strong>행정안전부</strong> — 행안부</li>
</ul>
<p>공문서나 보도자료에서 이런 기관명을 처음 표기할 때는 전체 명칭을 먼저 쓰고 약칭을 괄호 안에 병기하세요. 이후 문서에서는 약칭만 사용해도 됩니다.</p>

<h2>약어 표기에서 마침표 사용 여부</h2>
<p>영어 약어 표기 시 마침표(.) 사용 여부가 혼동을 일으킵니다. 한국어 글쓰기에서 영어 약어는 일반적으로 마침표 없이 씁니다. 예를 들어 'U.S.A.'보다 'USA'로, 'e.g.'보다 '예를 들어' 또는 '예컨대'로 풀어쓰는 것이 권장됩니다. 국립국어원은 외국어 약어의 한글 표현을 사용할 것을 권고하며, 부득이 약어를 써야 할 경우 한글 설명을 병기하도록 안내합니다.</p>`,
    publishedAt: "2026-09-03T13:00:00+09:00",
    tags: ["약어표기", "어문규범", "국립국어원", "공문서"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "parenthetical-annotation-length-guide",
    slug: "parenthetical-annotation-length-guide",
    title: "괄호 안 부연 설명 분량 — 가독성과 정확성 균형",
    excerpt: "한국어 글쓰기에서 괄호 안 부연 설명의 적절한 분량과 사용 방법을 정리합니다. 너무 짧거나 긴 괄호 설명이 가독성에 미치는 영향도 안내합니다.",
    content: `<h2>괄호 부연 설명이란</h2>
<p>괄호(括弧) 안에 넣는 부연 설명은 본문 내용을 보충하거나 명확히 하기 위해 사용합니다. 한글 맞춤법 제14항(문장 부호)에서는 소괄호(( ))를 주석이나 보충 설명에 사용하도록 규정합니다. 예를 들어 '이 규정은 국무회의(2023. 3. 21. 의결)에서 확정되었다'처럼 날짜나 출처를 본문 흐름을 방해하지 않고 제공할 때 유용합니다.</p>

<h2>괄호 부연 설명의 권장 분량</h2>
<p>괄호 안 설명이 너무 길면 본문 흐름이 끊기고 독자가 혼란을 느낍니다. 반면 너무 짧으면 정보 전달에 충분하지 않을 수 있습니다.</p>
<ul>
  <li><strong>적정 분량</strong>: 20자 이내가 가독성 최적 범위</li>
  <li><strong>최대 권장 분량</strong>: 한 줄(40자 내외)을 넘지 않도록</li>
  <li><strong>초과 시 처리</strong>: 각주나 미주로 이동하거나 별도 문장으로 설명</li>
</ul>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:16px;margin:24px 0;border-radius:4px">
  <strong>괄호 과다 사용 주의</strong><br>
  한 단락에 괄호가 3개 이상 등장하면 본문 가독성이 크게 떨어집니다. 특히 중첩 괄호(괄호 안에 또 다른 괄호)는 피하세요.
</div>

<h2>괄호 사용 목적별 분량 기준</h2>
<p>괄호를 사용하는 목적에 따라 적절한 분량이 다릅니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">사용 목적</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">적정 분량</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">예시</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">약어·원어 병기</td>
    <td style="border:1px solid #ccc;padding:10px">5~15자</td>
    <td style="border:1px solid #ccc;padding:10px">인공지능(AI)</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">날짜·출처 표기</td>
    <td style="border:1px solid #ccc;padding:10px">10~20자</td>
    <td style="border:1px solid #ccc;padding:10px">(2023. 5. 1. 기준)</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">한자 병기</td>
    <td style="border:1px solid #ccc;padding:10px">3~10자</td>
    <td style="border:1px solid #ccc;padding:10px">학교(學校)</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">추가 정보</td>
    <td style="border:1px solid #ccc;padding:10px">20자 이내</td>
    <td style="border:1px solid #ccc;padding:10px">(이하 '이 법')</td>
  </tr>
</table>

<h2>괄호 종류별 사용 기준</h2>
<p>한글 맞춤법에서 규정하는 괄호의 종류와 용도를 구분해야 올바른 표기가 가능합니다.</p>
<ul>
  <li><strong>소괄호 ( )</strong>: 보충 설명, 주석, 예시 제시</li>
  <li><strong>중괄호 { }</strong>: 수식이나 특정 표기에서 사용</li>
  <li><strong>대괄호 [ ]</strong>: 인용문에서 필자가 추가한 내용, 발음 표기</li>
  <li><strong>겹낫표 ≪ ≫</strong>: 도서명, 잡지명 (중괄호와 혼동 주의)</li>
</ul>

<h2>학술 논문에서의 괄호 부연 설명</h2>
<p>학술 논문에서는 괄호를 통한 부연 설명 외에도 각주(footnote)와 미주(endnote)가 많이 사용됩니다. 본문 내 괄호 설명은 20자 이내의 간결한 내용에만 쓰고, 더 긴 설명은 각주로 처리하는 것이 논문 가독성을 높이는 방법입니다. 인용 출처 표기는 해당 학회의 인용 방식을 따르되, 본문 괄호 인용(저자, 연도) 방식 또는 번호 인용[1] 방식을 일관되게 사용하세요.</p>

<h2>온라인 글쓰기에서의 괄호 활용</h2>
<p>블로그, SNS, 뉴스레터처럼 모바일 독자가 많은 디지털 글쓰기에서는 괄호 사용을 더욱 절제해야 합니다. 화면이 작은 모바일 환경에서는 괄호 안 내용이 본문과 시각적으로 혼재되어 읽기 불편합니다. 필요한 경우 괄호 대신 별도 문장으로 설명하거나 불릿 리스트로 보충 정보를 제공하는 방식이 효과적입니다.</p>

<h2>중첩 괄호 표기 방법</h2>
<p>한글 맞춤법에서는 중첩 괄호 사용을 최소화할 것을 권고합니다. 괄호 안에 또 다른 괄호가 필요한 경우, 대괄호와 소괄호를 구분해서 사용할 수 있습니다. 예를 들어 '한글 맞춤법 [제14항 (문장 부호)]'처럼 바깥에 대괄호, 안쪽에 소괄호를 씁니다. 그러나 이런 중첩 구조는 가능한 한 피하고, 문장을 다시 써서 단순화하는 것이 더 바람직합니다.</p>

<h2>괄호 부연 설명 작성 체크리스트</h2>
<ul>
  <li>괄호 안 설명이 20자 이내인가?</li>
  <li>괄호 안 내용이 없어도 본문이 이해되는가?</li>
  <li>한 단락에 괄호가 3개를 넘지 않는가?</li>
  <li>중첩 괄호를 피할 수 있는가?</li>
  <li>괄호 안 내용을 각주로 이동하는 것이 더 적절한가?</li>
</ul>
<p>괄호 분량과 글자수를 정확히 점검하려면 텍스터브(texturb.com)의 글자수 세기 도구를 활용하세요. 괄호 안 내용을 포함한 전체 글자수를 확인하면 원고 분량 관리에 도움이 됩니다.</p>

<h2>공문서에서의 괄호 표기 규정</h2>
<p>행정안전부 공문서 작성 지침에서는 괄호 사용에 관한 구체적인 지침을 제공합니다. 공문서에서 법령명 또는 기관명의 약칭을 도입할 때는 소괄호를 사용해 '행정안전부(이하 "행안부"라 한다)'처럼 표기합니다. 날짜 표기 시에도 '2026년 9월 1일(월)'처럼 요일을 괄호 안에 넣습니다. 금액 표기에서는 '일금 오십만 원(₩500,000)'처럼 아라비아 숫자를 한글 옆에 병기하는 방식도 자주 사용됩니다. 이처럼 공문서에서 괄호는 명확성과 간결성을 동시에 확보하는 중요한 도구입니다.</p>`,
    publishedAt: "2026-09-03T18:00:00+09:00",
    tags: ["괄호사용", "문장부호", "어문규범", "가독성"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "quotation-marks-korean-usage-guide",
    slug: "quotation-marks-korean-usage-guide",
    title: "겹낫표·홑낫표 사용법 — 한글 인용 부호 표준",
    excerpt: "한글 맞춤법에서 규정하는 겹낫표와 홑낫표의 올바른 사용 방법을 정리합니다. 쌍따옴표·작은따옴표와의 차이와 적용 기준도 안내합니다.",
    content: `<h2>낫표란 무엇인가</h2>
<p>낫표는 한국어 문장 부호 중 인용이나 강조 목적으로 사용하는 기호입니다. 겹낫표(≪ ≫)와 홑낫표(〈 〉) 두 종류가 있으며, 2015년 개정된 한글 맞춤법 문장 부호 규정에 따라 정식 문장 부호로 지정되었습니다. 국립국어원 한글 맞춤법 제14항에 그 용법이 명시되어 있습니다.</p>

<h2>겹낫표(≪ ≫)의 용법</h2>
<p>겹낫표는 주로 책이나 잡지 등의 제목을 표시할 때 사용합니다.</p>
<ul>
  <li><strong>단행본 제목</strong>: ≪훈민정음 해례본≫, ≪토지≫</li>
  <li><strong>정기간행물 제목</strong>: ≪국어국문학≫, ≪한국일보≫</li>
  <li><strong>음악·미술 작품</strong>: ≪교향곡 9번≫, ≪모나리자≫</li>
</ul>

<div style="background:#e8f8e8;border-left:4px solid #28a745;padding:16px;margin:24px 0;border-radius:4px">
  <strong>겹낫표 vs 큰따옴표</strong><br>
  겹낫표(≪ ≫)와 큰따옴표(" ")는 모두 책 제목 표기에 사용할 수 있습니다. 한글 맞춤법에서 겹낫표가 우선이지만, 디지털 환경에서는 입력 편의상 큰따옴표가 많이 쓰입니다.
</div>

<h2>홑낫표(〈 〉)의 용법</h2>
<p>홑낫표는 겹낫표보다 좁은 범위(책 안의 일부, 단편 작품 등)에 사용합니다.</p>
<ul>
  <li><strong>논문 제목</strong>: 〈한국어 외래어 표기 연구〉</li>
  <li><strong>단편소설·시 제목</strong>: 〈소나기〉, 〈진달래꽃〉</li>
  <li><strong>신문 기사 제목</strong>: 〈표준어 개정의 의미〉</li>
  <li><strong>방송 프로그램 회차 제목</strong>: ≪OO드라마≫의 〈1화〉처럼 구분</li>
</ul>

<h2>낫표와 따옴표의 선택 기준</h2>
<p>낫표와 따옴표 중 어느 것을 써야 하는지 헷갈릴 때는 다음 기준을 참고하세요.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">상황</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">공식 기준</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">디지털 대체</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">단행본 제목</td>
    <td style="border:1px solid #ccc;padding:10px">겹낫표 ≪ ≫</td>
    <td style="border:1px solid #ccc;padding:10px">큰따옴표 " "</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">논문·기사 제목</td>
    <td style="border:1px solid #ccc;padding:10px">홑낫표 〈 〉</td>
    <td style="border:1px solid #ccc;padding:10px">작은따옴표 ' '</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">강조·인용</td>
    <td style="border:1px solid #ccc;padding:10px">큰따옴표 " "</td>
    <td style="border:1px solid #ccc;padding:10px">큰따옴표 동일</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">단어 강조</td>
    <td style="border:1px solid #ccc;padding:10px">작은따옴표 ' '</td>
    <td style="border:1px solid #ccc;padding:10px">작은따옴표 동일</td>
  </tr>
</table>

<h2>낫표 입력 방법</h2>
<p>낫표는 일반 키보드로 직접 입력하기 어렵습니다. 다양한 입력 방법을 활용하세요.</p>
<ul>
  <li><strong>한글(HWP)</strong>: 특수문자 입력 → 괄호/인용 부호 선택</li>
  <li><strong>MS Word</strong>: 삽입 → 기호 → 특수문자에서 검색</li>
  <li><strong>유니코드 입력</strong>: 겹낫표 ≪ (U+00AB), ≫ (U+00BB)</li>
  <li><strong>모바일</strong>: 특수문자 키보드에서 선택 또는 복사-붙여넣기</li>
</ul>

<h2>낫표와 따옴표의 학술·출판 관행 차이</h2>
<p>학술 출판에서는 국립국어원 규정에 따라 낫표 사용을 원칙으로 합니다. 그러나 웹 환경이나 일반 블로그, SNS에서는 키 입력의 불편함으로 따옴표가 더 많이 쓰입니다. 어떤 부호를 사용하든 문서 내에서 일관성을 유지하는 것이 중요합니다. 특히 논문 투고 시 해당 학회의 원고 작성 지침을 먼저 확인해 지정된 표기 부호를 따르세요.</p>

<h2>낫표 사용 시 자주 묻는 질문</h2>
<p>낫표 사용과 관련해 국립국어원 온라인 가나다에 자주 접수되는 질문들입니다.</p>
<ul>
  <li><strong>Q: 영화 제목도 낫표로 표기하나요?</strong> — 영화, 드라마, 음악 앨범 제목도 겹낫표(≪ ≫) 또는 큰따옴표(" ")로 표기합니다.</li>
  <li><strong>Q: 온라인 기사 제목은 어떤 부호를 쓰나요?</strong> — 온라인 기사는 홑낫표(〈 〉) 또는 작은따옴표(' ')를 씁니다.</li>
  <li><strong>Q: 낫표 안에 마침표를 찍나요?</strong> — 제목 표기에는 마침표를 생략합니다: ≪훈민정음≫(O), ≪훈민정음.≫(X)</li>
</ul>

<h2>따옴표의 직접 인용과 간접 인용 구분</h2>
<p>낫표 외에 따옴표도 중요한 인용 부호입니다. 큰따옴표(" ")는 직접 인용(실제 발화나 글을 그대로 옮길 때), 작은따옴표(' ')는 단어나 어구를 강조하거나 간접 인용에 씁니다. 예를 들어 그는 "내일 다시 오겠습니다"라고 말했다(직접 인용)와 그는 '다시 오겠다'고 말했다(간접 인용)처럼 구분합니다. 텍스터브(texturb.com)에서 글자수를 점검하면서 인용 부호 사용도 함께 확인하면 글쓰기 품질이 높아집니다.</p>

<h2>한국어 인용 부호와 외국어 글쓰기의 차이</h2>
<p>한국어와 영어의 인용 부호 사용 방식에는 차이가 있습니다. 영어에서는 큰따옴표를 기본 인용 부호로 사용하고, 작은따옴표는 큰따옴표 안에서 중첩 인용할 때만 씁니다. 반면 한국어에서는 큰따옴표와 겹낫표 모두 기본 인용 부호로 사용할 수 있고, 작은따옴표는 강조나 단어 차원의 인용에 사용합니다. 영한 번역 작업을 할 때 이 차이를 인식해야 인용 부호를 적절히 변환할 수 있습니다.</p>

<h2>출판 단계별 낫표·따옴표 사용 일관성 유지</h2>
<p>원고를 작성할 때부터 낫표와 따옴표 사용 방식을 통일하면 출판 교정 과정에서 수고를 줄일 수 있습니다. 특히 여러 명이 함께 작성하는 공동 문서나 협업 프로젝트에서는 문서 시작 전 인용 부호 기준을 명시적으로 정해두는 것이 좋습니다. 글쓰기 스타일 가이드를 팀 내에서 공유하고, 텍스터브(texturb.com) 같은 도구를 활용해 최종 점검 단계에서 부호 일관성을 확인하면 완성도 높은 문서를 만들 수 있습니다.</p>`,
    publishedAt: "2026-09-03T23:00:00+09:00",
    tags: ["낫표", "문장부호", "인용부호", "어문규범"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "colon-semicolon-korean-usage-guide",
    slug: "colon-semicolon-korean-usage-guide",
    title: "쌍점·쌍반점 활용법 — 어문규범 문장 부호 규정",
    excerpt: "한글 맞춤법에서 규정하는 쌍점(:)과 쌍반점(;)의 올바른 사용 방법을 정리합니다. 한국어에서의 쌍반점 사용 현황과 영어와의 차이도 안내합니다.",
    content: `<h2>쌍점과 쌍반점이란</h2>
<p>쌍점(:, colon)은 앞 내용에 대한 설명이나 열거를 시작할 때 사용하는 문장 부호입니다. 쌍반점(;, semicolon)은 한국어 문장 부호에서는 거의 사용하지 않으며, 영어권에서 주로 활용합니다. 2015년 개정된 한글 맞춤법 문장 부호 규정에서 쌍점의 용법이 구체적으로 정해졌습니다.</p>

<h2>쌍점(:) 사용 규정</h2>
<p>한글 맞춤법 제14항에 따른 쌍점 사용 기준입니다.</p>
<ul>
  <li><strong>표제 뒤에 해당 항목 나열</strong>: 문방구류: 연필, 볼펜, 지우개</li>
  <li><strong>게임·운동 경기의 득점 표시</strong>: 한국 3: 일본 2</li>
  <li><strong>시와 분 구분</strong>: 오전 10:30</li>
  <li><strong>대화 대본에서 화자 표시</strong>: 철수: 안녕하세요</li>
</ul>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>쌍점 앞뒤 공백 규정</strong><br>
  한글 쌍점 사용 시 앞에는 공백 없이, 뒤에는 공백을 한 칸 씁니다.<br>
  예: 준비물: 연필, 공책, 가방 (O)<br>
  예: 준비물 : 연필, 공책, 가방 (X — 앞에 공백 불필요)
</div>

<h2>쌍반점(;) 한국어에서의 사용</h2>
<p>쌍반점은 영어에서 두 개의 독립적인 절을 연결하거나 복잡한 열거에서 구분선으로 사용합니다. 그러나 한국어 문장 부호 규정에서는 쌍반점이 공식 문장 부호로 지정되어 있지 않아, 한국어 일반 글쓰기에서는 거의 사용하지 않습니다. 컴퓨터 프로그래밍 언어나 수학 기호로는 사용되지만, 한국어 문장에서는 쌍반점 대신 반점(,)이나 가운뎃점(·) 또는 별도 문장으로 처리합니다.</p>

<h2>쌍점을 잘못 사용하는 사례</h2>
<p>쌍점 표기에서 자주 발생하는 오류 사례입니다.</p>
<ul>
  <li><strong>앞에 공백</strong>: '준비물 : 연필' — 앞 공백 삭제 필요</li>
  <li><strong>문장 중간 임의 삽입</strong>: '그는: 열심히 공부했다' — 쌍점 삭제 필요</li>
  <li><strong>쌍점 뒤 줄바꿈 과용</strong>: 내용이 짧은 경우 줄바꿈 없이 이어써도 됨</li>
</ul>

<h2>서류·목록 작성에서의 쌍점 활용</h2>
<p>보고서, 기획서, 공문서에서 항목을 나열할 때 쌍점을 효과적으로 활용할 수 있습니다. 쌍점 뒤에 항목이 3개 이상인 경우 줄바꿈 후 불릿 리스트로 처리하면 가독성이 높아집니다. 쌍점 뒤의 열거 항목이 문장형(주어+서술어 포함)인 경우 각각 별도 문장으로 쓰는 것이 더 명확합니다.</p>

<h2>디지털 글쓰기에서의 쌍점 활용</h2>
<p>이메일 제목, 슬라이드 헤드라인, 소셜미디어 게시물에서 쌍점을 적절히 활용하면 내용을 간결하게 구조화할 수 있습니다. 예를 들어 이메일 제목에 '제안서 검토 요청: [프로젝트명]'처럼 쌍점을 사용하면 내용을 미리 알 수 있어 효율적입니다. 단, 지나치게 많은 쌍점 사용은 문장 구조를 파편화해 오히려 읽기 불편하게 만들 수 있으므로 한 문단에 2개 이하로 제한하는 것이 좋습니다.</p>

<h2>쌍점과 줄표의 차이</h2>
<p>쌍점(:)과 줄표(—) 모두 뒤에 오는 내용을 이끌어내는 기능이 있어 혼동하기 쉽습니다. 쌍점은 표제나 분류 항목 뒤에 구체적 내용을 나열할 때, 줄표는 문장 내에서 앞 내용을 보충하거나 갑자기 주제가 전환될 때 씁니다. 예를 들어 '오늘의 메뉴: 비빔밥, 된장찌개'는 쌍점이 적절하고, '그는 한동안 침묵했다 — 어쩔 수 없는 상황이었다'는 줄표가 적절합니다.</p>

<h2>비즈니스 문서에서의 쌍점 활용 전략</h2>
<p>기획서, 제안서, 프레젠테이션 자료에서 쌍점을 효과적으로 활용하면 내용 구조를 명확하게 전달할 수 있습니다. 쌍점 이후에 오는 열거 항목이 길다면 줄바꿈 후 불릿 포인트로 정리하는 것이 가독성을 높이는 방법입니다. 예를 들어 '주요 성과: (줄바꿈) - 매출 20% 증가 / - 신규 고객 500명 확보'처럼 구조화하면 읽기 편합니다. 한국어 비즈니스 문서에서 쌍점은 특히 목록형 서술에서 강점을 발휘합니다.</p>

<h2>쌍점 표기 관련 자주 묻는 사항</h2>
<ul>
  <li><strong>시간 표기에서의 쌍점</strong>: 오전 9:30처럼 시와 분 사이에 쌍점을 씁니다. 이는 24시간제에서도 동일합니다(14:30).</li>
  <li><strong>비율 표기</strong>: 3:2처럼 비율이나 비교를 나타낼 때도 쌍점을 씁니다.</li>
  <li><strong>쌍점 뒤 대문자</strong>: 영어에서는 쌍점 뒤 문장 시작 시 대문자를 쓰지만, 한국어에서는 해당 없습니다.</li>
  <li><strong>이메일·메신저</strong>: 디지털 메시지에서 쌍점 사용은 자유롭게 허용됩니다.</li>
</ul>`,
    publishedAt: "2026-09-04T04:00:00+09:00",
    tags: ["쌍점", "문장부호", "어문규범", "글쓰기"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "dash-hyphen-korean-usage-guide",
    slug: "dash-hyphen-korean-usage-guide",
    title: "줄표·붙임표 차이 — 한글 문장 부호 표준",
    excerpt: "한글 맞춤법에서 규정하는 줄표(—)와 붙임표(-)의 올바른 사용 방법과 차이를 정리합니다. 물결표·빗금 등 관련 문장 부호도 함께 안내합니다.",
    content: `<h2>줄표와 붙임표는 어떻게 다른가</h2>
<p>줄표(—, em dash)와 붙임표(-, hyphen)는 외형이 비슷하지만 길이와 용도가 다릅니다. 줄표는 더 긴 수평선으로 문장 내 삽입어구나 갑작스러운 전환을 나타낼 때 씁니다. 붙임표는 더 짧고 단어 사이를 연결하거나 숫자 범위를 나타낼 때 씁니다. 2015년 개정 한글 맞춤법 제14항에 두 부호의 용법이 명시되어 있습니다.</p>

<h2>줄표(—) 사용 규정</h2>
<p>국립국어원 규정에 따른 줄표의 주요 용도입니다.</p>
<ul>
  <li><strong>삽입어구 표시</strong>: 그 사건—모두가 기억하는—은 우리 사회를 바꿨다</li>
  <li><strong>말이 끊어질 때</strong>: "그래서 저는—" 하고 그녀는 말을 멈췄다</li>
  <li><strong>표제 뒤 내용 전개</strong>: 결론 — 이상의 논의를 정리하면</li>
  <li><strong>앞 내용 보충·전환</strong>: 나는 믿었다 — 그것이 실수였지만</li>
</ul>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>줄표 앞뒤 공백</strong><br>
  줄표 앞뒤로 공백을 한 칸씩 두는 것이 일반적인 관행입니다.<br>
  예: 그는 — 아무도 몰랐지만 — 이미 결정했다 (O)
</div>

<h2>붙임표(-) 사용 규정</h2>
<p>붙임표(하이픈)의 주요 용도는 다음과 같습니다.</p>
<ul>
  <li><strong>복합어 연결</strong>: 서울-부산 간, 한국-일본 협의</li>
  <li><strong>전화번호·날짜 구분</strong>: 02-1234-5678, 2026-09-01</li>
  <li><strong>숫자 범위 표시</strong>: 2020-2026년 (단, 물결표도 허용)</li>
  <li><strong>단어 분절 시</strong>: 줄 끝에서 단어를 나눌 때 (한국어는 거의 쓰지 않음)</li>
</ul>

<h2>줄표와 붙임표 구별 실전 사례</h2>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">올바른 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">잘못된 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">이유</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">서울 — 이 도시는 역동적이다</td>
    <td style="border:1px solid #ccc;padding:10px">서울 - 이 도시는 역동적이다</td>
    <td style="border:1px solid #ccc;padding:10px">문장 전환에는 줄표</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">2020-2026년 사업 기간</td>
    <td style="border:1px solid #ccc;padding:10px">2020—2026년 사업 기간</td>
    <td style="border:1px solid #ccc;padding:10px">기간 범위는 붙임표</td>
  </tr>
</table>

<h2>물결표(~)와 빗금(/)의 관련 용법</h2>
<p>물결표와 빗금도 줄표·붙임표와 혼동할 수 있는 문장 부호입니다.</p>
<ul>
  <li><strong>물결표(~)</strong>: 범위나 대략적 수량 표시 — '10~20명', '2020~2026년'</li>
  <li><strong>빗금(/)</strong>: 대립되는 두 개념 연결, 선택 표시 — '입장/퇴장', '남/여'</li>
</ul>
<p>한글 맞춤법 규정에서 물결표는 붙임표와 함께 범위 표시에 허용됩니다. 공문서에서는 물결표보다 붙임표를 선호하는 경향이 있으니 해당 기관의 문서 작성 지침을 따르세요.</p>

<h2>디지털 글쓰기에서 줄표 입력 방법</h2>
<p>줄표(—)는 키보드에서 직접 입력하기 어렵습니다. 다양한 입력 방법을 활용하세요.</p>
<ul>
  <li><strong>한글(HWP)</strong>: - 두 번 연속 입력하면 자동 변환</li>
  <li><strong>MS Word</strong>: -- 입력 후 자동 완성 또는 삽입→기호</li>
  <li><strong>유니코드</strong>: U+2014 입력 또는 복사-붙여넣기</li>
  <li><strong>맥OS</strong>: Option + Shift + - 단축키</li>
</ul>
<p>글쓰기에서 줄표와 붙임표를 정확히 구분해 사용하면 문서의 전문성이 높아집니다. 텍스터브(texturb.com)에서 글자수를 확인하면서 문장 부호 사용도 함께 점검하는 습관을 기르세요.</p>

<h2>줄표와 붙임표 관련 자주 묻는 질문</h2>
<p>문장 부호 줄표와 붙임표에 관해 자주 접수되는 질문을 정리합니다.</p>
<ul>
  <li><strong>Q: 이름 사이 줄표(김—씨)는 맞나요?</strong> — 성명에서 일부 글자를 숨길 때 줄표 대신 동그라미(○)를 사용하는 것이 더 일반적입니다.</li>
  <li><strong>Q: 범위 표시에서 줄표와 물결표 중 어느 것을 쓰나요?</strong> — '2020~2026년' 또는 '2020-2026년' 모두 허용됩니다. 공문서에서는 붙임표를 더 많이 씁니다.</li>
  <li><strong>Q: 영어 en dash와 em dash는 한국어에서 어떻게 구분하나요?</strong> — 한국어 맞춤법에서는 단일 줄표(—, em dash)만 규정합니다. en dash(–)는 한국어 공식 규정에 없습니다.</li>
</ul>

<h2>출판물별 줄표·붙임표 관행 차이</h2>
<p>신문, 잡지, 도서, 공문서 등 출판물 유형에 따라 줄표와 붙임표 사용 관행이 다를 수 있습니다. 신문에서는 기사 헤드라인에 줄표를 자주 활용해 제목을 강조하거나 부제를 구분합니다. 도서에서는 대화문의 끊김이나 삽입구를 줄표로 표현하는 것이 보편적입니다. 공문서에서는 붙임표를 날짜·전화번호 구분에 사용하고, 줄표는 거의 쓰지 않습니다. 작성할 문서의 장르와 독자층에 맞는 문장 부호 사용이 중요합니다.</p>`,
    publishedAt: "2026-09-04T09:00:00+09:00",
    tags: ["줄표", "붙임표", "문장부호", "어문규범"],
    category: "글자수 가이드",
    author: "texturb",
  },
];
