import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH32: BlogPost[] = [
  {
    slug: "deposit-refund-claim-letter-length",
    title: "전세보증금 반환 청구서 작성법 — HUG 공식 양식 분량 기준",
    description: "주택도시보증공사(HUG) 전세보증금반환보증 절차 기준 청구서 작성 분량, 보증 이행 청구 사유서, 첨부서류 정리를 안내합니다.",
    publishedAt: "2026-08-06T10:00:00+09:00",
    metaTitle: "전세보증금 반환 청구서 작성법 — HUG 공식 양식·이행청구 기준 (2026)",
    metaDescription: "주택도시보증공사(HUG) 전세보증금반환보증 청구서, 보증 이행 청구 사유서의 표준 분량, 첨부서류, 신청 절차를 공식 자료 기준으로 정리합니다.",
    targetKeywords: ["전세보증금 반환", "HUG 보증 청구", "전세보증보험", "보증금 반환 청구서", "주택도시보증공사"],
    category: "법률·행정 문서",
    tags: ["전세", "전세보증금", "HUG", "주택도시보증공사", "보증보험"],
    aeoQuestion: "전세보증금 반환 청구서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "주택도시보증공사(HUG)는 청구서 글자수를 규정하지 않습니다. 실무 표준은 사유서 부분 500~1,500자, 전체 A4 1~2장입니다. 임대차계약서 사본, 전입세대열람표, 보증금 미반환 증빙(내용증명 등)을 첨부합니다. 보증 이행 청구는 임대차 종료일로부터 1개월 이상 경과 후 신청 가능하며, HUG 지사·위탁은행 방문 또는 안심전세App·인터넷보증으로 접수할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "임대차 계약 해지 통지서 글자수", link: "/blog/lease-termination-notice-character-count" }
    ],
    outlinks: [
      { text: "주택도시보증공사 전세보증금반환보증", link: "https://www.khug.or.kr/hug/web/ig/dr/igdr000001.jsp", description: "HUG 전세보증금반환보증 상품 공식 안내" },
      { text: "HUG 보증이행 안내", link: "https://www.khug.or.kr/hug/web/ge/er/geer004001.jsp", description: "보증 이행 절차·서식 공식 자료" }
    ],
    content: `<p>전세보증금 반환 청구서에는 정해진 글자수 제한이 없습니다. 주택도시보증공사(HUG) 공식 양식 기준 사유서는 500~1,500자, 전체 A4 1~2장이 실무 표준입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
사유서 500~1,500자, 전체 A4 1~2장이 표준. 임대차계약서·전입세대열람표·내용증명 사본 등 증빙 첨부. 임대차 종료 후 1개월 경과 시 신청 가능. HUG 지사·위탁은행 방문 또는 안심전세App·인터넷보증 접수.
</div>

<h2>HUG 전세보증금반환보증이란</h2>
<p>주택도시보증공사가 운영하는 전세보증금반환보증은 임대인이 전세계약 종료 시 보증금을 돌려주지 못할 경우 HUG가 대신 임차인에게 보증금을 지급하는 상품입니다. 보증 가입 시 보증금 한도, 보증료, 가입 기간이 정해지며, 사고 발생 시 보증이행 절차를 거쳐 임차인이 보증금을 받게 됩니다.</p>

<h2>보증 이행 청구 단계별 절차</h2>
<p>HUG 공식 안내에 따르면 보증 이행 청구는 다음 단계로 진행됩니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">단계</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">내용</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">1. 계약 종료 통지</td>
<td style="border:1px solid #ddd;padding:8px 12px">임대인에게 해지·만료 통지(내용증명 권장)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">2. HUG 사고 신고</td>
<td style="border:1px solid #ddd;padding:8px 12px">계약 종료 1개월 경과 후 보증금 미반환 시 신고</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">3. 보증 이행 청구서 제출</td>
<td style="border:1px solid #ddd;padding:8px 12px">청구서 + 첨부서류 일괄 접수</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">4. HUG 심사</td>
<td style="border:1px solid #ddd;padding:8px 12px">보증사고 인정 여부 심사(평균 1~2개월)</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">5. 보증금 지급</td>
<td style="border:1px solid #ddd;padding:8px 12px">심사 통과 시 임차인 계좌로 입금</td>
</tr>
</tbody>
</table>
</div>

<h2>사유서 작성 요령 — 500~1,500자</h2>
<p>HUG 표준 양식의 사유서 부분은 임대차 종료 경위와 보증금 미반환 사실을 객관적으로 기재해야 합니다. 다음 4단 구성을 권장합니다.</p>

<ol>
<li><strong>임대차계약 개요(100~200자)</strong>: 계약 일자·보증금·임대인 정보</li>
<li><strong>계약 종료 경위(200~400자)</strong>: 만료 또는 해지 일자, 통지 방법</li>
<li><strong>보증금 반환 요구 경과(150~500자)</strong>: 임대인에게 보낸 내용증명, 응답 여부</li>
<li><strong>보증 이행 청구 사유(50~400자)</strong>: HUG에 이행을 청구하는 사유 정리</li>
</ol>

<h2>필수 첨부서류</h2>
<p>HUG는 보증사고 신청 시 다음 서류를 요구합니다.</p>

<ul>
<li><strong>임대차계약서 사본</strong>: 확정일자 날인 포함</li>
<li><strong>주민등록등본 또는 전입세대열람표</strong>: 대항력 입증용</li>
<li><strong>임대인 보증금 미반환 증빙</strong>: 내용증명 사본, 송달 증명서</li>
<li><strong>이사·점유이전 증빙</strong>: 새 임대차계약서 또는 매매계약서</li>
<li><strong>본인 신분증·인감증명서</strong>: 청구 본인 확인용</li>
</ul>

<h2>신청 채널별 비교</h2>
<p>HUG 공식 채널은 세 가지입니다. 사안의 복잡도에 따라 적합한 채널을 선택할 수 있습니다.</p>

<ul>
<li><strong>지사 방문</strong>: 복잡한 사안, 임차권등기명령 등 추가 절차 필요 시</li>
<li><strong>위탁은행</strong>: 우리·국민·신한·하나 등 전국 지점에서 접수 가능</li>
<li><strong>안심전세App·인터넷보증</strong>: 단순 사안에서 비대면 신청, 가장 빠른 처리</li>
</ul>

<h2>임차권등기명령과 병행하는 이유</h2>
<p>이사 가야 하는 경우, 대항력·우선변제권을 유지하려면 임차권등기명령을 함께 신청해야 합니다. 임차권등기가 완료되면 이사를 가더라도 보증금 채권이 보호되며, HUG 보증 청구와 병행해 진행할 수 있습니다.</p>

<h2>전세사기 의심 시 추가 절차</h2>
<p>최근 전세사기 피해가 증가하면서 정부는 별도 지원 절차를 마련했습니다. 보증금이 미반환되는 상황이 전세사기로 의심된다면 다음 절차를 병행 검토할 수 있습니다.</p>

<ul>
<li><strong>전세사기 피해자 결정 신청</strong>: 국토교통부 또는 지자체에 신청</li>
<li><strong>경찰 신고</strong>: 임대인의 사기 혐의가 명확한 경우</li>
<li><strong>경매·공매 우선매수권</strong>: 피해자로 인정되면 행사 가능</li>
<li><strong>긴급 주거 지원</strong>: LH·SH 임시 거처 신청</li>
</ul>

<h2>보증료와 보증한도 — 사전 점검 항목</h2>
<p>HUG 전세보증금반환보증은 보증금 한도와 보증료가 정해져 있습니다. 가입 전 임차주택의 시세, 선순위 권리관계, 임대인 신용 등을 확인해야 안전합니다. 안심전세App을 활용하면 임대인 정보·전세가율을 사전 점검할 수 있습니다.</p>

<h2>마무리</h2>
<p>전세보증금 반환 청구서는 사실관계를 객관적으로 정리하는 것이 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, <a href="/blog/certified-mail-content-character-count">내용증명 우편 작성 가이드</a>로 사전 통지 절차를 준비하면 보증 이행 청구 과정이 한결 수월해집니다. 표준 양식은 HUG 홈페이지 약관·서식·자료실에서 무료로 다운로드 가능합니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 주택도시보증공사·국토교통부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 HUG 콜센터(1566-9009) 또는 변호사에게 상담하시기 바랍니다.</p>`
  },
  {
    slug: "employment-contract-character-count",
    title: "근로계약서 작성 글자수 — 고용노동부 표준 근로계약서 분석",
    description: "근로기준법 제17조 기준 근로계약서 필수 기재사항, 고용노동부 표준 근로계약서 7종 분량, 서면 교부 의무를 정리합니다.",
    publishedAt: "2026-08-06T15:00:00+09:00",
    metaTitle: "근로계약서 작성 글자수 — 고용노동부 표준 근로계약서 7종 기준 (2026)",
    metaDescription: "근로기준법 제17조와 고용노동부 표준 근로계약서 기준 필수 기재사항, 분량, 서면 교부 의무를 정리합니다. 위반 시 500만원 이하 벌금.",
    targetKeywords: ["근로계약서 작성", "표준 근로계약서", "근로계약서 양식", "고용노동부 근로계약서", "근로계약 필수 기재"],
    category: "노동·고용 문서",
    tags: ["근로계약서", "고용노동부", "근로기준법", "노동법", "표준 근로계약서"],
    aeoQuestion: "근로계약서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "근로기준법은 글자수 제한이 아니라 필수 기재사항(임금·근로시간·휴일·연차유급휴가 등)을 규정합니다. 고용노동부 표준 근로계약서 7종 기준 A4 1~2장(약 800~1,500자) 분량이 실무 표준입니다. 사용자는 근로자에게 서면으로 교부해야 하며, 위반 시 500만원 이하 벌금이 부과됩니다. 표준 양식은 moel.go.kr에서 무료 다운로드 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "사직서 작성 분량 가이드", link: "/blog/resignation-letter-length" }
    ],
    outlinks: [
      { text: "고용노동부 표준 근로계약서 7종", link: "https://www.moel.go.kr/policy/policydata/view.do?bbs_seq=20190700008", description: "표준 근로계약서 7종 공식 다운로드" },
      { text: "고용노동부 근로계약서 안내", link: "https://www.moel.go.kr/mainpop2.do", description: "근로계약서 작성 공식 안내 페이지" }
    ],
    content: `<p>근로계약서에는 법령상 글자수 제한이 없습니다. 그러나 근로기준법 제17조는 필수 기재사항을 명시하며, 고용노동부 표준 근로계약서 7종 기준 A4 1~2장(약 800~1,500자) 분량이 실무 표준입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
A4 1~2장(약 800~1,500자)이 실무 표준. 임금·근로시간·휴일·연차유급휴가 등 필수 기재사항을 모두 포함. 사용자가 근로자에게 서면 교부해야 함(위반 시 500만원 이하 벌금). 표준 근로계약서 7종은 고용노동부 홈페이지에서 무료 다운로드.
</div>

<h2>근로기준법 제17조 — 필수 기재사항</h2>
<p>2012년 1월 근로기준법 개정에 따라 사용자는 주요 근로조건을 서면으로 명시하고 근로자의 요구와 관계없이 교부해야 합니다. 위반 시 500만원 이하 벌금이 부과됩니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">필수 기재사항</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">근거 조항</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">임금(구성 항목·계산 방법·지급 방법)</td>
<td style="border:1px solid #ddd;padding:8px 12px">근로기준법 제17조 제1항 제1호</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">소정근로시간</td>
<td style="border:1px solid #ddd;padding:8px 12px">제2호</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">휴일</td>
<td style="border:1px solid #ddd;padding:8px 12px">제3호</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">연차유급휴가</td>
<td style="border:1px solid #ddd;padding:8px 12px">제4호</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">취업 장소·종사 업무</td>
<td style="border:1px solid #ddd;padding:8px 12px">시행령 제8조</td>
</tr>
</tbody>
</table>
</div>

<h2>고용노동부 표준 근로계약서 7종</h2>
<p>고용노동부는 사업장 유형별로 표준 근로계약서를 제공합니다. 사용자는 본인 사업장에 맞는 양식을 선택해 활용할 수 있습니다.</p>

<ul>
<li><strong>표준 근로계약서(일반)</strong>: 정규직 근로자용</li>
<li><strong>기간제 근로자용</strong>: 계약 기간이 정해진 근로자</li>
<li><strong>연소근로자용(만 18세 미만)</strong>: 연소자 보호 조항 포함</li>
<li><strong>단시간 근로자용</strong>: 주 40시간 미만 근로자</li>
<li><strong>건설일용근로자용</strong>: 일당제 일용직</li>
<li><strong>외국인 근로자용</strong>: 한·영 또는 한·외국어 병기</li>
<li><strong>가사 근로자용</strong>: 가사근로자법 적용 근로자</li>
</ul>

<h2>분량보다 중요한 — 명확성</h2>
<p>표준 근로계약서는 분량보다 다음 5개 항목의 명확성이 핵심입니다.</p>

<ol>
<li><strong>임금</strong>: 기본급·수당·상여·계산방법을 구체적 금액으로 표시</li>
<li><strong>근로시간</strong>: 시업·종업 시각, 휴게시간 명시</li>
<li><strong>휴일</strong>: 주휴일, 공휴일 적용 여부</li>
<li><strong>연차</strong>: 연차유급휴가 일수, 사용 절차</li>
<li><strong>업무</strong>: 종사 업무 내용 구체화</li>
</ol>

<h2>서면 교부 의무 — 위반 시 처벌</h2>
<p>근로기준법 제17조는 단순한 권고가 아니라 의무입니다. 사용자가 근로계약서를 작성하지 않거나 교부하지 않으면 500만원 이하 벌금에 처해집니다. 또한 근로자가 고용노동부에 신고하면 임금체불·부당해고 등 다른 분쟁에서도 불리하게 작용합니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>전자 근로계약서도 유효</strong><br>
전자서명법에 따라 전자서명을 한 전자 근로계약서도 서면 교부와 동일한 효력이 있습니다. 다만 근로자가 출력·저장할 수 있는 형태로 제공되어야 합니다.
</div>

<h2>실무에서 자주 빠뜨리는 항목</h2>
<p>고용노동부 근로감독 통계에 따르면 다음 항목이 가장 자주 누락됩니다.</p>

<ul>
<li><strong>임금 구성 항목 세부 명시</strong>: 기본급 외 수당의 종류·금액</li>
<li><strong>휴게시간 명시</strong>: 4시간 이상 근로 시 30분, 8시간 이상 1시간</li>
<li><strong>연차유급휴가 산정 방식</strong>: 입사 1년 미만의 월차 발생 기준</li>
<li><strong>퇴직금 지급 방식</strong>: DC형·DB형·IRP 등 명시</li>
</ul>

<h2>근로계약 변경 시 — 새 계약서 작성</h2>
<p>임금·근로시간·근로 장소 등 주요 근로조건이 변경되면 새 근로계약서를 작성해 교부해야 합니다. 부속 합의서·근로조건 변경 통지서 형태로도 가능하지만, 변경된 조건이 명확히 기재되어야 합니다. 변경 사항을 구두 통보로만 처리하면 사용자가 근로기준법 위반으로 처벌될 수 있습니다.</p>

<h2>외국인 근로자용 — 한·영 또는 다국어 병기 의무</h2>
<p>외국인근로자의 고용 등에 관한 법률 시행규칙 별표 양식은 한국어와 모국어를 병기하도록 요구합니다. 영어·중국어·베트남어·인도네시아어 등 송출국별 양식이 별도로 마련되어 있으며, 외국인고용관리시스템(EPS) 또는 고용노동부 홈페이지에서 다운로드할 수 있습니다.</p>

<h2>마무리</h2>
<p>근로계약서는 분량보다 명확성과 서면 교부가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 항목별 분량을 점검하고, <a href="/tools/text-formatter">텍스트 정리 도구</a>로 형식을 다듬으면 근로감독에서도 안전합니다. 표준 양식은 고용노동부 홈페이지 정책자료실에서 무료로 받을 수 있습니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 근로기준법·고용노동부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 공인노무사 또는 고용노동부 고객상담센터(국번 없이 1350)에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "resignation-letter-length",
    title: "사직서 작성 분량 가이드 — 인사담당자가 보는 핵심 요소",
    description: "사직서 작성 표준 분량, 인적사항·사직 사유·퇴직 예정일 등 인사담당자가 확인하는 5개 핵심 항목을 정리합니다.",
    publishedAt: "2026-08-06T20:00:00+09:00",
    metaTitle: "사직서 작성 분량 가이드 — 인사담당자가 보는 5개 핵심 (2026)",
    metaDescription: "사직서 표준 분량과 인사담당자가 확인하는 인적사항·소속·사직 사유·퇴직 예정일·인수인계 5개 핵심 요소를 정리합니다.",
    targetKeywords: ["사직서 작성", "사직서 양식", "사직서 분량", "사직서 사유", "퇴사 사직서"],
    category: "노동·고용 문서",
    tags: ["사직서", "퇴직", "인사", "직장", "노동법"],
    aeoQuestion: "사직서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "사직서는 법령상 정해진 양식·분량이 없습니다. 실무 표준은 A4 1장 이내(약 300~800자)로 간결하게 작성하는 것입니다. 인사담당자는 ① 인적사항·소속, ② 사직 사유, ③ 퇴직 예정일, ④ 인수인계 사항, ⑤ 본인 서명을 확인합니다. 사직 사유는 '일신상의 사유'와 같이 간결하게 적는 것이 일반적이며, 회사 양식이 있다면 그것을 우선 사용합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "근로계약서 작성 글자수", link: "/blog/employment-contract-character-count" }
    ],
    outlinks: [
      { text: "고용노동부 노동법 안내", link: "https://www.moel.go.kr/mainpop2.do", description: "근로기준법·퇴직 관련 공식 자료" },
      { text: "찾기쉬운 생활법령 근로자 퇴직", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=575&ccfNo=1&cciNo=1&cnpClsNo=1", description: "퇴직 절차·사직서 작성 공식 안내" }
    ],
    content: `<p>사직서에는 법령상 정해진 양식·분량이 없습니다. 실무 표준은 A4 1장 이내(약 300~800자)로 간결하게 작성하는 것입니다. 회사 사규에 정해진 양식이 있다면 그것을 우선 사용합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
