# Vercel 호스팅 마이그레이션 가이드

## 📋 변경 사항 요약

Cloudflare Pages에서 Vercel로 마이그레이션하기 위해 다음과 같은 변경을 수행했습니다.

### 1. 의존성 변경

**제거된 패키지:**
- `@cloudflare/next-on-pages` - Cloudflare 전용 패키지

**추가된 패키지:**
- `@vercel/postgres` - Vercel Postgres 클라이언트

### 2. 데이터베이스 변경

**이전 (Cloudflare D1):**
- SQLite 기반 D1 데이터베이스
- `getRequestContext()`를 통한 접근
- D1 특정 쿼리 문법

**현재 (Vercel Postgres):**
- PostgreSQL 데이터베이스
- `@vercel/postgres` 패키지 사용
- PostgreSQL 표준 쿼리 문법

### 3. API Routes 변경

**변경된 파일:**
- `app/api/usage/route.ts` - Vercel Postgres 사용
- `app/api/stats/route.ts` - Vercel Postgres 사용, Cloudflare 캐시 제거
- `app/api/cron/daily/route.ts` - Vercel Cron Jobs로 변경
- `app/api/cron/hourly/route.ts` - Vercel Cron Jobs로 변경

### 4. 새로운 파일

- `lib/db/postgres-client.ts` - Vercel Postgres 클라이언트
- `lib/db/queries-vercel.ts` - PostgreSQL 쿼리 함수들
- `vercel.json` - Vercel Cron Jobs 설정
- `app/api/cron/daily/route.ts` - 일일 크론 작업
- `app/api/cron/hourly/route.ts` - 시간별 크론 작업

### 5. 설정 파일 변경

**next.config.mjs:**
- Cloudflare 특정 설정 제거
- Vercel 환경 변수 추가

**package.json:**
- Cloudflare 빌드 스크립트 제거
- Vercel 배포 스크립트 추가

## 🚀 배포 가이드

### 1. Vercel Postgres 데이터베이스 설정

1. Vercel 대시보드에서 프로젝트 선택
2. Storage 탭으로 이동
3. "Create Database" → "Postgres" 선택
4. 데이터베이스 생성 후 연결 정보 확인

### 2. 환경 변수 설정

Vercel 대시보드 > Settings > Environment Variables에서 다음 변수 추가:

**Production:**
```
POSTGRES_URL=postgresql://...
DATABASE_URL=postgresql://... (선택사항)
CRON_SECRET=your-secret-key-here
NODE_ENV=production
```

**Preview:**
```
POSTGRES_URL=postgresql://...
DATABASE_URL=postgresql://... (선택사항)
CRON_SECRET=your-secret-key-here
NODE_ENV=development
```

### 3. 데이터베이스 스키마 생성

D1에서 사용하던 스키마를 PostgreSQL로 변환하여 실행:

```sql
-- sessions 테이블
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_agent TEXT,
  referrer TEXT,
  last_accessed TIMESTAMP DEFAULT NOW(),
  tool_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- tool_usage 테이블
CREATE TABLE IF NOT EXISTS tool_usage (
  id SERIAL PRIMARY KEY,
  tool_id TEXT NOT NULL,
  tool_slug TEXT NOT NULL,
  user_session_id TEXT,
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- daily_stats 테이블
CREATE TABLE IF NOT EXISTS daily_stats (
  date DATE PRIMARY KEY,
  total_usage INTEGER DEFAULT 0,
  unique_sessions INTEGER DEFAULT 0,
  top_tools TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_tool_usage_tool_id ON tool_usage(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_usage_session_id ON tool_usage(user_session_id);
CREATE INDEX IF NOT EXISTS idx_tool_usage_created_at ON tool_usage(created_at);
CREATE INDEX IF NOT EXISTS idx_sessions_last_accessed ON sessions(last_accessed);
```

### 4. Vercel Cron Jobs 설정

`vercel.json` 파일이 자동으로 Cron Jobs를 설정합니다:

```json
{
  "crons": [
    {
      "path": "/api/cron/daily",
      "schedule": "0 0 * * *"
    },
    {
      "path": "/api/cron/hourly",
      "schedule": "0 * * * *"
    }
  ]
}
```

**중요:** Vercel Pro 플랜 이상이 필요합니다. Hobby 플랜에서는 Cron Jobs를 사용할 수 없습니다.

### 5. 배포

```bash
# 의존성 설치
pnpm install

# 로컬 빌드 테스트
pnpm run build

# Vercel에 배포
pnpm run vercel:deploy
# 또는
vercel --prod
```

## 🔄 SQL 문법 차이점

### D1 (SQLite) → PostgreSQL 변환

**날짜 함수:**
- D1: `datetime('now', '-30 days')`
- PostgreSQL: `NOW() - INTERVAL '30 days'`

**ON CONFLICT:**
- D1: `ON CONFLICT(id) DO UPDATE SET ...`
- PostgreSQL: `ON CONFLICT(id) DO UPDATE SET ...` (동일)

**JSON 집계:**
- D1: `json_group_array(json_object(...))`
- PostgreSQL: `json_agg(json_build_object(...))::text`

**날짜 포맷:**
- D1: `strftime('%Y-%m-%d %H:00:00', created_at)`
- PostgreSQL: `DATE_TRUNC('hour', created_at)`

## ⚠️ 주의사항

1. **Edge Runtime 제한:**
   - Vercel Edge Runtime에서 `@vercel/postgres`는 제한적으로 지원됩니다
   - 필요시 Node.js Runtime으로 변경 고려

2. **Cron Jobs:**
   - Vercel Pro 플랜 이상 필요
   - Hobby 플랜에서는 외부 Cron 서비스 사용 고려

3. **데이터 마이그레이션:**
   - 기존 D1 데이터를 PostgreSQL로 마이그레이션 필요
   - 데이터 형식 변환 확인

4. **캐싱:**
   - Cloudflare Cache API 대신 Next.js 캐싱 사용
   - `Cache-Control` 헤더로 캐싱 제어

## 📚 참고 자료

- [Vercel Postgres 문서](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Cron Jobs 문서](https://vercel.com/docs/cron-jobs)
- [Next.js Edge Runtime](https://nextjs.org/docs/app/api-reference/edge)
- [PostgreSQL 문서](https://www.postgresql.org/docs/)

