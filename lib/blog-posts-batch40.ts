import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH40: BlogPost[] = [
  {
    slug: "labor-attorney-opinion-length-standards",
    title: "노무사 의견서 작성 분량 — 한국공인노무사회 표준",
    description: "공인노무사가 작성하는 노동사건 의견서·심판 청구서 유형별 분량, 필수 항목, 공인노무사법 업무 범위를 정리합니다.",
    publishedAt: "2026-08-14T18:00:00+09:00",
    metaTitle: "노무사 의견서 작성 분량 — 유형별 기준·필수 항목 완벽 정리 (2026)",
    metaDescription: "공인노무사 의견서·심판 청구서·고충 처리 신청서 유형별 권장 분량, 필수 항목, 노동위원회 제출 기준을 안내합니다.",
    targetKeywords: ["노무사 의견서", "노동위원회 심판 청구서", "공인노무사 서면", "한국공인노무사회", "부당해고 심판 청구"],
    category: "법률 문서",
    tags: ["공인노무사", "노동위원회", "의견서", "부당해고", "한국공인노무사회"],
    aeoQuestion: "공인노무사 의견서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "공인노무사 의견서는 용도에 따라 분량이 다릅니다. 노동위원회 부당해고 구제신청서는 A4 3~6페이지(2,000~4,000자), 심문회의 답변서는 5~10페이지, 부당노동행위 구제신청서는 5~8페이지가 일반적입니다. 고용노동부 진정·고발장은 A4 2~4페이지로 작성합니다. 어떤 서면이든 사실관계·노동법령 위반 근거·구제 취지의 3단 구조가 핵심입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "근로계약서 작성 글자수", link: "/blog/employment-contract-character-count" }
    ],
    outlinks: [
      { text: "한국공인노무사회", link: "https://www.kapl.or.kr/", description: "공인노무사 자격·업무 기준 공식 채널" },
      { text: "중앙노동위원회", link: "https://www.nlrc.go.kr/", description: "노동위원회 심판 절차 공식 안내" }
    ],
    content: `<p>공인노무사는 노동관계 분쟁에서 의뢰인을 대리해 각종 서면을 작성할 수 있습니다. 서면 유형에 따라 요구 분량과 형식이 다릅니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
부당해고 구제신청서: A4 3~6페이지(2,000~4,000자). 심문회의 답변서: 5~10페이지. 부당노동행위 구제신청서: 5~8페이지. 고용노동부 진정·고발장: A4 2~4페이지. 3단 구조(사실관계·법령 위반 근거·구제 취지) 유지가 핵심.
</div>

<h2>공인노무사 업무 범위 — 공인노무사법 기준</h2>
<p>공인노무사법 제2조에 따라 공인노무사는 다음 업무를 수행할 수 있습니다.</p>
<ul>
<li>노동관계 법령에 따른 서류 작성 및 신고 대행</li>
<li>노동위원회에 제출하는 서류의 작성 및 심판·조정 사건의 대리</li>
<li>고용노동부에 제출하는 진정·고발 서류 작성 및 대리</li>
<li>노무관리 컨설팅 및 교육</li>
</ul>
<p>단, 법원에 제출하는 소장·준비서면 작성 및 소송 대리는 변호사 고유 영역이므로 공인노무사가 대리할 수 없습니다.</p>

<h2>서면 유형별 분량 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">서면 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">부당해고 구제신청서</td>
<td style="border:1px solid #ddd;padding:8px 12px">해고 경위, 부당성 논거, 구제 방법</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3~6페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">심문회의 답변서</td>
<td style="border:1px solid #ddd;padding:8px 12px">사실관계 반박, 판례·법리 인용</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 5~10페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">부당노동행위 구제신청서</td>
<td style="border:1px solid #ddd;padding:8px 12px">노조 활동 방해·불이익 취급 경위</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 5~8페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">고용노동부 진정서</td>
<td style="border:1px solid #ddd;padding:8px 12px">임금 체불·휴업 수당 미지급 사실</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 2~4페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">취업규칙 변경 의견서</td>
<td style="border:1px solid #ddd;padding:8px 12px">변경 내용, 근로자 불이익 여부, 동의 요건</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3~5페이지</td>
</tr>
</tbody>
</table>
</div>

<h2>부당해고 구제신청서 필수 항목</h2>
<p>노동위원회 부당해고 구제신청서에는 다음 항목이 포함되어야 합니다.</p>
<ul>
<li><strong>당사자 표시</strong>: 신청인(근로자) 성명·주소·연락처, 피신청인(사업주) 상호·대표자명·주소</li>
<li><strong>해고 내용</strong>: 해고 통보일·해고 사유·해고 형태(해고·권고사직·계약 해지 등)</li>
<li><strong>부당성 이유</strong>: 해고 사유의 허위·과장, 절차 위반(서면 통보 누락 등), 정당한 사유 없는 해고 주장</li>
<li><strong>입증 자료</strong>: 해고 통보서·근로계약서·급여명세서·취업규칙 등 첨부 목록</li>
<li><strong>구제 내용</strong>: 원직 복직 또는 금전 보상 선택</li>
</ul>

<h2>심문 준비를 위한 서면 작성 전략</h2>
<p>노동위원회 부당해고 심판은 심문회의에서 양측 주장을 듣고 판정합니다. 구제신청서는 첫 번째 서면으로, 심문 기일에 앞서 최대한 구체적인 사실관계와 법적 근거를 담는 것이 유리합니다.</p>
<p>판례를 인용할 때는 사건번호와 판결 요지를 정확하게 기재하고, 인용 취지가 본 사건에 어떻게 적용되는지 설명해야 설득력이 높아집니다. 핵심 사실 정리에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>노동위원회 서면 제출 일정 관리</h2>
<p>노동위원회 절차에서 서면은 정해진 기간 내에 제출해야 합니다. 부당해고 구제신청은 해고일로부터 3개월 이내에 신청해야 하며(근로기준법 제28조), 심문 준비서면은 심문 기일 1주일 전까지 제출하는 것이 일반적입니다.</p>
<p>답변서·준비서면은 상대방 주장의 새로운 쟁점에 대응해 추가로 제출할 수 있습니다. 각 서면 제출 시 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>공인노무사 의견서 작성 자주 묻는 질문</h2>
<p><strong>Q. 부당해고 구제신청서는 처음부터 상세하게 작성해야 하나요?</strong><br>
A. 초기 신청서에는 핵심 사실관계와 구제 취지를 명확히 기재해야 합니다. 상세 법적 논거는 이후 답변서·준비서면에서 보완할 수 있지만, 신청서 단계에서 중요 사실을 누락하면 불리해질 수 있습니다.</p>
<p><strong>Q. 임금 체불 진정서와 고발장은 다른가요?</strong><br>
A. 진정서는 고용노동부가 사실 확인 후 시정을 권고하는 절차이며, 고발장은 형사 처벌을 요구하는 절차입니다. 진정 후 시정이 이루어지지 않으면 고발로 전환할 수 있습니다.</p>

<h2>마무리</h2>
<p>공인노무사 의견서는 노동법령 위반 사실을 법적 논리로 구성하는 전문 문서입니다. 분량보다는 사실관계의 정확성과 관련 법령·판례에 기반한 논거 구성이 승패를 가릅니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 공인노무사법·노동위원회 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 사건의 서면 작성은 담당 공인노무사에게 문의하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "appraisal-report-length-standards",
    title: "감정평가사 평가서 글자수 — 한국감정평가사협회 기준",
    description: "감정평가법 기반 감정평가서 필수 기재 항목, 유형별(부동산·기계·주식) 권장 분량, 감정평가실무기준 핵심 요건을 정리합니다.",
    publishedAt: "2026-08-14T23:00:00+09:00",
    metaTitle: "감정평가사 평가서 글자수 — 감정평가법·항목별 분량 기준 (2026)",
    metaDescription: "감정평가사 감정평가서 필수 기재 항목, 부동산·기계·무형자산 유형별 분량 기준, 감정평가실무기준 핵심 요건을 안내합니다.",
    targetKeywords: ["감정평가서 분량", "감정평가사 평가서", "감정평가법", "한국감정평가사협회", "감정평가 기준"],
    category: "법률 문서",
    tags: ["감정평가사", "감정평가서", "부동산 감정", "감정평가법", "한국감정평가사협회"],
    aeoQuestion: "감정평가서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "감정평가서 분량은 감정 대상과 목적에 따라 크게 다릅니다. 단순 개인 주택 감정평가서는 A4 5~10페이지, 대규모 부동산이나 복합 개발 사업의 경우 20~50페이지 이상입니다. 법원 제출용 감정평가서나 공공용지 취득을 위한 감정평가서는 자세한 산출 근거와 함께 50~100페이지 이상이 될 수 있습니다. 감정평가에 관한 규칙 제16조에 따라 감정평가서에는 필수 기재 사항이 모두 포함되어야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "변호사 의견서 작성 분량", link: "/blog/lawyer-legal-opinion-length-standards" }
    ],
    outlinks: [
      { text: "한국감정평가사협회", link: "https://www.kapanet.or.kr/", description: "감정평가사 자격·업무 기준 공식 채널" },
      { text: "국가법령정보센터 감정평가법", link: "https://www.law.go.kr/법령/감정평가및감정평가사에관한법률", description: "감정평가법 원문 조회" }
    ],
    content: `<p>감정평가서는 감정평가에 관한 규칙(국토교통부령)과 한국감정평가사협회의 감정평가실무기준에 따라 작성됩니다. 감정 대상과 목적에 따라 분량 편차가 매우 큽니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
