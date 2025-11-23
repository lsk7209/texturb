# Cloudflare Pages 배포 가이드

이 프로젝트는 Cloudflare Pages, D1 데이터베이스, Workers Cron Triggers에 최적화되어 있습니다.

## 🚀 빠른 시작

### 1. 사전 요구사항

- Node.js 18+ 설치
- Cloudflare 계정 생성
- Wrangler CLI 설치: `npm install -g wrangler`
- Cloudflare 인증: `wrangler login`

### 2. Cloudflare 설정

#### D1 데이터베이스 생성

```bash
# D1 데이터베이스 생성
npm run cf:db:create

# 생성된 데이터베이스 ID를 wrangler.toml에 입력
# [[d1_databases]]
# database_id = "your-database-id-here"
```

#### 데이터베이스 마이그레이션

```bash
# 프로덕션 데이터베이스에 스키마 적용
npm run cf:db:migrate

# 로컬 개발용 데이터베이스 초기화
npm run cf:db:local
```

### 3. 환경 변수 설정

1. Cloudflare 대시보드 접속
2. Pages > Your Project > Settings > Environment variables
3. `.env.example` 파일의 변수들을 설정

필수 환경 변수:
- `CRON_SECRET`: 크론 작업 보안 키 (랜덤 문자열)

### 4. 배포

#### 로컬 개발

```bash
# Next.js 개발 서버
npm run dev

# Cloudflare Pages 로컬 개발 (D1 포함)
npm run cf:dev
```

#### 프로덕션 배포

```bash
# 빌드
npm run build

# Cloudflare Pages에 배포
npm run cf:deploy
```

또는 GitHub 연동을 통해 자동 배포:
1. Cloudflare 대시보드 > Pages > Create a project
2. GitHub 저장소 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `.next`

## 📊 데이터베이스 사용

### 서버 사이드에서 D1 사용

```typescript
import { getD1Database, safeQuery } from "@/lib/db/d1-client"

// API Route 예시
export async function GET(request: Request) {
  const db = getD1Database()
  
  if (!db) {
    return Response.json({ error: "Database not available" }, { status: 500 })
  }

  const result = await safeQuery("SELECT * FROM tool_usage LIMIT 10")
  
  return Response.json(result.data)
}
```

### 도구 사용 통계 기록

```typescript
import { logToolUsage } from "@/lib/db/queries"

// 도구 사용 기록
await logToolUsage({
  toolId: "char-counter",
  toolSlug: "char-counter",
  sessionId: "session-123",
  userAgent: request.headers.get("user-agent") || undefined,
  referrer: request.headers.get("referer") || undefined,
})
```

## ⏰ 크론 작업 설정

### Cloudflare Workers Cron Triggers

`wrangler.toml`에서 크론 스케줄을 설정합니다:

```toml
[[triggers.crons]]
schedule = "0 0 * * *"  # 매일 자정
script = "cron-daily"

[[triggers.crons]]
schedule = "0 * * * *"  # 매시간
script = "cron-hourly"
```

### 크론 작업 엔드포인트

- `/api/cron/daily`: 매일 자정 실행
- `/api/cron/hourly`: 매시간 실행

### 크론 작업 수동 실행 (테스트)

```bash
# Daily cron 테스트
curl -X GET "https://your-site.pages.dev/api/cron/daily" \
  -H "X-Cron-Auth: your-secret-key"

# Hourly cron 테스트
curl -X GET "https://your-site.pages.dev/api/cron/hourly" \
  -H "X-Cron-Auth: your-secret-key"
```

## 🔧 주요 파일 구조

```
.
├── wrangler.toml              # Cloudflare Workers 설정
├── functions/                 # Cloudflare Pages Functions
│   ├── _middleware.ts        # Pages Functions 미들웨어
│   └── api/
│       └── cron/             # 크론 작업 엔드포인트
│           ├── daily.ts
│           └── hourly.ts
├── lib/
│   └── db/                    # D1 데이터베이스 유틸리티
│       ├── d1-client.ts      # D1 클라이언트
│       ├── queries.ts        # 쿼리 함수들
│       └── schema.sql        # 데이터베이스 스키마
└── .env.example              # 환경 변수 예시
```

## 📝 데이터베이스 스키마

주요 테이블:
- `tool_usage`: 도구 사용 통계
- `sessions`: 사용자 세션 정보
- `daily_stats`: 일일 통계 집계
- `feedback`: 사용자 피드백 (선택적)

스키마 파일: `lib/db/schema.sql`

## 🔐 보안

1. **크론 작업 보안**: `CRON_SECRET` 환경 변수로 크론 엔드포인트 보호
2. **데이터베이스 접근**: 서버 사이드에서만 D1 접근 가능
3. **환경 변수**: 민감한 정보는 Cloudflare 대시보드에서만 설정

## 🐛 문제 해결

### D1 데이터베이스 연결 실패

- `wrangler.toml`의 `database_id` 확인
- Cloudflare 대시보드에서 D1 데이터베이스가 생성되었는지 확인

### 크론 작업이 실행되지 않음

- `wrangler.toml`의 크론 스케줄 확인
- Cloudflare Workers 대시보드에서 트리거 확인
- `CRON_SECRET` 환경 변수 설정 확인

### 빌드 실패

- Node.js 버전 확인 (18+)
- `npm install` 재실행
- Cloudflare Pages 빌드 로그 확인

## 📚 참고 자료

- [Cloudflare Pages 문서](https://developers.cloudflare.com/pages/)
- [Cloudflare D1 문서](https://developers.cloudflare.com/d1/)
- [Cloudflare Workers Cron Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/)
- [Wrangler CLI 문서](https://developers.cloudflare.com/workers/wrangler/)