A4 1장 이내(약 300~800자)가 실무 표준. 인적사항·소속·사직 사유·퇴직 예정일·인수인계·서명 5요소 필수. 사유는 '일신상의 사유'로 간결하게. 회사 표준 양식이 있으면 우선 사용.
</div>

<h2>사직서 필수 5개 항목</h2>
<p>인사담당자가 확인하는 핵심 항목은 다음 5가지입니다. 어느 하나라도 빠지면 인사 처리가 지연됩니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">작성 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">인적사항</td>
<td style="border:1px solid #ddd;padding:8px 12px">성명·생년월일·사번</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">30~50자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">소속·직위</td>
<td style="border:1px solid #ddd;padding:8px 12px">부서·팀·직급·입사일</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">30~50자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">사직 사유</td>
<td style="border:1px solid #ddd;padding:8px 12px">'일신상의 사유' 등 간결하게</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~200자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">퇴직 예정일</td>
<td style="border:1px solid #ddd;padding:8px 12px">사규에 따른 통보 기간 준수</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">20~40자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">인수인계·반납</td>
<td style="border:1px solid #ddd;padding:8px 12px">출입증·사원증·업무 자료</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~300자</td>
</tr>
</tbody>
</table>
</div>

<h2>사직 사유 작성 — 간결할수록 좋다</h2>
<p>실무에서 사직 사유는 '일신상의 사유'와 같이 간결하게 적는 것이 일반적입니다. 다음 표현이 권장됩니다.</p>

