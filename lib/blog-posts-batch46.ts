import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH46: BlogPost[] = [
  {
    slug: "korean-chatgpt-prompt-writing-guide",
    title: "한국형 ChatGPT 프롬프트 작성법 — 정확도 높이는 한국어 패턴",
    description: "한국어 특성을 반영한 ChatGPT 프롬프트 작성법, 역할 부여·출력 형식·예시 제공 패턴, 문서 작성·번역·요약에 최적화된 한국어 프롬프트 전략을 정리합니다.",
    publishedAt: "2026-08-21T00:00:00+09:00",
    metaTitle: "한국형 ChatGPT 프롬프트 작성법 — 정확도 높이는 한국어 패턴 (2026)",
    metaDescription: "한국어 특성을 반영한 ChatGPT 프롬프트 작성법, 역할 부여·출력 형식·예시 제공 패턴, 문서 작성·번역·요약에 최적화된 한국어 프롬프트 전략을 안내합니다.",
    targetKeywords: ["ChatGPT 프롬프트 작성법", "한국어 프롬프트", "ChatGPT 활용법", "AI 프롬프트", "ChatGPT 정확도"],
    category: "AI 도구 활용",
    tags: ["ChatGPT", "프롬프트", "AI", "한국어", "글쓰기"],
    aeoQuestion: "한국어로 ChatGPT 프롬프트를 효과적으로 작성하는 방법은 무엇인가요?",
    aeoAnswer: "한국어 ChatGPT 프롬프트는 역할 부여, 출력 형식 지정, 예시 제공(Few-shot) 세 가지 패턴을 조합하면 정확도가 높아집니다. '당신은 한국어 문서 전문가입니다'처럼 역할을 먼저 부여하고, '3개의 글머리 기호로 요약하세요'처럼 출력 형식을 명시하며, 원하는 스타일의 예시를 함께 제공하면 원하는 결과를 얻을 수 있습니다. 한국어는 어미·존댓말 변형이 많아 '격식체 존댓말로 작성하세요'처럼 문체를 명시하는 것이 특히 중요합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "Claude 프롬프트 가이드", link: "/blog/claude-prompt-writing-guide-long-document" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 및 가이드 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>ChatGPT를 한국어로 활용할 때 프롬프트 작성법이 결과물의 품질을 결정합니다. 영어 중심으로 개발된 AI 모델에 한국어로 정확한 지시를 내리려면 한국어의 특성을 고려한 프롬프트 전략이 필요합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
한국어 프롬프트 3대 패턴: ①역할 부여 ②출력 형식 지정 ③예시 제공(Few-shot). 한국어 특유 주의점: 존댓말·문체 명시, 맞춤법 검토 요청, 한국 문화·법 기준 명시. 글자수 지정은 "○○자 내외" 형식 사용.
</div>

<h2>한국어 프롬프트 3대 기본 패턴</h2>
<p>ChatGPT에 한국어로 효과적인 지시를 내리기 위해 다음 세 가지 패턴을 조합합니다.</p>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">패턴</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">예시</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">효과</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">역할 부여 (Role)</td>
<td style="border:1px solid #ddd;padding:8px 12px">"당신은 10년 경력의 한국어 카피라이터입니다"</td>
<td style="border:1px solid #ddd;padding:8px 12px">전문가 수준 어휘·톤 확보</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">출력 형식 지정 (Format)</td>
<td style="border:1px solid #ddd;padding:8px 12px">"3개의 글머리 기호로, 각 100자 이내로 요약"</td>
<td style="border:1px solid #ddd;padding:8px 12px">예측 가능한 출력 구조</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">예시 제공 (Few-shot)</td>
<td style="border:1px solid #ddd;padding:8px 12px">입력/출력 예시 1~3쌍 제공</td>
<td style="border:1px solid #ddd;padding:8px 12px">스타일·형식 학습 효과</td>
</tr>
</tbody>
</table>
</div>

<h2>한국어 특유의 프롬프트 주의점</h2>
<p>한국어는 다음 특성 때문에 영어와 다른 프롬프트 전략이 필요합니다.</p>
<ul>
<li><strong>존댓말·문체 명시</strong>: ChatGPT는 한국어 문체를 혼용하는 경향이 있습니다. "격식체 존댓말(습니다체)로 작성하세요" 또는 "친근한 해요체로 작성하세요"처럼 명시하면 일관된 문체를 얻을 수 있습니다.</li>
<li><strong>맞춤법·띄어쓰기 검토 요청</strong>: "국립국어원 맞춤법 기준에 맞게 작성하세요"라고 지정하면 맞춤법 오류가 줄어듭니다.</li>
<li><strong>한국 법·문화 기준 명시</strong>: 법적 문서나 관행 관련 질문 시 "한국 법률 기준" 또는 "한국 기업 문화 기준"을 명시해야 현지화된 답변을 받을 수 있습니다.</li>
<li><strong>글자수는 한국어 기준으로 명시</strong>: "200 words" 대신 "200자 내외"처럼 한국어 글자수 기준으로 지정합니다.</li>
</ul>

<h2>활용 사례별 프롬프트 템플릿</h2>
<p>자주 사용하는 업무별 프롬프트 패턴 예시입니다.</p>
<ul>
<li><strong>문서 요약</strong>: "다음 문서를 3줄로 요약하세요. 핵심 수치와 결론만 포함하고, 격식체 존댓말로 작성하세요. [문서 내용]"</li>
<li><strong>이메일 작성</strong>: "당신은 비즈니스 이메일 전문가입니다. 아래 요청사항을 바탕으로 정중하고 간결한 비즈니스 이메일을 400자 이내로 작성하세요. [요청 내용]"</li>
<li><strong>한영 번역</strong>: "아래 한국어 문장을 자연스러운 비즈니스 영어로 번역하세요. 한국 특유의 표현은 영어권 독자가 이해할 수 있도록 의역하세요. [한국어 문장]"</li>
<li><strong>글 교정</strong>: "아래 글을 국립국어원 한국어 맞춤법 기준에 맞게 교정하세요. 변경 사항은 굵게 표시하고, 변경 이유를 설명하세요. [원문]"</li>
</ul>

<h2>프롬프트 작성 시 피해야 할 패턴</h2>
<p>정확도를 낮추는 잘못된 프롬프트 패턴을 피하는 것이 중요합니다. 너무 모호한 지시("좋은 글 써줘"), 너무 많은 조건을 동시에 요청(5가지 이상 조건 나열), 맥락 없이 단어만 나열하는 방식은 결과물 품질을 떨어뜨립니다. 프롬프트를 작성한 후 글자수 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>반복 사용을 위한 프롬프트 관리</h2>
<p>효과적인 프롬프트를 찾은 뒤에는 별도 문서에 저장해 재활용하는 것이 좋습니다. ChatGPT의 '사용자 지정 지침(Custom Instructions)' 기능을 활용하면 매번 역할·문체·형식을 반복 입력하지 않아도 됩니다. 프롬프트 템플릿에는 고정 부분(역할·형식)과 가변 부분(내용)을 구분해 관리하면 업무 효율이 높아집니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. 한국어와 영어 중 어느 언어로 프롬프트를 작성하는 게 더 좋나요?</strong><br>
한국어 출력물을 원한다면 한국어로 프롬프트를 작성하는 것이 더 일관된 결과를 줍니다. 다만, 기술적·전문적 개념은 영어 용어를 포함해 작성하면 오해를 줄일 수 있습니다.</p>
<p><strong>Q. ChatGPT의 출력 결과가 매번 다른데 어떻게 안정화하나요?</strong><br>
출력 형식과 예시를 구체적으로 지정할수록 결과 편차가 줄어듭니다. "반드시 다음 형식을 따르세요"처럼 강조 표현을 사용하거나, 원하는 출력 예시를 직접 제시하면 안정성이 높아집니다.</p>

<h2>마무리</h2>
<p>한국어 ChatGPT 프롬프트는 역할 부여, 출력 형식 지정, 예시 제공 패턴을 조합하고, 존댓말·글자수·한국 기준을 명시하는 것이 핵심입니다. 효과적인 프롬프트를 저장해 반복 활용하면 업무 효율을 높일 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 프롬프트 엔지니어링 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능은 지속 업데이트되므로 최신 기능은 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "claude-prompt-writing-guide-long-document",
    title: "Claude 프롬프트 작성 가이드 — 긴 문서 처리에 최적화된 패턴",
    description: "Anthropic Claude의 긴 문맥 처리 특성을 활용한 프롬프트 작성 가이드, 장문 문서 요약·분석·비교 최적화 패턴, XML 태그 구조화 방법을 정리합니다.",
    publishedAt: "2026-08-21T05:00:00+09:00",
    metaTitle: "Claude 프롬프트 작성 가이드 — 긴 문서 처리 최적화 패턴 (2026)",
    metaDescription: "Anthropic Claude 긴 문맥 처리 특성 활용 프롬프트 작성 가이드, 장문 문서 요약·분석·비교 최적화 패턴, XML 태그 구조화 방법을 안내합니다.",
    targetKeywords: ["Claude 프롬프트", "Claude 활용법", "긴 문서 처리 AI", "Claude 사용법", "Anthropic Claude"],
    category: "AI 도구 활용",
    tags: ["Claude", "프롬프트", "AI", "문서처리", "Anthropic"],
    aeoQuestion: "Claude로 긴 문서를 효과적으로 처리하는 프롬프트 작성 방법은 무엇인가요?",
    aeoAnswer: "Claude는 긴 문맥 처리에 강하므로, 문서를 통째로 입력하고 분석·요약을 요청하는 방식이 효과적입니다. XML 태그를 활용해 문서와 지시사항을 명확히 구분하고(예: <document>문서내용</document><instruction>지시</instruction>), 원하는 출력 형식을 구체적으로 명시합니다. 여러 문서를 비교할 때는 각 문서에 번호나 태그를 붙여 구분하고, 비교 기준을 명시적으로 제시하면 더 정확한 결과를 얻을 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "한국형 ChatGPT 프롬프트", link: "/blog/korean-chatgpt-prompt-writing-guide" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 및 가이드 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>Anthropic이 개발한 Claude는 방대한 양의 텍스트를 한 번에 처리하는 긴 문맥(Long Context) 처리 능력이 강점입니다. 이 특성을 활용하면 100페이지 분량의 문서도 한 번에 분석·요약할 수 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
Claude 장문 처리 핵심: ①XML 태그로 문서·지시 구분 ②문서 통째 입력 후 분석 요청 ③비교 시 문서별 태그/번호 부여. 한국어 처리: 존댓말·분량 명시. 추가 반복 질문으로 심층 분석 가능.
</div>

<h2>Claude의 긴 문맥 처리 특성</h2>
<p>Claude는 매우 긴 텍스트를 컨텍스트 창(Context Window)에 유지하며 처리할 수 있습니다. 이 특성을 활용하면 다음과 같은 작업이 가능합니다.</p>
<ul>
<li><strong>장문 보고서 요약</strong>: 수십 페이지의 보고서를 통째로 입력하고 핵심 사항 요약 요청</li>
<li><strong>여러 문서 동시 비교</strong>: 복수의 계약서·제안서를 동시에 입력해 조건 비교</li>
<li><strong>긴 대화·인터뷰 분석</strong>: 수천 자의 대화 기록에서 주요 패턴·의견 추출</li>
<li><strong>법령·정책 문서 해석</strong>: 복잡한 법령 조문을 입력하고 특정 조건에 대한 해석 요청</li>
</ul>

<h2>XML 태그를 활용한 구조화 프롬프트</h2>
<p>Claude는 XML 태그를 통한 구조화 입력에 특히 잘 반응합니다. 문서와 지시사항을 태그로 명확히 분리하면 정확도가 높아집니다.</p>
<div style="background:#f8f9fa;border:1px solid #e9ecef;padding:16px;border-radius:4px;font-family:monospace;font-size:13px;white-space:pre-wrap">&lt;document&gt;
[분석할 문서 전체 내용]
&lt;/document&gt;

&lt;instruction&gt;
위 문서를 분석해 다음을 답하세요:
1. 핵심 주장 3가지 (각 100자 이내)
2. 근거로 제시된 데이터 목록
3. 결론의 타당성 평가
격식체 존댓말로 작성하세요.
&lt;/instruction&gt;</div>

<h2>여러 문서 비교 프롬프트 패턴</h2>
<p>계약서·제안서·보고서를 비교할 때는 각 문서에 고유한 식별자를 부여합니다.</p>
<div style="background:#f8f9fa;border:1px solid #e9ecef;padding:16px;border-radius:4px;font-family:monospace;font-size:13px;white-space:pre-wrap">&lt;document_1 label="A사 제안서"&gt;[내용]&lt;/document_1&gt;
&lt;document_2 label="B사 제안서"&gt;[내용]&lt;/document_2&gt;

위 두 제안서를 아래 기준으로 비교해 표 형식으로 정리하세요:
- 가격 조건
- 납품 일정
- 품질 보증 조건
- 계약 해지 조건</div>

<h2>추가 질문으로 심층 분석하기</h2>
<p>Claude의 긴 문맥 유지 능력을 활용해, 첫 응답 후 추가 질문으로 더 깊은 분석을 끌어낼 수 있습니다. 예를 들어, 보고서 요약을 받은 후 "3번 항목의 근거를 원문에서 직접 인용해 설명하세요"처럼 원문을 참조하는 추가 질문이 효과적입니다. 또한 "이 문서에서 가장 모호한 표현이나 논리적 약점은 무엇인가요?"처럼 비판적 분석을 요청할 수도 있습니다.</p>
<p>분석 결과물의 분량을 확인할 때는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>한국어 문서 처리 최적화 팁</h2>
<p>한국어 문서를 Claude에 입력할 때 다음 사항을 고려하면 더 나은 결과를 얻을 수 있습니다. 한자어·전문 용어가 많은 법령·의학 문서는 "전문 용어는 한국어 원문 그대로 사용하세요"라고 지정합니다. 한국 행정·법 기준이 필요한 경우 "한국 법령 기준으로 해석하세요"를 명시합니다. 출력 분량은 "A4 1페이지 분량"보다 "1,000자 내외"처럼 글자수로 명시하면 더 정확합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. Claude와 ChatGPT 중 어떤 상황에 Claude가 더 유리한가요?</strong><br>
Claude는 긴 문서 처리와 분석 작업에서 강점을 보입니다. 계약서 비교, 긴 보고서 요약, 여러 문서 간 교차 분석이 필요한 작업에 Claude가 적합합니다. 반면 짧고 빠른 대화형 응답이 필요한 경우에는 ChatGPT가 편리할 수 있습니다.</p>
<p><strong>Q. Claude에 얼마나 긴 문서를 입력할 수 있나요?</strong><br>
Claude의 컨텍스트 창은 버전에 따라 다르며, 최신 버전은 매우 긴 문서도 처리할 수 있습니다. 단, 입력 문서가 너무 길면 처리 시간이 길어지므로 꼭 필요한 부분만 입력하는 것이 효율적입니다.</p>

<h2>마무리</h2>
<p>Claude의 긴 문맥 처리 능력을 활용하려면 XML 태그로 문서·지시를 구분하고, 비교 작업 시 문서별 식별자를 부여하는 것이 핵심입니다. 한국어 문서는 전문 용어 처리·한국 법령 기준을 명시하면 더 정확한 분석 결과를 얻을 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 프롬프트 엔지니어링 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능은 지속 업데이트되므로 최신 기능은 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "gemini-prompt-multimodal-text-analysis",
    title: "Gemini 프롬프트 활용법 — 멀티모달 텍스트 분석 전략",
    description: "Google Gemini의 멀티모달(이미지+텍스트) 처리 능력을 활용한 프롬프트 작성법, 이미지 기반 문서 분석·표 추출·한국어 처리 최적화 전략을 정리합니다.",
    publishedAt: "2026-08-21T10:00:00+09:00",
    metaTitle: "Gemini 프롬프트 활용법 — 멀티모달 텍스트 분석 전략 (2026)",
    metaDescription: "Google Gemini 멀티모달 처리 활용 프롬프트 작성법, 이미지·문서 사진 분석·표 데이터 추출·한국어 문서 OCR 분석 전략을 안내합니다.",
    targetKeywords: ["Gemini 프롬프트", "Gemini 활용법", "Google Gemini", "멀티모달 AI", "이미지 텍스트 분석"],
    category: "AI 도구 활용",
    tags: ["Gemini", "프롬프트", "AI", "멀티모달", "Google"],
    aeoQuestion: "Google Gemini의 멀티모달 기능을 활용한 텍스트 분석은 어떻게 하나요?",
    aeoAnswer: "Google Gemini는 이미지와 텍스트를 동시에 처리하는 멀티모달 AI입니다. 문서 사진·스캔 이미지를 업로드하고 '이 이미지에서 표 데이터를 추출해 엑셀 형식으로 정리하세요'처럼 지시하면 이미지 속 텍스트를 분석합니다. 한글 문서 사진도 처리 가능하며, '한국어로 답하세요'를 명시하면 한국어 출력을 받을 수 있습니다. Google 서비스(Google Docs·Sheets·Gmail)와 연동된 Gemini는 해당 서비스 내 문서를 직접 참조해 분석할 수 있습니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "Claude 프롬프트 가이드", link: "/blog/claude-prompt-writing-guide-long-document" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 및 가이드 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>Google Gemini는 텍스트뿐 아니라 이미지·오디오·동영상을 함께 처리할 수 있는 멀티모달 AI입니다. 이 특성을 활용하면 스캔 문서·표·차트 이미지에서 데이터를 추출하거나, 이미지와 텍스트를 결합한 복합 분석이 가능합니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
Gemini 멀티모달 활용: ①문서 이미지 업로드 후 데이터 추출 ②차트·표 분석 ③Google 서비스 연동 분석. 한국어 처리: "한국어로 답하세요" 명시. 이미지+지시 분리 입력이 정확도 향상.
</div>

<h2>Gemini 멀티모달 활용 시나리오</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">시나리오</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">프롬프트 예시</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">활용 분야</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">스캔 문서 분석</td>
<td style="border:1px solid #ddd;padding:8px 12px">"이 문서의 주요 조항을 목록으로 정리하세요"</td>
<td style="border:1px solid #ddd;padding:8px 12px">계약서·공문서 처리</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">표 데이터 추출</td>
<td style="border:1px solid #ddd;padding:8px 12px">"이미지의 표 데이터를 CSV 형식으로 변환하세요"</td>
<td style="border:1px solid #ddd;padding:8px 12px">통계표·영수증 처리</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">차트·그래프 해석</td>
<td style="border:1px solid #ddd;padding:8px 12px">"이 그래프의 트렌드를 한국어로 설명하세요"</td>
<td style="border:1px solid #ddd;padding:8px 12px">데이터 보고서 작성</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">명함·영수증 인식</td>
<td style="border:1px solid #ddd;padding:8px 12px">"이 명함의 연락처 정보를 추출하세요"</td>
<td style="border:1px solid #ddd;padding:8px 12px">업무 자동화</td>
</tr>
</tbody>
</table>
</div>

<h2>멀티모달 프롬프트 작성 원칙</h2>
<p>이미지와 텍스트를 함께 입력할 때 다음 원칙을 따릅니다.</p>
<ul>
<li><strong>이미지 먼저, 지시 나중</strong>: 이미지를 업로드한 뒤 지시 사항을 텍스트로 입력합니다. 이미지와 지시를 명확히 분리해야 처리 정확도가 높아집니다.</li>
<li><strong>분석 범위 한정</strong>: "이미지 전체" 대신 "이미지 상단의 표"처럼 분석 범위를 구체적으로 지정합니다.</li>
<li><strong>출력 형식 명시</strong>: "JSON 형식으로", "마크다운 표로", "번호 목록으로"처럼 원하는 출력 형식을 명시합니다.</li>
<li><strong>한국어 출력 요청</strong>: "한국어로 답하세요"를 프롬프트에 포함하면 한국어 출력을 받습니다.</li>
</ul>

<h2>Google 서비스 연동 활용</h2>
<p>Google Workspace에 통합된 Gemini는 Google Docs·Sheets·Gmail 문서를 직접 참조할 수 있습니다. Google Docs에서 Gemini에게 "이 문서의 핵심 내용을 5개 요점으로 요약하고 별도 문서로 저장하세요"처럼 요청하거나, Google Sheets에서 "이 스프레드시트의 월별 매출 트렌드를 분석하고 차트를 추가하세요"처럼 데이터 분석을 요청할 수 있습니다. 이 기능은 Google Workspace 계정이 있어야 사용 가능합니다.</p>
<p>분석 출력물의 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>한국어 문서 이미지 처리 시 주의점</h2>
<p>한국어 문서 이미지를 Gemini로 처리할 때 몇 가지 사항을 고려해야 합니다. 이미지 해상도가 낮으면 한글 인식 정확도가 떨어질 수 있으므로 300DPI 이상의 스캔을 권장합니다. 세로쓰기·특수 서식이 포함된 문서는 인식 오류가 발생할 수 있으므로, 출력 결과를 반드시 검토해야 합니다. 개인정보가 포함된 문서(주민등록번호·계좌번호)를 AI에 입력하기 전에 해당 정보를 마스킹하는 것이 보안상 중요합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. Gemini는 한국어 문서 이미지를 잘 처리하나요?</strong><br>
Gemini는 한글 OCR(광학 문자 인식) 처리가 가능합니다. 다만, 손글씨·흘림체·특수 폰트는 인식 정확도가 낮을 수 있습니다. 인쇄된 한국어 문서는 대체로 잘 처리하지만, 결과는 항상 검토 후 사용하시기 바랍니다.</p>
<p><strong>Q. 개인정보가 포함된 문서 이미지를 AI에 올려도 되나요?</strong><br>
개인정보(주민등록번호·여권번호·계좌번호 등)가 포함된 문서를 AI 서비스에 업로드하는 것은 개인정보보호 관점에서 주의가 필요합니다. 개인정보는 미리 마스킹(가림) 처리 후 업로드하는 것을 권장합니다.</p>

<h2>마무리</h2>
<p>Gemini의 멀티모달 기능은 스캔 문서·표·차트 분석, Google 서비스 연동 작업에 강점이 있습니다. 이미지 업로드 후 출력 형식과 분석 범위를 구체적으로 지정하고, 한국어 출력을 요청하면 업무 자동화에 효과적으로 활용할 수 있습니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 프롬프트 엔지니어링 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능은 지속 업데이트되므로 최신 기능은 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "perplexity-search-prompt-writing-guide",
    title: "Perplexity 검색 프롬프트 작성법 — 출처 추적에 강한 질문 패턴",
    description: "Perplexity AI의 실시간 검색 기반 답변 특성을 활용한 프롬프트 작성법, 출처 명시 요청·팩트 체크·최신 정보 검색에 최적화된 질문 패턴을 정리합니다.",
    publishedAt: "2026-08-21T15:00:00+09:00",
    metaTitle: "Perplexity 검색 프롬프트 작성법 — 출처 추적에 강한 질문 패턴 (2026)",
    metaDescription: "Perplexity AI 실시간 검색 활용 프롬프트 작성법, 출처 명시 요청·팩트 체크·한국어 최신 정보 검색에 최적화된 질문 패턴을 안내합니다.",
    targetKeywords: ["Perplexity 프롬프트", "Perplexity 활용법", "AI 검색엔진", "팩트체크 AI", "실시간 검색 AI"],
    category: "AI 도구 활용",
    tags: ["Perplexity", "프롬프트", "AI", "검색", "팩트체크"],
    aeoQuestion: "Perplexity AI로 정확한 출처가 있는 정보를 검색하는 방법은 무엇인가요?",
    aeoAnswer: "Perplexity AI는 실시간 웹 검색 결과를 바탕으로 출처를 명시하며 답변하는 AI 검색 엔진입니다. '한국 정부의 공식 발표를 출처로 포함해 답하세요'처럼 출처 유형을 지정하거나, '2025년 이후 최신 정보만 포함하세요'처럼 시간 범위를 제한하면 더 정확한 정보를 얻을 수 있습니다. '이 주장의 출처를 인용해 팩트를 검증하세요'처럼 팩트 체크를 직접 요청하는 것도 효과적입니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "한국형 ChatGPT 프롬프트", link: "/blog/korean-chatgpt-prompt-writing-guide" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 및 가이드 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>Perplexity AI는 실시간 웹 검색을 기반으로 답변하며, 각 정보의 출처를 명시하는 AI 검색 엔진입니다. 기존 검색 엔진과 달리 자연어 질문으로 검색해 요약된 답변과 출처를 동시에 받을 수 있습니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
Perplexity 활용 핵심: ①출처 유형 지정(정부·학술·언론) ②시간 범위 제한(2025년 이후 등) ③팩트 체크 직접 요청. 한국어 검색: "한국어로" 또는 한국어 질문 직접 입력. 검색 모드에 따라 최신성 차이 있음.
</div>

<h2>Perplexity와 일반 검색 엔진의 차이</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">항목</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">일반 검색엔진</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">Perplexity AI</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">입력 방식</td>
<td style="border:1px solid #ddd;padding:8px 12px">키워드</td>
<td style="border:1px solid #ddd;padding:8px 12px">자연어 질문</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">출력 방식</td>
<td style="border:1px solid #ddd;padding:8px 12px">링크 목록</td>
<td style="border:1px solid #ddd;padding:8px 12px">요약 답변 + 출처 인용</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">최신 정보</td>
<td style="border:1px solid #ddd;padding:8px 12px">실시간</td>
<td style="border:1px solid #ddd;padding:8px 12px">실시간 (검색 모드 의존)</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">출처 추적</td>
<td style="border:1px solid #ddd;padding:8px 12px">링크로 직접 확인</td>
<td style="border:1px solid #ddd;padding:8px 12px">답변 내 인용 번호로 추적</td>
</tr>
</tbody>
</table>
</div>

<h2>출처 추적에 강한 질문 패턴</h2>
<p>Perplexity에서 신뢰할 수 있는 정보를 얻기 위한 프롬프트 패턴입니다.</p>
<ul>
<li><strong>출처 유형 지정</strong>: "정부 공식 발표·학술 논문·언론 보도를 출처로 포함해 답하세요"처럼 원하는 출처 유형을 명시합니다.</li>
<li><strong>시간 범위 제한</strong>: "2025년 이후 최신 정보만 포함하세요" 또는 "최근 1년 이내 정보로 제한하세요"처럼 정보의 최신성을 요구합니다.</li>
<li><strong>팩트 체크 요청</strong>: "아래 주장이 사실인지 출처를 인용해 검증하세요: [주장]"처럼 특정 주장의 사실 여부를 검증 요청합니다.</li>
<li><strong>한국어 출처 요청</strong>: "한국어 출처 위주로 검색해 답하세요"처럼 한국어 자료 우선 검색을 요청합니다.</li>
</ul>

<h2>한국어 정보 검색 최적화</h2>
<p>Perplexity로 한국 관련 정보를 검색할 때 다음을 활용하면 더 정확한 결과를 얻을 수 있습니다. 한국어로 질문하면 한국어 웹 소스를 더 많이 참조합니다. 한국 정부 정책·법령 정보는 "행정안전부", "보건복지부" 등 구체적인 기관명을 질문에 포함합니다. 최신 한국 뉴스는 질문에 "최신" 또는 "2025년" 등 시기를 명시하면 최근 기사가 우선 검색됩니다.</p>
<p>검색 결과를 문서로 정리할 때 분량 점검에는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>Perplexity 활용 시 주의점</h2>
<p>Perplexity의 출처 기반 답변 방식에도 한계가 있습니다. AI가 여러 출처를 종합하는 과정에서 의미가 왜곡될 수 있습니다. 인용된 출처 링크를 클릭해 원문을 직접 확인하는 습관이 중요합니다. 특히 의료·법률·금융 정보는 Perplexity 답변만 믿지 말고 공식 기관 자료를 직접 확인해야 합니다. 또한 한국어 자료가 적은 전문 분야에서는 영어 자료 위주로 검색할 수 있습니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. Perplexity의 출처 인용이 항상 정확한가요?</strong><br>
Perplexity는 출처를 인용하지만, AI가 내용을 요약·종합하는 과정에서 원문과 다르게 해석될 수 있습니다. 중요한 정보는 반드시 인용된 링크의 원문을 직접 확인하시기 바랍니다.</p>
<p><strong>Q. Perplexity는 유료인가요?</strong><br>
Perplexity는 무료 기본 버전과 유료 Pro 버전이 있습니다. 무료 버전도 출처 인용 검색이 가능하며, Pro 버전은 더 많은 검색 횟수와 고급 AI 모델을 제공합니다.</p>

<h2>Perplexity 검색 결과 문서화</h2>
<p>Perplexity에서 유용한 검색 결과를 얻었다면 답변과 출처 링크를 문서로 정리해 보관하는 것이 좋습니다. 출처 링크가 나중에 변경되거나 삭제될 수 있으므로, 중요한 정보는 검색 즉시 원문을 복사해 보관합니다. 정기적으로 같은 주제를 재검색해 최신 정보를 업데이트하는 것도 효과적인 정보 관리 방법입니다.</p>

<h2>마무리</h2>
<p>Perplexity AI는 출처 추적이 필요한 팩트 체크, 최신 정보 검색, 정부 정책 확인에 효과적입니다. 출처 유형과 시간 범위를 명시하고, 인용된 원문을 직접 확인하는 습관이 정확한 정보 활용의 핵심입니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 프롬프트 엔지니어링 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능은 지속 업데이트되므로 최신 기능은 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  },
  {
    slug: "microsoft-copilot-prompt-office-writing",
    title: "Microsoft Copilot 프롬프트 활용 — 오피스 통합 글쓰기",
    description: "Microsoft 365 Copilot의 Word·Excel·PowerPoint·Teams 통합 글쓰기 기능, 한국어 업무 문서 자동 생성·데이터 분석·프레젠테이션 제작 프롬프트 전략을 정리합니다.",
    publishedAt: "2026-08-21T20:00:00+09:00",
    metaTitle: "Microsoft Copilot 프롬프트 활용 — 오피스 통합 글쓰기 가이드 (2026)",
    metaDescription: "Microsoft 365 Copilot Word·Excel·PowerPoint·Teams 통합 글쓰기 프롬프트 전략, 한국어 업무 문서 자동 생성·데이터 분석·프레젠테이션 제작 방법을 안내합니다.",
    targetKeywords: ["Microsoft Copilot", "Copilot 프롬프트", "오피스 AI", "Word AI", "Microsoft 365 Copilot"],
    category: "AI 도구 활용",
    tags: ["Copilot", "Microsoft", "프롬프트", "AI", "오피스"],
    aeoQuestion: "Microsoft Copilot으로 한국어 업무 문서를 효율적으로 작성하는 방법은 무엇인가요?",
    aeoAnswer: "Microsoft 365 Copilot은 Word·Excel·PowerPoint·Teams에 통합된 AI 도구입니다. Word에서는 '아래 개요를 바탕으로 A4 2페이지 분량의 제안서를 작성하세요'처럼 문서를 직접 생성하거나, 기존 문서를 참조해 새 문서를 만들 수 있습니다. Excel에서는 '이 데이터의 월별 트렌드를 분석하고 차트를 추가하세요'처럼 데이터 분석을 요청할 수 있습니다. PowerPoint에서는 Word 문서나 개요를 바탕으로 프레젠테이션을 자동 생성합니다.",
    inlinks: [
      { text: "글자수 세기 도구", link: "/tools/character-counter" },
      { text: "한국형 ChatGPT 프롬프트", link: "/blog/korean-chatgpt-prompt-writing-guide" }
    ],
    outlinks: [
      { text: "한국지능정보사회진흥원(NIA)", link: "https://www.nia.or.kr/", description: "AI 활용 정책 및 가이드 공식 기관" },
      { text: "과학기술정보통신부", link: "https://www.msit.go.kr/", description: "AI 정책 주관 부처" }
    ],
    content: `<p>Microsoft 365 Copilot은 Word·Excel·PowerPoint·Outlook·Teams에 통합된 AI 도구입니다. 기존 Office 파일과 조직 내 데이터를 참조해 업무 문서를 자동 생성하거나 분석하는 것이 핵심 강점입니다.</p>

<div style="background:#f0f4f8;border-left:4px solid #3b82f6;padding:16px 20px;margin:20px 0;border-radius:4px">
<strong>핵심 답변</strong><br>
Copilot 앱별 활용: Word(문서 생성·요약), Excel(데이터 분석·차트), PowerPoint(슬라이드 자동 생성), Teams(회의록 요약). 한국어: 한국어로 지시하면 한국어로 출력. 조직 내 파일 참조 기능이 가장 큰 차별점.
</div>

<h2>Microsoft 365 Copilot 앱별 활용법</h2>
<div style="overflow-x:auto">
<table style="border-collapse:collapse;width:100%;font-size:14px">
<thead>
<tr style="background:#f0f4f8">
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">앱</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">주요 기능</th>
<th style="border:1px solid #ddd;padding:8px 12px;text-align:left">프롬프트 예시</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Word</td>
<td style="border:1px solid #ddd;padding:8px 12px">문서 생성·요약·편집</td>
<td style="border:1px solid #ddd;padding:8px 12px">"이 개요를 바탕으로 2페이지 제안서 작성"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Excel</td>
<td style="border:1px solid #ddd;padding:8px 12px">데이터 분석·수식 생성·차트</td>
<td style="border:1px solid #ddd;padding:8px 12px">"월별 매출 트렌드 분석 후 차트 추가"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">PowerPoint</td>
<td style="border:1px solid #ddd;padding:8px 12px">슬라이드 자동 생성·디자인</td>
<td style="border:1px solid #ddd;padding:8px 12px">"Word 보고서 기반 10슬라이드 프레젠테이션 생성"</td>
</tr>
<tr style="background:#f9f9f9">
<td style="border:1px solid #ddd;padding:8px 12px">Teams</td>
<td style="border:1px solid #ddd;padding:8px 12px">회의록 요약·액션 아이템 추출</td>
<td style="border:1px solid #ddd;padding:8px 12px">"오늘 회의에서 결정된 사항과 담당자 정리"</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:8px 12px">Outlook</td>
<td style="border:1px solid #ddd;padding:8px 12px">이메일 작성·요약·답장</td>
<td style="border:1px solid #ddd;padding:8px 12px">"이 이메일 스레드를 3줄로 요약"</td>
</tr>
</tbody>
</table>
</div>

<h2>Word에서 Copilot 활용 패턴</h2>
<p>Word Copilot으로 한국어 업무 문서를 생성할 때 효과적인 패턴입니다.</p>
<ul>
<li><strong>개요 기반 문서 생성</strong>: 먼저 문서 구조(개요)를 작성하고, "이 개요를 바탕으로 각 항목을 300자씩 작성하세요"처럼 지시하면 완성도 높은 초안을 얻을 수 있습니다.</li>
<li><strong>기존 문서 참조 생성</strong>: "지난해 제안서(파일명)를 참고해 올해 버전을 업데이트하세요"처럼 조직 내 기존 파일을 참조할 수 있습니다.</li>
<li><strong>문서 요약·편집</strong>: 긴 문서를 선택하고 "이 내용을 경영진 보고용으로 1페이지로 요약하세요"처럼 목적에 맞게 재구성 요청이 가능합니다.</li>
</ul>

<h2>Excel Copilot 데이터 분석 활용</h2>
<p>Excel Copilot은 복잡한 수식 없이 자연어로 데이터를 분석하는 데 유용합니다. "이 표에서 상위 10개 항목만 필터링하세요", "월별 합계와 평균을 추가 열로 계산하세요", "이 데이터를 피벗 테이블로 요약하세요"처럼 데이터 조작 작업을 자연어로 요청할 수 있습니다. 결과물 문서의 분량을 확인할 때는 <a href="/tools/character-counter">글자수 세기 도구</a>를 활용하세요.</p>

<h2>Copilot 사용 시 주의점</h2>
<p>Microsoft 365 Copilot 사용 시 다음 사항에 유의해야 합니다. Copilot은 Microsoft 365 Business Standard 이상의 라이선스가 필요하며, 별도 Copilot 라이선스 구매가 필요할 수 있습니다. AI가 생성한 문서는 반드시 사람이 검토하고 수정해야 합니다. 조직 내 기밀 정보를 Copilot에 입력하기 전에 해당 조직의 정보보안 정책을 확인해야 합니다.</p>

<h2>자주 묻는 질문 (FAQ)</h2>
<p><strong>Q. Microsoft Copilot은 한국어 업무에 잘 맞나요?</strong><br>
Microsoft 365 Copilot은 한국어를 지원하며, 한국어로 지시하면 한국어로 문서를 생성합니다. 다만, 한국어 특유의 표현·존댓말 등은 결과물을 검토 후 수정하는 것이 좋습니다. 한국어 문체·형식에 대한 구체적 지시를 프롬프트에 포함하면 품질이 높아집니다.</p>
<p><strong>Q. Copilot이 만든 문서의 저작권은 누구에게 있나요?</strong><br>
AI가 생성한 콘텐츠의 저작권 귀속은 아직 국내외에서 명확히 정립되지 않은 영역입니다. Microsoft의 이용약관과 국내 저작권법 규정을 확인하고, 중요한 문서는 법률 전문가에게 자문을 구하시기 바랍니다.</p>

<h2>마무리</h2>
<p>Microsoft 365 Copilot은 Word·Excel·PowerPoint·Teams에서 조직 내 파일을 참조해 업무 문서를 자동 생성·분석하는 것이 핵심 강점입니다. 한국어로 구체적인 출력 형식과 분량을 지정해 지시하고, 생성된 결과물을 반드시 검토해 활용하시기 바랍니다.</p>

<p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;margin-top:24px;padding-top:12px">본 글은 AI 도구 활용 경험과 공개된 프롬프트 엔지니어링 원칙을 바탕으로 작성된 참고 자료입니다. AI 도구의 기능과 라이선스 정책은 지속 업데이트되므로 최신 정보는 공식 채널에서 확인하시기 바랍니다. 이 콘텐츠는 AI 도구의 도움을 받아 작성되었습니다.</p>`
  }
];
