import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH58: BlogPost[] = [
  {
    id: "auxiliary-verb-spacing-korean-guide",
    slug: "auxiliary-verb-spacing-korean-guide",
    title: "보조용언 띄어쓰기 — 국립국어원 공식 기준",
    excerpt: "한국어 보조용언의 올바른 띄어쓰기를 국립국어원 어문규범에 따라 정리합니다. 붙여 쓰기 허용 범위와 자주 헷갈리는 사례를 안내합니다.",
    content: `<h2>보조용언이란 무엇인가</h2>
<p>보조용언(補助用言)은 본용언 뒤에서 그 의미를 보충하거나 문법적 기능을 더하는 용언입니다. '먹어 보다'에서 '보다'처럼 본용언 '먹어' 뒤에서 시도·경험의 의미를 더합니다. 한글 맞춤법 제47항에 따르면 보조용언은 원칙적으로 앞말과 띄어 씁니다. 단, 일부 경우에는 붙여 쓰는 것도 허용됩니다.</p>

<h2>보조용언 띄어쓰기 원칙 (한글 맞춤법 제47항)</h2>
<p>국립국어원 규정에 따른 보조용언 띄어쓰기 원칙입니다.</p>
<ul>
  <li><strong>원칙: 띄어 쓴다</strong> — 먹어 보다, 읽어 드리다, 가 버리다</li>
  <li><strong>허용: 붙여 쓸 수 있다</strong> — 먹어보다, 읽어드리다, 가버리다</li>
</ul>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>원칙과 허용 둘 다 맞는 경우</strong><br>
  보조용언은 원칙(띄어 씀)과 허용(붙여 씀) 모두 표준입니다. 단, 한 문서 내에서 일관성을 유지하는 것이 중요합니다. 공식 문서에서는 원칙(띄어 씀)을 따르는 것이 권장됩니다.
</div>

<h2>보조용언 종류별 예시</h2>
<p>보조용언은 의미에 따라 다양한 종류가 있습니다. 주요 보조동사와 보조형용사를 정리합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">의미</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">보조용언</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">예시</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">시도·경험</td>
    <td style="border:1px solid #ccc;padding:10px">보다</td>
    <td style="border:1px solid #ccc;padding:10px">먹어 보다, 해 보다</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">완료·종결</td>
    <td style="border:1px solid #ccc;padding:10px">버리다</td>
    <td style="border:1px solid #ccc;padding:10px">먹어 버리다, 가 버리다</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">진행</td>
    <td style="border:1px solid #ccc;padding:10px">가다, 오다</td>
    <td style="border:1px solid #ccc;padding:10px">걸어 가다, 달려 오다</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">봉사·수혜</td>
    <td style="border:1px solid #ccc;padding:10px">주다, 드리다</td>
    <td style="border:1px solid #ccc;padding:10px">도와 주다, 읽어 드리다</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">부정</td>
    <td style="border:1px solid #ccc;padding:10px">아니하다, 못하다</td>
    <td style="border:1px solid #ccc;padding:10px">하지 아니하다, 하지 못하다</td>
  </tr>
</table>

<h2>붙여 쓰기가 허용되지 않는 경우</h2>
<p>보조용언의 붙여 쓰기가 허용되지 않는 예외 경우가 있습니다. 보조용언 앞에 조사가 개입하거나, 보조용언 자체가 합성어인 경우 반드시 띄어 씁니다.</p>
<ul>
  <li><strong>조사 개입 시 반드시 띄어 씀</strong>: 먹어는 보다 (O) / 먹어는보다 (X)</li>
  <li><strong>'-어 있다' 형</strong>: 앉아 있다, 열려 있다 — 상태 지속 표현</li>
  <li><strong>'-고 있다' 형</strong>: 먹고 있다, 자고 있다 — 진행 표현</li>
</ul>

<h2>자주 헷갈리는 보조용언 표기 사례</h2>
<p>실제 글쓰기에서 자주 틀리는 보조용언 표기 사례입니다.</p>
<ul>
  <li><strong>가지고 오다</strong> (O) vs <strong>가져오다</strong> (O) — 둘 다 허용</li>
  <li><strong>해 주다</strong> (O) / <strong>해주다</strong> (O) — 원칙/허용 모두 맞음</li>
  <li><strong>해 나가다</strong> (O) — 진행 보조용언, 두 보조용언 연속 사용</li>
  <li><strong>알아보다</strong> (O) — 이미 합성어로 굳어진 경우 붙여 씀</li>
</ul>

<h2>보조용언 표기 실전 전략</h2>
<p>보조용언 표기에서 가장 중요한 것은 일관성입니다. 원칙(띄어 쓰기)과 허용(붙여 쓰기) 중 하나를 정하고 문서 전체에서 통일되게 사용하세요. 공문서나 학술 논문에서는 원칙에 따라 띄어 쓰는 것이 더 격식에 맞습니다. 인터넷 블로그나 비공식 글쓰기에서는 붙여 쓰기가 더 자연스럽게 느껴지기도 합니다. 맞춤법 검사기를 통해 최종 점검하면 오류를 크게 줄일 수 있습니다.</p>

<h2>보조용언 띄어쓰기와 합성어의 구별</h2>
<p>보조용언과 합성어는 형태가 비슷해 혼동하기 쉽습니다. 이미 사전에 합성어로 등재된 단어는 붙여 쓰고, 그렇지 않은 경우 보조용언 규정에 따라 원칙/허용을 적용합니다. 예를 들어 '알아보다'는 표준국어대사전에 합성어로 등재되어 붙여 씁니다. 반면 '먹어 보다'는 보조용언 구성으로 원칙은 띄어 씁니다. 이처럼 판단이 어려운 경우 표준국어대사전 검색이 기준입니다.</p>

<h2>연속 보조용언 표기 방법</h2>
<p>보조용언이 연속으로 올 때는 각각을 앞말과 띄어 씁니다. 예를 들어 '해 나가다'는 '해 + 나가다'로 구성되어 두 보조용언 모두 띄어 씁니다. '먹어 볼 수 있다'처럼 보조용언과 의존명사가 연속으로 오는 경우도 마찬가지입니다. 연속 보조용언 표기가 헷갈릴 때는 각 단어를 개별로 사전에서 확인하고, 보조용언은 원칙적으로 띄어 쓴다는 기본 규칙을 적용하세요.</p>

<h2>'-아/-어 주다' 존댓말 표기</h2>
<p>'-아/-어 주다'의 높임말인 '-아/-어 드리다'도 보조용언으로 취급됩니다. '읽어 드리다', '도와 드리다'처럼 원칙은 띄어 씁니다. 일상 대화에서는 '읽어드리다', '도와드리다'처럼 붙여 쓰는 경향이 많지만, 공문서나 공식 안내문에서는 원칙인 띄어 쓰기를 권장합니다. 고객 서비스 안내문, 업무 이메일, 공식 홈페이지 게시물 등에서 이 원칙을 지키면 더 격식 있는 인상을 줍니다.</p>`,
    publishedAt: "2026-09-02T12:00:00+09:00",
    tags: ["보조용언", "띄어쓰기", "어문규범", "국립국어원"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "proper-noun-notation-korean-guide",
    slug: "proper-noun-notation-korean-guide",
    title: "고유명사 표기 — 어문규범 인명·지명 기준",
    excerpt: "한국어 고유명사(인명, 지명, 기관명 등)의 올바른 표기 기준을 어문규범에 따라 정리합니다. 자주 혼동하는 고유명사 표기 사례도 안내합니다.",
    content: `<h2>고유명사와 일반명사의 차이</h2>
<p>고유명사(固有名詞)는 특정 사람, 장소, 사물, 기관에 고유하게 붙여진 이름입니다. '서울', '홍길동', '한강', '국립국어원'처럼 세상에 하나뿐인 대상을 가리킵니다. 반면 일반명사는 같은 종류의 여러 사물을 통칭하는 '사람', '강', '도시'처럼 일반적 이름입니다. 한글 맞춤법에서는 고유명사에 대한 특별한 표기 규정은 없으나, 외래어 표기법과 로마자 표기법에서 고유명사(특히 인명, 지명)에 대한 별도 규정을 두고 있습니다.</p>

<h2>인명 표기 기준</h2>
<p>한국인 이름 표기는 기본적으로 한글 맞춤법을 따릅니다. 성과 이름의 경계에 대한 공식 규정은 없지만, 관행적으로 성(姓)과 이름을 붙여 씁니다.</p>
<ul>
  <li><strong>한국인 이름</strong>: 성과 이름 붙여 씀 (예: 홍길동, 김철수)</li>
  <li><strong>외국인 이름 한글 표기</strong>: 외래어 표기법에 따라 표기 (예: 조 바이든, 버락 오바마)</li>
  <li><strong>외국인 이름 띄어쓰기</strong>: 성과 이름 사이 띄어 씀 (예: 알버트 아인슈타인)</li>
</ul>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:16px;margin:24px 0;border-radius:4px">
  <strong>외국인 이름 한글 표기 주의</strong><br>
  외국인 이름은 국립국어원 외래어 표기법에 근거한 표기를 우선합니다. 단, 오랫동안 관용적으로 굳어진 표기(예: 마크 트웨인, 링컨)는 그대로 씁니다.
</div>

<h2>지명 표기 기준</h2>
<p>국내 지명은 국토지리정보원이 고시하는 공식 지명을 표준으로 사용합니다. 외국 지명은 국립국어원 외래어 표기법에 따른 한글 표기를 사용합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">구분</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">표기 기준</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">예시</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">국내 행정구역</td>
    <td style="border:1px solid #ccc;padding:10px">행정안전부 고시</td>
    <td style="border:1px solid #ccc;padding:10px">서울특별시, 경기도</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">국내 자연지명</td>
    <td style="border:1px solid #ccc;padding:10px">국토지리정보원 고시</td>
    <td style="border:1px solid #ccc;padding:10px">한라산, 낙동강</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">외국 지명</td>
    <td style="border:1px solid #ccc;padding:10px">국립국어원 외래어 표기법</td>
    <td style="border:1px solid #ccc;padding:10px">파리, 런던, 베이징</td>
  </tr>
</table>

<h2>기관명·단체명 표기</h2>
<p>기관명은 해당 기관의 공식 명칭을 그대로 사용하는 것이 원칙입니다. 줄임말이 관용화된 경우는 줄임말을 먼저 쓰고 첫 사용 시 전체 명칭을 병기합니다.</p>
<ul>
  <li><strong>공식 명칭 우선</strong>: 행정안전부(O), 행안부(관용적 줄임)</li>
  <li><strong>첫 사용 시 전체 명칭</strong>: 국립국어원(이하 '국어원')처럼 약칭 고지</li>
  <li><strong>외국 기관명</strong>: 공식 번역명 또는 외래어 표기법에 따른 한글 표기</li>
</ul>

<h2>고유명사 표기 오류 예방</h2>
<p>고유명사 표기에서 자주 발생하는 오류는 관용 표기와 공식 표기의 혼용입니다. 공문서나 출판물에서는 반드시 공식 표기를 확인하고 사용해야 합니다. 특히 외국 인명과 지명은 국립국어원 외래어 표기법 용례집을 참조하거나, 국립국어원 온라인 가나다 서비스를 통해 확인하세요. 표기가 불확실한 고유명사는 사용 전 반드시 확인하는 습관을 기르는 것이 중요합니다.</p>

<h2>기업명·브랜드명 표기 기준</h2>
<p>기업명과 브랜드명은 해당 기업이 공식 등록한 명칭을 사용합니다. 한국 기업의 경우 공정거래위원회에 등록된 상호나 법인 등기부 기재 명칭이 공식입니다. 외국 기업명은 한국 법인 등록명 또는 외래어 표기법에 따른 한글 표기를 사용합니다. 예를 들어 'Google'의 한국 공식 명칭은 '구글 코리아 유한회사'이며, 한글 표기는 '구글'입니다. 브랜드명은 ® 또는 ™ 표시를 요구하는 경우 해당 기업의 사용 지침을 따르는 것이 필요합니다.</p>

<h2>역사적 고유명사 표기 주의</h2>
<p>역사적 인물명이나 지명은 현대 맞춤법에 따른 표기와 역사적 원래 표기 사이에 차이가 있을 수 있습니다. 학술 논문에서는 현재 표준 표기를 따르되, 필요에 따라 옛 표기를 병기합니다. 예를 들어 세종대왕의 이름은 '이도(李裪)'이지만, '세종대왕'으로 통칭하는 것이 관행입니다. 역사적 지명도 현재 행정지명과 다를 수 있으므로, 역사 관련 글쓰기에서는 역사적 표기와 현대 지명을 함께 표기하는 것이 독자의 이해를 돕습니다. 고유명사 표기를 글쓰기에서 정확하게 사용하면 문서의 신뢰성이 높아집니다. 국립국어원 표준국어대사전과 텍스터브(texturb.com)를 함께 활용해 최종 점검을 하는 것을 권장합니다. 고유명사는 한 번 잘못 표기되면 수정이 까다로우므로 작성 단계에서 정확성을 확보하는 것이 가장 중요합니다.</p>`,
    publishedAt: "2026-09-02T17:00:00+09:00",
    tags: ["고유명사", "인명표기", "지명표기", "어문규범"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "place-name-notation-korean-guide",
    slug: "place-name-notation-korean-guide",
    title: "지명 표기법 — 국토지리정보원 공식 가이드",
    excerpt: "국토지리정보원이 정한 지명 표기 공식 기준을 정리합니다. 자연지명, 행정지명, 인공지명의 표기 원칙과 한글·로마자 표기 기준을 안내합니다.",
    content: `<h2>지명 표기의 중요성</h2>
<p>지명(地名)은 특정 지역이나 장소를 가리키는 고유명사입니다. 지도, 공문서, 교과서, 방송, 인터넷 등에서 일관된 지명 표기는 정보 소통의 혼란을 막고 정확한 위치 전달을 위해 중요합니다. 국토지리정보원(NGII, National Geographic Information Institute)은 국내 지명의 표준화와 공식 표기를 담당하며, 공식 지명 데이터베이스인 '국가공간정보포털'을 운영합니다.</p>

<h2>국토지리정보원 지명 표기 원칙</h2>
<p>국토지리정보원이 적용하는 지명 표기의 핵심 원칙입니다.</p>
<ol>
  <li><strong>역사성 존중</strong>: 오랫동안 사용되어 온 전통 지명을 우선 보존합니다.</li>
  <li><strong>현지 발음 반영</strong>: 지역 주민이 실제로 부르는 발음을 반영합니다.</li>
  <li><strong>한글 표준화</strong>: 한글 맞춤법과 표준어 규정에 따른 표기를 원칙으로 합니다.</li>
  <li><strong>로마자 표기 통일</strong>: 국립국어원 로마자 표기법에 따라 로마자 표기를 통일합니다.</li>
</ol>

<h2>지명의 종류별 표기 기준</h2>
<p>지명은 자연지명, 행정지명, 인공지명으로 나뉘며, 각각 표기 기준이 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">지명 종류</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">표기 기준</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">예시</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">자연지명</td>
    <td style="border:1px solid #ccc;padding:10px">국토지리정보원 고시</td>
    <td style="border:1px solid #ccc;padding:10px">백두산, 한강, 제주도</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">행정지명</td>
    <td style="border:1px solid #ccc;padding:10px">행정안전부 고시</td>
    <td style="border:1px solid #ccc;padding:10px">경기도 수원시 팔달구</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">인공지명</td>
    <td style="border:1px solid #ccc;padding:10px">관련 기관 고시</td>
    <td style="border:1px solid #ccc;padding:10px">인천국제공항, 광화문광장</td>
  </tr>
</table>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>지명 한글·로마자 병기 기준</strong><br>
  공식 지도나 표지판에서는 한글 지명과 로마자 지명을 병기합니다.<br>
  예: 서울 / Seoul, 한강 / Hangang, 경복궁 / Gyeongbokgung
</div>

<h2>지명 변경과 고시 절차</h2>
<p>지명을 변경하려면 해당 지자체가 주민 의견 수렴을 거쳐 행정안전부(행정구역 지명) 또는 국토지리정보원(자연지명)에 변경 신청을 해야 합니다. 한번 공식 고시된 지명은 함부로 바꾸기 어려우며, 변경 시 기존 지명의 역사성을 해치지 않는 방향에서 심의가 이루어집니다.</p>

<h2>외국 지명 한글 표기</h2>
<p>외국 지명은 국립국어원 외래어 표기법에 따라 한글로 표기합니다. 이미 관용적으로 굳어진 외국 지명은 관용 표기를 허용하기도 합니다.</p>
<ul>
  <li><strong>원칙 표기 적용</strong>: 베이징(北京), 도쿄(東京), 상하이(上海)</li>
  <li><strong>관용 표기 허용</strong>: 뉴욕(New York), 파리(Paris), 런던(London)</li>
  <li><strong>한자 지명 병기</strong>: 중국·일본 지명은 원어 한자를 괄호 안에 병기하기도 함</li>
</ul>

<h2>지명 표기 글쓰기 실전 팁</h2>
<p>신문 기사, 여행 가이드, 부동산 문서 등 지명을 자주 쓰는 글쓰기에서 지명 표기 오류를 줄이는 방법입니다. 먼저 국가공간정보포털(map.ngii.go.kr)에서 공식 지명을 검색하세요. 행정구역 명칭은 행정안전부 공식 홈페이지나 정부 24에서 확인할 수 있습니다. 외국 지명은 국립국어원 외래어 표기 용례집을 참조하고, 텍스터브(texturb.com)의 글쓰기 도구를 통해 맞춤법 오류를 점검하는 습관을 기르는 것이 좋습니다.</p>

<h2>지명의 붙여쓰기와 띄어쓰기 기준</h2>
<p>지명을 구성하는 요소는 일반적으로 붙여 씁니다. 예를 들어 '서울특별시'는 '서울 특별시'가 아니라 붙여 씁니다. 마찬가지로 '경기도 수원시 팔달구 효원로'처럼 행정구역 단위는 각각 띄어 씁니다. 단, 복합 지명의 경우 사전에 등재된 방식을 따르는 것이 원칙이며, 불확실하면 국가공간정보포털에서 확인하세요.</p>

<h2>신·구 지명 병기 방법</h2>
<p>행정구역 개편이나 지명 변경으로 인해 신·구 지명이 혼용되는 경우가 있습니다. 이런 경우 구 지명과 신 지명을 괄호로 병기하는 방법이 유용합니다. 예를 들어 '성남시 중원구(구 성남시 중원구)'처럼 표기합니다. 역사 연구나 부동산 문서에서는 구 지명을 명시하는 것이 정확성과 이해를 높이는 데 도움이 됩니다. 국토지리정보원 지명 데이터베이스에는 과거 지명과 변경 이력도 포함되어 있어 참고할 수 있습니다. 지명 표기가 불확실한 경우 국가공간정보포털 검색과 텍스터브(texturb.com)의 글쓰기 도구를 활용해 점검하세요.</p>`,
    publishedAt: "2026-09-02T22:00:00+09:00",
    tags: ["지명표기", "국토지리정보원", "어문규범", "한글"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "book-title-notation-publishing-standards",
    slug: "book-title-notation-publishing-standards",
    title: "도서명·서명 표기 — 출판 표준 어문 규정",
    excerpt: "책 제목(도서명)과 논문·정기간행물 제목의 올바른 표기 방법을 출판 어문 규정에 따라 정리합니다. 따옴표, 꺾쇠 사용 기준과 이탤릭체 대체 방법도 안내합니다.",
    content: `<h2>도서명 표기가 중요한 이유</h2>
<p>도서명(圖書名), 즉 책 제목은 글 안에서 인용하거나 참고문헌으로 작성할 때 정확한 표기가 필요합니다. 학술 논문, 보고서, 기사에서 도서명을 틀리게 표기하면 독자가 정보를 확인하기 어렵습니다. 한국어 글쓰기에서는 도서명을 쌍따옴표나 꺾쇠표로 구분하는 관행이 있으며, 출판 관련 어문 규정을 이해하는 것이 중요합니다.</p>

<h2>한국어 도서명 표기 기호</h2>
<p>한국 맞춤법 제14항(문장 부호) 및 출판 관행에 따른 도서명 표기 기호입니다.</p>
<ul>
  <li><strong>책 이름 (단행본)</strong>: 겹꺾쇠표(≪ ≫) 또는 큰따옴표(" ") — 예: ≪훈민정음≫, "훈민정음"</li>
  <li><strong>논문·기사 이름</strong>: 홑꺾쇠표(〈 〉) 또는 작은따옴표(' ') — 예: 〈한국어 표기에 관한 연구〉</li>
  <li><strong>잡지·신문 이름</strong>: 겹꺾쇠표(≪ ≫) — 예: ≪국어국문학≫</li>
</ul>

<div style="background:#e8f8e8;border-left:4px solid #28a745;padding:16px;margin:24px 0;border-radius:4px">
  <strong>꺾쇠와 따옴표 선택 기준</strong><br>
  한국어 출판물에서는 꺾쇠표(겹꺾쇠·홑꺾쇠)가 공식 문장 부호로 지정되어 있으나, 온라인 환경에서는 입력 편의상 큰따옴표·작은따옴표를 많이 사용합니다. 학술 논문과 공식 출판물에서는 꺾쇠표를 우선 사용하세요.
</div>

<h2>학술 논문 인용 시 도서명 표기</h2>
<p>학술 논문에서 참고문헌을 표기할 때는 학회별 인용 스타일(APA, MLA, Chicago 등)과 한국 학술 관행을 따릅니다. 한국 학술지 대부분은 한국연구재단(NRF) 등재지 규정에 따른 인용 방식을 적용합니다.</p>
<ul>
  <li><strong>저서(단행본)</strong>: 홍길동(2020), ≪한국어 표기법 연구≫, 출판사.</li>
  <li><strong>학술 논문</strong>: 홍길동(2021), 「한국어 외래어 표기에 관한 연구」, ≪국어국문학≫, 15권.</li>
  <li><strong>신문 기사</strong>: 홍길동(2022. 5. 3.), 「표준어 개정의 의미」, ≪한국일보≫, 15면.</li>
</ul>

<h2>도서명 번역 및 병기 규정</h2>
<p>외국 도서의 번역본 제목과 원제를 함께 표기할 때는 원제를 괄호 안에 병기합니다. 예를 들어 ≪전쟁과 평화(War and Peace)≫처럼 씁니다. 번역서 제목이 원제와 크게 다를 경우, 학술 글쓰기에서는 원제를 반드시 병기해 혼동을 방지합니다.</p>

<h2>온라인·디지털 환경에서의 도서명 표기</h2>
<p>블로그, SNS, 이메일 등 디지털 글쓰기에서는 꺾쇠표보다 따옴표가 더 많이 사용됩니다. 이는 키보드 입력의 편의성 때문입니다. 디지털 환경에서의 도서명 표기 방법은 다음과 같습니다.</p>
<ul>
  <li><strong>블로그·SNS</strong>: "책 제목"처럼 큰따옴표 사용</li>
  <li><strong>이메일·메신저</strong>: 인용 부호 없이 이탤릭체 효과 불가, 큰따옴표로 대체</li>
  <li><strong>마크다운 문서</strong>: *책 제목*처럼 이탤릭체 또는 **굵게** 강조</li>
</ul>

<h2>잘못된 도서명 표기 사례</h2>
<p>도서명 표기에서 자주 발생하는 오류 사례입니다. 작은 오류처럼 보여도 학술 글쓰기에서는 신뢰성에 영향을 줄 수 있습니다.</p>
<ul>
  <li>도서명 없이 인용: '그 책에서'처럼 정확한 도서명을 생략하는 경우</li>
  <li>번역서 원제 미기재: 번역서인데 원제 표기 없이 한국어 번역 제목만 쓰는 경우</li>
  <li>저자명·출판연도 오기: 참고문헌에서 저자명이나 출판 연도가 잘못된 경우</li>
</ul>

<h2>소제목과 장 번호 표기 방법</h2>
<p>책 안의 장(章), 절(節), 소제목을 인용할 때도 표기 방식을 통일해야 합니다. 한국 출판 관행에서는 '제1장', '제2절', '제3항'처럼 '제(第)+아라비아 숫자+단위'로 표기하는 것이 일반적입니다. 소제목을 인용할 때는 홑꺾쇠표(〈 〉)나 작은따옴표(' ')를 씁니다. 예를 들어 '≪훈민정음 해례본≫의 〈예의편〉에 따르면...'처럼 도서명과 소제목을 구분하면 명확합니다.</p>

<h2>전자책과 디지털 자료 도서명 표기</h2>
<p>최근에는 전자책(e-book), 온라인 기사, 블로그 포스팅을 인용하는 경우가 늘었습니다. 이런 디지털 자료의 도서명 표기는 APA 제7판, MLA 제9판 등 최신 인용 스타일을 참조하세요. 디지털 자료 인용 시에는 접속 URL과 접속 날짜를 함께 기재하는 것이 일반적입니다. 한국 학술지에서는 각 학회의 인용 규정에 따라 디지털 자료 표기 방식이 다를 수 있으므로, 투고 전 해당 학회의 원고 작성 지침을 반드시 확인하세요.</p>`,
    publishedAt: "2026-09-03T03:00:00+09:00",
    tags: ["도서명표기", "출판규정", "어문규범", "인용"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "law-name-notation-guide",
    slug: "law-name-notation-guide",
    title: "법령 명칭 표기 — 법제처 법령 명칭 작성 기준",
    excerpt: "법제처가 정한 법령 명칭 작성 기준을 정리합니다. 법률·시행령·시행규칙 표기 방법과 법령명 줄임 표기 규정을 안내합니다.",
    content: `<h2>법령 명칭 표기의 중요성</h2>
<p>법령(法令)은 국회가 제정한 법률, 정부가 제정한 대통령령(시행령)·총리령·부령(시행규칙), 지방자치단체가 제정한 조례·규칙 등을 포함합니다. 법령 명칭을 올바르게 표기하는 것은 법적 명확성과 혼란 방지를 위해 중요합니다. 법제처는 법령 입안 심사 기준(법제처 고시)에서 법령 명칭 작성에 관한 구체적인 기준을 제시합니다.</p>

<h2>법령 명칭 작성 원칙 (법제처 기준)</h2>
<p>법제처 법령 입안·심사 기준에 따른 법령 명칭 작성 원칙입니다.</p>
<ol>
  <li><strong>간결성</strong>: 법령의 목적이나 규율 대상을 간결하고 명확하게 표현</li>
  <li><strong>구체성</strong>: 규율 대상을 지나치게 포괄적으로 표현하지 않음</li>
  <li><strong>통일성</strong>: 유사한 내용의 법령과 명칭 체계를 통일</li>
  <li><strong>한글 우선</strong>: 순우리말 또는 쉬운 한국어로 표기</li>
</ol>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>법령 명칭 구조</strong><br>
  일반 법률: 「OO법」 또는 「OO에 관한 법률」<br>
  시행령: 「OO법 시행령」<br>
  시행규칙: 「OO법 시행규칙」<br>
  조례: 「OO시 OO 조례」
</div>

<h2>법령명 표기 부호 사용 기준</h2>
<p>법령명을 문서 내에서 인용할 때는 낫표(「 」)를 사용하는 것이 원칙입니다. 낫표는 법령명, 규정명, 고시명 등을 표기할 때 사용합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">인용 대상</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">표기 부호</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">예시</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">법률</td>
    <td style="border:1px solid #ccc;padding:10px">낫표 「 」</td>
    <td style="border:1px solid #ccc;padding:10px">「국어기본법」</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">시행령</td>
    <td style="border:1px solid #ccc;padding:10px">낫표 「 」</td>
    <td style="border:1px solid #ccc;padding:10px">「국어기본법 시행령」</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">조례</td>
    <td style="border:1px solid #ccc;padding:10px">낫표 「 」</td>
    <td style="border:1px solid #ccc;padding:10px">「서울특별시 한국어 진흥 조례」</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">고시·훈령</td>
    <td style="border:1px solid #ccc;padding:10px">낫표 「 」</td>
    <td style="border:1px solid #ccc;padding:10px">「국립국어원 업무 처리 훈령」</td>
  </tr>
</table>

<h2>법령명 줄임 표기 규정</h2>
<p>법령명이 길 경우 문서 내에서 줄임 표기를 사용할 수 있습니다. 첫 인용 시 전체 명칭과 함께 줄임 명칭을 병기합니다.</p>
<ul>
  <li><strong>전체 명칭 먼저</strong>: 「개인정보 보호법」(이하 '개인정보보호법'이라 한다)</li>
  <li><strong>약칭 일관성</strong>: 같은 문서 안에서 동일한 줄임 명칭 유지</li>
  <li><strong>법제처 통용 약칭</strong>: 법제처 국가법령정보센터(law.go.kr)에서 공식 약칭 확인</li>
</ul>

<h2>법령명 검색과 확인 방법</h2>
<p>법령명을 정확하게 확인하려면 법제처가 운영하는 국가법령정보센터(law.go.kr)를 이용하세요. 현행 모든 법령의 공식 명칭, 조문, 시행일 등을 무료로 검색할 수 있습니다. 보고서나 계약서에서 법령명을 인용할 때는 반드시 국가법령정보센터에서 현행 유효한 법령명을 확인한 후 사용해야 합니다. 법령이 개정·폐지되면 명칭이 바뀔 수 있어 과거 자료를 그대로 사용하면 오류가 생길 수 있습니다.</p>

<h2>법령명 표기 주의사항</h2>
<p>법령 문서나 공문서 작성 시 법령명 표기에서 자주 발생하는 주의사항입니다. 법률과 시행령은 별개의 법령이므로 구분해서 표기해야 합니다. 예를 들어 '국어기본법 시행령'은 '국어기본법'과 다른 법령입니다. 또한 법령 조문을 인용할 때는 조(條), 항(項), 호(號) 등의 번호를 정확하게 표기해야 합니다. 텍스터브(texturb.com)와 같은 글쓰기 도구를 활용하면 문서 내 법령명 표기의 일관성을 점검하는 데 도움이 됩니다.</p>

<h2>법령 조문 인용 방법</h2>
<p>법령의 특정 조문을 인용할 때는 법령명 + 조·항·호 순서로 표기합니다. 예를 들어 '「국어기본법」 제3조 제1항 제2호'처럼 씁니다. 조(條)는 아라비아 숫자로, 항(項)은 ①②③ 또는 아라비아 숫자로 표기합니다. 호(號)는 1. 2. 3. 또는 가. 나. 다. 형식을 씁니다. 법제처 국가법령정보센터에서 해당 법령을 조회하면 현행 조문 번호와 내용을 정확하게 확인할 수 있습니다.</p>

<h2>폐지·개정 법령 표기 방법</h2>
<p>이미 폐지되거나 개정된 법령을 인용할 때는 그 사실을 명시해야 합니다. 예를 들어 '구 「OO법」(2020. 3. 1. 개정 전)'처럼 개정 전 법령임을 표시합니다. 법률 문서나 학술 논문에서 폐지법을 인용할 때는 폐지 시점과 대체 법령을 함께 기재하는 것이 원칙입니다. 법제처 국가법령정보센터에서는 폐지된 법령의 이력과 내용도 조회할 수 있어 정확한 법령명 표기에 유용합니다. 법령명 표기의 정확성은 공문서의 법적 효력과 직결되므로, 중요한 문서 작성 시에는 반드시 최신 법령 상태를 확인하고 표기하세요.</p>`,
    publishedAt: "2026-09-03T08:00:00+09:00",
    tags: ["법령명칭", "법제처", "공문서", "어문규범"],
    category: "글자수 가이드",
    author: "texturb",
  },
];
