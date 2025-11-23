# 🚀 Cloudflare Pages 빠른 시작 가이드

## 5분 안에 배포하기

### 1. Cloudflare 설정 (2분)

```bash
# Wrangler 설치 및 로그인
npm install -g wrangler
wrangler login

# D1 데이터베이스 생성
npm run cf:db:create
```

생성된 데이터베이스 ID를 복사하여 `wrangler.toml` 파일에 입력:

```toml
[[d1_databases]]
binding = "DB"
database_name = "text-studio-db"
database_id = "여기에-복사한-ID-입력"
```

### 2. 데이터베이스 초기화 (1분)

```bash
# 스키마 적용
npm run cf:db:migrate
```

### 3. 환경 변수 설정 (1분)

Cloudflare 대시보드:
1. Pages > Your Project > Settings > Environment variables
2. 다음 변수 추가:
   - `CRON_SECRET`: 임의의 보안 키 (예: `openssl rand -hex 32`)

### 4. 배포 (1분)

#### 옵션 A: GitHub 연동 (권장)

1. GitHub에 코드 푸시
2. Cloudflare Pages > Create a project
3. GitHub 저장소 선택
4. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `.next`
5. Deploy!

#### 옵션 B: CLI 배포

```bash
npm run build
npm run cf:deploy
```

### 5. 크론 작업 배포 (선택)

```bash
npm run cf:cron:deploy
```

## ✅ 완료!

이제 사이트가 `https://your-project.pages.dev`에서 실행됩니다.

## 📚 다음 단계

- [상세 배포 가이드](./DEPLOY.md) 확인
- [전체 문서](./README-CLOUDFLARE.md) 읽기
- API 사용 예시 확인

## 🆘 문제가 있나요?

- [문제 해결 가이드](./README-CLOUDFLARE.md#-문제-해결) 참조
- Cloudflare 대시보드에서 로그 확인

