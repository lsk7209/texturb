import { createClient } from "@libsql/client";

async function main() {
  const db = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  const r = await db.execute("DELETE FROM posts");
  console.log("삭제 완료:", r.rowsAffected + "개");
}

main().catch(console.error);
