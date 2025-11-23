# Cloudflare Pages 배포 에러 종합 해결 가이드

## 🔍 문제 분석 (MCP 도구 활용)

다양한 MCP 도구(Context7, Exa, Docfork)를 활용하여 Cloudflare Pages 배포 문제를 종합적으로 분석했습니다.

### 주요 발견 사항

1. **@cloudflare/next-on-pages Deprecated**
   - 현재 프로젝트에서 사용 중이지만 deprecated 상태
   - OpenNext adapter로의 마이그레이션이 권장되지만, 현재는 계속 사용 가능

2. **타입 정의 부족**
   - `CloudflareEnv` 타입이 정의되지 않아 타입 에러 발생
   - `getRequestContext()` 반환 타입이 명확하지 않음

3. **빌드 설정 검증 필요**
   - `build:cf` 스크립트는 올바르게 설정됨
   - Cloudflare Pages 대시보드 설정 확인 필요

## ✅ 해결 방안

### 1. 타입 정의 확장

`types/cloudflare.d.ts`에 다음 타입을 추가했습니다:

```typescript
// @cloudflare/next-on-pages의 getRequestContext 반환 타입
export interface CloudflareEnv extends Env {
  DB?: D1Database
}

export interface CloudflareRequestContext {
  env: CloudflareEnv
  cf?: {
    country?: string
    colo?: string
    // ... 기타 Cloudflare 요청 정보
  }
  ctx?: ExecutionContext
}
```

### 2. 빌드 설정 검증

#### package.json 확인
- ✅ `build:cf`: `next build && npx @cloudflare/next-on-pages`
- ✅ `@cloudflare/next-on-pages`: `^1.9.0` (최신 버전 자동 설치)

#### Cloudflare Pages 대시보드 설정
다음 설정을 확인하세요:

- **Framework preset**: `None` 또는 `Next.js (Static HTML Export)`
- **Build command**: `pnpm run build:cf`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `/` (프로젝트 루트)
- **Node.js version**: `22`

### 3. 환경 변수 설정

Cloudflare Pages 대시보드 > Settings > Environment variables:

**Production:**
```
NODE_ENV=production
CF_PAGES=1
CRON_SECRET=your-secret-key-here
```

**Preview:**
```
NODE_ENV=development
CF_PAGES=1
```

### 4. D1 데이터베이스 바인딩

`wrangler.toml`에 D1 데이터베이스가 올바르게 설정되어 있는지 확인:

```toml
[[d1_databases]]
binding = "DB"
database_name = "text-studio-db"
database_id = "your-database-id"  # Cloudflare 대시보드에서 생성 후 입력
```

Cloudflare Pages 대시보드에서도 D1 바인딩이 추가되어 있어야 합니다:
1. Pages > Your Project > Settings > Functions
2. D1 Database bindings 섹션에서 바인딩 추가

## 🛠️ 일반적인 배포 에러 해결

### 에러 1: "Cannot install with frozen-lockfile"

**원인**: `pnpm-lock.yaml`이 `package.json`과 동기화되지 않음

**해결**:
```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "fix: update pnpm-lock.yaml"
git push
```

### 에러 2: "Build output directory not found"

**원인**: 빌드 명령어가 올바르지 않거나 출력 디렉토리가 생성되지 않음

**해결**:
1. Cloudflare Pages 대시보드에서 빌드 명령어 확인: `pnpm run build:cf`
2. 빌드 출력 디렉토리 확인: `.vercel/output/static`
3. 로컬에서 빌드 테스트:
   ```bash
   pnpm run build:cf
   ls -la .vercel/output/static  # 디렉토리 확인
   ```

### 에러 3: "Property 'DB' does not exist on type 'CloudflareEnv'"

**원인**: 타입 정의가 부족함

**해결**: `types/cloudflare.d.ts`에 `CloudflareEnv` 타입이 추가되었는지 확인

### 에러 4: "@cloudflare/next-on-pages not found"

**원인**: 패키지가 설치되지 않았거나 버전 불일치

**해결**:
```bash
pnpm install
# 또는 명시적으로 설치
pnpm add @cloudflare/next-on-pages@latest
```

### 에러 5: "Type error: Expected 1-2 arguments, but got 3"

**원인**: `logger.warn` 함수 시그니처 불일치

**해결**: `logger.warn`은 2개 인자만 받습니다:
```typescript
// ❌ 잘못된 사용
logger.warn("message", error, { context })

// ✅ 올바른 사용
logger.warn("message", { error, ...context })
```

## 📋 배포 체크리스트

배포 전 다음을 확인하세요:

- [ ] `pnpm-lock.yaml`이 최신 상태
- [ ] `package.json`에 `@cloudflare/next-on-pages` 포함
- [ ] `next.config.mjs` 설정 확인
- [ ] 타입 에러 없음 (`pnpm run build` 성공)
- [ ] Cloudflare Pages 대시보드 빌드 설정 확인
- [ ] 환경 변수 설정 완료
- [ ] D1 데이터베이스 바인딩 확인
- [ ] 로컬 빌드 테스트 성공 (`pnpm run build:cf`)

## 🚀 배포 프로세스

1. **코드 푸시**: GitHub에 푸시하면 자동으로 빌드 시작
2. **빌드 확인**: Cloudflare 대시보드에서 빌드 로그 확인
3. **배포 확인**: 배포 완료 후 사이트 접속 테스트

## 🔄 장기적 마이그레이션 계획

`@cloudflare/next-on-pages`가 deprecated되었으므로, 장기적으로는 OpenNext adapter로의 마이그레이션을 고려해야 합니다:

- **현재**: `@cloudflare/next-on-pages` 사용 (계속 작동)
- **장기**: [OpenNext Cloudflare](https://opennext.js.org/cloudflare)로 마이그레이션 검토

## 📚 참고 자료

- [Cloudflare Pages 문서](https://developers.cloudflare.com/pages/)
- [@cloudflare/next-on-pages GitHub](https://github.com/cloudflare/next-on-pages)
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare)
- [Next.js 16 문서](https://nextjs.org/docs)

## 💡 추가 팁

1. **빌드 로그 확인**: Cloudflare 대시보드에서 빌드 로그를 자세히 확인하여 오류의 정확한 원인을 파악
2. **로컬 테스트**: `pnpm run cf:dev`를 사용하여 로컬에서 Cloudflare Pages 환경을 시뮬레이션
3. **타입 체크**: `pnpm run build`로 타입 에러를 미리 확인
4. **점진적 배포**: Preview 환경에서 먼저 테스트한 후 Production에 배포

