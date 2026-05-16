import type { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH10: BlogPost[] = [
  {
    slug: "sentiment-analysis-text-cleanup",
    title: "감성 분석을 위한 텍스트 정리 가이드",
    description: "감성 분석(Sentiment Analysis) 모델의 정확도를 높이기 위한 한국어 텍스트 전처리 방법과 부정 표현·이모지 처리 전략을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "감성 분석 텍스트 정리 - 한국어 전처리 완벽 가이드",
    metaDescription: "감성 분석 전처리: 부정 표현 처리, 이모지 변환, 신조어 사전 구축. 한국어 감성 분석 정확도를 높이는 텍스트 정리 방법을 설명합니다.",
    targetKeywords: ["감성 분석 텍스트 전처리", "한국어 감성 분석", "sentiment analysis 전처리"],
    category: "텍스트 편집",
    tags: ["감성분석", "NLP", "텍스트전처리"],
    aeoQuestion: "감성 분석을 위한 한국어 텍스트 전처리는 어떻게 하나요?",
    aeoAnswer: "감성 분석 전처리의 핵심은 부정 표현 처리입니다. '좋지 않다', '별로다' 같은 부정 구조를 일반 불용어 제거 방식으로 처리하면 '좋다'만 남아 감성이 반전됩니다. 부정어(않다, 못하다, 별로)를 바로 뒤 형용사와 결합하여 '좋지않다' 형태로 보존해야 합니다. 또한 이모지는 제거하지 말고 텍스트 감성어로 변환하는 것이 정확도를 높입니다.",
    cta: { text: "텍스트 전처리 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "텍스트 데이터 전처리 가이드", link: "/blog/text-data-preprocessing-guide/" },
      { text: "텍스트 마이닝 입문", link: "/blog/text-mining-introduction/" },
    ],
    outlinks: [
      { text: "KNU 감성 사전", link: "https://github.com/park1200656/KnuSentiLex", description: "한국어 감성 어휘 사전" },
    ],
    canonicalUrl: "https://texturb.com/blog/sentiment-analysis-text-cleanup/",
    content: `"이 제품 진짜 별로 아니라고는 못하겠네요"라는 문장을 단순 키워드 방식으로 분석하면 '진짜', '아니라고'의 감성 신호가 충돌한다. 한국어 감성 분석에서 이중 부정과 완곡 표현은 영어보다 훨씬 복잡하다.

## 핵심 답변

감성 분석 전처리의 핵심은 부정 표현 처리입니다. '좋지 않다', '별로다' 같은 부정 구조를 일반 불용어 제거 방식으로 처리하면 '좋다'만 남아 감성이 반전됩니다. 부정어(않다, 못하다, 별로)를 바로 뒤 형용사와 결합하여 '좋지않다' 형태로 보존해야 합니다. 또한 이모지는 제거하지 말고 텍스트 감성어로 변환하는 것이 정확도를 높입니다.

## 한국어 감성 분석의 3대 난제

KNU 감성 사전(14,843개 어휘 수록, 군산대학교)을 기반으로 연구한 결과에 따르면, 한국어 감성 분석의 정확도를 낮추는 주요 요인은 다음과 같다.

1. **부정 표현 구조**: "안", "못", "않다", "없다" 등 부정어가 앞 형용사와 분리되어 등장
2. **경어체 감성 모호성**: "최고세요~"(긍정)와 "최고시겠어요..."(빈정거림)의 구분
3. **신조어·이모티콘**: 사전에 없는 감성 표현 지속 생성

## 부정 표현 보존 전처리

\`\`\`python
import re

def preserve_negation(text):
    # "좋지 않다" → "좋지않다" 결합
    neg_patterns = [
        (r'([가-힣]+)지\\s*(않|못)', r'\\1지\\2'),
        (r'([가-힣]+)\\s*(안|못)\\s*([가-힣]+다)', r'\\1\\2\\3'),
    ]
    for pattern, replacement in neg_patterns:
        text = re.sub(pattern, replacement, text)
    return text
\`\`\`

## 이모지 감성 변환

이모지를 단순 제거하면 중요한 감성 신호를 잃는다. 대신 감성 레이블로 변환한다.

\`\`\`python
emoji_sentiment = {
    '😊': '기쁨_긍정',
    '😢': '슬픔_부정',
    '😡': '분노_부정',
    '👍': '추천_긍정',
    '💔': '실망_부정',
}
\`\`\`

## 신조어 사전 구축

정기적으로 업데이트되는 사용자 정의 사전을 유지한다. 소셜 미디어에서 새로운 감성 표현은 약 3-6개월 주기로 등장한다. "ㄹㅇ", "존맛", "레전드" 같은 긍정 신조어를 사전에 추가하지 않으면 중립으로 분류된다.

## 도메인 특화 전처리

쇼핑몰 리뷰, 영화 리뷰, 뉴스 댓글 등 도메인마다 자주 등장하는 감성 패턴이 다르다. 같은 "빠르다"가 배송 리뷰에서는 긍정이지만, 음식 리뷰에서는 중립이거나 부정일 수 있다. 도메인 별 감성 사전을 별도 관리하는 것이 정확도를 높인다.

## 실무 활용 사례

**사례 1: 쇼핑몰 리뷰 자동 분류**
월 1만 건 이상 쌓이는 리뷰를 수동으로 읽기 어렵다. 부정 표현 보존 전처리를 적용한 후 KNU 감성 사전으로 점수를 산출하면 부정 리뷰를 자동으로 우선순위화해 CS팀에 알림을 보낼 수 있다. 전처리 없이 분석한 경우보다 부정 리뷰 감지 정확도가 크게 향상된다.

**사례 2: 브랜드 SNS 모니터링**
트위터·인스타그램에서 브랜드 언급 수천 건을 매일 수집할 때, 이모지 감성 변환을 적용하면 이모지만으로 감성을 표현하는 게시물(예: 😡, 💔)을 놓치지 않는다. 신조어 사전을 정기적으로 업데이트하면 최신 트렌드 표현도 정확히 분류할 수 있다.

**사례 3: 고객 설문 자동 분석**
분기별 NPS 설문의 서술형 답변을 감성 분석으로 분류하면 "추천 이유"와 "불만족 이유"를 빠르게 파악할 수 있다. 경어체 모호성 처리 로직을 추가하면 한국어 특유의 완곡 표현("별로라고 하기 어렵네요")도 부정으로 정확히 분류된다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "word-cloud-text-preprocessing",
    title: "워드클라우드 만들기 전 텍스트 전처리 방법",
    description: "워드클라우드 시각화의 품질을 결정하는 텍스트 전처리 과정을 단계별로 설명합니다. 한국어 불용어 처리와 형태소 분석 적용법을 포함합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "워드클라우드 텍스트 전처리 - 한국어 완벽 가이드",
    metaDescription: "워드클라우드 전처리 핵심: 형태소 분석으로 명사 추출 → 불용어 제거 → 빈도 계산. Python wordcloud 라이브러리로 한국어 워드클라우드 만드는 방법.",
    targetKeywords: ["워드클라우드 전처리", "한국어 워드클라우드", "파이썬 워드클라우드"],
    category: "텍스트 편집",
    tags: ["워드클라우드", "시각화", "텍스트전처리"],
    aeoQuestion: "한국어 워드클라우드를 만들기 전 텍스트 전처리는 어떻게 하나요?",
    aeoAnswer: "한국어 워드클라우드 전처리는 3단계입니다. 1) KoNLPy Okt로 형태소 분석 후 명사만 추출합니다. 2) '것', '수', '때', '곳' 같은 의미 없는 불용어를 제거합니다. 3) 단어 빈도를 계산해 Counter 객체로 만들면 Python wordcloud 라이브러리에 바로 입력할 수 있습니다. 폰트는 한국어를 지원하는 NanumGothic 등을 별도 지정해야 합니다.",
    cta: { text: "텍스트 분석 시작하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "텍스트 마이닝 입문", link: "/blog/text-mining-introduction/" },
      { text: "텍스트 데이터 전처리", link: "/blog/text-data-preprocessing-guide/" },
    ],
    outlinks: [
      { text: "Python wordcloud 라이브러리", link: "https://github.com/amueller/word_cloud", description: "오픈소스 워드클라우드 라이브러리" },
    ],
    canonicalUrl: "https://texturb.com/blog/word-cloud-text-preprocessing/",
    content: `워드클라우드의 가장 큰 단어가 "것", "수", "있다"인 경우를 자주 본다. 전처리 없이 원문을 넣었기 때문이다. 의미 있는 워드클라우드는 전처리 품질에서 시작한다.

## 핵심 답변

한국어 워드클라우드 전처리는 3단계입니다. 1) KoNLPy Okt로 형태소 분석 후 명사만 추출합니다. 2) '것', '수', '때', '곳' 같은 의미 없는 불용어를 제거합니다. 3) 단어 빈도를 계산해 Counter 객체로 만들면 Python wordcloud 라이브러리에 바로 입력할 수 있습니다. 폰트는 한국어를 지원하는 NanumGothic 등을 별도 지정해야 합니다.

