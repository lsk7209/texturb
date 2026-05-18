import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH38: BlogPost[] = [
  {
    slug: "hanbang-medical-records-writing-standards",
    title: "한의사 진료 의무기록 작성법 — 한의약 분야 기준",
    description: "의료법 제22조 기반 한의사 진료기록부 필수 기재 항목, 한의약 특유 변증·사상체질 기록 방식, 보존 기간을 정리합니다.",
    publishedAt: "2026-08-12T16:00:00+09:00",
    metaTitle: "한의사 진료 의무기록 작성법 — 한의약 기준·항목 안내 (2026)",
    metaDescription: "한의사 진료기록부 작성 기준(의료법 제22조), 변증·사상체질 기록 항목, SOAP 형식 적용 방법, 10년 보존 의무를 안내합니다.",
    targetKeywords: ["한의사 진료기록부", "한의 의무기록", "한의약 기록 작성", "변증 기록", "의료법 제22조 한의사"],
    category: "의료 문서",
    tags: ["한의사", "진료기록부", "한의약", "의무기록", "의료법"],
    aeoQuestion: "한의사 진료기록부에는 무엇을 어떻게 기재해야 하나요?",
    aeoAnswer: "한의사도 의료법 제22조에 따라 진료기록부를 의무 작성해야 합니다. 기재 항목은 환자 기본 정보, 주소(主訴)·현병력, 변증(辨證)·사상체질 판단, 치료 방법(침·뜸·한약 등), 처방 내용, 경과 소견입니다. 항목별 500~1,000자 이상 상세 기재가 원칙이며, 진료기록부는 10년간 보존해야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "의사 진료기록부 작성 분량", link: "/blog/medical-records-writing-length" }
    ],
    outlinks: [
      { text: "국가법령정보센터 의료법 제22조", link: "https://www.law.go.kr/LSW/lsEfInfoP.do?lsiSeq=188411", description: "진료기록부 작성 의무 법령 원문" },
      { text: "보건복지부 의료정책", link: "https://www.mohw.go.kr/", description: "보건복지부 의료 관련 정책 공식 채널" }
    ],
    content: `<p>한의사도 의료법 제22조가 규정하는 '의료인'에 포함되므로 진료기록부 작성 의무를 동일하게 집니다. 단, 한의약 특유의 변증·사상체질 기록이 추가됩니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
의료법 제22조 적용. 필수 항목: 환자 기본 정보·주소·현병력·변증·사상체질·치료 방법·처방·경과 소견. 항목별 500~1,000자 이상 상세 기재 원칙. 진료기록부 10년 보존 의무.
</div>

<h2>의료법 제22조 — 한의사에게도 동일 적용</h2>
<p>의료법 제22조 제1항은 "의료인은 각각 진료기록부, 조산기록부, 간호기록부, 그 밖의 진료에 관한 기록을 갖추어 두고 그 의료행위에 관한 사항과 의견을 상세히 기록하고 서명하여야 한다"고 규정합니다. 여기서 '의료인'에는 의사·치과의사·한의사·조산사·간호사가 모두 포함됩니다.</p>
<p>한의사가 진료기록부를 작성하지 않거나 거짓으로 기재하면 1년 이하의 면허자격 정지 처분을 받을 수 있으며, 의료법 위반으로 형사 처벌 대상이 됩니다.</p>

<h2>한의 진료기록부 필수 기재 항목</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기재 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">환자 기본 정보</td>
<td style="border:1px solid #ddd;padding:8px 12px">성명·성별·생년월일·주소</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50자 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">주소(主訴)</td>
<td style="border:1px solid #ddd;padding:8px 12px">주된 증상 및 발생 시기</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100자 이상</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">현병력·과거력</td>
<td style="border:1px solid #ddd;padding:8px 12px">증상 경과·기왕증·복용약</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200자 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">변증(辨證)</td>
<td style="border:1px solid #ddd;padding:8px 12px">한의학 변증 결과 및 근거</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200자 이상</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">사상체질 판단</td>
<td style="border:1px solid #ddd;padding:8px 12px">체질 분류 결과 및 근거 소견</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100자 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">치료 방법</td>
<td style="border:1px solid #ddd;padding:8px 12px">침·뜸·부항·한약·추나 적용 내용</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">150자 이상</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">처방 내용</td>
<td style="border:1px solid #ddd;padding:8px 12px">한약 처방명·구성 약재·용법</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200자 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">경과 소견</td>
<td style="border:1px solid #ddd;padding:8px 12px">치료 반응·다음 방문 계획</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100자 이상</td>
</tr>
</tbody>
</table>
</div>

<h2>변증 기록 — 한의 진료기록의 핵심</h2>
<p>변증(辨證)은 환자의 증상을 한의학 이론에 따라 분류하는 과정으로, 한의 진료기록의 핵심 항목입니다. 단순히 "○○증"이라는 진단명만 기재하는 것은 불충분하며, 변증의 근거가 된 증상·체징을 구체적으로 기재해야 합니다.</p>

<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>변증 기록 예시</strong><br><br>
<strong>변증 결과</strong>: 간기울결증(肝氣鬱結證)<br>
<strong>근거 증상</strong>: 옆구리 결림, 기분 변동 심함, 생리 불순, 맥상(脈象) 현(弦), 설태(舌苔) 박백<br>
<strong>사상체질</strong>: 소양인 — 소화 기능 왕성, 하체 허약, 신수열(腎受熱) 표병 경향<br>
<strong>침 처방</strong>: 태충(LR3)·합곡(LI4)·내관(PC6) 자침, 유침 20분<br>
<strong>한약 처방</strong>: 가미소요산 3첩(황기 12g, 당귀 8g, 시호 8g, 작약 8g, 백출 8g 외)
</div>

<h2>SOAP 형식 — 한의 진료에 적용</h2>
<p>서양의학에서 주로 쓰는 SOAP(Subjective·Objective·Assessment·Plan) 형식을 한의 진료기록에 적용할 수 있습니다. 보건복지부는 특정 작성 방법을 강제하지 않고 "의료행위에 관한 사항과 의견을 상세히 기록"할 것만 요구합니다.</p>
<ul>
<li><strong>S(Subjective)</strong>: 환자가 호소하는 주증상, 발생 시기, 악화·완화 요인</li>
<li><strong>O(Objective)</strong>: 맥진(脈診)·설진(舌診) 소견, 복진(腹診), 체온·혈압 등 계측 수치</li>
<li><strong>A(Assessment)</strong>: 변증 결과, 사상체질 판단, 양방 병명 참조</li>
<li><strong>P(Plan)</strong>: 침·뜸·한약 처방, 다음 내원일, 생활 지도</li>
</ul>

<h2>보존 기간과 전자의무기록</h2>
<p>의료법 시행규칙 제15조에 따라 진료기록부는 10년간 보존해야 합니다. 전자의무기록(EMR) 시스템을 사용할 경우 공인전자서명이 적용된 환경에서 작성·저장하면 종이 기록과 동일한 법적 효력을 가집니다.</p>
<p>한의원에서는 한의약 전용 EMR 시스템(예: 첩약 처방 모듈 포함)을 사용하는 경우가 많습니다. 어떤 시스템을 사용하든 변증 기록·처방 내역은 수기(手記) 수준의 상세도로 입력해야 합니다.</p>

<h2>마무리 — 글자수 도구 활용</h2>
<p>한의 진료기록부 항목별 분량을 사전에 점검하려면 텍스터브의 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요. 항목을 붙여 넣으면 공백 포함·제외 글자수를 즉시 확인할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 의료법·한의약 관련 공개 법령 정보를 바탕으로 작성된 참고 자료입니다. 개별 의료기관의 구체적인 기록 작성 방법은 관할 보건소 또는 대한한의사협회에 문의하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "dental-hygienist-record-length-standards",
    title: "치과위생사 진료 기록 분량 — 대한치과위생사협회 기준",
    description: "치과위생사의 업무 기록 작성 범위, 의료법상 진료기록 작성 주체 규정, 치주 처치·예방 처치 기록 분량 기준을 정리합니다.",
    publishedAt: "2026-08-12T21:00:00+09:00",
    metaTitle: "치과위생사 진료 기록 분량 — 작성 범위·기준 완벽 정리 (2026)",
    metaDescription: "치과위생사 업무 기록 작성 범위, 의료법상 진료기록 작성 주체, 스케일링·예방처치 기록 분량과 필수 항목을 안내합니다.",
    targetKeywords: ["치과위생사 기록", "치과위생사 업무", "치과 진료기록", "스케일링 기록", "치과위생사협회"],
    category: "의료 문서",
    tags: ["치과위생사", "진료기록", "치과", "의료법", "스케일링"],
    aeoQuestion: "치과위생사는 진료기록부를 직접 작성할 수 있나요?",
    aeoAnswer: "의료법상 진료기록부 작성 의무는 의료인(치과의사)에게 있습니다. 치과위생사는 면허된 업무(스케일링·예방처치·방사선 촬영 등) 수행 후 해당 내용을 진료기록부에 기재할 수 있으나, 최종 서명은 치과의사가 해야 합니다. 스케일링 기록 항목은 시술 부위·방법·소요 시간·환자 반응으로 구성하며 최소 150자 이상이 적절합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "의사 소견서 글자수 가이드", link: "/blog/physician-opinion-letter-length" }
    ],
    outlinks: [
      { text: "대한치과위생사협회", link: "https://www.kdha.net/", description: "치과위생사 업무 기준·교육 공식 채널" },
      { text: "국가법령정보센터 의료법", link: "https://www.law.go.kr/LSW/lsEfInfoP.do?lsiSeq=188411", description: "의료법 원문 조회" }
    ],
    content: `<p>치과위생사 진료 기록은 의료법상 역할 분담 구조를 정확히 이해해야 합니다. 진료기록부 '작성 의무자'와 '기재 실무자'가 다를 수 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
진료기록부 작성 의무자는 치과의사. 치과위생사는 면허 업무 수행 내용을 기재 가능하나 최종 서명은 치과의사. 스케일링 기록: 시술 부위·방법·시간·반응 포함 최소 150자 이상. 예방처치 기록: 불소도포·실란트 등 시술별 150~250자.
</div>

<h2>의료법상 진료기록 작성 주체</h2>
<p>대법원 판례에 따르면 진료기록부는 의료행위를 직접 수행한 의료인이 작성해야 하며, 진료기록부에는 반드시 의료인의 서명이 있어야 합니다. 치과위생사가 진료기록부를 작성하고 치과의사 서명이 누락되면 의료법 위반으로 판단됩니다.</p>
<p>그러나 치과위생사가 자신이 수행한 면허 업무 내용을 진료기록부에 기재한 뒤 치과의사가 확인 서명하는 방식은 실무적으로 허용됩니다. 이 때 기재 내용의 정확성에 대한 책임은 서명한 치과의사에게 있습니다.</p>

<h2>치과위생사 면허 업무 범위</h2>
<p>의료기사 등에 관한 법률 시행령에서 규정하는 치과위생사 업무 범위는 다음과 같습니다.</p>
<ul>
<li>치아 및 구강 질환 예방을 위한 처치(스케일링, 불소도포, 치면 세마 등)</li>
<li>구강 방사선 촬영 보조</li>
<li>구강 보건 교육 및 지도</li>
<li>치과 진료 보조</li>
</ul>
<p>이 중 스케일링(치석 제거)은 2013년부터 치과위생사 단독 수행이 허용된 대표적인 독립 업무입니다.</p>

<h2>업무별 기록 항목과 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">업무 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">필수 기재 항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">스케일링</td>
<td style="border:1px solid #ddd;padding:8px 12px">시술 부위, 방법(초음파/수기), 소요 시간, 출혈 여부, 환자 반응</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">150~250자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">불소도포</td>
<td style="border:1px solid #ddd;padding:8px 12px">도포 제품명, 농도, 방법(겔/바니시), 적용 치아, 주의사항 교육 여부</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~200자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">실란트(치면열구전색)</td>
<td style="border:1px solid #ddd;padding:8px 12px">적용 치아 번호, 재료명, 충전 상태, 교합 확인</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~150자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">구강 보건 교육</td>
<td style="border:1px solid #ddd;padding:8px 12px">교육 주제, 사용 도구, 교육 시간, 환자 이해도 평가</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~200자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">방사선 촬영 보조</td>
<td style="border:1px solid #ddd;padding:8px 12px">촬영 부위, 매수, 촬영 방법, 특이사항</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">80~120자</td>
</tr>
</tbody>
</table>
</div>

<h2>스케일링 기록 작성 예시</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>스케일링 기록 예시</strong><br><br>
<strong>시술 부위</strong>: 전악(상·하 전치 및 구치부 포함)<br>
<strong>시술 방법</strong>: 초음파 스케일러(EMS) + 큐렛을 이용한 치근활택술 병행<br>
<strong>소요 시간</strong>: 약 40분<br>
<strong>특이사항</strong>: #16, #26 부위 치석 과다, 치은 출혈 다소 심함. 항응고제(와파린) 복용 중임을 확인 — 담당 치과의사에게 보고 완료.<br>
<strong>환자 반응</strong>: 시술 중 통증 호소(NRS 4/10). 마취 없이 진행, 환자 동의 하 완료.<br>
<strong>교육</strong>: 올바른 칫솔질(바스법) 교육, 치간 칫솔 사용 지도.
</div>

<h2>기록 작성 시 주의사항</h2>
<p>치과위생사가 독자적으로 작성한 기록이더라도 치과의사 서명 없이는 법적으로 완성된 진료기록부로 인정되지 않습니다. 업무 종료 후 당일 내 치과의사의 확인 서명을 받는 것이 실무 원칙입니다.</p>
<p>또한 시술 중 이상 반응(과민 반응, 과도한 출혈, 환자 컨디션 변화 등)이 발생하면 즉시 치과의사에게 보고하고, 해당 경과도 기록에 남겨야 합니다.</p>

<h2>치과위생사 기록 관련 자주 묻는 질문</h2>
<p><strong>Q. 치과위생사가 스케일링 후 기록을 치과의사 대신 입력해도 되나요?</strong><br>
A. 실무적으로 치과위생사가 기재 후 치과의사가 확인 서명하는 방식은 허용됩니다. 단, 최종 서명 없이 기록이 완성된 것으로 처리하면 의료법 위반 소지가 있습니다.</p>
<p><strong>Q. 스케일링 기록은 얼마나 보존해야 하나요?</strong><br>
A. 진료기록부의 일부로서 의료법 시행규칙에 따라 10년간 보존해야 합니다. 건강보험 청구 내역과 함께 보관하는 것이 권장됩니다.</p>
<p><strong>Q. 전자 차트에 기록할 때 분량 기준이 달라지나요?</strong><br>
A. 매체와 무관하게 기재 내용의 충분성 기준은 동일합니다. 전자 차트라도 시술 부위·방법·환자 반응 등 필수 항목은 빠짐없이 기재해야 합니다.</p>

<h2>마무리 — 글자수 확인</h2>
<p>업무 기록을 작성한 후 항목별 분량이 기준에 맞는지 확인하려면 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요. 시술 내용을 붙여 넣으면 공백 포함·제외 글자수를 바로 확인할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 의료법·의료기사법 공개 정보를 바탕으로 작성된 참고 자료입니다. 개별 치과의원의 기록 작성 방침은 관할 보건소 또는 대한치과위생사협회에 문의하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "physical-therapist-assessment-record-length",
    title: "물리치료사 평가서 글자수 — 대한물리치료사협회 표준",
    description: "물리치료사 SOAP 노트 기반 평가서 작성 항목, 항목별 권장 글자수, 의료기관 의무기록 기준을 정리합니다.",
    publishedAt: "2026-08-13T02:00:00+09:00",
    metaTitle: "물리치료사 평가서 글자수 — SOAP 노트·항목별 분량 기준 (2026)",
    metaDescription: "물리치료사 평가서(SOAP 노트) 항목별 권장 글자수, 초기 평가·중간 평가·퇴원 요약 작성 기준, 의무기록 보존 규정을 안내합니다.",
    targetKeywords: ["물리치료사 평가서", "물리치료 SOAP 노트", "물리치료 기록", "물리치료 의무기록", "대한물리치료사협회"],
    category: "의료 문서",
    tags: ["물리치료사", "SOAP 노트", "평가서", "의무기록", "물리치료"],
    aeoQuestion: "물리치료사 평가서는 어느 정도 분량으로 써야 하나요?",
    aeoAnswer: "물리치료사 평가서는 SOAP 노트 구조를 기준으로 초기 평가 시 전체 600~1,000자가 권장됩니다. S(주관적 정보) 100~200자, O(객관적 평가) 200~400자, A(평가·문제 목록) 150~250자, P(치료 계획) 100~200자입니다. 중간 평가는 200~500자, 퇴원 요약은 300~600자가 적절합니다. 의무기록은 의료기관 내 10년 보존이 원칙입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "간호기록지 글자수 가이드", link: "/blog/nursing-record-writing-standards" }
    ],
    outlinks: [
      { text: "대한물리치료사협회", link: "https://www.kpta.co.kr/", description: "물리치료사 업무 기준·교육 공식 채널" },
      { text: "국가법령정보센터 의료법", link: "https://www.law.go.kr/LSW/lsEfInfoP.do?lsiSeq=188411", description: "의료법 원문 조회" }
    ],
    content: `<p>물리치료사 평가서는 SOAP(Subjective·Objective·Assessment·Plan) 노트 구조가 국제 표준으로 통용됩니다. 의무기록으로서 법적 효력이 있으므로 정확하고 충분한 분량으로 작성해야 합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
초기 평가 전체 600~1,000자 권장. S 100~200자, O 200~400자, A 150~250자, P 100~200자. 중간 평가 200~500자, 퇴원 요약 300~600자. 의무기록 10년 보존 의무(의료법 시행규칙 제15조).
</div>

<h2>SOAP 노트 구조와 물리치료 적용</h2>
<p>SOAP 노트는 미국 물리치료협회(APTA)가 표준으로 채택한 이후 국내 물리치료 현장에서도 광범위하게 쓰입니다. 한국보건의료인국가시험원(국시원) 물리치료사 국가고시 출제 기준에도 평가 기록 작성 능력이 포함됩니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">구성 요소</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기재 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">S — Subjective</td>
<td style="border:1px solid #ddd;padding:8px 12px">주증상, 통증 양상, 기능 제한, 환자 목표</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~200자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">O — Objective</td>
<td style="border:1px solid #ddd;padding:8px 12px">ROM, 근력, 보행 분석, 특수 검사, 기능 평가</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~400자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">A — Assessment</td>
<td style="border:1px solid #ddd;padding:8px 12px">문제 목록, 물리치료 진단, 예후 판단</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">150~250자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">P — Plan</td>
<td style="border:1px solid #ddd;padding:8px 12px">단기·장기 목표, 치료 방법, 치료 횟수·빈도</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">100~200자</td>
</tr>
</tbody>
</table>
</div>

<h2>초기 평가 작성 예시</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>초기 평가 SOAP 예시 — 요통 환자</strong><br><br>
<strong>S</strong>: 55세 남성, 3주 전부터 허리 통증 발생. 앉았다 일어설 때 심해짐(NRS 6/10). 보행 30분 이후 통증 악화. 목표: 통증 없이 1시간 이상 보행.<br><br>
<strong>O</strong>: 요추 굴곡 ROM 60°(정상 80°), 신전 15°(정상 25°). 오른쪽 다리 뻗기 검사(SLR) 45° 양성. 요부 신전근력 MMT 3+. 요추 4-5번 극돌기 압통 (+). 지면 반응력 분석 시 우측 하중 감소.<br><br>
<strong>A</strong>: 요추부 추간판 병변 의심. 핵심 문제: 굴곡·신전 ROM 제한, 우측 신경근 자극 증상, 요부 근력 약화. 예후: 규칙적 치료 시 4~6주 내 기능 회복 가능.<br><br>
<strong>P</strong>: 단기 목표(2주): NRS 4 이하. 장기 목표(6주): 보행 1시간, SLR 음성. 치료: 온열 15분 + 간섭파 치료 15분 + 능동 코어 운동. 주 3회.
</div>

<h2>중간 평가 및 퇴원 요약</h2>
<p>초기 평가 외에 정기적인 중간 평가와 치료 종료 시 퇴원 요약을 작성하는 것이 권장됩니다.</p>
<ul>
<li><strong>중간 평가(Progress Note)</strong>: 매 2~4주마다 작성. 초기 목표 대비 변화, 치료 반응, 계획 수정 여부 기재. 200~500자.</li>
<li><strong>퇴원 요약(Discharge Summary)</strong>: 치료 기간, 수행한 치료, 최종 기능 수준, 자가 운동 프로그램, 추적 관찰 권고사항. 300~600자.</li>
</ul>

<h2>의무기록으로서의 법적 의미</h2>
<p>물리치료사가 작성한 SOAP 노트는 의료기관의 진료기록부에 포함되어 법적 문서로서 효력을 가집니다. 대상자 기록은 의료 분쟁 시 법적 소송 증거로 제출될 수 있으므로, 부적절한 치료 시행 여부를 입증하거나 무죄를 주장하는 근거가 됩니다.</p>
<p>의료기관은 의료법 시행규칙 제15조에 따라 진료기록부를 10년간 보존해야 합니다. 전자의무기록 사용 시 공인 인증 환경에서의 저장이 권장됩니다.</p>

<h2>SOAP 노트 작성 시 흔한 실수</h2>
<p>물리치료사 실무에서 자주 발생하는 SOAP 기록 오류를 방지하려면 아래 사항을 점검하세요.</p>
<ul>
<li><strong>S 항목에 객관적 수치 혼입 금지</strong>: "ROM 60°"는 O 항목에 기재해야 합니다. S는 환자가 스스로 호소한 내용만 기술합니다.</li>
<li><strong>O 항목 수치 빠짐없이 기재</strong>: "ROM 감소"보다 "굴곡 60°(정상 80°)"처럼 측정값과 기준값을 함께 적어야 추적이 가능합니다.</li>
<li><strong>A 항목에 근거 없는 결론 금지</strong>: A는 O에서 도출된 객관적 근거를 바탕으로 문제 목록을 작성합니다.</li>
<li><strong>P 항목에 치료 빈도·기간 명시</strong>: "운동 치료"만 쓰지 않고 "주 3회, 4주간" 등 구체적 계획을 포함합니다.</li>
</ul>

<h2>마무리 — 글자수 점검 도구</h2>
<p>평가서 각 항목을 작성한 후 권장 분량에 맞는지 점검하려면 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요. S·O·A·P 항목별로 붙여 넣어 즉시 확인할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 의료법·물리치료사 관련 공개 법령 및 표준 정보를 바탕으로 작성된 참고 자료입니다. 개별 의료기관의 기록 작성 방침은 대한물리치료사협회에 문의하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "clinical-psychologist-report-length-standards",
    title: "임상심리사 보고서 분량 — 한국임상심리학회 권장 기준",
    description: "종합심리평가 보고서 구성 항목, 항목별 권장 분량, 한국임상심리학회 윤리 기준, 법정 제출용 보고서 요건을 정리합니다.",
    publishedAt: "2026-08-13T07:00:00+09:00",
    metaTitle: "임상심리사 보고서 분량 — 종합심리평가·항목별 기준 (2026)",
    metaDescription: "임상심리사 종합심리평가 보고서 항목별 권장 분량, 한국임상심리학회 윤리 기준, 법정 제출용·보험 청구용 보고서 작성 요건을 안내합니다.",
    targetKeywords: ["임상심리사 보고서", "종합심리평가 보고서", "심리평가 분량", "한국임상심리학회", "심리 보고서 작성"],
    category: "의료 문서",
    tags: ["임상심리사", "심리평가", "보고서", "한국임상심리학회", "종합심리평가"],
    aeoQuestion: "임상심리사 종합심리평가 보고서는 어느 정도 분량으로 작성하나요?",
    aeoAnswer: "종합심리평가 보고서는 A4 5~10페이지(약 3,000~8,000자)가 일반적입니다. 의뢰 이유·배경 정보 500~800자, 행동 관찰 300~500자, 검사별 결과 기술 각 300~500자, 종합 소견 800~1,500자, 권고 사항 300~500자로 구성됩니다. 한국임상심리학회 윤리 기준에 따라 검사가 개별 평가에 기초하지 않은 경우 그 사실을 명시해야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "의사 소견서 글자수 가이드", link: "/blog/physician-opinion-letter-length" }
    ],
    outlinks: [
      { text: "한국임상심리학회", link: "https://www.kcp.or.kr/", description: "임상심리사 자격·윤리 기준 공식 채널" },
      { text: "보건복지부 정신건강", link: "https://www.mohw.go.kr/menu.es?mid=a10702030200", description: "정신건강 관련 정책 공식 안내" }
    ],
    content: `<p>임상심리사 종합심리평가 보고서는 의료기관·법원·보험사 등 다양한 용도로 제출되는 전문 문서입니다. 한국임상심리학회 윤리 기준에 따라 객관적 근거에 기반해야 합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
