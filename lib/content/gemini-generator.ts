import { GoogleGenerativeAI } from "@google/generative-ai";
import { logger } from "@/lib/logger";
import type { TopicSelection } from "./topic-selector";

export interface GeneratedPost {
  title: string;
  summary: string;
  content: string;
  keywords: string[];
  slug: string;
}

function buildPrompt(topic: TopicSelection): string {
  return `당신은 텍스트 편집 도구 사이트 "텍스터브"의 SEO 콘텐츠 작가입니다.
다음 주제로 한국어 블로그 글을 작성하세요.

주제: ${topic.topic}
타입: ${topic.type === "tool-guide" ? "도구 사용법 가이드" : "블로그 포스트"}

요구사항:
- 제목: 60자 이내, 핵심 키워드 포함
- 요약: 120자 이내
- 본문: 마크다운 형식, 1500자 이상, H2/H3 구조, 실용적인 예시 포함
- 키워드: 5개 (배열)
- 슬러그: 영문 소문자와 하이픈만 사용

반드시 아래 JSON 형식으로만 응답하세요:
\`\`\`json
{
  "title": "제목",
  "summary": "요약",
  "content": "마크다운 본문",
  "keywords": ["키워드1", "키워드2", "키워드3", "키워드4", "키워드5"],
  "slug": "url-slug"
}
\`\`\``;
}

function extractJson(text: string): string {
  const match = text.match(/```json\n([\s\S]*?)\n```/);
  if (match) return match[1];
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) return jsonMatch[0];
  throw new Error("JSON을 찾을 수 없습니다");
}

export async function generatePost(
  topic: TopicSelection,
): Promise<GeneratedPost> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY가 설정되지 않았습니다");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = buildPrompt(topic);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const json = extractJson(text);
      const parsed = JSON.parse(json) as GeneratedPost;
      if (!parsed.title || !parsed.content || !parsed.slug) {
        throw new Error("필수 필드 누락");
      }
      return parsed;
    } catch (error) {
      logger.error(
        `Gemini 생성 실패 (시도 ${attempt}/3)`,
        error instanceof Error ? error : new Error(String(error)),
      );
      if (attempt === 3) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
  throw new Error("최대 재시도 초과");
}