## 한국어 워드클라우드의 핵심 문제

한국어는 조사·어미가 단어에 결합하기 때문에 영어처럼 공백으로 단어를 분리하면 "배송이", "배송을", "배송의"가 각각 다른 단어로 집계된다. 이를 해결하려면 형태소 분석이 필수다.

## 전처리 전체 코드

\`\`\`python
from konlpy.tag import Okt
from collections import Counter
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# 1. 형태소 분석 - 명사만 추출
okt = Okt()
text = "여기에 분석할 텍스트를 넣으세요..."
nouns = okt.nouns(text)

# 2. 불용어 제거
stopwords = {'것', '수', '때', '곳', '점', '등', '및', '즉', '위',
             '이', '그', '저', '우리', '나', '너', '왜', '어떻게'}
nouns = [n for n in nouns if n not in stopwords and len(n) > 1]

# 3. 빈도 계산
word_freq = Counter(nouns)

# 4. 워드클라우드 생성
wc = WordCloud(
    font_path='NanumGothic.ttf',  # 한국어 폰트 필수
    width=800,
    height=600,
    background_color='white',
    max_words=100,
)
wc.generate_from_frequencies(word_freq)

plt.figure(figsize=(10, 7))
plt.imshow(wc, interpolation='bilinear')
plt.axis('off')
plt.show()
\`\`\`

## 불용어 목록 관리 전략

기본 불용어 외에 도메인 특화 불용어를 추가해야 한다. 쇼핑몰 리뷰 분석이라면 "상품", "구매", "주문"처럼 모든 리뷰에 등장하는 단어도 불용어에 포함시켜야 실제 차별화된 키워드가 드러난다.

## 시각화 품질 높이기

- **TF-IDF 가중치 적용**: 단순 빈도 대신 TF-IDF 점수를 빈도로 사용하면 문서 특성을 더 잘 반영
- **마스크 이미지 적용**: 특정 형태(원, 별 등)로 워드클라우드 모양 지정 가능
- **색상 함수 커스터마이징**: 긍정 단어는 파란색, 부정 단어는 붉은색으로 감성별 색 적용

## 실무 활용 사례

**사례 1: 연구 논문 키워드 시각화**
논문 초록 200편을 한꺼번에 워드클라우드로 만들면 특정 연구 분야의 핵심 키워드 트렌드를 한눈에 파악할 수 있다. 형태소 분석으로 명사만 추출하고, "연구", "결과", "방법" 같은 학술 범용어를 불용어로 추가하면 실제 연구 주제어가 선명하게 드러난다.

**사례 2: 소비자 인터뷰 분석**
포커스 그룹 인터뷰 전사본을 워드클라우드로 시각화하면 참여자들이 공통으로 언급한 키워드를 즉시 확인할 수 있다. TF-IDF를 적용하면 여러 문서에서 공통으로 등장하는 일반 단어가 억제되어 각 참여자의 독자적인 표현이 부각된다.

**사례 3: SNS 트렌드 리포트**
주간 단위로 수집한 해시태그 텍스트를 워드클라우드로 만들면 브랜드 관련 화제어 변화를 시각적으로 추적할 수 있다. 전주와 비교해 새로 등장한 단어를 하이라이트 색상으로 표시하면 트렌드 변화를 빠르게 보고할 수 있다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "spreadsheet-text-automation-guide",
    title: "스프레드시트 텍스트 데이터 정리 자동화 - 엑셀·구글 시트",
    description: "엑셀과 구글 스프레드시트에서 텍스트 데이터를 자동으로 정리하는 함수와 매크로 방법을 실무 예시와 함께 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "스프레드시트 텍스트 정리 자동화 - 엑셀·구글 시트",
    metaDescription: "TRIM·CLEAN·SUBSTITUTE·LEFT·FIND 함수로 텍스트 자동 정리. 엑셀 파워쿼리와 구글 시트 Apps Script로 대용량 텍스트 일괄 처리하는 방법.",
    targetKeywords: ["엑셀 텍스트 정리", "구글 시트 텍스트 자동화", "스프레드시트 텍스트 함수"],
    category: "텍스트 편집",
    tags: ["엑셀", "구글시트", "자동화", "텍스트정리"],
    aeoQuestion: "엑셀에서 텍스트를 자동으로 정리하는 방법은 무엇인가요?",
    aeoAnswer: "엑셀 텍스트 정리의 핵심 함수는 TRIM(앞뒤 공백 제거), CLEAN(인쇄 불가 문자 제거), SUBSTITUTE(특정 문자 교체), LEFT/RIGHT/MID(텍스트 일부 추출)입니다. 대량 처리에는 파워쿼리(Power Query)를 활용하고, 구글 시트에서는 Apps Script로 자동화 스크립트를 작성할 수 있습니다.",
    cta: { text: "텍스트 글자수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "엑셀 텍스트 정리 방법", link: "/blog/excel-text-cleanup-guide/" },
      { text: "OCR 텍스트 후처리", link: "/blog/ocr-text-postprocessing-guide/" },
    ],
    outlinks: [
      { text: "Microsoft Excel 함수 참조", link: "https://support.microsoft.com/excel", description: "엑셀 공식 문서" },
    ],
    canonicalUrl: "https://texturb.com/blog/spreadsheet-text-automation-guide/",
    content: `CRM 데이터베이스에서 고객 이름 컬럼을 열면 "  김철수  ", "이영희\n", "박\t민준"처럼 공백과 제어 문자가 섞여 있는 경우가 흔하다. 이를 수동으로 하나씩 수정하는 대신 함수 하나로 일괄 처리할 수 있다.

