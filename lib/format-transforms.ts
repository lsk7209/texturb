export type CaseMode = "upper" | "lower" | "title" | "sentence";
export type ListStyle = "hyphen" | "asterisk" | "number" | "paren-number";
export type TableFormat = "markdown" | "csv" | "tsv";
export type DateFormat =
  | "YYYY-MM-DD"
  | "YYYY.MM.DD"
  | "YYYY/MM/DD"
  | "YYYY년 M월 D일";
export type WidthDirection = "full-to-half" | "half-to-full";
export type QuoteStyle = "straight" | "curly-double" | "curly-single";
export type BracketStyle = "paren" | "square" | "lenticular";

export interface FormatOptions {
  mode: CaseMode;
  listStyle: ListStyle;
  listResetNumbering: boolean;
  tableInputFormat: TableFormat;
  tableOutputFormat: TableFormat;
  tableFirstRowHeader: boolean;
  numberUseComma: boolean;
  numberDecimals: number;
  dateOutputFormat: DateFormat;
  widthDirection: WidthDirection;
  quoteStyle: QuoteStyle;
  bracketStyle: BracketStyle;
  changeQuotes: boolean;
  changeBrackets: boolean;
  mdBr: boolean;
  mdPre: boolean;
  htmlKeepLineBreaks: boolean;
  htmlReduceSpaces: boolean;
  slugRemoveStopWords: boolean;
  mdCleanNormalizeHeaders: boolean;
  mdCleanNormalizeLists: boolean;
  mdCleanCollapseBlankLines: boolean;
  mdCleanTabToSpace: boolean;
  csvFormat: "csv" | "tsv";
  csvRemoveEmptyRows: boolean;
  csvTrimCells: boolean;
  csvRemoveDuplicates: boolean;
  jsonIndent: number;
  jsonMinify: boolean;
}

export const DEFAULT_FORMAT_OPTIONS: FormatOptions = {
  mode: "sentence",
  listStyle: "hyphen",
  listResetNumbering: false,
  tableInputFormat: "tsv",
  tableOutputFormat: "markdown",
  tableFirstRowHeader: true,
  numberUseComma: true,
  numberDecimals: 0,
  dateOutputFormat: "YYYY년 M월 D일",
  widthDirection: "full-to-half",
  quoteStyle: "curly-double",
  bracketStyle: "paren",
  changeQuotes: true,
  changeBrackets: true,
  mdBr: false,
  mdPre: false,
  htmlKeepLineBreaks: true,
  htmlReduceSpaces: false,
  slugRemoveStopWords: false,
  mdCleanNormalizeHeaders: true,
  mdCleanNormalizeLists: true,
  mdCleanCollapseBlankLines: false,
  mdCleanTabToSpace: false,
  csvFormat: "csv",
  csvRemoveEmptyRows: true,
  csvTrimCells: true,
  csvRemoveDuplicates: false,
  jsonIndent: 2,
  jsonMinify: false,
};

function convertListStyle(text: string, style: ListStyle): string {
  let counter = 1;
  return text
    .split("\n")
    .map((line) => {
      if (!line.trim()) return line;
      const content = line.replace(/^(\s*)([-*]|\d+\.|[(]\d+[)])\s+/, "$1");
      const indent = line.match(/^(\s*)/)?.[0] || "";
      const cleanContent = content === line ? line.trim() : content.trim();
      switch (style) {
        case "hyphen":
          return `${indent}- ${cleanContent}`;
        case "asterisk":
          return `${indent}* ${cleanContent}`;
        case "number":
          return `${indent}${counter++}. ${cleanContent}`;
        case "paren-number":
          return `${indent}(${counter++}) ${cleanContent}`;
        default:
          return line;
      }
    })
    .join("\n");
}

function convertTable(
  text: string,
  opts: Pick<
    FormatOptions,
    "tableInputFormat" | "tableOutputFormat" | "tableFirstRowHeader"
  >,
): string {
  const lines = text
    .trim()
    .split("\n")
    .filter((l) => l.trim());
  if (lines.length === 0) return "";

  let data: string[][];
  if (opts.tableInputFormat === "markdown") {
    data = lines
      .filter((l) => !l.trim().match(/^\|?\s*[-:]+\s*\|/))
      .map((line) =>
        line
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => c.trim()),
      );
  } else {
    const sep = opts.tableInputFormat === "csv" ? "," : "\t";
    data = lines.map((line) => line.split(sep).map((c) => c.trim()));
  }

  if (opts.tableOutputFormat !== "markdown") {
    const sep = opts.tableOutputFormat === "csv" ? "," : "\t";
    return data.map((row) => row.join(sep)).join("\n");
  }

  if (data.length === 0 || data[0].length === 0) return "";
  const colWidths = data[0].map((_, i) =>
    Math.max(...data.map((row) => (row[i] || "").length), 3),
  );
  const buildRow = (row: string[]) =>
    "| " +
    row.map((cell, i) => (cell || "").padEnd(colWidths[i])).join(" | ") +
    " |";
  const separatorRow =
    "| " + colWidths.map((w) => "-".repeat(w)).join(" | ") + " |";

  if (opts.tableFirstRowHeader) {
    return [
      buildRow(data[0]),
      separatorRow,
      ...data.slice(1).map(buildRow),
    ].join("\n");
  }
  const genHeader = data[0].map((_, i) => `Header ${i + 1}`);
  return [buildRow(genHeader), separatorRow, ...data.map(buildRow)].join("\n");
}

