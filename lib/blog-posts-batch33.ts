import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH33: BlogPost[] = [
  {
    slug: "industrial-accident-claim-form-length",
    title: "산재 신청서 작성 가이드 — 근로복지공단 표준 양식 분량",
    description: "근로복지공단 요양급여신청서 27개 항목 기준 작성 분량, 재해 경위 기재 방법, 사업주 확인 절차를 정리합니다.",
    publishedAt: "2026-08-07T11:00:00+09:00",
    metaTitle: "산재 신청서 작성 가이드 — 근로복지공단 27개 항목 양식 (2026)",
    metaDescription: "근로복지공단 요양급여신청서(27개 항목 축소판) 작성 분량, 재해발생 경위서·초진소견서 첨부, 의료기관 대행 접수 절차를 정리합니다.",
    targetKeywords: ["산재 신청서", "요양급여 신청서", "근로복지공단 산재", "재해발생 경위서", "산업재해보상"],
    category: "노동·고용 문서",
    tags: ["산재", "요양급여", "근로복지공단", "산업재해보상", "노동법"],
    aeoQuestion: "산재 신청서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "근로복지공단 요양급여신청서는 2019년 개편으로 45개에서 27개 항목으로 축소되었으며, 굵은 선으로 표시된 필수 항목만 작성하면 됩니다. 실무 표준은 A4 2~3장으로, 재해발생 경위는 500~1,500자로 육하원칙에 따라 기재합니다. 초진소견서와 사업주의 재해발생 경위 확인서를 첨부해 근로복지공단 지사에 제출하거나, 산재보험 지정 의료기관 원무과에서 대행 접수할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "근로계약서 작성 글자수", link: "/blog/employment-contract-character-count" }
    ],
    outlinks: [
      { text: "근로복지공단 산재 신청 안내", link: "https://www.comwel.or.kr/comwel/comp/recu/appl01.jsp", description: "산재인정 절차·신청 방법 공식 안내" },
      { text: "찾기쉬운 생활법령 요양급여", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=575&ccfNo=2&cciNo=2&cnpClsNo=2", description: "산재 요양급여 신청 절차 안내" }
    ],
    content: `<p>산재 신청서(요양급여신청서)는 2019년 양식 개편으로 45개에서 27개 항목으로 축소되었습니다. 실무 표준은 A4 2~3장이며, 재해발생 경위는 500~1,500자로 작성합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
A4 2~3장이 실무 표준. 재해발생 경위 500~1,500자, 육하원칙에 따라 기재. 굵은 선으로 표시된 항목만 필수. 초진소견서 + 사업주 재해경위 확인서 첨부. 산재 지정 의료기관 원무과에서 대행 접수 가능.
</div>

<h2>요양급여신청서 — 27개 항목 구성</h2>
<p>근로복지공단 공식 안내에 따르면 신청서는 다음 4개 블록으로 구성됩니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">블록</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기재 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">신청인 정보</td>
<td style="border:1px solid #ddd;padding:8px 12px">성명·생년월일·연락처·계좌</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">80~150자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">사업장 정보</td>
<td style="border:1px solid #ddd;padding:8px 12px">사업장명·주소·관리번호</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">60~120자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">재해 정보</td>
<td style="border:1px solid #ddd;padding:8px 12px">재해일시·장소·재해유형</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~250자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">재해발생 경위</td>
<td style="border:1px solid #ddd;padding:8px 12px">육하원칙 객관 기술</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500~1,500자</td>
</tr>
</tbody>
</table>
</div>

<h2>재해발생 경위 — 가장 중요한 부분</h2>
<p>경위서는 산재 인정 여부를 좌우합니다. 육하원칙에 따라 다음 8개 요소를 빠짐없이 기재합니다.</p>

<ol>
<li><strong>일시</strong>: 사고 발생 연월일·시각(가능하면 분 단위)</li>
<li><strong>장소</strong>: 사업장 내 구체적 위치</li>
<li><strong>본인 업무</strong>: 사고 당시 수행 중이던 업무</li>
<li><strong>지시 여부</strong>: 회사 지시 또는 본인 판단</li>
<li><strong>사고 발생 과정</strong>: 단계별로 시간 순 기술</li>
<li><strong>부상 부위·정도</strong>: 의학적으로 표현(타박상·골절·열상 등)</li>
<li><strong>응급 조치</strong>: 사고 직후 본인·동료의 대응</li>
<li><strong>목격자</strong>: 동료 목격자 성명·연락처</li>
</ol>

<h2>첨부 서류</h2>
<p>요양급여신청서와 함께 다음 서류를 제출해야 합니다.</p>

<ul>
<li><strong>초진소견서</strong>: 의료기관에서 발급(소정 양식)</li>
<li><strong>사업주 재해발생 경위 확인서</strong>: 사업주 서명·날인</li>
<li><strong>본인 신분증·통장 사본</strong>: 본인 확인 및 급여 지급용</li>
<li><strong>목격자 진술서</strong>: 사고 입증 보강(선택)</li>
<li><strong>CCTV 자료·사진</strong>: 사고 입증 보강(선택)</li>
</ul>

<h2>사업주가 확인을 거부할 때</h2>
<p>사업주가 산재 신청을 만류하거나 재해경위 확인서 작성을 거부할 수 있습니다. 이때 신청인은 사업주 확인 없이 단독으로 신청 가능하며, 공단이 별도로 사업주에게 사실 조사를 진행합니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>공단 직권조사 신청</strong><br>
사업주 협조 거부 시 신청서에 '사업주 확인 거부'라고 표시하고, 거부 경위를 메모로 첨부합니다. 공단이 직권으로 산재보험 가입 여부와 재해 발생 경위를 조사합니다.
</div>

<h2>의료기관 대행 접수</h2>
<p>치료 중인 의료기관이 산재보험 지정 의료기관이라면 원무과에서 신청서 작성을 도와주고, 환자 동의 시 신청서를 대행 접수해줍니다. 처음 산재를 신청하는 근로자는 의료기관 대행 접수가 가장 편리합니다.</p>

<h2>인정 후 받게 되는 급여</h2>
<p>산재로 인정되면 다음 급여를 받습니다.</p>

<ul>
<li><strong>요양급여</strong>: 치료비 전액(본인부담 없음)</li>
<li><strong>휴업급여</strong>: 평균임금의 70%(요양 기간 중)</li>
<li><strong>장해급여</strong>: 후유장해 등급별 일시금 또는 연금</li>
<li><strong>유족급여</strong>: 사망 시 유족에게 지급</li>
<li><strong>간병급여</strong>: 간병이 필요한 경우</li>
</ul>

<h2>심사 기간과 불승인 시 절차</h2>
<p>공단은 신청 접수 후 평균 7일 이내에 심사 결과를 통보하지만, 사고 경위가 복잡하거나 추가 조사가 필요한 경우 1~3개월이 걸릴 수 있습니다. 불승인 결정을 받으면 다음 절차를 단계적으로 활용할 수 있습니다.</p>

<ol>
<li><strong>심사청구</strong>: 결정 통지 후 90일 이내, 근로복지공단 내부 심사</li>
<li><strong>재심사청구</strong>: 심사청구 결과에 대해 산업재해보상보험재심사위원회에 청구</li>
<li><strong>행정소송</strong>: 재심사 후에도 불복 시 행정법원에 소제기</li>
</ol>

<h2>출퇴근 재해와 업무상 질병</h2>
<p>전통적인 작업 중 사고 외에도 다음 유형이 산재로 인정됩니다.</p>

<ul>
<li><strong>출퇴근 재해</strong>: 통상의 경로·방법으로 출퇴근 중 사고(2018년 이후 인정)</li>
<li><strong>업무상 질병</strong>: 직업성 질환·과로사·정신질환 등(의학적 인과관계 입증 필요)</li>
<li><strong>회식·체육행사</strong>: 사용자 지시·기획의 사업 행사 중 사고</li>
<li><strong>출장 중 재해</strong>: 출장 업무 수행 중 발생한 사고</li>
</ul>

<h2>마무리</h2>
<p>산재 신청서는 경위서의 구체성이 인정률을 결정합니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 경위서 분량을 점검하고, <a href="/tools/whitespace-cleaner">공백 정리 도구</a>로 형식을 다듬으면 공단 심사 단계에서도 정돈된 인상을 줍니다. 본인 단독 신청이 어려운 경우 산재보험 지정 의료기관 원무과 또는 공인노무사의 도움을 받는 것이 효과적입니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 산업재해보상보험법·근로복지공단·고용노동부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 공인노무사 또는 근로복지공단(1588-0075)에 상담하시기 바랍니다.</p>`
  },
  {
    slug: "severance-pay-claim-letter-length",
    title: "퇴직금 청구서 작성법 — 고용노동부 권장 양식과 글자수",
    description: "근로자퇴직급여보장법 기준 퇴직금 청구서 분량, 평균임금 산정 항목, 14일 지급 의무 위반 시 진정·고소 절차를 정리합니다.",
    publishedAt: "2026-08-07T16:00:00+09:00",
    metaTitle: "퇴직금 청구서 작성법 — 근로기준법 14일 지급 의무 기준 (2026)",
    metaDescription: "근로자퇴직급여보장법 기준 퇴직금 청구서 표준 분량, 평균임금·통상임금 비교, 14일 지급 의무 위반 시 진정·고소 절차를 정리합니다.",
    targetKeywords: ["퇴직금 청구서", "퇴직금 지급", "퇴직금 계산", "근로자퇴직급여보장법", "퇴직금 미지급"],
    category: "노동·고용 문서",
    tags: ["퇴직금", "근로기준법", "퇴직급여보장법", "고용노동부", "임금"],
    aeoQuestion: "퇴직금 청구서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "퇴직금 청구서는 법령상 정해진 양식이 없습니다. 실무 표준은 A4 1장(약 400~800자)으로, 인적사항·근무 기간·평균임금·청구 금액·계좌 정보를 명시합니다. 사용자는 퇴직일로부터 14일 이내에 지급해야 하며, 위반 시 고용노동부에 진정·고소가 가능합니다. 평균임금은 퇴직 전 3개월 임금총액을 총일수로 나눈 금액이며, 통상임금보다 적으면 통상임금으로 계산합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "사직서 작성 분량 가이드", link: "/blog/resignation-letter-length" }
    ],
    outlinks: [
      { text: "고용노동부 퇴직금·평균임금 산정공식", link: "https://www.moel.go.kr/faq/faqView.do?seqRepeat=89", description: "퇴직금 계산 공식 공식 안내" },
      { text: "찾기쉬운 생활법령 퇴직금 미지급 구제", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=999&ccfNo=4&cciNo=1&cnpClsNo=1", description: "퇴직금 미지급 시 구제 절차" }
    ],
    content: `<p>퇴직금 청구서는 법령상 정해진 양식이 없습니다. 실무 표준은 A4 1장(약 400~800자)이며, 핵심은 평균임금 계산의 정확성과 14일 지급 의무 인지입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
A4 1장(약 400~800자)이 실무 표준. 인적사항·근무 기간·평균임금·청구 금액·계좌 정보 5요소. 사용자는 퇴직일로부터 14일 이내 지급 의무. 위반 시 고용노동부 진정·고소 가능. 평균임금은 퇴직 전 3개월 임금총액 ÷ 총일수.
</div>

<h2>퇴직금 청구 — 법적 근거</h2>
<p>근로자퇴직급여보장법 제8조는 사용자가 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급해야 한다고 규정합니다. 같은 법 제9조는 지급 사유 발생일로부터 14일 이내 지급 의무를 명시합니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">구분</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기준</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">지급 대상</td>
<td style="border:1px solid #ddd;padding:8px 12px">계속근로 1년 이상, 4주 평균 1주 15시간 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">지급액</td>
<td style="border:1px solid #ddd;padding:8px 12px">계속근로 1년에 대해 30일분 평균임금 이상</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">지급 기한</td>
<td style="border:1px solid #ddd;padding:8px 12px">퇴직일로부터 14일 이내</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">위반 시</td>
<td style="border:1px solid #ddd;padding:8px 12px">3년 이하 징역 또는 3,000만원 이하 벌금</td>
</tr>
</tbody>
</table>
</div>

<h2>청구서 작성 5요소</h2>
<p>청구서 자체는 짧고 명확해야 합니다. 다음 5개 항목을 모두 포함합니다.</p>

<ol>
<li><strong>인적사항</strong>: 성명·생년월일·연락처</li>
<li><strong>근무 정보</strong>: 사업장명·입사일·퇴사일·근무 기간</li>
<li><strong>평균임금</strong>: 퇴직 전 3개월 임금총액 + 산정 내역</li>
<li><strong>청구 금액</strong>: 평균임금 × 30일 × 근무 연수</li>
<li><strong>지급 계좌</strong>: 은행·계좌번호·예금주</li>
</ol>

<h2>평균임금 — 정확한 계산이 핵심</h2>
<p>평균임금은 다음 공식으로 계산합니다.</p>

<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-family:monospace;font-size:13px">
<strong>평균임금 산정 공식</strong><br><br>
평균임금 = 퇴직 전 3개월간 받은 임금총액 ÷ 그 기간의 총일수<br>
※ 평균임금이 통상임금보다 적을 경우 통상임금을 평균임금으로 함
</div>

<p>임금총액에는 기본급, 정기상여금, 정기수당, 연차수당이 포함됩니다. 일시적·우발적 수당(경조사비 등)과 복리후생 성격의 금품은 제외됩니다.</p>

<h2>14일 지급 의무 위반 시</h2>
<p>퇴직일로부터 14일이 지나도 퇴직금이 지급되지 않으면 다음 절차로 권리를 구제할 수 있습니다.</p>

<ol>
<li><strong>내용증명 발송</strong>: 사용자에게 14일 위반 사실과 지급 요구</li>
<li><strong>고용노동부 진정</strong>: 관할 지방고용노동청에 진정서 제출</li>
<li><strong>형사 고소</strong>: 지급 의지가 없는 경우 임금체불 형사 고소</li>
<li><strong>민사 소송</strong>: 지연이자(연 20%) 포함 청구</li>
<li><strong>대지급금 신청</strong>: 사업주 도산 시 정부가 일부 대지급</li>
</ol>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>지연이자 — 연 20%</strong><br>
근로기준법 제37조는 퇴직금 지급 지연 시 연 20%의 지연이자를 추가 지급하도록 규정합니다. 단, 천재지변 등 정당한 사유가 있는 경우는 제외됩니다.
</div>

<h2>중간정산·DC형·DB형 — 지급 방식 차이</h2>
<p>퇴직금은 다음 세 가지 방식으로 운영됩니다.</p>

<ul>
<li><strong>법정 퇴직금(DB형 유사)</strong>: 퇴직 시 일시 지급, 회사 채무</li>
<li><strong>확정급여형(DB)</strong>: 회사가 운용·관리, 약정 급여 보장</li>
<li><strong>확정기여형(DC)</strong>: 매월 회사 적립금 + 본인 운용</li>
<li><strong>IRP(개인형 퇴직연금)</strong>: 퇴직금 수령 계좌, 일시금 또는 연금</li>
</ul>

<h2>중간정산 — 제한적으로만 허용</h2>
<p>2012년 7월 이후 퇴직금 중간정산은 다음 사유에 한해서만 허용됩니다. 단순 자금 필요는 사유가 되지 않습니다.</p>

<ul>
<li>무주택자의 주택 구입·전세금 마련</li>
<li>본인·배우자·부양가족의 6개월 이상 요양 의료비</li>
<li>최근 5년 이내 파산 선고 또는 개인회생</li>
<li>임금피크제 도입 등 임금 변동</li>
<li>천재지변·재난으로 인한 피해</li>
</ul>

<h2>퇴직금 vs 퇴직연금 — 소득세 차이</h2>
<p>퇴직금을 일시금으로 수령하면 퇴직소득세가 한 번에 부과되지만, 퇴직연금(IRP)으로 받으면 연금 수령 시 분리과세되어 세부담이 낮아집니다. 퇴직금 수령 시 IRP 계좌로 이체하는 옵션을 회사에 사전 요청하는 것이 절세에 유리합니다.</p>

<h2>마무리</h2>
<p>퇴직금 청구서는 평균임금 계산의 정확성과 14일 지급 의무가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 항목별 분량을 점검하고, 미지급 시에는 즉시 <a href="/blog/certified-mail-content-character-count">내용증명 우편</a>으로 사용자에게 지급 요구를 한 뒤 진정·고소 절차로 넘어가는 것이 권장됩니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 근로기준법·근로자퇴직급여보장법·고용노동부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 공인노무사 또는 고용노동부 고객상담센터(1350)에 상담하시기 바랍니다.</p>`
  },
  {
    slug: "unemployment-benefit-application-length",
    title: "고용보험 실업급여 신청서 분량 — 워크넷 공식 양식 분석",
    description: "고용보험법 기준 실업급여 신청서·재취업활동계획서 작성 분량과 워크넷 구직 등록 절차를 정리합니다.",
    publishedAt: "2026-08-07T21:00:00+09:00",
    metaTitle: "고용보험 실업급여 신청서 분량 — 워크넷·고용보험 공식 절차 (2026)",
    metaDescription: "고용보험법 기준 실업급여 수급자격 인정신청서, 재취업활동계획서의 표준 분량과 워크넷·고용보험 신청 절차를 정리합니다.",
    targetKeywords: ["실업급여 신청", "실업급여 양식", "워크넷 구직 등록", "수급자격 인정신청서", "재취업활동계획서"],
    category: "노동·고용 문서",
    tags: ["실업급여", "고용보험", "워크넷", "구직급여", "노동법"],
    aeoQuestion: "실업급여 신청서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "실업급여 신청에 필요한 문서는 수급자격 인정신청서와 재취업활동계획서입니다. 인정신청서는 양식에 따라 빈칸 채우기 방식으로 항목별 글자수가 정해져 있고, 재취업활동계획서는 자유 기술 부분 500~1,000자가 표준입니다. 워크넷(work.go.kr 또는 work24.go.kr)에 구직 신청 후 고용센터를 방문해 취업지원 설명회에 참석한 뒤 작성합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "사직서 작성 분량 가이드", link: "/blog/resignation-letter-length" }
    ],
    outlinks: [
      { text: "고용보험 실업급여 신청", link: "https://www.ei.go.kr/ei/eih/cp/cc/ccEminsrFollow/retrieveCc200Info.do", description: "고용보험 실업급여 공식 안내" },
      { text: "워크넷 구직 등록", link: "https://www.work.go.kr/seekMain.do", description: "워크넷 공식 구직 등록 페이지" }
    ],
    content: `<p>실업급여 신청에 필요한 핵심 문서는 ① 수급자격 인정신청서, ② 재취업활동계획서 두 가지입니다. 인정신청서는 양식 빈칸 채우기 방식, 재취업활동계획서는 자유 기술 500~1,000자가 표준입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
수급자격 인정신청서 + 재취업활동계획서 2종 작성. 재취업활동계획서 500~1,000자가 표준. 워크넷 구직 등록 → 고용센터 취업지원 설명회 참석 → 신청서 작성 순서. 매 1~4주마다 실업인정 신고 필요.
</div>

<h2>실업급여 신청 — 단계별 절차</h2>
<p>고용보험 실업급여 신청은 다음 5단계 순서로 진행됩니다.</p>

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
<td style="border:1px solid #ddd;padding:8px 12px">1. 이직확인서 처리 확인</td>
<td style="border:1px solid #ddd;padding:8px 12px">전 회사가 고용보험에 이직신고 완료 확인</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">2. 워크넷 구직 신청</td>
<td style="border:1px solid #ddd;padding:8px 12px">work.go.kr 또는 work24.go.kr에서 구직 등록</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">3. 취업지원 설명회 참석</td>
<td style="border:1px solid #ddd;padding:8px 12px">거주지 관할 고용센터에서 온라인·오프라인</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">4. 수급자격 신청</td>
<td style="border:1px solid #ddd;padding:8px 12px">인정신청서 + 재취업활동계획서 제출</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">5. 실업인정 신고</td>
<td style="border:1px solid #ddd;padding:8px 12px">매 1~4주마다 출석 또는 온라인 신고</td>
</tr>
</tbody>
</table>
</div>

<h2>수급자격 인정신청서 — 양식 작성</h2>
<p>인정신청서는 자유 기술이 아닌 양식 빈칸 채우기 방식입니다. 다음 항목이 핵심입니다.</p>

<ul>
<li><strong>본인 정보</strong>: 성명·주민등록번호·주소·연락처·계좌</li>
<li><strong>마지막 직장</strong>: 사업장명·근무 기간·이직 사유</li>
<li><strong>이직 사유 코드</strong>: 자진사직·권고사직·계약만료 등 분류 코드</li>
<li><strong>재취업 의사·계획</strong>: 희망 직종·근무 형태</li>
</ul>

<p>이직 사유 코드는 수급 가능성과 직결되므로 정확히 선택해야 합니다. 자진 사직 코드는 원칙적으로 수급이 어렵습니다.</p>

<h2>재취업활동계획서 — 500~1,000자</h2>
<p>재취업활동계획서는 자유 기술 형식으로, 구직 의지를 보여주는 핵심 문서입니다. 다음 3단 구성을 권장합니다.</p>

<ol>
<li><strong>경력·역량 요약(150~300자)</strong>: 마지막 직장 경력과 보유 자격증</li>
<li><strong>희망 직종·근무 조건(150~300자)</strong>: 지원하려는 분야와 조건</li>
<li><strong>구체적 재취업 활동 계획(200~400자)</strong>: 구직 채널, 교육 수강, 자격증 취득 계획</li>
</ol>

<h2>실업인정 신고 — 매 1~4주 의무</h2>
<p>수급자격을 인정받은 후에도 매 1~4주마다 실업인정 신고를 해야 급여가 지급됩니다. 신고 방법은 두 가지입니다.</p>

<ul>
<li><strong>출석 신고</strong>: 거주지 관할 고용센터에서 신고</li>
<li><strong>온라인 신고</strong>: 고용보험 홈페이지·앱에서 신고(2~4차부터 가능)</li>
</ul>

<p>실업인정 신고 시 ① 구직활동 내역(입사 지원·면접 등), ② 자기개발 활동(교육·자격증) 등을 증빙해야 합니다.</p>

<h2>실업급여 수급 기간과 금액</h2>
<p>고용보험법 제50조는 수급 기간을 다음과 같이 정합니다. 가입 기간과 연령에 따라 120일~270일 사이로 결정됩니다.</p>

<ul>
<li><strong>가입 기간 1년 미만</strong>: 120일</li>
<li><strong>1년~3년</strong>: 150~180일</li>
<li><strong>3년~5년</strong>: 180~210일</li>
<li><strong>5년~10년</strong>: 210~240일</li>
<li><strong>10년 이상</strong>: 240~270일</li>
</ul>

<p>구직급여 1일분은 퇴직 전 평균임금의 60%이며, 상·하한액이 매년 고용노동부 고시로 정해집니다. 매년 변경되므로 신청 전 고용보험 홈페이지에서 확인이 필요합니다.</p>

<h2>수급 가능 여부 — 이직 사유별 정리</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">이직 사유</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">수급 여부</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">권고사직</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">가능</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">계약기간 만료</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">가능</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">정년 퇴직</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">가능</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">자진 사직(원칙)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">불가</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">정당한 사유 자진 사직</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">가능(예외)</td>
</tr>
</tbody>
</table>
</div>

<h2>실업급여 부정수급 — 절대 피해야 할 행위</h2>
<p>고용보험법 제116조는 다음 행위를 부정수급으로 정의하며, 적발 시 받은 급여 전액 반환 + 추가 처분(최대 5배 추징, 형사 처벌)이 부과됩니다.</p>

<ul>
<li>실제 취업했음에도 미신고로 계속 수급</li>
<li>구직활동 내역을 허위로 작성</li>
<li>이직 사유를 허위로 신고(자진 사직을 권고사직으로 위장)</li>
<li>본인 명의로 사업자등록 후 미신고</li>
<li>가족·지인 명의 활동을 본인 구직활동으로 신고</li>
</ul>

<h2>조기 재취업 수당 — 인센티브</h2>
<p>실업급여 수급 중 새 직장을 잡으면 남은 수급 기간 동안 받을 수 있었던 급여의 일부를 일시금으로 받을 수 있습니다(고용보험법 제64조). 조건은 ① 수급 기간 절반 이상 남은 시점에 재취업, ② 12개월 이상 계속 근로 또는 사업 유지입니다. 조기 재취업을 유도하기 위한 인센티브입니다.</p>

<h2>마무리</h2>
<p>실업급여 신청은 양식의 빈칸을 정확히 채우는 것과 재취업활동계획서의 진정성이 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 자유 기술 부분 분량을 점검하면 매 실업인정 신고 시에도 활용할 수 있습니다. 자세한 절차는 고용노동부 고객상담센터(국번 없이 1350)에 문의하세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 고용보험법·고용노동부·워크넷 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 고용노동부 고객상담센터(1350) 또는 관할 고용센터에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "health-insurance-dependent-application",
    title: "건강보험 피부양자 신청 사유서 글자수 — 국민건강보험공단 기준",
    description: "국민건강보험법 시행규칙 별지 제1호서식 기준 피부양자 신청 분량, 소득·재산 요건, 첨부 서류 정리를 안내합니다.",
    publishedAt: "2026-08-08T02:00:00+09:00",
    metaTitle: "건강보험 피부양자 신청서 글자수 — 국민건강보험공단 별지 1호 (2026)",
    metaDescription: "국민건강보험법 시행규칙 별지 제1호서식(피부양자 신고서) 작성 분량, 소득·재산 요건, 가족관계증명서 등 첨부 서류를 정리합니다.",
    targetKeywords: ["건강보험 피부양자", "피부양자 신청", "피부양자 자격", "건강보험공단", "피부양자 사유서"],
    category: "사회보장 문서",
    tags: ["건강보험", "피부양자", "국민건강보험공단", "사회보장", "공공기관"],
    aeoQuestion: "건강보험 피부양자 신청서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "국민건강보험법 시행규칙 별지 제1호서식(피부양자 자격 취득·상실 신고서)은 양식 빈칸 채우기 방식으로 자유 기술 분량이 거의 없습니다. 사유서가 필요한 경우 200~500자(A4 절반 정도)면 충분합니다. 가족관계증명서, 주민등록등본, 소득·재산 증빙 서류를 첨부합니다. 직장가입자의 배우자·직계존비속 등이 피부양자 자격을 가질 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "근로계약서 작성 글자수", link: "/blog/employment-contract-character-count" }
    ],
    outlinks: [
      { text: "국민건강보험 피부양자 취득 안내", link: "https://www.nhis.or.kr/nhis/policy/wbhada07300m01.do", description: "피부양자 자격·신고 공식 안내" },
      { text: "국민건강보험 웹 민원 서식", link: "https://www.nhis.or.kr/static/html/wbdb/f/wbdbf.html", description: "피부양자 자격 신고서 다운로드" }
    ],
    content: `<p>건강보험 피부양자 신청서(별지 제1호서식)는 자유 기술이 거의 없는 양식 빈칸 채우기 방식입니다. 사유서가 필요한 경우에도 200~500자(A4 절반)면 충분합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