## 핵심 답변

엑셀 텍스트 정리의 핵심 함수는 TRIM(앞뒤 공백 제거), CLEAN(인쇄 불가 문자 제거), SUBSTITUTE(특정 문자 교체), LEFT/RIGHT/MID(텍스트 일부 추출)입니다. 대량 처리에는 파워쿼리(Power Query)를 활용하고, 구글 시트에서는 Apps Script로 자동화 스크립트를 작성할 수 있습니다.

## 핵심 텍스트 정리 함수

| 함수 | 기능 | 사용 예 |
|---|---|---|
| \`TRIM()\` | 앞뒤 공백 제거, 중간 연속 공백 → 단일 공백 | \`=TRIM(A1)\` |
| \`CLEAN()\` | 인쇄 불가 문자(탭, 줄바꿈 등) 제거 | \`=CLEAN(A1)\` |
| \`SUBSTITUTE()\` | 특정 문자 일괄 교체 | \`=SUBSTITUTE(A1, "  ", " ")\` |
| \`LEN()\` | 글자수 계산 | \`=LEN(A1)\` |
| \`LEFT()/RIGHT()\` | 앞/뒤 N글자 추출 | \`=LEFT(A1, 10)\` |

### 조합 공식 (실무 필수)
\`\`\`
=TRIM(CLEAN(SUBSTITUTE(A1, CHAR(160), " ")))
\`\`\`
이 공식은 일반 공백, 줄바꿈, Non-Breaking Space(웹에서 복사 시 자주 포함)를 모두 처리한다.

## 엑셀 파워쿼리로 대량 처리

1. [데이터] → [데이터 가져오기] → [표/범위에서]
2. 파워쿼리 편집기에서 텍스트 열 선택
3. [변환] → [형식] → [트리밍] (TRIM과 동일 효과)
4. 추가로 [값 바꾸기]로 특정 패턴 일괄 치환
5. [닫기 및 로드]로 결과를 시트에 반환

10,000행 이상 데이터도 파워쿼리는 몇 초 내에 처리한다.

## 구글 시트 Apps Script 자동화

\`\`\`javascript
function cleanTextColumn() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange("A2:A1000");
  const values = range.getValues();

  const cleaned = values.map(row => [
    row[0].toString()
      .trim()
      .replace(/\s+/g, ' ')        // 연속 공백 단일화
      .replace(/[^\w\s가-힣]/g, '') // 한글·영문·숫자 외 제거
  ]);

  range.setValues(cleaned);
}
\`\`\`

이 스크립트를 [확장] → [Apps Script]에 붙여넣고 실행하면 A열 전체를 일괄 정리한다. 트리거를 설정하면 새 데이터 추가 시 자동 실행도 가능하다.

## 실무 활용 사례

**사례 1: CRM 데이터 정기 정리**
고객 데이터베이스에 새 데이터가 입력될 때마다 이름, 이메일, 주소 컬럼에 공백·제어 문자가 섞이는 문제가 반복된다. Apps Script 트리거를 "편집 시 실행"으로 설정하면 새 행이 추가될 때 자동으로 TRIM·CLEAN이 적용되어 수동 정리 작업을 없앨 수 있다.

**사례 2: 설문 응답 데이터 일괄 정제**
Google Forms로 수집한 설문 응답은 응답자마다 앞뒤 공백이나 줄바꿈 처리가 다르다. 파워쿼리의 트리밍·정규화 기능을 적용하면 수천 개 응답을 일괄 처리해 분석 준비가 완료된 깔끔한 데이터셋을 만들 수 있다.

**사례 3: 상품 데이터 마이그레이션**
쇼핑몰 상품 데이터를 신규 플랫폼으로 이전할 때 상품명, 설명 컬럼에 전각 공백(U+3000), Non-Breaking Space(U+00A0) 등이 섞여 있는 경우가 많다. `=TRIM(CLEAN(SUBSTITUTE(A1, CHAR(160), " ")))` 조합 공식으로 전처리하면 마이그레이션 오류를 크게 줄일 수 있다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "pdf-text-extraction-guide",
    title: "PDF에서 텍스트 추출 후 정리하는 단계별 방법",
    description: "검색 가능한 PDF와 스캔 PDF의 차이를 이해하고, Python pdfplumber·pypdf·Adobe 등 도구별 텍스트 추출 방법과 정리 과정을 단계별로 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "PDF 텍스트 추출 방법 - 도구별 단계별 가이드",
    metaDescription: "검색 가능 PDF: pdfplumber·pypdf로 텍스트 추출. 스캔 PDF: Tesseract OCR 필요. PDF 텍스트 추출 후 정리하는 완전한 방법을 안내합니다.",
    targetKeywords: ["PDF 텍스트 추출", "PDF 텍스트 변환", "파이썬 PDF 파싱"],
    category: "텍스트 편집",
    tags: ["PDF", "텍스트추출", "자동화"],
    aeoQuestion: "PDF에서 텍스트를 추출하는 가장 좋은 방법은 무엇인가요?",
    aeoAnswer: "PDF 유형에 따라 방법이 달라집니다. 검색 가능한 PDF(텍스트 레이어가 있는 경우)는 Python pdfplumber 라이브러리로 정확하게 추출할 수 있습니다. 스캔된 이미지 PDF는 먼저 OCR 처리가 필요하며, Tesseract OCR 또는 네이버 클로바 OCR API를 사용합니다. 추출 후에는 TRIM·CLEAN 함수나 정규식으로 공백과 줄바꿈 오류를 정리합니다.",
    cta: { text: "추출된 텍스트 정리하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "OCR 텍스트 후처리", link: "/blog/ocr-text-postprocessing-guide/" },
      { text: "영수증·견적서 텍스트 정리", link: "/blog/receipt-invoice-text-cleanup/" },
    ],
    outlinks: [
      { text: "pdfplumber GitHub", link: "https://github.com/jsvine/pdfplumber", description: "PDF 텍스트 추출 라이브러리" },
    ],
    canonicalUrl: "https://texturb.com/blog/pdf-text-extraction-guide/",
    content: `법무팀에서 계약서 100부를 Word로 변환해달라는 요청이 왔다. 파일을 열어보니 절반은 스캔된 이미지 PDF였다. 텍스트 레이어가 없는 이미지 PDF는 일반 복사·붙여넣기가 불가능하다. 유형 판별부터 시작해야 한다.

