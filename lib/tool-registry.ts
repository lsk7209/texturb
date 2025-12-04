import { CleanupTools } from "@/components/text-studio/tools/cleanup-tools"
import { CountTools } from "@/components/text-studio/tools/count-tools"
import { FormatTools } from "@/components/text-studio/tools/format-tools"
import { HighlightTools } from "@/components/text-studio/tools/highlight-tools"
import { AnalysisTools } from "@/components/text-studio/tools/analysis-tools"
import type { ComponentType } from "react"

/**
 * Tool component props interface
 */
export interface ToolComponentProps {
  text: string
  onPreviewChange?: (text: string) => void
  onInsert?: (char: string) => void
  toolId?: string
}

/**
 * Tool component type
 */
export type ToolComponent = ComponentType<ToolComponentProps>

// Registry mapping tool IDs and tab names to their corresponding components
export const toolRegistry: Record<string, ToolComponent> = {
  // Tab-based tools
  cleanup: CleanupTools,
  transform: FormatTools,
  analysis: AnalysisTools,
  highlight: HighlightTools,

  // Individual tool IDs
  "line-break-cleaner": CleanupTools,
  "char-counter": CountTools,
  "case-converter": FormatTools,
  "symbol-picker": HighlightTools,
  "sentence-counter": CountTools,
  "trim-whitespace": CleanupTools,
  "remove-blank-lines": CleanupTools,
  "dedupe-lines": CleanupTools,
  "markdown-to-html": FormatTools,
  "html-to-text": FormatTools,
  "slug-generator": FormatTools,
  "paragraph-counter": CountTools,
  "sort-lines": CleanupTools,
  "md-format-cleaner": FormatTools,
  "email-extractor": CleanupTools,
  "url-extractor": CleanupTools,
  "title-length-checker": CountTools,
  "meta-description-checker": CountTools,
  "list-style-converter": FormatTools,
  "table-markdown-converter": FormatTools,
  "number-formatter": FormatTools,
  "date-format-converter": FormatTools,
  "fullwidth-halfwidth-converter": FormatTools,
  "quote-bracket-style-converter": FormatTools,
  // Phase 4: 분석 및 고급 도구
  "readability-score": CountTools,
  "keyword-density": CountTools,
  "text-comparison": AnalysisTools,
  "word-frequency": AnalysisTools,
  "sentence-difficulty": AnalysisTools,
  "text-summarizer": AnalysisTools,
  "keyword-cloud": AnalysisTools,
  "text-statistics": AnalysisTools,
  "csv-cleaner": FormatTools,
  "json-formatter": FormatTools,
}
