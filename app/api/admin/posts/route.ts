import { NextResponse } from "next/server";
import { getAllPostsAdmin } from "@/lib/db/post-queries";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await getAllPostsAdmin();
  return NextResponse.json(result);
}
