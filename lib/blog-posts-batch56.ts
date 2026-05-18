import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH56: BlogPost[] = [
  {
    id: "korean-orthography-spacing-guide",
    slug: "korean-orthography-spacing-guide",
    title: "한글 맞춤법 띄어쓰기 — 국립국어원 어문규범 심화 가이드",
    excerpt: "국립국어원 어문규범에 근거한 한글 띄어쓰기 핵심 원칙을 정리합니다. 자주 틀리는 사례와 올바른 표기법을 함께 안내합니다.",
    content: `<h2>띄어쓰기가 중요한 이유</h2>
<p>한글 맞춤법에서 띄어쓰기는 의미 전달에 직결되는 중요한 요소입니다. '아버지가방에들어가신다'처럼 띄어쓰기 하나로 문장의 의미가 완전히 달라집니다. 국립국어원은 한글 맞춤법 제5장(띄어쓰기)에 걸쳐 상세한 원칙을 규정하고 있으며, 공문서·출판물·디지털 콘텐츠 모두에 적용됩니다.</p>

<h2>국립국어원 한글 맞춤법 띄어쓰기 기본 원칙</h2>
<p>국립국어원이 제정한 한글 맞춤법(문화체육관광부 고시 제2017-12호)의 띄어쓰기 기본 원칙은 다음과 같습니다.</p>
<ol>
  <li><strong>조사는 앞말에 붙여 씀</strong>: 철수가, 학교에서, 집으로</li>
  <li><strong>의존명사는 띄어 씀</strong>: 아는 것이 힘, 먹을 만큼 먹어라</li>
  <li><strong>단위를 나타내는 명사는 띄어 씀</strong>: 한 개, 차 한 대, 소 한 마리</li>
  <li><strong>수를 적을 때는 만(萬) 단위로 띄어 씀</strong>: 십이억 삼천사백오십육만 칠천팔백구십팔</li>
  <li><strong>보조 용언은 원칙적으로 띄어 씀</strong>: 먹어 보다, 읽어 드리다</li>
</ol>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>핵심 원칙 요약</strong><br>
  단어는 띄어 쓰는 것이 원칙. 단, 조사와 어미는 앞·뒤 말에 붙여 씁니다.
</div>

<h2>자주 틀리는 띄어쓰기 사례</h2>
<p>국립국어원 온라인 가나다 Q&A에서 가장 많이 질문되는 띄어쓰기 오류 사례입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">틀린 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">올바른 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">이유</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">할수있다</td>
    <td style="border:1px solid #ccc;padding:10px">할 수 있다</td>
    <td style="border:1px solid #ccc;padding:10px">'수'는 의존명사</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">이것뿐만 아니라</td>
    <td style="border:1px solid #ccc;padding:10px">이것뿐만 아니라</td>
    <td style="border:1px solid #ccc;padding:10px">'뿐'은 조사로 붙임</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">먹는데</td>
    <td style="border:1px solid #ccc;padding:10px">먹는 데 (장소·경우)<br>먹는데 (연결어미)</td>
    <td style="border:1px solid #ccc;padding:10px">의존명사 vs 어미 구별</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">3개월만에</td>
    <td style="border:1px solid #ccc;padding:10px">3개월 만에</td>
    <td style="border:1px solid #ccc;padding:10px">'만'은 의존명사</td>
  </tr>
</table>

<h2>합성어와 파생어의 띄어쓰기</h2>
<p>두 단어가 결합해 만들어진 합성어는 붙여 씁니다. 반면 단어들이 단순히 나란히 놓인 경우는 띄어 씁니다. 이 구분이 까다로운 이유는 어느 조합이 사전에 올라있는 합성어인지 알아야 하기 때문입니다.</p>
<ul>
  <li><strong>합성어 (붙임)</strong>: 손발, 돌다리, 눈물, 논밭</li>
  <li><strong>구(띄어 씀)</strong>: 예쁜 꽃, 넓은 바다, 큰 나무</li>
  <li><strong>판단 어려운 경우</strong>: 국립국어원 표준국어대사전 검색으로 확인</li>
</ul>

<h2>띄어쓰기 허용 범위</h2>
<p>한글 맞춤법은 일부 경우 붙여 쓰기와 띄어 쓰기 모두 허용합니다. 예를 들어 보조 용언의 경우 '먹어 보다'와 '먹어보다' 둘 다 맞습니다. 단, 공문서나 학술 논문에서는 원칙(띄어 쓰기)을 따르는 것이 좋습니다.</p>

<h2>디지털 글쓰기에서 띄어쓰기 점검 방법</h2>
<p>긴 문서의 띄어쓰기를 수작업으로 점검하기는 어렵습니다. 국립국어원이 운영하는 한국어 맞춤법/문법 검사기(국어정보 포털)를 활용하면 자동 점검이 가능합니다. 또한 네이버, 카카오의 맞춤법 검사 서비스도 활용할 수 있습니다. 다만 자동 검사기는 100% 완벽하지 않으므로 결과를 참고 자료로 활용하고 의심스러운 경우 국립국어원 표준국어대사전에서 최종 확인하세요.</p>

<h2>전문 글쓰기에서 띄어쓰기 일관성 유지</h2>
<p>칼럼, 보고서, 논문 등 전문 문서에서 띄어쓰기 일관성을 유지하는 방법은 문서 작성 전 스타일 가이드를 정해두는 것입니다. 맞춤법 허용 범위 내에서 선택한 방식을 일관되게 적용하면 독자에게 신뢰감을 줍니다. 특히 'O O O 하다' 형태의 복합어는 붙임/띄음 판단이 어렵기 때문에 초반에 기준을 정해두는 것이 좋습니다.</p>

<h2>의존명사 vs 어미 구별 심화</h2>
<p>한글 띄어쓰기에서 가장 헷갈리는 부분은 의존명사와 어미의 구별입니다. 같은 형태의 단어가 문장 내 역할에 따라 띄어쓰기가 달라지기 때문입니다. 대표적인 사례를 살펴봅니다.</p>
<ul>
  <li><strong>'데'의 구별</strong>: "먹는 데 시간이 걸린다"(의존명사, 공간·경우) vs "먹는데 배가 안 고프다"(연결어미)</li>
  <li><strong>'지'의 구별</strong>: "집에 간 지 오래되었다"(의존명사, 시간 경과) vs "어디 가지 않겠다"(어미)</li>
  <li><strong>'만큼'의 구별</strong>: "먹을 만큼 먹어라"(의존명사) vs "공부한만큼 성적이 나온다"(조사처럼 붙임)</li>
</ul>
<p>의존명사는 반드시 띄어 씁니다. 판단이 어렵다면 해당 표현 앞에 다른 관형어를 넣어봤을 때 자연스러우면 의존명사입니다. 예를 들어 '먹을 만큼'에서 '먹을'을 '배가 부를' 같은 다른 관형어로 바꿔도 자연스럽다면 '만큼'은 의존명사입니다.</p>

<h2>조사와 어미의 모든 경우 붙여 쓰기</h2>
<p>조사는 예외 없이 앞 단어에 붙여 씁니다. 처음 한국어를 배우는 사람이나 번역 작업을 할 때 조사를 띄어 쓰는 실수가 종종 발생합니다. '나 는 학교 에 간다' 같은 오류는 전산 입력 중에도 나타날 수 있으므로 주의가 필요합니다. 어미도 마찬가지로 용언(동사·형용사)의 어간에 붙여 씁니다. '가-다', '먹-어', '예쁘-지' 모두 하나의 단어로 붙여 씁니다.</p>`,
    publishedAt: "2026-08-31T10:00:00+09:00",
    tags: ["맞춤법", "띄어쓰기", "국립국어원", "한글"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "korean-standard-language-rules-guide",
    slug: "korean-standard-language-rules-guide",
    title: "한글 표준어 규정 — 국립국어원 공식 자료 정리",
    excerpt: "국립국어원이 고시한 표준어 규정의 핵심 내용을 정리합니다. 복수 표준어, 방언과 표준어 구분, 자주 헷갈리는 표준어를 안내합니다.",
    content: `<h2>표준어 규정이란</h2>
<p>표준어는 국가나 공공 기관에서 공식적으로 사용하도록 정한 언어입니다. 한국에서는 국립국어원이 '표준어 규정'(문화체육관광부 고시)을 통해 표준어를 규정합니다. 표준어 규정의 목적은 언어 소통의 혼란을 줄이고, 교육·방송·출판 등에서 통일된 언어 사용을 도모하는 것입니다.</p>

<h2>표준어 사정 원칙</h2>
<p>국립국어원의 표준어 규정 제1부 제1항에는 "표준어는 교양 있는 사람들이 두루 쓰는 현대 서울말로 정함을 원칙으로 한다"고 규정하고 있습니다. 이에 따라 표준어 선정 기준은 다음과 같습니다.</p>
<ol>
  <li><strong>현대어 기준</strong>: 현재 일반적으로 사용되는 어형을 기준으로 함</li>
  <li><strong>서울말 기준</strong>: 지역 방언이 아닌 서울 지역의 어형을 중심으로 함</li>
  <li><strong>교양어 기준</strong>: 교육받은 사람들이 공적 상황에서 사용하는 언어 기준</li>
</ol>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:16px;margin:24px 0;border-radius:4px">
  <strong>주의</strong><br>
  표준어 규정은 정적 기준이 아닙니다. 사회 변화에 따라 국립국어원이 정기적으로 표준어 목록을 업데이트합니다.
</div>

<h2>복수 표준어 제도</h2>
<p>2011년 이후 국립국어원은 오랫동안 실생활에서 널리 쓰이는 비표준어 중 일부를 표준어로 추가 인정하는 '복수 표준어' 제도를 도입했습니다. 두 가지 이상의 표현을 모두 표준어로 인정합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">기존 표준어</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">추가된 복수 표준어</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">간지럽다</td>
    <td style="border:1px solid #ccc;padding:10px">간질간질하다</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">나머지</td>
    <td style="border:1px solid #ccc;padding:10px">남은 것 (문맥에 따라)</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">태껸</td>
    <td style="border:1px solid #ccc;padding:10px">택견</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">짜장면</td>
    <td style="border:1px solid #ccc;padding:10px">자장면 (둘 다 표준어)</td>
  </tr>
</table>

<h2>자주 헷갈리는 표준어 vs 비표준어</h2>
<p>일상생활에서 자주 사용하지만 표준어가 아닌 표현들입니다. 국립국어원 표준국어대사전에서 확인한 내용입니다.</p>
<ul>
  <li><strong>되다 / 됩니다</strong> (O) vs <strong>돼다 / 됍니다</strong> (X)</li>
  <li><strong>웬일</strong> (O) vs <strong>왠일</strong> (X)</li>
  <li><strong>며칠</strong> (O) vs <strong>몇일</strong> (X)</li>
  <li><strong>어떡해</strong> (O, 어떻게 해) vs <strong>어떻해</strong> (X)</li>
  <li><strong>않</strong> (안 하다) vs <strong>안</strong> (안 되다) — 용법 구분 필요</li>
</ul>

<h2>방언과 표준어의 관계</h2>
<p>방언(사투리)은 특정 지역에서 쓰이는 언어 변이형으로, 표준어와 공존합니다. 방언이 비표준어라고 해서 틀린 표현이 아닙니다. 다만 공식 문서, 방송, 교육 현장에서는 표준어 사용이 원칙입니다. 한국어 표준어 규정은 방언 자체를 억압하는 것이 아니라, 공적 소통을 위한 기준 언어를 정하는 목적임을 이해하는 것이 중요합니다.</p>

<h2>표준어 확인 방법</h2>
<p>특정 표현이 표준어인지 확인하는 가장 정확한 방법은 국립국어원 표준국어대사전(stdict.korean.go.kr)을 직접 검색하는 것입니다. 또한 국립국어원 '온라인 가나다' 서비스에서 전문가에게 직접 질문할 수도 있습니다. 글쓰기 도구를 사용할 때도 맞춤법 검사 기능은 표준어 여부를 기준으로 작동하므로, 검사 결과를 참고하되 최종 판단은 직접 확인하는 것이 좋습니다.</p>

<h2>글쓰기에서 표준어 사용의 중요성</h2>
<p>공문서, 보고서, 논문, 언론 기고 등 공식 문서에서 비표준어를 사용하면 신뢰성이 낮아질 수 있습니다. 특히 자기소개서나 입사 지원서처럼 첫인상이 중요한 글에서는 표준어와 맞춤법을 엄격히 지키는 것이 필요합니다. 반면 소설, 수필, 블로그 같은 문학적·개인적 글에서는 방언이나 구어체 표현도 적절히 활용할 수 있습니다.</p>

<h2>자주 잘못 쓰는 단어 표현 정리</h2>
<p>표준어 규정에서 비표준어로 분류된 일상 표현이 있습니다. 이런 단어들은 워낙 많이 쓰여서 표준어처럼 느껴지지만, 공식 문서에서는 올바른 표기를 사용해야 합니다.</p>
<ul>
  <li><strong>두리뭉실</strong> (X) → <strong>두루뭉술</strong> (O)</li>
  <li><strong>끄나풀</strong> (O) — 이미 표준어로 인정됨</li>
  <li><strong>먹거리</strong> (O) — 복수 표준어 인정</li>
  <li><strong>어리숙하다</strong> (O) vs <strong>어리숙하다</strong> — 표준국어대사전 확인 필요</li>
  <li><strong>피다</strong> vs <strong>피우다</strong> — 자동사/타동사 구별</li>
</ul>

<h2>표준어 규정과 디지털 커뮤니케이션</h2>
<p>SNS, 메신저, 이메일 등 디지털 커뮤니케이션에서는 표준어 규정이 느슨하게 적용되는 경향이 있습니다. 하지만 이 공간에서도 비표준어와 신조어를 무분별하게 사용하면 오해를 불러일으킬 수 있습니다. 업무용 이메일이나 공식 SNS 채널에서는 표준어 사용을 기본으로 하고, 구어체는 적절한 수준에서만 활용하는 것이 전문적인 인상을 줍니다.</p>`,
    publishedAt: "2026-08-31T15:00:00+09:00",
    tags: ["표준어", "맞춤법", "국립국어원", "한글"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "foreign-word-korean-notation-guide",
    slug: "foreign-word-korean-notation-guide",
    title: "외래어 표기법 — 국립국어원 외국어 한글 표기 기준",
    excerpt: "국립국어원이 고시한 외래어 표기법의 기본 원칙과 언어별 주요 규정을 정리합니다. 자주 틀리는 외래어 표기 사례도 안내합니다.",
    content: `<h2>외래어 표기법이란</h2>
<p>외래어 표기법은 외국어를 한글로 표기하는 방법에 관한 규정입니다. 국립국어원은 문화체육관광부 고시로 '외래어 표기법'을 제정·운영하고 있습니다. 이 규정은 영어, 독일어, 프랑스어, 일본어, 중국어 등 주요 언어를 포함한 다양한 언어의 한글 표기 기준을 다룹니다.</p>

<h2>외래어 표기법 기본 원칙</h2>
<p>외래어 표기법 제1장에는 표기의 기본 원칙이 제시되어 있습니다.</p>
<ol>
  <li><strong>외래어는 국어의 현용 24자모만으로 적는다</strong>: 특수 기호나 새로운 자모는 사용하지 않습니다.</li>
  <li><strong>외래어의 1음운은 원칙적으로 1기호로 적는다</strong>: 하나의 외국어 소리는 하나의 한글 기호에 대응합니다.</li>
  <li><strong>받침에는 'ㄱ, ㄴ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ'만을 쓴다</strong></li>
  <li><strong>파열음 표기에는 된소리를 쓰지 않는 것을 원칙으로 한다</strong></li>
  <li><strong>이미 굳어진 외래어는 관용을 존중하되, 그 범위와 용례는 따로 정한다</strong></li>
</ol>

<div style="background:#e8f8e8;border-left:4px solid #28a745;padding:16px;margin:24px 0;border-radius:4px">
  <strong>중요한 원칙: 된소리 금지</strong><br>
  영어 'bus'를 '버스'(O)로 표기하는 이유가 바로 파열음 된소리 금지 원칙 때문입니다. '뻐쓰'는 잘못된 표기입니다.
</div>

<h2>자주 틀리는 영어 외래어 표기</h2>
<p>일상에서 자주 쓰이지만 표기 오류가 많은 영어 외래어입니다. 국립국어원 외래어 표기 용례집을 기준으로 정리했습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">잘못된 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">올바른 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">원어</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">까페</td>
    <td style="border:1px solid #ccc;padding:10px">카페</td>
    <td style="border:1px solid #ccc;padding:10px">café (프랑스어)</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">쥬스</td>
    <td style="border:1px solid #ccc;padding:10px">주스</td>
    <td style="border:1px solid #ccc;padding:10px">juice (영어)</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">후라이드</td>
    <td style="border:1px solid #ccc;padding:10px">프라이드</td>
    <td style="border:1px solid #ccc;padding:10px">fried (영어)</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">이메일, 이-메일</td>
    <td style="border:1px solid #ccc;padding:10px">이메일</td>
    <td style="border:1px solid #ccc;padding:10px">e-mail (영어)</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">컨텐츠</td>
    <td style="border:1px solid #ccc;padding:10px">콘텐츠</td>
    <td style="border:1px solid #ccc;padding:10px">contents (영어)</td>
  </tr>
</table>

<h2>언어별 외래어 표기 특징</h2>
<p>주요 외국어의 한글 표기에는 언어별 특수 규정이 있습니다.</p>
<ul>
  <li><strong>영어</strong>: 어말 무성파열음 'p, t, k'는 받침 표기 (예: book → 북)</li>
  <li><strong>일본어</strong>: 장모음은 표기하지 않는 것이 원칙 (예: とうきょう → 도쿄)</li>
  <li><strong>중국어</strong>: 한어병음 기준으로 표기 (예: 北京 → 베이징)</li>
  <li><strong>프랑스어</strong>: 무성자음 앞 'e'는 [으]로 표기 (예: chalet → 샬레)</li>
</ul>

<h2>외래어 표기법 확인 방법</h2>
<p>외래어 표기가 불확실하다면 국립국어원 외래어 표기법 정보(korean.go.kr)에서 용례를 검색하거나 '온라인 가나다' 서비스에 문의하세요. 방대한 외래어 표기 용례집도 국립국어원 홈페이지에서 내려받을 수 있습니다. 번역·교열 작업을 자주 한다면 외래어 표기 용례집을 가까이 두고 참고하는 것이 좋습니다.</p>

<h2>외래어 vs 외국어의 구별</h2>
<p>외래어와 외국어는 다른 개념입니다. 외래어는 외국에서 들어와 국어로 정착된 단어(예: 버스, 택시, 컴퓨터)이고, 외국어는 아직 국어로 흡수되지 않은 외국 언어 표현입니다. 외래어는 한글 맞춤법과 외래어 표기법에 따라 표기하고, 외국어 원어 표기가 필요한 경우 별도 병기합니다. 예를 들어 '스마트폰(smartphone)'처럼 괄호 안에 원어를 쓰는 방식이 일반적입니다.</p>

<h2>신조어·최신 외래어의 표기 문제</h2>
<p>사회 변화에 따라 새로운 외래어가 빠르게 유입됩니다. 특히 IT, 패션, 음식 분야에서 영어 신조어가 많이 들어오는데, 이들의 표준 표기는 국립국어원이 확정 고시하기 전까지 혼용 시기가 있습니다. 이 과도기에는 이미 국립국어원이 공표한 표기가 있는지 먼저 검색하고, 없다면 외래어 표기법 원칙에 따라 자체적으로 표기하는 것이 합리적입니다. '인플루언서', '콘텐츠 크리에이터', '유튜버' 등은 이미 표준 표기가 정해진 외래어입니다.</p>

<h2>외래어 과다 사용 주의</h2>
<p>공문서나 공식 자료에서 외래어를 지나치게 사용하면 가독성이 낮아집니다. 국립국어원은 공공언어 개선 차원에서 불필요한 외래어·외국어 남용을 자제하고 쉬운 우리말로 대체할 것을 권고합니다. 예를 들어 '컨퍼런스' → '학술대회', '미팅' → '회의', '오피스' → '사무실' 등 우리말 표현이 있는 경우 우선 사용하는 것이 좋습니다. 외래어 표기법을 글쓰기에 바르게 적용하고 있는지 확인하려면 텍스터브(texturb.com)의 맞춤법 도구를 활용하면 편리합니다.</p>`,
    publishedAt: "2026-08-31T20:00:00+09:00",
    tags: ["외래어표기법", "맞춤법", "국립국어원", "한글"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "romanization-korean-english-notation-guide",
    slug: "romanization-korean-english-notation-guide",
    title: "로마자 표기법 — 국립국어원 한국어 영문 표기 규정",
    excerpt: "국립국어원이 고시한 한국어 로마자 표기법의 기본 원칙과 실용 표기 방법을 정리합니다. 인명·지명 표기 규칙도 포함합니다.",
    content: `<h2>로마자 표기법이란</h2>
<p>로마자 표기법은 한국어를 로마자(알파벳)로 표기하는 방법에 관한 규정입니다. 한국 정부는 2000년에 기존 매큔-라이샤워(McCune-Reischauer) 표기법을 개정해 '국어의 로마자 표기법'(문화관광부 고시 제2000-8호)을 제정했습니다. 이 표기법은 현재 공문서, 여권, 도로 표지판, 지도 등 공식 자료에 적용됩니다.</p>

<h2>로마자 표기법 기본 원칙</h2>
<p>국립국어원 로마자 표기법의 핵심 원칙은 다음과 같습니다.</p>
<ol>
  <li><strong>국어의 표준 발음에 따라 적는 것을 원칙으로 한다</strong></li>
  <li><strong>로마자 이외의 부호는 되도록 사용하지 않는다</strong></li>
</ol>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>발음 기반 표기가 원칙</strong><br>
  '같이'를 [가치]로 발음하므로 'gachi'로 표기합니다. 철자 기반 표기(gat-i)가 아닙니다.
</div>

<h2>모음과 자음의 로마자 표기 대조표</h2>
<p>국립국어원 로마자 표기법에서 정한 한글-로마자 대응표입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:center">한글</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">로마자</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">한글</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">로마자</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㄱ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">g / k</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㅏ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">a</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㄷ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">d / t</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㅓ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">eo</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㅂ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">b / p</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㅡ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">eu</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㄹ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">r / l</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">ㅣ</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">i</td>
  </tr>
</table>

<h2>인명 로마자 표기 규정</h2>
<p>인명(人名)은 성과 이름의 첫 글자를 대문자로 적으며, 성과 이름 사이에 띄어 씁니다. 이름 내에서는 붙여 쓰는 것을 원칙으로 하되, 음절 사이에 붙임표(-)를 쓰는 것을 허용합니다.</p>
<ul>
  <li><strong>원칙</strong>: 홍길동 → Hong Gildong</li>
  <li><strong>허용</strong>: 홍길동 → Hong Gil-dong</li>
  <li>여권에는 이름을 붙여 쓰는 것이 원칙 (Hong Gildong)</li>
</ul>

<h2>지명 로마자 표기 규정</h2>
<p>행정 구역 단위(도·시·군·구·읍·면·리·동)는 일반적으로 로마자로 표기하되, 붙임표 없이 씁니다. 자연 지명(산, 강, 섬 등)도 같은 방식으로 표기합니다.</p>
<ul>
  <li>서울특별시 → Seoul</li>
  <li>경기도 → Gyeonggi-do</li>
  <li>부산광역시 → Busan</li>
  <li>한강 → Hangang</li>
  <li>설악산 → Seoraksan</li>
</ul>

<h2>로마자 표기 자동 변환 활용</h2>
<p>로마자 표기법을 일일이 암기하기 어렵다면 국립국어원 로마자 변환기(korean.go.kr/front/roman/romanList.do)를 활용하세요. 한국어 텍스트를 입력하면 공식 로마자 표기로 자동 변환해줍니다. 여권 발급 신청이나 해외 문서 작성 시 특히 유용합니다.</p>

<h2>로마자 표기법 주요 연음 변환 규칙</h2>
<p>한국어 발음은 앞뒤 음절의 영향을 받아 변하는 경우가 많습니다. 로마자 표기는 이런 연음 현상을 발음대로 표기합니다.</p>
<ul>
  <li><strong>종로 → Jongno</strong>: ㄱ+ㄴ → ㅇ+ㄴ 발음 변화 반영</li>
  <li><strong>설날 → Seollal</strong>: ㄹ+ㄴ → ㄹ+ㄹ 발음 변화 반영</li>
  <li><strong>독립 → Dongnip</strong>: ㄱ+ㄹ → ㅇ+ㄴ 발음 변화 반영</li>
  <li><strong>백마 → Baengma</strong>: ㄱ+ㅁ → ㅇ+ㅁ 발음 변화 반영</li>
</ul>
<p>이러한 음운 변화를 직접 판단하기 어렵다면 국립국어원 로마자 변환기를 사용하는 것이 가장 정확합니다.</p>

<h2>여권 로마자 표기 특별 규정</h2>
<p>여권 발급 시 사용되는 이름의 로마자 표기는 외교부 지침에 따라 일부 규정이 다를 수 있습니다. 특히 이미 이전 여권에서 사용한 표기를 유지하거나, 해외에서 오랫동안 특정 표기를 사용해 온 경우 예외 신청이 가능합니다. 예를 들어 'Lee'를 관용적으로 사용해온 경우 규정상 표기인 'Yi'나 'I' 대신 'Lee'로 유지할 수 있습니다. 여권 로마자 표기 변경은 외교부 여권안내 공식 홈페이지에서 절차를 확인하세요.</p>

<h2>영문 명함·이력서에서 로마자 표기 활용</h2>
<p>영문 명함이나 영문 이력서를 작성할 때도 국립국어원 로마자 표기법을 기준으로 이름을 표기하는 것이 원칙입니다. 단, 외국 기업 지원이나 해외 거주자의 경우 기존에 사용해온 이름 표기 방식을 일관성 있게 유지하는 것이 혼선을 줄이는 데 도움이 됩니다. 이름 표기를 통일하지 않으면 해외 배경 조회나 서류 심사 과정에서 동일인임을 확인하기 어려울 수 있으니 주의하세요. 로마자 표기가 필요한 문서를 작성할 때 국립국어원 로마자 변환기와 텍스터브(texturb.com)의 텍스트 편집 도구를 함께 활용하면 효율적입니다.</p>`,
    publishedAt: "2026-09-01T01:00:00+09:00",
    tags: ["로마자표기법", "한국어영어표기", "국립국어원", "한글"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "hanja-korean-character-notation-guide",
    slug: "hanja-korean-character-notation-guide",
    title: "한자 음·훈 표기 — 한국어문회 한자 사용 기준",
    excerpt: "한국어문회가 정한 한자의 음과 훈 표기 기준을 정리합니다. 공문서·학습·글쓰기에서 한자 사용의 표준 원칙을 안내합니다.",
    content: `<h2>한자 음과 훈이란</h2>
<p>한자(漢字)의 음(音)은 그 한자를 읽는 소리이고, 훈(訓)은 그 한자의 뜻입니다. 예를 들어 '山'의 음은 '산'이고 훈은 '메(산)'입니다. 한국에서는 한자 교육과 사전 편찬 시 음과 훈을 함께 표기하는 것이 전통입니다. 한국어문회(Korean Language and Literature Society)는 한자 교육을 체계화하기 위해 급수별 배정 한자 목록과 음·훈 표기 기준을 제정하고 있습니다.</p>

<h2>한국어문회 한자 급수 제도</h2>
<p>한국어문회는 한자능력검정시험을 운영하며 8급부터 1급·사범·특급까지의 급수를 두고 있습니다. 각 급수별로 배정된 한자 수와 표준 음·훈이 정해져 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:center">급수</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">누계 한자 수</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">수준</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">8급</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">50자</td>
    <td style="border:1px solid #ccc;padding:10px">초등 기초</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px;text-align:center">6급</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">300자</td>
    <td style="border:1px solid #ccc;padding:10px">초등 심화</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">4급</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1,000자</td>
    <td style="border:1px solid #ccc;padding:10px">중학 수준</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px;text-align:center">2급</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">2,355자</td>
    <td style="border:1px solid #ccc;padding:10px">고등 수준 (교육용 한자 기준)</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1급</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">3,500자</td>
    <td style="border:1px solid #ccc;padding:10px">대학·전문</td>
  </tr>
</table>

<h2>교육용 한자 1,800자 기준</h2>
<p>교육부는 중고등학교 한문 교육을 위해 '교육용 기초 한자 1,800자'를 지정하고 있습니다. 중학교 900자, 고등학교 900자로 나뉘며, 이 1,800자의 음과 훈은 교과서와 시험에서 표준으로 사용됩니다. 한국어문회의 급수 기준도 이 교육부 지정 기초 한자를 기반으로 합니다.</p>

<h2>한자 음·훈 표기의 실례</h2>
<p>한자 학습 교재와 사전에서 표준으로 사용되는 음·훈 표기 방식입니다.</p>
<ul>
  <li><strong>山 (산 산)</strong>: 음=산, 훈=메(산)</li>
  <li><strong>水 (수 수)</strong>: 음=수, 훈=물</li>
  <li><strong>火 (화 화)</strong>: 음=화, 훈=불</li>
  <li><strong>木 (목 목)</strong>: 음=목, 훈=나무</li>
  <li><strong>學 (학 학)</strong>: 음=학, 훈=배울</li>
</ul>

<h2>공문서에서의 한자 병기 규정</h2>
<p>행정안전부 공문서 작성 규정에 따르면, 공문서는 원칙적으로 한글로 작성합니다. 다만 뜻을 정확히 전달하기 위해 필요한 경우 괄호 안에 한자를 병기할 수 있습니다. 예를 들어 '道路(도로)' 또는 '도로(道路)' 형식으로 표기합니다. 인명이나 지명 등 고유명사에서 한자 병기가 자주 사용됩니다.</p>

<h2>한자 입력 방법</h2>
<p>현대 디지털 환경에서 한자를 입력하려면 한글을 입력한 후 한자 변환 키(한/영 전환 옆 한자 키)를 눌러 변환하는 방법이 일반적입니다. 또는 운영체제의 입력기(IME)에서 한자 입력 모드를 활성화할 수 있습니다. 한국어 워드프로세서(한글, 아래아한글 등)는 한자 사전 기능을 내장하고 있어 음에 해당하는 한자 목록을 보여줍니다.</p>

<h2>한자 사용이 유용한 글쓰기 상황</h2>
<p>현대 한국어 글쓰기에서 한자를 병기하면 유용한 경우가 있습니다. 첫째, 동음이의어가 많은 법률·의학·학술 문서에서 의미를 명확히 할 때. 둘째, 이름(人名)의 뜻을 설명하거나 강조할 때. 셋째, 전통문화·역사 관련 콘텐츠에서 원어(한자) 표기를 병기할 때입니다. 단, 일반 독자를 대상으로 하는 블로그나 SNS 글에서는 한자 병기가 오히려 가독성을 낮출 수 있으므로 독자 수준을 고려해 활용하세요.</p>

<h2>한자 급수 시험 응시 전 준비 사항</h2>
<p>한국어문회 한자능력검정시험을 준비할 때 가장 중요한 것은 각 급수 배정 한자의 음과 훈을 정확히 외우는 것입니다. 단순 암기보다는 한자의 부수(部首)와 뜻을 함께 이해하는 방식이 장기 기억에 효과적입니다. 예를 들어 '삼수변(氵)'이 들어간 한자는 물(水)과 관련된 뜻임을 알면 江(강), 海(바다), 洗(씻을), 泳(헤엄칠) 등을 쉽게 연결해 기억할 수 있습니다. 한국어문회 공식 홈페이지(hanja.re.kr)에서 급수별 배정 한자 목록을 무료로 내려받을 수 있습니다.</p>

<h2>한자 어휘력과 국어 실력의 관계</h2>
<p>현대 국어 어휘의 상당 부분이 한자어로 이루어져 있습니다. 교육부 국어 교육 자료에 따르면 고등학교 수준 국어 어휘의 약 60% 이상이 한자어 기반입니다. 따라서 한자 기초 지식은 어휘력 향상과 독해력 강화에 직접적으로 도움을 줍니다. 특히 법률, 의학, 행정, 학술 분야 문서에는 한자어 전문 용어가 집중되어 있으므로, 해당 분야 종사자나 공무원 시험 준비생에게 한자 학습이 더욱 중요합니다.</p>`,
    publishedAt: "2026-09-01T06:00:00+09:00",
    tags: ["한자", "한국어문회", "음훈", "맞춤법"],
    category: "글자수 가이드",
    author: "texturb",
  },
];
