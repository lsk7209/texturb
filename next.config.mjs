/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // 타입 에러를 빌드 시점에 확인
  },
  images: {
    unoptimized: true, // Cloudflare Pages는 이미지 최적화를 자체적으로 처리
    formats: ['image/webp', 'image/avif'], // 최신 포맷 지원
  },
  // Cloudflare Pages 최적화
  output: process.env.CF_PAGES ? 'export' : 'standalone',
  trailingSlash: true,
  compress: true, // Gzip 압축 활성화
  poweredByHeader: false, // 보안: X-Powered-By 헤더 제거
  reactStrictMode: true, // React Strict Mode 활성화
  swcMinify: true, // SWC 최소화 사용
  experimental: {
    turbo: {
      resolveAlias: {},
    },
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'], // 번들 크기 최적화
  },
  // 빌드 ID 생성
  generateBuildId: async () => {
    if (process.env.CF_PAGES_BUILD_ID) {
      return process.env.CF_PAGES_BUILD_ID
    }
    return `build-${Date.now()}-${Math.random().toString(36).substring(7)}`
  },
  // 캐싱 설정
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // 보안 헤더
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // 정적 자산 최적화
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // 이미지 최적화
        source: '/(.*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // 환경 변수
  env: {
    CF_PAGES: process.env.CF_PAGES || '0',
    CF_PAGES_BRANCH: process.env.CF_PAGES_BRANCH || '',
  },
}

export default nextConfig
