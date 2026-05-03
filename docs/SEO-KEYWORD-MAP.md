# SEO 키워드 매핑 시트

각 페이지의 **주력 키워드**(타이틀·H1)와 **롱테일 키워드**(본문·FAQ·메타)를 정리한 운영 참고 문서입니다.
신규 콘텐츠 작성 시 이 표를 기준으로 키워드 카니발리제이션을 방지하세요.

---

## 1. 도구 페이지 (Tools) — 주력 키워드 매핑

| 슬러그 | 주력 키워드 (1차) | 보조 키워드 (롱테일) | 검색 의도 |
|---|---|---|---|
| `line-break-cleaner` | 줄바꿈 제거 | 워드 줄바꿈 정리, PDF 복사 줄바꿈, 문단 정리 | 정보형 + 도구형 |
| `char-counter` | 글자수 세기 | 자소서 글자수, 공백 포함 제외, 바이트 계산 | 도구형 |
| `case-converter` | 대소문자 변환 | 영어 대문자 변환, title case, snake case | 도구형 |
| `symbol-picker` | 특수문자 모음 | 닉네임 특수문자, 별 기호, 화살표 기호 | 탐색형 |
| `sentence-counter` | 문장 수 세기 | 평균 문장 길이, 가독성 분석 | 분석형 |
| `trim-whitespace` | 양쪽 공백 제거 | trim 함수, 앞뒤 공백 정리 | 도구형 |
| `remove-blank-lines` | 빈 줄 제거 | 문단 줄간격, 빈 라인 삭제 | 도구형 |
| `dedupe-lines` | 중복 줄 제거 | 이메일 중복 제거, 리스트 unique | 도구형 |
| `markdown-to-html` | 마크다운 HTML 변환 | md to html, 마크다운 미리보기 | 도구형 |
| `html-to-text` | HTML 태그 제거 | plain text 변환, 태그 지우기 | 도구형 |
| `slug-generator` | 슬러그 생성 | URL slug, kebab case 변환 | 도구형 |
| `paragraph-counter` | 문단 수 세기 | 블로그 문단 길이, 글 구조 분석 | 분석형 |
| `sort-lines` | 줄 정렬 | 가나다순 정렬, ABC순 정렬, 텍스트 정렬 | 도구형 |
| `md-format-cleaner` | 마크다운 포맷 정리 | md 정리, 마크다운 클렌저 | 도구형 |
| `email-extractor` | 이메일 추출 | 텍스트에서 이메일 뽑기, 이메일 리스트 | 도구형 |
| `url-extractor` | URL 추출 | 텍스트에서 링크 뽑기, URL 정리 | 도구형 |
| `title-length-checker` | 제목 길이 체크 | SEO 제목 글자수, 유튜브 제목 길이 | 정보형 |
| `table-markdown-converter` | 표 마크다운 변환 | 엑셀 마크다운 변환, csv to markdown | 도구형 |
| `number-formatter` | 숫자 포맷 | 천단위 콤마, 통화 포맷 | 도구형 |

> ⚠️ **카니발리제이션 주의**: `line-break-cleaner`, `remove-blank-lines`, `trim-whitespace`는 의도가 비슷합니다.
> 각 페이지의 H1과 메타 디스크립션에 **차별점**을 명시하세요.
> - line-break-cleaner: "복붙으로 깨진 줄바꿈"
> - remove-blank-lines: "문단 사이 빈 줄"
> - trim-whitespace: "줄 양 끝 공백"

---

## 2. 가이드 페이지 (Guides) — 검색 의도형

| 슬러그 | 주력 키워드 | 보조 키워드 | 비고 |
|---|---|---|---|
| `blog-post-cleanup-guide` | 블로그 글 정리 방법 | 네이버 블로그 줄바꿈, 티스토리 글 다듬기 | 기존 |
| (신규) `email-writing-guide` | 비즈니스 이메일 쓰는 법 | 영문 이메일 템플릿, 격식 표현 | TODO |
| (신규) `sns-caption-guide` | SNS 캡션 작성 | 인스타 글자수, 해시태그 정리 | TODO |
| (신규) `academic-paper-guide` | 논문 글자수·인용 | 학술 글쓰기, 출처 정리 | TODO |
| (신규) `marketing-copy-guide` | 마케팅 카피 다듬기 | 광고 문구, A/B 카피 | TODO |
| (신규) `translation-cleanup-guide` | 번역 후 정리 | 기계 번역 다듬기, 자연스러운 한국어 | TODO |
| (신규) `youtube-description-guide` | 유튜브 설명란 작성 | 유튜브 SEO, 태그 글자수 | TODO |

---

## 3. 블로그 카테고리 (Blog) — 발행 캘린더 키워드

| 카테고리 | 월 발행 목표 | 키워드 클러스터 |
|---|---|---|
| 도구 사용법 | 4편 | "{도구명} 사용법", "{도구명} 단축키", "{도구명} vs ~~" |
| 상황별 가이드 | 4편 | "자기소개서 글자수", "카드뉴스 글자수", "블로그 SEO 글자수" |
| 비교/리뷰 | 2편 | "{툴 A} vs {툴 B}", "맞춤법 검사기 비교" |
| 케이스 스터디 | 2편 | "{직군} {업무}", "마케터의 텍스트 작업 루틴" |
| 통계·트렌드 | 2편 | "한국인 평균 글자수", "블로그 글 길이 통계" |

---

## 4. 운영 규칙

1. **카니발리제이션 점검**: 신규 콘텐츠 작성 전 이 표에서 키워드 중복을 확인.
2. **롱테일 우선**: 메인 키워드는 이미 점유된 경우가 많음 → 3~4단어 조합부터 공략.
3. **검색 의도 매칭**:
   - 도구형 → 빠른 진입·결과 노출
   - 정보형 → 충분한 본문 + FAQ
   - 비교형 → 표·차트
4. **내부 링크**: 모든 글에 최소 3개의 내부 링크 (도구 1 + 가이드 1 + 블로그 1).
5. **갱신**: 분기마다 GSC Top Queries 확인 → 표에 추가/조정.
