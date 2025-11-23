// Tool-specific query parameter parsers
// Each tool defines how to parse and serialize its options

// Line Break Cleaner
export type LineBreakMode = "keep" | "remove" | "to-space" | "compress-spaces"

export interface LineBreakOptions {
  mode: LineBreakMode
}

export function parseLineBreakQuery(params: URLSearchParams): LineBreakOptions {
  const mode = params.get("mode")
  const validModes: LineBreakMode[] = ["keep", "remove", "to-space", "compress-spaces"]

  return {
    mode: validModes.includes(mode as LineBreakMode) ? (mode as LineBreakMode) : "keep",
  }
}

export function buildLineBreakQuery(options: LineBreakOptions): string {
  const params = new URLSearchParams()
  if (options.mode && options.mode !== "keep") {
    params.set("mode", options.mode)
  }
  return params.toString()
}

// Char Counter
export interface CharCounterOptions {
  includeSpaces?: boolean
  targetCount?: number
}

export function parseCharCounterQuery(params: URLSearchParams): CharCounterOptions {
  return {
    includeSpaces: params.get("includeSpaces") === "true",
    targetCount: params.has("targetCount") ? Number.parseInt(params.get("targetCount")!, 10) : undefined,
  }
}

export function buildCharCounterQuery(options: CharCounterOptions): string {
  const params = new URLSearchParams()
  if (options.includeSpaces !== undefined) {
    params.set("includeSpaces", String(options.includeSpaces))
  }
  if (options.targetCount) {
    params.set("targetCount", String(options.targetCount))
  }
  return params.toString()
}

// Case Converter
export type CaseMode = "upper" | "lower" | "title" | "sentence"

export interface CaseConverterOptions {
  mode: CaseMode
}

export function parseCaseConverterQuery(params: URLSearchParams): CaseConverterOptions {
  const mode = params.get("mode")
  const validModes: CaseMode[] = ["upper", "lower", "title", "sentence"]

  return {
    mode: validModes.includes(mode as CaseMode) ? (mode as CaseMode) : "upper",
  }
}

export function buildCaseConverterQuery(options: CaseConverterOptions): string {
  const params = new URLSearchParams()
  if (options.mode && options.mode !== "upper") {
    params.set("mode", options.mode)
  }
  return params.toString()
}

// Sort Lines
export type SortMode = "asc" | "desc" | "length"

export interface SortLinesOptions {
  mode: SortMode
  removeDuplicates?: boolean
}

export function parseSortLinesQuery(params: URLSearchParams): SortLinesOptions {
  const mode = params.get("mode")
  const validModes: SortMode[] = ["asc", "desc", "length"]

  return {
    mode: validModes.includes(mode as SortMode) ? (mode as SortMode) : "asc",
    removeDuplicates: params.get("removeDuplicates") === "true",
  }
}

export function buildSortLinesQuery(options: SortLinesOptions): string {
  const params = new URLSearchParams()
  if (options.mode && options.mode !== "asc") {
    params.set("mode", options.mode)
  }
  if (options.removeDuplicates) {
    params.set("removeDuplicates", "true")
  }
  return params.toString()
}