단순 개인 주택 감정평가서: A4 5~10페이지. 대규모·복합 부동산: 20~50페이지 이상. 법원 제출·공공용지 취득용: 50~100페이지 이상. 감정평가에 관한 규칙 제16조 필수 기재 사항 완전 충족 필수.
</div>

<h2>감정평가서 법적 근거와 의무 기재 사항</h2>
<p>감정평가 및 감정평가사에 관한 법률(감정평가법) 및 감정평가에 관한 규칙 제16조에 따라 감정평가서에는 다음 사항이 반드시 기재되어야 합니다.</p>
<ul>
<li>감정평가법인 등의 명칭·소재지</li>
<li>의뢰인의 성명 또는 명칭·주소</li>
<li>감정평가 목적</li>
<li>감정평가 조건</li>
<li>대상물건의 표시</li>
<li>기준시점(가격 기준 시점)</li>
<li>감정평가액</li>
<li>감정평가 방법 및 산출 근거</li>
<li>전문가(감정평가사) 서명날인</li>
</ul>

<h2>감정평가 유형별 분량 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">감정 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 산출 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">개인 주택</td>
<td style="border:1px solid #ddd;padding:8px 12px">시장 비교사례, 수익환원, 원가법 산출</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 5~10페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">상업용 건물·토지</td>
<td style="border:1px solid #ddd;padding:8px 12px">수익환원법·비교사례 분석</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 10~20페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">법원 제출용 감정평가</td>
<td style="border:1px solid #ddd;padding:8px 12px">상세 산출 근거·비교표 포함</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 20~50페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">공공용지 취득 감정평가</td>
<td style="border:1px solid #ddd;padding:8px 12px">표준지 공시지가 기반 비교 산출</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 30~80페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">기업·무형자산</td>
<td style="border:1px solid #ddd;padding:8px 12px">재무 분석·DCF·시장 비교</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 30~100페이지</td>
</tr>
</tbody>
</table>
</div>

