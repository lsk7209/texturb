"use client"

import { useState, useMemo, useCallback } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Copy, TrendingUp, TrendingDown, BarChart3 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AnalysisToolsProps {
  text: string
  onPreviewChange?: (text: string) => void
  toolId?: string
}

/**
 * 가독성 점수 계산 (Flesch Reading Ease 기반)
 */
function calculateReadability(text: string): {
  score: number
  level: string
  description: string
  suggestions: string[]
} {
  if (!text.trim()) {
    return {
      score: 0,
      level: "분석 불가",
      description: "텍스트를 입력해주세요.",
      suggestions: [],
    }
  }

  const sentences = text.split(/[.!?。！？]+/).filter((s) => s.trim().length > 0)
  const words = text.split(/\s+/).filter((w) => w.length > 0)
  const syllables = words.reduce((acc, word) => {
    // 간단한 음절 계산 (한글은 글자 수, 영어는 모음 기반)
    const koreanChars = (word.match(/[가-힣]/g) || []).length
    const englishChars = word.replace(/[^a-zA-Z]/g, "").length
    return acc + koreanChars + Math.max(1, Math.ceil(englishChars / 3))
  }, 0)

  if (sentences.length === 0 || words.length === 0) {
    return {
      score: 0,
      level: "분석 불가",
      description: "문장이 없습니다.",
      suggestions: [],
    }
  }

  const avgSentenceLength = words.length / sentences.length
  const avgSyllablesPerWord = syllables / words.length

  // Flesch Reading Ease 공식 (한글에 맞게 조정)
  const score = Math.max(
    0,
    Math.min(
      100,
      206.835 - 1.015 * avgSentenceLength - 84.6 * avgSyllablesPerWord,
    ),
  )

  let level: string
  let description: string
  const suggestions: string[] = []

  if (score >= 80) {
    level = "매우 쉬움"
    description = "초등학생 수준으로 매우 읽기 쉽습니다."
  } else if (score >= 70) {
    level = "쉬움"
    description = "중학생 수준으로 읽기 쉽습니다."
  } else if (score >= 60) {
    level = "보통"
    description = "고등학생 수준으로 적당합니다."
  } else if (score >= 50) {
    level = "어려움"
    description = "대학생 수준으로 다소 어렵습니다."
    suggestions.push("문장을 짧게 나누어보세요.")
    suggestions.push("복잡한 단어를 간단한 단어로 바꿔보세요.")
  } else {
    level = "매우 어려움"
    description = "전문가 수준으로 매우 어렵습니다."
    suggestions.push("문장을 더 짧게 나누어보세요.")
    suggestions.push("복잡한 단어를 간단한 단어로 바꿔보세요.")
    suggestions.push("문단을 나누어 구조를 명확히 하세요.")
  }

  if (avgSentenceLength > 20) {
    suggestions.push("평균 문장 길이가 너무 깁니다. 문장을 나누어보세요.")
  }

  return { score, level, description, suggestions }
}

/**
 * 키워드 밀도 분석
 */
