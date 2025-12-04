"use client"

interface AEOSummarySectionProps {
  question: string
  answer: string
  keywords?: string[]
}

/**
 * AEO (Answer Engine Optimization) 최적화를 위한 요약 섹션
 * 생성형 검색 엔진이 답변으로 인용하기 좋은 구조화된 형식
 */
export function AEOSummarySection({ question, answer, keywords }: AEOSummarySectionProps) {
  return (
    <section className="bg-muted/50 rounded-lg p-6 sm:p-8 my-6 sm:my-8 border-l-4 border-primary" aria-labelledby="aeo-summary-heading">
      <h2 id="aeo-summary-heading" className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="text-primary">Q.</span>
        <span>{question}</span>
      </h2>
      <div className="prose prose-sm sm:prose-base max-w-none">
        <p className="text-base sm:text-lg leading-relaxed text-foreground mb-4">{answer}</p>
        {keywords && keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-background border border-border rounded-full text-xs sm:text-sm text-muted-foreground"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