<h2>감정평가 3방식</h2>
<p>감정평가서의 핵심은 감정평가 방법의 적절성과 산출 근거의 투명성입니다. 감정평가실무기준은 다음 3방식을 규정합니다.</p>
<ul>
<li><strong>비교방식(시장비교법)</strong>: 인근 유사 사례와 비교해 가액을 산정. 주거용 부동산에 주로 사용.</li>
<li><strong>원가방식(원가법)</strong>: 대상 물건을 새로 재현하는 데 드는 비용(재조달 원가)에서 감가수정을 차감. 특수 물건·기계 평가에 활용.</li>
<li><strong>수익방식(수익환원법)</strong>: 장래 기대 수익을 현재가치로 환원. 수익성 부동산·기업 가치 평가에 적용.</li>
</ul>
<p>각 방식의 산출 근거와 비교 사례를 상세히 기술할수록 감정평가서의 신뢰성이 높아지며, 이것이 분량 증가의 주요 원인이 됩니다.</p>

<h2>감정평가서 작성 시 주의사항</h2>
<p>감정평가서 작성 시 다음 사항에 유의해야 합니다.</p>
<ul>
<li><strong>기준시점 명확히 기재</strong>: 감정평가액은 특정 시점 기준의 가격이므로, 기준시점(가격 기준일)을 정확히 기재해야 합니다. 기준시점이 다르면 가격이 달라질 수 있습니다.</li>
<li><strong>감정평가 조건 명시</strong>: 현황 기준 또는 개발 완료 후 기준 등 특별한 조건이 있으면 반드시 명시해야 합니다.</li>
<li><strong>감정평가 방법의 적정성</strong>: 복수의 방법을 적용했을 때 결과 차이가 크면 그 이유를 설명해야 합니다.</li>
</ul>

<h2>감정평가서 표준 서식과 디지털화</h2>
<p>한국감정평가사협회는 감정평가서 표준 서식을 제공합니다. 감정 의뢰인이 이해하기 쉽도록 명확하고 일관성 있게 작성하는 것이 기본 원칙입니다. 최근에는 전자 감정평가서 시스템(디지털 감정서)이 도입되어 부동산 거래 시 전자 형태로 발급·제출이 가능합니다.</p>

