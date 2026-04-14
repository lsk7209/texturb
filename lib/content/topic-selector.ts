import { toolRegistry } from "@/lib/tool-registry";

export interface TopicSelection {
  type: "blog" | "tool-guide";
  topic: string;
  toolId?: string;
}

const BLOG_TOPICS = [
  "글자수 세기 완벽 활용법",
  "자기소개서 작성 텍스트 편집 팁",
  "블로그 글쓰기 기초와 텍스트 정리",
  "마크다운 완벽 가이드",
  "텍스트 편집 효율 높이기",
  "줄바꿈 정리로 가독성 높이기",
  "대소문자 변환 실무 활용",
  "HTML 태그 제거와 텍스트 추출",
  "JSON 포맷 정리 실전 가이드",
  "CSV 데이터 정리와 활용법",
];

export function getTopicForDate(date: Date): TopicSelection {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000,
  );
  const toolIds = Object.keys(toolRegistry);

  // 짝수 날: tool-guide, 홀수 날: blog
  if (dayOfYear % 2 === 0) {
    const toolId = toolIds[dayOfYear % toolIds.length];
    return { type: "tool-guide", topic: `${toolId} 완벽 사용법`, toolId };
  } else {
    const topic = BLOG_TOPICS[dayOfYear % BLOG_TOPICS.length];
    return { type: "blog", topic };
  }
}