export function applyFormatTransform(
  text: string,
  toolId: string | undefined,
  opts: FormatOptions,
): string {
  let result = text;

  switch (toolId) {
    case "list-style-converter":
      return convertListStyle(text, opts.listStyle);

    case "table-markdown-converter":
      return convertTable(text, opts);

    case "number-formatter":
      return result.replace(/[\d,.]+/g, (match) => {
        const num = Number.parseFloat(match.replace(/,/g, ""));
        if (isNaN(num)) return match;
        return num.toLocaleString(undefined, {
          minimumFractionDigits: opts.numberDecimals,
          maximumFractionDigits: opts.numberDecimals,
          useGrouping: opts.numberUseComma,
        });
      });

    case "date-format-converter":
      return result.replace(
        /(\d{4})[-./년]\s*(\d{1,2})[-./월]\s*(\d{1,2})[일]?/g,
        (_, y, m, d) => {
          const month = m.padStart(2, "0");
          const day = d.padStart(2, "0");
          switch (opts.dateOutputFormat) {
            case "YYYY-MM-DD":
              return `${y}-${month}-${day}`;
            case "YYYY.MM.DD":
              return `${y}.${month}.${day}`;
            case "YYYY/MM/DD":
              return `${y}/${month}/${day}`;
            case "YYYY년 M월 D일":
              return `${y}년 ${parseInt(m)}월 ${parseInt(d)}일`;
            default:
              return _;
          }
        },
      );

    case "fullwidth-halfwidth-converter":
      if (opts.widthDirection === "full-to-half") {
        return result
          .replace(/[\uff01-\uff5e]/g, (ch) =>
            String.fromCharCode(ch.charCodeAt(0) - 0xfee0),
          )
          .replace(/\u3000/g, " ");
      }
      return result
        .replace(/[!-~]/g, (ch) =>
          String.fromCharCode(ch.charCodeAt(0) + 0xfee0),
        )
        .replace(/ /g, "\u3000");

    case "quote-bracket-style-converter":
      if (opts.changeQuotes) {
        if (opts.quoteStyle === "straight")
          result = result
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201c\u201d]/g, '"');
        else if (opts.quoteStyle === "curly-double")
          result = result.replace(/"(.*?)"/g, "\u201c$1\u201d");
        else if (opts.quoteStyle === "curly-single")
          result = result.replace(/'(.*?)'/g, "\u2018$1\u2019");
      }
      if (opts.changeBrackets) {
        if (opts.bracketStyle === "paren")
          result = result.replace(/[[\]【】]/g, (m) =>
            m === "[" || m === "【" ? "(" : ")",
          );
        else if (opts.bracketStyle === "square")
          result = result.replace(/[()【】]/g, (m) =>
            m === "(" || m === "【" ? "[" : "]",
          );
        else if (opts.bracketStyle === "lenticular")
          result = result.replace(/[()[\]]/g, (m) =>
            m === "(" || m === "[" ? "【" : "】",
          );
      }
      return result;

    case "markdown-to-html":
      result = result
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*)\*/gim, "<em>$1</em>")
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
      if (opts.mdBr) result = result.replace(/\n/g, "<br>\n");
      if (opts.mdPre) result = `<pre><code>${result}</code></pre>`;
      return result;

    case "html-to-text":
      result = result.replace(/<[^>]*>/g, "");
      if (!opts.htmlKeepLineBreaks) result = result.replace(/[\r\n]+/g, " ");
      if (opts.htmlReduceSpaces) result = result.replace(/\s+/g, " ").trim();
      return result;

    case "slug-generator": {
      let slug = text.toLowerCase();
      if (opts.slugRemoveStopWords) {
        const stopWords = [
          "a",
          "an",
          "the",
          "of",
          "in",
          "on",
          "at",
          "to",
          "for",
        ];
        slug = slug
          .split(" ")
          .filter((w) => !stopWords.includes(w))
          .join(" ");
      }
      return slug
        .replace(/[^a-z0-9가-힣\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    }

    case "md-format-cleaner":
      if (opts.mdCleanNormalizeHeaders)
        result = result.replace(/^(#+)([^ \n])/gm, "$1 $2");
      if (opts.mdCleanNormalizeLists) {
        result = result.replace(/^(\s*[-*])([^ \n])/gm, "$1 $2");
        result = result.replace(/^(\s*\d+\.)([^ \n])/gm, "$1 $2");
      }
      if (opts.mdCleanCollapseBlankLines)
        result = result.replace(/\n\s*\n/g, "\n\n");
      if (opts.mdCleanTabToSpace) result = result.replace(/\t/g, "  ");
      return result.replace(/([^\n])\n(#+)/g, "$1\n\n$2");

    case "csv-cleaner": {
      const sep = opts.csvFormat === "csv" ? "," : "\t";
      let rows = result.split("\n").map((row) => row.split(sep));
      if (opts.csvTrimCells)
        rows = rows.map((row) => row.map((cell) => cell.trim()));
      if (opts.csvRemoveEmptyRows)
        rows = rows.filter((row) => row.some((cell) => cell.trim().length > 0));
      if (opts.csvRemoveDuplicates) {
        const seen = new Set<string>();
        rows = rows.filter((row) => {
          const key = row.join(sep);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }
      return rows.map((row) => row.join(sep)).join("\n");
    }

    case "json-formatter":
      try {
        const parsed = JSON.parse(text);
        return opts.jsonMinify
          ? JSON.stringify(parsed)
          : JSON.stringify(parsed, null, opts.jsonIndent);
      } catch (e) {
        return `JSON 파싱 오류: ${e instanceof Error ? e.message : String(e)}`;
      }

    default:
      switch (opts.mode) {
        case "upper":
          return result.toUpperCase();
        case "lower":
          return result.toLowerCase();
        case "title":
          return result.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
          );
        case "sentence":
          return result
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        default:
          return result;
      }
  }
}