<h2>감정평가서 관련 자주 묻는 질문</h2>
<p><strong>Q. 개인이 보상 협의를 위해 감정평가를 의뢰할 수 있나요?</strong><br>
A. 네, 공공사업 시행자(LH·도로공사 등)의 감정평가 결과에 이의가 있으면 토지 소유자도 독자적으로 감정평가사에게 감정평가를 의뢰할 수 있습니다. 이 경우 의뢰인이 감정평가 비용을 부담합니다.</p>
<p><strong>Q. 법원 경매에서 감정평가서는 어떻게 작성되나요?</strong><br>
A. 법원이 선임한 감정인(감정평가사)이 경매 부동산을 현장 방문해 감정평가서를 작성합니다. 법원 경매용 감정평가서는 일반 감정평가서보다 양식이 정형화되어 있고, 경매 개시 결정 후 수개월 내에 작성됩니다.</p>
<p><strong>Q. 감정평가서는 얼마나 보존해야 하나요?</strong><br>
A. 감정평가법에 따라 감정평가법인 등은 감정평가서 원본을 5년간 보존해야 합니다.</p>

<h2>마무리</h2>
<p>감정평가서는 감정 목적과 대상에 따라 분량이 크게 달라지지만, 법령이 규정하는 필수 기재 사항과 산출 근거의 충분성이 가장 중요합니다. 항목별 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 감정평가법·감정평가에 관한 규칙 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 감정평가서 작성은 한국감정평가사협회 지침을 따르시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "realtor-property-disclosure-length-standards",
    title: "공인중개사 중개대상물 확인설명서 분량 — 한국공인중개사협회",
    description: "공인중개사법 기반 중개대상물 확인·설명서 유형별 항목 수, 필수 기재 내용, 주거용·비주거용·토지 서식 분량 차이를 정리합니다.",
    publishedAt: "2026-08-15T04:00:00+09:00",
    metaTitle: "공인중개사 중개대상물 확인설명서 분량 — 항목별 기준 완벽 정리 (2026)",
    metaDescription: "공인중개사법 제25조 중개대상물 확인·설명서 서식(주거용·비주거용·토지) 항목 수와 분량, 필수 기재 사항, 3년 보존 의무를 안내합니다.",
    targetKeywords: ["중개대상물 확인설명서", "공인중개사 확인설명서", "공인중개사법 25조", "부동산 계약 서류", "한국공인중개사협회"],
    category: "법률 문서",
    tags: ["공인중개사", "확인설명서", "부동산 계약", "공인중개사법", "한국공인중개사협회"],
    aeoQuestion: "공인중개사 중개대상물 확인·설명서는 어느 정도 분량인가요?",
    aeoAnswer: "공인중개사법 시행규칙이 정한 중개대상물 확인·설명서는 서식 유형에 따라 분량이 다릅니다. 주거용 건축물(별지 제20호 서식)은 A4 4쪽 분량으로 기본확인사항·세부확인사항·개업공인중개사 세부확인사항으로 구성됩니다. 비주거용 건축물 서식도 유사하며, 토지 서식은 A4 3쪽 수준입니다. 확인설명서는 거래 계약 체결 시 작성해 교부하고, 원본·사본을 3년간 보존해야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "임대차 계약 해지 통지서 글자수", link: "/blog/lease-termination-notice-character-count" }
    ],
    outlinks: [
      { text: "국토교통부 공인중개업 안내", link: "https://www.molit.go.kr/USR/policyTarget/dtl.jsp?idx=416", description: "중개대상물 확인설명서 Q&A 공식 안내" },
      { text: "국가법령정보센터 공인중개사법", link: "https://casenote.kr/법령/공인중개사법/제25조", description: "공인중개사법 제25조 원문 조회" }
    ],
    content: `<p>공인중개사 중개대상물 확인·설명서는 공인중개사법 제25조에 근거해 중개 계약 완성 시 반드시 작성·교부해야 하는 법정 서류입니다. 법정 서식으로 분량이 미리 정해져 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
주거용 건축물 서식(별지 제20호): A4 4쪽. 비주거용 건축물 서식: A4 4쪽 수준. 토지 서식: A4 3쪽 수준. 거래 계약 체결 시 작성·교부 의무. 원본·사본 3년간 보존 의무(공인중개사법 제25조).
</div>

<h2>공인중개사법 제25조 — 확인·설명 의무</h2>
<p>공인중개사법 제25조 제3항은 개업공인중개사가 중개가 완성되어 거래계약서를 작성할 때에는 확인·설명 사항을 중개대상물 확인·설명서에 기재해 거래 당사자에게 교부해야 한다고 규정합니다. 설명의 근거 자료(등기부등본·건축물대장 등)도 제시해야 합니다.</p>
<p>확인·설명서를 교부하지 않거나 허위로 기재하면 업무 정지 또는 등록 취소 처분 대상이 됩니다.</p>

<h2>확인·설명서 서식 유형과 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">서식 번호</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">적용 대상</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">별지 제20호 서식(Ⅰ)</td>
<td style="border:1px solid #ddd;padding:8px 12px">주거용 건축물(단독·공동주택·주거용 오피스텔)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 4쪽</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">별지 제20호 서식(Ⅱ)</td>
<td style="border:1px solid #ddd;padding:8px 12px">비주거용 건축물(상업용·오피스·공장 등)</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 4쪽</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">별지 제20호 서식(Ⅲ)</td>
<td style="border:1px solid #ddd;padding:8px 12px">토지</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3쪽</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">별지 제20호 서식(Ⅳ)</td>
<td style="border:1px solid #ddd;padding:8px 12px">입목·광업재단·공장재단</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 3쪽</td>
</tr>
</tbody>
</table>
</div>

<h2>주거용 건축물 확인·설명서 주요 기재 항목</h2>
<p>주거용 건축물(별지 제20호 Ⅰ 서식)의 기재 항목은 다음과 같습니다.</p>
<ul>
<li><strong>기본확인사항</strong>: 건축물 표시(소재지·지번·면적·건축연도), 권리관계(소유권·전세권·저당권·임차권 등), 거래 예정 금액</li>
<li><strong>세부확인사항</strong>: 입지조건(도로 접면·교통·학교·편의시설), 관리상태(누수·균열·방충망 등), 환경조건(일조·소음·조망), 벽면 및 마감재 상태</li>
<li><strong>개업공인중개사 세부확인사항</strong>: 계량기 및 누전차단기, 수도관 동파 방지, 연탄가스 감지기, 중개보수 계산 내역</li>
<li><strong>거래당사자 확인</strong>: 매도인·매수인(또는 임대인·임차인) 서명날인, 개업공인중개사·소속공인중개사 서명날인</li>
</ul>

<h2>서식에 없는 특이사항 기재 방법</h2>
<p>법정 서식 외에 중개 물건의 특이사항(예: 재건축 추진 중, 임차인 보증금 반환 분쟁 중 등)은 서식의 '기타 사항' 란에 추가 기재할 수 있습니다. 이 란에는 분량 제한이 없으므로 필요한 경우 충분히 기재하는 것이 법적 책임을 줄이는 방법입니다.</p>
<p>추가 기재 시 글자 수 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>확인·설명서 허위 기재 시 책임</h2>
<p>공인중개사가 확인·설명서를 허위로 기재하거나 성실히 설명하지 않은 경우, 의뢰인에게 손해가 발생하면 손해배상 책임을 집니다. 공인중개사법 제30조에 따라 개업공인중개사는 고의 또는 과실로 의뢰인에게 손해를 입힌 경우 그 손해를 배상할 책임이 있습니다.</p>
<p>또한 확인·설명서를 교부하지 않거나 거짓으로 기재한 경우 500만 원 이하의 과태료 처분을 받을 수 있습니다.</p>

<h2>전자 계약 시 확인·설명서 작성</h2>
<p>부동산 전자 계약 시스템(국토교통부 운영)을 통해 거래계약서와 확인·설명서를 전자 문서로 작성·서명할 수 있습니다. 전자 계약 시에도 서식 항목과 기재 요건은 종이 계약과 동일합니다. 전자 확인·설명서는 시스템에 자동 보존되어 3년 보존 의무를 충족합니다.</p>

<h2>확인·설명서 자주 묻는 질문</h2>
<p><strong>Q. 임대차 계약 갱신 시에도 확인·설명서를 다시 작성해야 하나요?</strong><br>
A. 네, 임대차 계약 갱신도 '중개가 완성된 때'에 해당하므로 확인·설명서를 새로 작성해 교부해야 합니다.</p>
<p><strong>Q. 확인·설명 사항 중 모르는 항목은 어떻게 기재하나요?</strong><br>
A. 확인하지 못한 사항은 "확인 불가"로 기재하고, 의뢰인에게 직접 확인하도록 안내해야 합니다. 빈칸으로 두거나 임의로 기재하면 안 됩니다.</p>

<h2>마무리</h2>
<p>공인중개사 확인·설명서는 법정 서식이므로 분량은 정해져 있습니다. 중요한 것은 모든 항목을 정확하게 기재하고 거래 당사자의 서명을 받아 3년간 보존하는 것입니다. 특이사항 기재 시 <a href="/tools/character-counter">글자수 세기 도구</a>로 분량을 확인하세요.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 공인중개사법·국토교통부 공개 자료를 바탕으로 작성된 참고 자료입니다. 최신 서식은 국토교통부 또는 한국공인중개사협회에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "architect-design-document-length-standards",
    title: "건축사 설명서 작성 글자수 — 대한건축사협회 표준",
    description: "건축물의 설계도서 작성기준(국토교통부 고시) 기반 설계 설명서 항목별 분량, 각 단계별(계획설계·중간설계·실시설계) 차이를 정리합니다.",
    publishedAt: "2026-08-15T09:00:00+09:00",
    metaTitle: "건축사 설계 설명서 글자수 — 설계도서 작성기준·항목별 분량 (2026)",
    metaDescription: "건축물 설계도서 작성기준 기반 건축사 설계 설명서 항목별 분량, 계획설계·중간설계·실시설계 단계별 차이, 건축법 요건을 안내합니다.",
    targetKeywords: ["건축사 설계 설명서", "설계도서 작성기준", "건축물 설명서 분량", "대한건축사협회", "건축사 서류"],
    category: "기술 문서",
    tags: ["건축사", "설계 설명서", "설계도서", "대한건축사협회", "건축법"],
    aeoQuestion: "건축사 설계 설명서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "건축사 설계 설명서는 설계 단계와 건물 규모에 따라 다릅니다. 계획설계(기본계획) 설명서는 A4 10~20페이지, 중간설계(기본설계) 설명서는 20~40페이지, 실시설계 설명서(시방서 포함)는 50~100페이지 이상입니다. 국토교통부 고시 '건축물의 설계도서 작성기준'은 설계도서 유형별(도면·시방서·구조계산서·내역서) 포함 사항을 규정합니다. 설명서의 핵심 항목은 설계 개요·공사 범위·재료 기준·시공 방법입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "기술사 의견서 분량", link: "/blog/technical-expert-opinion-length-standards" }
    ],
    outlinks: [
      { text: "대한건축사협회", link: "https://www.kira.or.kr/", description: "건축사 자격·표준 공식 채널" },
      { text: "국토교통부 건축물 설계도서 작성기준", link: "https://www.law.go.kr/admRulInfoP.do?admRulSeq=2000000013479", description: "국토교통부 설계도서 작성기준 원문" }
    ],
    content: `<p>건축사 설계 설명서는 국토교통부 고시 '건축물의 설계도서 작성기준'에 따라 작성됩니다. 설계 단계와 건물 규모에 따라 분량 편차가 큽니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
