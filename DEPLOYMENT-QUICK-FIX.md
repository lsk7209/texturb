# Cloudflare Pages 배포 빠른 해결 가이드

## 🚨 즉시 확인 사항

### 1. 타입 에러 해결됨 ✅
- `CloudflareEnv` 타입 정의 추가 완료
- `getRequestContext()` 반환 타입 명확화

### 2. 빌드 명령어 확인
```bash
# 로컬에서 테스트
pnpm run build:cf
```

### 3. Cloudflare Pages 대시보드 설정

**빌드 설정:**
- Build command: `pnpm run build:cf`
- Build output directory: `.vercel/output/static`
- Node.js version: `22`

**환경 변수:**
- `NODE_ENV=production`
- `CF_PAGES=1`
- `CRON_SECRET=your-secret-key`

### 4. D1 데이터베이스 바인딩
- `wrangler.toml`에 `database_id` 입력 확인
- Cloudflare Pages 대시보드에서 D1 바인딩 추가 확인

## 🔧 일반적인 에러 해결

| 에러 | 해결 방법 |
|------|----------|
| `Cannot install with frozen-lockfile` | `pnpm install` 후 커밋 |
| `Build output directory not found` | 빌드 명령어 확인 |
| `Property 'DB' does not exist` | 타입 정의 확인 (해결됨) |
| `Expected 1-2 arguments, but got 3` | `logger.warn` 시그니처 확인 |

## 📋 배포 전 체크리스트

- [x] 타입 정의 추가 완료
- [ ] 로컬 빌드 테스트 성공
- [ ] Cloudflare Pages 대시보드 설정 확인
- [ ] 환경 변수 설정 완료
- [ ] D1 데이터베이스 바인딩 확인

## 📚 상세 가이드

더 자세한 내용은 `CLOUDFLARE-DEPLOYMENT-FIX.md`를 참고하세요.

