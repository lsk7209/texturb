"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import type {
  FormatOptions,
  CaseMode,
  ListStyle,
  TableFormat,
  DateFormat,
  WidthDirection,
  QuoteStyle,
  BracketStyle,
} from "@/lib/format-transforms";

interface ControlsProps {
  opts: FormatOptions;
  onChange: <K extends keyof FormatOptions>(
    key: K,
    value: FormatOptions[K],
  ) => void;
  onCopy?: () => void;
}

export function FormatControls({ opts, onChange, onCopy }: ControlsProps) {
  return (
    <div className="space-y-4">
      <CaseControls opts={opts} onChange={onChange} />
    </div>
  );
}

export function CaseControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">변환 옵션</Label>
      <RadioGroup
        value={opts.mode}
        onValueChange={(v) => onChange("mode", v as CaseMode)}
        className="flex flex-col gap-3"
      >
        {(["upper", "lower", "title", "sentence"] as CaseMode[]).map((m) => (
          <div key={m} className="flex items-center space-x-2">
            <RadioGroupItem value={m} id={m} />
            <Label htmlFor={m} className="font-normal cursor-pointer">
              {m === "upper"
                ? "UPPERCASE (대문자)"
                : m === "lower"
                  ? "lowercase (소문자)"
                  : m === "title"
                    ? "Title Case (단어 첫 글자만 대문자)"
                    : "Sentence case (문장 첫 글자만 대문자)"}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export function ListStyleControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">
        리스트 스타일
      </Label>
      <RadioGroup
        value={opts.listStyle}
        onValueChange={(v) => onChange("listStyle", v as ListStyle)}
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
      <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 mt-3">
        <Checkbox
          id="resetNumbering"
          checked={opts.listResetNumbering}
          onCheckedChange={(c) => onChange("listResetNumbering", c as boolean)}
        />
        <Label htmlFor="resetNumbering" className="font-normal cursor-pointer">
          항상 1부터 다시 번호 매기기
        </Label>
      </div>
    </div>
  );
}

export function TableConverterControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-sm font-medium text-slate-700">입력 포맷</Label>
        <RadioGroup
          value={opts.tableInputFormat}
          onValueChange={(v) => onChange("tableInputFormat", v as TableFormat)}
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
          value={opts.tableOutputFormat}
          onValueChange={(v) => onChange("tableOutputFormat", v as TableFormat)}
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
          checked={opts.tableFirstRowHeader}
          onCheckedChange={(c) => onChange("tableFirstRowHeader", c as boolean)}
        />
        <Label htmlFor="firstRowHeader" className="font-normal cursor-pointer">
          첫 줄을 헤더로 처리
        </Label>
      </div>
    </div>
  );
}

export function NumberFormatterControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">포맷 옵션</Label>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="useComma"
          checked={opts.numberUseComma}
          onCheckedChange={(c) => onChange("numberUseComma", c as boolean)}
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
          value={opts.numberDecimals}
          onChange={(e) =>
            onChange("numberDecimals", parseInt(e.target.value) || 0)
          }
          className="w-24"
        />
      </div>
    </div>
  );
}

export function DateFormatterControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">변환 옵션</Label>
      <div className="space-y-2">
        <Label className="text-xs text-slate-500">출력 포맷</Label>
        <Select
          value={opts.dateOutputFormat}
          onValueChange={(v) => onChange("dateOutputFormat", v as DateFormat)}
        >
          <SelectTrigger>
            <SelectValue placeholder="포맷 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="YYYY-MM-DD">YYYY-MM-DD (2025-01-01)</SelectItem>
            <SelectItem value="YYYY.MM.DD">YYYY.MM.DD (2025.01.01)</SelectItem>
            <SelectItem value="YYYY/MM/DD">YYYY/MM/DD (2025/01/01)</SelectItem>
            <SelectItem value="YYYY년 M월 D일">
              YYYY년 M월 D일 (2025년 1월 1일)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function WidthConverterControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">변환 방향</Label>
      <RadioGroup
        value={opts.widthDirection}
        onValueChange={(v) => onChange("widthDirection", v as WidthDirection)}
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
  );
}