계획설계 설명서: A4 10~20페이지. 중간설계 설명서: 20~40페이지. 실시설계 설명서(시방서 포함): 50~100페이지 이상. 핵심 항목: 설계 개요·공사 범위·재료 기준·시공 방법. 국토교통부 고시 기준 준수.
</div>

<h2>설계도서의 구성과 법적 근거</h2>
<p>건축법 제11조에 따라 건축 허가를 받으려면 설계도서를 제출해야 합니다. 건축물의 설계도서 작성기준(국토교통부 고시)은 설계도서를 다음 유형으로 구분합니다.</p>
<ul>
<li><strong>도면</strong>: 배치도·평면도·입면도·단면도·구조도·설비도 등</li>
<li><strong>시방서(공사 설명서)</strong>: 재료·공법·시공 방법·품질 기준 서술</li>
<li><strong>구조계산서</strong>: 구조 안전성 계산 근거</li>
<li><strong>공사비 내역서</strong>: 공종별 수량·단가·금액</li>
</ul>
<p>이 중 '설명서' 또는 '시방서'가 문자로 작성되는 문서이며, 본 글에서 다루는 분량 기준의 대상입니다.</p>

<h2>설계 단계별 설명서 분량</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">설계 단계</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 설명 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">계획설계(기본계획)</td>
<td style="border:1px solid #ddd;padding:8px 12px">건축 개요, 프로그램 분석, 대안 비교</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 10~20페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">중간설계(기본설계)</td>
<td style="border:1px solid #ddd;padding:8px 12px">설계 방향 확정, 주요 재료·구조 기술</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 20~40페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">실시설계</td>
<td style="border:1px solid #ddd;padding:8px 12px">시방서·재료표·공사 방법 상세 기술</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 50~100페이지 이상</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">감리 보고서</td>
<td style="border:1px solid #ddd;padding:8px 12px">공정별 감리 결과, 이행 확인</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 10~30페이지</td>
</tr>
</tbody>
</table>
</div>

