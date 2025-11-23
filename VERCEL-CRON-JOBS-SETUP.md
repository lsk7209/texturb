# Vercel Cron Jobs 수동 설정 가이드

## 📋 문제 상황

Vercel 팀 플랜 제한으로 인해 `vercel.json`에서 Cron Jobs를 설정할 수 없습니다.

**오류 메시지:**
```
Your plan allows your team to create up to 2 Cron Jobs. 
Your team currently has 2, and this project is attempting to create 1 more, 
exceeding your team's limit.
```

## ✅ 해결 방법

### 옵션 1: Vercel 대시보드에서 수동 설정 (권장)

1. [Vercel 대시보드](https://vercel.com/limsubs-projects/texturb)에 로그인
2. 프로젝트 선택 > **Settings** 탭
3. **Cron Jobs** 섹션으로 이동
4. **Create Cron Job** 클릭
5. 다음 설정 입력:
   - **Path**: `/api/cron/daily`
   - **Schedule**: `0 0 * * *` (매일 자정)
   - **Timezone**: `UTC` (또는 원하는 시간대)
6. **Create** 클릭

### 옵션 2: 기존 Cron Job 제거 후 재설정

다른 프로젝트에서 사용 중인 Cron Job을 제거하고 이 프로젝트에 할당:

1. Vercel 대시보드 > 다른 프로젝트 > Settings > Cron Jobs
2. 사용하지 않는 Cron Job 삭제
3. 이 프로젝트에서 위의 옵션 1 단계 수행

### 옵션 3: 플랜 업그레이드

더 많은 Cron Jobs가 필요한 경우 Vercel Pro 플랜으로 업그레이드:

- [Vercel 플랜 비교](https://vercel.com/pricing)
- Pro 플랜: 무제한 Cron Jobs

## 📝 현재 설정

### vercel.json

Cron Jobs 설정이 제거되었습니다:

```json
{
  "functions": {
    "app/api/usage/route.ts": {
      "maxDuration": 10
    },
    "app/api/stats/route.ts": {
      "maxDuration": 10
    },
    "app/api/cron/daily/route.ts": {
      "maxDuration": 300
    }
  },
  "headers": [
    // ... 헤더 설정
  ]
}
```

### API 엔드포인트

Cron Job API 엔드포인트는 여전히 작동합니다:

- **경로**: `/api/cron/daily`
- **메서드**: `GET`
- **인증**: `Authorization: Bearer ${CRON_SECRET}` 헤더 필요
- **기능**: 일일 통계 집계, 시간별 통계 집계, 오래된 세션 정리

## 🔧 수동 호출 방법

Cron Job을 수동으로 호출하려면:

```bash
curl -X GET "https://your-project.vercel.app/api/cron/daily" \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

## 📚 참고 자료

- [Vercel Cron Jobs 문서](https://vercel.com/docs/cron-jobs)
- [Vercel 플랜 제한](https://vercel.com/docs/limits)
- [Vercel 플랜 비교](https://vercel.com/pricing)

## ⚠️ 중요 사항

1. **환경 변수 설정**: Vercel 대시보드에서 `CRON_SECRET` 환경 변수를 설정해야 합니다.
2. **인증**: Cron Job API는 `Authorization: Bearer ${CRON_SECRET}` 헤더가 필요합니다.
3. **플랜 제한**: Hobby 플랜은 하루에 한 번만 Cron Job 실행 가능, 팀 플랜은 2개까지 Cron Job 생성 가능.