종합심리평가 보고서 전체 분량: A4 5~10페이지(약 3,000~8,000자). 의뢰 배경 500~800자, 행동 관찰 300~500자, 검사별 결과 각 300~500자, 종합 소견 800~1,500자, 권고 사항 300~500자. 한국임상심리학회 윤리 기준: 개별 평가 미실시 시 그 사실 명시 의무.
</div>

<h2>종합심리평가 보고서 구성 항목</h2>
<p>종합심리평가(Comprehensive Psychological Assessment)는 지능·성격·정서·신경심리 등 여러 검사 도구를 복합 사용해 내담자의 심리 상태를 다면적으로 평가합니다. 보고서는 이 과정의 결과물이며, 평가 목적에 따라 분량이 달라집니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 기재 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">의뢰 이유 및 배경 정보</td>
<td style="border:1px solid #ddd;padding:8px 12px">의뢰 목적, 주호소, 발달력, 병력, 가족·사회 배경</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500~800자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">행동 관찰</td>
<td style="border:1px solid #ddd;padding:8px 12px">외모, 태도, 검사 임하는 방식, 언어 및 비언어적 특성</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~500자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">검사별 결과 기술</td>
<td style="border:1px solid #ddd;padding:8px 12px">K-WAIS/K-WISC, MMPI-2, Rorschach, HTP 등 검사별 결과</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">각 300~500자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">종합 소견</td>
<td style="border:1px solid #ddd;padding:8px 12px">검사 결과 통합, 진단적 인상, 심리적 강점·취약점</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">800~1,500자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">권고 사항</td>
<td style="border:1px solid #ddd;padding:8px 12px">치료적 권고, 추가 평가 필요 여부, 환경 조정 제안</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~500자</td>
</tr>
</tbody>
</table>
</div>

