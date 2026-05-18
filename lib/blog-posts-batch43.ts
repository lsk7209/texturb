import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH43: BlogPost[] = [
  {
    slug: "civil-servant-approval-opinion-length",
    title: "공무원 결재 의견서 글자수 — 행정효율 규정 기준",
    description: "공무원 결재 단계별 의견 기재 분량, 「행정효율과 협업 촉진에 관한 규정」 공문서 기준, 검토 의견 작성 원칙을 정리합니다.",
    publishedAt: "2026-08-17T21:00:00+09:00",
    metaTitle: "공무원 결재 의견서 글자수 — 행정효율 규정 기준·단계별 분량 (2026)",
    metaDescription: "「행정효율과 협업 촉진에 관한 규정」 기반 공무원 결재 단계별 의견서 분량(검토·협조·결재 단계별 50~300자), 명확한 의견 작성 원칙을 안내합니다.",
    targetKeywords: ["공무원 결재 의견서", "결재 의견 글자수", "행정효율 규정", "공문서 의견 기재", "공무원 검토 의견"],
    category: "공공 문서",
    tags: ["공무원", "결재", "의견서", "공문서", "행정안전부"],
    aeoQuestion: "공무원 결재 의견서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "공무원 결재 의견서(검토 의견란) 분량은 결재 단계와 안건 성격에 따라 다릅니다. 단순 현황·보고 문서의 검토 의견은 50~100자(1~2문장)로 간결하게 작성하고, 정책 검토·예산 수반 문서는 150~300자(3~5문장)로 문제점·대안·의견을 담습니다. 「행정효율과 협업 촉진에 관한 규정」은 공문서 의견 기재를 명확하고 간결하게 작성할 것을 원칙으로 규정합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "공무원 보고서 분량 가이드", link: "/blog/civil-servant-report-length-standards" }
    ],
    outlinks: [
      { text: "행정안전부 공식 홈페이지", link: "https://www.mois.go.kr/", description: "행정효율 규정 관련 공식 채널" },
      { text: "국가법령정보센터", link: "https://www.law.go.kr/", description: "행정효율과 협업 촉진에 관한 규정 원문 열람" }
    ],
    content: `<p>공무원이 문서에 결재 의견을 기재할 때는 「행정효율과 협업 촉진에 관한 규정」(대통령령)의 공문서 작성 원칙을 따릅니다. 결재 단계마다 적절한 분량과 내용을 담는 것이 중요합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
단순 보고 문서: 50~100자 (1~2문장). 정책 검토 문서: 150~300자 (3~5문장). 예산 수반 중요 문서: 200~400자. 「행정효율과 협업 촉진에 관한 규정」 원칙: 명확·간결. 의견 없으면 서명만 해도 무방.
</div>

<h2>결재 단계별 의견 기재 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">결재 단계</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">역할</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">기안자</td>
<td style="border:1px solid #ddd;padding:8px 12px">문서 작성, 제안 이유·경위 서술</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">본문 기준 (별도 의견란 없음)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">검토자</td>
<td style="border:1px solid #ddd;padding:8px 12px">법령 적합성·타당성 검토 의견</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~200자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">협조자</td>
<td style="border:1px solid #ddd;padding:8px 12px">관련 부서 협조 의견·조건부 찬성</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~150자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">결재권자 (중간)</td>
<td style="border:1px solid #ddd;padding:8px 12px">정책 방향·수정 지시</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">50~300자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">최종 결재권자</td>
<td style="border:1px solid #ddd;padding:8px 12px">결재 또는 반려·수정 지시</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">서명 또는 50~100자</td>
</tr>
</tbody>
</table>
</div>

<h2>「행정효율과 협업 촉진에 관한 규정」공문서 의견 원칙</h2>
<p>대통령령 「행정효율과 협업 촉진에 관한 규정」은 공문서 작성과 관련해 다음 원칙을 규정합니다.</p>
<ul>
<li><strong>간결성</strong>: 의견은 짧고 명확하게 작성합니다. 불필요한 형용사나 수식어를 최소화합니다.</li>
<li><strong>구체성</strong>: "문제 있음"보다 "○조 ○항 위반 가능성 있으므로 법제처 유권해석 후 진행 필요"처럼 구체적으로 씁니다.</li>
<li><strong>행동 지향</strong>: 검토자·협조자의 의견은 기안자가 수정·보완할 수 있도록 명확한 방향을 제시합니다.</li>
<li><strong>이의 표명 명확화</strong>: 반대 의견이 있을 경우 "조건부 찬성" 또는 "반대: 이유"처럼 명확히 표명합니다.</li>
</ul>

<h2>검토 의견 작성 실례</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>예시 — 단순 현황 보고 문서 검토 의견 (70자)</strong><br><br>
사실 관계 확인 완료. 관련 법령 저촉 사항 없음. 원안대로 시행함이 타당함.
</div>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>예시 — 정책 검토 문서 검토 의견 (150자)</strong><br><br>
추진 방향은 타당하나, ○○법 제○조와의 충돌 여부를 법제처에 검토 의뢰한 후 확정 필요. 예산 규모가 전년 대비 30% 이상 증가하므로 기획재정부 협의를 선행하고 결과를 보고 후 결재 요청 바람.
</div>

<h2>의견 없이 서명만 해도 되는 경우</h2>
<p>결재 단계에서 의견이 없거나 원안에 동의하는 경우, 검토 의견란을 비워두고 서명만 해도 됩니다. 특히 정례적인 반복 업무(월간 보고, 정기 현황 보고)에서는 불필요한 의견 기재보다 신속한 결재가 더 중요합니다.</p>
<p>의견 기재가 필요한 경우에는 <a href="/tools/character-counter">글자수 세기 도구</a>로 분량을 확인하세요.</p>

<h2>전자결재 시스템의 의견란 특징</html2>
<p>온나라 전자결재 시스템 등 정부 전자결재 시스템은 의견란에 입력할 수 있는 글자수가 시스템별로 제한될 수 있습니다(보통 500~1,000자 이내). 중요한 검토 의견이 긴 경우에는 별도 검토 의견서를 첨부 형식으로 작성하는 것이 효과적입니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 반대 의견을 내면 불이익이 있나요?</strong><br>
「행정효율과 협업 촉진에 관한 규정」은 검토자와 협조자가 소신 있는 의견을 제출할 수 있도록 보장합니다. 반대 의견을 명확히 기재하는 것은 공무원의 책임 있는 행정 참여입니다. 다만 반대 의견은 근거와 대안을 함께 제시해야 설득력이 있습니다.</p>
<p><strong>Q. 결재 의견란이 너무 길면 어떻게 하나요?</strong><br>
결재 의견란이 공간 제한을 초과하면 "(별첨 검토 의견서 참조)"라고 기재하고, 상세 의견을 별도 문서로 첨부합니다.</p>

<h2>결재 의견 오류 유형 및 개선</h2>
<p>실무에서 자주 발생하는 결재 의견의 오류 유형과 개선 방법입니다. "검토 결과 이상 없음"처럼 내용이 없는 의견은 책임 있는 검토를 했음을 증명하지 못합니다. 최소한 "○○법 제○조 요건 충족 확인, 원안대로 시행 가능"처럼 근거를 명시해야 합니다. 반대로, "다소 우려되는 부분이 있으나 종합적으로 고려할 때 진행하는 것이 나을 것으로 판단됨"처럼 모호하고 긴 의견도 지양합니다.</p>

<h2>마무리</h2>
<p>공무원 결재 의견은 문서 성격에 따라 50~300자 범위에서 간결·명확·구체적으로 작성하는 것이 원칙입니다. 의견이 없을 때는 서명만으로도 결재가 가능합니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 「행정효율과 협업 촉진에 관한 규정」 및 행정안전부 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 기관의 결재 의견 양식은 소속 기관 지침을 따르시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "government-project-plan-length-standards",
    title: "공무원 사업 추진 계획서 분량 — 기획재정부 권장 양식",
    description: "기획재정부 예산편성 지침 기반 공무원 사업 추진 계획서 항목별 권장 분량, 구성 요소, 간결하고 설득력 있는 계획서 작성법을 정리합니다.",
    publishedAt: "2026-08-18T02:00:00+09:00",
    metaTitle: "공무원 사업 추진 계획서 분량 — 기획재정부 양식·항목별 기준 (2026)",
    metaDescription: "기획재정부 예산편성 지침 기반 공무원 사업 추진 계획서 항목별 권장 분량(A4 2~5페이지), 구성 요소, 예산 수반 계획서 작성 원칙을 안내합니다.",
    targetKeywords: ["사업 추진 계획서 분량", "기획재정부 계획서", "공무원 사업계획서 작성", "정부 계획서 분량", "예산 계획서 기준"],
    category: "공공 문서",
    tags: ["공무원", "사업계획서", "기획재정부", "예산", "계획서"],
    aeoQuestion: "공무원 사업 추진 계획서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "공무원 사업 추진 계획서 분량은 사업 규모에 따라 다릅니다. 소규모 단일 사업은 A4 2~3페이지(1,200~2,000자), 예산 수반 중규모 사업은 A4 3~5페이지(2,000~3,500자), 대규모 정책 사업은 A4 5~10페이지 이상입니다. 기획재정부 예산편성 지침은 사업 목적·현황·추진 방법·소요 예산·기대 효과·추진 일정을 필수 항목으로 규정합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "공무원 보고서 분량 가이드", link: "/blog/civil-servant-report-length-standards" }
    ],
    outlinks: [
      { text: "기획재정부 공식 홈페이지", link: "https://www.moef.go.kr/", description: "예산편성 지침 공식 채널" },
      { text: "디지털예산회계시스템 dBrain", link: "https://www.digitalbrain.go.kr/", description: "정부 예산 관련 공식 정보 시스템" }
    ],
    content: `<p>공무원 사업 추진 계획서는 예산을 확보하고 사업을 승인받기 위한 핵심 문서입니다. 기획재정부 예산편성 지침을 기반으로 구성 항목과 분량 기준을 살펴봅니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
