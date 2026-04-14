# Status | 마지막: 2026-04-14

## 현재 작업
프로젝트 초기 검토 및 클린업 완료

## 최근 변경 (최근 5개)
- 04-14: AdSense 중복 스크립트 제거 (layout.tsx)
- 04-14: package.json name "my-v0-project" → "texturb"
- 04-14: next.config.mjs output: 'standalone' 제거
- 04-14: Cloudflare 잔재 코드·문서 40여 개 삭제 (workers/, functions/, wrangler.toml, CLOUDFLARE-*.md 등)
- 04-14: DB 레이어 Vercel Postgres → Turso(libsql) 전환, format-tools.tsx 1109줄 → 48줄 리팩토링

## TODO
- [x] 빌드 확인 완료 (✓ 75/75 pages)
- [ ] Vercel 환경변수 설정: TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_ADSENSE_ID, CRON_SECRET
- [ ] Turso DB 생성 시 schema.sql 실행 (lib/db/schema.sql)
- [ ] analysis-tools.tsx 747줄 분리 (선택)

## 결정사항
- DB: Turso(libsql/SQLite) 사용. DB 없어도 앱 동작(graceful degradation)
- 배포: Vercel + GitHub
- Cloudflare 미사용: 관련 코드 전부 제거

## 주의
- TURSO_DATABASE_URL 미설정 시 통계 기능 비활성화되지만 텍스트 도구는 정상 동작
- pnpm-lock.yaml 존재하나 npm 사용 중 → 혼용 주의
- lib/db/schema.sql로 Turso DB 초기화 필요
