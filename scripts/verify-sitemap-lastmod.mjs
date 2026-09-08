import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile("app/sitemap.ts", "utf8");
const lastModifiedEntries = source.match(/lastModified:/g) ?? [];

assert.doesNotMatch(source, /lastModified:\s*new Date\(\)/, "Sitemap must not claim the generation time as a modification time");
assert.equal(lastModifiedEntries.length, 2, "Only source-backed static-post and database-post modification dates should remain");
assert.match(source, /lastModified:\s*new Date\(post\.publishedAt\)/, "Static posts must retain their published date");
assert.match(source, /lastModified:\s*new Date\(post\.published_at \?\? post\.created_at\)/, "Database posts must retain their stored date");

console.log("TEXTURB_SITEMAP_LASTMOD_OK");
