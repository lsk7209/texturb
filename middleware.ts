import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // 리다이렉트 제거 - 메인페이지를 직접 표시
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
