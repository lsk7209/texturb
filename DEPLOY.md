# Cloudflare Pages 배포 가이드

## 📋 배포 체크리스트

### 1단계: Cloudflare 설정

- [ ] Cloudflare 계정 생성 및 로그인
- [ ] Wrangler CLI 설치 및 인증: `wrangler login`
- [ ] D1 데이터베이스 생성: `npm run cf:db:create`
- [ ] `wrangler.toml`에 데이터베이스 ID 입력
- [ ] 데이터베이스 마이그레이션: `npm run cf:db:migrate`

### 2단계: 환경 변수 설정

Cloudflare 대시보드 > Pages > Settings > Environment variables에서 설정:

- [ ] `CRON_SECRET`: 크론 작업 보안 키 (랜덤 문자열 생성)
- [ ] `NEXT_PUBLIC_SITE_URL`: 사이트 URL
- [ ] `NEXT_PUBLIC_GA_ID`: Google Analytics ID (선택)
- [ ] `NEXT_PUBLIC_ADSENSE_ID`: Google AdSense ID (선택)

### 3단계: 크론 작업 배포

```bash
# 크론 작업 배포
npm run cf:cron:deploy
```

또는 개별 배포:

```bash
# Daily cron
cd workers
wrangler publish cron-daily.ts --name cron-daily --config wrangler.toml

# Hourly cron
wrangler publish cron-hourly.ts --name cron-hourly --config wrangler.toml
```

### 4단계: 프로젝트 배포

#### 방법 1: Wrangler CLI로 배포

```bash
# 빌드
npm run build

# 배포
npm run cf:deploy
```

#### 방법 2: GitHub 연동 (권장)

1. Cloudflare 대시보드 > Pages > Create a project
2. GitHub 저장소 연결
3. 빌드 설정:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (프로젝트 루트)
4. 환경 변수 설정 (2단계 참조)
5. Deploy 클릭

### 5단계: 검증

- [ ] 사이트 접속 확인
- [ ] API 엔드포인트 테스트: `/api/stats?toolId=char-counter`
- [ ] 크론 작업 확인: Cloudflare Workers 대시보드에서 실행 로그 확인

## 🔧 문제 해결

### 빌드 실패

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 빌드 캐시 클리어
rm -rf .next
npm run build
```

### D1 데이터베이스 연결 실패

1. `wrangler.toml`의 `database_id` 확인
2. Cloudflare 대시보드에서 D1 데이터베이스 확인
3. 로컬 테스트: `npm run cf:db:local`

### 크론 작업이 실행되지 않음

1. Workers 대시보드에서 크론 작업 확인
2. `wrangler.toml`의 크론 스케줄 확인
3. 실행 로그 확인: Workers 대시보드 > Logs

## 📊 모니터링

### Cloudflare 대시보드

- **Analytics**: 트래픽 및 성능 지표
- **Workers**: 크론 작업 실행 상태
- **D1**: 데이터베이스 쿼리 및 사용량

### 로그 확인

```bash
# Workers 로그 실시간 확인
wrangler tail cron-daily
wrangler tail cron-hourly

# Pages Functions 로그
# Cloudflare 대시보드 > Pages > Your Project > Functions > Logs
```

## 🚀 프로덕션 최적화

### 캐싱 설정

Cloudflare Pages는 자동으로 정적 자산을 캐싱합니다. 동적 콘텐츠는:

- API Routes: Edge Runtime 사용 (`export const runtime = "edge"`)
- ISR (Incremental Static Regeneration): Next.js 설정에서 구성

### 성능 모니터링

- Cloudflare Analytics 활성화
- Real User Monitoring (RUM) 설정
- Web Vitals 추적

## 📝 추가 리소스

- [Cloudflare Pages 문서](https://developers.cloudflare.com/pages/)
- [D1 데이터베이스 가이드](https://developers.cloudflare.com/d1/)
- [Workers Cron Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/)