국민건강보험법 시행규칙 별지 제1호서식 사용. 양식 빈칸 채우기, 사유서 200~500자면 충분. 가족관계증명서·주민등록등본·소득증빙 첨부. 직장가입자의 배우자·직계존비속이 자격 대상. 소득·재산 요건 충족 필요.
</div>

<h2>피부양자 자격 — 누가 신청할 수 있나</h2>
<p>국민건강보험법 제5조와 시행규칙에 따라 다음 가족이 피부양자가 될 수 있습니다.</p>

<ul>
<li><strong>배우자</strong>: 사실혼 포함, 동거 여부 무관</li>
<li><strong>직계존속</strong>: 부모·조부모 등 (시부모·장인장모 포함)</li>
<li><strong>직계비속</strong>: 자녀·손자녀 등 (배우자의 자녀 포함)</li>
<li><strong>형제자매</strong>: 미혼이면서 소득·재산 요건 충족 시</li>
</ul>

<h2>피부양자 인정 요건 — 소득·재산</h2>
<p>가족관계만으로 피부양자가 되는 것은 아닙니다. 다음 소득·재산 기준을 함께 충족해야 합니다(2026년 기준 공단 공시).</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">요건</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기준</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">소득 요건</td>
<td style="border:1px solid #ddd;padding:8px 12px">연간 종합소득 합계 일정 한도 이하(공단 매년 공시)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">사업소득 요건</td>
<td style="border:1px solid #ddd;padding:8px 12px">사업자등록자: 사업소득 0원, 미등록자: 일정 한도 이하</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">재산 요건</td>
<td style="border:1px solid #ddd;padding:8px 12px">재산세 과세표준 합계 일정 한도 이하</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">부양 요건</td>
<td style="border:1px solid #ddd;padding:8px 12px">관계별·세대 분리 여부에 따른 부양 인정</td>
</tr>
</tbody>
</table>
</div>

