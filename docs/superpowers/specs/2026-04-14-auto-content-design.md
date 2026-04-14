# Auto Content Publishing — Design Spec
Date: 2026-04-14

## Overview
Texturb에 AI 자동 콘텐츠 생성 + 크론 예약 발행 기능 추가.
매일 1편을 Google Gemini API로 생성하고 Turso DB에 저장, 예약된 시간에 자동 발행.
어드민 UI로 콘텐츠 확인·수정·수동 생성 가능.

## Architecture

```
Vercel Cron (daily 00:05)
  → lib/content/topic-selector.ts    # 오늘 주제 선택
  → lib/content/gemini-generator.ts  # Gemini API 글 생성
  → lib/db/queries.ts                # DB 저장 (status=scheduled)

Vercel Cron (hourly, 기존)
  → scheduled + published_at ≤ NOW() → status=published

Admin (/admin)
  → 로그인 (ADMIN_PASSWORD 환경변수)
  → 글 목록/수정/삭제/즉시발행
  → 수동 생성 트리거
```

## DB Schema (schema.sql 추가)

```sql
CREATE TABLE posts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  type         TEXT NOT NULL,        -- 'blog' | 'guide' | 'tool-guide'
  slug         TEXT UNIQUE NOT NULL,
  title        TEXT NOT NULL,
  summary      TEXT NOT NULL,
  content      TEXT NOT NULL,        -- 마크다운
  keywords     TEXT,                 -- JSON 배열 문자열
  status       TEXT DEFAULT 'draft', -- 'draft' | 'scheduled' | 'published'
  tool_id      TEXT,                 -- tool-guide 연결 도구 ID
  published_at DATETIME,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_posts_status_published ON posts(status, published_at);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_type ON posts(type);
```

## Content Generation

### Topic Selection (lib/content/topic-selector.ts)
- tool-guide: tool-registry의 30개 도구 순환 (오늘 날짜 기준 인덱스)
- blog: 텍스트 편집 관련 키워드 배열에서 순환
- 이미 발행된 주제 중복 방지 (DB 조회)

### Gemini Generator (lib/content/gemini-generator.ts)
- 모델: gemini-2.0-flash (빠르고 저렴)
- 한국어, SEO 최적화, 1500자 이상
- H2/H3 마크다운 구조
- 도구 관련 글은 해당 도구 URL 자연스럽게 포함
- 응답 파싱: title, summary, content, keywords 추출

### Cron Schedule
- 생성: `app/api/cron/daily/route.ts` — 기존 크론에 생성 로직 추가
- 발행: `app/api/cron/hourly/route.ts` — scheduled→published 상태 변경 추가

## Pages

```
/blog/ai/[slug]     → AI 생성 블로그 (DB 기반, revalidate: 3600)
/guides/ai/[slug]   → AI 생성 가이드 (DB 기반, revalidate: 3600)
/blog               → 기존 + AI 글 목록 병합
/guides             → 기존 + AI 글 목록 병합
```

## Admin

### Auth
- `/admin/login` — ADMIN_PASSWORD 환경변수와 대조
- 세션: httpOnly 쿠키 (서버 사이드 검증)

### Pages
- `/admin/posts` — 글 목록 (상태 필터: all/draft/scheduled/published)
- `/admin/posts/[id]/edit` — 제목·내용·발행일 수정
- `/admin/posts/generate` — 수동 생성 트리거 (API POST)

## Environment Variables (추가 필요)
```
GEMINI_API_KEY=AIzaSyBW_VhE1YDNvDpr5QtOVdbuzTKtVavXkDQ
ADMIN_PASSWORD=<설정필요>
```

## File Structure (신규)
```
app/
  admin/
    layout.tsx              # 어드민 레이아웃 (인증 체크)
    login/page.tsx
    posts/page.tsx
    posts/[id]/edit/page.tsx
  api/
    admin/
      generate/route.ts     # 수동 생성 트리거
      posts/route.ts        # 목록 조회
      posts/[id]/route.ts   # 수정/삭제
    blog/ai/[slug]/page.tsx
    guides/ai/[slug]/page.tsx
lib/
  content/
    topic-selector.ts
    gemini-generator.ts
    post-queries.ts         # posts 테이블 전용 쿼리
```

## Error Handling
- Gemini API 실패: 3회 재시도, 실패 시 오늘 발행 건너뜀 (로그 기록)
- DB 저장 실패: 로그 기록, 다음 크론 재시도
- 어드민 미인증: `/admin/login` 리다이렉트
