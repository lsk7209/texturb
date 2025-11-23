# Cloudflare Pages 배포 가이드

## 📋 배포 설정

### Cloudflare Pages 빌드 설정

Cloudflare Pages 대시보드에서 다음 설정을 사용하세요:

#### 빌드 설정
- **Framework preset**: `None` 또는 `Next.js (Static HTML Export)`
- **Build command**: `pnpm run build:cf`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `/` (프로젝트 루트)
- **Node.js version**: `22`

#### 환경 변수
Cloudflare Pages 대시보드 > Settings > Environment variables에서 설정:

**Production 환경:**
- `NODE_ENV`: `production`
- `CF_PAGES`: `1`
- `CRON_SECRET`: (랜덤 문자열 생성)

**Preview 환경:**
- `NODE_ENV`: `development`
- `CF_PAGES`: `1`

### 빌드 프로세스

1. `pnpm install --frozen-lockfile` - 의존성 설치
2. `pnpm run build` - Next.js 빌드
3. `@cloudflare/next-on-pages` - Cloudflare Pages용 변환
4. `.vercel/output/static` 디렉토리에서 배포

### 문제 해결

#### 빌드 실패: pnpm-lock.yaml 오류
```bash
# 로컬에서 lockfile 업데이트
pnpm install
git add pnpm-lock.yaml
git commit -m "fix: update pnpm-lock.yaml"
git push
```

#### 빌드 실패: Next.js 버전 호환성
- Next.js 16은 `@cloudflare/next-on-pages`와 호환성 문제가 있을 수 있습니다
- 필요시 Next.js 15로 다운그레이드 고려

#### 빌드 실패: 타입 에러
- `next.config.mjs`에서 `ignoreBuildErrors: false`로 설정되어 있음
- 타입 에러가 있다면 수정 후 재배포

## 🚀 배포 확인

배포 후 다음을 확인하세요:

1. **사이트 접속**: `https://your-project.pages.dev`
2. **API 테스트**: `/api/stats?toolId=char-counter`
3. **Functions 확인**: Pages Functions가 정상 작동하는지 확인

## 📝 참고

- Cloudflare Pages는 자동으로 GitHub 푸시 시 빌드 및 배포합니다
- 빌드 로그는 Cloudflare 대시보드에서 확인할 수 있습니다
- 환경 변수는 대시보드에서만 설정 가능합니다