<h2>시방서(공사 설명서) 작성 원칙</h2>
<p>시방서는 설계도면으로 표현하기 어려운 재료·공법·품질 기준을 문자로 기술하는 문서입니다. 국토교통부가 제공하는 표준 시방서(Korean Construction Standards)를 기준으로 작성하며, 특수 공법이나 재료를 사용할 경우 특기 시방서를 추가합니다.</p>
<p>시방서의 각 공종별 설명은 200~500자 수준으로 재료 규격·시공 순서·품질 관리 기준을 포함합니다.</p>

<h2>설계 설명서 작성 팁</h2>
<p>설계 설명서의 가독성을 높이려면 목차·번호 체계·표·도표를 활용합니다. 발주처나 허가 기관이 설명서에서 찾는 정보는 ① 무엇을 짓는가(용도·규모), ② 어떤 재료로 짓는가(주요 재료), ③ 어떻게 짓는가(시공 방법)의 3가지입니다. 이 3가지를 명확하고 충분히 기술하는 것이 핵심입니다.</p>
<p>각 항목 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>설계도서 작성기준 개정(2024.12.31. 시행)과 변경 사항</h2>
<p>국토교통부는 2024년 12월 31일 시행을 목표로 '건축물의 설계도서 작성기준'을 개정했습니다. 이번 개정에서는 구조분 도서(구조 설계 도면·계산서)의 작성 주체 관련 규정을 명확히 했습니다. 기존과 같이 건축사와 건축구조기술사 모두 구조 도면을 작성할 수 있으며, 대한건축사협회는 회원들에게 이 사실을 공식 안내했습니다.</p>
<p>설계도서 작성기준 개정 여부와 현행 기준은 국토교통부 국가법령정보센터에서 확인할 수 있습니다.</p>

