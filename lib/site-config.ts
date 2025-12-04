/**
 * 사이트 설정 및 URL 관리
 * 환경 변수 기반 사이트 설정을 중앙화
 */

/**
 * 사이트 기본 URL 가져오기
 * 클라이언트와 서버 모두에서 안전하게 사용 가능
 */
export function getSiteUrl(): string {
  // 서버 사이드
  if (typeof window === "undefined") {
    return process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"
  }
  
  // 클라이언트 사이드
  return window.location.origin
}

/**
 * 절대 URL 생성
 */
export function getAbsoluteUrl(path: string): string {
  const baseUrl = getSiteUrl()
  // path가 이미 절대 URL인 경우
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }
  // path가 /로 시작하지 않으면 추가
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

/**
 * 도구 페이지 URL 생성
 */
export function getToolUrl(slug: string): string {
  return getAbsoluteUrl(`/tools/${slug}`)
}

/**
 * 가이드 페이지 URL 생성
 */
export function getGuideUrl(slug: string): string {
  return getAbsoluteUrl(`/guides/${slug}`)
}

/**
 * 워크플로 페이지 URL 생성
 */
export function getWorkflowUrl(slug: string): string {
  return getAbsoluteUrl(`/workflow/${slug}`)
}