## 핵심 답변

PDF 유형에 따라 방법이 달라집니다. 검색 가능한 PDF(텍스트 레이어가 있는 경우)는 Python pdfplumber 라이브러리로 정확하게 추출할 수 있습니다. 스캔된 이미지 PDF는 먼저 OCR 처리가 필요하며, Tesseract OCR 또는 네이버 클로바 OCR API를 사용합니다. 추출 후에는 TRIM·CLEAN 함수나 정규식으로 공백과 줄바꿈 오류를 정리합니다.

## PDF 유형 판별

**텍스트 레이어 있음 (검색 가능 PDF)**
- PDF 뷰어에서 텍스트 드래그 선택이 가능
- 파일 크기가 상대적으로 작음 (이미지 없을 때 100KB 미만)
- 직접 텍스트 추출 가능

**이미지 PDF (스캔 PDF)**
- 텍스트 드래그 선택 불가
- 파일 크기가 큼 (페이지당 300-500KB 이상)
- OCR 처리가 선행 필요

## 검색 가능 PDF 추출 (pdfplumber)

\`\`\`python
import pdfplumber

results = []
with pdfplumber.open("document.pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        text = page.extract_text(
            x_tolerance=2,   # 수평 글자 간격 허용오차
            y_tolerance=3,   # 수직 줄 간격 허용오차
        )
        if text:
            results.append(f"--- 페이지 {i+1} ---\n{text}")

full_text = "\n\n".join(results)
\`\`\`

pdfplumber는 표(table) 추출도 지원한다. \`page.extract_table()\`로 PDF 내 표를 2차원 리스트로 변환할 수 있다.

## 이미지 PDF → OCR → 텍스트

\`\`\`python
import pytesseract
from pdf2image import convert_from_path

# PDF → 이미지 변환 (DPI 300 권장)
pages = convert_from_path("scanned.pdf", dpi=300)

texts = []
for page in pages:
    text = pytesseract.image_to_string(page, lang='kor+eng')
    texts.append(text)
\`\`\`

한국어 인식을 위해 \`tessdata-best/kor.traineddata\`를 설치해야 한다.

## 추출 후 정리 체크리스트

1. 연속 공백 → 단일 공백 (\`re.sub(r' +', ' ', text)\`)
2. 불필요한 줄바꿈 제거 (\`re.sub(r'\n{3,}', '\n\n', text)\`)
3. 머리글·바닥글 패턴 제거 (반복 등장하는 페이지 번호, 문서 제목)
4. 특수문자 정규화 (따옴표 통일, 대시 종류 통일)

## 실무 활용 사례

**사례 1: 계약서 데이터베이스 구축**
법무팀이 수백 건의 계약서 PDF를 검색 가능한 DB로 구축할 때, pdfplumber로 텍스트를 추출하고 정리 체크리스트를 적용하면 깨끗한 텍스트를 얻을 수 있다. 이후 Elasticsearch나 PostgreSQL full-text search에 색인하면 계약 조항을 키워드로 빠르게 검색할 수 있다.

**사례 2: 학술 논문 메타데이터 추출**
저널 논문 PDF 수백 편에서 제목, 저자, 초록을 자동으로 추출할 때, pdfplumber의 `extract_words()` 메서드로 텍스트 위치 정보를 함께 추출하면 각 섹션을 좌표 기반으로 구분할 수 있다. OCR이 필요한 스캔 논문은 Tesseract lang='kor+eng'로 처리한다.

**사례 3: 스캔 영수증 처리**
경비 정산용 스캔 영수증에서 금액, 날짜, 가맹점명을 추출할 때 Tesseract DPI 300 설정이 인식률을 크게 높인다. 추출 후 정규식으로 날짜 패턴(`\d{4}[-./]\d{2}[-./]\d{2}`)과 금액 패턴(`\d{1,3}(,\d{3})*원`)을 매칭하면 구조화된 데이터로 변환할 수 있다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "document-text-comparison-guide",
    title: "문서 비교 - 두 텍스트 파일의 차이점 찾는 방법",
    description: "계약서 개정본, 코드 리뷰, 논문 수정본 등 두 텍스트 파일의 차이점을 효율적으로 찾는 도구와 방법을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "텍스트 파일 비교 방법 - 두 문서 차이점 찾기",
    metaDescription: "두 문서 비교 방법: WinMerge(Windows), diff(Linux), 구글 닥스 버전 기록. Python difflib으로 프로그래밍 방식 비교. 계약서·논문 개정 비교에 활용.",
    targetKeywords: ["텍스트 파일 비교", "문서 비교 방법", "diff 도구"],
    category: "텍스트 편집",
    tags: ["문서비교", "버전관리", "텍스트도구"],
    aeoQuestion: "두 텍스트 문서의 차이점을 찾는 가장 쉬운 방법은 무엇인가요?",
    aeoAnswer: "Windows에서는 WinMerge(무료)가 가장 직관적입니다. 두 파일을 드래그해 열면 변경된 줄이 색으로 표시됩니다. 코딩 환경에서는 터미널에서 `diff file1.txt file2.txt` 명령어로 확인합니다. 온라인 도구로는 Diffchecker.com을 사용할 수 있으며, 구글 닥스에서는 파일 → 버전 기록으로 이전 버전과 현재 버전을 비교할 수 있습니다.",
    cta: { text: "텍스트 분량 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "텍스트 데이터 전처리", link: "/blog/text-data-preprocessing-guide/" },
      { text: "엑셀 텍스트 정리", link: "/blog/excel-text-cleanup-guide/" },
    ],
    outlinks: [
      { text: "WinMerge 공식 사이트", link: "https://winmerge.org", description: "무료 문서 비교 도구" },
    ],
    canonicalUrl: "https://texturb.com/blog/document-text-comparison-guide/",
    content: `계약서 3차 수정본과 4차 수정본의 차이를 찾아야 한다. 두 파일 모두 20페이지짜리 PDF다. 육안 비교는 오류를 놓치기 쉽고 시간이 많이 걸린다. 도구를 쓰면 수분 내에 정확한 변경점을 파악할 수 있다.

## 핵심 답변