<p>구체적 금액 기준은 매년 공단이 공시하므로 신청 전 공단 홈페이지(nhis.or.kr) 또는 고객센터(1577-1000)에서 확인해야 합니다.</p>

<h2>피부양자 신고서 — 작성 방법</h2>
<p>별지 제1호서식의 핵심 기재 항목은 다음과 같습니다.</p>

<ol>
<li>직장가입자(신청자) 인적사항: 성명·주민등록번호·사업장</li>
<li>피부양자 인적사항: 성명·주민등록번호·관계</li>
<li>취득·상실 사유: 결혼·출생·이혼·소득 발생 등</li>
<li>취득·상실 일자</li>
<li>첨부 서류 목록</li>
</ol>

<h2>첨부 서류 — 관계별</h2>
<p>가족 관계와 사유에 따라 필요한 서류가 다릅니다.</p>

<ul>
<li><strong>배우자</strong>: 가족관계증명서, 혼인관계증명서</li>
<li><strong>자녀(미혼)</strong>: 가족관계증명서</li>
<li><strong>부모</strong>: 가족관계증명서, 주민등록등본(세대 분리 시 추가 증빙)</li>
<li><strong>형제자매</strong>: 가족관계증명서, 미혼 증빙, 소득증빙</li>
<li><strong>외국인 가족</strong>: 가족관계 입증 본국 서류(아포스티유 또는 영사확인)</li>
</ul>

