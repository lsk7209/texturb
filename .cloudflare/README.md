# Cloudflare Pages 빌드 설정

이 디렉토리는 Cloudflare Pages 빌드 설정을 포함합니다.

## 빌드 설정

Cloudflare Pages 대시보드에서 다음 설정을 사용하세요:

- **Build command**: `pnpm run build:cf`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `/`
- **Node.js version**: `22`

## 환경 변수

필수 환경 변수:
- `NODE_ENV`: `production`
- `CF_PAGES`: `1`
- `CRON_SECRET`: 크론 작업 보안 키

