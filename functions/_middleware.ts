/**
 * Cloudflare Pages Functions Middleware
 * Cloudflare Pages에서 Next.js 미들웨어를 대체하는 함수
 */
import type { OnRequestHandler } from "@cloudflare/next-on-pages"

export const onRequest: OnRequestHandler = async (context) => {
  const { request, next, env } = context
  const url = new URL(request.url)

  // 루트 경로를 /tools로 리다이렉트
  if (url.pathname === "/") {
    return Response.redirect(new URL("/tools", url), 301)
  }

  // 정적 자산은 캐싱 최적화
  if (
    url.pathname.startsWith("/_next/static") ||
    url.pathname.startsWith("/static") ||
    /\.(jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot|webp|avif)$/i.test(url.pathname)
  ) {
    const response = await next()
    
    // 정적 자산에 긴 캐시 헤더 추가 (Cloudflare CDN 최적화)
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
    response.headers.set("CDN-Cache-Control", "public, max-age=31536000, immutable")
    
    return response
  }

  // API 라우트는 짧은 캐시
  if (url.pathname.startsWith("/api/")) {
    const response = await next()
    
    // API 응답에 적절한 캐시 헤더 추가 (Cloudflare CDN 최적화)
    if (request.method === "GET") {
      // stale-while-revalidate 패턴 적용
      response.headers.set("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=59")
      response.headers.set("CDN-Cache-Control", "public, max-age=300")
    } else {
      response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate")
      response.headers.set("CDN-Cache-Control", "no-cache, no-store, must-revalidate")
    }
    
    return response
  }

  // HTML 페이지는 중간 캐시
  if (url.pathname.endsWith(".html") || (!url.pathname.includes(".") && request.method === "GET")) {
    const response = await next()
    
    // HTML 페이지 캐싱 (stale-while-revalidate)
    response.headers.set("Cache-Control", "public, max-age=300, s-maxage=600, stale-while-revalidate=60")
    response.headers.set("CDN-Cache-Control", "public, max-age=600")
    
    return response
  }

  // 다음 핸들러 실행
  return next()
}