<ul>
<li>일신상의 사유로 인하여 사직하고자 합니다</li>
<li>개인적인 사정으로 사직을 신청합니다</li>
<li>건강상의 이유로 사직하고자 합니다</li>
<li>학업 진학을 위하여 사직을 신청합니다</li>
</ul>

<p>구체적 갈등·불만을 사직서에 적으면 후속 분쟁(부당해고 진정·실업급여 신청)에서 불리하게 작용할 수 있습니다. 정말 회사 사유로 인한 퇴사라면 '회사 측 사정에 의한 권고사직'으로 명시해야 실업급여 수급에 유리합니다.</p>

<h2>퇴직 예정일 — 통보 기간 준수</h2>
<p>근로기준법은 사직 통보 기간을 별도로 규정하지 않습니다. 그러나 민법 제660조에 따라 일반적으로 사직 의사 통지 후 1개월 또는 사규에 정한 기간이 경과해야 사직의 효력이 발생합니다.</p>

<ul>
<li><strong>일반 사규</strong>: 통상 30일 전 통보</li>
<li><strong>임원·관리직</strong>: 60일 전 통보 사례 다수</li>
<li><strong>긴급 사정</strong>: 인사부와 협의해 단축 가능</li>
</ul>

<h2>권고사직 vs 자진사직 — 실업급여 차이</h2>
<p>사직서 사유 기재가 실업급여 수급에 직접 영향을 줍니다. 자진 사직은 원칙적으로 실업급여 수급이 불가능하지만, 권고사직(회사 측 사정에 의한 사직)은 수급 대상입니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>실업급여 수급 가능 사유</strong><br>
권고사직, 회사 폐업·도산, 임금 체불 2개월 이상, 사업장 이전으로 통근 곤란, 부당한 차별·괴롭힘 등이 포함됩니다. 자세한 기준은 고용노동부 고객상담센터(1350)로 확인하세요.
</div>