소규모 단일 사업: A4 2~3페이지(1,200~2,000자). 예산 수반 중규모 사업: A4 3~5페이지(2,000~3,500자). 대규모 정책 사업: A4 5페이지 이상. 필수 항목: 목적·현황·추진 방법·소요 예산·기대 효과·추진 일정.
</div>

<h2>사업 규모별 권장 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">사업 규모</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">특징</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">소규모 단일 사업</td>
<td style="border:1px solid #ddd;padding:8px 12px">예산 1억 미만, 1년 이내 완료</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 2~3페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">중규모 예산 수반 사업</td>
<td style="border:1px solid #ddd;padding:8px 12px">예산 1~10억, 2년 이상</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3~5페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">대규모 정책 사업</td>
<td style="border:1px solid #ddd;padding:8px 12px">예산 10억 이상, 다부처 연계</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 5~10페이지 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">긴급 사업</td>
<td style="border:1px solid #ddd;padding:8px 12px">재난·긴급 현안 대응</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 1~2페이지 (핵심 요약)</td>
</tr>
</tbody>
</table>
</div>

<h2>사업 추진 계획서 필수 항목</h2>
<p>기획재정부 예산편성 지침 및 행정안전부 사업계획서 작성 기준에 따른 필수 항목은 다음과 같습니다.</p>
<ol>
<li><strong>사업 개요</strong>: 사업명·추진 배경·목적 (100~200자)</li>
<li><strong>현황 및 문제점</strong>: 현재 상황 분석, 문제점 파악 (200~400자)</li>
<li><strong>추진 방법·내용</strong>: 사업 내용, 추진 방식, 참여 기관 (300~600자)</li>
<li><strong>소요 예산</strong>: 항목별 예산, 근거 자료 (표 형식 권장)</li>
<li><strong>추진 일정</strong>: 월별·분기별 일정 (간트 차트 또는 표 형식)</li>
<li><strong>기대 효과</strong>: 정량·정성 효과, 성과 지표 (100~200자)</li>
<li><strong>위험 요인 및 대응 방안</strong>: 예상 위험과 대응책 (선택적, 중요 사업)</li>
</ol>

