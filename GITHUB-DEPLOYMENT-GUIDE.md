# GitHub 배포 가이드

## ✅ 배포 완료

모든 변경사항이 GitHub에 성공적으로 푸시되었습니다.

**커밋 정보:**
- 커밋 해시: `6fa7476`
- 브랜치: `main`
- 리포지토리: `https://github.com/lsk7209/texturb.git`

## 🚀 Vercel 자동 배포 설정

### 1. Vercel과 GitHub 연동 확인

1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. 프로젝트 선택 또는 새 프로젝트 생성
3. "Import Git Repository" 클릭
4. GitHub 리포지토리 `lsk7209/texturb` 선택
5. "Import" 클릭

### 2. 프로젝트 설정

Vercel이 자동으로 Next.js 프로젝트를 감지합니다. 다음 설정을 확인하세요:

**Framework Preset:** Next.js (자동 감지)

**Build Settings:**
- Build Command: `pnpm run build` (또는 `npm run build`)
- Output Directory: `.next` (기본값)
- Install Command: `pnpm install` (또는 `npm install`)

**Root Directory:** `/` (프로젝트 루트)

### 3. 환경 변수 설정

Vercel 대시보드 > 프로젝트 > Settings > Environment Variables에서 다음 변수 추가:

**Production 환경:**
```
POSTGRES_URL=postgresql://... (Vercel Postgres에서 자동 생성)
CRON_SECRET=your-secret-key-here
NODE_ENV=production
```

**Preview 환경:**
```
POSTGRES_URL=postgresql://... (Vercel Postgres에서 자동 생성)
CRON_SECRET=your-secret-key-here
NODE_ENV=development
```

### 4. Vercel Postgres 데이터베이스 생성

1. Vercel 대시보드 > 프로젝트 > Storage 탭
2. "Create Database" 클릭
3. "Postgres" 선택
4. 데이터베이스 이름 입력 (예: `text-studio-db`)
5. "Create" 클릭
6. 생성된 `POSTGRES_URL`이 자동으로 환경 변수에 추가됨

### 5. 데이터베이스 스키마 생성

Vercel Postgres 대시보드에서 다음 SQL을 실행:

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

### 6. Cron Jobs 설정 확인

`vercel.json` 파일이 올바르게 설정되어 있으면 Vercel이 자동으로 Cron Jobs를 인식합니다:

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

## 📋 배포 후 확인 사항

### 1. 배포 상태 확인

1. Vercel 대시보드 > 프로젝트 > Deployments
2. 최신 배포 상태 확인
3. 빌드 로그 확인 (문제가 있는 경우)

### 2. API 엔드포인트 테스트

배포된 URL에서 다음 엔드포인트 테스트:

- `https://your-project.vercel.app/api/usage` (POST)
- `https://your-project.vercel.app/api/stats` (GET)
- `https://your-project.vercel.app/api/cron/daily` (GET, 인증 필요)
- `https://your-project.vercel.app/api/cron/hourly` (GET, 인증 필요)

### 3. Cron Jobs 테스트

Cron Jobs는 Vercel이 자동으로 실행하지만, 수동으로 테스트할 수 있습니다:

```bash
curl -X GET "https://your-project.vercel.app/api/cron/daily" \
  -H "Authorization: Bearer your-cron-secret"
```

## 🔄 자동 배포 워크플로우

GitHub에 푸시하면 Vercel이 자동으로:

1. 변경사항 감지
2. 새 배포 시작
3. 빌드 실행
4. 배포 완료
5. 프리뷰 URL 생성 (Pull Request의 경우)

**브랜치별 배포:**
- `main` 브랜치 → Production 배포
- 다른 브랜치 → Preview 배포

## 🐛 문제 해결

### 빌드 실패

1. Vercel 대시보드 > Deployments > 실패한 배포 선택
2. "Build Logs" 확인
3. 에러 메시지 확인
4. 로컬에서 `pnpm run build` 실행하여 재현

### 환경 변수 누락

1. Settings > Environment Variables 확인
2. 필요한 변수 추가
3. 재배포 (자동 또는 수동)

### 데이터베이스 연결 실패

1. Storage > Postgres 확인
2. `POSTGRES_URL` 환경 변수 확인
3. 데이터베이스 스키마 생성 확인

## 📚 참고 자료

- [Vercel 배포 문서](https://vercel.com/docs/deployments/overview)
- [Vercel Postgres 문서](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Cron Jobs 문서](https://vercel.com/docs/cron-jobs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)

## ✨ 다음 단계

1. ✅ GitHub에 코드 푸시 완료
2. ⏳ Vercel 프로젝트 생성 및 연동
3. ⏳ 환경 변수 설정
4. ⏳ Vercel Postgres 데이터베이스 생성
5. ⏳ 데이터베이스 스키마 생성
6. ⏳ 배포 확인 및 테스트