<h2>피부양자 vs 지역가입자 — 보험료 차이</h2>
<p>피부양자로 등록되면 보험료가 면제됩니다. 반면 자격을 잃으면 지역가입자로 전환되어 본인이 직접 보험료를 납부해야 합니다. 지역가입자 보험료는 소득·재산·자동차 등을 종합 평가해 산정되므로 부담이 클 수 있습니다.</p>

<h2>피부양자 자격 박탈 사유</h2>
<p>피부양자로 등록된 후에도 다음 사유가 발생하면 자격이 박탈되고 지역가입자로 전환됩니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>자격 박탈 — 주요 사유</strong><br>
1. 소득이 기준을 초과한 경우<br>
2. 재산세 과세표준이 기준을 초과한 경우<br>
3. 사업자등록을 한 경우<br>
4. 결혼한 경우(형제자매가 피부양자였던 경우)<br>
5. 직장에 취업한 경우
</div>

<h2>신청 채널</h2>
<p>피부양자 신고는 다음 채널로 가능합니다.</p>

<ul>
<li><strong>공단 홈페이지</strong>: nhis.or.kr → 민원 → 자격 → 피부양자 자격 신고</li>
<li><strong>The건강보험 모바일 앱</strong>: 본인인증 후 신고</li>
<li><strong>방문</strong>: 가까운 국민건강보험공단 지사</li>
<li><strong>팩스·우편</strong>: 관할 지사로 양식과 증빙 발송</li>
<li><strong>직장 보험사무 담당자</strong>: 사업장 통한 일괄 신고</li>
</ul>

