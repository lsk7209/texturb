# Vercel 배포 체크리스트

## ✅ 완료된 최적화 사항

### 1. 코드 일관성 개선
- ✅ 크론 작업에서 중복된 postgres 클라이언트 생성 로직 제거
- ✅ 공용 `lib/db/postgres-pool.ts` 함수 사용으로 통일
- ✅ 환경 변수 체크 개선 (POSTGRES_URL 또는 DATABASE_URL 지원)

### 2. 에러 처리 개선
- ✅ Postgres 클라이언트 null 체크 추가
- ✅ 환경 변수 누락 시 명확한 에러 메시지

### 3. 빌드 최적화
- ✅ TypeScript 빌드 오류 모두 수정
- ✅ 로컬 빌드 성공 확인

## 📋 Vercel 배포 전 확인 사항

### 1. 환경 변수 설정 (필수)

Vercel 대시보드 > Settings > Environment Variables에서 다음 변수 확인:

**Production 환경:**
```
POSTGRES_URL=postgresql://... (Vercel Postgres에서 자동 생성)
CRON_SECRET=your-secret-key-here (보안을 위해 강력한 키 사용)
NODE_ENV=production
```

**Preview 환경:**
```
POSTGRES_URL=postgresql://... (Vercel Postgres에서 자동 생성)
CRON_SECRET=your-secret-key-here
NODE_ENV=development
```

### 2. Vercel Postgres 데이터베이스 설정

1. Vercel 대시보드 > 프로젝트 > Storage 탭
2. Postgres 데이터베이스가 생성되어 있는지 확인
3. `POSTGRES_URL`이 자동으로 환경 변수에 추가되었는지 확인

### 3. 데이터베이스 스키마

Vercel Postgres 대시보드에서 다음 SQL 실행:

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

### 4. Cron Jobs 설정 확인

`vercel.json` 파일이 올바르게 설정되어 있는지 확인:

```json
{
  "crons": [
    {
      "path": "/api/cron/daily",
      "schedule": "0 0 * * *"
    }
  ]
}
```

**참고:** Hobby 플랜은 하루에 한 번만 크론 작업을 실행할 수 있습니다.

### 5. 빌드 설정 확인

Vercel 대시보드 > Settings > General에서:

- **Framework Preset:** Next.js (자동 감지)
- **Build Command:** `pnpm run build` (또는 `npm run build`)
- **Output Directory:** `.next` (기본값)
- **Install Command:** `pnpm install` (또는 `npm install`)
- **Root Directory:** `/` (프로젝트 루트)

## 🚀 배포 후 확인 사항

### 1. 배포 상태 확인

1. Vercel 대시보드 > 프로젝트 > Deployments
2. 최신 배포 상태 확인
3. 빌드 로그 확인 (문제가 있는 경우)

### 2. API 엔드포인트 테스트

배포된 URL에서 다음 엔드포인트 테스트:

- `https://your-project.vercel.app/api/usage` (POST)
- `https://your-project.vercel.app/api/stats` (GET)
- `https://your-project.vercel.app/api/cron/daily` (GET, 인증 필요)

### 3. 데이터베이스 연결 확인

배포 후 첫 API 호출 시 데이터베이스 연결이 정상적으로 작동하는지 확인합니다.

### 4. Cron Job 실행 확인

배포 후 다음 날 자정에 일일 크론 작업이 자동으로 실행되는지 확인합니다.

## 🔧 문제 해결

### 빌드 실패

1. 로컬에서 `pnpm run build` 실행하여 오류 확인
2. TypeScript 오류가 있는지 확인
3. 환경 변수가 올바르게 설정되었는지 확인

### 런타임 오류

1. Vercel 대시보드 > 프로젝트 > Logs에서 에러 로그 확인
2. `POSTGRES_URL` 환경 변수가 설정되었는지 확인
3. 데이터베이스 스키마가 올바르게 생성되었는지 확인

### Cron Job 실행 안 됨

1. `vercel.json`의 cron 설정 확인
2. Hobby 플랜 제한 확인 (하루에 한 번만 실행 가능)
3. Vercel 대시보드 > 프로젝트 > Cron Jobs에서 실행 상태 확인

## 📚 참고 자료

- [Vercel Postgres 문서](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Cron Jobs 문서](https://vercel.com/docs/cron-jobs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)