<h2>설득력 있는 계획서 작성 원칙</h2>
<p>결재권자와 예산 심사를 통과하기 위한 계획서 작성 원칙은 다음과 같습니다.</p>
<ul>
<li><strong>문제-해결 구조</strong>: 현재 문제점(What)→왜 지금 해야 하는가(Why)→어떻게 해결하는가(How) 순으로 논리적으로 서술합니다.</li>
<li><strong>수치로 설명</strong>: "많은 민원이 있다"보다 "연간 ○○건의 민원 접수, 처리 기간 평균 ○일"처럼 데이터로 뒷받침합니다.</li>
<li><strong>성과 지표 명확화</strong>: "효과가 있을 것"보다 "○년 말까지 ○○% 개선"처럼 측정 가능한 목표를 제시합니다.</li>
<li><strong>예산 근거 투명화</strong>: 예산 산출 근거(단가×수량)를 표로 명확히 제시합니다.</li>
</ul>

<h2>기획재정부 예산 요구서와의 관계</h2>
<p>각 부처의 사업 추진 계획서는 기획재정부 예산 요구서 작성의 기초 자료가 됩니다. 기획재정부는 매년 발간하는 「예산안 편성 및 기금운용계획안 작성 세부 지침」에서 사업 계획의 필수 포함 사항을 규정하며, 이 지침에 맞는 구성과 분량을 갖추어야 예산 심사에서 누락 없이 검토됩니다.</p>
<p>계획서 작성 후 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 계획서 분량이 너무 길면 삭감되나요?</strong><br>
분량 자체가 예산 삭감의 직접 원인이 되지는 않지만, 핵심이 불분명한 장문의 계획서는 심사에서 불리할 수 있습니다. A4 5페이지를 넘길 경우 요약 페이지(1페이지)를 앞에 추가하는 것이 효과적입니다.</p>
<p><strong>Q. 계획서와 결과 보고서를 동시에 작성해야 하나요?</strong><br>
계획 수립 시에는 계획서만 작성합니다. 사업이 완료된 후 결과 보고서를 별도로 작성하며, 계획 대비 실적을 비교 기재합니다.</p>

