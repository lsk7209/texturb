# Status | 마지막: 2026-04-14

## 현재 작업
SEO/수익화 설정 완료 (서치콘솔, 사이트맵, RSS, GA4, AdSense)

## 최근 변경 (최근 5개)
- 04-14: RSS feed 구현 (app/feed.xml/route.ts) — AI 포스트 포함, 최신순 50개
- 04-14: robots.ts에 AI봇 허용(GPTBot, ClaudeBot, Perplexity 등), Bytespider 차단
- 04-14: sitemap.ts async로 전환, DB AI 포스트 동적 포함
- 04-14: AdSense 하드코딩 → NEXT_PUBLIC_ADSENSE_PUB_ID 환경변수
- 04-14: .env.local 생성 (환경변수 템플릿)

## TODO
- [ ] Vercel 환경변수 설정: TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_ADSENSE_PUB_ID, CRON_SECRET, GEMINI_API_KEY
- [ ] .env.local에 실제 GA4 측정 ID 입력 (G-XXXXXXXXXX → 실제값)
- [ ] Turso DB 생성 후 schema.sql 실행 (lib/db/schema.sql)
- [ ] 네이버 웹마스터도구에 feed.xml RSS 제출
- [ ] analysis-tools.tsx 747줄 분리 (선택)

## 결정사항
- DB: Turso(libsql/SQLite) 사용. DB 없어도 앱 동작(graceful degradation)
- 배포: Vercel + GitHub
- Cloudflare 미사용: 관련 코드 전부 제거

## 주의
- TURSO_DATABASE_URL 미설정 시 통계 기능 비활성화되지만 텍스트 도구는 정상 동작
- pnpm-lock.yaml 존재하나 npm 사용 중 → 혼용 주의
- lib/db/schema.sql로 Turso DB 초기화 필요
