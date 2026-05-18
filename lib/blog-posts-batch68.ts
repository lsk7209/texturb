import { BlogPost } from "./blog-registry";

export const BLOG_POSTS_BATCH68: BlogPost[] = [
  {
    id: "korean-synonym-urimalsaem-api-guide",
    slug: "korean-synonym-urimalsaem-api-guide",
    title: "한국어 동의어·유의어 처리 — 표준국어대사전 API 활용 가이드",
    excerpt: "한국어 텍스트에서 동의어와 유의어를 처리하는 방법과 국립국어원 표준국어대사전 API 활용법을 안내합니다. 공공데이터포털 API 키 발급부터 유의어 조회 구현까지 설명합니다.",
    content: `<h2>한국어 동의어·유의어 처리의 필요성</h2>
<p>동의어(同義語)와 유의어(類義語)는 한국어 텍스트 처리에서 중요한 개념입니다. 동의어는 의미가 완전히 같은 단어, 유의어는 의미가 유사하지만 뉘앙스가 다른 단어입니다. 검색 엔진에서 '자동차'를 검색했을 때 '차', '승용차', '자가용'도 함께 검색되려면 동의어·유의어 처리가 필요합니다. 텍스트 분류, 감성 분석, 데이터 증강에서도 유의어를 활용해 어휘 다양성을 높입니다. 국립국어원이 운영하는 <strong>표준국어대사전</strong>은 1999년 초판 발행 이후 현재 약 <strong>51만여 어휘</strong>를 수록하고 있으며, 유의어 정보를 포함한 API를 공개하고 있습니다.</p>

<h2>표준국어대사전 Open API 소개</h2>
<p>국립국어원은 표준국어대사전과 한국어기초사전의 데이터를 공공데이터포털(data.go.kr)을 통해 Open API로 제공합니다. API를 통해 단어 검색, 뜻풀이 조회, 유의어·반의어·상위어·하위어 정보를 조회할 수 있습니다. API 사용을 위해서는 공공데이터포털에서 인증키를 발급받아야 합니다. 표준국어대사전 API는 REST 방식으로 JSON 또는 XML 형태의 응답을 반환합니다. 한국어기초사전(krdict.korean.go.kr)도 별도의 Open API를 운영하며, 외국어 번역 대응어 정보도 제공합니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #4a6cf7;padding:16px;margin:20px 0;">
<strong>핵심 답변:</strong> 한국어 동의어·유의어 처리의 공식 출처는 국립국어원 표준국어대사전 Open API(공공데이터포털 경유)이며, 약 51만 어휘의 유의어·반의어 정보를 무료로 조회할 수 있습니다.
</div>

<h2>표준국어대사전 API 호출 예시</h2>
<p>Python으로 표준국어대사전 API를 호출하는 기본 예시입니다. 기본 요청 URL은 <code>https://opendict.korean.go.kr/api/search</code>이며, 파라미터로 <code>key</code>(인증키), <code>q</code>(검색어), <code>req_type</code>(json/xml), <code>part</code>(표제어/뜻풀이 등)를 전달합니다. <code>requests.get(url, params={'key': API_KEY, 'q': '자동차', 'req_type': 'json'})</code>로 호출하면 '자동차'의 뜻풀이와 유의어 정보가 JSON으로 반환됩니다. 응답 JSON의 <code>channel.item[].sense.synonym</code> 필드에서 유의어 목록을 추출할 수 있습니다. 하루 호출 횟수는 인증 등급에 따라 제한되므로 자주 사용하는 단어는 로컬 캐싱을 권장합니다.</p>

<h2>유의어 사전 구축과 활용</h2>
<p>API를 통해 수집한 유의어 데이터를 로컬 사전으로 구축하면 오프라인 처리와 빠른 조회가 가능합니다. Python의 딕셔너리 구조로 <code>{'자동차': ['차', '승용차', '자가용', '오토']}</code>형태로 저장합니다. 검색 엔진 동의어 확장에 활용할 때는 Elasticsearch의 <code>synonym</code> 토큰 필터에 유의어 목록을 등록합니다. 텍스트 데이터 증강에서는 원문 단어를 무작위로 유의어로 교체해 학습 데이터를 다양화합니다. 단, 문체와 격식 차이(예: '먹다'↔'드시다')를 고려하지 않으면 문장 품질이 저하될 수 있습니다.</p>

<h2>soynlp를 활용한 유의어 추출</h2>
<p>사전에 없는 신조어나 전문 용어의 유의어는 말뭉치 기반으로 추출해야 합니다. <strong>soynlp</strong>는 비지도 학습 기반의 한국어 NLP 라이브러리로 어휘 유사도를 계산할 수 있습니다. Word2Vec이나 fastText 모델을 한국어 말뭉치로 학습하면 분산 표현(word embedding)을 통해 유사 단어를 찾을 수 있습니다. <code>model.most_similar('자동차', topn=10)</code>은 '자동차'와 가장 유사한 단어 10개를 반환합니다. 이 방법은 사전에 없는 인터넷 신조어나 도메인 특화 용어의 유사어 발견에 특히 유용합니다.</p>

<h2>텍스터브에서 유의어 처리 관련 글자수 확인</h2>
<p>동의어·유의어 치환 시스템에서 단어 교체 전후의 텍스트 분량 변화를 파악하는 것이 중요합니다. '자동차(4자)'를 '차(1자)'로 치환하면 글자수가 줄어들고, '승용차(3자)'로 치환하면 분량이 달라집니다. 텍스터브(texturb.com)의 글자수 세기 도구를 활용하면 유의어 치환 전후의 분량 변화를 빠르게 확인할 수 있습니다. 특히 분량 제한이 있는 메타 디스크립션(최대 160자) 또는 SNS 게시물 작성 시 유의어 치환 후 분량 재확인이 필수입니다.</p>`,
    publishedAt: "2026-09-12T22:00:00+09:00",
    tags: ["동의어", "유의어", "표준국어대사전", "국립국어원", "NLP API"],
    category: "텍스트 도구",
    author: "텍스터브 에디터"
  },
  {
    id: "korean-text-similarity-cosine-guide",
    slug: "korean-text-similarity-cosine-guide",
    title: "텍스트 유사도 계산 — 한국어 코사인 유사도 실무 가이드",
    excerpt: "한국어 텍스트 유사도를 코사인 유사도로 계산하는 방법을 안내합니다. TF-IDF 벡터화, 형태소 분석 전처리, scikit-learn 구현 예시와 실전 활용 사례를 설명합니다.",
    content: `<h2>텍스트 유사도의 정의와 활용</h2>
<p>텍스트 유사도(Text Similarity)는 두 텍스트가 얼마나 유사한지를 수치로 표현하는 척도입니다. 중복 문서 감지, 표절 검사, 유사 기사 클러스터링, 챗봇 질의 매칭 등에 활용됩니다. 한국어 텍스트 유사도 계산에서 가장 널리 사용되는 방법은 <strong>코사인 유사도(Cosine Similarity)</strong>입니다. 코사인 유사도는 두 벡터 사이의 각도의 코사인 값으로, 0~1 범위(방향이 같을수록 1에 가깝습니다)를 가집니다. 벡터의 크기가 아닌 방향만 비교하므로 문서 길이 차이에 덜 민감합니다.</p>

<h2>한국어 텍스트 전처리 — 형태소 분석</h2>
<p>코사인 유사도 계산 전 한국어 특화 전처리가 필요합니다. 영어는 공백으로 단어를 분리하지만, 한국어는 형태소 분석이 필요합니다. 형태소 분석 없이 음절 단위로 처리하면 '먹었다'와 '먹겠다'의 '먹'이 같은 토큰으로 인식되지 않아 유사도가 낮아집니다. KoNLPy의 Okt로 명사만 추출하는 전처리 예시: <code>from konlpy.tag import Okt; okt = Okt(); nouns = okt.nouns(text)</code>로 명사 리스트를 얻습니다. 명사 중심 전처리가 일반적이지만, 동사·형용사가 중요한 감성 분석 텍스트에서는 모든 품사를 포함해야 합니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #4a6cf7;padding:16px;margin:20px 0;">
<strong>핵심 답변:</strong> 한국어 코사인 유사도 계산의 표준 파이프라인은 형태소 분석(KoNLPy) → TF-IDF 벡터화(scikit-learn) → 코사인 유사도 계산이며, 유사도 0.5 이상이면 관련 문서로 분류하는 것이 일반적입니다.
</div>

<h2>TF-IDF 벡터화와 코사인 유사도 구현</h2>
<p>scikit-learn을 활용한 한국어 TF-IDF 코사인 유사도 구현 예시입니다. <code>from sklearn.feature_extraction.text import TfidfVectorizer; from sklearn.metrics.pairwise import cosine_similarity</code>를 임포트합니다. 형태소 분석 후 토큰을 공백으로 연결한 문자열 리스트를 TfidfVectorizer에 입력합니다. <code>vectorizer = TfidfVectorizer(); tfidf_matrix = vectorizer.fit_transform(texts)</code>로 TF-IDF 행렬을 생성합니다. <code>cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])</code>로 두 문서 간 유사도를 계산합니다. TF-IDF의 IDF는 희귀 단어에 높은 가중치를 부여해 흔한 조사나 접속사의 영향을 줄여줍니다.</p>

<h2>코사인 유사도 임계값 설정</h2>
<p>코사인 유사도 점수 해석 기준을 정리합니다. <strong>0.9 이상</strong>: 거의 동일한 텍스트, 중복 문서로 처리합니다. <strong>0.7~0.9</strong>: 매우 유사한 문서, 동일 주제의 다른 기사나 요약문 관계입니다. <strong>0.5~0.7</strong>: 관련 문서, 같은 카테고리의 글이나 유사 질문으로 분류합니다. <strong>0.3~0.5</strong>: 약한 관련성, 주제가 부분적으로 겹치는 수준입니다. <strong>0.3 미만</strong>: 관련 없는 텍스트입니다. 단, 임계값은 도메인과 전처리 방식에 따라 달라지므로 실제 데이터로 보정이 필요합니다. 국립국어원 현대 한국어 말뭉치를 기준으로 테스트하면 도메인 독립적 기준치를 얻을 수 있습니다.</p>

<h2>Jaccard 유사도와의 비교</h2>
<p>코사인 유사도 외에 <strong>Jaccard 유사도</strong>도 한국어 텍스트 유사도 계산에 사용됩니다. Jaccard 유사도는 두 집합의 교집합을 합집합으로 나눈 값으로, 단어 빈도가 아닌 단어 출현 여부만 고려합니다. 공식: <code>|A ∩ B| / |A ∪ B|</code>. 짧은 텍스트(트윗, 제목)에서는 Jaccard가 유리하고, 긴 문서에서는 TF-IDF 기반 코사인 유사도가 더 의미 있는 결과를 줍니다. 두 방법을 앙상블하면 단독 방식보다 안정적인 유사도 결과를 얻을 수 있습니다.</p>

<h2>텍스터브에서 유사도 전처리 활용</h2>
<p>텍스트 유사도 계산 전 비교 대상 텍스트의 분량을 균일하게 맞추면 더 안정적인 결과를 얻을 수 있습니다. 텍스터브(texturb.com)의 글자수 세기 도구를 활용해 비교할 두 텍스트의 분량을 확인하고, 극단적인 길이 차이(10배 이상)가 있으면 긴 텍스트를 요약하거나 청크로 분할해 처리하는 것이 권장됩니다. 균형 잡힌 길이의 텍스트 쌍이 코사인 유사도 기반 비교에서 더 일관된 결과를 보여줍니다.</p>`,
    publishedAt: "2026-09-13T03:00:00+09:00",
    tags: ["텍스트유사도", "코사인유사도", "TF-IDF", "한국어NLP", "scikit-learn"],
    category: "텍스트 도구",
    author: "텍스터브 에디터"
  },
  {
    id: "korean-text-clustering-document-grouping-guide",
    slug: "korean-text-clustering-document-grouping-guide",
    title: "텍스트 클러스터링 입문 — 한국어 문서 그룹화 가이드",
    excerpt: "한국어 문서를 자동으로 주제별로 그룹화하는 클러스터링 방법을 안내합니다. K-Means, DBSCAN 알고리즘 비교와 한국어 전처리 파이프라인, 클러스터 시각화 방법을 설명합니다.",
    content: `<h2>텍스트 클러스터링이란</h2>
<p>텍스트 클러스터링(Text Clustering)은 레이블이 없는 문서 집합을 유사도를 기준으로 자동으로 그룹화하는 비지도 학습 기법입니다. 뉴스 기사 자동 분류, 고객 피드백 주제 발견, 학술 논문 군집화 등에 활용됩니다. 클러스터링과 분류(Classification)의 차이는 레이블 필요 여부입니다. 분류는 사전에 정의된 카테고리로 나누는 지도 학습이고, 클러스터링은 레이블 없이 데이터 내 패턴을 스스로 찾는 비지도 학습입니다. 한국어 텍스트 클러스터링은 형태소 분석 기반 전처리가 선행되어야 합니다.</p>

<h2>K-Means 클러스터링 — 한국어 문서 적용</h2>
<p>K-Means는 가장 널리 사용되는 클러스터링 알고리즘입니다. 사용자가 클러스터 수(k)를 사전에 지정하고, 각 문서를 가장 가까운 중심점(centroid)에 할당합니다. 한국어 문서 K-Means 적용 절차는 다음과 같습니다. ① 형태소 분석으로 명사 추출, ② TF-IDF 또는 문장 임베딩으로 벡터화, ③ <code>from sklearn.cluster import KMeans; km = KMeans(n_clusters=10); km.fit(tfidf_matrix)</code>로 10개 클러스터 생성, ④ <code>km.labels_</code>로 각 문서의 클러스터 할당 확인. 최적 클러스터 수는 엘보우 방법(Elbow Method)이나 실루엣 점수(Silhouette Score)로 결정합니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #4a6cf7;padding:16px;margin:20px 0;">
<strong>핵심 답변:</strong> 한국어 뉴스·게시글 클러스터링에는 K-Means가 속도와 안정성에서 유리하며, 클러스터 수를 모를 때는 DBSCAN이나 계층적 클러스터링을 먼저 시도해 군집 구조를 파악합니다.
</div>

<h2>DBSCAN — 노이즈에 강한 밀도 기반 클러스터링</h2>
<p>DBSCAN(Density-Based Spatial Clustering of Applications with Noise)은 밀도가 높은 영역을 클러스터로 인식하고, 밀도가 낮은 점을 노이즈로 처리합니다. 클러스터 수를 사전에 지정하지 않아도 되며, 불규칙한 모양의 클러스터도 찾을 수 있습니다. 한국어 인터넷 커뮤니티 게시글처럼 주제가 다양하고 노이즈가 많은 텍스트 데이터에 적합합니다. 파라미터 <code>eps</code>(반경)와 <code>min_samples</code>(최소 포인트 수) 조정이 필요합니다. 고차원 TF-IDF 벡터에서는 차원 저감(PCA, UMAP) 후 적용하는 것이 성능에 유리합니다.</p>

<h2>클러스터 품질 평가 지표</h2>
<p>클러스터링 결과의 품질을 평가하는 주요 지표입니다. <strong>실루엣 점수(Silhouette Score)</strong>: -1~1 범위로 클러스터 내 응집도와 클러스터 간 분리도를 측정합니다. 0.5 이상이면 양호한 클러스터링입니다. <strong>Calinski-Harabasz Index</strong>: 클러스터 내 분산 대비 클러스터 간 분산 비율로, 높을수록 좋습니다. <strong>Davies-Bouldin Index</strong>: 낮을수록 좋은 클러스터링입니다. 한국어 뉴스 기사 클러스터링 연구(KAIST NLP 그룹)에서는 TF-IDF 기반 K-Means 10개 클러스터에서 평균 실루엣 점수 0.4~0.6을 달성하는 것으로 보고됩니다.</p>

<h2>클러스터 시각화 — t-SNE·UMAP</h2>
<p>고차원 텍스트 벡터를 2차원으로 줄여 클러스터를 시각화하는 방법입니다. <strong>t-SNE</strong>는 지역적 구조 보존에 강하며 소규모 데이터셋(수천 건)에 적합합니다. <strong>UMAP</strong>은 t-SNE보다 빠르고 전역적 구조도 보존합니다. matplotlib의 scatter 플롯으로 클러스터별 색상을 다르게 표시합니다. 시각화로 클러스터가 명확히 분리되는지, 겹치는 클러스터가 있는지 직관적으로 확인할 수 있습니다.</p>

<h2>클러스터링 결과와 글자수 분석</h2>
<p>클러스터링 분석 결과에서 각 클러스터의 문서 평균 글자수를 확인하면 군집 특성을 이해하는 데 도움이 됩니다. 예를 들어 짧은 문서 클러스터(100자 미만)는 단순 공지나 댓글일 가능성이 높고, 긴 문서 클러스터(2,000자 이상)는 심층 분석 기사일 가능성이 높습니다. 텍스터브(texturb.com)의 글자수 세기 도구로 클러스터링 대상 텍스트의 평균 분량을 사전에 확인하면 전처리 전략(요약 필요 여부, 청크 분할 필요 여부)을 결정하는 데 유용합니다.</p>`,
    publishedAt: "2026-09-13T08:00:00+09:00",
    tags: ["텍스트클러스터링", "K-Means", "DBSCAN", "한국어NLP", "문서그룹화"],
    category: "텍스트 도구",
    author: "텍스터브 에디터"
  },
  {
    id: "korean-keyword-extraction-textrank-guide",
    slug: "korean-keyword-extraction-textrank-guide",
    title: "한국어 키워드 추출 — TextRank·KR-WordRank 비교 가이드",
    excerpt: "한국어 텍스트에서 핵심 키워드를 자동 추출하는 TextRank와 KR-WordRank 알고리즘을 비교 분석합니다. 구현 방법, 성능 차이, 실전 활용 사례를 안내합니다.",
    content: `<h2>한국어 키워드 추출의 중요성</h2>
<p>키워드 추출(Keyword Extraction)은 텍스트에서 핵심 내용을 대표하는 단어나 구절을 자동으로 선별하는 NLP 기술입니다. SEO 최적화, 뉴스 태깅, 논문 색인, 콘텐츠 추천 시스템에 널리 활용됩니다. 한국어 키워드 추출은 조사·어미를 처리해야 하는 어려움이 있어 영어보다 전처리 비용이 높습니다. 주요 키워드 추출 방법으로는 TF-IDF 기반, TextRank 기반, KR-WordRank 기반이 있습니다. 각 방법은 말뭉치 필요 여부, 처리 속도, 신조어 대응 능력에서 차이가 있습니다.</p>

<h2>TextRank — 그래프 기반 키워드 추출</h2>
<p>TextRank는 Google PageRank를 텍스트에 적용한 알고리즘입니다. 단어 간 공기어(co-occurrence) 관계를 그래프로 구성하고, 많은 단어와 연결된 단어에 높은 점수를 부여합니다. 단일 문서에서 말뭉치 없이도 동작하는 것이 장점입니다. Python의 <code>konlpy</code> + <code>networkx</code>를 사용해 구현하거나, <code>summa</code> 라이브러리의 <code>keywords()</code> 함수를 활용합니다. 한국어 TextRank는 형태소 분석으로 명사를 추출한 뒤 단어 공기 그래프를 구성합니다. 단어 윈도우(기본값 2~5단어) 내에서 같이 등장하는 단어쌍을 엣지로 연결합니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #4a6cf7;padding:16px;margin:20px 0;">
<strong>핵심 답변:</strong> TextRank는 단일 문서에서 말뭉치 없이 즉시 사용 가능하고, KR-WordRank는 대량 말뭉치에서 형태소 분석 없이 도메인 특화 신조어 키워드도 추출합니다.
</div>

<h2>KR-WordRank — 한국어 특화 비지도 키워드 추출</h2>
<p>KR-WordRank는 김현중이 개발한 한국어 특화 키워드 추출 라이브러리로, soynlp 패키지에 포함되어 있습니다. TextRank와 달리 형태소 분석 없이 어절 경계 통계로 단어를 분리하고, PageRank 유사 알고리즘으로 키워드를 추출합니다. 도메인 특화 신조어나 전문 용어 추출에 강점이 있습니다. 다만 대량의 동일 도메인 말뭉치(최소 수백 건 이상)가 필요합니다. <code>from krwordrank import KRWordRank; wordrank_extractor = KRWordRank(min_count=5, max_length=10); keywords, _ = wordrank_extractor.extract(texts, beta=0.85, max_iter=10)</code>로 키워드를 추출합니다.</p>

<h2>두 방법 실전 비교</h2>
<p>TextRank와 KR-WordRank의 실전 비교를 정리합니다. <strong>필요 데이터</strong>: TextRank는 단일 문서, KR-WordRank는 말뭉치(100건+ 권장). <strong>형태소 분석 의존</strong>: TextRank는 필요, KR-WordRank는 불필요. <strong>신조어 대응</strong>: TextRank는 형태소 분석기 업데이트 의존, KR-WordRank는 말뭉치 기반으로 자동 대응. <strong>처리 속도</strong>: TextRank가 단일 문서에서 더 빠름. <strong>키워드 품질</strong>: 학술·뉴스 도메인에서는 비슷하나 SNS 데이터에서는 KR-WordRank가 유리. 단일 문서 요약용으로는 TextRank, 대량 도메인 데이터 분석에는 KR-WordRank가 권장됩니다.</p>

<h2>YAKE — 다국어 지원 키워드 추출</h2>
<p>YAKE(Yet Another Keyword Extractor)는 언어에 독립적인 통계 기반 키워드 추출 알고리즘으로 한국어도 지원합니다. 단일 문서에서 단어의 위치, 빈도, 분산을 고려해 키워드를 추출합니다. <code>pip install yake; import yake; kw_extractor = yake.KeywordExtractor(lan='ko', n=1, top=10); keywords = kw_extractor.extract_keywords(text)</code>로 사용합니다. 형태소 분석 없이도 동작하지만 한국어 조사·어미 처리가 완벽하지 않아 전처리 후 사용하는 것이 권장됩니다.</p>

<h2>키워드 추출과 글자수 도구 연계</h2>
<p>키워드 추출 결과를 블로그 SEO나 콘텐츠 태깅에 활용할 때 글자수 관리가 중요합니다. 메타 키워드 태그는 쉼표로 구분된 10개 이내, 총 200자 미만이 권장됩니다. 추출된 키워드 목록의 총 글자수를 텍스터브(texturb.com)로 확인하면 SEO 최적화 기준에 맞는 키워드를 선택하는 데 도움이 됩니다. 또한 키워드가 본문에서 적절한 빈도로 사용됐는지 확인할 때도 글자수 기반 밀도 분석이 유용합니다.</p>`,
    publishedAt: "2026-09-13T13:00:00+09:00",
    tags: ["키워드추출", "TextRank", "KR-WordRank", "한국어NLP", "SEO"],
    category: "텍스트 도구",
    author: "텍스터브 에디터"
  },
  {
    id: "book-manuscript-length-guide-korean",
    slug: "book-manuscript-length-guide-korean",
    title: "도서 원고 분량 가이드 — 한국 단행본·문고본 표준 기준",
    excerpt: "한국에서 단행본과 문고본 출판을 위한 원고 분량 기준을 안내합니다. 200자 원고지 기준 장르별 권장 매수, 글자수 환산 방법, 출판사 제출 기준을 설명합니다.",
    content: `<h2>한국 출판계의 분량 단위 — 원고지 매수</h2>
<p>한국 출판계에서 원고 분량을 나타내는 전통적인 단위는 <strong>200자 원고지</strong>입니다. 200자 원고지는 10자×20행 구성으로, 현재도 출판 계약서, 원고 대필 비용 산정, 투고 기준 등에서 공식적으로 사용됩니다. 200자 원고지 1매 = 200자(공백 포함)이며, 현대 워드프로세서로 환산하면 A4 용지 기준 약 0.4~0.5장에 해당합니다. 글자수와 원고지 매수의 환산 공식은 <strong>원고지 매수 = 총 글자수 ÷ 200</strong>입니다. 예를 들어 100,000자 원고는 500매에 해당합니다.</p>

<h2>장르별 원고 분량 기준</h2>
<p>한국 출판계에서 통용되는 장르별 원고 분량 기준은 다음과 같습니다. <strong>단편소설</strong>: 200자 원고지 100~300매(20,000~60,000자). <strong>중편소설</strong>: 300~1,000매(60,000~200,000자). <strong>장편소설</strong>: 1,000매 이상(200,000자 이상). 대중소설의 일반 단행본은 700~1,000매(140,000~200,000자)가 표준입니다. <strong>자기계발서·에세이</strong>: 300~600매(60,000~120,000자)가 일반적입니다. <strong>교양·실용서</strong>: 200~500매(40,000~100,000자)로, 그림이나 표를 포함하면 실제 글자수는 줄어듭니다. 초단편은 100매(20,000자) 미만의 짧은 작품을 가리킵니다.</p>

<div style="background:#f0f4ff;border-left:4px solid #4a6cf7;padding:16px;margin:20px 0;">
<strong>핵심 답변:</strong> 한국 단행본 1권의 표준 분량은 200자 원고지 700~1,000매(글자수 140,000~200,000자)이며, 에세이·자기계발서는 300~600매(60,000~120,000자)가 일반적 기준입니다.
</div>

<h2>문고본 분량 기준</h2>
<p>문고본(文庫本)은 일반 단행본보다 소형·경량의 보급판 도서 형식입니다. 한국에서 문고본은 일반적으로 <strong>120~200페이지, 50,000~100,000자</strong> 분량으로 제작됩니다. 문고판 규격(A6, 105×148mm)은 일반 단행본(신국판 152×225mm)보다 작아 글자수 대비 페이지 수가 적습니다. 문고본 한 페이지에 들어가는 글자수는 편집 설정에 따라 다르지만 보통 400~500자입니다. 클래식 문학, 철학 입문서, 짧은 수필집이 문고본으로 자주 출판됩니다.</p>

<h2>출판사 투고 시 원고 준비 기준</h2>
<p>한국 출판사에 원고를 투고할 때 일반적으로 요구되는 기준입니다. <strong>장편소설</strong>: 완성 원고 기준 최소 700매(140,000자) 이상. <strong>자기계발서·실용서</strong>: 완성 원고 또는 샘플 챕터 2~3개 + 목차 + 기획서. <strong>에세이</strong>: 완성 원고 또는 샘플 10편 이상. 투고 전 원고가 기준 분량에 미치는지 확인하는 것이 중요합니다. 분량 미달 원고는 내용이 좋아도 편집자 검토 단계에서 탈락하기 쉽습니다. 역으로 분량이 지나치게 많은 원고(장편 기준 2,000매 이상)는 편집과 제작 비용 문제로 출판이 어려울 수 있습니다.</p>

<h2>국내 출판계 현황</h2>
<p>한국출판문화산업진흥원(KPIPA)의 통계에 따르면 한국에서 매년 약 6~7만 종의 신간 도서가 출판됩니다. 단행본의 평균 페이지 수는 약 250~350페이지로, 신국판 기준 한 페이지 약 600~700자를 적용하면 평균 단행본의 글자수는 약 150,000~245,000자입니다. 이 수치는 앞서 언급한 700~1,000매(140,000~200,000자) 기준과 일치합니다. 디지털 시대에도 출판 기준의 글자수 개념은 전자책(EPUB) 제작 시에도 동일하게 적용됩니다.</p>

<h2>텍스터브로 원고 분량 관리하기</h2>
<p>텍스터브(texturb.com)의 글자수 세기 도구를 활용하면 원고 작성 중 분량을 실시간으로 점검할 수 있습니다. 현재까지 작성한 원고 전체를 붙여넣어 총 글자수를 확인하고, <strong>총 글자수 ÷ 200</strong>으로 원고지 매수를 바로 계산할 수 있습니다. 예를 들어 글자수 75,000자이면 375매로, 단편과 중편 사이에 해당합니다. 목표 분량(예: 500매)과의 차이를 파악해 남은 집필량을 계획하는 데 유용합니다. 정기적인 분량 체크로 장편 원고의 리듬과 완성도를 유지할 수 있습니다.</p>`,
    publishedAt: "2026-09-13T18:00:00+09:00",
    tags: ["원고분량", "단행본", "출판기준", "원고지", "글자수"],
    category: "출판·글쓰기",
    author: "텍스터브 에디터"
  }
];
