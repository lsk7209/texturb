# Cloudflare Pages 배포 문제 해결 가이드

## 🔍 일반적인 배포 오류 및 해결 방법

### 1. 빌드 오류

#### "Cannot install with frozen-lockfile"
**원인**: `pnpm-lock.yaml`이 `package.json`과 동기화되지 않음

**해결 방법**:
```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "fix: update pnpm-lock.yaml"
git push
```

#### "Build output directory not found"
**원인**: 빌드 명령어가 올바르지 않거나 출력 디렉토리가 생성되지 않음

**해결 방법**:
- Cloudflare Pages 대시보드에서 빌드 명령어 확인: `pnpm run build:cf`
- 빌드 출력 디렉토리 확인: `.vercel/output/static`
- 로컬에서 빌드 테스트: `pnpm run build:cf`

#### "@cloudflare/next-on-pages not found"
**원인**: 패키지가 설치되지 않았거나 버전 불일치

**해결 방법**:
```bash
pnpm install
# 또는 명시적으로 설치
pnpm add -D @cloudflare/next-on-pages@latest
```

### 2. 런타임 오류

#### "ReferenceError: FinalizationRegistry is not defined"
**원인**: `compatibility_date`가 너무 오래됨

**해결 방법**:
`wrangler.toml`에서 `compatibility_date`를 `2025-05-05` 이상으로 업데이트:
```toml
compatibility_date = "2025-05-05"
```

#### "Cannot perform I/O on behalf of a different request"
**원인**: 전역 DB 클라이언트를 여러 요청에서 재사용

**해결 방법**:
각 요청마다 새로운 DB 클라이언트 생성:
```typescript
// ❌ 잘못된 방법
const client = postgres(process.env.DATABASE_URL)

// ✅ 올바른 방법
export async function GET() {
  const client = postgres(process.env.DATABASE_URL)
  // 사용 후 자동으로 정리됨
}
```

#### "Your Worker exceeded the size limit"
**원인**: Worker 크기가 3MB(무료 플랜) 또는 10MB(유료 플랜) 초과

**해결 방법**:
1. 번들 분석: `npx esbuild --analyze`
2. 불필요한 의존성 제거
3. 동적 import 사용
4. Workers Paid 플랜으로 업그레이드

### 3. D1 데이터베이스 오류

#### "Database binding not found"
**원인**: `wrangler.toml`에 D1 바인딩이 설정되지 않음

**해결 방법**:
1. Cloudflare 대시보드에서 D1 데이터베이스 생성
2. `wrangler.toml`에 `database_id` 추가:
```toml
[[d1_databases]]
binding = "DB"
database_name = "text-studio-db"
database_id = "your-database-id-here"
```

#### "D1 query timeout"
**원인**: 쿼리가 너무 오래 실행됨

**해결 방법**:
- 인덱스 추가 확인
- 쿼리 최적화
- 타임아웃 설정 확인 (`lib/db/timeout.ts`)

### 4. 환경 변수 오류

#### "Environment variable not found"
**원인**: Cloudflare Pages 대시보드에 환경 변수가 설정되지 않음

**해결 방법**:
1. Cloudflare 대시보드 > Pages > Settings > Environment variables
2. 필요한 환경 변수 추가:
   - `NODE_ENV=production`
   - `CF_PAGES=1`
   - `CRON_SECRET=your-secret-key`

### 5. Pages Functions 오류

#### "Function not found" 또는 "404 on API routes"
**원인**: Pages Functions가 제대로 배포되지 않음

**해결 방법**:
1. `functions/` 디렉토리 구조 확인
2. `functions/_middleware.ts` 존재 확인
3. 빌드 로그에서 Functions 배포 확인

## 🔧 디버깅 팁

### 빌드 로그 확인
1. Cloudflare 대시보드 > Pages > Deployments
2. 실패한 배포 선택
3. "Build log" 탭 확인

### 로컬 테스트
```bash
# 로컬에서 빌드 테스트
pnpm run build:cf

# 로컬에서 프리뷰
pnpm run cf:dev
```

### 타입 체크
```bash
# 타입 에러 확인
pnpm run lint
# 또는
npx tsc --noEmit
```

## 📚 추가 리소스

- [Cloudflare Pages 문서](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare/)
- [Cloudflare Workers 트러블슈팅](https://developers.cloudflare.com/workers/configuration/troubleshooting/)