export function QuoteBracketControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="changeQuotes"
            checked={opts.changeQuotes}
            onCheckedChange={(c) => onChange("changeQuotes", c as boolean)}
          />
          <Label htmlFor="changeQuotes" className="font-medium cursor-pointer">
            따옴표 스타일 변경
          </Label>
        </div>
        <div className="pl-6">
          <Select
            value={opts.quoteStyle}
            onValueChange={(v) => onChange("quoteStyle", v as QuoteStyle)}
            disabled={!opts.changeQuotes}
          >
            <SelectTrigger>
              <SelectValue placeholder="따옴표 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="straight">" " (직선 따옴표)</SelectItem>
              <SelectItem value="curly-double">" " (둥근 큰따옴표)</SelectItem>
              <SelectItem value="curly-single">
                ' ' (둥근 작은따옴표)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="changeBrackets"
            checked={opts.changeBrackets}
            onCheckedChange={(c) => onChange("changeBrackets", c as boolean)}
          />
          <Label
            htmlFor="changeBrackets"
            className="font-medium cursor-pointer"
          >
            괄호 스타일 변경
          </Label>
        </div>
        <div className="pl-6">
          <Select
            value={opts.bracketStyle}
            onValueChange={(v) => onChange("bracketStyle", v as BracketStyle)}
            disabled={!opts.changeBrackets}
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
  );
}

export function MarkdownToHtmlControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">변환 옵션</Label>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="br"
            checked={opts.mdBr}
            onCheckedChange={(c) => onChange("mdBr", c as boolean)}
          />
          <Label htmlFor="br" className="font-normal cursor-pointer">
            줄바꿈에 &lt;br&gt; 추가
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="pre"
            checked={opts.mdPre}
            onCheckedChange={(c) => onChange("mdPre", c as boolean)}
          />
          <Label htmlFor="pre" className="font-normal cursor-pointer">
            코드 블록을 &lt;pre&gt;&lt;code&gt;로 감싸기
          </Label>
        </div>
      </div>
    </div>
  );
}

export function HtmlToTextControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">추출 옵션</Label>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="keepLineBreaks"
            checked={opts.htmlKeepLineBreaks}
            onCheckedChange={(c) =>
              onChange("htmlKeepLineBreaks", c as boolean)
            }
          />
          <Label
            htmlFor="keepLineBreaks"
            className="font-normal cursor-pointer"
          >
            줄바꿈 보존
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="reduceSpaces"
            checked={opts.htmlReduceSpaces}
            onCheckedChange={(c) => onChange("htmlReduceSpaces", c as boolean)}
          />
          <Label htmlFor="reduceSpaces" className="font-normal cursor-pointer">
            연속 공백 1개로 줄이기
          </Label>
        </div>
      </div>
    </div>
  );
}

export function SlugControls({ opts, onChange, onCopy }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">생성 옵션</Label>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="stopWords"
          checked={opts.slugRemoveStopWords}
          onCheckedChange={(c) => onChange("slugRemoveStopWords", c as boolean)}
        />
        <Label htmlFor="stopWords" className="font-normal cursor-pointer">
          영어 제목일 경우 짧은 불용어(a, the 등) 제거
        </Label>
      </div>
      <Button
        onClick={onCopy}
        className="w-full bg-transparent"
        variant="outline"
      >
        <Copy className="w-4 h-4 mr-2" />
        슬러그 복사하기
      </Button>
    </div>
  );
}

export function MdCleanControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">정리 옵션</Label>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="headers"
            checked={opts.mdCleanNormalizeHeaders}
            onCheckedChange={(c) =>
              onChange("mdCleanNormalizeHeaders", c as boolean)
            }
          />
          <Label htmlFor="headers" className="font-normal cursor-pointer">
            헤더(#) 띄어쓰기 교정
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="lists"
            checked={opts.mdCleanNormalizeLists}
            onCheckedChange={(c) =>
              onChange("mdCleanNormalizeLists", c as boolean)
            }
          />
          <Label htmlFor="lists" className="font-normal cursor-pointer">
            리스트(-, 1.) 띄어쓰기 교정
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="blank"
            checked={opts.mdCleanCollapseBlankLines}
            onCheckedChange={(c) =>
              onChange("mdCleanCollapseBlankLines", c as boolean)
            }
          />
          <Label htmlFor="blank" className="font-normal cursor-pointer">
            연속 빈 줄 1줄로 줄이기
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="tab"
            checked={opts.mdCleanTabToSpace}
            onCheckedChange={(c) => onChange("mdCleanTabToSpace", c as boolean)}
          />
          <Label htmlFor="tab" className="font-normal cursor-pointer">
            탭(Tab)을 공백 2개로 변환
          </Label>
        </div>
      </div>
    </div>
  );
}

