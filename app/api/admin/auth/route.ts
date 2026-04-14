import { NextResponse } from "next/server";
import { getExpectedAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const { password } = await request.json();
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-session", getExpectedAdminSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24시간
    path: "/",
  });
  return response;
}
