# Status | 마지막: 2026-04-15

## 현재 작업
블로그 콘텐츠 대량 확장 완료

## 최근 변경 (최근 5개)
- 04-15: 신규 블로그 포스트 30개 추가 (lib/blog-posts-batch2.ts, 2026-04-15~05-14 하루 1개 자동 공개)
- 04-15: BlogPost 타입에 aeoQuestion/aeoAnswer 필드 추가 (TS 에러 수정)
- 04-15: getAllBlogPosts() 날짜 필터링 추가 (publishedAt ≤ 오늘만 노출)
- 04-14: RSS feed 구현 (app/feed.xml/route.ts)
- 04-14: robots.ts AI봇 허용, sitemap.ts 동적 포함

## TODO
- [ ] Vercel 환경변수 설정: TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_ADSENSE_PUB_ID, CRON_SECRET, GEMINI_API_KEY
- [ ] Turso DB 생성 후 schema.sql 실행
- [ ] 네이버 웹마스터도구에 feed.xml RSS 제출
- [ ] 기존 포스트 8개 본문 확장 (3,000자 이상) — 선택

## 결정사항
- 블로그 자동 공개: publishedAt 날짜 기반 필터링 (DB 불필요)
- 신규 포스트: lib/blog-posts-batch2.ts (별도 파일로 분리 관리)
- DB: Turso(libsql/SQLite). DB 없어도 앱 동작

## 주의
- 신규 30개 포스트: 오늘(04-15)부터 매일 1개씩 공개 (2026-05-14까지)
- 기존 정적 포스트 11개 중 8개는 글자수 부족 (추후 확장 권장)
