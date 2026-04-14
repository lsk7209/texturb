import { createClient } from "@libsql/client";
import { readFileSync } from "fs";

async function main() {
  const db = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  const schema = readFileSync("lib/db/schema.sql", "utf-8");
  const stmts = schema
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  console.log(`스키마 실행 시작: ${stmts.length}개`);

  for (const sql of stmts) {
    try {
      await db.execute(sql);
      console.log("  ✓", sql.slice(0, 60).replace(/\n/g, " "));
    } catch (e) {
      console.error("  ✗", e instanceof Error ? e.message : e);
    }
  }

  console.log("완료");
}

main().catch(console.error);