<h2>성과 지표 설정 방법</h2>
<p>사업 추진 계획서에서 성과 지표(KPI)는 예산 심사와 사업 평가의 기준이 됩니다. 좋은 성과 지표는 SMART 원칙을 따릅니다. 구체적(Specific), 측정 가능(Measurable), 달성 가능(Achievable), 관련성(Relevant), 기한 설정(Time-bound). 예를 들어 "○○ 서비스 이용자 수 전년 대비 20% 증가(○년 말까지)"처럼 수치·기한·비교 기준이 포함된 지표가 효과적입니다. 막연한 "인지도 향상"이나 "효율성 개선"은 측정이 불가능해 예산 심사에서 불리합니다.</p>

<h2>마무리</h2>
<p>공무원 사업 추진 계획서는 사업 규모에 따라 A4 2~5페이지 범위에서 작성합니다. 문제-해결 구조와 수치 기반 근거로 설득력을 높이는 것이 예산 확보의 핵심입니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 기획재정부 예산편성 지침·행정안전부 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 기관의 계획서 양식은 소속 기관 지침을 따르시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "local-council-bill-proposal-length",
    title: "지방의회 의안 발의서 글자수 — 지방자치법 기준",
    description: "지방자치법 기반 지방의회 의안 발의서 구성 항목, 제안 이유·주요 내용 권장 분량, 지방의회 의안 작성 절차를 정리합니다.",
    publishedAt: "2026-08-18T07:00:00+09:00",
    metaTitle: "지방의회 의안 발의서 글자수 — 지방자치법 기준·항목별 분량 (2026)",
    metaDescription: "지방자치법 기반 지방의회 의안 발의서 항목(제안이유 300~600자·주요내용 200~500자), 찬성의원 연서 요건, 의안 발의 절차를 안내합니다.",
    targetKeywords: ["지방의회 의안 발의서", "지방의회 의안 글자수", "의안 제안이유 분량", "지방자치법 의안", "지방의회 발의"],
    category: "공공 문서",
    tags: ["지방의회", "의안", "발의서", "지방자치법", "조례"],
    aeoQuestion: "지방의회 의안 발의서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "지방의회 의안 발의서의 제안 이유는 300~600자, 주요 내용은 200~500자가 일반적입니다. 지방자치법 제79조는 의안 발의 시 안을 갖추고 이유를 붙여 찬성 의원 명부와 함께 의장에게 제출하도록 규정합니다. 조례안·규칙안의 경우 법률 조항과 동일한 형식으로 본문을 구성하며, 제안 이유와 주요 내용은 발의서 표지부에 기재합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "국회 의원입법 발의문 분량", link: "/blog/national-assembly-bill-proposal-length" }
    ],
    outlinks: [
      { text: "국가법령정보센터 지방자치법", link: "https://www.law.go.kr/", description: "지방자치법 원문 열람 공식 채널" },
      { text: "행정안전부 지방의회 안내", link: "https://www.mois.go.kr/", description: "지방의회 운영 가이드북 공식 채널" }
    ],
    content: `<p>지방의회 의원이 의안을 발의할 때는 지방자치법 규정에 따라 정해진 형식과 항목을 갖춘 발의서를 제출해야 합니다. 의안의 종류에 따라 분량과 구성이 달라집니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
제안 이유: 300~600자. 주요 내용: 200~500자. 지방자치법 제79조: 안·이유·찬성 의원 명부 첨부 필수. 조례안·규칙안: 법률 조항 형식으로 본문 구성. 찬성 의원: 재적의원 5분의 1 이상 필요.
</div>

<h2>지방의회 의안의 종류</h2>
<p>지방의회에서 처리되는 의안의 종류는 다음과 같습니다.</p>
<ul>
<li><strong>조례안</strong>: 지방자치단체의 자치 법규를 제정·개정·폐지하는 의안</li>
<li><strong>예산안·결산안</strong>: 지방자치단체의 예산 편성 및 결산 승인 의안</li>
<li><strong>동의안</strong>: 지방자치단체의 장이 의회의 동의를 구하는 의안</li>
<li><strong>건의안·결의안</strong>: 의회의 의견·결의를 표명하는 의안</li>
<li><strong>규칙안</strong>: 지방의회 내부 규율을 정하는 의안</li>
</ul>

<h2>의안 발의서 구성 항목 및 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">의안 표지</td>
<td style="border:1px solid #ddd;padding:8px 12px">의안 번호, 의안명, 제안자, 제안 일자</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">양식 기재 (분량 없음)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">제안 이유</td>
<td style="border:1px solid #ddd;padding:8px 12px">의안 발의 배경·목적·필요성</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~600자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">주요 내용</td>
<td style="border:1px solid #ddd;padding:8px 12px">조례 개정 핵심 조항 요약</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">200~500자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">의안 본문</td>
<td style="border:1px solid #ddd;padding:8px 12px">조례 전문 (조·항·호 형식)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">조례 내용에 따라 가변</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">찬성 의원 연명부</td>
<td style="border:1px solid #ddd;padding:8px 12px">재적의원 5분의 1 이상 서명</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">명단 (양식 기재)</td>
</tr>
</tbody>
</table>
</div>

<h2>제안 이유 작성 원칙</h2>
<p>제안 이유는 의안을 발의하게 된 배경과 목적을 명확히 서술합니다. 다음 구조로 작성하면 효과적입니다.</p>
<ol>
<li><strong>현황 및 문제점</strong>: 현재 어떤 상황이며 무엇이 문제인가 (100~200자)</li>
<li><strong>법·제도적 근거</strong>: 상위 법령의 위임 사항 또는 개정 필요 근거 (50~100자)</li>
<li><strong>발의 목적</strong>: 이 조례를 통해 달성하고자 하는 목적 (100~200자)</li>
</ol>

<h2>지방의회 의안 발의 절차</h2>
<p>지방자치법 제79조에 따른 의안 발의 절차는 다음과 같습니다.</p>
<ol>
<li>의안 작성 및 찬성 의원 모집 (재적의원 5분의 1 이상)</li>
<li>의장에게 발의서·의안 본문·찬성 의원 연명부 제출</li>
<li>의장이 의안 번호 부여 및 소관 위원회에 회부</li>
<li>소관 위원회 심사 후 본회의 상정·표결</li>
</ol>
<p>발의서 분량 확인에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 단체장(시장·군수·구청장)도 조례안을 발의할 수 있나요?</strong><br>
지방자치단체의 장도 조례안을 지방의회에 제출할 수 있습니다(집행기관 제출 의안). 이 경우 발의 형식은 의원 발의와 비슷하지만, 찬성 의원 연명 절차가 없고 단체장 명의로 제출합니다.</p>
<p><strong>Q. 조례안 발의와 개정안 발의의 차이는?</strong><br>
신규 조례안은 전문(全文)을 작성하고, 기존 조례의 일부 개정안은 개정 조항만 명시합니다. "○○조례 일부를 다음과 같이 개정한다"라는 문구로 시작해 변경 조항만 기재합니다.</p>

<h2>조례안 제안 이유 작성 예시</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>예시 — 「○○시 반려동물 관리 지원 조례안」 제안이유</strong><br><br>
최근 ○○시 내 반려동물 양육 가구가 증가하면서 유기동물 발생과 주민 갈등이 늘고 있으나, 이를 체계적으로 관리하고 지원하는 조례가 미비한 상황입니다. 이에 반려동물 등록 지원, 유기동물 보호시설 운영, 반려동물 문화 교육 등 관련 사항을 규정함으로써 동물 복지 향상과 주민 생활 편의 증진을 도모하고자 합니다. (160자)
</div>

<h2>의안 처리 기간</h2>
<p>지방의회에 접수된 의안은 의장이 소관 위원회에 회부한 날로부터 상임위원회 심사(통상 2주~1개월), 본회의 심의·의결 순으로 처리됩니다. 긴급 현안의 경우 특별위원회 구성이나 위원회 심사 생략으로 신속히 처리할 수도 있습니다. 의안 처리 기간은 정기회(매년 11월 전후)와 임시회 여부에 따라 달라집니다.</p>

<h2>마무리</h2>
<p>지방의회 의안 발의서는 제안 이유 300~600자, 주요 내용 200~500자를 기본으로 하되, 의안 본문(조례 전문)은 내용에 따라 가변적입니다. 지방자치법 규정에 따른 형식 요건(찬성 의원 5분의 1 이상)을 반드시 갖추어야 합니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 지방자치법 및 행정안전부 지방의회 운영 가이드북 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 지방의회의 의안 발의 절차·양식은 소속 지방의회 의사담당 부서에 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "national-assembly-bill-proposal-length",
    title: "국회 의원입법 발의문 분량 — 국회사무처 입안 기준",
    description: "국회 의원입법(의원 발의 법률안) 발의문 구성 항목, 제안이유·주요내용 권장 분량, 국회사무처 법제실 입안 기준을 정리합니다.",
    publishedAt: "2026-08-18T12:00:00+09:00",
    metaTitle: "국회 의원입법 발의문 분량 — 국회사무처 입안 기준·항목별 분량 (2026)",
    metaDescription: "국회 의원입법 발의문 항목(제안이유 400~800자·주요내용 300~600자), 10인 이상 찬성의원 요건, 국회사무처 법제실 입안 지원 절차를 안내합니다.",
    targetKeywords: ["의원입법 발의문 분량", "국회 법률안 발의", "제안이유 글자수", "의원입법 형식", "국회사무처 입안"],
    category: "공공 문서",
    tags: ["국회", "의원입법", "법률안", "발의문", "국회사무처"],
    aeoQuestion: "국회 의원입법 발의문은 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "국회 의원입법 발의문의 제안이유는 400~800자, 주요내용은 300~600자가 일반적입니다. 국회법 제79조는 의원 10인 이상의 찬성으로 의안을 발의할 수 있도록 규정합니다. 발의문은 의안 표지(의안명·발의의원·찬성의원·발의연월일)와 본문(제안이유·주요내용·법률안 조문)으로 구성됩니다. 국회사무처 법제실에 입안 지원을 요청할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "지방의회 의안 발의서 글자수", link: "/blog/local-council-bill-proposal-length" }
    ],
    outlinks: [
      { text: "국회 의안정보시스템", link: "https://likms.assembly.go.kr/bill/", description: "국회 의안 원문 열람 공식 채널" },
      { text: "국회사무처 법제실", link: "https://nas.na.go.kr/", description: "의원입법 입안 지원 공식 채널" }
    ],
    content: `<p>국회에서 의원이 법률안을 직접 발의하는 것을 의원입법이라 합니다. 국회법과 국회사무처 입안 기준에 따라 정해진 형식과 분량으로 발의문을 작성해야 합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
