import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH50: BlogPost[] = [
  {
    slug: "gpts-custom-instructions-korean-site-guide",
    title: "GPTs 커스텀 지시문 작성법 — 한국어 사이트 운영자 가이드",
    description: "OpenAI GPTs의 커스텀 지시문(Custom Instructions) 작성법, 한국어 사이트 운영자를 위한 GPT 설정 전략, 시스템 프롬프트·지식 파일·액션 구성 방법을 정리합니다.",
    publishedAt: "2026-08-25T04:00:00+09:00",
    metaTitle: "GPTs 커스텀 지시문 작성법 — 한국어 사이트 운영자 가이드 (2026)",
    metaDescription: "OpenAI GPTs 커스텀 지시문 작성법, 한국어 사이트 운영자 GPT 설정 전략, 시스템 프롬프트·지식 파일·액션 구성 방법을 안내합니다.",
    targetKeywords: ["GPTs 커스텀 지시문", "GPTs 만들기", "OpenAI GPTs", "커스텀 GPT", "GPT 설정"],
    category: "AI 도구 활용",
    tags: ["GPTs", "OpenAI", "커스텀지시문", "AI도구", "한국어"],
    aeoQuestion: "OpenAI GPTs 커스텀 지시문을 한국어로 효과적으로 작성하는 방법은 무엇인가요?",
    aeoAnswer: "GPTs 커스텀 지시문은 크게 역할 정의, 행동 규칙, 출력 형식 세 부분으로 구성합니다. '당신은 한국 중소기업 대표를 돕는 세금 상담 어시스턴트입니다'처럼 역할을 명확히 하고, '국세청 공식 정보만 인용하세요', '의료·법률 조언은 전문가 상담을 권고하세요'처럼 행동 규칙을 설정하며, '항상 격식체 존댓말로 답하세요', '답변 길이는 500자 이내로 유지하세요'처럼 출력 형식을 지정합니다. 지식 파일에 자주 묻는 질문 문서를 업로드하면 더 정확한 답변이 가능합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "Role-play 프롬프트 활용법", link: "/blog/role-play-prompt-guide-korean-precision" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>OpenAI GPTs는 ChatGPT를 특정 목적에 맞게 커스터마이징한 AI 어시스턴트를 만드는 기능입니다. 한국어 사이트 운영자나 기업이 자신의 서비스에 맞는 GPTs를 구축하면 고객 응대·콘텐츠 생성·업무 자동화에 활용할 수 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
GPTs 커스텀 지시문 3요소: ①역할 정의 ②행동 규칙(금지·권고) ③출력 형식(문체·분량). 한국어 설정: 존댓말·분량·출처 명시. 지식 파일: FAQ·매뉴얼 업로드로 정확도 향상. 공개/비공개 설정으로 내부·외부 활용 구분 가능.
</div>

<h2>GPTs 커스텀 지시문 구성 요소</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">구성 요소</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">예시</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">역할 정의</td>
<td style="border:1px solid #ddd;padding:8px 12px">GPTs의 정체성·목적</td>
<td style="border:1px solid #ddd;padding:8px 12px">"당신은 한국 중소기업 세금 상담 어시스턴트입니다"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">전문 분야</td>
<td style="border:1px solid #ddd;padding:8px 12px">다룰 수 있는 주제 범위</td>
<td style="border:1px solid #ddd;padding:8px 12px">"부가가치세, 법인세, 원천징수, 세금 계산서"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">행동 규칙</td>
<td style="border:1px solid #ddd;padding:8px 12px">해야 할 것과 하지 말아야 할 것</td>
<td style="border:1px solid #ddd;padding:8px 12px">"국세청 공식 정보만 인용, 구체적 세무 결정은 전문가 상담 권고"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">출력 형식</td>
<td style="border:1px solid #ddd;padding:8px 12px">문체·분량·구조</td>
<td style="border:1px solid #ddd;padding:8px 12px">"격식체 존댓말, 500자 이내, 항목이 여러 개면 번호 목록"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">범위 외 처리</td>
<td style="border:1px solid #ddd;padding:8px 12px">주제 범위를 벗어난 질문 처리</td>
<td style="border:1px solid #ddd;padding:8px 12px">"세금 무관 질문은 '전문 분야 외' 안내 후 세금 관련 도움 제안"</td>
</tr>
</tbody>
</table>
</div>

<h2>한국어 GPTs를 위한 필수 설정</h2>
<p>한국어 서비스 운영자가 GPTs를 설정할 때 반드시 포함해야 할 항목입니다.</p>
<ul>
<li><strong>한국어 출력 고정</strong>: "사용자가 어떤 언어로 질문해도 항상 한국어로 답하세요"를 포함하면 영어 질문에도 한국어로 답합니다.</li>
<li><strong>문체 통일</strong>: "격식체 존댓말(습니다체)로 답하세요"처럼 문체를 고정합니다.</li>
<li><strong>출처 명시</strong>: 특정 공식 기관(국세청·보건복지부 등)의 정보만 인용하도록 지정합니다.</li>
<li><strong>면책 문구 자동화</strong>: 의료·법률·세무 관련 답변 말미에 "전문가 상담을 권장합니다"를 자동으로 추가합니다.</li>
</ul>

<h2>지식 파일 활용 전략</h2>
<p>GPTs에 파일을 업로드하면 해당 문서를 바탕으로 더 정확한 답변을 생성합니다. 효과적인 지식 파일 유형은 다음과 같습니다. FAQ 문서(자주 묻는 질문과 공식 답변), 제품·서비스 매뉴얼, 사내 정책·규정 문서, 도메인 특화 용어집 등을 업로드하면 GPTs가 해당 내용을 참조합니다. 지식 파일은 최신 정보로 정기적으로 업데이트하는 것이 중요합니다. 커스텀 지시문 작성 시 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>GPTs 보안·개인정보 고려사항</h2>
<p>GPTs를 고객 서비스에 활용할 때 다음 보안·개인정보 사항을 고려해야 합니다. 민감한 고객 정보(개인정보·계좌번호)를 GPTs에 입력하지 않도록 사용자에게 안내합니다. GPTs에 업로드한 지식 파일은 ChatGPT 사용자에게 일부 노출될 수 있으므로, 기밀 내용은 포함하지 않습니다. 업무용 내부 GPTs는 공개 설정 대신 비공개(Private) 또는 조직 내부(Team) 공유로 설정합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. GPTs는 무료로 만들 수 있나요?</strong><br>
GPTs를 만들려면 ChatGPT Plus 또는 Team 구독이 필요합니다. 무료 사용자는 다른 사람이 만든 GPTs를 사용할 수 있지만, 직접 만들기는 유료 계정이 필요합니다.</p>
<p><strong>Q. GPTs와 ChatGPT의 일반 커스텀 지시문의 차이는 무엇인가요?</strong><br>
ChatGPT의 '사용자 지정 지침'은 개인 계정 전체에 적용되는 반면, GPTs는 특정 목적에 맞게 독립적으로 설정되는 별도의 AI 어시스턴트입니다. GPTs는 지식 파일 업로드·액션 설정·독립 공유 URL 등 더 많은 기능을 제공합니다.</p>

<h2>마무리</h2>
<p>GPTs 커스텀 지시문은 역할 정의·행동 규칙·출력 형식의 세 부분으로 구성하고, 한국어 사이트 운영자는 문체 고정·출처 명시·면책 문구 자동화를 반드시 포함해야 합니다. 지식 파일을 정기 업데이트하고 보안 설정을 확인해 안전하게 활용하세요.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 GPTs 원칙을 바탕으로 작성된 참고 자료입니다. OpenAI GPTs 기능·정책은 지속 업데이트되므로 최신 정보는 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "ai-writing-workflow-research-draft-edit",
    title: "AI 글쓰기 워크플로우 — 리서치→초고→편집 단계 자동화",
    description: "AI를 활용한 콘텐츠 제작 전 과정 워크플로우, 리서치·초고 생성·편집의 각 단계별 AI 도구 활용법과 효율적인 한국어 콘텐츠 생산 파이프라인을 정리합니다.",
    publishedAt: "2026-08-25T09:00:00+09:00",
    metaTitle: "AI 글쓰기 워크플로우 — 리서치→초고→편집 단계 자동화 가이드 (2026)",
    metaDescription: "AI 활용 콘텐츠 제작 워크플로우, 리서치·초고 생성·편집 단계별 AI 도구 활용법, 한국어 콘텐츠 생산 파이프라인을 안내합니다.",
    targetKeywords: ["AI 글쓰기 워크플로우", "콘텐츠 제작 자동화", "AI 리서치", "AI 초고", "콘텐츠 파이프라인"],
    category: "AI 도구 활용",
    tags: ["워크플로우", "AI글쓰기", "자동화", "콘텐츠", "파이프라인"],
    aeoQuestion: "AI를 활용한 글쓰기 워크플로우를 리서치부터 편집까지 어떻게 구성하나요?",
    aeoAnswer: "AI 글쓰기 워크플로우는 세 단계로 구성합니다. 1단계 리서치: Perplexity·Claude에 '○○ 주제의 핵심 사실·통계·최신 동향을 공식 출처와 함께 정리하세요'라고 요청합니다. 2단계 초고: ChatGPT·Claude에 리서치 결과를 바탕으로 '○○ 구조와 ○○자 분량으로 초고를 작성하세요'라고 지시합니다. 3단계 편집: 번역체 교정, 사실 검증, 독창성 강화(개인 경험·관점 추가)를 진행합니다. 각 단계를 AI로 자동화하되, 최종 판단은 사람이 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "AI 글쓰기 검증 프로세스", link: "/blog/ai-writing-hallucination-verification-guide" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>AI 글쓰기 도구를 효과적으로 활용하려면 리서치·초고·편집 각 단계에 맞는 AI 도구와 프롬프트 전략이 필요합니다. 단계별 워크플로우를 구성하면 콘텐츠 생산 효율과 품질을 동시에 높일 수 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
AI 글쓰기 3단계: ①리서치(Perplexity·웹 검색) → ②초고(Claude·ChatGPT) → ③편집(번역체 교정·사실 검증·독창성 강화). 단계별 AI 도구 분리가 핵심. 최종 판단은 반드시 사람이 담당.
</div>

<h2>단계별 AI 도구 활용 전략</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">단계</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">추천 도구</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 프롬프트 패턴</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">리서치</td>
<td style="border:1px solid #ddd;padding:8px 12px">Perplexity, Google, 각 부처 사이트</td>
<td style="border:1px solid #ddd;padding:8px 12px">"○○ 관련 공식 통계·정책·최신 동향 출처와 함께 정리"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">개요 설계</td>
<td style="border:1px solid #ddd;padding:8px 12px">Claude, ChatGPT</td>
<td style="border:1px solid #ddd;padding:8px 12px">"리서치 결과를 바탕으로 ○○자 글의 H2 목차 5개 제안"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">초고 작성</td>
<td style="border:1px solid #ddd;padding:8px 12px">Claude, ChatGPT</td>
<td style="border:1px solid #ddd;padding:8px 12px">"개요에 따라 각 단락을 ○○자씩 작성, 격식체 존댓말"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">번역체 교정</td>
<td style="border:1px solid #ddd;padding:8px 12px">ChatGPT, Claude</td>
<td style="border:1px solid #ddd;padding:8px 12px">"번역체 표현을 자연스러운 한국어로 교정"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">사실 검증</td>
<td style="border:1px solid #ddd;padding:8px 12px">사람 직접 확인</td>
<td style="border:1px solid #ddd;padding:8px 12px">공식 기관 원문 교차 확인 필수</td>
</tr>
</tbody>
</table>
</div>

<h2>1단계: 리서치 자동화</h2>
<p>리서치 단계에서 Perplexity AI를 활용하면 출처가 포함된 정보를 빠르게 수집할 수 있습니다. "한국 ○○ 분야의 최신 정책 변화를 공식 출처와 함께 정리하세요"처럼 구체적인 질문으로 공식 기관 자료를 수집합니다. 수집한 정보에서 구체적 수치·법령·날짜는 반드시 원문 출처에서 직접 확인합니다. 공식 기관 사이트(통계청·각 부처)를 직접 방문해 최신 정보를 확인하는 것이 AI 검색보다 더 정확합니다.</p>

<h2>2단계: 초고 생성 자동화</h2>
<p>리서치 결과를 바탕으로 초고를 생성할 때는 구조화된 지시가 효과적입니다. 먼저 개요(목차)를 AI로 생성하고 사람이 검토·수정합니다. 승인된 개요를 바탕으로 각 단락을 분리해 생성하면 전체를 한 번에 생성하는 것보다 더 깊이 있는 내용이 만들어집니다. 초고 생성 후 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>3단계: 편집 자동화와 사람 검토</h2>
<p>초고 편집 단계에서 자동화 가능한 부분과 사람이 직접 해야 하는 부분을 구분합니다. 자동화 가능: 번역체 교정, 맞춤법 검사, 문단 재구성. 사람 직접 검토 필수: 사실 정확성 확인, 개인 경험·관점 추가, 최종 톤·메시지 조율. 이 역할 분담이 고품질 콘텐츠 생산의 핵심입니다.</p>

<h2>AI 글쓰기 워크플로우 효율화 팁</h2>
<p>워크플로우를 반복 실행할수록 각 단계의 프롬프트가 개선됩니다. 리서치 단계에서 수집한 공식 기관 정보(통계청 통계, 각 부처 공지 등)를 별도 문서로 정리하면 이후 글에서도 참조할 수 있습니다. 초고 생성 시 분량 과소 문제가 자주 발생하므로, 목차 단계에서 각 H2 섹션의 예상 분량을 프롬프트에 명시합니다. 예를 들어, "각 단락은 200~300자로 작성하세요"처럼 분량을 지정하면 최종 글이 목표 분량에 더 가깝게 생성됩니다. 편집 단계에서는 AI가 작성한 수치·통계를 반드시 공식 출처에서 재확인해야 합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 워크플로우 전체를 완전 자동화할 수 있나요?</strong><br>
기술적으로는 자동화가 가능하지만, 사실 검증·독창성 추가·최종 메시지 조율은 사람이 담당하는 것이 콘텐츠 품질을 보장합니다. 완전 자동화는 오류와 환각이 그대로 발행되는 위험이 있습니다.</p>
<p><strong>Q. 워크플로우에 걸리는 시간을 어떻게 줄일 수 있나요?</strong><br>
리서치 템플릿, 개요 템플릿, 프롬프트를 미리 준비해 재사용하면 시간을 단축할 수 있습니다. 또한 유사한 주제 글은 이전 리서치 자료를 참고하되, 초고는 반드시 독립적으로 새로 생성해야 합니다.</p>

<h2>마무리</h2>
<p>AI 글쓰기 워크플로우는 리서치(출처 수집) → 개요 설계 → 초고 생성 → 번역체 교정 → 사실 검증 → 독창성 강화의 단계로 구성합니다. 각 단계에 맞는 AI 도구를 선택하고, 사실 검증과 독창성 추가는 반드시 사람이 담당해야 합니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 콘텐츠 제작 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능은 지속 업데이트되므로 최신 정보는 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "ai-assistant-persona-design-tone-matching",
    title: "AI 어시스턴트 페르소나 설계 — 사용자 톤 매칭 전략",
    description: "고객 서비스·콘텐츠 생성용 AI 어시스턴트의 페르소나 설계 원칙, 사용자 톤 분석 및 매칭 전략, 브랜드 일관성을 유지하는 한국어 AI 페르소나 구축 방법을 정리합니다.",
    publishedAt: "2026-08-25T14:00:00+09:00",
    metaTitle: "AI 어시스턴트 페르소나 설계 — 사용자 톤 매칭 전략 (2026)",
    metaDescription: "고객 서비스·콘텐츠용 AI 어시스턴트 페르소나 설계 원칙, 사용자 톤 분석·매칭 전략, 브랜드 일관성 유지 한국어 AI 페르소나 구축 방법을 안내합니다.",
    targetKeywords: ["AI 페르소나 설계", "AI 어시스턴트", "톤 매칭", "챗봇 페르소나", "AI 브랜드 톤"],
    category: "AI 도구 활용",
    tags: ["페르소나", "AI어시스턴트", "톤", "브랜드", "설계"],
    aeoQuestion: "고객 서비스용 AI 어시스턴트 페르소나를 어떻게 설계하나요?",
    aeoAnswer: "AI 어시스턴트 페르소나는 네 가지 요소로 설계합니다. 첫째, 이름·역할 정의(예: '도움이의 카카오 고객센터 어시스턴트'). 둘째, 어조 설정(친근한 해요체/격식체 존댓말/전문적 어조 중 선택). 셋째, 허용/금지 행동 목록(예: '항상 공감 표현 먼저', '개인정보 수집 금지'). 넷째, 브랜드 언어 특성(특정 단어 사용·금지, 브랜드 용어 정의). 페르소나는 실제 사용자 응대 사례를 분석해 정기적으로 개선해야 합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "GPTs 커스텀 지시문", link: "/blog/gpts-custom-instructions-korean-site-guide" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>고객 서비스·콘텐츠 생성·내부 업무 지원용 AI 어시스턴트의 페르소나를 잘 설계하면 브랜드 일관성을 유지하면서 사용자 만족도를 높일 수 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
AI 페르소나 4요소: ①이름·역할 정의 ②어조 설정(격식/비격식) ③허용·금지 행동 목록 ④브랜드 언어 특성. 한국어: 존댓말 체계 명확히 설정 필수. 페르소나는 실제 사용 사례 분석으로 정기 개선.
</div>

<h2>AI 어시스턴트 페르소나 구성 요소</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">요소</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">설정 내용</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">예시</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">이름·역할</td>
<td style="border:1px solid #ddd;padding:8px 12px">페르소나의 정체성</td>
<td style="border:1px solid #ddd;padding:8px 12px">"도와요, ○○ 쇼핑몰 고객 상담 어시스턴트"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">어조·문체</td>
<td style="border:1px solid #ddd;padding:8px 12px">소통 방식</td>
<td style="border:1px solid #ddd;padding:8px 12px">"친근하고 따뜻한 해요체, 이모지 1~2개 허용"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">허용 행동</td>
<td style="border:1px solid #ddd;padding:8px 12px">할 수 있는 것</td>
<td style="border:1px solid #ddd;padding:8px 12px">"제품 정보 안내, 배송 조회, 교환·환불 안내"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">금지 행동</td>
<td style="border:1px solid #ddd;padding:8px 12px">해서는 안 되는 것</td>
<td style="border:1px solid #ddd;padding:8px 12px">"경쟁사 언급 금지, 할인 약속 금지, 개인정보 수집 금지"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">에스컬레이션</td>
<td style="border:1px solid #ddd;padding:8px 12px">처리 불가 시 대응</td>
<td style="border:1px solid #ddd;padding:8px 12px">"불가 사안은 담당자 연결 또는 콜센터 번호 안내"</td>
</tr>
</tbody>
</table>
</div>

<h2>사용자 톤 분석 및 매칭 전략</h2>
<p>AI 어시스턴트가 사용자의 어조에 맞춰 응답하는 '톤 매칭'은 사용자 경험을 크게 향상시킵니다. 그러나 한국어 서비스에서는 다음 원칙이 중요합니다. 고객 서비스 AI는 항상 공손한 어조를 유지해야 합니다. 사용자가 반말을 사용해도 AI는 높임말로 답변합니다. 사용자의 감정 상태(불만·혼란·긍정)를 파악해 공감 표현을 먼저 한 후 해결책을 제시하는 패턴이 효과적입니다.</p>

<h2>브랜드 언어 일관성 유지</h2>
<p>AI 어시스턴트가 브랜드 언어를 일관되게 사용하려면 다음 내용을 페르소나 지시문에 포함합니다. 브랜드 특유의 인사말·맺음말(예: "안녕하세요! ○○입니다. 어떻게 도와드릴까요?"), 사용해야 할 브랜드 고유 용어(제품명·서비스명 공식 표기), 사용하면 안 되는 표현(네거티브 감정 단어, 경쟁사 이름), 주요 메시지 포인트(브랜드 가치를 담은 문구) 등을 명확히 정의합니다. 페르소나 설계 문서의 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>페르소나 성능 모니터링과 개선</h2>
<p>AI 어시스턴트 페르소나는 초기 설정으로 완성되지 않습니다. 사용자 피드백, 응답률, 에스컬레이션 발생 패턴을 정기적으로 분석해 페르소나 지시문을 개선해야 합니다. 특히 AI가 잘못 응답한 케이스를 수집해 지시문의 금지 행동 목록이나 에스컬레이션 조건을 보완하는 것이 중요합니다.</p>

<h2>한국어 AI 페르소나 설계 체크리스트</h2>
<p>AI 어시스턴트 페르소나를 완성하기 전 다음 항목을 점검합니다. ①이름·역할이 브랜드 이미지와 일치하는가, ②어조(격식/비격식)가 서비스 대상 고객층에 맞는가, ③허용 행동 목록이 서비스 범위 내로 명확히 제한되어 있는가, ④금지 행동 목록에 개인정보 수집 금지가 포함되어 있는가, ⑤에스컬레이션 조건(처리 불가 상황)이 명시되어 있는가, ⑥AI임을 사용자에게 명확히 밝히는 문구가 포함되어 있는가. 한국어 서비스에서는 특히 존댓말 체계(습니다체/해요체 등)와 에스컬레이션 시 안내 멘트를 사전에 작성해 두는 것이 중요합니다. 페르소나 설계 문서 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. AI 어시스턴트에 실제 사람 이름을 사용해도 되나요?</strong><br>
특정 실존 인물의 이름 사용은 권장하지 않습니다. 고유하고 기억에 남는 가상의 이름이나 브랜드명과 연관된 이름을 만드는 것이 좋습니다. 또한 AI임을 사용자가 혼동하지 않도록 AI 어시스턴트 신분을 명확히 밝혀야 합니다.</p>
<p><strong>Q. 한국어 챗봇에서 이모지 사용이 적절한가요?</strong><br>
브랜드 성격에 따라 다릅니다. 젊은 고객층을 대상으로 한 리테일·엔터테인먼트 브랜드는 이모지가 친근함을 높입니다. 금융·의료·법률 서비스는 신뢰감을 위해 이모지 사용을 최소화하는 것이 적절합니다.</p>

<h2>마무리</h2>
<p>AI 어시스턴트 페르소나는 이름·역할, 어조·문체, 허용·금지 행동, 브랜드 언어 특성의 네 요소를 구체적으로 정의해야 합니다. 한국어 서비스에서는 존댓말 체계와 에스컬레이션 처리를 명확히 설정하고, 사용 데이터를 기반으로 정기적으로 개선하는 것이 핵심입니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 어시스턴트 설계 경험과 공개된 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능·정책은 지속 업데이트되므로 최신 정보는 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "anthropic-claude-api-korean-system-prompt",
    title: "Anthropic Claude API 한국어 활용 — 시스템 프롬프트 구성",
    description: "Anthropic Claude API를 한국어 서비스에 통합하는 방법, 한국어 최적화 시스템 프롬프트 구성 전략, 메시지 구조 설계와 안전 가이드라인 준수 방법을 정리합니다.",
    publishedAt: "2026-08-25T19:00:00+09:00",
    metaTitle: "Anthropic Claude API 한국어 활용 — 시스템 프롬프트 구성 가이드 (2026)",
    metaDescription: "Anthropic Claude API 한국어 서비스 통합 방법, 한국어 최적화 시스템 프롬프트 구성, 메시지 구조 설계와 안전 가이드라인 준수 방법을 안내합니다.",
    targetKeywords: ["Claude API 한국어", "Anthropic API", "Claude 시스템 프롬프트", "LLM API 한국어", "Claude API 활용"],
    category: "AI 도구 활용",
    tags: ["ClaudeAPI", "Anthropic", "시스템프롬프트", "API", "한국어"],
    aeoQuestion: "Claude API를 한국어 서비스에 통합할 때 시스템 프롬프트를 어떻게 구성하나요?",
    aeoAnswer: "Claude API 한국어 시스템 프롬프트는 역할 정의, 언어 설정, 행동 제약, 출력 형식 네 부분으로 구성합니다. 한국어 출력을 보장하려면 '모든 응답은 한국어로 작성하세요. 사용자가 영어로 질문해도 한국어로 답하세요'를 시스템 프롬프트에 포함합니다. XML 태그를 활용해 문서와 지시를 구분하면 처리 정확도가 높아집니다. Claude는 Anthropic의 안전 가이드라인을 따르므로, 서비스에서 추가 제약이 필요한 경우 시스템 프롬프트에 명시적으로 규정합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "Claude 프롬프트 작성 가이드", link: "/blog/claude-prompt-writing-guide-long-document" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>Anthropic Claude API를 한국어 서비스에 통합할 때 시스템 프롬프트를 잘 설계하면 일관된 품질의 한국어 응답을 얻을 수 있습니다. Claude API의 특성을 이해하고 한국어 최적화 전략을 적용하는 방법을 소개합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
Claude API 시스템 프롬프트 4부분: ①역할 정의 ②한국어 설정(언어 고정) ③행동 제약(금지·권고) ④출력 형식. XML 태그로 문서·지시 분리. 프롬프트 캐싱으로 비용 절감. Anthropic 안전 가이드라인 자동 적용.
</div>

<h2>Claude API 메시지 구조</h2>
<p>Claude API는 시스템(system), 사용자(user), 어시스턴트(assistant) 역할의 메시지로 구성됩니다.</p>
<div style="background:#f8f9fa;border:1px solid #e9ecef;padding:16px;border-radius:4px;font-family:monospace;font-size:13px;white-space:pre-wrap">{
  "model": "claude-opus-4-5",
  "system": "당신은 한국 중소기업 세금 상담 어시스턴트입니다.\n모든 응답은 한국어로 작성하세요.\n국세청 공식 정보를 기반으로 답변하세요.\n구체적 세무 결정은 세무사 상담을 권고하세요.",
  "messages": [
    {"role": "user", "content": "부가가치세 신고 기한이 언제인가요?"},
    {"role": "assistant", "content": "..."}
  ]
}</div>

<h2>한국어 최적화 시스템 프롬프트 패턴</h2>
<p>Claude API 한국어 서비스를 위한 핵심 시스템 프롬프트 패턴입니다.</p>
<ul>
<li><strong>언어 고정</strong>: "모든 응답은 한국어로 작성하세요. 사용자가 다른 언어로 질문하더라도 반드시 한국어로 답하세요."</li>
<li><strong>문체 통일</strong>: "격식체 존댓말(습니다체)로 답변하세요. 친근하고 전문적인 어조를 유지하세요."</li>
<li><strong>분량 지정</strong>: "답변은 300~500자 범위로 작성하세요. 복잡한 내용은 항목으로 나열하세요."</li>
<li><strong>XML 구조화</strong>: "&lt;answer&gt;" 태그로 답변 구역을 명시해 파싱을 용이하게 합니다.</li>
</ul>

<h2>Claude API 프롬프트 캐싱 활용</h2>
<p>Claude API는 프롬프트 캐싱 기능을 지원해 동일한 시스템 프롬프트를 반복 사용할 때 비용을 절감합니다. 긴 시스템 프롬프트(긴 문서 참조 포함)를 캐싱하면 반복 호출 시 입력 토큰 비용이 크게 줄어듭니다. 캐싱을 활성화하려면 시스템 프롬프트 콘텐츠에 cache_control 파라미터를 설정합니다. 시스템 프롬프트 작성 후 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>Anthropic 안전 가이드라인과 서비스 제약</h2>
<p>Claude는 Anthropic의 안전 가이드라인을 내장하고 있어 해로운 콘텐츠 생성을 자동으로 거부합니다. 서비스 운영자는 추가적인 제약이 필요한 경우(예: 미성년자 대상 서비스에서 성인 콘텐츠 완전 배제) 시스템 프롬프트에 명시해야 합니다. 반대로, Anthropic의 기본 안전 정책을 우회하려는 지시는 적용되지 않습니다. 서비스에서 개인정보를 처리하는 경우 Anthropic API의 개인정보 처리 정책과 국내 「개인정보보호법」을 함께 준수해야 합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. Claude API를 한국에서 사용하려면 어떻게 계약하나요?</strong><br>
Anthropic 공식 웹사이트(anthropic.com)에서 API 접근 신청을 합니다. 한국 기업은 국내 결제 수단(해외 카드·법인 카드)으로 이용 가능하며, 대용량 사용은 엔터프라이즈 계약을 별도로 진행할 수 있습니다. 최신 계약·요금 정보는 Anthropic 공식 채널에서 확인하시기 바랍니다.</p>
<p><strong>Q. Claude API와 ChatGPT API 중 한국어 서비스에 더 적합한 것은?</strong><br>
두 API 모두 한국어를 지원합니다. Claude는 긴 문서 처리와 안전 가이드라인 준수에 강점이 있으며, GPT는 더 다양한 플러그인·도구 생태계를 제공합니다. 서비스 특성에 맞게 선택하거나 A/B 테스트로 비교 후 결정하는 것을 권장합니다.</p>

<h2>마무리</h2>
<p>Claude API 한국어 활용은 언어 고정·문체 통일·분량 지정·XML 구조화의 시스템 프롬프트로 최적화합니다. 프롬프트 캐싱으로 비용을 절감하고, Anthropic 안전 가이드라인과 국내 개인정보 법령을 함께 준수하는 것이 안전한 서비스 운영의 핵심입니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 Claude API 공개 문서와 AI 개발 원칙을 바탕으로 작성된 참고 자료입니다. API 기능·요금·정책은 지속 업데이트되므로 최신 정보는 Anthropic 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "openai-assistants-api-korean-rag-functions",
    title: "OpenAI Assistants API 한국어 — 함수 호출과 RAG 구성",
    description: "OpenAI Assistants API를 한국어 서비스에 활용하는 방법, 함수 호출(Function Calling)·RAG 구성·파일 검색 기능 설정, 한국어 최적화 실전 가이드를 정리합니다.",
    publishedAt: "2026-08-26T00:00:00+09:00",
    metaTitle: "OpenAI Assistants API 한국어 — 함수 호출과 RAG 구성 가이드 (2026)",
    metaDescription: "OpenAI Assistants API 한국어 서비스 활용법, 함수 호출(Function Calling)·RAG·파일 검색 설정, 한국어 최적화 실전 가이드를 안내합니다.",
    targetKeywords: ["OpenAI Assistants API", "Function Calling 한국어", "RAG OpenAI", "Assistants API 활용", "OpenAI API 한국어"],
    category: "AI 도구 활용",
    tags: ["OpenAI", "AssistantsAPI", "FunctionCalling", "RAG", "API"],
    aeoQuestion: "OpenAI Assistants API로 한국어 RAG 시스템을 어떻게 구성하나요?",
    aeoAnswer: "OpenAI Assistants API의 RAG 구성은 파일 검색(File Search) 도구를 활용합니다. 한국어 문서 파일을 벡터 스토어에 업로드하고, 어시스턴트 설정에서 File Search 도구를 활성화하면 질문 시 관련 문서를 자동 검색해 답변에 반영합니다. 한국어 처리를 위해 어시스턴트 지시문에 '모든 응답은 한국어로, 문서에서 직접 인용할 때는 원문 그대로'처럼 언어 규칙을 명시합니다. 함수 호출(Function Calling)로 외부 API(날씨·환율·DB)를 연동해 실시간 정보를 답변에 포함할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "RAG 한국어 청크 분할", link: "/blog/rag-korean-text-chunk-size-guide" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>OpenAI Assistants API는 파일 검색(RAG), 함수 호출(Function Calling), 코드 실행(Code Interpreter) 등 고급 기능을 통합한 AI 어시스턴트 구축 플랫폼입니다. 한국어 서비스에 통합하는 주요 전략을 소개합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
Assistants API 핵심 도구: ①File Search(RAG) ②Function Calling(외부 API 연동) ③Code Interpreter(코드 실행). 한국어 RAG: 한국어 문서 업로드→벡터 스토어→지시문에 언어 규칙 추가. 스레드(Thread)로 대화 컨텍스트 자동 관리.
</div>

<h2>Assistants API 주요 도구 비교</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">도구</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">기능</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">한국어 활용 사례</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">File Search</td>
<td style="border:1px solid #ddd;padding:8px 12px">업로드 파일 검색·참조</td>
<td style="border:1px solid #ddd;padding:8px 12px">사내 규정·매뉴얼 RAG 구성</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Function Calling</td>
<td style="border:1px solid #ddd;padding:8px 12px">외부 API·DB 실시간 연동</td>
<td style="border:1px solid #ddd;padding:8px 12px">실시간 환율·날씨·재고 조회</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Code Interpreter</td>
<td style="border:1px solid #ddd;padding:8px 12px">Python 코드 실행·계산</td>
<td style="border:1px solid #ddd;padding:8px 12px">엑셀 데이터 분석·차트 생성</td>
</tr>
</tbody>
</table>
</div>

<h2>한국어 File Search(RAG) 구성 방법</h2>
<p>한국어 문서 기반 RAG를 Assistants API로 구성하는 단계입니다.</p>
<ol>
<li><strong>벡터 스토어 생성</strong>: OpenAI API로 Vector Store를 생성합니다.</li>
<li><strong>한국어 문서 업로드</strong>: PDF·TXT·Markdown 형식의 한국어 문서를 벡터 스토어에 업로드합니다. 문서 전처리(불필요한 페이지 제거, 표 텍스트화)를 선행하면 검색 품질이 향상됩니다.</li>
<li><strong>어시스턴트 설정</strong>: 어시스턴트 지시문에 "문서에서 관련 정보를 검색해 한국어로 답변하세요. 인용 시 출처 파일명과 페이지를 명시하세요"를 포함합니다.</li>
<li><strong>스레드 생성·대화 실행</strong>: 사용자별 스레드를 생성해 대화 기록을 유지합니다.</li>
</ol>
<p>문서 분량과 청크 크기 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>Function Calling으로 실시간 정보 연동</h2>
<p>Function Calling을 활용하면 AI가 스스로 외부 API를 호출해 실시간 정보를 답변에 포함할 수 있습니다. 한국어 서비스 활용 예시로는 한국거래소(KRX) API로 실시간 주가 조회, 기상청 API로 현재 날씨 조회, 사내 데이터베이스로 재고·주문 현황 조회 등이 있습니다. Function 정의 시 파라미터 설명을 한국어로 작성하면 AI가 사용자 질문에서 더 정확하게 파라미터를 추출합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. Assistants API 비용은 어떻게 계산되나요?</strong><br>
Assistants API는 사용하는 모델의 토큰 비용에 더해, 파일 스토리지 비용과 벡터 스토어 검색 비용이 추가됩니다. File Search 사용 시 검색 당 비용이 발생하므로, 대규모 서비스에서는 사용량을 모니터링해 비용을 관리해야 합니다. 최신 요금표는 OpenAI 공식 가격 페이지에서 확인하시기 바랍니다.</p>
<p><strong>Q. Assistants API로 구축한 어시스턴트는 사용자 대화를 저장하나요?</strong><br>
Assistants API의 스레드(Thread)는 대화 기록을 OpenAI 서버에 저장합니다. 개인정보 처리 관점에서 민감한 대화는 OpenAI의 데이터 처리 정책과 국내 「개인정보보호법」을 확인한 후 활용 여부를 결정해야 합니다.</p>

<h2>마무리</h2>
<p>OpenAI Assistants API는 File Search로 한국어 RAG를 구성하고, Function Calling으로 실시간 정보를 연동하며, 스레드로 대화 컨텍스트를 자동 관리하는 방식이 핵심입니다. 지시문에 한국어 언어 규칙을 명확히 포함하고, 비용·개인정보 정책을 사전에 검토해 안전하게 서비스에 통합하세요.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 OpenAI API 공개 문서와 AI 개발 원칙을 바탕으로 작성된 참고 자료입니다. API 기능·요금·정책은 지속 업데이트되므로 최신 정보는 OpenAI 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  }
];
