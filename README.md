# texturb

24text Studio - 텍스트 편집 및 변환 도구 모음

## 🚀 프로젝트 개요

24text Studio는 다양한 텍스트 편집 및 변환 기능을 제공하는 웹 애플리케이션입니다.

## ✨ 주요 기능

- 텍스트 정리 및 변환 도구
- 글자수/단어수 카운터
- 텍스트 포맷 변환
- 특수문자 하이라이트

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React, TypeScript
- **Backend**: Cloudflare Pages Functions
- **Database**: Cloudflare D1
- **Deployment**: Cloudflare Pages

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# Cloudflare 로컬 개발
npm run cf:dev

# 프로덕션 빌드
npm run build
```

## 🚀 배포

### Cloudflare Pages 배포

```bash
# 빌드 및 배포
npm run cf:deploy
```

### 크론 작업 배포

```bash
# 크론 작업 배포
npm run cf:cron:deploy
```

## 📚 문서

- [Cloudflare 최적화 보고서](./CLOUDFLARE-COMPREHENSIVE-OPTIMIZATION.md)
- [보안 최적화 보고서](./CLOUDFLARE-SECURITY-OPTIMIZATION.md)
- [고급 최적화 보고서](./CLOUDFLARE-ADVANCED-OPTIMIZATION-FINAL.md)

## 🔧 최적화 사항

- ✅ D1 데이터베이스 배치 처리
- ✅ Prepared Statement 캐싱
- ✅ Circuit Breaker 패턴
- ✅ 재시도 로직
- ✅ Rate Limiting
- ✅ 에러 핸들링 강화
- ✅ Promise 에러 핸들링
- ✅ 데이터베이스 헬스 체크

## 📄 라이선스

MIT

