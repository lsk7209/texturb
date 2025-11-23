# Vercel 설정 오류 해결: cache 속성 제거

## 문제
`Invalid request: should NOT have additional property 'cache'. Please remove it.`

## 원인
Vercel Cron Jobs 설정에서 `cache` 속성은 지원되지 않습니다.

## 해결 방법

### 1. vercel.json 파일 확인
현재 `vercel.json` 파일은 올바른 형식입니다:

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

### 2. Vercel 대시보드에서 확인
만약 Vercel 대시보드에서 Cron Jobs를 설정했다면:

1. Vercel 대시보드 > 프로젝트 > Settings > Cron Jobs로 이동
2. 각 Cron Job 설정에서 `cache` 속성이 있는지 확인
3. 있다면 제거

### 3. 올바른 Cron Jobs 형식
Vercel Cron Jobs는 다음 속성만 지원합니다:
- `path` (필수): API 경로
- `schedule` (필수): Cron 표현식

**지원되지 않는 속성:**
- `cache`
- `route`
- 기타 추가 속성

### 4. 대안: Next.js 캐싱 사용
Cron Jobs에서 캐싱이 필요하다면, API Route에서 직접 처리:

```typescript
// app/api/cron/daily/route.ts
export const runtime = "nodejs"
export const revalidate = 3600 // 1시간 캐싱

export async function GET(request: Request) {
  // 캐싱은 Next.js가 자동으로 처리
  // ...
}
```

## 확인 사항
- [ ] `vercel.json`에 `cache` 속성 없음
- [ ] Vercel 대시보드에서 `cache` 속성 제거
- [ ] Cron Jobs가 올바른 형식으로 설정됨