Windows에서는 WinMerge(무료)가 가장 직관적입니다. 두 파일을 드래그해 열면 변경된 줄이 색으로 표시됩니다. 코딩 환경에서는 터미널에서 \`diff file1.txt file2.txt\` 명령어로 확인합니다. 온라인 도구로는 Diffchecker.com을 사용할 수 있으며, 구글 닥스에서는 파일 → 버전 기록으로 이전 버전과 현재 버전을 비교할 수 있습니다.

## 도구별 비교

| 도구 | 환경 | 장점 | 단점 |
|---|---|---|---|
| WinMerge | Windows | GUI 직관적, 폴더 비교 | Windows 전용 |
| diff (CLI) | Linux/Mac | 빠름, 스크립트 통합 | 출력 읽기 어려움 |
| 구글 닥스 버전 기록 | 웹 | 별도 설치 불필요 | 구글 닥스 문서만 |
| Diffchecker.com | 웹 | 설치 불필요 | 민감 문서 보안 주의 |
| VS Code 비교 기능 | 데스크톱 | 개발자 친화적 | 코드 중심 UI |

## Python difflib 프로그래밍 비교

\`\`\`python
import difflib

with open('v3.txt', 'r', encoding='utf-8') as f:
    old_text = f.readlines()

with open('v4.txt', 'r', encoding='utf-8') as f:
    new_text = f.readlines()

diff = difflib.unified_diff(
    old_text, new_text,
    fromfile='v3.txt',
    tofile='v4.txt',
    n=2  # 변경 줄 앞뒤 2줄 컨텍스트 표시
)

print(''.join(diff))
\`\`\`

HTML 형식으로 출력하려면 \`HtmlDiff\` 클래스를 사용한다. 브라우저에서 색으로 구분된 diff를 볼 수 있다.

## 계약서 비교 시 주의사항

법적 효력이 있는 문서를 비교할 때:
1. **PDF를 텍스트로 변환 시 오류** 발생 가능. 추출 텍스트 신뢰도 확인 필수
2. **숫자·날짜·금액 항목 우선 점검**: 숫자 하나 차이가 법적 의미를 바꿈
3. **폰트·서식 차이가 내용 비교를 방해**할 수 있으므로 순수 텍스트로 변환 후 비교

## 실무 활용 사례

**사례 1: 계약서 개정 이력 관리**
매 협상 단계마다 계약서를 별도 파일로 저장하고, Python difflib의 HtmlDiff 클래스로 버전 간 변경 사항을 HTML 리포트로 출력하면 법무팀이 변경 이력을 한눈에 확인할 수 있다. 숫자·금액이 포함된 줄은 별도 색상으로 강조 처리하면 중요 변경을 놓치지 않는다.

**사례 2: 번역 품질 검수**
원문과 번역문을 문장 단위로 분리한 후 각 번역 문장의 길이를 원문과 비교한다. 원문 대비 번역문이 50% 이상 길거나 짧은 경우를 diff로 표시하면 번역 누락·삽입 가능성이 있는 구간을 빠르게 찾을 수 있다.

**사례 3: 코드 리뷰 보조 도구**
개발팀이 비개발자 스테이크홀더에게 소프트웨어 변경 사항을 설명할 때, 코드 diff 대신 기능 설명 문서의 diff를 HTML 형식으로 공유하면 기술 배경 없이도 변경 내용을 파악할 수 있다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "text-encoding-decoding-basics",
    title: "텍스트 암호화·디코딩 기초 - Base64·ROT13·URL 인코딩",
    description: "개발자와 비개발자 모두를 위한 Base64, ROT13, URL 인코딩의 작동 원리와 실제 사용 사례를 쉽게 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "텍스트 인코딩·디코딩 기초 - Base64·ROT13·URL 완벽 설명",
    metaDescription: "Base64는 이진 데이터를 텍스트로 변환, ROT13은 각 글자를 13칸 이동, URL 인코딩은 특수문자를 %XX 형식으로 변환합니다. 실제 사용 사례와 디코딩 방법.",
    targetKeywords: ["Base64 인코딩", "URL 인코딩 디코딩", "텍스트 인코딩 기초"],
    category: "텍스트 편집",
    tags: ["인코딩", "Base64", "URL인코딩", "개발"],
    aeoQuestion: "Base64, ROT13, URL 인코딩의 차이는 무엇인가요?",
    aeoAnswer: "세 인코딩은 목적이 다릅니다. Base64는 이진 데이터(이미지, 파일)를 텍스트로 안전하게 전송하기 위한 인코딩입니다. ROT13은 각 알파벳을 13칸 이동시키는 단순 치환 방식으로 암호화가 아닌 간단한 난독화에 사용됩니다. URL 인코딩은 URL에 사용할 수 없는 특수문자(한글 포함)를 %XX 형식으로 변환합니다.",
    cta: { text: "텍스트 변환 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "Base64 인코딩 가이드", link: "/blog/base64-encoding-guide/" },
      { text: "URL 인코딩 디코딩 가이드", link: "/blog/url-encoding-decoding-guide/" },
    ],
    outlinks: [
      { text: "RFC 4648 - Base64 표준", link: "https://tools.ietf.org/html/rfc4648", description: "Base64 공식 표준 문서" },
    ],
    canonicalUrl: "https://texturb.com/blog/text-encoding-decoding-basics/",
    content: `이메일을 보냈더니 첨부 파일이 깨졌다는 연락을 받은 적이 있는가. 이메일 프로토콜(SMTP)은 원래 텍스트 전용으로 설계됐기 때문에 이진 파일을 직접 전송할 수 없다. 이 문제를 해결하기 위해 Base64가 탄생했다.

## 핵심 답변

세 인코딩은 목적이 다릅니다. Base64는 이진 데이터(이미지, 파일)를 텍스트로 안전하게 전송하기 위한 인코딩입니다. ROT13은 각 알파벳을 13칸 이동시키는 단순 치환 방식으로 암호화가 아닌 간단한 난독화에 사용됩니다. URL 인코딩은 URL에 사용할 수 없는 특수문자(한글 포함)를 %XX 형식으로 변환합니다.

## Base64: 이진 데이터 → 텍스트 변환

Base64는 이진 데이터를 A-Z, a-z, 0-9, +, /의 64개 문자로 표현한다. 변환하면 데이터 크기가 약 33% 증가하지만, 어떤 전송 채널에서도 안전하게 이동할 수 있다.

