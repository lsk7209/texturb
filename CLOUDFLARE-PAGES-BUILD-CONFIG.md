# Cloudflare Pages 빌드 설정 가이드

## 🔧 Cloudflare Pages 대시보드 설정

### 빌드 설정

Cloudflare Pages 프로젝트 설정에서 다음을 구성하세요:

#### 기본 설정
- **Framework preset**: `None` 또는 `Next.js (Static HTML Export)`
- **Build command**: `pnpm run build:cf`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `/` (프로젝트 루트)
- **Node.js version**: `22`

#### 환경 변수

**Production 환경:**
```
NODE_ENV=production
CF_PAGES=1
CRON_SECRET=your-secret-key-here
```

**Preview 환경:**
```
NODE_ENV=development
CF_PAGES=1
```

### 빌드 프로세스

1. **의존성 설치**: `pnpm install --frozen-lockfile`
2. **Next.js 빌드**: `next build`
3. **Cloudflare 변환**: `npx @cloudflare/next-on-pages`
4. **출력 디렉토리**: `.vercel/output/static`

### 문제 해결

#### 빌드 실패: "Cannot install with frozen-lockfile"
- `pnpm-lock.yaml`이 `package.json`과 동기화되지 않음
- 로컬에서 `pnpm install` 실행 후 커밋 및 푸시

#### 빌드 실패: "Build output directory not found"
- 빌드 명령어가 `build:cf`를 사용하는지 확인
- `.vercel/output/static` 디렉토리가 생성되는지 확인

#### 빌드 실패: "@cloudflare/next-on-pages not found"
- `package.json`에 `@cloudflare/next-on-pages`가 포함되어 있는지 확인
- `pnpm install`이 정상적으로 실행되었는지 확인

### 배포 확인

배포 후 다음을 확인하세요:

1. **사이트 접속**: `https://your-project.pages.dev`
2. **API 엔드포인트**: `/api/stats`, `/api/usage`
3. **Pages Functions**: `/api/cron/daily`, `/api/cron/hourly`
4. **빌드 로그**: Cloudflare 대시보드에서 확인

## 📝 참고 사항

- Cloudflare Pages는 GitHub 푸시 시 자동으로 빌드 및 배포합니다
- 빌드 로그는 실시간으로 확인할 수 있습니다
- 환경 변수는 대시보드에서만 설정 가능합니다
- D1 데이터베이스 바인딩은 `wrangler.toml`에서 설정합니다

