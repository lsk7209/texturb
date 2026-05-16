/**
 * IndexNow 키 파일 서빙
 * /{INDEXNOW_KEY}.txt 경로로 자동 매핑
 */

import { NextResponse } from "next/server"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ indexnow: string }> }
) {
  const { indexnow } = await params
  const key = process.env.INDEXNOW_KEY || ""

  // {key}.txt 형태의 요청만 허용
  if (!key || indexnow !== `${key}.txt`) {
    return new NextResponse("Not Found", { status: 404 })
  }

  return new NextResponse(key, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