<h2>제출 방법 — 서면 원칙, 전자 가능</h2>
<p>사직서는 서면 제출이 원칙입니다. 다만 회사 사규에 따라 전자결재·이메일 제출도 인정됩니다. 후속 분쟁 대비를 위해 다음 사항을 권장합니다.</p>

<ol>
<li>원본 서면 사직서를 직속 상사·인사팀에 직접 제출</li>
<li>본인 사본을 보관(서명·날짜 포함)</li>
<li>이메일 제출 시 회신·수신 확인 보관</li>
<li>퇴직 예정일과 인수인계 일정을 문서로 합의</li>
</ol>

<h2>사직서 철회 — 회사 승낙 전까지 가능</h2>
<p>민법상 사직 의사표시는 회사가 승낙(수리)하기 전까지 자유롭게 철회할 수 있습니다. 대법원 판례도 같은 입장입니다. 다만 사직서가 수리된 후에는 회사와 별도 합의가 없는 한 철회가 어렵습니다. 충동적으로 사직서를 제출하지 않도록, 작성 후 1~2일 정도 검토 시간을 갖는 것이 권장됩니다.</p>

<h2>퇴직 후 받아야 할 서류 4종</h2>
<p>퇴사 시 회사에 요청해야 하는 서류는 다음과 같습니다.</p>

