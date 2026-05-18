import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH34: BlogPost[] = [
  {
    slug: "basic-living-recipient-application",
    title: "기초생활수급자 신청 사유서 글자수 — 보건복지부 양식 기준",
    description: "국민기초생활보장법 기준 사회보장급여 제공(변경)신청서 작성 분량, 부양의무자·소득인정액 요건, 30일 처리 기간을 정리합니다.",
    publishedAt: "2026-08-08T12:00:00+09:00",
    metaTitle: "기초생활수급자 신청서 글자수 — 보건복지부·읍면동 표준 양식 (2026)",
    metaDescription: "국민기초생활보장법 기준 사회보장급여 제공(변경)신청서·금융정보 제공동의서 분량, 부양의무자·소득인정액 요건, 30일 처리 절차를 정리합니다.",
    targetKeywords: ["기초생활수급자", "기초생활보장 신청", "수급자 신청서", "사회보장급여 신청서", "보건복지부"],
    category: "사회보장 문서",
    tags: ["기초생활보장", "보건복지부", "수급자", "사회보장", "복지"],
    aeoQuestion: "기초생활수급자 신청서는 어느 정도 분량으로 써야 하나요?",
    aeoAnswer: "기초생활수급자 신청에 사용하는 사회보장급여 제공(변경)신청서는 양식 빈칸 채우기 방식으로 자유 기술이 거의 없습니다. 사유서가 필요한 경우 300~800자(A4 1장 이내)면 충분합니다. 주소지 관할 읍·면·동 주민센터에 신청서·금융정보 제공동의서·구비서류(임대차계약서·소득증빙)를 제출하면, 일반적으로 30일 이내, 특별 사유 시 60일 이내에 선정 결과가 통지됩니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "건강보험 피부양자 신청 사유서 글자수", link: "/blog/health-insurance-dependent-application" }
    ],
    outlinks: [
      { text: "보건복지부 기초생활보장 안내", link: "https://www.mohw.go.kr/menu.es?mid=a10708010200", description: "기초생활보장 보장절차 공식 안내" },
      { text: "복지로 기초생활보장 신청", link: "https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertNblgPage.do", description: "온라인 신청 채널" }
    ],
    content: `<p>기초생활수급자 신청서(사회보장급여 제공·변경 신청서)는 양식 빈칸 채우기 방식입니다. 자유 기술 사유서가 필요한 경우에도 300~800자(A4 1장 이내)면 충분합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
사회보장급여 제공(변경)신청서·금융정보 제공동의서 양식 사용. 사유서 300~800자면 충분. 주소지 관할 읍·면·동 주민센터 또는 복지로(bokjiro.go.kr) 신청. 일반 30일, 특별 사유 60일 이내 선정 결과 서면 통지.
</div>

<h2>신청 자격 — 소득인정액과 부양의무자</h2>
<p>국민기초생활보장법은 신청 자격을 소득인정액과 부양의무자 기준으로 정합니다. 2026년 보건복지부 고시 기준은 매년 공시되므로 신청 전 확인이 필요합니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">급여 종류</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">선정 기준선</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">생계급여</td>
<td style="border:1px solid #ddd;padding:8px 12px">기준 중위소득의 일정 비율 이하</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">의료급여</td>
<td style="border:1px solid #ddd;padding:8px 12px">기준 중위소득의 일정 비율 이하</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">주거급여</td>
<td style="border:1px solid #ddd;padding:8px 12px">기준 중위소득의 일정 비율 이하</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">교육급여</td>
<td style="border:1px solid #ddd;padding:8px 12px">기준 중위소득의 일정 비율 이하</td>
</tr>
</tbody>
</table>
</div>

<p>2021년 10월 이후 생계급여 부양의무자 기준이 단계적으로 폐지되었습니다(고소득·고재산 부양의무자 제외). 의료급여 부양의무자 기준은 일부 유지되므로 신청 시 확인이 필요합니다.</p>

<h2>제출 서류 — 양식 + 증빙</h2>
<p>읍·면·동 주민센터에 신청 시 다음 서류를 제출합니다.</p>

<ul>
<li><strong>사회보장급여 제공(변경) 신청서</strong>: 표준 양식 1부</li>
<li><strong>금융정보 등 제공동의서</strong>: 신청인·부양의무자 동의</li>
<li><strong>제적등본</strong>: 가족관계 확인</li>
<li><strong>임대차계약서</strong>: 주거 상황 입증</li>
<li><strong>소득·재산 확인서류</strong>: 근로소득 원천징수영수증·통장 사본 등</li>
<li><strong>외국인등록사실증명서</strong>: 외국인 신청 시</li>
</ul>

<h2>사유서 작성 — 300~800자 권장</h2>
<p>사유서가 필요한 경우(특별한 가구 상황, 추가 설명 필요 시) 다음 4단 구성을 권장합니다.</p>

<ol>
<li><strong>가구 구성(50~150자)</strong>: 동거 가족 관계·연령</li>
<li><strong>경제 상황(100~300자)</strong>: 소득·재산 상황을 구체적으로</li>
<li><strong>긴급한 어려움(100~200자)</strong>: 의료비·주거 등 시급한 문제</li>
<li><strong>요청 사항(50~150자)</strong>: 필요한 급여 종류</li>
</ol>

<h2>신청 후 절차</h2>
<p>신청서 접수 후 다음 단계가 진행됩니다.</p>

<ul>
<li><strong>접수 확인</strong>: 주민센터에서 서류 검토</li>
<li><strong>소득·재산 조사</strong>: 행정정보 연계로 확인(공적 자료 우선)</li>
<li><strong>현장 확인</strong>: 필요 시 가구 방문 조사</li>
<li><strong>심의·결정</strong>: 시·군·구 사회복지전담공무원 심의</li>
<li><strong>결과 통지</strong>: 신청일로부터 30일(특별 사유 60일) 이내 서면 통지</li>
</ul>

<h2>탈락 시 — 이의신청 절차</h2>
<p>탈락 통지를 받으면 결정 통지를 받은 날로부터 90일 이내에 이의신청을 할 수 있습니다(국민기초생활보장법 제38조). 이의신청서는 주소지 관할 시·군·구청장에게 제출하며, 60일 이내에 처리 결과가 통지됩니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>긴급복지지원 — 빠른 대안</strong><br>
시급한 위기에 처한 경우 기초생활수급자 신청과 별도로 긴급복지지원(긴급생계·주거·의료 지원)을 신청할 수 있습니다. 보건복지부 콜센터(국번 없이 129) 또는 가까운 주민센터에 문의하세요.
</div>

<h2>주거급여 분리 지원 — 청년 가구 별도</h2>
<p>2021년부터 청년 주거급여 분리 지원이 도입되어, 부모와 별도 거주하는 만 19~30세 미혼 청년에게 별도 주거급여가 지급됩니다. 부모와 따로 사는 대학생·취업준비생이 주요 대상입니다. 본인 명의로 임대차계약을 체결하고, 부모와 다른 시·군·구에 거주해야 신청 가능합니다.</p>

<h2>마무리</h2>
<p>기초생활수급자 신청은 양식 빈칸을 정확히 채우는 것과 첨부 서류 완성도가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, 자세한 상담은 보건복지부 콜센터(129) 또는 가까운 주민센터에서 받으시기 바랍니다. 위기 가구는 긴급복지지원도 병행 신청할 수 있습니다. 차상위계층 본인부담경감, 한부모가족 지원, 노인장기요양보험 등 다른 사회보장 제도도 함께 확인하면 가장 적합한 지원을 찾을 수 있습니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 국민기초생활보장법·보건복지부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 보건복지부 콜센터(129)에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "disability-registration-application",
    title: "장애인 등록 신청 사유서 분량 — 보건복지부 표준 양식",
    description: "장애인복지법 기준 장애인 등록 및 서비스 신청서 작성 분량, 장애진단서·서비스 신청 절차, 국민연금공단 장애정도심사를 정리합니다.",
    publishedAt: "2026-08-08T17:00:00+09:00",
    metaTitle: "장애인 등록 신청서 분량 — 보건복지부·국민연금공단 심사 기준 (2026)",
    metaDescription: "장애인복지법 기준 장애인 등록 및 서비스 신청서 양식, 장애진단서, 국민연금공단 장애정도심사 절차와 표준 분량을 정리합니다.",
    targetKeywords: ["장애인 등록 신청", "장애인 등록", "장애진단서", "장애정도심사", "장애인복지법"],
    category: "사회보장 문서",
    tags: ["장애인", "장애인복지법", "보건복지부", "국민연금공단", "사회보장"],
    aeoQuestion: "장애인 등록 신청서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "장애인 등록 및 서비스 신청서는 양식 빈칸 채우기 방식으로 자유 기술이 거의 없습니다. 사진 1장(3.5cm×4.5cm)과 신분증을 첨부합니다. 핵심은 의료기관 발급 장애진단서이며, 본인 또는 보호자가 주소지 관할 읍·면·동 주민센터에 신청합니다. 국민연금공단이 장애정도심사를 진행하며, 결정에 따라 등록 또는 등급이 부여됩니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "기초생활수급자 신청 사유서 글자수", link: "/blog/basic-living-recipient-application" }
    ],
    outlinks: [
      { text: "보건복지부 장애인 등록 안내", link: "https://www.mohw.go.kr/menu.es?mid=a10710010900", description: "장애인 등록·장애정도심사 공식 안내" },
      { text: "찾기쉬운 생활법령 장애인 등록", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1003&ccfNo=1&cciNo=1&cnpClsNo=3", description: "장애인등록증 발급 절차" }
    ],
    content: `<p>장애인 등록 신청서(장애인 등록 및 서비스 신청서)는 양식 빈칸 채우기 방식입니다. 자유 기술이 거의 없고, 핵심은 의료기관 발급 장애진단서입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
보건복지부 표준 양식 사용, 사진 1장(3.5cm×4.5cm)·신분증·장애진단서 첨부. 주소지 관할 읍·면·동 주민센터 접수. 국민연금공단이 장애정도심사 진행. 본인 신청 원칙, 19세 미만 미성년자·거동 불가능자는 보호자 대행 가능.
</div>

<h2>신청 대상과 절차</h2>
<p>장애인복지법 제32조에 따라 등록 절차는 다음 단계로 진행됩니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">단계</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기관·내용</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">1. 장애진단</td>
<td style="border:1px solid #ddd;padding:8px 12px">장애 유형별 지정 의료기관에서 진단</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">2. 신청서 제출</td>
<td style="border:1px solid #ddd;padding:8px 12px">주소지 관할 읍·면·동 주민센터</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">3. 심사 의뢰</td>
<td style="border:1px solid #ddd;padding:8px 12px">국민연금공단으로 자료 송부</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">4. 장애정도심사</td>
<td style="border:1px solid #ddd;padding:8px 12px">공단 전문의 심사(평균 30~60일)</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">5. 결정·통지</td>
<td style="border:1px solid #ddd;padding:8px 12px">등록 결정 시 장애인등록증 발급</td>
</tr>
</tbody>
</table>
</div>

<h2>제출 서류</h2>
<ul>
<li><strong>장애인 등록 및 서비스 신청서</strong>: 표준 양식 1부</li>
<li><strong>장애진단서</strong>: 의료기관 발급(장애 유형별 지정 의료기관)</li>
<li><strong>장애 정도 심사 관련 자료</strong>: 진료기록·검사결과지</li>
<li><strong>사진 1장</strong>: 3.5cm×4.5cm(반명함판)</li>
<li><strong>주민등록증</strong>: 17세 이상 본인 확인용</li>
</ul>

<h2>장애 유형 15가지</h2>
<p>장애인복지법 시행령에 따른 15개 장애 유형은 다음과 같습니다.</p>

<ul>
<li><strong>지체·뇌병변</strong>: 지체장애, 뇌병변장애</li>
<li><strong>감각</strong>: 시각장애, 청각장애, 언어장애</li>
<li><strong>지적·자폐</strong>: 지적장애, 자폐성장애</li>
<li><strong>정신</strong>: 정신장애</li>
<li><strong>내부</strong>: 신장·심장·간·호흡기·장루요루·뇌전증·안면장애</li>
</ul>

<p>각 유형마다 지정된 진단 의료기관과 진단 기준이 다릅니다. 보건복지부 콜센터(129)에서 지정 의료기관을 안내받을 수 있습니다.</p>

<h2>장애정도심사 — 국민연금공단 역할</h2>
<p>2011년부터 장애정도 결정은 국민연금공단 장애심사센터가 일괄 담당합니다. 객관적 심사로 형평성을 높이기 위한 조치입니다. 심사 결과에 따라 ① 장애의 정도가 심한 장애인(중증), ② 장애의 정도가 심하지 않은 장애인(경증)으로 구분됩니다.</p>

<h2>심사 결과 불복 시 — 이의신청</h2>
<p>장애정도심사 결과에 동의하지 않으면 결정 통지일로부터 90일 이내에 이의신청을 할 수 있습니다.</p>

<ol>
<li><strong>이의신청서 제출</strong>: 주소지 관할 시·군·구청장에게</li>
<li><strong>장애정도 재심사</strong>: 공단이 추가 자료 검토</li>
<li><strong>최종 통지</strong>: 60일 이내 재심사 결과 통지</li>
</ol>

<h2>등록 후 서비스</h2>
<p>장애인 등록이 완료되면 다음 서비스를 신청할 수 있습니다.</p>

<ul>
<li><strong>장애인연금·장애수당</strong>: 소득·재산 요건 충족 시</li>
<li><strong>장애인 활동지원</strong>: 일상생활 보조</li>
<li><strong>장애아동수당</strong>: 18세 미만 장애 아동</li>
<li><strong>장애인 보조기기 지원</strong>: 휠체어·보청기 등</li>
<li><strong>장애인 의료비 지원</strong>: 의료급여 또는 본인부담금 경감</li>
<li><strong>장애인 콜택시·교통 지원</strong>: 지자체별</li>
<li><strong>장애인 주택 개조 지원</strong>: 주거 환경 개선</li>
</ul>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>장애 재판정 — 정기적 갱신</strong><br>
장애 유형에 따라 2~5년마다 정기 재판정이 의무화됩니다. 재판정 시기를 놓치면 등록이 일시 정지될 수 있어, 통지서를 받는 즉시 재판정 의료기관을 방문해야 합니다.
</div>

<h2>대리 신청과 가족 동의</h2>
<p>본인이 신청하기 어려운 다음 경우는 가족 또는 보호자가 대리 신청할 수 있습니다.</p>

<ul>
<li><strong>만 19세 미만 미성년자</strong>: 친권자 또는 후견인 대행</li>
<li><strong>거동 불가능한 중증 장애</strong>: 가족 또는 시설장 대행</li>
<li><strong>치매·정신장애로 의사 표현 곤란</strong>: 후견인 대행</li>
<li><strong>장기 입원 환자</strong>: 가족 대행 + 의료기관 협조</li>
</ul>

<p>대리 신청 시 ① 위임장(본인 자필 또는 후견인 표시), ② 대리인 신분증, ③ 관계 입증 서류를 함께 제출합니다.</p>

<h2>마무리</h2>
<p>장애인 등록 신청은 의료기관 진단서가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, 지정 의료기관·심사 절차·등록 후 서비스에 대해서는 보건복지부 콜센터(129)에서 종합 상담을 받으세요. 본인 신청이 어려운 경우 보호자 대행이 가능합니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 장애인복지법·보건복지부·국민연금공단 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 보건복지부 콜센터(국번 없이 129)에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "resident-registration-correction",
    title: "주민등록 정정 신청 사유서 작성법 — 행정안전부 공식 기준",
    description: "주민등록법 시행령 별지서식 제9호 기준 주민등록 정정(말소·거주불명 등록) 신고서 작성 분량, 정정 사유별 첨부 서류를 정리합니다.",
    publishedAt: "2026-08-08T22:00:00+09:00",
    metaTitle: "주민등록 정정 신청 사유서 — 행정안전부·정부24 별지 9호 기준 (2026)",
    metaDescription: "주민등록법 시행령 별지서식 제9호(정정·말소·거주불명 등록 신고서) 작성 분량과 세대주·성명·생년월일·등록기준지 정정 절차를 정리합니다.",
    targetKeywords: ["주민등록 정정", "주민등록 정정 신고서", "주민등록 말소", "거주불명 등록", "행정안전부"],
    category: "행정 문서",
    tags: ["주민등록", "행정안전부", "정부24", "주민센터", "행정"],
    aeoQuestion: "주민등록 정정 신청 사유서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "주민등록 정정 신청은 주민등록법 시행령 별지서식 제9호(정정·말소·거주불명 등록 신고서)를 사용합니다. 양식 빈칸 채우기 방식으로 자유 기술이 거의 없고, 사유서가 필요한 경우 200~500자면 충분합니다. 세대주·주소·성명·생년월일·등록기준지 등 기재사항이 사실과 다를 때 신청하며, 정정 사유에 따라 호적등본·재산세 납부증명서 등 첨부 서류가 다릅니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "전입신고 정정 신청서 분량 가이드", link: "/blog/move-in-report-correction" }
    ],
    outlinks: [
      { text: "정부24 주민등록 정정 신고", link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000010", description: "주민등록 정정 신고 민원 안내" },
      { text: "행정안전부 주민등록 안내", link: "https://www.mois.go.kr/", description: "주민등록 관련 정책·서식" }
    ],
    content: `<p>주민등록 정정 신청은 주민등록법 시행령 별지서식 제9호를 사용합니다. 양식 빈칸 채우기 방식이며, 사유서가 필요한 경우 200~500자면 충분합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
주민등록법 시행령 별지서식 제9호(정정·말소·거주불명 등록 신고서) 사용. 사유서 200~500자면 충분. 주민등록상 세대주·주소·성명·생년월일·등록기준지가 사실과 다를 때 신청. 주소지 관할 읍·면·동 주민센터 또는 정부24 신청.
</div>

<h2>정정 신청이 필요한 경우</h2>
<p>다음과 같은 사유로 주민등록표 기재사항이 사실과 다르면 정정 신청이 필요합니다.</p>

<ul>
<li><strong>성명 정정</strong>: 개명·외국인 귀화 후 한국명 변경</li>
<li><strong>생년월일 정정</strong>: 출생신고 오류·법원 정정 판결</li>
<li><strong>등록기준지 정정</strong>: 본적지 변경·정정</li>
<li><strong>세대주 변경</strong>: 세대주 사망·이주 등</li>
<li><strong>주소지 오류 정정</strong>: 도로명주소 변경에 따른 정정</li>
<li><strong>거주불명 등록</strong>: 30일 이상 신고 의무자 부재</li>
<li><strong>말소</strong>: 사망·국적 상실·해외이주</li>
</ul>

<h2>신청 방법 — 3가지 채널</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">채널</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">절차</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">주민센터 방문</td>
<td style="border:1px solid #ddd;padding:8px 12px">신고서 작성 + 본인 확인서류 + 정정 증빙</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">정부24 온라인</td>
<td style="border:1px solid #ddd;padding:8px 12px">공동인증서로 본인 인증 후 일부 정정 가능</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">우편·팩스</td>
<td style="border:1px solid #ddd;padding:8px 12px">긴급 또는 거동 불편 시 사전 협의 필요</td>
</tr>
</tbody>
</table>
</div>

<h2>사유서 작성 — 200~500자 권장</h2>
<p>사유서가 필요한 경우 다음 3단 구성을 권장합니다.</p>

<ol>
<li><strong>현재 상태(50~150자)</strong>: 현 주민등록 기재사항</li>
<li><strong>정정 사유(100~250자)</strong>: 변경 필요성과 근거</li>
<li><strong>요청 사항(50~100자)</strong>: 어떻게 정정해 달라는 요청</li>
</ol>

<h2>정정 사유별 첨부 서류</h2>
<p>정정 사유에 따라 필요한 증빙 서류가 다릅니다.</p>

<ul>
<li><strong>성명 정정</strong>: 가정법원 개명 허가서, 가족관계증명서</li>
<li><strong>생년월일 정정</strong>: 가정법원 정정 판결문, 출생증명서</li>
<li><strong>등록기준지 정정</strong>: 가족관계등록부 정정 증빙</li>
<li><strong>세대주 변경</strong>: 사망진단서·이주 사실 증빙</li>
<li><strong>주소 정정</strong>: 등기부등본·임대차계약서</li>
</ul>

<h2>거주불명 등록 — 특별한 정정 유형</h2>
<p>주민등록법 제20조에 따라 30일 이상 주민등록상 주소에 거주하지 않는 사람이 신고하지 않으면 거주불명 등록 대상이 됩니다. 거주불명 등록되면 다음 불이익이 발생합니다.</p>

<ul>
<li>각종 행정 통지 미수령</li>
<li>건강보험 자격 제한</li>
<li>금융기관 거래 제한</li>
<li>공적 자격 박탈 가능성</li>
</ul>

<p>거주불명 등록 해제는 본인이 주민센터에 출석해 실제 거주지를 신고해야 가능합니다.</p>

<h2>주민등록번호 변경 — 별도 절차</h2>
<p>주민등록번호 자체를 변경하려면 별도의 신청 절차가 필요합니다. 주민등록번호변경위원회의 심의 대상이며, 다음 사유에 한해서만 허용됩니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>주민등록번호 변경 사유</strong><br>
1. 유출로 인한 생명·신체·재산에 피해 또는 우려<br>
2. 성폭력·가정폭력·아동학대 피해자<br>
3. 성년인 가족 구성원이 유출 피해자<br>
※ 단순 변경 희망은 불가, 변경위원회 심의 필요
</div>

<h2>주민등록표 등본·초본 발급과 정정</h2>
<p>주민등록 정정이 완료되면 정정된 사항이 반영된 등본·초본을 즉시 발급받을 수 있습니다. 발급 채널은 다음과 같습니다.</p>

<ul>
<li><strong>주민센터 방문</strong>: 인근 어느 주민센터든 전국 발급 가능</li>
<li><strong>정부24 온라인</strong>: 공동인증서 본인 인증 후 즉시 발급</li>
<li><strong>무인민원발급기</strong>: 지자체·역사·관공서 설치</li>
<li><strong>The민원 모바일 앱</strong>: 행정안전부 운영</li>
</ul>

<h2>외국인 주민등록 — 별도 절차</h2>
<p>외국인은 주민등록이 아닌 외국인등록증 발급 대상입니다(출입국관리법). 다만 영주권자·결혼이민자 등은 별도의 외국인 주민등록증을 발급받을 수 있고, 정정 절차도 별도로 진행됩니다. 출입국·외국인청에 문의해야 정확한 절차를 안내받을 수 있습니다.</p>

<h2>마무리</h2>
<p>주민등록 정정은 양식의 정확한 기재와 정정 사유에 맞는 증빙 서류가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, 사유별 필요 서류는 사전에 주민센터에 전화 문의해 확인하면 한 번에 처리할 수 있습니다. 자세한 안내는 행정안전부 또는 정부24에서 확인하세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 주민등록법·행정안전부·정부24 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 거주지 관할 읍·면·동 주민센터에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "move-in-report-correction",
    title: "전입신고 정정 신청서 분량 가이드 — 정부24 표준 양식",
    description: "주민등록법 시행령 별지서식 전입신고서 작성 분량, 세대모두·세대일부·재외국민 양식 구분, 14일 신고 의무를 정리합니다.",
    publishedAt: "2026-08-09T03:00:00+09:00",
    metaTitle: "전입신고 정정 신청서 — 정부24·주민등록법 시행령 양식 (2026)",
    metaDescription: "주민등록법 기준 전입신고서(세대모두·세대일부·재외국민) 표준 양식과 14일 신고 의무, 정정 절차를 정리합니다.",
    targetKeywords: ["전입신고", "전입신고 정정", "전입신고서", "정부24 전입신고", "주민등록 이전"],
    category: "행정 문서",
    tags: ["전입신고", "정부24", "행정안전부", "주민등록", "행정"],
    aeoQuestion: "전입신고서·정정 신청서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "전입신고서는 주민등록법 시행령 별지서식으로 정해져 있으며, 양식 빈칸 채우기 방식입니다. 자유 기술 분량은 거의 없고, 정정 사유 기재 시 100~300자면 충분합니다. 거주지 이동 후 14일 이내에 신고해야 하며(미신고 시 과태료 5만원), 정부24(gov.kr)에서 온라인 신고가 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "주민등록 정정 신청 사유서 작성법", link: "/blog/resident-registration-correction" }
    ],
    outlinks: [
      { text: "정부24 전입신고", link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000016", description: "전입신고 민원 공식 안내" },
      { text: "행정안전부 전입신고 안내", link: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=67212", description: "전입신고 정책·절차 공식 안내" }
    ],
    content: `<p>전입신고서는 주민등록법 시행령 별지서식으로 정해져 있으며, 양식 빈칸 채우기 방식입니다. 정정 사유 기재 시에도 100~300자면 충분합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
주민등록법 시행령 별지서식(전입신고서) 사용, 양식 빈칸 채우기. 자유 기술 분량 거의 없고 정정 사유 100~300자. 거주지 이동 후 14일 이내 신고 의무(미신고 과태료 최대 5만원). 정부24(gov.kr) 온라인 신고 가능.
</div>

<h2>전입신고서 — 3종 양식 구분</h2>
<p>전입 사유에 따라 사용하는 양식이 다릅니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">양식</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">사용 상황</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">세대모두 전입신고</td>
<td style="border:1px solid #ddd;padding:8px 12px">세대 전체가 함께 이주</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">세대일부 전입신고</td>
<td style="border:1px solid #ddd;padding:8px 12px">세대 중 일부만 이주, 분리</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">재외국민·해외체류자 전입신고</td>
<td style="border:1px solid #ddd;padding:8px 12px">해외 거주 후 귀국 시</td>
</tr>
</tbody>
</table>
</div>

<h2>14일 신고 의무와 과태료</h2>
<p>주민등록법 제16조는 거주지를 옮긴 사람이 14일 이내에 새로운 거주지 관할 기관에 신고하도록 의무화합니다. 위반 시 다음 과태료가 부과됩니다.</p>

<ul>
<li><strong>1차 위반</strong>: 5만원</li>
<li><strong>2차 위반</strong>: 7만원</li>
<li><strong>3차 위반</strong>: 10만원</li>
</ul>

<p>특별한 사유 없이 미신고 시 1년 이내 부과되며, 부과 처분에 대한 이의신청도 가능합니다.</p>

<h2>전입신고 시 함께 처리되는 업무</h2>
<p>전입신고는 단순한 주소 변경 신고가 아닙니다. 자동으로 처리되는 부수 업무가 많습니다.</p>

<ul>
<li><strong>주소지 변경</strong>: 주민등록·공보험·세금 등 공적 자료 일괄 갱신</li>
<li><strong>임대차 확정일자</strong>: 정부24 신청 시 동시 처리 가능</li>
<li><strong>자동차 주소 변경</strong>: 자동 연계</li>
<li><strong>운전면허 주소 변경</strong>: 자동 연계</li>
<li><strong>병역 변경 신고</strong>: 자동 연계</li>
<li><strong>국민건강보험 변경</strong>: 자동 처리</li>
</ul>

<h2>정정 신청 — 신고 후 오류 발견 시</h2>
<p>전입신고 후 기재사항에 오류가 발견되면 다음 두 가지 방식으로 정정할 수 있습니다.</p>

<ol>
<li><strong>주민센터 방문</strong>: 본인이 직접 방문해 즉시 정정</li>
<li><strong>주민등록 정정 신고서 제출</strong>: 별지서식 제9호 사용</li>
</ol>

<p>정정 사유서에는 ① 잘못 기재된 사항, ② 정정 후 내용, ③ 정정 사유와 증빙을 명시합니다.</p>

<h2>온라인 전입신고 — 정부24 절차</h2>
<p>2017년부터 정부24에서 비대면 전입신고가 가능해졌습니다. 절차는 다음과 같습니다.</p>

<ol>
<li>정부24(gov.kr) 접속 → 전입신고 검색</li>
<li>공동인증서·간편인증으로 본인 인증</li>
<li>전입 정보 입력(새 주소·세대 구성)</li>
<li>임대차 확정일자·우편물 주소 이전 등 부수 서비스 선택</li>
<li>신청 완료 후 처리 상태 확인</li>
</ol>

<p>온라인 신고는 통상 1일 이내 처리되며, 처리 완료 시 SMS로 알림이 옵니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>온라인 신고 제한 — 다음 경우는 방문 필수</strong><br>
1. 미성년자 단독 전입<br>
2. 세대주가 아닌 사람의 신고<br>
3. 외국인·재외국민 전입<br>
4. 임대인이 다른 세대주와 동일 주소로 전입<br>
5. 거주불명 등록 해제 신고
</div>

<h2>임대차 확정일자 — 동시 처리</h2>
<p>주택임대차보호법 제3조의6에 따라 임대차 확정일자는 임차인의 대항력·우선변제권 확보에 필수입니다. 정부24 전입신고 시 임대차계약서 사본을 첨부하면 확정일자를 함께 신청할 수 있어, 별도 주민센터 방문이 필요 없습니다.</p>

<h2>전입세대확인 — 분쟁 예방 도구</h2>
<p>임대인이 임차인에게 전세보증금을 돌려주기 전에 확인하는 것이 전입세대확인서입니다. 같은 주소에 다른 사람이 전입한 상태라면 임대인이 보증금을 회수하기 어려워질 수 있습니다. 이사 전후로 전입세대확인서를 발급받아 확인하는 것이 분쟁 예방에 도움이 됩니다.</p>

<h2>해외 거주 후 귀국 시 — 재외국민 전입</h2>
<p>해외에 90일 이상 체류한 후 귀국한 경우, 일반 전입신고와는 다른 별도 양식을 사용합니다. 재외국민 전입신고서 또는 해외체류자 전입신고서를 사용하며, 다음 서류가 추가로 필요합니다.</p>

<ul>
<li>여권 사본(귀국 도장 포함)</li>
<li>해외 거주 사실 증빙(영주권·체류허가 등)</li>
<li>국적 확인 서류</li>
<li>가족관계증명서</li>
</ul>

<h2>마무리</h2>
<p>전입신고는 14일 기한 준수와 양식의 정확한 기재가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 사유서 분량을 점검하고, <a href="/blog/resident-registration-correction">주민등록 정정 신청 가이드</a>도 함께 참고하면 모든 정정 사안을 한 번에 정리할 수 있습니다. 자세한 안내는 정부24 또는 가까운 주민센터에서 받으세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 주민등록법·행정안전부·정부24 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 거주지 관할 읍·면·동 주민센터에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "marriage-registration-correction",
    title: "혼인신고 정정 신청 사유서 글자수 — 법무부 가족관계등록부 기준",
    description: "가족관계의 등록 등에 관한 법률 기준 혼인신고 정정 신청서 작성 분량, 법원 가족관계등록부 정정 절차를 정리합니다.",
    publishedAt: "2026-08-09T08:00:00+09:00",
    metaTitle: "혼인신고 정정 사유서 — 가족관계등록부 법원 정정 절차 (2026)",
    metaDescription: "가족관계의 등록 등에 관한 법률 기준 혼인신고 정정 신청서 분량, 법원의 가족관계등록부 정정 허가 절차, 단순 오기와 사실관계 정정 차이를 정리합니다.",
    targetKeywords: ["혼인신고 정정", "가족관계등록부 정정", "혼인신고 사유서", "법무부 가족관계", "전자가족관계등록"],
    category: "행정 문서",
    tags: ["혼인신고", "가족관계등록부", "법원", "민법", "행정"],
    aeoQuestion: "혼인신고 정정 사유서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "혼인신고 정정에는 단순 오기 정정과 사실관계 정정 두 가지가 있습니다. 단순 오기는 시·구·읍·면사무소에서 직접 처리하며 사유서가 200~500자면 충분하고, 사실관계 정정은 가정법원의 허가가 필요해 1,000~2,000자(A4 1~2장)의 정정 신청서를 작성해야 합니다. 전자가족관계등록시스템(efamily.scourt.go.kr)에서 양식을 확인할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "주민등록 정정 신청 사유서 작성법", link: "/blog/resident-registration-correction" }
    ],
    outlinks: [
      { text: "전자가족관계등록시스템", link: "https://efamily.scourt.go.kr/index.jsp", description: "혼인·이혼·출생 신고 및 증명서 발급" },
      { text: "찾기쉬운 생활법령 혼인신고", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=707&ccfNo=4&cciNo=1&cnpClsNo=1", description: "혼인신고 절차 공식 안내" }
    ],
    content: `<p>혼인신고 정정은 단순 오기 정정과 사실관계 정정으로 구분됩니다. 단순 오기는 시·구·읍·면사무소에서 200~500자 사유서로 처리되지만, 사실관계 정정은 가정법원 허가가 필요해 1,000~2,000자 신청서를 작성해야 합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
단순 오기: 시·구·읍·면사무소 직접 처리, 사유서 200~500자. 사실관계 정정: 가정법원 허가 필요, 신청서 1,000~2,000자. 전자가족관계등록시스템(efamily.scourt.go.kr)에서 양식 확인 가능. 가족관계의 등록 등에 관한 법률·규칙 적용.
</div>

<h2>정정 유형 — 두 갈래 절차</h2>
<p>가족관계의 등록 등에 관한 법률은 정정 사유의 성격에 따라 절차를 구분합니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">처리 기관</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">처리 기간</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">단순 오기 정정</td>
<td style="border:1px solid #ddd;padding:8px 12px">시·구·읍·면사무소</td>
<td style="border:1px solid #ddd;padding:8px 12px">즉시~7일</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">사실관계 정정</td>
<td style="border:1px solid #ddd;padding:8px 12px">가정법원</td>
<td style="border:1px solid #ddd;padding:8px 12px">1~6개월</td>
</tr>
</tbody>
</table>
</div>

<h2>단순 오기 정정 — 직접 처리</h2>
<p>다음과 같은 단순 오기는 시·구·읍·면사무소에서 직접 정정이 가능합니다.</p>

<ul>
<li>한자·한글 오기(예: 홍길동 → 洪吉童)</li>
<li>주소·등록기준지 오기</li>
<li>신고서 작성 시 명백한 기재 오류</li>
<li>전산 입력 오류</li>
</ul>

<p>증빙은 원본 신고서·신분증·정정 사유 증빙(가족관계증명서 등)이며, 본인 또는 이해관계인이 신청할 수 있습니다.</p>

<h2>사실관계 정정 — 가정법원 허가</h2>
<p>다음 사유는 가정법원의 정정 허가를 받아야 합니다.</p>

<ul>
<li>혼인 성립 일자 변경</li>
<li>혼인 무효·취소 사유 발생</li>
<li>중혼·근친혼 등 무효 사유</li>
<li>출생일자·성별 등 신분 사항 정정</li>
<li>국적 변동에 따른 정정</li>
</ul>

<h2>가정법원 정정 신청서 — 1,000~2,000자 구성</h2>
<p>가정법원에 제출하는 정정 신청서는 다음 4단 구성이 표준입니다.</p>

<ol>
<li><strong>신청인·당사자 표시(100~200자)</strong>: 신청인·배우자·이해관계인</li>
<li><strong>현재 기재사항(200~400자)</strong>: 정정 전 기재 상태</li>
<li><strong>정정 사유(500~1,000자)</strong>: 정정이 필요한 사실관계와 근거</li>
<li><strong>정정 후 기재사항(100~200자)</strong>: 정정 요청 결과</li>
<li><strong>증거 자료 목록(100~200자)</strong>: 첨부 서류 목록</li>
</ol>

<h2>첨부 서류 — 정정 사유별</h2>
<p>정정 사유에 따라 필요한 증빙이 다릅니다.</p>

<ul>
<li><strong>혼인 일자 정정</strong>: 결혼증명서·증인 진술서·사진 등</li>
<li><strong>한자 오기 정정</strong>: 가족관계증명서·한자 증빙</li>
<li><strong>성별 정정</strong>: 의료기관 진단서·전문가 의견서</li>
<li><strong>등록기준지 정정</strong>: 가족관계등록부 사본</li>
<li><strong>혼인 무효</strong>: 무효 사유 입증 자료</li>
</ul>

<h2>전자가족관계등록시스템 활용</h2>
<p>대법원 전자가족관계등록시스템(efamily.scourt.go.kr)에서 다음 서비스를 이용할 수 있습니다.</p>

<ul>
<li><strong>각종 증명서 발급</strong>: 가족관계·혼인관계·기본·입양·친양자</li>
<li><strong>각종 신고</strong>: 출생·혼인·이혼·사망·인지</li>
<li><strong>전자 가족관계증명서</strong>: 진본 확인 코드 포함</li>
<li><strong>민원 안내</strong>: 신고·정정 절차 안내</li>
</ul>

<p>다만 정정 절차 자체는 시·구·읍·면사무소 또는 가정법원 방문이 원칙이며, 온라인으로는 사전 준비만 가능합니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>혼인 무효 vs 혼인 취소 — 차이점</strong><br>
혼인 무효: 처음부터 효력이 없음(중혼·근친혼 등)<br>
혼인 취소: 일정 사유로 후발적 효력 상실(사기·강박 등)<br>
모두 가정법원 판결이 필요하며, 판결 확정 후 정정 신청
</div>

<h2>이혼·재혼 후 정정</h2>
<p>이혼이나 재혼이 있는 경우 가족관계등록부에 그 사실이 자동 기재됩니다. 별도의 정정 신청은 필요 없지만, 기재 누락·오기가 발견되면 위와 동일한 절차로 정정해야 합니다. 자녀가 있는 경우 부모와의 관계도 함께 정리됩니다.</p>

<h2>마무리</h2>
<p>혼인신고 정정은 단순 오기인지 사실관계 정정인지를 먼저 구분하는 것이 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 정정 신청서 분량을 점검하고, 사실관계 정정은 변호사·법무사의 도움을 받는 것이 권장됩니다. 자세한 절차는 전자가족관계등록시스템(efamily.scourt.go.kr) 또는 가정법원에 문의하세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 가족관계의 등록 등에 관한 법률·법원행정처 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 가정법원 또는 변호사에게 상담하시기 바랍니다.</p>`
  },
];