<h2>해외 거주·체류 시 — 자격 유지 조건</h2>
<p>피부양자가 해외에 장기 체류하거나 거주하는 경우 자격이 정지될 수 있습니다. 일반적인 기준은 다음과 같습니다.</p>

<ul>
<li><strong>해외 단기 체류(3개월 미만)</strong>: 자격 유지</li>
<li><strong>해외 장기 체류(3개월 이상)</strong>: 출국 시점부터 자격 정지(귀국 시 재개)</li>
<li><strong>해외 영주권 취득</strong>: 자격 상실</li>
<li><strong>주재원 동반 가족</strong>: 별도 신청 시 유지 가능</li>
</ul>

<h2>마무리</h2>
<p>피부양자 신청서는 양식 빈칸을 정확히 채우는 것이 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, 가족관계·소득 요건은 사전에 공단 고객센터(1577-1000)에서 확인하면 반려를 막을 수 있습니다. 자격 박탈 사유가 생기면 즉시 신고해야 가산금이 부과되지 않습니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 국민건강보험법·국민건강보험공단 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 국민건강보험공단 고객센터(1577-1000)에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "national-pension-voluntary-application",
    title: "국민연금 임의가입 신청 사유서 작성법 — 공단 공식 양식",
    description: "국민연금법 기준 임의가입 신청서 작성 방법, 18세 이상 60세 미만 자격 요건, 신청 채널과 필요 서류를 정리합니다.",
    publishedAt: "2026-08-08T07:00:00+09:00",
    metaTitle: "국민연금 임의가입 신청서 작성법 — 공단 공식 양식 기준 (2026)",
    metaDescription: "국민연금법 기준 임의가입 신청서 작성 분량, 18세 이상 60세 미만 자격 요건, 공단 신청 채널과 필요 서류를 정리합니다.",
    targetKeywords: ["국민연금 임의가입", "임의가입 신청서", "국민연금공단", "임의가입자", "전업주부 연금"],
    category: "사회보장 문서",
    tags: ["국민연금", "임의가입", "국민연금공단", "사회보장", "노후 준비"],
    aeoQuestion: "국민연금 임의가입 신청서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "국민연금 임의가입 신청서는 양식 빈칸 채우기 방식으로 자유 기술 부분이 거의 없습니다. 가입 사유서가 필요한 경우 100~300자면 충분합니다. 18세 이상 60세 미만 국민으로 사업장가입자·지역가입자가 될 수 없는 사람(전업주부·학생 등)이 본인 선택으로 신청할 수 있습니다. 방문·우편·팩스·전화·홈페이지(nps.or.kr)·모바일 앱(내 곁에 국민연금)으로 신청 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "건강보험 피부양자 신청 사유서 글자수", link: "/blog/health-insurance-dependent-application" }
    ],
    outlinks: [
      { text: "국민연금공단 임의가입자 안내", link: "https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0029M0.do", description: "임의가입자 자격·신청 공식 안내" },
      { text: "국민연금공단 전자민원", link: "https://minwon.nps.or.kr/", description: "전자 신청·신고 공식 채널" }
    ],
    content: `<p>국민연금 임의가입 신청서는 양식 빈칸 채우기 방식입니다. 자유 기술이 거의 없고, 사유서가 필요해도 100~300자면 충분합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
국민연금공단 표준 양식 사용, 사유서 100~300자 정도. 18세 이상 60세 미만 사업장가입자·지역가입자가 아닌 자(전업주부·학생 등)가 본인 선택으로 가입. 방문·우편·팩스·전화·홈페이지(nps.or.kr)·모바일 앱(내 곁에 국민연금) 신청 가능.
</div>

<h2>임의가입자 — 누가 가입할 수 있나</h2>
<p>국민연금법 제10조에 따라 다음 조건을 모두 충족하면 임의가입자가 될 수 있습니다.</p>

<ul>
<li>국내에 거주하는 국민</li>
<li>만 18세 이상 60세 미만</li>
<li>사업장가입자나 지역가입자가 될 수 없는 사람</li>
</ul>

<p>대표 사례는 ① 소득 없는 전업주부(배우자가 사업장가입자), ② 27세 미만 학생, ③ 군인 가족 등입니다. 이들은 의무가입 대상이 아니지만, 본인 선택으로 가입해 노후 연금 수급권을 확보할 수 있습니다.</p>

<h2>가입 vs 미가입 — 무엇이 다른가</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">구분</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">미가입</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">임의가입</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">노령연금</td>
<td style="border:1px solid #ddd;padding:8px 12px">없음</td>
<td style="border:1px solid #ddd;padding:8px 12px">65세부터 수급</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">유족연금</td>
<td style="border:1px solid #ddd;padding:8px 12px">없음</td>
<td style="border:1px solid #ddd;padding:8px 12px">가족에게 지급</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">장애연금</td>
<td style="border:1px solid #ddd;padding:8px 12px">없음</td>
<td style="border:1px solid #ddd;padding:8px 12px">장애 시 수급</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">납부 의무</td>
<td style="border:1px solid #ddd;padding:8px 12px">없음</td>
<td style="border:1px solid #ddd;padding:8px 12px">매월 납부(중단 가능)</td>
</tr>
</tbody>
</table>
</div>

<h2>임의가입 신청서 — 작성 항목</h2>
<p>국민연금공단 표준 양식에는 다음 항목이 있습니다.</p>

<ol>
<li>신청자 인적사항(성명·주민등록번호·주소·연락처)</li>
<li>가입 희망일</li>
<li>기준소득월액(보험료 산정 기준)</li>
<li>자동이체 계좌</li>
<li>가입 동기(선택, 100~300자)</li>
</ol>

<p>기준소득월액은 본인이 선택할 수 있는데, 통상 중위소득 또는 최저 기준 금액 중 선택합니다. 매년 변경 가능합니다.</p>

<h2>대리신청 — 위임장 필요</h2>
<p>본인이 직접 신청하기 어려운 경우 가족 등이 대리신청할 수 있습니다. 다음 서류가 추가로 필요합니다.</p>

<ul>
<li><strong>위임장</strong>: 본인 자필 서명·날인</li>
<li><strong>인감증명서</strong>: 본인 인감으로 발급</li>
<li><strong>대리인 신분증</strong>: 대리인 본인 확인</li>
<li><strong>가족관계증명서</strong>: 가족 대리 시</li>
</ul>

<h2>가입 후 — 보험료 납부와 자격 변동</h2>
<p>임의가입 후에는 매월 정해진 보험료를 납부해야 합니다. 다음 사유 시 자격이 변동됩니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>자격 변동 사유</strong><br>
1. 취업해 사업장가입자가 되는 경우(자동 전환)<br>
2. 소득이 발생해 지역가입자가 되는 경우(자동 전환)<br>
3. 60세에 도달한 경우(임의계속가입 신청 가능)<br>
4. 본인이 탈퇴 신청한 경우<br>
5. 사망한 경우
</div>

<h2>보험료 산정과 납부</h2>
<p>임의가입자 보험료는 본인이 선택한 기준소득월액의 9%입니다(2026년 기준). 매월 자동이체로 납부하며, 일시적으로 납부가 어려우면 납부예외 신청이 가능합니다.</p>

<ul>
<li><strong>최저 기준소득월액</strong>: 매년 공단 공시(전국 가입자 평균 소득 일정 비율)</li>
<li><strong>최고 기준소득월액</strong>: 매년 공단 공시 상한</li>
<li><strong>변경 신청</strong>: 매월 8일까지 신청 시 다음 달부터 적용</li>
<li><strong>납부예외</strong>: 실직·휴직 등 사유 시 신청 가능</li>
</ul>

<h2>임의계속가입 — 60세 이후 추가 가입</h2>
<p>60세에 도달했지만 가입 기간이 10년(120개월) 미만인 경우, 임의계속가입을 통해 65세까지 가입 기간을 연장할 수 있습니다. 노령연금 수급 자격(최소 10년 가입)을 갖추기 위한 옵션입니다.</p>

<h2>신청 채널 비교</h2>
<ul>
<li><strong>홈페이지</strong>: nps.or.kr → 전자민원 → 가입/소득/임의</li>
<li><strong>모바일 앱</strong>: '내 곁에 국민연금'에서 본인인증 후 신청</li>
<li><strong>방문</strong>: 가까운 국민연금공단 지사</li>
<li><strong>전화 신청</strong>: 1355(국번 없이), 본인 확인 후 가능</li>
<li><strong>팩스·우편</strong>: 양식 작성 후 관할 지사로 발송</li>
</ul>

<h2>마무리</h2>
<p>국민연금 임의가입 신청은 양식 빈칸 채우기로 간단합니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, 기준소득월액 선택과 자격 변동 사유는 사전에 국민연금공단 콜센터(1355)에 문의하면 안전합니다. 노후 연금 수급권을 확보하는 첫 단계입니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 국민연금법·국민연금공단 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 국민연금공단 고객센터(국번 없이 1355)에 문의하시기 바랍니다.</p>`
  },
];