<ul>
<li><strong>이직확인서</strong>: 실업급여 신청 시 필수</li>
<li><strong>근로소득 원천징수영수증</strong>: 연말정산·다음 직장 입사 시</li>
<li><strong>경력증명서</strong>: 이직 시 활용</li>
<li><strong>퇴직금 지급 명세서</strong>: 퇴직금 수령 후</li>
</ul>

<h2>마무리</h2>
<p>사직서는 짧고 명확할수록 인사 처리가 빠릅니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 분량을 확인하고, <a href="/blog/employment-contract-character-count">근로계약서 작성 가이드</a>로 사규상 통보 기간을 미리 점검하시면 매끄러운 퇴사가 가능합니다. 실업급여 수급을 고려한다면 고용노동부 고객상담센터(1350)에 사유 표현을 미리 상담받는 것이 안전합니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 근로기준법·민법·고용노동부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 공인노무사 또는 고용노동부 고객상담센터(1350)에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "official-apology-letter-length",
    title: "시말서 작성 글자수 — 직장 내 공식 사과문 표준 형식",
    description: "시말서 작성 분량, 사건 경위·반성·재발 방지 3단 구성, 인사 처분 시 활용되는 표준 형식을 정리합니다.",
    publishedAt: "2026-08-07T01:00:00+09:00",
    metaTitle: "시말서 작성 글자수 — 사건 경위·반성·재발 방지 표준 형식 (2026)",
    metaDescription: "시말서 표준 분량, 사건 경위·반성·재발 방지 3단 구성, 직장 내 공식 사과문 작성법과 인사 처분 시 활용을 정리합니다.",
    targetKeywords: ["시말서 작성", "시말서 양식", "직장 사과문", "시말서 분량", "재발 방지"],
    category: "노동·고용 문서",
    tags: ["시말서", "직장", "사과문", "인사", "징계"],
    aeoQuestion: "시말서는 몇 자로 써야 하나요?",
    aeoAnswer: "시말서는 법령상 양식·분량이 없습니다. 실무 표준은 A4 1장(약 500~1,200자)으로, 인적사항·사건 경위·반성·재발 방지 대책 4단 구성이 일반적입니다. 사건 경위는 육하원칙으로 객관 기술, 반성은 진정성 있게, 재발 방지 대책은 구체적·실행 가능하게 작성합니다. 회사 사규에 시말서 양식이 있다면 그것을 우선 따르고, 변명·책임 회피 표현은 피해야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "사직서 작성 분량 가이드", link: "/blog/resignation-letter-length" }
    ],
    outlinks: [
      { text: "고용노동부 노동법 안내", link: "https://www.moel.go.kr/mainpop2.do", description: "직장 내 징계·인사 처분 관련 노동법" },
      { text: "찾기쉬운 생활법령 노동법", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=575", description: "근로자 권리·의무 공식 안내" }
    ],
    content: `<p>시말서(始末書)는 법령상 양식·분량이 없습니다. 실무 표준은 A4 1장(약 500~1,200자)이며, 인적사항·사건 경위·반성·재발 방지 4단 구성이 일반적입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
A4 1장(약 500~1,200자)이 실무 표준. 인적사항·사건 경위·반성·재발 방지 4단 구성. 사건은 육하원칙으로 객관 기술, 반성은 진정성, 재발 방지는 구체적으로. 변명·책임 회피 표현 금지.
</div>

<h2>시말서란 — 사과문이자 재발 방지 의지 표명</h2>
<p>시말서는 직무상 과실·규정 위반·실수 등으로 회사에 손해 또는 신뢰 손상을 입혔을 때 작성하는 공식 문서입니다. 일반적인 보고서와 달리 ① 사실 설명, ② 반성, ③ 재발 방지의 구조를 갖춥니다. 인사 위원회의 징계 결정 자료로 활용되거나 인사기록에 보존되므로 신중히 작성해야 합니다.</p>

<h2>표준 4단 구성</h2>
<p>실무에서 활용되는 시말서 양식은 다음 구성을 따릅니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">단계</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">작성 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">1. 인적사항</td>
<td style="border:1px solid #ddd;padding:8px 12px">성명·소속·직위·사번</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">30~80자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">2. 사건 경위</td>
<td style="border:1px solid #ddd;padding:8px 12px">육하원칙으로 객관 기술</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~500자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">3. 반성</td>
<td style="border:1px solid #ddd;padding:8px 12px">잘못 인정과 진정한 사과</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~300자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">4. 재발 방지 대책</td>
<td style="border:1px solid #ddd;padding:8px 12px">구체적·실행 가능한 계획</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~300자</td>
</tr>
</tbody>
</table>
</div>

<h2>사건 경위 — 육하원칙 객관 기술</h2>
<p>경위 부분은 누가·언제·어디서·무엇을·어떻게·왜의 6원칙을 따릅니다. 감정 표현이나 책임 회피성 서술은 피해야 합니다.</p>

<ul>
<li><strong>언제</strong>: 사건 발생 일시(연월일·시각)</li>
<li><strong>어디서</strong>: 사건 발생 장소(사무실·현장·외근지)</li>
<li><strong>누가</strong>: 본인을 비롯한 관련 인원</li>
<li><strong>무엇을</strong>: 발생한 사실·결과</li>
<li><strong>어떻게</strong>: 사건 진행 과정</li>
<li><strong>왜</strong>: 본인 판단 또는 절차 누락 등 원인</li>
</ul>

<h2>반성 부분 — 진정성이 핵심</h2>
<p>반성 부분은 변명이나 환경 탓을 피하고, 본인 책임을 인정하는 것이 핵심입니다. 권장 표현은 다음과 같습니다.</p>

<ul>
<li>"본인의 부주의로 인하여..."</li>
<li>"규정을 충분히 숙지하지 못한 책임을 통감합니다"</li>
<li>"회사에 끼친 손해에 대해 깊이 사죄드립니다"</li>
</ul>

<div style="background:#fee2e2;border-left:4px solid #ef4444;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>피해야 할 표현</strong><br>
"~때문에 어쩔 수 없이", "다른 사람도 그러는데", "본의 아니게" 등은 책임 회피로 비춰져 인사 위원회에서 불리하게 작용할 수 있습니다.
</div>

<h2>재발 방지 대책 — 구체적·실행 가능</h2>
<p>재발 방지 대책은 추상적 다짐(앞으로 잘하겠다 등)이 아니라 구체적 실행 계획이어야 합니다.</p>

<ul>
<li>"매일 업무 시작 전 체크리스트로 점검 절차를 확인하겠습니다"</li>
<li>"동일 업무 처리 전 직속 상사에게 사전 보고하는 절차를 도입하겠습니다"</li>
<li>"관련 사내 교육을 OO일까지 이수하겠습니다"</li>
<li>"매주 금요일 본인 업무 일지를 작성해 자가 점검하겠습니다"</li>
</ul>

<h2>시말서 vs 경위서 vs 사과문</h2>
<p>유사 문서들과의 차이를 정리하면 다음과 같습니다.</p>

<ul>
<li><strong>시말서</strong>: 사건 경위 + 반성 + 재발 방지 (인사 처분 자료)</li>
<li><strong>경위서</strong>: 사건 경위만 객관 기술 (사실 확인 자료)</li>
<li><strong>사과문</strong>: 사과의 의사만 표명 (대외용·고객용)</li>
</ul>

<h2>시말서 강요와 노동법 — 부당 징계 판단 기준</h2>
<p>회사가 부당하게 시말서를 강요하거나, 사실관계 확인 없이 일방적으로 작성을 요구하는 경우 부당 징계로 다툴 여지가 있습니다. 근로기준법 제23조는 정당한 이유 없는 징계를 금지하며, 부당 징계는 노동위원회 구제 신청 대상이 됩니다. 시말서 작성을 요구받았을 때는 다음을 확인하세요.</p>

<ul>
<li>회사 사규의 징계 절차가 준수되었는가</li>
<li>본인 소명 기회가 보장되었는가</li>
<li>유사 사례에서 동일하게 처리되었는가(평등 원칙)</li>
<li>징계 수위가 비례원칙에 부합하는가</li>
</ul>

<h2>제출 후 보관과 활용</h2>
<p>제출한 시말서는 본인 사본을 반드시 보관해야 합니다. 인사기록부에 보존되는 기간은 회사 사규에 따라 다르지만 통상 3~5년입니다. 같은 사안으로 향후 다른 처분이 내려질 경우 시말서 내용이 근거가 될 수 있어, 본인 입장 일관성을 유지하는 것이 중요합니다.</p>

<h2>마무리</h2>
<p>시말서는 분량보다 진정성과 구체성이 평가를 좌우합니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 분량을 점검하고, <a href="/tools/text-formatter">텍스트 정리 도구</a>로 줄바꿈을 다듬으면 인사 위원회 검토 단계에서도 정돈된 인상을 줍니다. 회사 사규에 표준 시말서 양식이 있다면 반드시 그것을 따라 작성하세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 노동 관련 공식 자료를 정리·요약한 결과입니다. 징계 절차가 부당하다고 판단되는 경우 공인노무사 또는 노동위원회 상담을 권합니다.</p>`
  },
  {
    slug: "leave-application-letter-length",
    title: "휴직 신청서 작성법 — 육아·간병·학업 사유별 분량 가이드",
    description: "남녀고용평등법·근로기준법 기준 육아휴직·가족돌봄휴직·학업휴직 신청서 분량과 사유별 작성 포인트를 정리합니다.",
    publishedAt: "2026-08-07T06:00:00+09:00",
    metaTitle: "휴직 신청서 작성법 — 육아·간병·학업 사유별 분량 가이드 (2026)",
    metaDescription: "남녀고용평등법·근로기준법 기준 육아휴직·가족돌봄휴직·학업휴직 신청서의 표준 분량과 사유별 작성 포인트, 고용보험 급여 신청 절차를 정리합니다.",
    targetKeywords: ["휴직 신청서", "육아휴직 신청", "가족돌봄휴직", "학업휴직", "휴직 양식"],
    category: "노동·고용 문서",
    tags: ["휴직", "육아휴직", "가족돌봄휴직", "남녀고용평등법", "고용보험"],
    aeoQuestion: "휴직 신청서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "휴직 신청서는 법령상 분량 제한이 없습니다. 실무 표준은 A4 1장(약 400~1,000자)으로, 인적사항·휴직 사유·시작일·종료일·복귀 예정일·연락처를 명시합니다. 육아휴직은 고용보험 별지 제41호 서식, 가족돌봄휴직은 시행규칙 별표 양식을 사용합니다. 사유에 따라 첨부 서류가 다르므로 사전에 인사팀과 협의가 필요합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "근로계약서 작성 글자수", link: "/blog/employment-contract-character-count" }
    ],
    outlinks: [
      { text: "고용노동부 육아휴직 안내", link: "https://www.moel.go.kr/news/notice/noticeView.do?bbs_seq=20250100161", description: "출산휴가·육아휴직 통합신청 공식 안내" },
      { text: "고용보험 육아휴직급여 신청", link: "https://1350.moel.go.kr/home/hp/counsel/csinfo.do?cs_idx=7", description: "고용노동부 고객상담센터 모성보호 안내" }
    ],
    content: `<p>휴직 신청서에는 법령상 분량 제한이 없습니다. 실무 표준은 A4 1장(약 400~1,000자)이며, 사유별로 사용해야 할 표준 양식이 다릅니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
A4 1장(약 400~1,000자)이 실무 표준. 인적사항·사유·시작일·종료일·복귀 예정일·연락처 6요소 포함. 육아휴직은 고용보험 별지 제41호 서식, 가족돌봄휴직은 별도 시행규칙 양식 사용. 첨부 서류는 사유별로 달라 인사팀과 사전 협의 필요.
</div>

<h2>휴직 유형별 법적 근거와 양식</h2>
<p>휴직 사유에 따라 적용 법령과 양식이 다릅니다. 주요 휴직 유형을 정리하면 다음과 같습니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">휴직 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">근거 법령</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">기간</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">육아휴직</td>
<td style="border:1px solid #ddd;padding:8px 12px">남녀고용평등법 제19조</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 1년</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">육아기 근로시간 단축</td>
<td style="border:1px solid #ddd;padding:8px 12px">남녀고용평등법 제19조의2</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">최대 1년</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">가족돌봄휴직</td>
<td style="border:1px solid #ddd;padding:8px 12px">남녀고용평등법 제22조의2</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">연 90일</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">가족돌봄휴가</td>
<td style="border:1px solid #ddd;padding:8px 12px">남녀고용평등법 제22조의2</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">연 10일</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">병가·학업 등 일반 휴직</td>
<td style="border:1px solid #ddd;padding:8px 12px">회사 사규</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">사규에 따름</td>
</tr>
</tbody>
</table>
</div>

<h2>육아휴직 신청서 — 별지 제41호 서식</h2>
<p>국가법령정보센터에 공시된 남녀고용평등법 시행규칙 별지 제41호 서식이 표준입니다. 다음 항목을 모두 기재해야 합니다.</p>

<ul>
<li><strong>인적사항</strong>: 신청자 성명·생년월일·소속·연락처</li>
<li><strong>자녀 정보</strong>: 자녀 성명·생년월일(만 8세 이하 또는 초등학교 2학년 이하)</li>
<li><strong>휴직 기간</strong>: 시작일·종료일</li>
<li><strong>분할 사용 여부</strong>: 2회까지 분할 사용 가능</li>
<li><strong>첨부 서류</strong>: 가족관계증명서, 주민등록등본</li>
</ul>

<p>사업주는 30일 전까지 신청을 받아 검토하며, 정당한 사유 없이 거부할 수 없습니다(남녀고용평등법 제19조 제1항).</p>

<h2>가족돌봄휴직 신청서 — 시행규칙 별표 양식</h2>
<p>가족돌봄휴직은 부모·배우자·자녀·배우자의 부모가 질병·사고·노령으로 돌봄이 필요한 경우 신청할 수 있습니다. 신청서 본문에는 다음을 포함합니다.</p>

<ol>
<li>돌봄 대상자 인적사항(관계·성명·연령)</li>
<li>돌봄이 필요한 사유(질병명·간병 필요성)</li>
<li>휴직 기간(연 최대 90일, 1회 30일 이상)</li>
<li>첨부: 진단서·소견서, 가족관계증명서</li>
</ol>

<h2>학업 휴직 — 회사 사규 우선</h2>
<p>학업·자기계발 휴직은 법령상 강제 사항이 아니며, 회사 사규에 따라 인정됩니다. 신청서에는 다음을 명시합니다.</p>

<ul>
<li>학업 목적(학위 과정·자격증·연수)</li>
<li>학업 기관·과정명·기간</li>
<li>휴직 시작일·종료일</li>
<li>복귀 후 활용 계획(회사 기여 가능성)</li>
</ul>

<h2>고용보험 급여 신청 — 별도 절차</h2>
<p>육아휴직 급여는 회사 신청과 별개로 고용보험에 직접 신청해야 합니다. 휴직 시작일 이후 1개월부터 종료 후 12개월 이내에 신청 가능합니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>고용보험 신청 채널</strong><br>
온라인: 고용보험 홈페이지(ei.go.kr) 또는 고용보험 모바일 앱<br>
오프라인: 거주지 관할 고용센터 방문·우편<br>
사업주의 '육아휴직 확인서' 제출이 선행되어야 신청 가능
</div>

<h2>휴직 시 불이익 — 법적으로 금지</h2>
<p>남녀고용평등법 제19조 제3항은 육아휴직을 이유로 한 해고·불이익 처우를 명백히 금지합니다. 위반 시 사업주는 3년 이하 징역 또는 3,000만원 이하 벌금이 부과됩니다. 가족돌봄휴직도 동일한 보호가 적용됩니다.</p>

<h2>복귀 시점 — 동일 또는 유사 직무 보장</h2>
<p>법령은 휴직 종료 시점에 사업주가 휴직 전과 동일한 업무 또는 동등한 수준의 임금이 지급되는 직무에 복귀시키도록 의무화합니다. 복귀 직무가 현저히 낮아진 경우 부당전직으로 노동위원회 구제 신청이 가능합니다. 복귀 1주일 전 인사팀에 일정·직무 배치를 확인하는 것이 권장됩니다.</p>

<h2>휴직 사유별 추가 팁</h2>
<ul>
<li><strong>육아휴직</strong>: 부모 모두 사용 시 두 번째 사용자에게 첫 3개월 통상임금 100% 지급(3+3 부모육아휴직제)</li>
<li><strong>가족돌봄</strong>: 회사가 정당한 사유 없이 거부하면 노동위원회 구제 신청</li>
<li><strong>학업 휴직</strong>: 회사 기여 가능성을 강조해 인사팀 설득에 활용</li>
<li><strong>병가</strong>: 진단서·소견서 첨부, 사규의 병가 일수 한도 확인</li>
</ul>

<h2>마무리</h2>
<p>휴직 신청서는 짧고 명확할수록 인사 처리가 매끄럽습니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 분량을 점검하고, 사유별 표준 양식은 고용노동부 홈페이지 또는 사내 인사팀에서 받으시길 권장합니다. 급여 신청은 고용보험 홈페이지에서 별도 진행해야 한다는 점을 기억하세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 남녀고용평등법·근로기준법·고용노동부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 공인노무사 또는 고용노동부 고객상담센터(1350)에 문의하시기 바랍니다.</p>`
  },
];
