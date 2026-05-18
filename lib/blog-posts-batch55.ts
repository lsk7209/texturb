import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH55: BlogPost[] = [
  {
    id: "newspaper-column-character-count",
    slug: "newspaper-column-character-count",
    title: "신문 칼럼 글자수 — 일간지·주간지·월간지 비교",
    excerpt: "신문 칼럼의 적정 글자수를 일간지, 주간지, 월간지별로 비교합니다. 국내 주요 언론사 기준과 실제 청탁 분량을 정리했습니다.",
    content: `<h2>신문 칼럼 글자수, 왜 매체마다 다를까?</h2>
<p>신문 칼럼의 분량은 매체의 발행 주기와 독자층에 따라 크게 달라집니다. 일간지는 지면 한계로 짧고 간결하게, 주간지는 심층 분석을, 월간지는 에세이 형식의 긴 호흡을 선호합니다. 칼럼 의뢰를 받았거나 기고를 준비 중이라면 매체별 표준 분량을 미리 파악해두는 것이 필수입니다.</p>

<h2>일간지 칼럼 글자수 기준</h2>
<p>국내 주요 일간지의 칼럼 분량은 지면 구성 방식에 따라 차이가 있습니다. 신문의 1단 칼럼 지면은 통상 2,000자 안팎으로 구성되며, 오피니언 면 고정 칼럼은 800~1,200자(공백 포함)가 일반적입니다.</p>
<ul>
  <li><strong>사설 아래 단평·브리핑</strong>: 300~500자</li>
  <li><strong>오피니언 기고 칼럼</strong>: 700~1,000자</li>
  <li><strong>시론·특별기고</strong>: 1,200~1,800자</li>
  <li><strong>연재 칼럼(전문가 고정)</strong>: 1,000~1,500자</li>
</ul>
<p>한국언론진흥재단이 발간하는 신문 편집 가이드에 따르면, 일간지 오피니언 칼럼의 표준 글자수는 공백 포함 800~1,200자입니다. 원고지로 환산하면 4~6매 분량에 해당합니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>일간지 기고 칼럼 분량 요약</strong><br>
  공백 포함 800~1,200자 (원고지 4~6매)<br>
  공백 제외 600~900자 내외
</div>

<h2>주간지·격주간지 칼럼 분량</h2>
<p>주간지는 일간지보다 긴 호흡의 분석 칼럼을 싣습니다. 시사주간지, 경제주간지, 문화주간지 등 성격에 따라 차이가 있지만, 일반적으로 1,500~2,500자 수준이 표준입니다.</p>
<ul>
  <li><strong>시사 분석 칼럼</strong>: 1,500~2,000자</li>
  <li><strong>경제·산업 트렌드 칼럼</strong>: 2,000~2,500자</li>
  <li><strong>인물·문화 에세이</strong>: 1,800~2,200자</li>
</ul>
<p>격주간으로 발행되는 전문 잡지의 경우 칼럼 분량이 3,000자에 달하기도 합니다. 주간지 편집장이 칼럼 청탁 시 '2,000자 내외'를 가장 많이 요청하는 이유는 지면 2단 구성과 맞아떨어지기 때문입니다.</p>

<h2>월간지 칼럼 분량</h2>
<p>월간지 칼럼은 에세이에 가까운 형식이 많아 분량이 상당히 깁니다. 독자들이 깊이 있는 읽을거리를 기대하는 매체 특성상, 2,500~4,000자(공백 포함)를 표준으로 봅니다.</p>
<ul>
  <li><strong>일반 칼럼·에세이</strong>: 2,500~3,000자</li>
  <li><strong>전문가 기획 칼럼</strong>: 3,000~4,000자</li>
  <li><strong>권두 칼럼(커버 스토리 연계)</strong>: 3,500~5,000자</li>
</ul>
<p>계간지나 반년간지는 더 긴 분량을 요구하기도 하며, 5,000자 이상의 장문 칼럼도 드물지 않습니다.</p>

<h2>매체별 글자수 비교표</h2>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">매체</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">표준 분량(공백 포함)</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">원고지 환산</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">일간지 단평</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">300~500자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1.5~2.5매</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">일간지 오피니언</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">800~1,200자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">4~6매</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">주간지 분석 칼럼</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1,500~2,500자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">7.5~12.5매</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">월간지 에세이</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">2,500~4,000자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">12.5~20매</td>
  </tr>
</table>

<h2>칼럼 기고 시 주의사항</h2>
<p>매체별 분량 외에도 편집 방식에 따라 실제 게재 분량이 달라질 수 있습니다. 기고 전에 반드시 담당 편집자에게 요청 분량(공백 포함/제외 여부 포함)을 확인하세요. 분량 초과 시 편집 과정에서 내용이 삭제될 수 있습니다.</p>
<ul>
  <li>공백 포함/제외 기준을 사전에 확인</li>
  <li>각주·인용 포함 여부 확인</li>
  <li>사진 캡션이 본문 글자수에 포함되는지 확인</li>
  <li>제목·소제목 포함 여부 확인</li>
</ul>

<h2>칼럼 글자수와 설득력의 관계</h2>
<p>칼럼은 분량보다 밀도가 중요합니다. 일간지 칼럼처럼 1,000자 내외로 제한된 공간에서는 핵심 주장 하나에 집중하는 것이 효과적입니다. 반면 월간지 칼럼은 배경 설명, 사례 제시, 반론 검토, 결론 도출까지 단계적 논리 전개가 가능합니다. 분량을 매체 기준에 맞추되, 내용의 밀도를 높이는 편집 능력이 좋은 칼럼을 만드는 핵심입니다.</p>

<h2>칼럼니스트가 알아야 할 분량 조절 기술</h2>
<p>원고 분량이 기준을 초과하거나 부족할 때 활용할 수 있는 실용적인 방법들이 있습니다. 분량이 너무 많을 때는 예시 한 가지를 삭제하거나, 배경 설명 단락을 한두 문장으로 압축합니다. 반대로 분량이 부족할 때는 구체적 수치나 사례를 추가하거나, 결론에서 독자에게 던지는 질문 한 줄을 더하는 방식이 효과적입니다. 단순히 단어를 늘리는 '패딩(padding)'은 편집자가 바로 알아채므로 내용을 강화하는 방향으로 분량을 맞추는 것이 중요합니다.</p>
<p>칼럼 분량 점검에는 텍스터브(texturb.com)의 글자수 세기 도구를 사용하면 공백 포함/제외, 한글 전용 글자수를 한번에 확인할 수 있어 원고 마감 전 최종 검토에 유용합니다.</p>`,
    publishedAt: "2026-08-30T09:00:00+09:00",
    tags: ["칼럼", "신문기고", "글자수", "언론"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "editorial-writing-guide-journalism",
    slug: "editorial-writing-guide-journalism",
    title: "사설 작성 분량 가이드 — 한국기자협회 권장 기준",
    excerpt: "신문 사설의 적정 분량과 작성 기준을 한국기자협회 지침과 주요 언론사 실례를 통해 정리합니다.",
    content: `<h2>사설이란 무엇인가</h2>
<p>사설(社說)은 신문사의 공식 입장을 대변하는 논설 글입니다. 특정 기자나 필자가 아닌 언론사 전체의 목소리로, 편집위원회나 논설위원실에서 집필합니다. 독자에게는 시사 현안에 대한 신문사의 판단과 방향을 제시하는 중요한 지면입니다.</p>

<h2>한국 주요 일간지 사설 분량 현황</h2>
<p>한국기자협회(KPF)는 사설 분량에 대한 엄격한 규정보다 각 언론사의 편집 관행을 존중합니다. 다만 국내 주요 종합일간지의 사설 분량은 관행적으로 수렴하는 경향이 있습니다.</p>
<ul>
  <li><strong>표준 분량</strong>: 공백 포함 800~1,200자</li>
  <li><strong>원고지 환산</strong>: 4~6매</li>
  <li><strong>단락 구성</strong>: 보통 3~5개 단락</li>
  <li><strong>소제목</strong>: 없는 경우가 대다수 (논술 형식)</li>
</ul>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:16px;margin:24px 0;border-radius:4px">
  <strong>사설 vs 칼럼 분량 차이</strong><br>
  사설은 언론사 공식 입장 표명으로 칼럼보다 간결하게 씁니다. 개인 칼럼이 1,000~1,500자라면 사설은 800~1,000자가 일반적입니다.
</div>

<h2>사설 구조와 단락별 권장 분량</h2>
<p>사설은 뉴스 기사와 달리 역피라미드 구조보다 '문제 제기 → 논거 전개 → 주장 결론'의 논설 구조를 따릅니다. 각 단계별로 적절한 분량을 배분하는 것이 좋습니다.</p>
<ul>
  <li><strong>도입부 (현안 제기)</strong>: 150~200자 — 독자가 사설 주제를 바로 파악하도록</li>
  <li><strong>문제 분석 (1~2단락)</strong>: 300~400자 — 사실 확인과 맥락 제공</li>
  <li><strong>주장·논거 (1~2단락)</strong>: 250~400자 — 언론사의 입장과 근거</li>
  <li><strong>결론·촉구 (1단락)</strong>: 100~200자 — 정책 제언이나 사회적 촉구</li>
</ul>

<h2>사설 작성의 핵심 원칙</h2>
<p>좋은 사설은 분량보다 명확성이 중요합니다. 한국프레스인스티튜트(KPI)의 편집 교육 자료에서는 사설 작성 시 다음 원칙을 권장합니다.</p>
<ol>
  <li><strong>한 사설, 한 주제</strong>: 여러 현안을 한 사설에 담으면 설득력이 분산됩니다.</li>
  <li><strong>명확한 입장</strong>: "이럴 수도 저럴 수도" 식의 중립적 서술은 사설이 아닙니다.</li>
  <li><strong>사실 기반 논거</strong>: 주장의 근거는 검증된 데이터나 공식 통계를 사용합니다.</li>
  <li><strong>독자 수준에 맞는 언어</strong>: 전문 용어는 설명을 덧붙이거나 피합니다.</li>
</ol>

<h2>경제지·전문지 사설 분량 특성</h2>
<p>종합일간지와 달리 경제지나 전문 분야 신문은 사설 분량이 다소 다를 수 있습니다.</p>
<ul>
  <li><strong>경제 일간지</strong>: 1,000~1,500자 (경제 데이터 인용 필요로 다소 긺)</li>
  <li><strong>전문 업계지</strong>: 600~1,000자 (독자들이 배경 지식 보유)</li>
  <li><strong>지역 일간지</strong>: 500~800자 (지면 규모 제약)</li>
</ul>

<h2>디지털 전환 이후 온라인 사설 분량</h2>
<p>신문사 홈페이지나 모바일 앱으로 사설이 유통되면서 분량에 변화가 생기고 있습니다. 온라인에서는 SEO(검색엔진 최적화)와 독자 이탈률을 고려해 1,000~1,500자로 늘어나는 추세입니다. 소제목을 추가하고 단락을 더 짧게 나누는 편집 변화도 나타납니다.</p>

<h2>사설 작성 체크리스트</h2>
<ul>
  <li>주장이 명확하게 드러나는가?</li>
  <li>논거가 사실에 기반하는가?</li>
  <li>결론에서 구체적인 제언이 있는가?</li>
  <li>분량이 매체 기준(800~1,200자)에 부합하는가?</li>
  <li>언론사 문체 규정과 일치하는가?</li>
</ul>

<h2>사설 작성 실전 연습 방법</h2>
<p>처음 사설 스타일의 글을 쓰는 분들을 위해 실전 연습 방법을 소개합니다. 먼저 기존 주요 신문의 사설 3~5편을 읽고 단락 구조와 논증 방식을 분석해보세요. 도입부에서 어떤 현안을 어떻게 제기하는지, 주장의 근거로 어떤 데이터를 활용하는지, 결론에서 무엇을 촉구하는지 파악합니다. 이후 같은 주제로 800자 이내의 모의 사설을 써보고, 원문과 비교해 표현의 차이를 찾는 훈련이 도움이 됩니다.</p>
<p>사설 작성 실력 향상의 핵심은 퇴고입니다. 초안을 쓴 뒤 최소 두 차례 이상 다듬으며, 불필요한 수식어를 제거하고 주장의 논리 흐름을 점검합니다. 글자수는 텍스터브(texturb.com)와 같은 도구로 확인하되, 분량보다 논리 밀도를 먼저 챙기는 것이 좋은 사설의 출발점입니다.</p>

<h2>마치며</h2>
<p>사설은 언론사의 신뢰도와 직결되는 중요한 지면입니다. 분량보다 내용의 일관성과 논리적 설득력이 더 중요합니다. 처음 사설을 작성한다면 800자 이내의 간결한 구조로 시작하고, 주장과 근거의 흐름이 자연스럽게 이어지도록 여러 번 퇴고하는 것을 권장합니다.</p>`,
    publishedAt: "2026-08-30T14:00:00+09:00",
    tags: ["사설", "언론", "칼럼", "신문기고"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "reader-submission-character-count-newspaper",
    slug: "reader-submission-character-count-newspaper",
    title: "독자 투고 글자수 — 주요 신문 공식 응모 기준",
    excerpt: "국내 주요 신문사의 독자 투고 공식 응모 기준 글자수를 정리했습니다. 투고 전 꼭 확인해야 할 분량과 형식 안내입니다.",
    content: `<h2>독자 투고, 어떻게 다를까</h2>
<p>독자 투고는 일반 시민이 신문사에 자신의 의견이나 경험을 보내 게재를 요청하는 글입니다. 기자나 전문 칼럼니스트가 쓰는 사설·칼럼과 달리, 독자 투고는 분량 제한이 더 엄격하고 형식도 간결합니다. 대부분의 신문사는 홈페이지에 공식 투고 양식과 글자수 기준을 명시하고 있습니다.</p>

<h2>주요 신문사 독자 투고 공식 기준</h2>
<p>국내 주요 일간지의 독자 투고란은 지면과 온라인을 모두 운영하며, 매체별로 요구 분량이 다릅니다. 아래는 공식 안내 기준입니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>일반 독자 투고 표준 분량 (공백 포함 기준)</strong><br>
  • 단문 투고: 200~400자<br>
  • 일반 투고: 400~600자<br>
  • 심층 의견: 600~1,000자<br>
  대부분의 종합일간지는 600자 내외를 기본 기준으로 안내합니다.
</div>

<h2>투고 유형별 글자수 기준</h2>
<p>독자 투고에는 여러 유형이 있으며, 유형마다 요구 분량이 다릅니다.</p>
<ul>
  <li><strong>독자의 소리 (한 줄 의견)</strong>: 100~200자</li>
  <li><strong>생활 불편·건의</strong>: 300~500자</li>
  <li><strong>정책·사회 현안 의견</strong>: 500~800자</li>
  <li><strong>전문가 독자 기고</strong>: 700~1,000자</li>
  <li><strong>특집 독자 에세이 공모</strong>: 1,000~2,000자</li>
</ul>

<h2>온라인 독자 투고와 지면 투고의 차이</h2>
<p>신문사 홈페이지 투고 게시판은 지면 게재 투고보다 분량 제한이 느슨한 경우가 많습니다. 지면 게재를 목표로 한다면 더 엄격하게 분량을 준수해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">구분</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">지면 게재 기준</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">온라인 기준</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">일반 의견</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">400~600자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">500~1,000자</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">심층 의견</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">600~900자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">900~2,000자</td>
  </tr>
</table>

<h2>투고 채택률을 높이는 분량 전략</h2>
<p>독자 투고가 지면에 실리려면 분량만큼 내용의 적절성도 중요합니다. 담당 편집자들이 선호하는 투고의 특성은 다음과 같습니다.</p>
<ol>
  <li><strong>결론 먼저</strong>: 앞부분에 주장을 명확히 제시해야 읽힙니다.</li>
  <li><strong>개인 경험 기반</strong>: 시민 독자의 실제 경험이 담긴 글을 선호합니다.</li>
  <li><strong>분량 엄수</strong>: 요청 분량을 10% 이상 초과하면 채택 가능성이 낮아집니다.</li>
  <li><strong>시의성</strong>: 최근 이슈와 연계된 투고가 채택 확률이 높습니다.</li>
</ol>

<h2>투고 글자수 계산 방법</h2>
<p>신문사마다 글자수 계산 방식이 다를 수 있어 주의가 필요합니다.</p>
<ul>
  <li><strong>공백 포함 기준</strong>: 문장 내 띄어쓰기와 줄바꿈도 글자수에 포함</li>
  <li><strong>공백 제외 기준</strong>: 실제 문자(한글·영문·숫자)만 계산</li>
  <li><strong>바이트 기준</strong>: 일부 구형 시스템은 한글 1자를 2~3바이트로 계산</li>
</ul>
<p>투고 전 신문사 공식 안내에서 글자수 계산 기준을 반드시 확인하세요. 텍스터브(texturb.com)의 글자수 세기 도구를 활용하면 공백 포함·제외 기준을 쉽게 전환해 확인할 수 있습니다.</p>

<h2>독자 투고 채택 후 주의사항</h2>
<p>투고가 채택되어 게재 연락을 받으면 원고 수정에 동의하는 경우가 많습니다. 편집 과정에서 분량을 줄이거나 표현을 다듬을 수 있으므로, 핵심 내용이 지나치게 변경되지 않도록 담당자와 소통하세요. 일부 신문사는 게재 확정 전 수정본을 필자에게 보내 최종 확인을 요청하기도 합니다.</p>
<p>게재된 투고는 신문사 디지털 아카이브에 장기 보관됩니다. 인터넷에서 검색 가능한 형태로 남으므로, 개인 정보(상세 주소, 연락처 등)가 본문에 포함되지 않도록 주의하세요. 투고 경험이 쌓이면 신문사에서 고정 칼럼을 제안받는 경우도 있으니, 꾸준히 양질의 투고를 이어가는 것이 좋습니다.</p>

<h2>투고 형식 작성 팁</h2>
<p>분량 외에도 투고 형식을 맞추는 것이 중요합니다. 대부분의 신문사는 투고 시 이름, 나이(또는 직업), 연락처를 함께 제출하도록 요구합니다. 익명 투고는 거의 채택되지 않으니 실명으로 작성하세요. 제목은 별도로 붙이거나 편집부에서 수정하는 경우도 많으므로 내용 자체에 집중하는 것이 좋습니다.</p>
<p>투고 글자수를 정확하게 맞추려면 텍스터브(texturb.com)의 글자수 세기 도구를 활용하세요. 공백 포함/제외 기준을 즉시 전환해 확인할 수 있어, 각 신문사의 기준에 맞는 분량인지 투고 전 최종 점검이 가능합니다.</p>`,
    publishedAt: "2026-08-30T19:00:00+09:00",
    tags: ["독자투고", "신문기고", "투고기준", "글자수"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "contributed-article-length-specialty-general",
    slug: "contributed-article-length-specialty-general",
    title: "기고문 작성 분량 — 전문지·일반지 차이 분석",
    excerpt: "기고문은 전문지와 일반 언론에 따라 요구 분량이 크게 다릅니다. 매체 유형별 표준 분량과 효과적인 기고문 작성법을 안내합니다.",
    content: `<h2>기고문이란 무엇인가</h2>
<p>기고문(寄稿文)은 해당 언론사 소속이 아닌 외부 전문가나 일반인이 특정 주제에 대해 의견이나 분석을 담아 보내는 글입니다. 독자 투고보다 전문성이 높고, 기자가 쓰는 기사보다 필자의 주관적 견해가 강하게 담기는 것이 특징입니다. 기고를 통해 개인 브랜드를 강화하거나 특정 분야의 전문성을 알릴 수 있어 전문직 종사자들이 많이 활용합니다.</p>

<h2>일반 종합지 기고문 분량 기준</h2>
<p>종합 일간지나 온라인 일반 뉴스 매체의 기고문은 독자층이 넓어 전문 용어를 최소화하고 분량도 적절히 조절해야 합니다.</p>
<ul>
  <li><strong>단기 기고 (단발 의견)</strong>: 700~1,000자</li>
  <li><strong>일반 기고문</strong>: 1,000~1,500자</li>
  <li><strong>기획 기고 (연재 포함)</strong>: 1,500~2,000자</li>
</ul>

<div style="background:#e8f8e8;border-left:4px solid #28a745;padding:16px;margin:24px 0;border-radius:4px">
  <strong>일반지 기고문 황금 분량</strong><br>
  공백 포함 1,000~1,500자가 편집자와 독자 모두 선호하는 최적 분량입니다. 원고지 5~7.5매에 해당합니다.
</div>

<h2>전문지 기고문 분량 기준</h2>
<p>전문 학술지나 업계 전문 매체의 기고문은 독자의 배경 지식이 높아 더 깊은 분석과 긴 분량이 허용됩니다.</p>
<ul>
  <li><strong>업계 전문지 (월간/격월)</strong>: 2,000~3,000자</li>
  <li><strong>학술 전문지</strong>: 3,000~5,000자</li>
  <li><strong>연구소 정책 브리프</strong>: 2,500~4,000자</li>
  <li><strong>법조·의학 전문지</strong>: 2,000~3,500자</li>
</ul>

<h2>온라인 전문 미디어의 기고 분량</h2>
<p>블로그형 전문 미디어나 뉴스레터 플랫폼의 기고 분량은 SEO와 독자 이탈률을 함께 고려합니다. 네이버 뉴스 제휴 매체나 카카오 채널의 기고 가이드에서는 700~2,000자를 권장하는 경우가 많습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">매체 유형</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">권장 분량(공백 포함)</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">소제목 여부</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">종합 일간지</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1,000~1,500자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">없음 (단일 흐름)</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">경제·산업 전문지</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">2,000~3,000자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">있음 (2~4개)</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">온라인 뉴스 미디어</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">700~1,500자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">선택</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">학술·정책 전문지</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">3,000~5,000자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">있음 (필수)</td>
  </tr>
</table>

<h2>기고 청탁 vs 자발적 기고의 분량 차이</h2>
<p>언론사에서 직접 청탁을 받은 경우와 자발적으로 투고하는 경우 접근 방식이 다릅니다. 청탁 기고는 편집부에서 원하는 분량과 방향을 명확히 제시합니다. 반면 자발적 기고는 해당 매체의 기존 기고문 분량을 참고해 맞추는 것이 좋습니다.</p>

<h2>기고문 분량 최적화 전략</h2>
<p>분량을 매체에 맞추면서도 내용의 밀도를 유지하는 방법입니다.</p>
<ol>
  <li><strong>핵심 주장 하나로 집중</strong>: 여러 주장을 담으려 하면 분량이 늘어나고 설득력이 약해집니다.</li>
  <li><strong>배경 설명 최소화</strong>: 독자가 이미 알고 있을 정보는 과감히 생략합니다.</li>
  <li><strong>구체적 사례 1~2개</strong>: 추상적 주장보다 구체적 사례가 분량 대비 효과가 높습니다.</li>
  <li><strong>결론은 1~2문장으로</strong>: 기고문 결론에서 새로운 논점을 시작하지 않습니다.</li>
</ol>

<h2>기고문 제목 작성 전략</h2>
<p>기고문에서 제목은 편집자가 채택 여부를 결정짓는 첫 인상입니다. 전문지 기고라면 독자의 궁금증을 자극하는 질문형 제목("왜 한국 스타트업은 글로벌 시장에서 실패하는가?")이 효과적입니다. 일반지 기고는 일반 독자도 이해할 수 있는 쉬운 언어로 핵심 메시지를 담아야 합니다. 제목에 숫자를 활용하면("5가지 이유", "2025년 이후 변화") 클릭률과 가독성이 높아집니다. 단, 제목은 편집부에서 수정하는 경우가 많으므로 기고 시 제목 대안을 1~2개 함께 제출하는 것이 좋습니다.</p>

<h2>기고문 작성 후 사후 관리</h2>
<p>기고문이 게재된 후에는 반드시 게재본을 확인하고 오탈자나 편집 오류가 없는지 체크하세요. 게재본을 PDF나 스크린샷으로 보관해두면 포트폴리오로 활용할 수 있습니다. 기고문이 게재된 링크를 개인 SNS나 링크드인에 공유하면 개인 브랜딩 효과를 높일 수 있습니다. 같은 매체에 꾸준히 기고하면 편집자와 신뢰 관계가 쌓여 더 좋은 지면을 배정받거나 장기 연재 기회로 이어질 수 있습니다.</p>

<h2>기고문 작성 전 체크리스트</h2>
<ul>
  <li>해당 매체의 기고 가이드라인을 확인했는가?</li>
  <li>요청 분량(공백 포함/제외)을 정확히 파악했는가?</li>
  <li>필자 소개(이름, 소속, 직책)를 준비했는가?</li>
  <li>사진이나 도표가 필요한 경우 준비했는가?</li>
  <li>기존 기고문과 주제 중복 여부를 확인했는가?</li>
</ul>`,
    publishedAt: "2026-08-31T00:00:00+09:00",
    tags: ["기고문", "언론기고", "전문지", "글자수"],
    category: "글자수 가이드",
    author: "texturb",
  },
  {
    id: "company-newsletter-article-length-guide",
    slug: "company-newsletter-article-length-guide",
    title: "사보 기사 글자수 — 사내보 표준 분량과 구조",
    excerpt: "사내보(사보) 기사의 표준 글자수와 구성 방식을 정리합니다. 유형별 권장 분량과 사보 편집의 핵심 원칙을 안내합니다.",
    content: `<h2>사보란 무엇인가</h2>
<p>사보(社報)는 기업이나 기관이 임직원과의 소통을 위해 발행하는 사내 매체입니다. 종이 인쇄물 형태로 발행되던 전통 사보와 달리, 최근에는 이메일 뉴스레터, 사내 인트라넷, 모바일 앱 형태의 디지털 사보가 확산되고 있습니다. 사보 기사는 일반 신문 기사와 다른 분량과 구조를 가지며, 독자(임직원)와의 친밀감을 중시합니다.</p>

<h2>사보 기사 유형별 표준 분량</h2>
<p>사보에는 다양한 기사 유형이 있으며, 유형마다 권장 분량이 다릅니다. 한국사보협회 및 기업 커뮤니케이션 실무 가이드에서 제시하는 표준은 다음과 같습니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #3b5bdb;padding:16px;margin:24px 0;border-radius:4px">
  <strong>사보 기사 유형별 권장 분량 (공백 포함)</strong><br>
  • 단신·브리핑: 100~300자<br>
  • 뉴스 기사: 400~700자<br>
  • 특집 기사: 800~1,500자<br>
  • 인터뷰 기사: 1,000~2,000자<br>
  • 커버 스토리: 1,500~3,000자
</div>

<h2>인쇄 사보 기사 분량 기준</h2>
<p>인쇄 사보는 판형(A4, B5, 타블로이드 등)에 따라 1단 기사의 글자수가 달라집니다. A4 판형 기준으로 1단 기사는 약 400~600자, 2단 기사는 800~1,200자가 표준입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0">
  <tr style="background:#e8f4fd">
    <th style="border:1px solid #ccc;padding:10px;text-align:left">기사 유형</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">A4 기준 분량</th>
    <th style="border:1px solid #ccc;padding:10px;text-align:center">사진 포함 여부</th>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">단신</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">100~300자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">없음</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">일반 뉴스</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">400~700자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1~2장</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">특집 기획</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">800~1,500자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">2~4장</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="border:1px solid #ccc;padding:10px">인터뷰</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1,000~2,000자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1~3장</td>
  </tr>
  <tr>
    <td style="border:1px solid #ccc;padding:10px">커버 스토리</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">1,500~3,000자</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center">4장 이상</td>
  </tr>
</table>

<h2>디지털 사보(이메일 뉴스레터) 분량 기준</h2>
<p>이메일 뉴스레터 형태의 디지털 사보는 인쇄물과 달리 가독성과 클릭률을 고려해야 합니다. 모바일 기기에서 읽히는 비율이 높아 단락을 짧게 나누고 분량도 상대적으로 간결하게 유지합니다.</p>
<ul>
  <li><strong>이메일 헤드라인 뉴스</strong>: 150~300자 (이메일 본문 미리보기 최적화)</li>
  <li><strong>본문 기사 링크형</strong>: 200~500자 요약 + 전문 링크</li>
  <li><strong>전문 기사 (인트라넷 게시)</strong>: 800~1,500자</li>
</ul>

<h2>사보 기사 구조 표준</h2>
<p>사보 기사는 신문 기사와 유사한 역피라미드 구조를 기반으로 하되, 더 친근하고 내부 독자 중심의 관점으로 작성합니다.</p>
<ol>
  <li><strong>리드 (Lead)</strong>: 핵심 내용 요약 (100~150자)</li>
  <li><strong>본론</strong>: 배경과 맥락 설명 (300~500자)</li>
  <li><strong>인용·인터뷰</strong>: 관련자 코멘트 (200~300자)</li>
  <li><strong>마무리</strong>: 의의나 향후 계획 (100~200자)</li>
</ol>

<h2>사보 기사 작성 시 주의사항</h2>
<p>사보는 외부 독자가 없는 내부 매체이므로 회사 고유의 약어나 전문 용어를 사용해도 됩니다. 그러나 신입 직원이나 비주류 직군 직원도 이해할 수 있는 수준의 설명을 유지하는 것이 좋습니다. 또한 사보 기사는 공식 기록으로 남으므로, 수치나 인명은 정확하게 표기해야 합니다.</p>

<h2>사보 편집의 핵심 원칙</h2>
<ul>
  <li><strong>독자 중심</strong>: 임직원의 관심사와 직결된 내용 우선</li>
  <li><strong>시각 자료 활용</strong>: 사진, 인포그래픽으로 기사 분량 보완</li>
  <li><strong>긍정 어조 유지</strong>: 내부 소통 매체의 특성상 건설적 논조</li>
  <li><strong>정기 발행</strong>: 월간 또는 격월 발행 주기 준수로 신뢰도 확보</li>
</ul>

<h2>디지털 사보 트렌드와 분량 변화</h2>
<p>코로나19 이후 재택근무가 확산되면서 인쇄 사보를 폐간하고 디지털 사보로 전환하는 기업이 늘었습니다. 디지털 사보는 이메일, 사내 포털, 모바일 앱 등 다양한 채널로 배포되며, 각 채널의 특성에 맞게 기사 분량을 최적화해야 합니다. 특히 모바일 독자가 많은 환경에서는 기사당 400~600자로 짧게 작성하고 '더 읽기' 링크로 전문을 제공하는 방식이 효과적입니다. 반면 인트라넷 게시판에 올라가는 심층 특집은 1,500자 이상의 긴 형식도 유지됩니다.</p>
<p>사내 커뮤니케이션 플랫폼(슬랙, 팀즈, 카카오워크 등)에서는 사보 형식의 글보다 300자 이내의 짧은 뉴스 카드 형식이 선호됩니다. 사보 담당자라면 채널별로 분량 기준을 별도로 수립하고, 같은 기사를 채널에 맞게 재편집하는 방식으로 효율적으로 운영할 수 있습니다.</p>

<h2>사보 기사 글자수 계산 팁</h2>
<p>사보 기사를 작성한 후 분량을 확인할 때는 제목, 사진 캡션, 기자명을 본문 글자수에서 별도로 구분하세요. 편집 소프트웨어(인디자인, 쿼크익스프레스 등)에서 텍스트 박스 글자수를 자동으로 표시해주는 기능을 활용하면 편리합니다. 텍스터브(texturb.com)의 글자수 세기 도구를 사용해 초안 단계에서 분량을 미리 확인하고 조절하는 것도 효율적인 방법입니다.</p>`,
    publishedAt: "2026-08-31T05:00:00+09:00",
    tags: ["사보", "사내보", "기업커뮤니케이션", "글자수"],
    category: "글자수 가이드",
    author: "texturb",
  },
];