\`\`\`python
import base64

# 인코딩
original = "안녕하세요"
encoded = base64.b64encode(original.encode('utf-8'))
print(encoded)  # b'7JWI64WV7ZWY7IS47JqU'

# 디코딩
decoded = base64.b64decode(encoded).decode('utf-8')
print(decoded)  # 안녕하세요
\`\`\`

**실제 사용처**: 이메일 첨부파일, 이미지 Data URL(\`data:image/png;base64,...\`), JWT 토큰, API 인증 헤더

## ROT13: 알파벳 13칸 이동

A→N, B→O, Z→M처럼 알파벳을 13칸씩 이동시킨다. 영어 알파벳이 26개이므로 동일 함수를 두 번 적용하면 원문이 복원된다.

\`\`\`python
import codecs
encoded = codecs.encode("Hello World", 'rot_13')  # Uryyb Jbeyq
decoded = codecs.encode(encoded, 'rot_13')         # Hello World
\`\`\`

**실제 사용처**: 스포일러 숨기기, 퍼즐·게임, 초간단 난독화 (보안 목적은 부적합)

## URL 인코딩: 특수문자 → %XX

URL은 A-Z, a-z, 0-9, -, _, ., ~ 외 문자를 직접 포함할 수 없다. 한글, 공백, &, =, ? 등은 모두 %XX 형식으로 변환된다.

\`\`\`python
from urllib.parse import quote, unquote

encoded = quote("안녕 세계!")   # %EC%95%88%EB%85%95%20%EC%84%B8%EA%B3%84%21
decoded = unquote(encoded)      # 안녕 세계!
\`\`\`

공백은 \`%20\` 또는 \`+\`로 표현되는데, 폼 제출(application/x-www-form-urlencoded)에서는 \`+\`를 쓰고, URL 경로에서는 \`%20\`을 쓰는 것이 표준이다.

## 실무 활용 사례

**사례 1: API 개발에서 Base64 활용**
백엔드 API가 이미지를 JSON 응답에 포함해야 할 때, 이미지 파일을 Base64로 인코딩해 data:image/png;base64,... 형식으로 전달하면 별도 파일 서버 없이 텍스트 기반 API 응답에 이미지를 포함시킬 수 있다. 단, Base64는 원본 대비 약 33% 크기가 증가하므로 대용량 이미지에는 CDN URL 방식이 더 효율적이다.

**사례 2: 링크 공유 시 URL 인코딩 오류 방지**
한국어 블로그 포스트 URL에 한글 제목이 포함된 경우, 슬랙이나 이메일에서 링크가 깨지는 문제가 자주 발생한다. urllib.parse.quote() 함수로 한글 경로를 미리 인코딩하면 어떤 채널에서도 링크가 정상 작동한다. 반대로 이미 인코딩된 URL을 사람이 읽을 수 있도록 unquote()로 디코딩하면 경로 파악이 쉬워진다.

**사례 3: 스포일러 콘텐츠 숨기기 (ROT13)**
커뮤니티 게시판에서 영화 결말이나 게임 공략을 ROT13으로 인코딩해 올리면, 보고 싶은 사람만 디코딩해 읽을 수 있다. ROT13은 보안용이 아니므로 단순 스포일러 차단이나 퀴즈 정답 숨기기 목적으로만 적합하다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "korean-initial-consonant-guide",
    title: "한글 초성 추출 방법과 검색 최적화 활용",
    description: "유니코드 기반 한글 초성 추출 원리를 설명하고, 초성 검색 기능 구현 방법과 SEO·UX 활용 전략을 안내합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "한글 초성 추출 방법 - 유니코드 원리와 검색 활용",
    metaDescription: "한글 유니코드 구조: 가=44032. 초성 추출 공식 = (코드포인트-44032) ÷ 588. Python·JavaScript로 구현하는 초성 검색 기능과 자동완성 활용법.",
    targetKeywords: ["한글 초성 추출", "초성 검색 구현", "한글 유니코드 초성"],
    category: "텍스트 편집",
    tags: ["한글", "초성", "유니코드", "검색"],
    aeoQuestion: "한글 초성을 프로그래밍으로 추출하는 방법은 무엇인가요?",
    aeoAnswer: "한글은 유니코드 44032(가)부터 55203(힣)까지 배치되어 있습니다. 초성 추출 공식은 (유니코드 코드포인트 - 44032) ÷ 588의 정수 부분입니다. Python에서는 `(ord(char) - 44032) // 588`로 초성 인덱스를 구하고, 초성 리스트 `['ㄱ', 'ㄲ', 'ㄴ', ...]`에서 해당 인덱스를 참조하면 됩니다.",
    cta: { text: "한글 텍스트 분석하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "한영 타이핑 오류 변환", link: "/blog/korean-english-typo-conversion-guide/" },
      { text: "유니코드 특수문자 가이드", link: "/blog/unicode-special-chars-guide/" },
    ],
    outlinks: [
      { text: "유니코드 한글 블록 명세", link: "https://www.unicode.org/charts/PDF/UAC00.pdf", description: "유니코드 공식 한글 문자 표" },
    ],
    canonicalUrl: "https://texturb.com/blog/korean-initial-consonant-guide/",
    content: `네이버 모바일 앱에서 "ㄱ"만 입력해도 "국밥", "강남역", "경복궁"이 자동완성으로 뜬다. 이 초성 검색이 작동하려면 각 단어의 초성을 미리 추출해 인덱싱해야 한다. 많은 개발자가 복잡하게 생각하지만, 유니코드 수식 하나로 해결된다.

## 핵심 답변

한글은 유니코드 44032(가)부터 55203(힣)까지 배치되어 있습니다. 초성 추출 공식은 (유니코드 코드포인트 - 44032) ÷ 588의 정수 부분입니다. Python에서는 \`(ord(char) - 44032) // 588\`로 초성 인덱스를 구하고, 초성 리스트 \`['ㄱ', 'ㄲ', 'ㄴ', ...]\`에서 해당 인덱스를 참조하면 됩니다.

## 한글 유니코드 구조

한글 완성형 문자는 유니코드 코드포인트 44032(가)부터 55203(힣)까지 11,172자가 연속 배치되어 있다. 각 문자는 다음 수식으로 분해된다.

\`\`\`
코드포인트 = 44032 + (초성 인덱스 × 588) + (중성 인덱스 × 28) + 종성 인덱스
\`\`\`

초성은 19개, 중성 21개, 종성 28개(받침 없음 포함)로 19 × 21 × 28 = 11,172자다.

## 초성 추출 코드

\`\`\`python
CHOSUNG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ',
           'ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']

def get_chosung(char):
    code = ord(char)
    if 44032 <= code <= 55203:
        return CHOSUNG[(code - 44032) // 588]
    return char  # 한글이 아닌 경우 그대로 반환

def text_to_chosung(text):
    return ''.join(get_chosung(c) for c in text)

# 사용 예
print(text_to_chosung("서울특별시"))  # ㅅㅇㅌㅂㅅ
print(text_to_chosung("텍스터브"))    # ㅌㅅㅌㅂ
\`\`\`

## 초성 검색 구현

\`\`\`python
def search_by_chosung(query, items):
    # query가 초성만으로 구성된 경우
    if all(c in 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ' for c in query):
        return [item for item in items
                if text_to_chosung(item).startswith(query)]
    # 일반 검색
    return [item for item in items if query in item]
\`\`\`

## 실무 활용 사례

- **자동완성**: 검색창에 초성 입력 시 후보 목록 표시
- **정렬**: 가나다 순 정렬 시 초성 기준으로 그룹화
- **색인(Index)**: 전화번호부 또는 사전 앱의 인덱스 탭 구성

초성 검색 기능을 실제 서비스에 적용하는 구체적인 사례는 다음과 같다.

**사례 1: 사내 직원 검색 시스템**
임직원 수가 수백 명 이상인 조직에서 이름 초성 검색을 지원하면 "ㅈㅅ"만 입력해도 "정수민", "조성준", "장수영" 같은 후보가 표시된다. 영문 이름과 혼합된 경우에도 한글 이름 컬럼만 초성 색인을 적용하면 충분하다.

**사례 2: 상품 카테고리 자동완성**
쇼핑몰에서 상품 검색 시 "ㄴㅅ"를 입력하면 "나이키 신발", "남성 수영복" 같은 카테고리가 후보로 표시된다. 상품명 DB에 초성 컬럼을 별도로 추가해 인덱스를 걸어두면 실시간 자동완성이 가능하다.

**사례 3: 한자·영문 혼재 데이터 정렬**
한자나 영문이 섞인 조직 목록을 가나다순으로 정렬할 때, 한글 부분의 초성만 추출해 정렬 키로 사용하면 한글·비한글 항목을 일관되게 정렬할 수 있다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "korean-english-typo-conversion-guide",
    title: "한영 타이핑 오류 자동 변환 방법",
    description: "한글 모드에서 영문을 입력하거나 영문 모드에서 한글을 입력할 때 발생하는 타이핑 오류를 자동으로 변환하는 원리와 도구를 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "한영 타이핑 오류 자동 변환 - 원리와 도구 가이드",
    metaDescription: "한/영 전환 타이핑 오류 변환: 두벌식 키맵 기반. 'dlTsmrh'→'감사해'. Python 한영 변환 라이브러리와 무료 온라인 도구 안내.",
    targetKeywords: ["한영 타이핑 오류 변환", "한글 영문 잘못 입력", "두벌식 오타 수정"],
    category: "텍스트 편집",
    tags: ["한영전환", "타이핑오류", "텍스트변환"],
    aeoQuestion: "한영 전환 실수로 잘못 입력된 텍스트를 자동으로 변환할 수 있나요?",
    aeoAnswer: "네, 가능합니다. 한글 두벌식 키보드는 각 키가 영문 자판과 일대일로 대응됩니다. 예를 들어 영문 모드에서 입력한 'rlarksmrh'를 두벌식 키맵으로 역변환하면 '가나다라'가 됩니다. Python에서는 hangul-jamo 라이브러리나 직접 작성한 키맵 딕셔너리로 변환할 수 있습니다. 온라인 도구는 'Korean to English typo converter'로 검색하면 다수 이용 가능합니다.",
    cta: { text: "텍스트 변환 도구 사용하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "한글 초성 추출 방법", link: "/blog/korean-initial-consonant-guide/" },
      { text: "유니코드 특수문자 가이드", link: "/blog/unicode-special-chars-guide/" },
    ],
    outlinks: [
      { text: "한글 두벌식 자판 배열", link: "https://ko.wikipedia.org/wiki/두벌식_자판", description: "위키피디아 두벌식 자판" },
    ],
    canonicalUrl: "https://texturb.com/blog/korean-english-typo-conversion-guide/",
    content: `"dkssudgktpdy"를 보고 무슨 뜻인지 바로 아는 사람이 있다. 두벌식 키보드로 한글 모드인 줄 모르고 영문 입력한 결과다. d=ㅇ, k=ㅏ, s=ㄴ... 역변환하면 "안녕하세요"가 된다. 한국 인터넷 문화에서 이 오류는 너무 흔해 별도 변환 도구가 필요할 정도다.

