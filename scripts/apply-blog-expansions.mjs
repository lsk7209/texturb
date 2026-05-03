#!/usr/bin/env node
// 짧은 블로그 8개의 본문을 docs/blog-expansions.md 기반으로 확장
// 사용: node scripts/apply-blog-expansions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const expansionsPath = resolve(root, "docs/blog-expansions.md");
const registryPath = resolve(root, "lib/blog-registry.ts");

// 1. expansions 파싱
const md = readFileSync(expansionsPath, "utf8");
const blocks = md.split(/^## SLUG: /m).slice(1);
const expansions = blocks.map((block) => {
  const lines = block.split("\n");
  const slug = lines[0].trim();
  const insertBeforeLine = lines.find((l) => l.startsWith("INSERT_BEFORE:"));
  const insertBefore = insertBeforeLine
    ? insertBeforeLine.replace("INSERT_BEFORE:", "").trim()
    : "## 결론";
  // INSERT_BEFORE 줄 다음 빈 줄부터 다음 --- 또는 끝까지가 본문
  const startIdx = lines.findIndex((l) => l.startsWith("INSERT_BEFORE:")) + 1;
  let endIdx = lines.findIndex((l, i) => i > startIdx && l.trim() === "---");
  if (endIdx === -1) endIdx = lines.length;
  const content = lines.slice(startIdx, endIdx).join("\n").trim();
  return { slug, insertBefore, content };
});

console.log(`📄 ${expansions.length}개 확장 콘텐츠 파싱 완료`);

// 2. 템플릿 리터럴 안전 이스케이프
// content 안의 ` → \`, ${ → \${
function escapeForTemplate(text) {
  return text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

// 3. registry.ts 로드
let registry = readFileSync(registryPath, "utf8");
const before = registry.length;

let appliedCount = 0;
const report = [];

for (const exp of expansions) {
  // slug로 해당 포스트 객체 찾기 → content: \` ... \` 추출
  const slugPattern = new RegExp(`slug:\\s*["']${exp.slug}["']`, "g");
  const slugMatch = slugPattern.exec(registry);
  if (!slugMatch) {
    report.push(`❌ ${exp.slug}: slug not found`);
    continue;
  }
  // 해당 객체의 content: ` 시작 위치 찾기
  const contentStartRel = registry.slice(slugMatch.index).search(/content:\s*`/);
  if (contentStartRel === -1) {
    report.push(`❌ ${exp.slug}: content field not found`);
    continue;
  }
  const contentStart = slugMatch.index + contentStartRel;
  // 시작 백틱 위치
  const backtickStart = registry.indexOf("`", contentStart);
  // 닫는 백틱(이스케이프되지 않은) 위치 찾기
  let i = backtickStart + 1;
  while (i < registry.length) {
    if (registry[i] === "\\") {
      i += 2;
      continue;
    }
    if (registry[i] === "`") break;
    i++;
  }
  const backtickEnd = i;
  if (backtickEnd >= registry.length) {
    report.push(`❌ ${exp.slug}: closing backtick not found`);
    continue;
  }
  const contentBody = registry.slice(backtickStart + 1, backtickEnd);

  // INSERT_BEFORE 마커 위치
  const markerIdx = contentBody.lastIndexOf(exp.insertBefore);
  if (markerIdx === -1) {
    report.push(`❌ ${exp.slug}: marker "${exp.insertBefore}" not found in content`);
    continue;
  }

  const escaped = escapeForTemplate(exp.content);
  const newBody =
    contentBody.slice(0, markerIdx) +
    escaped +
    "\n\n" +
    contentBody.slice(markerIdx);

  registry =
    registry.slice(0, backtickStart + 1) +
    newBody +
    registry.slice(backtickEnd);

  appliedCount++;
  report.push(`✅ ${exp.slug}: +${exp.content.length}자`);
}

writeFileSync(registryPath, registry, "utf8");
console.log("\n=== Report ===");
report.forEach((r) => console.log(r));
console.log(`\n총 ${appliedCount}/${expansions.length}개 적용 완료`);
console.log(`registry: ${before} → ${registry.length} bytes (+${registry.length - before})`);
