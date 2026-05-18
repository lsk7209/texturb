import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH36: BlogPost[] = [
  {
    slug: "limited-acceptance-application",
    title: "한정승인 신고서 작성법 — 가족법원 표준 양식 분량",
    description: "민법 제1019조 기준 한정승인 신고서 작성 분량, 상속재산명세표, 특별한정승인 절차와 가정법원 신고 요건을 정리합니다.",
    publishedAt: "2026-08-10T14:00:00+09:00",
    metaTitle: "한정승인 신고서 작성법 — 민법 3개월 기한·가정법원 양식 (2026)",
    metaDescription: "민법 기준 한정승인 신고서 분량, 상속재산명세표 작성법, 3개월 기한과 특별한정승인(안 날부터 3개월)을 정리합니다.",
    targetKeywords: ["한정승인", "한정승인 신고서", "상속재산명세표", "특별한정승인", "가정법원 상속"],
    category: "가족법 문서",
    tags: ["한정승인", "상속", "민법", "가정법원", "상속재산"],
    aeoQuestion: "한정승인 신고서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "한정승인 신고서는 가정법원 표준 양식 빈칸 채우기 방식으로 본문은 300~600자면 충분합니다. 핵심은 상속재산명세표 작성으로, 적극재산·소극재산을 빠짐없이 기재해야 합니다. 상속 개시가 있음을 안 날부터 3개월 이내에 상속개시지의 가정법원에 신고하며, 신고인 또는 대리인의 인감증명서를 첨부합니다. 특별한정승인은 채무 초과 사실을 안 날부터 3개월 이내 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "상속 포기 신고서 글자수", link: "/blog/inheritance-renunciation-application" }
    ],
    outlinks: [
      { text: "찾기쉬운 생활법령 한정승인", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=255&ccfNo=4&cciNo=3&cnpClsNo=1", description: "한정승인 개념·방법 공식 안내" },
      { text: "법원 전자민원센터", link: "https://help.scourt.go.kr/", description: "가정법원 양식 다운로드" }
    ],
    content: `<p>한정승인 신고서는 가정법원 표준 양식 빈칸 채우기 방식입니다. 신고서 본문은 300~600자면 충분하며, 핵심은 별도 작성하는 상속재산명세표입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
신고서 본문 300~600자, 표준 양식 빈칸 채우기. 핵심은 상속재산명세표(적극재산·소극재산 빠짐없이). 상속 개시 안 날부터 3개월 내 상속개시지 가정법원 신고. 신고인 또는 대리인 인감증명서 첨부. 특별한정승인은 채무 초과 사실 안 날부터 3개월.
</div>

<h2>한정승인이란 — 안전한 절충안</h2>
<p>민법 제1028조의 한정승인은 상속받는 재산의 한도 내에서만 상속채무를 변제하는 제도입니다. 채무가 재산보다 많을지 확신하기 어려울 때 가장 안전한 선택입니다.</p>

<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">구분</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">한정승인</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">상속 포기</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">재산 처분</td>
<td style="border:1px solid #ddd;padding:8px 12px">재산 한도 내 채무 변제 후 잔여 수령</td>
<td style="border:1px solid #ddd;padding:8px 12px">재산도 모두 포기</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">후순위 영향</td>
<td style="border:1px solid #ddd;padding:8px 12px">후순위 상속인에게 채무 이전 안 됨</td>
<td style="border:1px solid #ddd;padding:8px 12px">후순위로 상속권 이전</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">절차 복잡도</td>
<td style="border:1px solid #ddd;padding:8px 12px">상속재산명세표 작성·청산 절차 필요</td>
<td style="border:1px solid #ddd;padding:8px 12px">신고만으로 종료</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">사용 시기</td>
<td style="border:1px solid #ddd;padding:8px 12px">채무 규모 불확실 시</td>
<td style="border:1px solid #ddd;padding:8px 12px">채무 명백히 초과 시</td>
</tr>
</tbody>
</table>
</div>

<h2>한정승인 신고서 — 표준 항목</h2>
<ol>
<li><strong>청구인(상속인) 인적사항</strong>: 성명·주민등록번호·주소·연락처</li>
<li><strong>피상속인 정보</strong>: 성명·사망일자·등록기준지</li>
<li><strong>상속 개시 안 날</strong>: 3개월 기산점</li>
<li><strong>한정승인 의사 표시</strong>: 명확한 진술 문구</li>
<li><strong>첨부 상속재산명세표 표시</strong>: 별지 첨부 명시</li>
<li><strong>신고일·신고인 기명날인 또는 서명</strong></li>
</ol>

<h2>상속재산명세표 — 가장 중요한 첨부</h2>
<p>서울가정법원이 공시한 상속재산명세표 양식은 적극재산과 소극재산을 빠짐없이 적도록 구성됩니다. 작성 누락 시 단순승인으로 의제될 위험이 있으니 주의가 필요합니다.</p>

<ul>
<li><strong>적극재산</strong>: 부동산·예금·주식·자동차·보험금·채권 등</li>
<li><strong>소극재산</strong>: 대출·신용카드 미결제·세금 체납·보증채무 등</li>
<li><strong>증빙</strong>: 등기부등본·금융거래내역·세금 고지서·신용정보조회서</li>
</ul>

<h2>제출 서류</h2>
<ul>
<li>한정승인 신고서(또는 한정승인 심판 청구서)</li>
<li>상속재산명세표(별지)</li>
<li>청구인 가족관계증명서</li>
<li>청구인 주민등록등본</li>
<li>청구인 인감증명서</li>
<li>피상속인 말소자주민등록등본</li>
<li>피상속인 제적등본 또는 기본증명서</li>
</ul>

<h2>특별한정승인 — 3개월 도과 후의 구제</h2>
<p>민법 제1019조 제3항은 상속 채무가 상속 재산을 초과한다는 사실을 중대한 과실 없이 안 날부터 3개월 이내에 특별한정승인을 신청할 수 있도록 정합니다. 이미 일부 재산을 처분한 경우 처분한 재산의 목록과 가액을 함께 제출해야 합니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>채권자 통지 의무</strong><br>
한정승인이 수리되면 상속인은 5일 이내에 일반 채권자들에게 공고·최고 절차를 시작해야 합니다(민법 제1032조). 청산 절차를 진행하지 않으면 한정승인 효력이 일부 제한될 수 있습니다.
</div>

<h2>한정승인 후 청산 절차</h2>
<p>한정승인 수리 후 상속인은 다음 단계로 상속재산을 청산합니다.</p>

<ol>
<li><strong>채권자 공고·최고</strong>: 일간신문 공고 + 알려진 채권자 직접 통지</li>
<li><strong>채권 신고 기간(2개월 이상)</strong>: 채권자 신고 대기</li>
<li><strong>재산 환가</strong>: 상속재산 매각 또는 평가</li>
<li><strong>우선순위에 따라 채무 변제</strong>: 우선권자·일반 채권자 순</li>
<li><strong>잔여 재산 수령</strong>: 변제 후 남은 재산은 상속인에게</li>
</ol>

<h2>실무 권장 사항</h2>
<p>한정승인 절차는 법리·청산이 복잡해 다음 경우 변호사·법무사 상담이 권장됩니다.</p>

<ul>
<li>상속재산이 다수·고액이거나 평가가 어려운 경우</li>
<li>채무가 다수의 채권자에게 분산된 경우</li>
<li>피상속인이 사업·연대보증 등 잠재 채무가 있는 경우</li>
<li>가족 내 상속분 다툼이 있는 경우</li>
</ul>

<h2>마무리</h2>
<p>한정승인은 분량보다 상속재산명세표의 정확성과 3개월 기한 준수가 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 신고서 분량을 점검하고, <a href="/blog/inheritance-renunciation-application">상속 포기 신고 가이드</a>와 함께 비교하면 본인 사안에 맞는 선택이 가능합니다. 법률구조공단(국번 없이 132) 상담을 적극 활용하세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 민법·법원행정처 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 변호사 또는 가정법원 민원실에 상담하시기 바랍니다.</p>`
  },
  {
    slug: "court-deposit-application",
    title: "공탁 신청서 분량 가이드 — 법원 공탁 공식 양식 분석",
    description: "공탁법·공탁규칙 기준 변제공탁 신청서 작성 분량, 전자공탁(ekt.scourt.go.kr) 활용, 공탁물 출급·회수 절차를 정리합니다.",
    publishedAt: "2026-08-10T19:00:00+09:00",
    metaTitle: "공탁 신청서 분량 — 법원 공탁규칙·전자공탁 양식 기준 (2026)",
    metaDescription: "공탁법·공탁규칙 기준 변제공탁 신청서 분량, 전자공탁(ekt.scourt.go.kr)·법원 방문 신청 절차, 공탁물 수령 청구를 정리합니다.",
    targetKeywords: ["공탁 신청서", "변제공탁", "전자공탁", "공탁 양식", "공탁 출급"],
    category: "법률·행정 문서",
    tags: ["공탁", "변제공탁", "공탁법", "법원", "법률 문서"],
    aeoQuestion: "공탁 신청서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "공탁 신청서(공탁서)는 공탁규칙 별지 제11호 서식 등 정해진 양식의 빈칸 채우기 방식입니다. 자유 기술 부분은 공탁 사유에 대해 200~600자 정도이며, 전체 A4 1장 분량이 일반적입니다. 공탁서 2통을 작성해 공탁관에게 제출 후 지정 은행에 공탁물을 납입합니다. 전자공탁(ekt.scourt.go.kr)을 통해 비대면 신청도 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "내용증명 우편 작성 글자수", link: "/blog/certified-mail-content-character-count" }
    ],
    outlinks: [
      { text: "전자공탁 시스템", link: "https://ekt.scourt.go.kr/pjg/index.on?m=PJG172M03", description: "공탁 양식·신청 공식 채널" },
      { text: "찾기쉬운 생활법령 공탁서 작성", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1529&ccfNo=2&cciNo=1&cnpClsNo=2", description: "공탁서 작성·제출 공식 안내" }
    ],
    content: `<p>공탁 신청서는 공탁규칙 별지 제11호 서식 등 정해진 양식의 빈칸 채우기 방식입니다. 자유 기술 부분은 공탁 사유 200~600자, 전체 A4 1장 분량이 일반적입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
공탁규칙 별지 제11호 서식 사용, 공탁 사유 200~600자. 공탁서 2통 작성해 공탁관 제출 후 지정 은행 납입. 전자공탁(ekt.scourt.go.kr) 비대면 신청 가능. 피공탁자 주소 소명 서면 첨부 필수.
</div>

<h2>공탁이 가능한 경우</h2>
<p>공탁법은 다음 사유로 공탁을 허용합니다. 가장 빈번한 것은 변제공탁입니다.</p>

<ul>
<li><strong>변제공탁</strong>: 채권자가 수령 거절·수령 불능·채권자 불명일 때</li>
<li><strong>담보공탁</strong>: 가압류·가처분 등 담보 제공</li>
<li><strong>집행공탁</strong>: 강제집행 절차에서 권리자 확정 곤란 시</li>
<li><strong>몰취공탁</strong>: 형사 절차에서 보증금</li>
<li><strong>보관공탁</strong>: 특별법상 보관 의무</li>
</ul>

<h2>변제공탁 — 가장 많은 유형</h2>
<p>채무자가 채무 이행을 하려고 해도 채권자가 수령을 거부하거나 누구인지 알 수 없을 때 사용합니다. 공탁이 성립하면 채무는 면제됩니다.</p>

<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-family:monospace;font-size:13px">
<strong>변제공탁 가능 사례</strong><br>
• 채권자가 정당한 사유 없이 수령 거부<br>
• 채권자가 부재중·연락 두절<br>
• 채권자가 사망했는데 상속인이 정해지지 않음<br>
• 채권자가 다수이고 우선권자가 분명하지 않음
</div>

<h2>공탁서 — 핵심 기재 항목</h2>
<ol>
<li><strong>공탁자 인적사항</strong>: 성명·주소·주민등록번호</li>
<li><strong>피공탁자 인적사항</strong>: 성명·주소(소명 서면 필수)</li>
<li><strong>공탁 원인 사실</strong>: 채무 발생 경위와 공탁 필요 사유(200~600자)</li>
<li><strong>법령 조항</strong>: 적용 법령 명시</li>
<li><strong>공탁물</strong>: 금전·유가증권·기타 물건</li>
<li><strong>회수 청구권 유보 여부</strong>: 일정 사유 발생 시 회수 가능</li>
</ol>

<h2>공탁 절차</h2>
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
<td style="border:1px solid #ddd;padding:8px 12px">1. 공탁서 작성</td>
<td style="border:1px solid #ddd;padding:8px 12px">공탁서 2통 + 첨부 서면</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">2. 공탁관 제출</td>
<td style="border:1px solid #ddd;padding:8px 12px">관할 법원 공탁계 또는 전자공탁</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">3. 심사·수리</td>
<td style="border:1px solid #ddd;padding:8px 12px">공탁관이 형식 심사 후 수리</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">4. 공탁물 납입</td>
<td style="border:1px solid #ddd;padding:8px 12px">지정 은행·창고업자에 납입</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">5. 통지</td>
<td style="border:1px solid #ddd;padding:8px 12px">피공탁자에게 공탁 사실 통지</td>
</tr>
</tbody>
</table>
</div>

<h2>전자공탁 — 비대면 신청</h2>
<p>대한민국 법원 전자공탁 사이트(ekt.scourt.go.kr)에서는 다음 서비스를 제공합니다.</p>

<ul>
<li>공탁서 작성·제출(공동인증서 인증)</li>
<li>공탁물 회수·출급 청구</li>
<li>공탁 사건 조회</li>
<li>공탁용어·양식 다운로드</li>
<li>전자 송달·통지</li>
</ul>

<p>전자공탁은 24시간 이용 가능하며, 법원 방문 신청보다 처리가 빠릅니다.</p>

<h2>공탁물 수령 — 피공탁자 청구</h2>
<p>공탁된 물건을 받으려면 피공탁자가 공탁물 출급청구서를 작성해 공탁소에 제출합니다. 다음 서류가 필요합니다.</p>

<ul>
<li>공탁물 출급청구서</li>
<li>본인 신분증·인감증명서</li>
<li>대리 청구 시 위임장</li>
<li>공탁자가 회수 청구권을 유보한 경우 출급 동의서</li>
</ul>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>공탁 후 회수 — 제한적</strong><br>
공탁자는 일정 사유(피공탁자 수령 거부·공탁 무효 등)가 있을 때만 공탁물을 회수할 수 있습니다. 공탁 후 임의로 회수해 채무 면책 효과를 무효로 만들 수 없도록 제한됩니다.
</div>

<h2>공탁 수수료와 보관 비용</h2>
<p>공탁규칙에 따라 공탁 신청 시 수수료가 부과됩니다. 일반적인 변제공탁의 경우 공탁금액에 비례하지만 상한이 정해져 있습니다. 또한 공탁물 보관에 따른 이자가 발생하며, 출급 시 함께 지급됩니다.</p>

<ul>
<li><strong>변제공탁 수수료</strong>: 공탁금액의 일정 비율(상한 있음)</li>
<li><strong>담보공탁</strong>: 별도 수수료 체계</li>
<li><strong>공탁 이자</strong>: 시중 정기예금 금리 수준 적용</li>
<li><strong>출급 시 정산</strong>: 원금 + 이자 - 수수료</li>
</ul>

<h2>마무리</h2>
<p>공탁은 채무 면제를 위한 강력한 수단이지만 절차가 엄격합니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 공탁 원인 사실 분량을 점검하고, 자세한 양식은 전자공탁(ekt.scourt.go.kr)에서 다운로드하세요. 사안이 복잡하면 법무사·변호사 상담이 권장됩니다. 채권자가 다수이거나 외국인이 포함된 경우, 공탁 후에도 채권자 사이의 우선순위 분쟁이 발생할 수 있으니 법률 자문이 필수입니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 공탁법·공탁규칙·법원행정처 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 가까운 법원 공탁계 또는 변호사에게 상담하시기 바랍니다.</p>`
  },
  {
    slug: "execution-stay-petition-length",
    title: "강제집행 정지 신청서 글자수 — 법원 표준 양식",
    description: "민사집행법 기준 강제집행 정지 신청서 작성 분량, 항소장 접수증명서·인지 1,000원·송달료 절차를 정리합니다.",
    publishedAt: "2026-08-11T00:00:00+09:00",
    metaTitle: "강제집행 정지 신청서 — 민사집행법·항소심 절차 양식 (2026)",
    metaDescription: "민사집행법 기준 강제집행 정지 신청서 분량, 항소장 접수증명서·인지 1,000원·송달료 2회분 첨부, 가집행 정지 절차를 정리합니다.",
    targetKeywords: ["강제집행 정지", "강제집행정지신청", "가집행 정지", "민사집행법", "항소심"],
    category: "법률·행정 문서",
    tags: ["강제집행", "민사집행법", "법원", "항소", "법률 문서"],
    aeoQuestion: "강제집행 정지 신청서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "강제집행 정지 신청서는 신청취지 100~300자, 신청이유 500~1,500자가 표준입니다. 항소장을 원심법원에 접수한 후 항소장 접수증명서를 교부받아 신청서에 첨부합니다. 인지 1,000원과 송달료 2회분을 납부하며, 소송기록이 있는 법원에 제출합니다. 신청 인용 시 본안 판결 확정 시까지 강제집행이 일시 정지됩니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "행정소송 소장 글자수", link: "/blog/administrative-litigation-complaint-length" }
    ],
    outlinks: [
      { text: "법원 전자민원센터 강제집행정지", link: "https://help.scourt.go.kr/nm/min_6/min_6_1/index.html", description: "강제집행정지신청 공식 안내" },
      { text: "찾기쉬운 생활법령 강제집행", link: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=272&ccfNo=4&cciNo=7&cnpClsNo=1", description: "강제집행 절차 공식 안내" }
    ],
    content: `<p>강제집행 정지 신청서는 신청취지 100~300자, 신청이유 500~1,500자가 실무 표준입니다. 전체 A4 1~2장 분량이 일반적입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
신청취지 100~300자, 신청이유 500~1,500자(A4 1~2장). 항소장 접수증명서·인지 1,000원·송달료 2회분 첨부. 소송기록이 있는 법원에 제출. 인용 시 본안 판결 확정 시까지 강제집행 일시 정지.
</div>

<h2>강제집행 정지가 필요한 경우</h2>
<p>다음과 같은 경우 강제집행 정지를 신청할 실익이 있습니다.</p>

<ul>
<li><strong>가집행 선고 판결 후</strong>: 판결 확정 전 강제집행이 진행될 때</li>
<li><strong>청구이의의 소</strong>: 집행권원의 내용에 이의가 있을 때</li>
<li><strong>제3자이의의 소</strong>: 제3자의 권리가 침해될 때</li>
<li><strong>재심 청구</strong>: 확정 판결을 재심으로 다툴 때</li>
<li><strong>강제집행 면제 사유</strong>: 변제·합의 등 사유 발생</li>
</ul>

<h2>신청취지 작성 예시</h2>
<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-family:monospace;font-size:13px">
<strong>예시 — 가집행 정지</strong><br><br>
"위 당사자 간 OO지방법원 2026가단OOOO 사건의 판결에 기한 강제집행은 항소심 판결 선고 시까지 이를 정지한다는 결정을 구합니다."
</div>

<h2>신청이유 — 4단 구성</h2>
<ol>
<li><strong>당사자 및 사건(100~200자)</strong>: 신청인·피신청인·기본 사건 표시</li>
<li><strong>강제집행 진행 상황(200~400자)</strong>: 어떤 집행이 진행 중인지</li>
<li><strong>정지 필요 사유(200~500자)</strong>: 본안에서 다투는 이유</li>
<li><strong>보증 제공 의사(100~300자)</strong>: 담보 제공 가능 여부</li>
</ol>

<h2>제출 비용·서류</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">금액·서류</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">인지대</td>
<td style="border:1px solid #ddd;padding:8px 12px">1,000원(수입인지)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">송달료</td>
<td style="border:1px solid #ddd;padding:8px 12px">2회분 예납(은행 영수증 첨부)</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">필수 첨부</td>
<td style="border:1px solid #ddd;padding:8px 12px">항소장 접수증명서</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">담보 제공</td>
<td style="border:1px solid #ddd;padding:8px 12px">법원이 정한 보증(현금·공탁·보증서)</td>
</tr>
</tbody>
</table>
</div>

<h2>항소심과의 연계</h2>
<p>강제집행 정지는 본안 항소·재심·청구이의 등과 함께 진행됩니다. 절차 흐름은 다음과 같습니다.</p>

<ol>
<li><strong>판결 송달</strong>: 1심 판결문 받음</li>
<li><strong>항소장 제출</strong>: 송달 후 2주 이내 원심법원에 접수</li>
<li><strong>접수증명서 교부</strong>: 법원에서 항소장 접수 증명</li>
<li><strong>정지 신청</strong>: 소송기록이 있는 법원에 신청서 제출</li>
<li><strong>심리·결정</strong>: 보증 제공 명령 후 정지 결정</li>
<li><strong>본안 진행</strong>: 항소심에서 본안 다툼</li>
</ol>

<h2>담보 제공 — 필수 사항</h2>
<p>법원은 강제집행 정지로 인한 채권자의 손해를 보전하기 위해 신청인에게 담보 제공을 명합니다. 일반적으로 청구금액의 50~100% 수준이며, 다음 방법으로 제공할 수 있습니다.</p>

<ul>
<li><strong>현금공탁</strong>: 가장 일반적</li>
<li><strong>유가증권 공탁</strong>: 국채·예금증서 등</li>
<li><strong>이행보증보험증권</strong>: 보험사 발급</li>
<li><strong>은행 지급보증</strong>: 은행 발급</li>
</ul>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>긴급 사정 — 즉시 신청</strong><br>
강제집행이 임박했거나 진행 중인 경우 정지 결정이 늦어지면 회복 불가능한 손해가 발생합니다. 항소장 접수와 동시에 정지 신청을 하고, 법원에 긴급성을 강조하는 사실관계를 명확히 적는 것이 중요합니다.
</div>

<h2>잠정처분 vs 본안 결정</h2>
<p>강제집행 정지 결정은 본안의 잠정처분 성격을 가집니다. 최종 본안 판결에 따라 다음과 같이 효력이 결정됩니다.</p>

<ul>
<li><strong>본안에서 항소 인용</strong>: 기존 강제집행이 무효화, 담보 회수 가능</li>
<li><strong>본안에서 항소 기각</strong>: 강제집행 재개, 담보로 채권자 손해 보전</li>
<li><strong>화해·조정으로 종결</strong>: 합의 내용에 따라 처리</li>
</ul>

<h2>청구이의의 소와 병행</h2>
<p>판결 이외의 집행권원(공정증서·이행권고결정 등)에 이의가 있는 경우 청구이의의 소를 함께 제기하면서 강제집행 정지를 신청할 수 있습니다. 이 경우 신청서에 청구이의의 소 제기 사실을 명시해야 합니다.</p>

<h2>마무리</h2>
<p>강제집행 정지는 항소·재심과 병행 진행되는 절차로, 시점이 결정적입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 신청이유 분량을 점검하고, <a href="/blog/administrative-litigation-complaint-length">행정소송 소장 가이드</a>도 함께 참고하세요. 강제집행이 진행 중이라면 변호사 상담을 즉시 받는 것이 권장됩니다. 압류 대상이 임금·생활자금이라면 별도로 압류금지 채권 신청도 함께 고려해야 생계가 보호됩니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 민사집행법·법원행정처 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 변호사 또는 법률구조공단(국번 없이 132)에 상담하시기 바랍니다.</p>`
  },
  {
    slug: "epeople-civil-complaint-response",
    title: "민원 신청 답변서 분량 — 국민신문고 공식 응답 기준",
    description: "민원처리법 기준 국민신문고 민원 종류별 처리 기간(7~14일), 답변서 작성 분량, 고충민원 60일+60일 연장 절차를 정리합니다.",
    publishedAt: "2026-08-11T05:00:00+09:00",
    metaTitle: "민원 답변서 분량 — 국민신문고·민원처리법 기준 (2026)",
    metaDescription: "민원처리법 기준 국민신문고 일반민원(7~14일)·고충민원(60+60일) 처리 절차, 답변서 작성 분량을 정리합니다.",
    targetKeywords: ["국민신문고 민원", "민원 답변서", "민원 처리 기간", "고충민원", "국민권익위"],
    category: "행정 문서",
    tags: ["국민신문고", "민원", "국민권익위", "민원처리법", "행정"],
    aeoQuestion: "민원 답변서는 분량을 얼마로 써야 하나요?",
    aeoAnswer: "행정기관이 작성하는 민원 답변서는 일반민원 기준 500~1,500자(A4 1~2장)가 표준입니다. 신청인 입장에서 작성하는 추가 의견·이의제기서는 300~800자면 충분합니다. 민원처리법에 따라 질의민원은 법령 관련 14일, 절차 관련 7일, 건의민원은 14일 이내에 처리됩니다. 고충민원은 국민권익위에서 60일 이내(60일 연장 가능)에 처리합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "정보공개 청구서 작성법", link: "/blog/information-disclosure-request" }
    ],
    outlinks: [
      { text: "국민신문고", link: "https://www.epeople.go.kr/", description: "민원 신청 공식 채널" },
      { text: "국민권익위 고충민원", link: "https://www.acrc.go.kr/menu.es?mid=a10201010200", description: "고충민원 처리절차 안내" }
    ],
    content: `<p>국민신문고 민원의 답변서·이의제기서는 일반민원 기준 500~1,500자(A4 1~2장)가 표준입니다. 민원처리법이 정한 처리 기간 내 답변을 받게 됩니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
행정기관 답변서 500~1,500자(A4 1~2장), 신청인 추가 의견 300~800자. 질의민원 7~14일, 건의민원 14일, 고충민원 60일(60일 연장 가능). 국민신문고(epeople.go.kr)에서 모든 민원 통합 처리.
</div>

<h2>민원 유형별 처리 기간</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">민원 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">설명</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:center">처리 기간</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">법령 질의민원</td>
<td style="border:1px solid #ddd;padding:8px 12px">법령 해석·설명 요청</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">14일</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">절차 질의민원</td>
<td style="border:1px solid #ddd;padding:8px 12px">제도·절차 설명 요청</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">7일</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">건의민원</td>
<td style="border:1px solid #ddd;padding:8px 12px">제도 개선 건의</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">14일</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">고충민원</td>
<td style="border:1px solid #ddd;padding:8px 12px">행정기관 처분 불만</td>
<td style="border:1px solid #ddd;padding:8px 12px;text-align:center">60+60일</td>
</tr>
</tbody>
</table>
</div>

<h2>민원 신청서 작성 요령 — 300~800자</h2>
<p>신청인이 작성하는 민원 본문은 다음 4단 구성을 권장합니다.</p>

<ol>
<li><strong>본인 인적사항(50자)</strong>: 자동 입력되는 항목 외 추가 정보</li>
<li><strong>민원 요지(100~200자)</strong>: 무엇을 묻거나 요청하는지 한 단락</li>
<li><strong>구체적 사실관계(150~400자)</strong>: 시간 순으로 객관 기술</li>
<li><strong>희망 처리 방향(50~200자)</strong>: 어떤 답변·조치를 원하는지</li>
</ol>

<h2>행정기관 답변서 — 500~1,500자</h2>
<p>행정기관이 작성하는 답변서는 다음 구성을 따릅니다.</p>

<ul>
<li><strong>민원 요약</strong>: 신청인의 민원 내용 정리</li>
<li><strong>관련 법령·규정</strong>: 적용되는 법령 인용</li>
<li><strong>답변 내용</strong>: 처리 결과 또는 안내</li>
<li><strong>이의제기 안내</strong>: 답변에 불복할 수 있는 절차</li>
<li><strong>담당자 연락처</strong>: 추가 문의 채널</li>
</ul>

<h2>고충민원 — 국민권익위 60일 처리</h2>
<p>고충민원은 행정기관의 위법·부당한 처분이나 불합리한 행정 제도에 대한 불만 사항입니다. 국민권익위원회가 직접 처리합니다.</p>

<ol>
<li><strong>민원 접수</strong>: 국민신문고에서 고충민원 선택</li>
<li><strong>실태조사</strong>: 권익위가 행정기관 자료 요구·현장 조사</li>
<li><strong>처리 의견</strong>: 시정 권고·제도 개선·기각 등</li>
<li><strong>통보</strong>: 60일 이내(부득이한 경우 60일 추가 연장)</li>
</ol>

<h2>이의제기 — 답변에 불복할 때</h2>
<p>민원 답변에 만족하지 못하면 다음 절차로 이의제기가 가능합니다.</p>

<ul>
<li><strong>재신청</strong>: 동일 기관에 추가 자료와 함께 재신청</li>
<li><strong>상급기관 신청</strong>: 처분청의 상급기관에 직접 민원</li>
<li><strong>고충민원 전환</strong>: 국민권익위에 정식 고충민원 신청</li>
<li><strong>행정심판·소송</strong>: 처분 자체를 다투는 정식 절차</li>
</ul>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>실지조사 기간 — 처리 기간 제외</strong><br>
민원 처리 중 실지조사가 필요한 기간은 처리기간에 산입하지 않습니다(민원처리법 시행령). 따라서 실제 답변까지 걸리는 시간은 명목 기간보다 길어질 수 있습니다.
</div>

<h2>처리 기간 연장 — 절차</h2>
<p>행정기관이 부득이한 사유로 처리 기간을 지키지 못할 경우 1회에 한해 처리 기간 범위에서 연장할 수 있습니다(민원처리법). 연장 시 신청인에게 사전 통지해야 합니다.</p>

<h2>국민신문고 — 통합 처리 채널</h2>
<p>국민신문고(epeople.go.kr)는 다음 민원을 통합 접수합니다.</p>

<ul>
<li>중앙·지방·교육청 등 모든 행정기관 민원</li>
<li>공공기관(공기업·준정부기관) 민원</li>
<li>국민제안·정책토론</li>
<li>고충민원·청원</li>
<li>부패·공익신고</li>
</ul>

<h2>민원 종류별 활용 전략</h2>
<p>같은 사안이라도 민원 분류에 따라 처리 절차와 기간이 달라집니다.</p>

<ul>
<li><strong>법령 질의가 핵심</strong>: 법령 질의민원으로 분류해 정확한 해석 확보</li>
<li><strong>제도 개선 희망</strong>: 건의민원으로 분류해 정책 반영 가능성 확대</li>
<li><strong>처분 불만</strong>: 처음부터 고충민원으로 분류해 권익위 조사 활용</li>
<li><strong>긴급 사안</strong>: 콜센터(110) 전화 민원으로 신속 처리</li>
</ul>

<h2>마무리</h2>
<p>민원은 분량보다 사실관계의 객관성과 적용 법령 명시가 답변 품질을 좌우합니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 분량을 점검하고, <a href="/blog/information-disclosure-request">정보공개 청구</a>를 병행하면 처리 기관의 자료 근거도 확인할 수 있습니다. 답변에 불복하면 국민권익위 고충민원 또는 행정심판으로 넘어갈 수 있습니다.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 민원처리법·국민권익위 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 국민신문고(epeople.go.kr) 또는 국민권익위 콜센터(국번 없이 110)에 문의하시기 바랍니다.</p>`
  },
  {
    slug: "information-disclosure-request",
    title: "정보공개 청구서 작성법 — 정보공개포털 표준 양식 분량",
    description: "공공기관의 정보공개에 관한 법률 시행규칙 별지 제1호의2서식 기준 정보공개 청구서 작성 분량과 처리 기간 10일을 정리합니다.",
    publishedAt: "2026-08-11T10:00:00+09:00",
    metaTitle: "정보공개 청구서 — 정보공개포털·시행규칙 별지 1호의2 (2026)",
    metaDescription: "공공기관의 정보공개에 관한 법률 기준 정보공개 청구서 표준 분량, 정보공개포털(open.go.kr)·청구 대상 기관, 10일 처리·10일 연장 절차를 정리합니다.",
    targetKeywords: ["정보공개 청구", "정보공개 청구서", "정보공개포털", "공공기관 정보공개", "정보공개법"],
    category: "행정 문서",
    tags: ["정보공개", "정보공개포털", "행정안전부", "공공기관", "행정"],
    aeoQuestion: "정보공개 청구서는 분량을 어떻게 써야 하나요?",
    aeoAnswer: "정보공개 청구서는 공공기관의 정보공개에 관한 법률 시행규칙 별지 제1호의2서식을 사용합니다. 양식 빈칸 채우기 방식으로 청구하는 정보 내용란이 핵심이며, 200~600자로 구체적으로 기재합니다. 정보공개포털(open.go.kr)에서 모든 공공기관에 통합 청구할 수 있으며, 처리 기간은 10일(부득이한 경우 10일 연장)입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "민원 신청 답변서 분량", link: "/blog/epeople-civil-complaint-response" }
    ],
    outlinks: [
      { text: "정보공개포털", link: "https://www.open.go.kr/", description: "정보공개 청구 공식 통합 채널" },
      { text: "행정안전부 정보공개", link: "https://www.mois.go.kr/frt/a02/selectInfoPublish.do", description: "정보공개 정책 공식 안내" }
    ],
    content: `<p>정보공개 청구서는 공공기관의 정보공개에 관한 법률 시행규칙 별지 제1호의2서식을 사용합니다. 양식 빈칸 채우기 방식으로 청구 정보 내용란이 핵심이며 200~600자로 작성합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
시행규칙 별지 제1호의2서식 사용, 청구 정보 내용란 200~600자. 정보공개포털(open.go.kr) 통합 청구. 처리 기간 10일(부득이한 경우 10일 연장). 공개·부분공개·비공개 결정 후 이의신청·행정심판·소송 가능.
</div>

<h2>정보공개 청구 — 누가 할 수 있나</h2>
<p>공공기관의 정보공개에 관한 법률 제5조는 모든 국민이 정보공개를 청구할 권리를 가진다고 정합니다. 외국인도 일정 요건 하에 청구 가능합니다.</p>

<ul>
<li><strong>국민</strong>: 본인 신원 입증만 하면 누구나 청구</li>
<li><strong>법인·단체</strong>: 사업자등록증·법인등기부등본 등</li>
<li><strong>외국인</strong>: 국내 거주자 또는 학술·연구 목적인 경우</li>
</ul>

<h2>청구 대상 기관</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기관 유형</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">예시</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">중앙행정기관</td>
<td style="border:1px solid #ddd;padding:8px 12px">기획재정부·고용노동부·국세청 등</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">지방자치단체</td>
<td style="border:1px solid #ddd;padding:8px 12px">시·도, 시·군·구, 읍·면·동</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">국가·지자체 산하 공공기관</td>
<td style="border:1px solid #ddd;padding:8px 12px">국민건강보험공단·국민연금공단 등</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">국공립 학교</td>
<td style="border:1px solid #ddd;padding:8px 12px">국공립 초중고·국립대학</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">공기업·준정부기관</td>
<td style="border:1px solid #ddd;padding:8px 12px">한국전력공사·코레일 등</td>
</tr>
</tbody>
</table>
</div>

<h2>청구서 작성 — 핵심 항목</h2>
<ol>
<li><strong>청구인 인적사항</strong>: 성명·주민등록번호·주소·연락처</li>
<li><strong>청구 정보 내용</strong>: 구체적으로 200~600자 기재(핵심)</li>
<li><strong>청구 정보 사용 목적</strong>: 50~150자(공개 결정에 영향)</li>
<li><strong>공개 방법</strong>: 사본 교부·열람·전자파일·전자메일 송부 중 선택</li>
<li><strong>수수료 납부 방법</strong>: 본인 면제 사유 있으면 표시</li>
</ol>

<h2>청구 정보 내용 — 200~600자 작성법</h2>
<p>청구 정보 내용란이 가장 중요합니다. 구체적으로 적어야 공개 결정이 빨라집니다.</p>

<ul>
<li><strong>정보의 특정</strong>: 어떤 문서·자료·통계인지 명확히</li>
<li><strong>기간 명시</strong>: 언제부터 언제까지 자료인지</li>
<li><strong>형식 명시</strong>: 보고서·통계·회의록 등</li>
<li><strong>관련 부서</strong>: 알고 있다면 담당 부서명</li>
</ul>

<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px 18px;margin:16px 0;border-radius:6px;font-family:monospace;font-size:13px">
<strong>예시 — 좋은 청구 정보 내용</strong><br><br>
"2024년 1월 1일부터 2025년 12월 31일까지 OO시청 환경관리과에서 작성한 폐기물 처리업체 단속 결과 보고서 전부. 단속 일자·위반 업체명·처분 내용이 포함된 문서를 요청합니다."
</div>

<h2>처리 기간 — 10일 + 10일 연장</h2>
<p>정보공개법 제11조는 공공기관이 청구를 받은 날부터 10일 이내에 공개 여부를 결정하도록 정합니다. 부득이한 사유가 있으면 10일 범위에서 연장할 수 있습니다.</p>

<h2>공개 결정의 3가지 유형</h2>
<ul>
<li><strong>공개 결정</strong>: 청구한 정보 전부 공개</li>
<li><strong>부분공개 결정</strong>: 비공개 사유에 해당하는 부분만 가리고 공개</li>
<li><strong>비공개 결정</strong>: 정보공개법 제9조 비공개 사유에 해당</li>
</ul>

<h2>비공개 사유 — 8가지</h2>
<p>정보공개법 제9조 제1항은 다음 정보를 비공개 대상으로 합니다.</p>

<ol>
<li>법령상 비밀·비공개 사항</li>
<li>국가안전보장·국방·통일·외교 관련</li>
<li>국민의 생명·신체·재산 보호와 관련</li>
<li>진행 중인 재판·범죄 수사·예방</li>
<li>감사·감독·계약·심사 등 의사결정 과정</li>
<li>개인정보(특정 개인 식별 가능)</li>
<li>법인·단체의 경영·영업상 비밀</li>
<li>부동산 투기·매점매석 등 우려</li>
</ol>

<h2>이의신청 — 30일 이내</h2>
<p>비공개·부분공개 결정에 불복하면 30일 이내에 같은 기관에 이의신청할 수 있습니다. 이의신청이 기각되면 행정심판 또는 행정소송으로 넘어갈 수 있습니다.</p>

<div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;margin:16px 0;border-radius:4px">
<strong>수수료 — 공개 대상에만</strong><br>
정보공개법 시행령은 사본 교부·전자파일 송부 등에 따라 수수료를 부과합니다. 공익을 위한 청구·취약계층 청구 등은 면제됩니다. 정보공개포털에서 면제 신청도 가능합니다.
</div>

<h2>마무리</h2>
<p>정보공개 청구는 청구 정보 내용란의 구체성이 핵심입니다. <a href="/tools/character-counter">텍스터브 글자수 세기 도구</a>로 분량을 점검하고, <a href="/blog/epeople-civil-complaint-response">민원 답변서 가이드</a>와 병행하면 행정 자료 확보가 한결 수월해집니다. 자세한 안내는 정보공개포털(open.go.kr) 또는 이용문의(1588-2572)에서 받으세요.</p>

<p style="font-size:12px;color:#666;margin-top:32px;padding-top:16px;border-top:1px solid #eee">이 글은 AI 도구를 활용해 공공기관의 정보공개에 관한 법률·행정안전부 공식 자료를 정리·요약한 결과입니다. 구체적인 사안은 정보공개포털 또는 변호사에게 상담하시기 바랍니다.</p>`
  },
];