<h2>한국임상심리학회 윤리 기준 — 보고서 작성 핵심 규정</h2>
<p>한국임상심리학회 윤리강령에 따르면, 심리학자는 보고서·의견서 등을 작성할 때 다음 원칙을 따라야 합니다.</p>
<ul>
<li><strong>객관적 근거 기반</strong>: 자신의 의견을 입증할 수 있는 객관적 정보 또는 심리검사 기법에 근거해야 합니다.</li>
<li><strong>개별 평가 원칙</strong>: 개인의 심리 특성에 대한 의견을 진술할 때는 면밀한 검사 과정을 거쳐야 합니다.</li>
<li><strong>한계 명시 의무</strong>: 개별 검사가 실시되지 않았거나 자료가 불충분한 경우, 이 사실과 그것이 결론의 신뢰도·타당도에 미치는 영향을 보고서에 명시해야 합니다.</li>
<li><strong>결론 범위 제한</strong>: 불충분한 정보에 기반한 경우 결론과 권고의 본질·범위를 제한하고 이를 밝혀야 합니다.</li>
</ul>

<h2>용도별 보고서 분량 차이</h2>
<p>보고서 제출 목적에 따라 요구 분량이 달라질 수 있습니다.</p>
<ul>
<li><strong>의료기관 내부 기록용</strong>: 간결한 요약 형태도 가능. 전체 1,500~3,000자.</li>
<li><strong>법원 제출용(증거 자료)</strong>: 검사 과정·근거를 상세히 기술. 5,000~8,000자 이상.</li>
<li><strong>보험 청구·장애 판정용</strong>: 해당 기관이 요구하는 서식과 분량 기준 준수. 보통 A4 3~5페이지.</li>
<li><strong>학교·직장 제출용 간이 보고서</strong>: 핵심 진단·권고만 포함. 500~1,500자.</li>
</ul>