<h2>건축 허가 제출 서류와 설명서 분량 점검</h2>
<p>건축 허가 시 제출하는 설계도서 중 설계 설명서는 도면 못지않게 중요합니다. 허가 담당자가 설계 의도와 법령 적합성을 판단하는 근거가 되기 때문입니다. 설명서가 너무 간략하면 보완을 요구받거나 허가가 지연될 수 있습니다.</p>
<p>공사 범위·재료·공법이 복잡한 특수 건축물(문화시설·의료시설·교육시설 등)일수록 더 상세한 설명서가 요구됩니다. 각 항목 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>마무리</h2>
<p>건축사 설계 설명서는 설계 단계와 건물 규모에 따라 크게 다르지만, 국토교통부 고시 기준과 발주 목적에 맞는 충분한 설명이 포함되어야 법적 요건과 실무 요구를 충족할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 건축법·건축물의 설계도서 작성기준 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 프로젝트의 설계도서 작성 기준은 대한건축사협회 또는 관할 허가 기관에 문의하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "technical-expert-opinion-length-standards",
    title: "기술사 의견서 분량 — 한국기술사회 권장 양식",
    description: "기술사 기술 검토 의견서·감정 의견서 유형별 분량, 필수 기재 항목, 기술사법 업무 범위를 정리합니다.",
    publishedAt: "2026-08-15T14:00:00+09:00",
    metaTitle: "기술사 의견서 분량 — 유형별 기준·필수 항목 완벽 정리 (2026)",
    metaDescription: "기술사 기술 검토 의견서·법원 감정 의견서·기술 자문서 유형별 권장 분량, 필수 항목, 기술사법 업무 범위를 안내합니다.",
    targetKeywords: ["기술사 의견서", "기술 검토 의견서", "기술사 감정", "한국기술사회", "기술사법"],
    category: "기술 문서",
    tags: ["기술사", "기술 검토 의견서", "감정 의견서", "한국기술사회", "기술사법"],
    aeoQuestion: "기술사 의견서는 어느 정도 분량으로 작성해야 하나요?",
    aeoAnswer: "기술사 의견서는 용도에 따라 분량이 다릅니다. 간단한 기술 자문 의견서는 A4 2~5페이지(1,500~3,500자), 설계·시공 기술 검토 의견서는 5~15페이지, 법원 제출 감정 의견서는 10~50페이지 이상입니다. 의견서에는 검토 대상·검토 방법·판단 근거·결론이 반드시 포함되어야 하며, 기술 분야별 법령(건설기술진흥법·전기사업법 등) 인용이 권장됩니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "건축사 설명서 작성 글자수", link: "/blog/architect-design-document-length-standards" }
    ],
    outlinks: [
      { text: "한국기술사회", link: "https://www.kpe.or.kr/", description: "기술사 자격·업무 기준 공식 채널" },
      { text: "국가법령정보센터 기술사법", link: "https://www.law.go.kr/법령/기술사법", description: "기술사법 원문 조회" }
    ],
    content: `<p>기술사는 기술 분야의 최고 전문 자격으로, 기술 검토·감정·자문 의견서를 작성합니다. 사용 목적에 따라 분량 편차가 큽니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
기술 자문 의견서: A4 2~5페이지(1,500~3,500자). 설계·시공 검토 의견서: 5~15페이지. 법원 감정 의견서: 10~50페이지 이상. 필수 항목: 검토 대상·방법·판단 근거·결론. 분야별 법령 인용 권장.
</div>

<h2>기술사법 업무 범위</h2>
<p>기술사법 제2조에 따라 기술사는 과학기술 분야에 관한 고도의 전문적인 응용 능력을 갖추고 기술 업무를 수행하는 자격자입니다. 기술사는 자신의 전문 기술 분야 내에서 다음 업무를 수행합니다.</p>
<ul>
<li>기술 설계·계획·조사·분석·연구·시험·시공·감리·평가·진단</li>
<li>기술 감정·기술 자문·기술 검토</li>
<li>기술 관련 법원 감정인으로서 감정 의견서 제출</li>
</ul>

<h2>의견서 유형별 분량 기준</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">의견서 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">권장 분량</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">기술 자문 의견서</td>
<td style="border:1px solid #ddd;padding:8px 12px">단순 기술 사항 검토·권고</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 2~5페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">설계·시공 검토 의견서</td>
<td style="border:1px solid #ddd;padding:8px 12px">설계 도서·공법 검토, 적합성 판단</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 5~15페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">하자 감정 의견서</td>
<td style="border:1px solid #ddd;padding:8px 12px">하자 원인·범위·보수 방법 분석</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 10~30페이지</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">법원 제출 감정 의견서</td>
<td style="border:1px solid #ddd;padding:8px 12px">사실 확인·기술 판단·쟁점 답변</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 10~50페이지</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">환경 영향 기술 검토</td>
<td style="border:1px solid #ddd;padding:8px 12px">환경 기준 부합 여부, 저감 방안</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">A4 15~30페이지</td>
</tr>
</tbody>
</table>
</div>

<h2>기술 검토 의견서 필수 구성 항목</h2>
<p>기술사 의견서는 다음 항목으로 구성합니다.</p>
<ul>
<li><strong>검토 목적 및 배경</strong>: 의뢰 목적, 검토 대상 물건/공법, 관련 분쟁 또는 설계 단계</li>
<li><strong>검토 자료 및 방법</strong>: 참고한 설계 도서·시험 성적서·관련 법령, 현장 조사 여부</li>
<li><strong>현황 분석</strong>: 대상의 현재 상태, 문제점 또는 검토 대상 사항 기술</li>
<li><strong>기술적 판단</strong>: 관련 기준(KS·ISO·법령) 대비 적합성 판단, 수치 근거 포함</li>
<li><strong>결론 및 권고</strong>: 판단 결과 요약, 개선·보완 사항 권고</li>
<li><strong>기술사 서명날인</strong>: 성명·자격 분야·자격번호·연락처</li>
</ul>

<h2>하자 감정 의견서 — 법원 제출 기준</h2>
<p>건설 공사 하자 소송에서 법원이 선임하는 감정인으로서 기술사가 작성하는 하자 감정 의견서는 가장 상세한 형태입니다. 쟁점별로 하자 여부·원인·보수 비용을 답변하는 구조로 구성되며, 사진·도면·시험 결과 등 첨부 자료가 많아 전체 분량이 50페이지 이상이 되는 경우도 있습니다.</p>
<p>법원 감정 의견서에는 감정인이 직접 현장 조사를 실시했다는 사실과 조사 일시·방법이 명시되어야 합니다.</p>

<h2>기술사 의견서 작성 시 주의사항</h2>
<p>기술사 의견서 작성 시 다음 사항에 주의해야 합니다.</p>
<ul>
<li><strong>자격 범위 준수</strong>: 기술사는 본인이 취득한 기술사 자격 분야 내에서만 의견을 제시할 수 있습니다. 예를 들어 건축구조기술사는 구조 분야에 한정해 의견서를 작성해야 합니다.</li>
<li><strong>현장 확인 여부 명시</strong>: 현장 방문 없이 서류 검토만으로 작성한 의견서는 그 한계를 명시해야 합니다.</li>
<li><strong>수치 근거 제시</strong>: "불안전하다"가 아니라 "○○기준치(허용 응력 180MPa)의 120%인 216MPa이 계측되어 기준 초과"처럼 구체적 수치와 기준을 함께 제시합니다.</li>
<li><strong>서명 및 자격번호 기재</strong>: 기술사 의견서에는 반드시 성명·자격번호·취득 분야를 기재하고 서명날인해야 공식 문서로 인정됩니다.</li>
</ul>

<h2>기술사 의견서 vs 시험성적서·인증서</h2>
<p>기술사 의견서는 전문가의 주관적 기술 판단을 담은 문서로, 공인시험기관이 발급하는 시험성적서나 인증서와 다릅니다. 법원이나 발주처에 따라 기술사 의견서보다 공인 시험성적서·인증서를 요구하는 경우도 있으므로, 의뢰 목적에 맞는 서류 유형을 먼저 확인하는 것이 좋습니다.</p>

<h2>마무리</h2>
<p>기술사 의견서는 용도에 따라 분량이 크게 달라지지만, 어떤 경우에도 검토 대상·방법·판단 근거·결론의 4단 구조를 갖추고, 관련 기술 기준·법령 인용이 포함되어야 합니다. 항목별 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 기술사법·건설기술진흥법 공개 자료를 바탕으로 작성된 참고 자료입니다. 개별 기술 검토 의견서 작성 기준은 한국기술사회 지침을 따르시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  }
];
