# Cloudflare Pages 배포 체크리스트

## ✅ 배포 전 확인 사항

### 1. 빌드 설정 확인

Cloudflare Pages 대시보드에서 다음 설정을 확인하세요:

- [ ] **Framework preset**: `None` 또는 `Next.js (Static HTML Export)`
- [ ] **Build command**: `pnpm run build:cf`
- [ ] **Build output directory**: `.vercel/output/static`
- [ ] **Root directory**: `/` (프로젝트 루트)
- [ ] **Node.js version**: `22`

### 2. 환경 변수 설정

Cloudflare Pages 대시보드 > Settings > Environment variables:

**Production 환경:**
- [ ] `NODE_ENV` = `production`
- [ ] `CF_PAGES` = `1`
- [ ] `CRON_SECRET` = (랜덤 문자열 생성)

**Preview 환경:**
- [ ] `NODE_ENV` = `development`
- [ ] `CF_PAGES` = `1`

### 3. D1 데이터베이스 설정

- [ ] D1 데이터베이스 생성 완료
- [ ] `wrangler.toml`에 `database_id` 입력
- [ ] 데이터베이스 마이그레이션 완료 (`npm run cf:db:migrate`)

### 4. 코드 확인

- [ ] `pnpm-lock.yaml`이 최신 상태
- [ ] `package.json`에 `@cloudflare/next-on-pages` 포함
- [ ] `next.config.mjs` 설정 확인
- [ ] 타입 에러 없음

## 🚀 배포 프로세스

1. **코드 푸시**: GitHub에 푸시하면 자동으로 빌드 시작
2. **빌드 확인**: Cloudflare 대시보드에서 빌드 로그 확인
3. **배포 확인**: 배포 완료 후 사이트 접속 테스트

## 🔍 빌드 실패 시 확인 사항

### "Cannot install with frozen-lockfile"
```bash
# 로컬에서 해결
pnpm install
git add pnpm-lock.yaml
git commit -m "fix: update pnpm-lock.yaml"
git push
```

### "Build output directory not found"
- 빌드 명령어가 `pnpm run build:cf`인지 확인
- `.vercel/output/static` 디렉토리가 생성되는지 확인

### "@cloudflare/next-on-pages not found"
- `package.json`에 `@cloudflare/next-on-pages`가 포함되어 있는지 확인
- `pnpm install`이 정상적으로 실행되었는지 확인

### 타입 에러
- `next.config.mjs`에서 `ignoreBuildErrors: false`로 설정되어 있음
- 타입 에러를 수정 후 재배포

## 📊 배포 후 확인

- [ ] 사이트 접속: `https://your-project.pages.dev`
- [ ] API 엔드포인트 테스트: `/api/stats?toolId=char-counter`
- [ ] Pages Functions 확인: `/api/cron/daily`, `/api/cron/hourly`
- [ ] D1 데이터베이스 연결 확인

## 📝 참고

- Cloudflare Pages는 GitHub 푸시 시 자동으로 빌드 및 배포합니다
- 빌드 로그는 실시간으로 확인할 수 있습니다
- 환경 변수는 대시보드에서만 설정 가능합니다
- D1 데이터베이스 바인딩은 `wrangler.toml`에서 설정합니다