## 핵심 답변

네, 가능합니다. 한글 두벌식 키보드는 각 키가 영문 자판과 일대일로 대응됩니다. 예를 들어 영문 모드에서 입력한 'rlarksmrh'를 두벌식 키맵으로 역변환하면 '가나다라'가 됩니다. Python에서는 hangul-jamo 라이브러리나 직접 작성한 키맵 딕셔너리로 변환할 수 있습니다. 온라인 도구는 'Korean to English typo converter'로 검색하면 다수 이용 가능합니다.

## 두벌식 키맵 대응표

한글 두벌식과 영문 QWERTY의 키 대응을 이해하면 변환이 간단해진다.

| 영문 키 | 한글(두벌식) | 영문 키 | 한글(두벌식) |
|---|---|---|---|
| q | ㅂ | a | ㅁ |
| w | ㅈ | s | ㄴ |
| e | ㄷ | d | ㅇ |
| r | ㄱ | f | ㄹ |
| t | ㅅ | g | ㅎ |
| y | ㅛ | h | ㅗ |
| u | ㅕ | j | ㅓ |
| i | ㅑ | k | ㅏ |
| o | ㅐ | l | ㅣ |
| p | ㅔ | | |

## Python 변환 구현

\`\`\`python
ENG_TO_KOR = {
    'q': 'ㅂ', 'w': 'ㅈ', 'e': 'ㄷ', 'r': 'ㄱ', 't': 'ㅅ',
    'y': 'ㅛ', 'u': 'ㅕ', 'i': 'ㅑ', 'o': 'ㅐ', 'p': 'ㅔ',
    'a': 'ㅁ', 's': 'ㄴ', 'd': 'ㅇ', 'f': 'ㄹ', 'g': 'ㅎ',
    'h': 'ㅗ', 'j': 'ㅓ', 'k': 'ㅏ', 'l': 'ㅣ',
    'z': 'ㅋ', 'x': 'ㅌ', 'c': 'ㅊ', 'v': 'ㅍ',
    'b': 'ㅠ', 'n': 'ㅜ', 'm': 'ㅡ'
}

def eng_to_kor_jamo(text):
    """영문 오타를 한글 자모로 변환 (자소 조합은 별도 처리 필요)"""
    return ''.join(ENG_TO_KOR.get(c.lower(), c) for c in text)
\`\`\`

자모 분리 상태에서 완성형 한글로 조합하려면 \`jamo\` 라이브러리를 추가로 사용한다.

## 실용 활용 사례

- **검색 엔진 오타 수정**: 사용자가 잘못 입력한 검색어를 자동 보정
- **채팅 앱 오타 감지**: 한영 전환 실수를 실시간으로 감지해 변환 제안
- **고객 서비스**: CS 문의 텍스트에서 한영 오타 자동 수정 전처리

## 실무 활용 사례

**사례 1: 고객 CS 문의 자동 분류**
한국 쇼핑몰 CS 채널에는 "dkfFltmakssk rkxkqtWo"처럼 한영 전환 실수가 포함된 문의가 종종 들어온다. 변환 로직을 전처리 파이프라인에 추가하면 오타를 포함한 문의도 올바른 카테고리로 분류할 수 있어 CS 자동화의 정확도를 높인다.

**사례 2: 사내 검색 시스템 오타 허용**
사내 문서 검색 시스템에서 직원이 한영 전환 실수로 검색어를 입력해도 변환 후 다시 검색하는 폴백 로직을 추가하면 "No results found" 빈 화면 대신 의도한 검색 결과가 나타난다. 사용자 경험이 크게 개선된다.

**사례 3: 소셜 미디어 모니터링 전처리**
브랜드 언급 모니터링 시스템에서 한영 오타가 포함된 게시물(예: "dkssudgktpdy rlakrjqqo")도 정상 한국어로 변환한 후 감성 분석에 넣으면 브랜드 언급 감지율이 높아진다. 두벌식 오타를 수집 단계에서 바로 보정하는 것이 가장 효율적이다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
  {
    slug: "text-line-count-guide",
    title: "텍스트 줄 수 기준 - 화면 표시 vs 인쇄 분량 차이",
    description: "같은 텍스트가 화면과 인쇄물에서 줄 수가 달라지는 이유와, 문서 유형별 적정 줄 수 기준을 설명합니다.",
    publishedAt: "2026-05-16",
    metaTitle: "텍스트 줄 수 기준 - 화면 표시와 인쇄 분량 비교",
    metaDescription: "A4 인쇄 기준 한 줄=40-45자, 한 페이지=25-30줄. 웹 화면 한 줄=60-80자(1080px 기준). 화면과 인쇄물의 줄 수 차이가 생기는 이유와 대응 방법.",
    targetKeywords: ["텍스트 줄 수 기준", "인쇄 분량 계산", "화면 줄 수 차이"],
    category: "텍스트 편집",
    tags: ["줄수", "인쇄", "레이아웃", "텍스트분량"],
    aeoQuestion: "텍스트 줄 수가 화면과 인쇄물에서 다른 이유는 무엇인가요?",
    aeoAnswer: "화면과 인쇄물의 줄 수가 다른 주요 이유는 폰트 크기, 줄 간격, 여백, 컨테이너 폭이 서로 다르기 때문입니다. A4 인쇄(12pt 폰트, 1.5배 줄 간격, 기본 여백)는 한 줄에 40-45자, 한 페이지에 25-30줄이 들어갑니다. 웹 화면(1080px 컨테이너, 16px 폰트)은 한 줄에 60-80자가 들어가므로 같은 텍스트도 줄 수가 적게 표시됩니다.",
    cta: { text: "텍스트 글자수·줄 수 확인하기", link: "/tools/char-counter/" },
    inlinks: [
      { text: "글자수 세기", link: "/tools/char-counter/" },
      { text: "어린이책 문장 길이 기준", link: "/blog/childrens-book-sentence-length/" },
    ],
    outlinks: [
      { text: "W3C 텍스트 가독성 가이드라인", link: "https://www.w3.org/TR/WCAG21/", description: "웹 접근성 가이드라인" },
    ],
    canonicalUrl: "https://texturb.com/blog/text-line-count-guide/",
    content: `기자가 원고 80줄을 제출했는데 편집장이 "이거 인쇄하면 40줄밖에 안 되잖아요"라고 한다. 둘 다 맞는 말이다. 화면에서의 줄 수와 인쇄물의 줄 수는 같은 텍스트라도 크게 다르다.

