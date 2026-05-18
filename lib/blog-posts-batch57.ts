import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH57: BlogPost[] = [
  {
    id: "korean-numeral-notation-guide",
    slug: "korean-numeral-notation-guide",
    title: "수사·서수 표기법 — 국립국어원 숫자 표기 규정",
    excerpt: "한국어 수사와 서수의 올바른 표기법을 국립국어원 어문규범에 따라 정리합니다. 아라비아 숫자와 한글 수사의 혼용 기준도 안내합니다.",
    content: `<h2>수사와 서수란 무엇인가</h2>
<p>수사(數詞)는 수량이나 순서를 나타내는 품사입니다. 한국어에서 수사는 양수사(量數詞, 수량을 나타냄)와 서수사(序數詞, 순서를 나타냄)로 구분됩니다. 예를 들어 '하나, 둘, 셋'은 양수사이고, '첫째, 둘째, 셋째'는 서수사입니다. 국립국어원 한글 맞춤법은 수사 표기에 관한 별도 규정을 두고 있으며, 아라비아 숫자와 한글 수사를 언제 사용할지에 대한 기준도 정하고 있습니다.</p>

<h2>아라비아 숫자와 한글 수사 사용 기준</h2>
<p>한글 맞춤법에서는 수를 적을 때 아라비아 숫자와 한글 둘 다 사용할 수 있으나, 상황에 따라 구분 기준이 있습니다.</p>
<ul>
  <li><strong>공문서</strong>: 아라비아 숫자 사용을 원칙으로 함 (행정안전부 공문서 작성 지침)</li>
  <li><strong>법률 문서</strong>: 금액 등 중요 수치는 한글 병기 권고 (예: 금 오십만 원(500,000원))</li>
  <li><strong>일반 글</strong>: 아라비아 숫자 또는 한글 수사 모두 허용</li>
  <li><strong>만(萬) 단위 띄어쓰기</strong>: 큰 수는 만 단위로 띄어 씀 (삼억 오천만, 3억 5천만)</li>
</ul>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>만 단위 띄어쓰기 원칙</strong><br>
  숫자를 한글로 표기할 때는 만(萬) 단위로 띄어 씁니다.<br>
  올바른 예: 십이억 삼천사백오십육만 칠천팔백구십팔<br>
  아라비아 숫자: 12억 3,456만 7,898
</div>

<h2>한국어 고유 수사 체계</h2>
<p>한국어에는 두 가지 수사 체계가 있습니다. 하나는 순우리말(고유어) 수사이고, 다른 하나는 한자어 수사입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:center">숫자</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">고유어 수사</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">한자어 수사</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">서수(고유어)</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">하나</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">일(一)</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">첫째</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px;text-align:center">2</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">둘</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">이(二)</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">둘째</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">3</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">셋</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">삼(三)</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">셋째</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px;text-align:center">10</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">열</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">십(十)</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">열째</td>
  </tr>
</table>

<h2>고유어 수사와 한자어 수사 사용 구분</h2>
<p>두 수사 체계는 함께 사용하는 명사(조수사)에 따라 구분됩니다.</p>
<ul>
  <li><strong>고유어 수사 사용</strong>: 한 마리, 두 개, 세 사람, 네 번 (고유어 조수사와 결합)</li>
  <li><strong>한자어 수사 사용</strong>: 일 킬로그램, 이 미터, 삼 개월, 사 주일 (한자어/외래어 단위와 결합)</li>
  <li><strong>혼용 가능</strong>: 교실에 학생이 스물다섯 명 있다 / 학생 25명</li>
</ul>

<h2>서수 표기의 실용 사례</h2>
<p>한국어 서수는 여러 방식으로 표현할 수 있습니다. 공식 문서에서는 일관성 있게 사용하는 것이 중요합니다.</p>
<ul>
  <li><strong>고유어 서수사</strong>: 첫째, 둘째, 셋째, 넷째...</li>
  <li><strong>한자어 서수 표현</strong>: 제1항, 제2조, 제3장 (규정·법률 문서)</li>
  <li><strong>아라비아 숫자 + 번</strong>: 1번, 2번, 3번 (순서 표현)</li>
  <li><strong>아라비아 숫자 + 째</strong>: 1째(첫째), 2째(둘째) — 공식 글에서는 한글 서수 선호</li>
</ul>

<h2>날짜와 시간 표기 규정</h2>
<p>날짜와 시간은 공문서에서 아라비아 숫자를 사용하고 온점(.)으로 구분합니다. 예를 들어 '2026. 9. 1.' 형식이 표준입니다. 시간은 '오전 9시 30분' 또는 '09:30'으로 표기합니다. 연도를 한글로 표기할 때는 '이천이십육년' 또는 '2026년'으로 쓰며, 두 표기 모두 허용됩니다.</p>

<h2>수치 글쓰기 실전 팁</h2>
<p>보고서, 기사, 논문에서 수치를 글로 표현할 때는 일관성이 중요합니다. 같은 문서 내에서 아라비아 숫자와 한글 수사를 혼용하면 독자에게 혼란을 줄 수 있습니다. 일반적으로 1~9까지는 한글 수사로, 10 이상은 아라비아 숫자로 표기하는 방식이 영어권 글쓰기에서 통용되지만, 한국어에서는 매체별 스타일 가이드를 따르는 것이 우선입니다.</p>

<h2>대용량 수치 표기 방법</h2>
<p>한국어에서 큰 수를 표기할 때는 만(萬), 억(億), 조(兆) 단위를 기준으로 구분합니다. 아라비아 숫자를 사용할 때도 이 단위를 따르면 가독성이 높아집니다. 예를 들어 '12,345,678원'보다 '1,234만 5,678원'이 더 읽기 쉽습니다. 공문서에서는 금액을 표기할 때 '금 일백이십삼만 사천오백육십칠 원정(金 1,234,567원整)'처럼 한글과 아라비아 숫자를 병기하는 방식을 사용하기도 합니다.</p>

<h2>분수와 소수 표기 방법</h2>
<p>분수는 '2분의 1', '3분의 2'처럼 표기하거나 아라비아 숫자로 1/2, 2/3처럼 씁니다. 소수점은 온점(.)을 사용하며, '0.5'를 한글로 표기하면 '영 점 오'입니다. 백분율은 '%' 기호나 '퍼센트', '퍼센트포인트(pp)'로 표기합니다. 공문서와 보도자료에서 소수점 이하 자릿수를 일관되게 표기하는 것이 전문성을 높이는 방법입니다.</p>`,
    publishedAt: "2026-09-01T11:00:00+09:00",
    tags: ["수사", "서수", "숫자표기", "국립국어원", "맞춤법"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "unit-noun-spacing-korean-guide",
    slug: "unit-noun-spacing-korean-guide",
    title: "단위 명사 띄어쓰기 — 어문규범 단위 표기 기준",
    excerpt: "한국어 단위 명사의 올바른 띄어쓰기 기준을 국립국어원 어문규범에 따라 정리합니다. 길이·무게·시간·화폐 단위 표기 사례를 포함합니다.",
    content: `<h2>단위 명사란 무엇인가</h2>
<p>단위 명사는 수량을 나타내는 명사로, 수사 또는 수 관형사와 함께 쓰여 단위를 나타냅니다. 한글 맞춤법 제43항에 따르면 단위를 나타내는 명사는 띄어 씁니다. '한 개', '두 마리', '세 그루'처럼 수사 뒤에서 단위를 나타내는 경우 모두 띄어 써야 합니다.</p>

<h2>단위 명사 띄어쓰기 원칙 (한글 맞춤법 제43항)</h2>
<p>국립국어원이 정한 단위 명사 띄어쓰기의 핵심 원칙입니다.</p>
<ul>
  <li><strong>수량 단위 명사는 반드시 띄어 씀</strong>: 한 개 (O) / 한개 (X)</li>
  <li><strong>아라비아 숫자 + 단위 명사</strong>: 3개, 10미터, 500원 — 붙여 써도 허용</li>
  <li><strong>한글 수사 + 단위 명사</strong>: 세 개, 열 미터, 오백 원 — 반드시 띄어 씀</li>
</ul>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:16px;margin:24px 0;border-radius:4px">
  <strong>아라비아 숫자의 특별 허용</strong><br>
  아라비아 숫자 뒤에 오는 단위 명사는 붙여 쓰는 것이 허용됩니다.<br>
  예: 3개, 10kg, 2시간, 500원 — 모두 허용<br>
  단, 한글 수사일 때는 반드시 띄어 씁니다: 세 개, 열 킬로그램, 두 시간
</div>

<h2>분야별 단위 명사 표기 사례</h2>
<p>일상생활과 공문서에서 자주 사용하는 단위 명사의 올바른 표기 사례입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">분야</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">단위 명사</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">올바른 표기 예</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">길이</td>
    <td style="border:1px solid #ccc;padding:10px">미터, 킬로미터, 센티미터</td>
    <td style="border:1px solid #ccc;padding:10px">두 미터, 10km, 삼십 센티미터</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">무게</td>
    <td style="border:1px solid #ccc;padding:10px">킬로그램, 그램, 톤</td>
    <td style="border:1px solid #ccc;padding:10px">다섯 킬로그램, 500g, 열 톤</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">시간</td>
    <td style="border:1px solid #ccc;padding:10px">시간, 분, 초</td>
    <td style="border:1px solid #ccc;padding:10px">두 시간, 30분, 열다섯 초</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">화폐</td>
    <td style="border:1px solid #ccc;padding:10px">원, 달러, 엔</td>
    <td style="border:1px solid #ccc;padding:10px">오만 원, 100달러, 천 엔</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">개수</td>
    <td style="border:1px solid #ccc;padding:10px">개, 마리, 그루, 채, 권</td>
    <td style="border:1px solid #ccc;padding:10px">세 개, 한 마리, 열 그루</td>
  </tr>
</table>

<h2>순서를 나타내는 경우 붙여 쓰기 허용</h2>
<p>단위 명사 중 순서를 나타내는 경우에는 붙여 쓰는 것이 허용됩니다. 예를 들어 층수를 나타낼 때 '5층'처럼 붙여 쓸 수 있으며, '일 층'처럼 띄어 쓸 수도 있습니다. 규정상 '수를 나타내는 명사로 쓰일 때는 띄어 쓰지만, 항목의 차례나 위치를 나타낼 때는 붙여 쓰는 것을 허용'합니다.</p>
<ul>
  <li>수량 표현: 열 개, 다섯 권 (띄어 씀)</li>
  <li>순서·차례 표현: 1층, 5번, 2호 (붙여 써도 허용)</li>
</ul>

<h2>전문 분야 단위 명사 표기</h2>
<p>의학, 공학, 법률 등 전문 분야에서는 국제 단위계(SI)에 따른 단위 기호를 주로 사용합니다. 이 경우 숫자와 단위 기호 사이에 공백을 두는 것이 국제 표준(ISO 80000)이지만, 한국어 표기에서는 붙여 쓰는 것도 허용됩니다. 공식 문서를 작성할 때 해당 기관의 스타일 가이드를 먼저 확인하는 것이 좋습니다.</p>

<h2>단위 명사 표기 글쓰기 체크리스트</h2>
<ul>
  <li>한글 수사 + 단위 명사는 반드시 띄어 쓰고 있는가?</li>
  <li>아라비아 숫자 + 단위 기호는 일관되게 표기하고 있는가?</li>
  <li>금액을 표기할 때 한글과 아라비아 숫자 병기 여부를 확인했는가?</li>
  <li>문서 내에서 단위 명사 표기 방식이 일관성을 유지하고 있는가?</li>
</ul>

<h2>잘못 쓰기 쉬운 단위 명사 사례</h2>
<p>일상에서 자주 사용하지만 잘못 표기하는 단위 명사 사례를 정리합니다. 특히 받침이 있는 수사 뒤에서 연음이 일어나 발음이 변할 때 표기에 혼동이 생기기 쉽습니다.</p>
<ul>
  <li><strong>세 개</strong> (O) vs <strong>세개</strong> (X): 고유어 수사 + 단위 명사는 반드시 띄어 씀</li>
  <li><strong>한 마리</strong> (O) vs <strong>한마리</strong> (X): 단위 명사 '마리'는 독립 단어</li>
  <li><strong>두 켤레</strong> (O) vs <strong>두켤레</strong> (X): '켤레'는 신발·양말의 단위 명사</li>
  <li><strong>열 권</strong> (O) vs <strong>열권</strong> (X): 책의 단위 명사 '권'은 띄어 씀</li>
</ul>

<h2>단위 명사와 의존명사의 차이</h2>
<p>단위 명사와 의존명사는 모두 수사나 관형어 뒤에서 쓰이지만 역할이 다릅니다. 단위 명사는 수량을 나타내는 구체적 단위이고, 의존명사는 추상적 의미를 갖습니다. 예를 들어 '세 개'에서 '개'는 단위 명사이고, '할 수 있다'에서 '수'는 의존명사입니다. 둘 다 앞말과 띄어 쓴다는 공통점이 있으며, 모두 한글 맞춤법 제42~43항에 근거한 규정입니다. 단위 명사 표기가 헷갈릴 때는 텍스터브(texturb.com)를 활용해 글자수와 맞춤법을 함께 점검하면 편리합니다.</p>`,
    publishedAt: "2026-09-01T16:00:00+09:00",
    tags: ["단위명사", "띄어쓰기", "어문규범", "국립국어원"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "dependent-noun-spacing-korean-guide",
    slug: "dependent-noun-spacing-korean-guide",
    title: "의존명사 띄어쓰기 — 어문규범 헷갈리는 사례 정리",
    excerpt: "한국어 의존명사의 올바른 띄어쓰기를 국립국어원 어문규범으로 정리합니다. '것, 수, 줄, 만큼, 데, 지' 등 자주 헷갈리는 사례를 상세히 안내합니다.",
    content: `<h2>의존명사란 무엇인가</h2>
<p>의존명사는 홀로 쓰이지 못하고 관형어(관형사 또는 관형절) 뒤에서만 쓰이는 명사입니다. 한글 맞춤법 제42항에 따르면 의존명사는 반드시 앞말과 띄어 씁니다. '먹을 것', '알 수 있다', '갈 데가 없다'처럼 의존명사 앞에는 항상 관형어가 옵니다. 의존명사는 형태가 어미나 조사와 같아 혼동하기 쉬운 것들이 많아 주의가 필요합니다.</p>

<h2>핵심 의존명사 띄어쓰기 규정</h2>
<p>국립국어원이 자주 질문받는 대표 의존명사의 표기 원칙입니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>의존명사는 반드시 띄어 씁니다</strong><br>
  • 먹을 것이 없다 (것 = 의존명사, 띄어 씀)<br>
  • 할 수 있다 (수 = 의존명사, 띄어 씀)<br>
  • 세 번 만큼 해봤다 (만큼 = 의존명사, 띄어 씀)
</div>

<h2>의존명사 vs 어미/조사 구별 사례</h2>
<p>같은 형태가 의존명사로 쓰일 때와 어미나 조사로 쓰일 때 띄어쓰기가 달라집니다. 이 차이를 정확히 이해하는 것이 중요합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">표현</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">의존명사 (띄어 씀)</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">어미/조사 (붙여 씀)</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">데</td>
    <td style="border:1px solid #ccc;padding:10px">먹는 데 시간이 걸린다<br>(장소, 경우, 일)</td>
    <td style="border:1px solid #ccc;padding:10px">먹는데 배가 안 고프다<br>(연결어미)</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">지</td>
    <td style="border:1px solid #ccc;padding:10px">집에 간 지 오래됐다<br>(시간 경과)</td>
    <td style="border:1px solid #ccc;padding:10px">가지 않겠다<br>(어미 '-지')</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">만</td>
    <td style="border:1px solid #ccc;padding:10px">3일 만에 돌아왔다<br>(기간 경과)</td>
    <td style="border:1px solid #ccc;padding:10px">너만 알고 있어<br>(조사 '만')</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">만큼</td>
    <td style="border:1px solid #ccc;padding:10px">먹을 만큼 먹어라<br>(정도, 분량)</td>
    <td style="border:1px solid #ccc;padding:10px">너만큼 잘 한다<br>(조사 '만큼')</td>
  </tr>
</table>

<h2>자주 헷갈리는 의존명사 목록</h2>
<p>국립국어원 온라인 가나다에서 가장 많이 질문되는 의존명사 표기 목록입니다.</p>
<ul>
  <li><strong>것</strong>: 먹을 것, 하고 싶은 것 (반드시 띄어 씀)</li>
  <li><strong>수</strong>: 할 수 있다, 갈 수 없다 (반드시 띄어 씀)</li>
  <li><strong>줄</strong>: 할 줄 알다, 갈 줄 몰랐다 (반드시 띄어 씀)</li>
  <li><strong>뿐</strong>: 웃을 뿐이다 (의존명사, 띄어 씀) vs 그것뿐이다 (조사, 붙여 씀)</li>
  <li><strong>대로</strong>: 하는 대로 따라해 (의존명사) vs 규칙대로 (조사)</li>
  <li><strong>바</strong>: 알고 있는 바에 의하면 (의존명사, 띄어 씀)</li>
</ul>

<h2>의존명사 판별법</h2>
<p>어떤 단어가 의존명사인지 판별하는 실용적인 방법이 있습니다. 해당 단어 앞에 관형어(이, 그, 저 + 명사의 관형형 등)를 넣어 자연스러우면 의존명사입니다. 예를 들어 '먹을 것'에서 '것' 앞에 '먹을'이라는 관형절이 있고, '어떤 것'처럼 다른 관형어도 넣을 수 있으므로 의존명사입니다. 반면 '-지 않겠다'에서 '-지'는 다른 관형어로 대체할 수 없으므로 어미입니다.</p>

<h2>의존명사 표기 연습 방법</h2>
<p>의존명사 띄어쓰기가 헷갈린다면 국립국어원 표준국어대사전에서 단어를 검색해 용례를 확인하는 습관을 들이세요. 또한 글 작성 후 국립국어원 맞춤법 검사기를 활용해 의존명사 띄어쓰기 오류를 점검하는 것도 효과적입니다. 의존명사는 문맥에 따라 의미와 품사가 달라지므로 단순 암기보다 사례를 통해 익히는 것이 중요합니다.</p>

<h2>추가 의존명사 표기 심화 사례</h2>
<p>앞서 소개한 것 외에도 자주 틀리는 의존명사 표기 사례가 더 있습니다.</p>
<ul>
  <li><strong>척</strong>: 아는 척하다 (의존명사, 띄어 씀)</li>
  <li><strong>체</strong>: 모르는 체하다 (의존명사, 띄어 씀)</li>
  <li><strong>법</strong>: 먹을 법하다 (의존명사, 띄어 씀) vs 방법(方法) (합성어, 붙여 씀)</li>
  <li><strong>리</strong>: 그럴 리가 없다 (의존명사, 띄어 씀)</li>
  <li><strong>김</strong>: 나온 김에 / 화난 김에 (의존명사, 띄어 씀)</li>
</ul>

<h2>의존명사 표기가 글쓰기 품질에 미치는 영향</h2>
<p>의존명사 띄어쓰기 오류는 공식 문서, 학술 논문, 보도자료에서 특히 두드러집니다. 글 전체의 완성도를 떨어뜨리고 독자에게 부주의한 인상을 줄 수 있습니다. 반면 의존명사를 정확하게 표기하면 필자의 언어 능력과 세심함을 드러낼 수 있습니다. 특히 자기소개서, 이력서, 논문에서는 맞춤법 하나하나가 첫인상에 영향을 미치므로, 제출 전 반드시 맞춤법 검사기와 직접 검토를 통해 의존명사 표기를 점검하는 것을 권장합니다. 글쓰기 도구로는 국립국어원 맞춤법 검사기와 텍스터브(texturb.com)를 함께 활용하면 더욱 정확한 점검이 가능합니다.</p>`,
    publishedAt: "2026-09-01T21:00:00+09:00",
    tags: ["의존명사", "띄어쓰기", "어문규범", "국립국어원"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "saisiot-usage-korean-guide",
    slug: "saisiot-usage-korean-guide",
    title: "사이시옷 사용법 — 국립국어원 표준 규정",
    excerpt: "한국어에서 가장 어렵다는 사이시옷 사용 기준을 국립국어원 한글 맞춤법 규정에 따라 정리합니다. 허용 조건과 자주 틀리는 사례를 포함합니다.",
    content: `<h2>사이시옷이란</h2>
<p>사이시옷(ㅅ)은 합성어를 이룰 때 두 형태소 사이에 삽입되는 'ㅅ'을 가리킵니다. 예를 들어 '냇가(내+가)', '바닷가(바다+가)', '핏줄(피+줄)'처럼 두 단어가 결합할 때 사이에 'ㅅ'이 들어갑니다. 한글 맞춤법 제30항에 사이시옷 삽입 규정이 정해져 있으며, 이 규정을 모르면 맞춤법 오류를 범하기 쉽습니다.</p>

<h2>사이시옷 삽입 조건 (한글 맞춤법 제30항)</h2>
<p>사이시옷은 다음 세 조건이 모두 충족될 때 사용합니다.</p>
<ol>
  <li><strong>합성어인 경우</strong>: 둘 이상의 단어가 결합해 하나의 단어를 이루어야 함</li>
  <li><strong>앞말이 모음으로 끝나야 함</strong>: 앞 단어의 마지막 음절이 모음으로 끝나야 함</li>
  <li><strong>발음 변화가 있어야 함</strong>: 뒷말의 첫소리가 된소리로 나거나, 'ㄴ'·'ㄴㄴ' 소리가 덧나거나, 뒷말의 첫소리 'ㄴ', 'ㅁ' 앞에서 'ㄴ' 소리가 덧나는 경우</li>
</ol>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:16px;margin:24px 0;border-radius:4px">
  <strong>사이시옷 삽입 3가지 발음 조건</strong><br>
  ① 뒷말 첫소리가 된소리로 남: 냇가 [내ː까], 깻잎 [깬닙]<br>
  ② 뒷말 앞에 'ㄴ' 소리 덧남: 이틀날 [이틀랄], 아랫니 [아랜니]<br>
  ③ 'ㄴ, ㅁ' 앞에서 'ㄴ' 소리 덧남: 제삿날 [제산날], 뒷마루 [뒨마루]
</div>

<h2>사이시옷이 쓰이는 단어 예시</h2>
<p>사이시옷이 올바르게 쓰인 단어와 그렇지 않은 경우를 비교합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">올바른 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">잘못된 표기</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">구성</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">냇가</td>
    <td style="border:1px solid #ccc;padding:10px">내가</td>
    <td style="border:1px solid #ccc;padding:10px">내 + 가</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">바닷가</td>
    <td style="border:1px solid #ccc;padding:10px">바다가</td>
    <td style="border:1px solid #ccc;padding:10px">바다 + 가</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">핏줄</td>
    <td style="border:1px solid #ccc;padding:10px">피줄</td>
    <td style="border:1px solid #ccc;padding:10px">피 + 줄</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">뒷마당</td>
    <td style="border:1px solid #ccc;padding:10px">뒤마당</td>
    <td style="border:1px solid #ccc;padding:10px">뒤 + 마당</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">나뭇잎</td>
    <td style="border:1px solid #ccc;padding:10px">나무잎</td>
    <td style="border:1px solid #ccc;padding:10px">나무 + 잎</td>
  </tr>
</table>

<h2>사이시옷을 쓰지 않는 경우</h2>
<p>모든 합성어에 사이시옷이 쓰이는 것은 아닙니다. 다음 경우에는 사이시옷을 쓰지 않습니다.</p>
<ul>
  <li><strong>순한자어 합성어</strong>: 대가(代價), 초점(焦點), 전세(傳貰) — 앞뒤 모두 한자어면 불사용</li>
  <li><strong>예외 6개 한자어</strong>: 곳간(庫間), 셋방(貰房), 숫자(數字), 찻간(車間), 툇간(退間), 횟수(回數) — 이 6개만 예외적으로 사이시옷 허용</li>
  <li><strong>발음 변화가 없는 경우</strong>: 발음 조건 3가지 중 어느 것도 해당하지 않으면 불사용</li>
</ul>

<h2>사이시옷 표기 확인 방법</h2>
<p>사이시옷 표기가 불확실하다면 국립국어원 표준국어대사전에서 해당 단어를 검색하세요. 표준국어대사전에 등재된 표기가 표준입니다. 사이시옷 규정은 복잡하기 때문에 단어를 외울 때 발음과 함께 표기도 함께 익히는 방법이 효과적입니다.</p>

<h2>사이시옷이 없는 합성어 예시</h2>
<p>앞말이 모음으로 끝나도 사이시옷을 쓰지 않는 경우가 있습니다. 발음 변화가 없으면 사이시옷을 삽입하지 않습니다.</p>
<ul>
  <li><strong>나무집</strong> (나무+집): 발음이 [나무집]으로 변화 없으므로 사이시옷 불필요</li>
  <li><strong>아래층</strong> (아래+층): 된소리나 'ㄴ' 첨가 없으므로 사이시옷 없음</li>
  <li><strong>나무젓가락</strong> (나무+젓가락): 단, 이미 '젓'에 사이시옷 포함된 단어</li>
</ul>

<h2>헷갈리는 사이시옷 단어 완전 정리</h2>
<p>맞춤법 시험에 자주 나오고 일상에서도 혼동하기 쉬운 사이시옷 포함 단어를 추가로 정리합니다.</p>
<ul>
  <li><strong>윗입술</strong> (O) — '위'+'입술', 사이시옷 삽입</li>
  <li><strong>아랫입술</strong> (O) — '아래'+'입술', 사이시옷 삽입</li>
  <li><strong>깻잎</strong> (O) — '깨'+'잎', 사이시옷 삽입 [깬닙] 발음</li>
  <li><strong>도리깻열</strong> vs <strong>도리께열</strong> — 표준국어대사전 확인 필요</li>
  <li><strong>예삿일</strong> (O) — '예사'+'일', 사이시옷 삽입</li>
  <li><strong>혼잣말</strong> (O) — '혼자'+'말', 사이시옷 삽입</li>
</ul>

<h2>사이시옷 학습 팁</h2>
<p>사이시옷은 규정을 이론으로 외우기보다 발음을 먼저 확인하는 것이 효과적입니다. 해당 합성어를 자연스럽게 발음했을 때 된소리가 나거나 'ㄴ' 소리가 덧나면 사이시옷을 써야 합니다. 예를 들어 '바다+가'를 빠르게 발음하면 [바닥까]처럼 된소리가 나므로 '바닷가'가 됩니다. 글쓰기 과정에서 사이시옷 표기가 확실치 않다면 국립국어원 표준국어대사전 검색을 습관화하고, 텍스터브(texturb.com)의 글쓰기 도구를 활용해 맞춤법을 점검하세요. 사이시옷은 한국어 맞춤법에서 가장 많은 혼동을 일으키는 규정 중 하나이므로, 자주 사용하는 합성어는 먼저 사전에서 확인해두는 것이 가장 확실한 방법입니다.</p>`,
    publishedAt: "2026-09-02T02:00:00+09:00",
    tags: ["사이시옷", "맞춤법", "어문규범", "국립국어원"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "modifier-notation-korean-grammar-guide",
    slug: "modifier-notation-korean-grammar-guide",
    title: "관형어 표기 — 어문규범 관형사·관형격 구분",
    excerpt: "한국어 관형어(관형사와 관형절)의 표기 규정과 올바른 사용 방법을 정리합니다. 어문규범에 따른 관형격 조사 '의' 사용 기준도 안내합니다.",
    content: `<h2>관형어란 무엇인가</h2>
<p>관형어(冠形語)는 체언(명사, 대명사, 수사) 앞에서 그 체언을 꾸며주는 문장 성분입니다. 관형어의 기능을 하는 단어를 관형사라 하고, 용언이 관형사형 어미를 취해 관형어 기능을 하는 것을 관형절이라 합니다. 예를 들어 '새 책'에서 '새'는 관형사이고, '읽은 책'에서 '읽은'은 관형절입니다. 한글 맞춤법에서는 관형사와 관형절의 표기 기준이 명확하게 제시되어 있습니다.</p>

<h2>관형사의 종류와 표기</h2>
<p>관형사는 성상 관형사, 지시 관형사, 수 관형사로 구분됩니다.</p>
<ul>
  <li><strong>성상 관형사</strong>: 새, 헌, 온, 첫, 외, 순, 수 — 체언의 성질이나 상태를 나타냄</li>
  <li><strong>지시 관형사</strong>: 이, 그, 저, 이런, 그런, 저런, 어떤, 무슨 — 특정 대상을 가리킴</li>
  <li><strong>수 관형사</strong>: 한, 두, 세, 네, 다섯 — 수량이나 순서를 나타냄</li>
</ul>

<div style="background:#e8f8e8;border-left:4px solid #28a745;padding:16px;margin:24px 0;border-radius:4px">
  <strong>관형사 표기 핵심</strong><br>
  관형사는 단독으로 한 단어이므로 뒤에 오는 명사와 반드시 띄어 씁니다.<br>
  올바른 예: 새 옷, 헌 가방, 이 책, 세 명 (모두 띄어 씀)
</div>

<h2>관형격 조사 '의' 사용 기준</h2>
<p>관형격 조사 '의'는 앞 단어가 뒤 단어를 수식하는 관계를 나타냅니다. 한국어에서는 '의'를 생략해도 의미 전달이 되는 경우가 많습니다. 국립국어원은 불필요한 '의' 남용을 피하도록 권고합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">불필요한 '의' 사용</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:left">자연스러운 표현</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">아이들의 교육의 중요성</td>
    <td style="border:1px solid #ccc;padding:10px">아이들 교육의 중요성</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">우리나라의 문화의 특성</td>
    <td style="border:1px solid #ccc;padding:10px">우리나라 문화의 특성</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">학생들의 학습의 효과</td>
    <td style="border:1px solid #ccc;padding:10px">학생들의 학습 효과</td>
  </tr>
</table>

<h2>관형절의 시제 표기</h2>
<p>관형절은 시제에 따라 어미가 달라집니다. 이 차이를 정확히 이해해야 글쓰기에서 혼동을 피할 수 있습니다.</p>
<ul>
  <li><strong>현재 관형절</strong>: 먹는 사람, 가는 길, 읽는 책</li>
  <li><strong>과거 관형절</strong>: 먹은 사람, 간 사람, 읽은 책</li>
  <li><strong>미래 관형절</strong>: 먹을 사람, 갈 사람, 읽을 책</li>
  <li><strong>진행 관형절</strong>: 먹고 있는 사람 (진행형 표현)</li>
</ul>

<h2>관형어와 부사어의 차이</h2>
<p>관형어는 명사를 꾸미고, 부사어는 용언(동사·형용사) 또는 문장 전체를 꾸미는 차이가 있습니다. '매우 예쁜 꽃'에서 '매우'는 부사어(형용사 '예쁜'을 꾸밈), '예쁜'은 관형어(명사 '꽃'을 꾸밈)입니다. 이 구분이 중요한 이유는 띄어쓰기와 맞춤법에서 관형어와 부사어가 다른 규칙을 따르기 때문입니다.</p>

<h2>글쓰기에서 관형어 효과적으로 사용하기</h2>
<p>관형어를 적절히 사용하면 명사의 의미를 풍부하게 전달할 수 있습니다. 그러나 과도한 관형절 중첩은 문장을 복잡하고 읽기 어렵게 만듭니다. '어제 도서관에서 내가 오랫동안 찾아온 책'처럼 관형절이 여러 개 겹치면 주어를 모호하게 만들 수 있습니다. 이런 경우 문장을 나누어 표현하는 것이 더 명확합니다. 공문서나 보고서에서는 관형절을 간결하게 유지하고 수식어를 최소화해 가독성을 높이는 것이 좋습니다.</p>

<h2>관형사형 어미의 종류와 활용</h2>
<p>한국어 용언은 관형사형 어미를 취해 관형절로 기능합니다. 관형사형 어미의 종류와 사용 방법을 이해하면 더 정확한 문장 표현이 가능합니다.</p>
<ul>
  <li><strong>-(으)ㄴ</strong>: 과거 또는 완료 관형절 (먹은 밥, 간 사람, 예쁜 꽃)</li>
  <li><strong>-는</strong>: 현재 또는 진행 관형절 (먹는 사람, 가는 길, 피는 꽃)</li>
  <li><strong>-(으)ㄹ</strong>: 미래 또는 추측 관형절 (먹을 사람, 갈 길, 피울 꽃)</li>
  <li><strong>-던</strong>: 과거 회상 관형절 (먹던 밥, 가던 길, 좋던 시절)</li>
</ul>
<p>'-은'과 '-는'의 구별은 한국어 학습자에게 특히 어렵습니다. 동사 뒤에서는 '-(으)ㄴ'이 과거, '-는'이 현재를 나타내지만, 형용사 뒤에서는 '-(으)ㄴ'이 현재를 나타냅니다. 예를 들어 '먹은 사람'(과거)과 '예쁜 꽃'(현재)의 차이를 이해하는 것이 중요합니다.</p>

<h2>관형어 관련 맞춤법 오류 예방</h2>
<p>관형어 표기에서 흔히 발생하는 맞춤법 오류와 예방 방법입니다. 관형사 '웬'과 '왠'을 혼동하는 경우가 많습니다. '웬'은 '어떠한, 어찌된'의 뜻을 가진 관형사이고, '왠지'는 '왜인지'가 줄어든 부사입니다. '웬 일이야'(O)와 '왠일이야'(X)처럼 명사 앞에서는 '웬'을 씁니다. 또한 관형사 '어떤'을 '어떻한'으로 잘못 쓰는 오류도 흔합니다. 관형어 표기가 불확실하다면 국립국어원 표준국어대사전을 검색하거나 텍스터브(texturb.com)에서 맞춤법을 점검하세요.</p>`,
    publishedAt: "2026-09-02T07:00:00+09:00",
    tags: ["관형어", "관형사", "어문규범", "맞춤법", "국립국어원"],
    category: "글자수 가이드",
    author: "texturb",
  },
];