제안이유: 400~800자. 주요내용: 300~600자. 국회법 제79조: 의원 10인 이상 찬성 필요. 발의문 구성: 의안 표지+제안이유·주요내용+법률안 조문. 국회사무처 법제실 입안 지원 이용 가능.
</div>

<h2>의원입법 발의문 구성 항목</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">의안 표지</td>
<td style="border:1px solid #ddd;padding:8px 12px">의안명, 발의의원, 찬성의원, 발의연월일</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">표지 양식 기재</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">제안이유</td>
<td style="border:1px solid #ddd;padding:8px 12px">입법 배경·목적·기대 효과</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">400~800자</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">주요내용</td>
<td style="border:1px solid #ddd;padding:8px 12px">주요 개정 조항 요약 (가목·나목 등 열거)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">300~600자</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">법률안 조문</td>
<td style="border:1px solid #ddd;padding:8px 12px">조·항·호 형식 법률안 전문</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">내용에 따라 가변</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">찬성의원 연명부</td>
<td style="border:1px solid #ddd;padding:8px 12px">발의의원 포함 10인 이상 서명</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">명단 양식 기재</td>
</tr>
</tbody>
</table>
</div>

<h2>제안이유 작성 원칙</h2>
<p>국회사무처 법제실 기준에 따라 제안이유에는 다음 내용을 포함합니다.</p>
<ul>
<li><strong>입법 배경</strong>: 왜 이 법률을 만들거나 개정해야 하는가? 현행 법령의 문제점 또는 사회·경제적 변화</li>
<li><strong>입법 목적</strong>: 이 법률 개정을 통해 달성하고자 하는 목표</li>
<li><strong>기대 효과</strong>: 법 시행 후 예상되는 긍정적 변화</li>
</ul>
<p>제안이유는 국회 의안정보시스템에 공개되어 언론·시민이 열람합니다. 따라서 전문적 법률 용어 위주보다는 일반 국민이 이해할 수 있는 언어로 작성하는 것이 권장됩니다.</p>