## 핵심 답변

화면과 인쇄물의 줄 수가 다른 주요 이유는 폰트 크기, 줄 간격, 여백, 컨테이너 폭이 서로 다르기 때문입니다. A4 인쇄(12pt 폰트, 1.5배 줄 간격, 기본 여백)는 한 줄에 40-45자, 한 페이지에 25-30줄이 들어갑니다. 웹 화면(1080px 컨테이너, 16px 폰트)은 한 줄에 60-80자가 들어가므로 같은 텍스트도 줄 수가 적게 표시됩니다.

## 줄 수를 결정하는 4가지 요소

1. **폰트 크기**: 10pt와 12pt는 같은 공간에 담을 수 있는 글자수가 다르다
2. **줄 간격(Line-height)**: 1.0배와 1.5배는 같은 줄 수라도 세로 공간 차이가 크다
3. **컨테이너 폭**: A4 여백 제외 실제 텍스트 영역 폭 vs 웹 컨테이너 폭
4. **단어 줄바꿈**: 단어 중간에서 줄바꿈하는지 여부

## 인쇄 기준표 (A4, 세로)

| 폰트 크기 | 줄 간격 | 한 줄 글자수(한글) | 한 페이지 줄 수 |
|---|---|---|---|
| 10pt | 1.0배 | 48-52자 | 35-38줄 |
| 10pt | 1.5배 | 48-52자 | 24-26줄 |
| 11pt | 1.5배 | 44-48자 | 22-24줄 |
| 12pt | 1.5배 | 40-44자 | 20-22줄 |
| 12pt | 2.0배 | 40-44자 | 16-18줄 |

한글 A4 기본 문서(HWP 기본 설정): 10pt, 줄간격 160%, 상하여백 20mm, 좌우여백 25mm → 한 줄 약 40자, 한 페이지 약 30줄.

## 웹 화면 기준표

| 화면 폭 | 폰트 크기 | 한 줄 글자수(한글) |
|---|---|---|
| 375px (모바일) | 16px | 20-28자 |
| 768px (태블릿) | 16px | 40-55자 |
| 1080px (PC) | 16px | 60-80자 |
| 1440px (와이드) | 16px | 80-100자 |

WCAG 2.1 가이드라인은 웹 텍스트 한 줄의 최적 길이를 45-75자(영문 기준)로 제시한다. 한국어는 이보다 다소 짧은 35-60자가 가독성 최적 구간이다.

## 실무 적용: 원고지 → 인쇄 → 웹 변환

- 원고지 200자(20×10) = A4 약 0.5페이지(12pt) = 웹 약 3-4단락
- 원고지 1000자 = A4 약 2-3페이지 = 웹 약 15-20단락
- 원고지 4000자 = A4 약 8-10페이지 = 일반 블로그 포스트 1개 분량

[텍스터브 글자수 세기](/tools/char-counter/) 도구는 입력한 텍스트의 글자수와 줄 수를 실시간으로 표시한다. 목표 인쇄 분량에 맞는 원고 분량을 계산할 때 활용할 수 있다.

## 실무 활용 사례

**사례 1: 출판 원고 분량 사전 검토**
출판사에 원고를 제출하기 전에 인쇄 분량을 정확히 파악해야 할 때, 텍스터브 글자수 도구로 글자수를 확인하고 위 기준표로 A4 페이지 수를 역산하면 편집부 조율이 수월해진다. 예를 들어 "10만 자 원고"는 A4 12pt 기준으로 약 100페이지 분량으로 환산된다.

**사례 2: 방송 원고 시간 계산**
라디오·팟캐스트 원고를 작성할 때 분당 발화 속도(한국어 평균 300-350자/분)를 기준으로 원고 글자수를 시간으로 환산할 수 있다. 줄 수 확인 후 "이 원고는 약 5분 분량"임을 미리 검토하면 방송 시간에 맞게 조정하기 편하다.

**사례 3: 자막 파일 분량 예측**
영상 자막을 제작할 때 원고 줄 수와 글자수를 알면 자막 타이밍 작업의 총 작업량을 미리 예측할 수 있다. 자막 1줄 = 약 1.5-3초 분량이므로, 줄 수 × 평균 자막 지속 시간으로 영상 총 길이를 역산할 수 있다.

## 마무리

이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.`,
  },
];
