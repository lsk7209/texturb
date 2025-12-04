"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FormatToolsProps {
  text: string
  onPreviewChange?: (text: string) => void
  toolId?: string
}

type CaseMode = "upper" | "lower" | "title" | "sentence"
type ListStyle = "hyphen" | "asterisk" | "number" | "paren-number"
type TableFormat = "markdown" | "csv" | "tsv"
type DateFormat = "YYYY-MM-DD" | "YYYY.MM.DD" | "YYYY/MM/DD" | "YYYY년 M월 D일"
type WidthDirection = "full-to-half" | "half-to-full"
type QuoteStyle = "straight" | "curly-double" | "curly-single"
type BracketStyle = "paren" | "square" | "lenticular"

export function FormatTools({ text, onPreviewChange, toolId }: FormatToolsProps) {
  const { toast } = useToast()
  const [mode, setMode] = useState<CaseMode>("sentence")
  const [listOptions, setListOptions] = useState<{ style: ListStyle; resetNumbering: boolean }>({
    style: "hyphen",
    resetNumbering: false,
  })
  const [tableOptions, setTableOptions] = useState<{
    inputFormat: TableFormat
    outputFormat: TableFormat
    firstRowHeader: boolean
  }>({
    inputFormat: "tsv",
    outputFormat: "markdown",
    firstRowHeader: true,
  })
  const [numberOptions, setNumberOptions] = useState({
    useComma: true,
    decimals: 0,
  })
  const [dateOptions, setDateOptions] = useState<{
    inputFormat: DateFormat
    outputFormat: DateFormat
  }>({
    inputFormat: "YYYY-MM-DD",
    outputFormat: "YYYY년 M월 D일",
  })
  const [widthOptions, setWidthOptions] = useState<{ direction: WidthDirection }>({
    direction: "full-to-half",
  })
  const [quoteOptions, setQuoteOptions] = useState<{
    quoteStyle: QuoteStyle
    bracketStyle: BracketStyle
    changeQuotes: boolean
    changeBrackets: boolean
  }>({
    quoteStyle: "curly-double",
    bracketStyle: "paren",
    changeQuotes: true,
    changeBrackets: true,
  })
  const [mdOptions, setMdOptions] = useState({
    br: false,
    pre: false,
  })
  const [htmlOptions, setHtmlOptions] = useState({
    keepLineBreaks: true,
    reduceSpaces: false,
  })
  const [slugOptions, setSlugOptions] = useState({
    removeStopWords: false,
  })
  const [mdCleanOptions, setMdCleanOptions] = useState({
    normalizeHeaders: true,
    normalizeLists: true,
    collapseBlankLines: false,
    tabToSpace: false,
  })
  const [csvOptions, setCsvOptions] = useState({
    format: "csv" as "csv" | "tsv",
    removeEmptyRows: true,
    trimCells: true,
    removeDuplicates: false,
  })
  const [jsonOptions, setJsonOptions] = useState({
    indent: 2,
    minify: false,
  })

  useEffect(() => {
    let result = text

    if (toolId === "list-style-converter") {
      const lines = result.split("\n")
      let counter = 1

      result = lines
        .map((line) => {
          if (!line.trim()) return line
          const content = line.replace(/^(\s*)([-*]|\d+\.|$$\d+$$)\s+/, "$1")
          const indent = line.match(/^(\s*)/)?.[0] || ""
          const cleanContent = content === line ? line.trim() : content.trim()

          switch (listOptions.style) {
            case "hyphen":
              return `${indent}- ${cleanContent}`
            case "asterisk":
              return `${indent}* ${cleanContent}`
            case "number":
              return `${indent}${counter++}. ${cleanContent}`
            case "paren-number":
              return `${indent}(${counter++}) ${cleanContent}`
            default:
              return line
          }
        })
        .join("\n")
    } else if (toolId === "table-markdown-converter") {
      const lines = result
        .trim()
        .split("\n")
        .filter((l) => l.trim())
      if (lines.length === 0) {
        result = ""
      } else {
        let data: string[][] = []

        if (tableOptions.inputFormat === "markdown") {
          data = lines
            .filter((l) => !l.trim().match(/^\|?\s*[-:]+\s*\|/))
            .map((line) =>
              line
                .trim()
                .replace(/^\||\|$/g, "")
                .split("|")
                .map((c) => c.trim()),
            )
        } else {
          const separator = tableOptions.inputFormat === "csv" ? "," : "\t"
          data = lines.map((line) => line.split(separator).map((c) => c.trim()))
        }

        if (tableOptions.outputFormat === "markdown") {
          if (data.length > 0 && data[0].length > 0) {
            const colWidths = data[0].map((_, colIndex) =>
              Math.max(...data.map((row) => (row[colIndex] || "").length), 3),
            )
            const header = data[0]
            const body = data.slice(tableOptions.firstRowHeader ? 1 : 0)
            const buildRow = (row: string[]) =>
              "| " + row.map((cell, i) => (cell || "").padEnd(colWidths[i])).join(" | ") + " |"
            const separatorRow = "| " + colWidths.map((w) => "-".repeat(w)).join(" | ") + " |"

            if (tableOptions.firstRowHeader) {
              result = [buildRow(header), separatorRow, ...body.map(buildRow)].join("\n")
            } else {
              const genHeader = header.map((_, i) => `Header ${i + 1}`)
              result = [buildRow(genHeader), separatorRow, ...data.map(buildRow)].join("\n")
            }
          }
        } else {
          const separator = tableOptions.outputFormat === "csv" ? "," : "\t"
          result = data.map((row) => row.join(separator)).join("\n")
        }
      }
    } else if (toolId === "number-formatter") {
      result = result.replace(/[\d,.]+/g, (match) => {
        const cleanNum = match.replace(/,/g, "")
        const num = Number.parseFloat(cleanNum)
        if (isNaN(num)) return match

        return num.toLocaleString(undefined, {
          minimumFractionDigits: numberOptions.decimals,
          maximumFractionDigits: numberOptions.decimals,
          useGrouping: numberOptions.useComma,
        })
      })
    } else if (toolId === "date-format-converter") {
      const dateRegex = /(\d{4})[-./년]\s*(\d{1,2})[-./월]\s*(\d{1,2})[일]?/g

      result = result.replace(dateRegex, (match, y, m, d) => {
        const year = y
        const month = m.padStart(2, "0")
        const day = d.padStart(2, "0")
        const monthInt = Number.parseInt(m)
        const dayInt = Number.parseInt(d)

        switch (dateOptions.outputFormat) {
          case "YYYY-MM-DD":
            return `${year}-${month}-${day}`
          case "YYYY.MM.DD":
            return `${year}.${month}.${day}`
          case "YYYY/MM/DD":
            return `${year}/${month}/${day}`
          case "YYYY년 M월 D일":
            return `${year}년 ${monthInt}월 ${dayInt}일`
          default:
            return match
        }
      })
    } else if (toolId === "fullwidth-halfwidth-converter") {
      if (widthOptions.direction === "full-to-half") {
        result = result.replace(/[\uff01-\uff5e]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
        result = result.replace(/\u3000/g, " ")
      } else {
        result = result.replace(/[!-~]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 0xfee0))
        result = result.replace(/ /g, "\u3000")
      }
    } else if (toolId === "quote-bracket-style-converter") {
      if (quoteOptions.changeQuotes) {
        if (quoteOptions.quoteStyle === "straight") {
          result = result.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"')
        } else if (quoteOptions.quoteStyle === "curly-double") {
          result = result.replace(/"(.*?)"/g, "“$1”")
        } else if (quoteOptions.quoteStyle === "curly-single") {
          result = result.replace(/'(.*?)'/g, "‘$1’")
        }
      }

      if (quoteOptions.changeBrackets) {
        if (quoteOptions.bracketStyle === "paren") {
          result = result.replace(/[[\]【】]/g, (m) => (m === "[" || m === "【" ? "(" : ")"))
        } else if (quoteOptions.bracketStyle === "square") {
          result = result.replace(/[$$$$【】]/g, (m) => (m === "(" || m === "【" ? "[" : "]"))
        } else if (quoteOptions.bracketStyle === "lenticular") {
          result = result.replace(/[$$$$[\]]/g, (m) => (m === "(" || m === "[" ? "【" : "】"))
        }
      }
    } else if (toolId === "markdown-to-html") {
      result = result.replace(/^### (.*$)/gim, "<h3>$1</h3>")
      result = result.replace(/^## (.*$)/gim, "<h2>$1</h2>")
      result = result.replace(/^# (.*$)/gim, "<h1>$1</h1>")
      result = result.replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      result = result.replace(/\*(.*)\*/gim, "<em>$1</em>")
      result = result.replace(/\[(.*?)\]$$(.*?)$$/gim, '<a href="$2">$1</a>')
      if (mdOptions.br) result = result.replace(/\n/g, "<br>\n")
      if (mdOptions.pre) result = `<pre><code>${result}</code></pre>`
    } else if (toolId === "html-to-text") {
      result = result.replace(/<[^>]*>/g, "")
      if (!htmlOptions.keepLineBreaks) result = result.replace(/[\r\n]+/g, " ")
      if (htmlOptions.reduceSpaces) result = result.replace(/\s+/g, " ").trim()
    } else if (toolId === "slug-generator") {
      let slug = text.toLowerCase()
      if (slugOptions.removeStopWords) {
        const stopWords = ["a", "an", "the", "of", "in", "on", "at", "to", "for"]
        slug = slug
          .split(" ")
          .filter((w) => !stopWords.includes(w))
          .join(" ")
      }
      result = slug
        .replace(/[^a-z0-9가-힣\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
    } else if (toolId === "md-format-cleaner") {
      if (mdCleanOptions.normalizeHeaders) result = result.replace(/^(#+)([^ \n])/gm, "$1 $2")
      if (mdCleanOptions.normalizeLists) {
        result = result.replace(/^(\s*[-*])([^ \n])/gm, "$1 $2")
        result = result.replace(/^(\s*\d+\.)([^ \n])/gm, "$1 $2")
      }
      if (mdCleanOptions.collapseBlankLines) result = result.replace(/\n\s*\n/g, "\n\n")
      if (mdCleanOptions.tabToSpace) result = result.replace(/\t/g, "  ")
      result = result.replace(/([^\n])\n(#+)/g, "$1\n\n$2")
    } else if (toolId === "csv-cleaner") {
      const separator = csvOptions.format === "csv" ? "," : "\t"
      let rows = result.split("\n").map((row) => row.split(separator))

      if (csvOptions.trimCells) {
        rows = rows.map((row) => row.map((cell) => cell.trim()))
      }

      if (csvOptions.removeEmptyRows) {
        rows = rows.filter((row) => row.some((cell) => cell.trim().length > 0))
      }

      if (csvOptions.removeDuplicates) {
        const seen = new Set<string>()
        rows = rows.filter((row) => {
          const key = row.join(separator)
          if (seen.has(key)) return false
          seen.add(key)
          return true
        })
      }

      result = rows.map((row) => row.join(separator)).join("\n")
    } else if (toolId === "json-formatter") {
      try {
        const parsed = JSON.parse(text)
        if (jsonOptions.minify) {
          result = JSON.stringify(parsed)
        } else {
          result = JSON.stringify(parsed, null, jsonOptions.indent)
        }
      } catch (e) {
        result = `JSON 파싱 오류: ${e instanceof Error ? e.message : String(e)}`
      }
    } else {
      switch (mode) {
        case "upper":
          result = result.toUpperCase()
          break
        case "lower":
          result = result.toLowerCase()
          break
        case "title":
          result = result.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
          break
        case "sentence":
          result = result.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
          break
      }
    }

    onPreviewChange?.(result)
  }, [
    text,
    mode,
    mdOptions,
    htmlOptions,
    slugOptions,
    mdCleanOptions,
    listOptions,
    tableOptions,
    numberOptions,
    dateOptions,
    widthOptions,
    quoteOptions,
    csvOptions,
    jsonOptions,
    toolId,
    onPreviewChange,
  ])

  const getPreview = () => {
    return text // Placeholder
  }

  const calculatePreview = () => {
    let result = text
    if (toolId === "list-style-converter") {
      const lines = result.split("\n")
      let counter = 1
      return lines
        .map((line) => {
          if (!line.trim()) return line
          const content = line.replace(/^(\s*)([-*]|\d+\.|$$\d+$$)\s+/, "$1")
          const indent = line.match(/^(\s*)/)?.[0] || ""
          const cleanContent = content === line ? line.trim() : content.trim()

          switch (listOptions.style) {
            case "hyphen":
              return `${indent}- ${cleanContent}`
            case "asterisk":
              return `${indent}* ${cleanContent}`
            case "number":
              return `${indent}${counter++}. ${cleanContent}`
            case "paren-number":
              return `${indent}(${counter++}) ${cleanContent}`
            default:
              return line
          }
        })
        .join("\n")
    }

    if (toolId === "table-markdown-converter") {
      const lines = result
        .trim()
        .split("\n")
        .filter((l) => l.trim())
      if (lines.length === 0) return ""

      let data: string[][] = []
      if (tableOptions.inputFormat === "markdown") {
        data = lines
          .filter((l) => !l.trim().match(/^\|?\s*[-:]+\s*\|/))
          .map((line) =>
            line
              .trim()
              .replace(/^\||\|$/g, "")
              .split("|")
              .map((c) => c.trim()),
          )
      } else {
        const separator = tableOptions.inputFormat === "csv" ? "," : "\t"
        data = lines.map((line) => line.split(separator).map((c) => c.trim()))
      }

      if (tableOptions.outputFormat === "markdown") {
        if (data.length === 0 || data[0].length === 0) return ""
        const colWidths = data[0].map((_, colIndex) => Math.max(...data.map((row) => (row[colIndex] || "").length), 3))
        const header = data[0]
        const body = data.slice(tableOptions.firstRowHeader ? 1 : 0)
        const buildRow = (row: string[]) =>
          "| " + row.map((cell, i) => (cell || "").padEnd(colWidths[i])).join(" | ") + " |"
        const separatorRow = "| " + colWidths.map((w) => "-".repeat(w)).join(" | ") + " |"

        if (tableOptions.firstRowHeader) {
          return [buildRow(header), separatorRow, ...body.map(buildRow)].join("\n")
        } else {
          const genHeader = header.map((_, i) => `Header ${i + 1}`)
          return [buildRow(genHeader), separatorRow, ...data.map(buildRow)].join("\n")
        }
      } else {
        const separator = tableOptions.outputFormat === "csv" ? "," : "\t"
        return data.map((row) => row.join(separator)).join("\n")
      }
    }

    if (toolId === "number-formatter") {
      return result.replace(/[\d,.]+/g, (match) => {
        const cleanNum = match.replace(/,/g, "")
        const num = Number.parseFloat(cleanNum)
        if (isNaN(num)) return match
        return num.toLocaleString(undefined, {
          minimumFractionDigits: numberOptions.decimals,
          maximumFractionDigits: numberOptions.decimals,
          useGrouping: numberOptions.useComma,
        })
      })
    }

    if (toolId === "date-format-converter") {
      const dateRegex = /(\d{4})[-./년]\s*(\d{1,2})[-./월]\s*(\d{1,2})[일]?/g
      return result.replace(dateRegex, (match, y, m, d) => {
        const year = y
        const month = m.padStart(2, "0")
        const day = d.padStart(2, "0")
        const monthInt = Number.parseInt(m)
        const dayInt = Number.parseInt(d)

        switch (dateOptions.outputFormat) {
          case "YYYY-MM-DD":
            return `${year}-${month}-${day}`
          case "YYYY.MM.DD":
            return `${year}.${month}.${day}`
          case "YYYY/MM/DD":
            return `${year}/${month}/${day}`
          case "YYYY년 M월 D일":
            return `${year}년 ${monthInt}월 ${dayInt}일`
          default:
            return match
        }
      })
    }

    if (toolId === "fullwidth-halfwidth-converter") {
      if (widthOptions.direction === "full-to-half") {
        result = result.replace(/[\uff01-\uff5e]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
        result = result.replace(/\u3000/g, " ")
      } else {
        result = result.replace(/[!-~]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 0xfee0))
        result = result.replace(/ /g, "\u3000")
      }
      return result
    }

    if (toolId === "quote-bracket-style-converter") {
      if (quoteOptions.changeQuotes) {
        if (quoteOptions.quoteStyle === "straight") {
          result = result.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"')
        } else if (quoteOptions.quoteStyle === "curly-double") {
          result = result.replace(/"(.*?)"/g, "“$1”")
        } else if (quoteOptions.quoteStyle === "curly-single") {
          result = result.replace(/'(.*?)'/g, "‘$1’")
        }
      }

      if (quoteOptions.changeBrackets) {
        if (quoteOptions.bracketStyle === "paren") {
          result = result.replace(/[[\]【】]/g, (m) => (m === "[" || m === "【" ? "(" : ")"))
        } else if (quoteOptions.bracketStyle === "square") {
          result = result.replace(/[$$$$【】]/g, (m) => (m === "(" || m === "【" ? "[" : "]"))
        } else if (quoteOptions.bracketStyle === "lenticular") {
          result = result.replace(/[$$$$[\]]/g, (m) => (m === "(" || m === "[" ? "【" : "】"))
        }
      }
      return result
    }

    if (toolId === "markdown-to-html") {
      result = result.replace(/^### (.*$)/gim, "<h3>$1</h3>")
      result = result.replace(/^## (.*$)/gim, "<h2>$1</h2>")
      result = result.replace(/^# (.*$)/gim, "<h1>$1</h1>")
      result = result.replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      result = result.replace(/\*(.*)\*/gim, "<em>$1</em>")
      result = result.replace(/\[(.*?)\]$$(.*?)$$/gim, '<a href="$2">$1</a>')
      if (mdOptions.br) result = result.replace(/\n/g, "<br>\n")
      if (mdOptions.pre) result = `<pre><code>${result}</code></pre>`
      return result
    }
    if (toolId === "html-to-text") {
      result = result.replace(/<[^>]*>/g, "")
      if (!htmlOptions.keepLineBreaks) result = result.replace(/[\r\n]+/g, " ")
      if (htmlOptions.reduceSpaces) result = result.replace(/\s+/g, " ").trim()
      return result
    }
    if (toolId === "slug-generator") {
      let slug = text.toLowerCase()
      if (slugOptions.removeStopWords) {
        const stopWords = ["a", "an", "the", "of", "in", "on", "at", "to", "for"]
        slug = slug
          .split(" ")
          .filter((w) => !stopWords.includes(w))
          .join(" ")
      }
      return slug
        .replace(/[^a-z0-9가-힣\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
    }
    if (toolId === "md-format-cleaner") {
      if (mdCleanOptions.normalizeHeaders) result = result.replace(/^(#+)([^ \n])/gm, "$1 $2")
      if (mdCleanOptions.normalizeLists) {
        result = result.replace(/^(\s*[-*])([^ \n])/gm, "$1 $2")
        result = result.replace(/^(\s*\d+\.)([^ \n])/gm, "$1 $2")
      }
      if (mdCleanOptions.collapseBlankLines) result = result.replace(/\n\s*\n/g, "\n\n")
      if (mdCleanOptions.tabToSpace) result = result.replace(/\t/g, "  ")
      result = result.replace(/([^\n])\n(#+)/g, "$1\n\n$2")
      return result
    }

    switch (mode) {
      case "upper":
        return result.toUpperCase()
      case "lower":
        return result.toLowerCase()
      case "title":
        return result.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
      case "sentence":
        return result.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
      default:
        return result
    }
  }

  const preview = calculatePreview()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(preview)
    toast({
      description: "결과가 클립보드에 복사되었습니다.",
      duration: 2000,
    })
  }

  const renderControls = () => {
    if (toolId === "list-style-converter") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">리스트 스타일</Label>
          <RadioGroup
            value={listOptions.style}
            onValueChange={(v) => setListOptions((prev) => ({ ...prev, style: v as ListStyle }))}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hyphen" id="hyphen" />
              <Label htmlFor="hyphen" className="font-normal cursor-pointer">
                - 항목 (하이픈)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asterisk" id="asterisk" />
              <Label htmlFor="asterisk" className="font-normal cursor-pointer">
                * 항목 (별표)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="number" id="number" />
              <Label htmlFor="number" className="font-normal cursor-pointer">
                1. 항목 (번호)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paren-number" id="paren-number" />
              <Label htmlFor="paren-number" className="font-normal cursor-pointer">
                (1) 항목 (괄호 번호)
              </Label>
            </div>
          </RadioGroup>

          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center space-x-2 mt-3">
              <Checkbox
                id="resetNumbering"
                checked={listOptions.resetNumbering}
                onCheckedChange={(c) => setListOptions((prev) => ({ ...prev, resetNumbering: c as boolean }))}
              />
              <Label htmlFor="resetNumbering" className="font-normal cursor-pointer">
                항상 1부터 다시 번호 매기기
              </Label>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "table-markdown-converter") {
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium text-slate-700">입력 포맷</Label>
            <RadioGroup
              value={tableOptions.inputFormat}
              onValueChange={(v) => setTableOptions((prev) => ({ ...prev, inputFormat: v as TableFormat }))}
              className="flex flex-row gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tsv" id="in-tsv" />
                <Label htmlFor="in-tsv" className="font-normal cursor-pointer">
                  탭(TSV)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="csv" id="in-csv" />
                <Label htmlFor="in-csv" className="font-normal cursor-pointer">
                  쉼표(CSV)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="markdown" id="in-md" />
                <Label htmlFor="in-md" className="font-normal cursor-pointer">
                  마크다운
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-slate-700">출력 포맷</Label>
            <RadioGroup
              value={tableOptions.outputFormat}
              onValueChange={(v) => setTableOptions((prev) => ({ ...prev, outputFormat: v as TableFormat }))}
              className="flex flex-row gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="markdown" id="out-md" />
                <Label htmlFor="out-md" className="font-normal cursor-pointer">
                  마크다운 표
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tsv" id="out-tsv" />
                <Label htmlFor="out-tsv" className="font-normal cursor-pointer">
                  탭(TSV)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="csv" id="out-csv" />
                <Label htmlFor="out-csv" className="font-normal cursor-pointer">
                  쉼표(CSV)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
            <Checkbox
              id="firstRowHeader"
              checked={tableOptions.firstRowHeader}
              onCheckedChange={(c) => setTableOptions((prev) => ({ ...prev, firstRowHeader: c as boolean }))}
            />
            <Label htmlFor="firstRowHeader" className="font-normal cursor-pointer">
              첫 줄을 헤더로 처리
            </Label>
          </div>
        </div>
      )
    }

    if (toolId === "number-formatter") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">포맷 옵션</Label>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="useComma"
                checked={numberOptions.useComma}
                onCheckedChange={(c) => setNumberOptions((prev) => ({ ...prev, useComma: c as boolean }))}
              />
              <Label htmlFor="useComma" className="font-normal cursor-pointer">
                천 단위 콤마(,) 사용
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="decimals" className="text-xs text-slate-500">
                소수점 자리수
              </Label>
              <Input
                id="decimals"
                type="number"
                min="0"
                max="10"
                value={numberOptions.decimals}
                onChange={(e) =>
                  setNumberOptions((prev) => ({ ...prev, decimals: Number.parseInt(e.target.value) || 0 }))
                }
                className="w-24"
              />
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "date-format-converter") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">변환 옵션</Label>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs text-slate-500">출력 포맷</Label>
              <Select
                value={dateOptions.outputFormat}
                onValueChange={(v) => setDateOptions((prev) => ({ ...prev, outputFormat: v as DateFormat }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="포맷 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="YYYY-MM-DD">YYYY-MM-DD (2025-01-01)</SelectItem>
                  <SelectItem value="YYYY.MM.DD">YYYY.MM.DD (2025.01.01)</SelectItem>
                  <SelectItem value="YYYY/MM/DD">YYYY/MM/DD (2025/01/01)</SelectItem>
                  <SelectItem value="YYYY년 M월 D일">YYYY년 M월 D일 (2025년 1월 1일)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "fullwidth-halfwidth-converter") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">변환 방향</Label>
          <RadioGroup
            value={widthOptions.direction}
            onValueChange={(v) => setWidthOptions((prev) => ({ ...prev, direction: v as WidthDirection }))}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full-to-half" id="full-to-half" />
              <Label htmlFor="full-to-half" className="font-normal cursor-pointer">
                전각 → 반각 (Ｆｕｌｌ → Full)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="half-to-full" id="half-to-full" />
              <Label htmlFor="half-to-full" className="font-normal cursor-pointer">
                반각 → 전각 (Full → Ｆｕｌｌ)
              </Label>
            </div>
          </RadioGroup>
        </div>
      )
    }

    if (toolId === "quote-bracket-style-converter") {
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="changeQuotes"
                checked={quoteOptions.changeQuotes}
                onCheckedChange={(c) => setQuoteOptions((prev) => ({ ...prev, changeQuotes: c as boolean }))}
              />
              <Label htmlFor="changeQuotes" className="font-medium cursor-pointer">
                따옴표 스타일 변경
              </Label>
            </div>
            <div className="pl-6">
              <Select
                value={quoteOptions.quoteStyle}
                onValueChange={(v) => setQuoteOptions((prev) => ({ ...prev, quoteStyle: v as QuoteStyle }))}
                disabled={!quoteOptions.changeQuotes}
              >
                <SelectTrigger>
                  <SelectValue placeholder="따옴표 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="straight">" " (직선 따옴표)</SelectItem>
                  <SelectItem value="curly-double">“ ” (둥근 큰따옴표)</SelectItem>
                  <SelectItem value="curly-single">‘ ’ (둥근 작은따옴표)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="changeBrackets"
                checked={quoteOptions.changeBrackets}
                onCheckedChange={(c) => setQuoteOptions((prev) => ({ ...prev, changeBrackets: c as boolean }))}
              />
              <Label htmlFor="changeBrackets" className="font-medium cursor-pointer">
                괄호 스타일 변경
              </Label>
            </div>
            <div className="pl-6">
              <Select
                value={quoteOptions.bracketStyle}
                onValueChange={(v) => setQuoteOptions((prev) => ({ ...prev, bracketStyle: v as BracketStyle }))}
                disabled={!quoteOptions.changeBrackets}
              >
                <SelectTrigger>
                  <SelectValue placeholder="괄호 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paren">( ) 소괄호</SelectItem>
                  <SelectItem value="square">[ ] 대괄호</SelectItem>
                  <SelectItem value="lenticular">【 】 렌즈형 괄호</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "markdown-to-html") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">변환 옵션</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="br"
                checked={mdOptions.br}
                onCheckedChange={(c) => setMdOptions((prev) => ({ ...prev, br: c as boolean }))}
              />
              <Label htmlFor="br" className="font-normal cursor-pointer">
                줄바꿈에 &lt;br&gt; 추가
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pre"
                checked={mdOptions.pre}
                onCheckedChange={(c) => setMdOptions((prev) => ({ ...prev, pre: c as boolean }))}
              />
              <Label htmlFor="pre" className="font-normal cursor-pointer">
                코드 블록을 &lt;pre&gt;&lt;code&gt;로 감싸기
              </Label>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "html-to-text") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">추출 옵션</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="keepLineBreaks"
                checked={htmlOptions.keepLineBreaks}
                onCheckedChange={(c) => setHtmlOptions((prev) => ({ ...prev, keepLineBreaks: c as boolean }))}
              />
              <Label htmlFor="keepLineBreaks" className="font-normal cursor-pointer">
                줄바꿈 보존
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="reduceSpaces"
                checked={htmlOptions.reduceSpaces}
                onCheckedChange={(c) => setHtmlOptions((prev) => ({ ...prev, reduceSpaces: c as boolean }))}
              />
              <Label htmlFor="reduceSpaces" className="font-normal cursor-pointer">
                연속 공백 1개로 줄이기
              </Label>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "slug-generator") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">생성 옵션</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stopWords"
                checked={slugOptions.removeStopWords}
                onCheckedChange={(c) => setSlugOptions((prev) => ({ ...prev, removeStopWords: c as boolean }))}
              />
              <Label htmlFor="stopWords" className="font-normal cursor-pointer">
                영어 제목일 경우 짧은 불용어(a, the 등) 제거
              </Label>
            </div>
          </div>
          <Button onClick={copyToClipboard} className="w-full bg-transparent" variant="outline">
            <Copy className="w-4 h-4 mr-2" />
            슬러그 복사하기
          </Button>
        </div>
      )
    }

    if (toolId === "md-format-cleaner") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">정리 옵션</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="headers"
                checked={mdCleanOptions.normalizeHeaders}
                onCheckedChange={(c) => setMdCleanOptions((prev) => ({ ...prev, normalizeHeaders: c as boolean }))}
              />
              <Label htmlFor="headers" className="font-normal cursor-pointer">
                헤더(#) 띄어쓰기 교정
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lists"
                checked={mdCleanOptions.normalizeLists}
                onCheckedChange={(c) => setMdCleanOptions((prev) => ({ ...prev, normalizeLists: c as boolean }))}
              />
              <Label htmlFor="lists" className="font-normal cursor-pointer">
                리스트(-, 1.) 띄어쓰기 교정
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="blank"
                checked={mdCleanOptions.collapseBlankLines}
                onCheckedChange={(c) => setMdCleanOptions((prev) => ({ ...prev, collapseBlankLines: c as boolean }))}
              />
              <Label htmlFor="blank" className="font-normal cursor-pointer">
                연속 빈 줄 1줄로 줄이기
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tab"
                checked={mdCleanOptions.tabToSpace}
                onCheckedChange={(c) => setMdCleanOptions((prev) => ({ ...prev, tabToSpace: c as boolean }))}
              />
              <Label htmlFor="tab" className="font-normal cursor-pointer">
                탭(Tab)을 공백 2개로 변환
              </Label>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "csv-cleaner") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">CSV/TSV 정리 옵션</Label>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label className="text-xs text-slate-600">포맷 선택</Label>
              <RadioGroup
                value={csvOptions.format}
                onValueChange={(v) => setCsvOptions((prev) => ({ ...prev, format: v as "csv" | "tsv" }))}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="csv" id="csv-format" />
                  <Label htmlFor="csv-format" className="font-normal cursor-pointer">
                    CSV (쉼표)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tsv" id="tsv-format" />
                  <Label htmlFor="tsv-format" className="font-normal cursor-pointer">
                    TSV (탭)
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="trimCells"
                checked={csvOptions.trimCells}
                onCheckedChange={(c) => setCsvOptions((prev) => ({ ...prev, trimCells: c as boolean }))}
              />
              <Label htmlFor="trimCells" className="font-normal cursor-pointer">
                셀 앞뒤 공백 제거
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="removeEmptyRows"
                checked={csvOptions.removeEmptyRows}
                onCheckedChange={(c) => setCsvOptions((prev) => ({ ...prev, removeEmptyRows: c as boolean }))}
              />
              <Label htmlFor="removeEmptyRows" className="font-normal cursor-pointer">
                빈 행 제거
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="removeDuplicates"
                checked={csvOptions.removeDuplicates}
                onCheckedChange={(c) => setCsvOptions((prev) => ({ ...prev, removeDuplicates: c as boolean }))}
              />
              <Label htmlFor="removeDuplicates" className="font-normal cursor-pointer">
                중복 행 제거
              </Label>
            </div>
          </div>
        </div>
      )
    }

    if (toolId === "json-formatter") {
      return (
        <div className="space-y-4">
          <Label className="text-sm font-medium text-slate-700">JSON 포맷 옵션</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="minify"
                checked={jsonOptions.minify}
                onCheckedChange={(c) => setJsonOptions((prev) => ({ ...prev, minify: c as boolean }))}
              />
              <Label htmlFor="minify" className="font-normal cursor-pointer">
                압축 (한 줄로)
              </Label>
            </div>
            {!jsonOptions.minify && (
              <div className="space-y-2">
                <Label className="text-xs text-slate-600">들여쓰기 공백 수</Label>
                <Input
                  type="number"
                  min={0}
                  max={8}
                  value={jsonOptions.indent}
                  onChange={(e) => setJsonOptions((prev) => ({ ...prev, indent: Number.parseInt(e.target.value) || 2 }))}
                  className="max-w-[100px]"
                />
              </div>
            )}
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        <Label className="text-sm font-medium text-slate-700">변환 옵션</Label>
        <RadioGroup value={mode} onValueChange={(v) => setMode(v as CaseMode)} className="flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upper" id="upper" />
            <Label htmlFor="upper" className="font-normal cursor-pointer">
              UPPERCASE (대문자)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lower" id="lower" />
            <Label htmlFor="lower" className="font-normal cursor-pointer">
              lowercase (소문자)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="title" id="title" />
            <Label htmlFor="title" className="font-normal cursor-pointer">
              Title Case (단어 첫 글자만 대문자)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sentence" id="sentence" />
            <Label htmlFor="sentence" className="font-normal cursor-pointer">
              Sentence case (문장 첫 글자만 대문자)
            </Label>
          </div>
        </RadioGroup>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">{renderControls()}</div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">미리보기</Label>
          <div className="w-full h-[160px] p-3 rounded border border-slate-200 bg-white text-sm text-slate-600 overflow-y-auto whitespace-pre-wrap">
            {preview || <span className="text-slate-300">결과가 여기에 표시됩니다.</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