<h2>주요내용 작성 원칙</h2>
<p>주요내용은 법률안 조문을 가목(가.), 나목(나.) 등으로 열거해 요약합니다. 각 목은 "○○을 ○○하도록 함(○조)" 형식으로 해당 조항 번호와 함께 기재합니다. 국회사무처 입안 기준에 따라 주요내용은 법률안 조문을 충실히 반영해야 하며, 조문에 없는 내용을 주요내용에 추가하면 안 됩니다.</p>

<h2>국회사무처 법제실 입안 지원</h2>
<p>국회의원은 의원입법 시 국회사무처 법제실에 입안 지원을 요청할 수 있습니다. 법제실은 법령 형식·표현의 적정성 검토, 다른 법령과의 충돌 여부 검토, 조문 작성 지원 등을 제공합니다. 특히 신규 법률안이나 광범위한 개정안의 경우 법제실의 검토를 거치는 것이 국회 심의 과정에서 유리합니다.</p>
<p>발의문 분량 확인에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 10인 이상 찬성 의원은 같은 당이어야 하나요?</strong><br>
국회법에는 같은 당 소속이어야 한다는 규정이 없습니다. 여야 의원이 함께 찬성하는 초당적 발의도 가능합니다.</p>
<p><strong>Q. 의원입법과 정부입법의 차이는?</strong><br>
정부입법은 행정부(각 부처)가 법률안을 입안해 국무회의를 거쳐 국회에 제출하는 방식입니다. 의원입법은 국회의원이 직접 법률안을 발의하는 방식으로, 행정부 협의 절차 없이 신속하게 발의할 수 있습니다.</p>