<h2>종합 소견 작성 팁</h2>
<p>종합 소견은 보고서에서 가장 핵심적인 부분으로, 여러 검사 결과를 통합해 내담자의 심리적 특성을 일관된 서술로 제시합니다. 각 검사 점수를 나열하는 것이 아니라, 검사 간 패턴과 일관성을 해석해 서술하는 것이 중요합니다.</p>
<p>보고서 완성 후 글자수와 항목별 분량을 점검하려면 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>보고서 가독성과 수신자 배려</h2>
<p>심리평가 보고서는 의뢰 기관(의사·법원·학교 등)이 보고서를 읽는 방식을 고려해 작성해야 합니다. 전문 심리학 용어를 최소화하거나 괄호로 설명을 덧붙이고, 검사 약어(예: K-WAIS-IV, BDI-2)는 처음 사용 시 풀어 씁니다.</p>
<p>권고 사항은 "○○ 치료가 도움이 될 것입니다"처럼 구체적으로 기술합니다. "심리치료가 필요합니다"만으로는 의뢰 기관이 다음 단계를 실행하기 어렵습니다. 치료 유형(CBT, 정신역동 등), 빈도(주 1회), 예상 기간(3~6개월)을 포함하면 실용적인 보고서가 됩니다.</p>

<h2>마무리</h2>
<p>임상심리사 보고서는 내담자의 권리와 안전에 직결되는 전문 문서입니다. 한국임상심리학회 윤리 기준과 의뢰 목적에 맞게 충분한 근거와 적절한 분량으로 작성하는 것이 원칙입니다. 글자수 점검에는 <a href="/tools/character-counter">텍스터브 글자수 도구</a>를 활용하세요.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 한국임상심리학회 공개 정보 및 임상심리 분야 학술 자료를 바탕으로 작성된 참고 자료입니다. 개별 사례의 보고서 작성은 전문 임상심리사 및 한국임상심리학회 지침을 따르시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "social-worker-case-record-length-standards",
    title: "사회복지사 사례 기록 글자수 — 한국사회복지사협회 기준",
    description: "사회복지사 사례관리 기록 유형별 분량, 초기 상담부터 종결까지 단계별 작성 항목, 표준 매뉴얼 기준을 정리합니다.",
    publishedAt: "2026-08-13T12:00:00+09:00",
    metaTitle: "사회복지사 사례 기록 글자수 — 사례관리 단계별 분량 기준 (2026)",
    metaDescription: "사회복지사 사례관리 기록 유형(초기·사정·계획·경과·종결)별 권장 글자수, 표준 양식 항목, 한국사회복지사협회 기준을 안내합니다.",
    targetKeywords: ["사회복지사 사례기록", "사례관리 기록", "사회복지 기록 분량", "한국사회복지사협회", "초기상담 기록"],
    category: "사회복지 문서",
    tags: ["사회복지사", "사례관리", "기록 작성", "사회복지", "한국사회복지사협회"],
    aeoQuestion: "사회복지사 사례관리 기록은 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "사회복지사 사례관리 기록은 유형에 따라 다릅니다. 초기 상담 기록 500~800자, 사정(욕구·강점 분석) 기록 800~1,500자, 서비스 계획서 600~1,000자, 경과 기록(매 접촉 시) 200~500자, 종결 요약 500~1,000자가 권장됩니다. 한국사회복지사협회 현장실습 서식과 서울시 사회복지관 사례관리 표준 매뉴얼에서도 이 기준을 준용합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "기초생활수급자 신청 사유서", link: "/blog/basic-living-recipient-application" }
    ],
    outlinks: [
      { text: "한국사회복지사협회", link: "https://www.welfare.net/", description: "사회복지사 자격·업무 기준 공식 채널" },
      { text: "서울시사회복지관협회 사례관리 매뉴얼", link: "https://saswc.org/data02/272295", description: "서울시 사회복지관 사례관리 표준매뉴얼" }
    ],
    content: `<p>사회복지사 사례 기록은 서비스 전달 과정을 체계화하고 법적·윤리적 책임을 다하기 위한 전문 문서입니다. 사례관리 단계별로 기록 유형과 요구 분량이 다릅니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
초기 상담 기록 500~800자. 사정 기록(욕구·강점 분석) 800~1,500자. 서비스 계획서 600~1,000자. 경과 기록(접촉 시마다) 200~500자. 종결 요약 500~1,000자. 한국사회복지사협회 표준 서식 준용.
</div>

<h2>사례관리 기록의 목적과 법적 근거</h2>
<p>사회복지사 사례 기록은 서비스 연속성 보장, 전문적 책임 이행, 수퍼비전 및 평가 지원, 기관 간 정보 공유의 근거로 기능합니다. 사회복지사업법 제36조는 사회복지시설 운영자가 이용자의 서비스 관련 정보를 기록·관리하도록 규정합니다.</p>
<p>국민기초생활보장법·장애인복지법 등 개별 법령에 따라 공공 사회복지 분야에서는 보다 엄격한 기록 보존 의무(통상 5년 이상)가 부과됩니다.</p>

<h2>사례관리 단계별 기록 유형과 권장 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기록 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 기재 항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">초기 상담 기록</td>
<td style="border:1px solid #ddd;padding:8px 12px">접수 경위, 주호소, 인구사회학적 정보, 즉각적 욕구</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500~800자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">사정(Assessment) 기록</td>
<td style="border:1px solid #ddd;padding:8px 12px">욕구 분석, 자원 분석, 강점·장애 요인, 위험도 평가</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">800~1,500자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">서비스 계획서</td>
<td style="border:1px solid #ddd;padding:8px 12px">목표 설정, 개입 전략, 담당자·일정·기대 결과</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">600~1,000자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">경과 기록</td>
<td style="border:1px solid #ddd;padding:8px 12px">접촉 일시·방법, 내용 요약, 변화 및 반응, 다음 계획</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~500자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">중간 평가 기록</td>
<td style="border:1px solid #ddd;padding:8px 12px">목표 달성도, 계획 수정 여부, 추가 욕구 발굴</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">400~700자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">종결 요약</td>
<td style="border:1px solid #ddd;padding:8px 12px">서비스 기간, 개입 내용 요약, 결과 평가, 사후 관리 계획</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">500~1,000자</td>
</tr>
</tbody>
</table>
</div>

<h2>경과 기록 작성 예시</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>경과 기록 예시</strong><br><br>
<strong>접촉 일시</strong>: 2026-04-15, 가정방문, 50분<br>
<strong>내용 요약</strong>: 기초생활수급 신청 서류 작성 지원. 소득·재산 신고서, 금융정보 제공 동의서 작성 완료. 본인 서명 확인.<br>
<strong>변화 및 반응</strong>: 서류 준비 과정에서 불안 감소됨. "이제 좀 안심이 된다"고 표현. 아들과의 갈등은 지속, 가족 상담 연계 필요성 확인.<br>
<strong>다음 계획</strong>: 2026-04-22 주민센터 동행 신청 예정. 아들 동의 시 가족 면담 실시.
</div>

<h2>서울시 사례관리 표준 매뉴얼의 기록 원칙</h2>
<p>서울시사회복지관협회가 발표한 사례관리 표준 매뉴얼은 기록 작성 시 다음 원칙을 강조합니다.</p>
<ul>
<li><strong>당사자 중심 기록</strong>: 문제·결핍보다 강점·자원·가능성에 초점을 맞춰 기술합니다.</li>
<li><strong>구체성</strong>: "어려워 보였다"보다 "눈물을 보이며 목소리가 떨렸다" 같이 관찰된 사실을 구체적으로 기술합니다.</li>
<li><strong>즉시 기록</strong>: 접촉 후 24시간 이내에 기록을 완성하는 것이 권장됩니다.</li>
<li><strong>판단·추론 표시</strong>: 사실과 사회복지사의 해석·판단은 명확히 구분해 기술합니다.</li>
</ul>

<h2>전자 사례관리 시스템(사회보장정보시스템)과 기록</h2>
<p>공공 사회복지 영역에서는 행정안전부·보건복지부가 운영하는 사회보장정보시스템(행복e음)에 사례관리 기록을 입력합니다. 시스템 양식에 기재 항목이 미리 구성되어 있으나, 텍스트 자유 서술 란에는 위 권장 분량 이상의 내용을 충분히 작성해야 합니다.</p>
<p>민간 복지관·사회복지시설에서는 자체 전산 시스템이나 한글 서식을 사용하는 경우가 많습니다. 어떤 매체를 사용하든 '접촉 일시·방법·내용·반응·다음 계획'의 5가지 요소는 경과 기록에 반드시 포함해야 합니다.</p>

<h2>기록 관련 자주 묻는 질문</h2>
<p><strong>Q. 전화 상담도 경과 기록을 작성해야 하나요?</strong><br>
A. 네, 전화·방문·내방 등 접촉 유형에 관계없이 모든 서비스 관련 접촉은 경과 기록으로 남겨야 합니다.</p>
<p><strong>Q. 종결 기록은 언제 작성하나요?</strong><br>
A. 서비스 종결 후 2주 이내 작성이 권장됩니다. 종결 이유(목표 달성·의뢰·본인 거부 등)를 명확히 기술해야 합니다.</p>

<h2>마무리 — 글자수 도구 활용</h2>
<p>사례 기록 항목별 분량이 기준에 맞는지 확인하려면 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요. 경과 기록, 사정 기록 등 각 섹션을 붙여 넣어 즉시 확인할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 사회복지사업법·관련 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 기관의 기록 양식은 한국사회복지사협회 또는 소속 기관 지침을 따르시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  }
];