function analyzeKeywordDensity(text: string, targetKeyword?: string): {
  keyword: string
  count: number
  density: number
  allKeywords: Array<{ word: string; count: number; density: number }>
} {
  if (!text.trim()) {
    return {
      keyword: targetKeyword || "",
      count: 0,
      density: 0,
      allKeywords: [],
    }
  }

  // 단어 추출 (한글, 영문, 숫자)
  const words = text
    .toLowerCase()
    .replace(/[^\w\s가-힣]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1)

  // 단어 빈도 계산
  const wordCount: Record<string, number> = {}
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1
  })

  const totalWords = words.length
  const allKeywords = Object.entries(wordCount)
    .map(([word, count]) => ({
      word,
      count,
      density: (count / totalWords) * 100,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)

  if (targetKeyword) {
    const keyword = targetKeyword.toLowerCase()
    const count = wordCount[keyword] || 0
    const density = (count / totalWords) * 100

    return {
      keyword: targetKeyword,
      count,
      density,
      allKeywords,
    }
  }

  return {
    keyword: "",
    count: 0,
    density: 0,
    allKeywords,
  }
}

/**
 * 텍스트 비교 및 유사도 계산
 */
function compareTexts(text1: string, text2: string): {
  similarity: number
  differences: Array<{ type: "added" | "removed" | "changed"; text: string }>
} {
  if (!text1 && !text2) {
    return { similarity: 100, differences: [] }
  }
  if (!text1 || !text2) {
    return { similarity: 0, differences: [] }
  }

  const words1 = text1.split(/\s+/)
  const words2 = text2.split(/\s+/)

  // 간단한 유사도 계산 (Jaccard 유사도)
  const set1 = new Set(words1)
  const set2 = new Set(words2)
  const intersection = new Set([...set1].filter((x) => set2.has(x)))
  const union = new Set([...set1, ...set2])
  const similarity = (intersection.size / union.size) * 100

  // 차이점 찾기 (간단한 버전)
  const differences: Array<{ type: "added" | "removed" | "changed"; text: string }> = []
  const maxLen = Math.max(words1.length, words2.length)

  for (let i = 0; i < maxLen; i++) {
    if (i >= words1.length && words2[i]) {
      differences.push({ type: "added", text: words2[i] })
    } else if (i >= words2.length && words1[i]) {
      differences.push({ type: "removed", text: words1[i] })
    } else if (words1[i] !== words2[i]) {
      differences.push({ type: "changed", text: `${words1[i]} → ${words2[i]}` })
    }
  }

  return { similarity, differences: differences.slice(0, 50) }
}

/**
 * 단어 빈도 분석
 */
function analyzeWordFrequency(text: string): Array<{ word: string; count: number; percentage: number }> {
  if (!text.trim()) {
    return []
  }

  const words = text
    .toLowerCase()
    .replace(/[^\w\s가-힣]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1)

  const wordCount: Record<string, number> = {}
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1
  })

  const total = words.length
  return Object.entries(wordCount)
    .map(([word, count]) => ({
      word,
      count,
      percentage: (count / total) * 100,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 30)
}

/**
 * 문장 난이도 분석
 */
function analyzeSentenceDifficulty(text: string): {
  avgLength: number
  avgWords: number
  difficulty: string
  sentences: Array<{ text: string; length: number; words: number; difficulty: string }>
} {
  if (!text.trim()) {
    return {
      avgLength: 0,
      avgWords: 0,
      difficulty: "분석 불가",
      sentences: [],
    }
  }

  const sentences = text.split(/[.!?。！？]+/).filter((s) => s.trim().length > 0)
  const sentenceData = sentences.map((sentence) => {
    const words = sentence.trim().split(/\s+/).filter((w) => w.length > 0)
    const length = sentence.trim().length
    const wordCount = words.length

    let difficulty = "쉬움"
    if (length > 100 || wordCount > 20) {
      difficulty = "어려움"
    } else if (length > 60 || wordCount > 12) {
      difficulty = "보통"
    }

    return {
      text: sentence.trim().substring(0, 50) + (sentence.trim().length > 50 ? "..." : ""),
      length,
      words: wordCount,
      difficulty,
    }
  })

  const avgLength = sentenceData.reduce((sum, s) => sum + s.length, 0) / sentenceData.length
  const avgWords = sentenceData.reduce((sum, s) => sum + s.words, 0) / sentenceData.length

  let overallDifficulty = "쉬움"
  if (avgLength > 80 || avgWords > 15) {
    overallDifficulty = "어려움"
  } else if (avgLength > 50 || avgWords > 10) {
    overallDifficulty = "보통"
  }

  return {
    avgLength: Math.round(avgLength),
    avgWords: Math.round(avgWords),
    difficulty: overallDifficulty,
    sentences: sentenceData.slice(0, 20),
  }
}

/**
 * 텍스트 요약 (간단한 버전)
 */
function summarizeText(text: string, maxSentences: number = 3): string {
  if (!text.trim()) {
    return ""
  }

  const sentences = text.split(/[.!?。！？]+/).filter((s) => s.trim().length > 0)
  if (sentences.length <= maxSentences) {
    return text
  }

  // 간단한 요약: 첫 문장과 마지막 문장, 그리고 중간의 긴 문장들
  const importantSentences = [
    sentences[0],
    ...sentences.slice(1, -1).sort((a, b) => b.length - a.length).slice(0, maxSentences - 2),
    sentences[sentences.length - 1],
  ]

  return importantSentences.join(". ") + "."
}

/**
 * 텍스트 통계 종합
 */
function getTextStatistics(text: string): {
  characters: number
  charactersNoSpace: number
  words: number
  sentences: number
  paragraphs: number
  avgWordsPerSentence: number
  avgCharsPerWord: number
  readability: ReturnType<typeof calculateReadability>
} {
  const characters = text.length
  const charactersNoSpace = text.replace(/\s/g, "").length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.split(/[.!?。！？]+/).filter((s) => s.trim().length > 0).length
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || 1

  const avgWordsPerSentence = sentences > 0 ? words / sentences : 0
  const avgCharsPerWord = words > 0 ? charactersNoSpace / words : 0

  return {
    characters,
    charactersNoSpace,
    words,
    sentences,
    paragraphs,
    avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
    avgCharsPerWord: Math.round(avgCharsPerWord * 10) / 10,
    readability: calculateReadability(text),
  }
}

export function AnalysisTools({ text, onPreviewChange, toolId }: AnalysisToolsProps) {
  const { toast } = useToast()
  const [comparisonText, setComparisonText] = useState("")
  const [targetKeyword, setTargetKeyword] = useState("")

  // 가독성 점수 계산기
  const readability = useMemo(() => calculateReadability(text), [text])

  // 키워드 밀도 분석기
  const keywordDensity = useMemo(() => analyzeKeywordDensity(text, targetKeyword || undefined), [text, targetKeyword])

  // 텍스트 비교 도구
  const comparison = useMemo(() => compareTexts(text, comparisonText), [text, comparisonText])

  // 단어 빈도 분석기
  const wordFrequency = useMemo(() => analyzeWordFrequency(text), [text])

  // 문장 난이도 분석기
  const sentenceDifficulty = useMemo(() => analyzeSentenceDifficulty(text), [text])

  // 요약문 생성기
  const summary = useMemo(() => summarizeText(text, 3), [text])

  // 텍스트 통계 대시보드
  const statistics = useMemo(() => getTextStatistics(text), [text])

  const handleCopy = useCallback(
    (content: string) => {
      navigator.clipboard.writeText(content)
      toast({
        title: "복사 완료",
        description: "클립보드에 복사되었습니다.",
      })
    },
    [toast],
  )

  // 가독성 점수 계산기
  if (toolId === "readability-score") {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>가독성 점수</Label>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">{Math.round(readability.score)}</div>
            <div className="flex-1">
              <Progress value={readability.score} className="h-3" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={readability.score >= 60 ? "default" : "destructive"}>{readability.level}</Badge>
            <span className="text-sm text-muted-foreground">{readability.description}</span>
          </div>
        </div>

        {readability.suggestions.length > 0 && (
          <div className="space-y-2">
            <Label>개선 제안</Label>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {readability.suggestions.map((suggestion, idx) => (
                <li key={idx}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  // 키워드 밀도 분석기
  if (toolId === "keyword-density") {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>분석할 키워드</Label>
          <Input
            placeholder="키워드를 입력하세요"
            value={targetKeyword}
            onChange={(e) => setTargetKeyword(e.target.value)}
          />
        </div>

        {targetKeyword && keywordDensity.keyword && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">키워드 분석 결과</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>키워드:</span>
                <span className="font-semibold">{keywordDensity.keyword}</span>
              </div>
              <div className="flex justify-between">
                <span>출현 횟수:</span>
                <span className="font-semibold">{keywordDensity.count}회</span>
              </div>
              <div className="flex justify-between">
                <span>밀도:</span>
                <span className="font-semibold">{keywordDensity.density.toFixed(2)}%</span>
              </div>
              <Progress value={keywordDensity.density} className="h-2" />
              <p className="text-xs text-muted-foreground">
                권장 밀도: 1-3% (현재 {keywordDensity.density.toFixed(2)}%)
              </p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-2">
          <Label>상위 키워드 (빈도순)</Label>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {keywordDensity.allKeywords.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm p-2 bg-muted rounded">
                <span>{item.word}</span>
                <span className="font-semibold">{item.count}회 ({item.density.toFixed(1)}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // 텍스트 비교 도구
  if (toolId === "text-comparison") {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>원본 텍스트</Label>
            <Textarea value={text} readOnly className="min-h-32" />
          </div>
          <div className="space-y-2">
            <Label>비교할 텍스트</Label>
            <Textarea
              value={comparisonText}
              onChange={(e) => setComparisonText(e.target.value)}
              placeholder="비교할 텍스트를 입력하세요"
              className="min-h-32"
            />
          </div>
        </div>

        {comparisonText && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">비교 결과</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                <span className="text-lg font-semibold">유사도: {comparison.similarity.toFixed(1)}%</span>
              </div>
              <Progress value={comparison.similarity} className="h-3" />

              {comparison.differences.length > 0 && (
                <div className="space-y-2">
                  <Label>주요 차이점 (최대 50개)</Label>
                  <div className="max-h-40 overflow-y-auto space-y-1">
                    {comparison.differences.slice(0, 20).map((diff, idx) => (
                      <div
                        key={idx}
                        className={`text-xs p-2 rounded ${
                          diff.type === "added"
                            ? "bg-green-100 dark:bg-green-900"
                            : diff.type === "removed"
                              ? "bg-red-100 dark:bg-red-900"
                              : "bg-yellow-100 dark:bg-yellow-900"
                        }`}
                      >
                        {diff.type === "added" && "+ "}
                        {diff.type === "removed" && "- "}
                        {diff.type === "changed" && "~ "}
                        {diff.text}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  // 단어 빈도 분석기
  if (toolId === "word-frequency") {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>단어 빈도 분석 결과 (상위 30개)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
            {wordFrequency.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-muted rounded">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{idx + 1}</Badge>
                  <span className="font-medium">{item.word}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{item.count}회</span>
                  <div className="w-20">
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">{item.percentage.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // 문장 난이도 분석기
  if (toolId === "sentence-difficulty") {
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">전체 문장 난이도</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>평균 문장 길이:</span>
              <span className="font-semibold">{sentenceDifficulty.avgLength}자</span>
            </div>
            <div className="flex justify-between">
              <span>평균 단어 수:</span>
              <span className="font-semibold">{sentenceDifficulty.avgWords}개</span>
            </div>
            <div className="flex justify-between">
              <span>전체 난이도:</span>
              <Badge variant={sentenceDifficulty.difficulty === "쉬움" ? "default" : "destructive"}>
                {sentenceDifficulty.difficulty}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <Label>문장별 난이도 분석 (최대 20개)</Label>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {sentenceDifficulty.sentences.map((sentence, idx) => (
              <div key={idx} className="p-3 bg-muted rounded space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm flex-1">{sentence.text}</span>
                  <Badge variant={sentence.difficulty === "쉬움" ? "default" : "destructive"}>{sentence.difficulty}</Badge>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{sentence.length}자</span>
                  <span>{sentence.words}개 단어</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // 요약문 생성기
  if (toolId === "text-summarizer") {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>생성된 요약문</Label>
            <Button variant="outline" size="sm" onClick={() => handleCopy(summary)}>
              <Copy className="w-4 h-4 mr-2" />
              복사
            </Button>
          </div>
          <div className="p-4 bg-muted rounded-lg border min-h-32">
            <p className="whitespace-pre-wrap">{summary || "요약할 텍스트를 입력해주세요."}</p>
          </div>
          {onPreviewChange && summary && (
            <Button onClick={() => onPreviewChange(summary)} className="w-full">
              요약문을 미리보기에 적용
            </Button>
          )}
        </div>
      </div>
    )
  }

  // 키워드 클라우드 생성기
  if (toolId === "keyword-cloud") {
    const topKeywords = wordFrequency.slice(0, 20)
    const maxCount = topKeywords[0]?.count || 1

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>키워드 클라우드 (상위 20개)</Label>
          <div className="p-6 bg-muted rounded-lg border min-h-64 flex flex-wrap items-center justify-center gap-3">
            {topKeywords.length === 0 ? (
              <p className="text-muted-foreground">키워드를 추출할 텍스트를 입력해주세요.</p>
            ) : (
              topKeywords.map((item, idx) => {
                const size = Math.max(12, Math.min(32, (item.count / maxCount) * 24 + 12))
                return (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 rounded hover:bg-background transition-colors cursor-pointer"
                    style={{ fontSize: `${size}px` }}
                    title={`${item.word}: ${item.count}회 (${item.percentage.toFixed(1)}%)`}
                  >
                    {item.word}
                  </span>
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  }

  // 텍스트 통계 대시보드
  if (toolId === "text-statistics") {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">글자수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.characters.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">단어수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.words.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">문장 수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.sentences}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">문단 수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.paragraphs}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">평균 통계</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>문장당 평균 단어 수:</span>
              <span className="font-semibold">{statistics.avgWordsPerSentence}개</span>
            </div>
            <div className="flex justify-between">
              <span>단어당 평균 글자 수:</span>
              <span className="font-semibold">{statistics.avgCharsPerWord}자</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">가독성 점수</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold">{Math.round(statistics.readability.score)}</div>
              <div className="flex-1">
                <Progress value={statistics.readability.score} className="h-3" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={statistics.readability.score >= 60 ? "default" : "destructive"}>
                {statistics.readability.level}
              </Badge>
              <span className="text-sm text-muted-foreground">{statistics.readability.description}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}