<h2>제안이유 작성 예시</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-size:13px">
<strong>예시 — 법률안 제안이유 (압축 형태, 약 300자)</strong><br><br>
현행법은 온라인 플랫폼을 통한 소비자 피해 발생 시 분쟁 해결 절차가 불명확해 소비자가 구제를 받기 어렵습니다. 특히 해외 플랫폼 이용 시 책임 주체가 불분명해 피해자가 적절한 배상을 받지 못하는 사례가 빈번합니다. 이에 온라인 플랫폼의 소비자 보호 의무를 명확히 하고, 분쟁 조정 절차를 신설함으로써 디지털 거래 환경에서 소비자 권익을 보호하려는 것입니다.
</div>

<h2>의원입법 의안 접수 및 공개</h2>
<p>국회에 발의된 법률안은 국회 의안정보시스템(likms.assembly.go.kr/bill/)에 공개됩니다. 발의문·법률안 전문·심의 경과가 모두 공개되므로, 다른 의원의 발의 사례를 참고해 작성 형식과 제안이유 수준을 파악하는 것이 유용합니다. 의안 접수 후 소관 상임위원회에 배부되어 심사가 이루어지며, 위원회 통과 후 본회의에서 의결됩니다.</p>

<h2>마무리</h2>
<p>국회 의원입법 발의문은 제안이유 400~800자, 주요내용 300~600자를 기본으로 하며, 법률안 조문이 핵심입니다. 국회사무처 법제실의 입안 지원을 활용하면 형식 오류 없이 발의할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 국회법·국회사무처 공개 입안 안내 자료를 바탕으로 작성된 참고 자료입니다. 실제 의원입법 발의 시에는 국회사무처 법제실에 직접 문의하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "board-of-audit-complaint-length",
    title: "감사원 감사청구서 작성법 — 공식 양식 분량 기준",
    description: "감사원 국민감사청구·공익감사청구 서식 분량, 필수 기재 항목, 감사원 공식 양식 기반 작성 원칙과 요건을 정리합니다.",
    publishedAt: "2026-08-18T17:00:00+09:00",
    metaTitle: "감사원 감사청구서 작성법 — 국민감사청구·공익감사청구 공식 분량 (2026)",
    metaDescription: "감사원 국민감사청구(300인 이상)·공익감사청구 서식 분량 기준, 필수 기재 항목, 청구 사유 작성 원칙과 처리 절차를 안내합니다.",
    targetKeywords: ["감사원 감사청구서", "국민감사청구 방법", "공익감사청구 서식", "감사원 청구 글자수", "감사원 신청 방법"],
    category: "공공 문서",
    tags: ["감사원", "감사청구", "국민감사청구", "공익감사", "공공기관"],
    aeoQuestion: "감사원 감사청구서는 어떻게 작성하나요?",
    aeoAnswer: "감사원 감사청구서는 국민감사청구와 공익감사청구로 나뉩니다. 국민감사청구는 19세 이상 국민 300인 이상의 연서로 청구하며, 청구서에 청구 이유(300~600자)와 피청구기관·대상 업무를 명시합니다. 공익감사청구는 개인이나 단체가 공공기관의 위법·부당한 업무 처리에 대해 청구하는 제도입니다. 두 청구 모두 감사원 공식 서식에 따라 작성하며, 감사원 홈페이지에서 온라인으로도 청구할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "공무원 결재 의견서 글자수", link: "/blog/civil-servant-approval-opinion-length" }
    ],
    outlinks: [
      { text: "감사원 공식 홈페이지", link: "https://www.bai.go.kr/", description: "감사원 감사청구 공식 서식·안내 채널" },
      { text: "공공감사포털", link: "https://www.pap.go.kr/", description: "공공기관 감사 관련 공식 정보 포털" }
    ],
    content: `<p>감사원 감사청구는 국민이 공공기관의 위법·부당한 업무 처리를 감사원에 직접 청구하는 제도입니다. 국민감사청구와 공익감사청구로 나뉘며, 각각 요건과 서식이 다릅니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
국민감사청구: 19세 이상 300인 이상 연서 필요. 공익감사청구: 개인·단체 가능. 청구 이유: 300~600자. 피청구기관·대상 업무 명시 필수. 감사원 홈페이지 온라인 청구 가능.
</div>

<h2>국민감사청구 vs 공익감사청구</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">구분</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">국민감사청구</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">공익감사청구</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">청구 요건</td>
<td style="border:1px solid #ddd;padding:8px 12px">19세 이상 국민 300인 이상 연서</td>
<td style="border:1px solid #ddd;padding:8px 12px">개인 또는 단체</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">청구 대상</td>
<td style="border:1px solid #ddd;padding:8px 12px">공공기관 사무가 공익을 현저히 해하는 경우</td>
<td style="border:1px solid #ddd;padding:8px 12px">공공기관의 위법·부당 업무 처리</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">청구 제한</td>
<td style="border:1px solid #ddd;padding:8px 12px">수사·재판·감사 진행 중인 사항 제외</td>
<td style="border:1px solid #ddd;padding:8px 12px">동일 사항 반복 청구 제한</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">처리 기간</td>
<td style="border:1px solid #ddd;padding:8px 12px">60일 이내 (연장 가능)</td>
<td style="border:1px solid #ddd;padding:8px 12px">60일 이내 (연장 가능)</td>
</tr>
</tbody>
</table>
</div>

<h2>감사청구서 필수 기재 항목</h2>
<p>감사원 공식 서식에 따라 감사청구서에는 다음 항목을 기재합니다.</p>
<ul>
<li><strong>청구인 정보</strong>: 성명·주민등록번호(국민감사청구는 대표청구인)·주소·연락처</li>
<li><strong>피청구기관</strong>: 감사를 요청하는 공공기관명</li>
<li><strong>청구 대상 사무</strong>: 어떤 업무 처리가 문제인지 구체적으로 기재</li>
<li><strong>청구 이유</strong>: 위법·부당한 내용, 관련 사실, 증거 (300~600자)</li>
<li><strong>첨부 자료</strong>: 관련 증거·서류·사진 등</li>
</ul>

<h2>청구 이유 작성 원칙</h2>
<p>청구 이유는 감사원이 감사 여부를 결정하는 가장 중요한 부분입니다. 효과적인 청구 이유 작성을 위해 다음을 참고합니다.</p>
<ul>
<li><strong>사실에 근거</strong>: 구체적인 날짜·장소·관련자·사건 내용을 기재합니다. 추상적인 불만보다 "○월 ○일 ○○부서에서 ○○을 처리할 때 ○○법 제○조를 위반했다"처럼 구체적으로 씁니다.</li>
<li><strong>법령 근거 명시</strong>: 위반된 법령·규정을 가능하면 조항까지 명시합니다.</li>
<li><strong>공익성 강조</strong>: 개인적 불이익보다 공익에 미치는 영향을 중심으로 서술합니다.</li>
<li><strong>증거 확보</strong>: 문서·사진·녹취 등 객관적 증거를 첨부합니다.</li>
</ul>

<h2>감사청구 처리 절차</h2>
<p>감사원은 청구서 접수 후 요건 심사(청구 요건 충족 여부, 감사 대상 해당 여부)를 거쳐 감사 실시 여부를 결정합니다. 요건 충족 시 60일 이내에 감사를 실시하며, 감사 결과를 청구인에게 통보합니다. 감사가 필요하지 않다고 판단한 경우에도 그 이유를 청구인에게 알려야 합니다.</p>
<p>청구서 작성 후 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 300인 연서가 어렵습니다. 더 적은 인원으로도 청구가 가능한가요?</strong><br>
300인 미만인 경우 공익감사청구를 활용하세요. 개인 또는 단체가 청구할 수 있으며, 서명 요건이 없습니다. 다만 공익성을 입증해야 합니다.</p>
<p><strong>Q. 지방자치단체 업무도 감사원에 청구할 수 있나요?</strong><br>
지방자치단체는 감사원의 감사 대상입니다. 광역자치단체(시·도)와 기초자치단체(시·군·구) 모두 청구 가능합니다.</p>

<h2>감사원 온라인 감사청구 방법</h2>
<p>감사원 홈페이지(bai.go.kr) 감사제보센터를 통해 온라인으로 감사청구를 제출할 수 있습니다. 온라인 청구 시 첨부 파일(증거 자료)을 함께 업로드할 수 있으며, 청구 진행 상황도 온라인으로 확인할 수 있습니다. 오프라인 청구는 감사원 본원(서울 종로구) 또는 지방감사원(부산·대전·대구·광주·인천)에 직접 방문하거나 우편으로 제출할 수 있습니다.</p>
<p>감사청구서에 첨부할 자료(관련 문서·사진·녹취 등)는 감사 수리 가능성을 높이는 핵심 요소입니다. 청구서 본문에 첨부 자료 목록을 명시하고, 각 자료가 청구 이유의 어느 부분을 뒷받침하는지 설명합니다.</p>

<h2>마무리</h2>
<p>감사원 감사청구서는 감사원 공식 서식을 활용해 청구 이유를 300~600자로 구체적이고 사실에 근거해 작성하는 것이 핵심입니다. 감사원 홈페이지에서 온라인 청구와 서식 다운로드가 가능합니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 감사원·공공감사에 관한 법률 공개 자료를 바탕으로 작성된 참고 자료입니다. 실제 감사청구 시에는 감사원 홈페이지(bai.go.kr)의 최신 서식과 안내를 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  }
];