export function CsvCleanerControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">
        CSV/TSV 정리 옵션
      </Label>
      <div className="space-y-3">
        <div className="space-y-2">
          <Label className="text-xs text-slate-600">포맷 선택</Label>
          <RadioGroup
            value={opts.csvFormat}
            onValueChange={(v) => onChange("csvFormat", v as "csv" | "tsv")}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="csv" id="csv-format" />
              <Label
                htmlFor="csv-format"
                className="font-normal cursor-pointer"
              >
                CSV (쉼표)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tsv" id="tsv-format" />
              <Label
                htmlFor="tsv-format"
                className="font-normal cursor-pointer"
              >
                TSV (탭)
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="trimCells"
            checked={opts.csvTrimCells}
            onCheckedChange={(c) => onChange("csvTrimCells", c as boolean)}
          />
          <Label htmlFor="trimCells" className="font-normal cursor-pointer">
            셀 앞뒤 공백 제거
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="removeEmptyRows"
            checked={opts.csvRemoveEmptyRows}
            onCheckedChange={(c) =>
              onChange("csvRemoveEmptyRows", c as boolean)
            }
          />
          <Label
            htmlFor="removeEmptyRows"
            className="font-normal cursor-pointer"
          >
            빈 행 제거
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="removeDuplicates"
            checked={opts.csvRemoveDuplicates}
            onCheckedChange={(c) =>
              onChange("csvRemoveDuplicates", c as boolean)
            }
          />
          <Label
            htmlFor="removeDuplicates"
            className="font-normal cursor-pointer"
          >
            중복 행 제거
          </Label>
        </div>
      </div>
    </div>
  );
}

export function JsonFormatterControls({ opts, onChange }: ControlsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700">
        JSON 포맷 옵션
      </Label>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="minify"
            checked={opts.jsonMinify}
            onCheckedChange={(c) => onChange("jsonMinify", c as boolean)}
          />
          <Label htmlFor="minify" className="font-normal cursor-pointer">
            압축 (한 줄로)
          </Label>
        </div>
        {!opts.jsonMinify && (
          <div className="space-y-2">
            <Label className="text-xs text-slate-600">들여쓰기 공백 수</Label>
            <Input
              type="number"
              min={0}
              max={8}
              value={opts.jsonIndent}
              onChange={(e) =>
                onChange("jsonIndent", parseInt(e.target.value) || 2)
              }
              className="max-w-[100px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function renderFormatControls(
  toolId: string | undefined,
  opts: FormatOptions,
  onChange: ControlsProps["onChange"],
  onCopy?: () => void,
) {
  switch (toolId) {
    case "list-style-converter":
      return <ListStyleControls opts={opts} onChange={onChange} />;
    case "table-markdown-converter":
      return <TableConverterControls opts={opts} onChange={onChange} />;
    case "number-formatter":
      return <NumberFormatterControls opts={opts} onChange={onChange} />;
    case "date-format-converter":
      return <DateFormatterControls opts={opts} onChange={onChange} />;
    case "fullwidth-halfwidth-converter":
      return <WidthConverterControls opts={opts} onChange={onChange} />;
    case "quote-bracket-style-converter":
      return <QuoteBracketControls opts={opts} onChange={onChange} />;
    case "markdown-to-html":
      return <MarkdownToHtmlControls opts={opts} onChange={onChange} />;
    case "html-to-text":
      return <HtmlToTextControls opts={opts} onChange={onChange} />;
    case "slug-generator":
      return <SlugControls opts={opts} onChange={onChange} onCopy={onCopy} />;
    case "md-format-cleaner":
      return <MdCleanControls opts={opts} onChange={onChange} />;
    case "csv-cleaner":
      return <CsvCleanerControls opts={opts} onChange={onChange} />;
    case "json-formatter":
      return <JsonFormatterControls opts={opts} onChange={onChange} />;
    default:
      return <CaseControls opts={opts} onChange={onChange} />;
  }
}
