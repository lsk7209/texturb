"use client"
import { UTILITIES, UTILITY_CATEGORIES } from "@/lib/utilities-registry"
import { Search, Zap, Shield, Clock, Star } from "lucide-react"
import { useState, useMemo } from "react"
import { useRecentTools } from "@/hooks/use-recent-tools"
import { useFavorites } from "@/hooks/use-favorites"
import { ToolCard } from "@/components/tool-card"

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("전체")
  const { recentTools } = useRecentTools()
  const { favorites } = useFavorites()

  const recentUtilities = recentTools.map((id) => UTILITIES.find((u) => u.id === id)).filter(Boolean)
  const favoriteUtilities = favorites.map((id) => UTILITIES.find((u) => u.id === id)).filter(Boolean)

  const filteredUtilities = useMemo(() => {
    let result = UTILITIES

    if (selectedCategory !== "전체") {
      result = result.filter((util) => util.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase()
      result = result.filter(
        (util) =>
          util.name.toLowerCase().includes(lowerQuery) ||
          util.description.toLowerCase().includes(lowerQuery) ||
          util.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)),
      )
    }

    return result
  }, [searchQuery, selectedCategory])

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">텍스터브 - 텍스트 편집 도구 모음</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              글자수 세기, 줄바꿈 정리, 대소문자 변환, 특수문자 입력 등 텍스트 작업에 필요한 모든 도구를 한곳에서 무료로
              사용하세요. 회원가입 없이 브라우저에서 바로 실행되며, 입력한 텍스트는 서버에 저장되지 않아 안전합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">즉시 사용 가능</h3>
                <p className="text-sm text-muted-foreground text-center">
                  회원가입이나 설치 없이 웹 브라우저에서 바로 사용할 수 있습니다
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">개인정보 보호</h3>
                <p className="text-sm text-muted-foreground text-center">
                  모든 작업이 브라우저에서 처리되어 서버에 데이터가 전송되지 않습니다
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">빠른 처리</h3>
                <p className="text-sm text-muted-foreground text-center">
                  대용량 텍스트도 실시간으로 빠르게 처리하고 결과를 확인할 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center">텍스터브가 제공하는 주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-3">📊 글자수 및 분량 측정</h3>
              <p className="text-muted-foreground leading-relaxed">
                자기소개서, 블로그 글, SNS 게시물 작성 시 필요한 글자수, 단어수, 문장 수, 문단 수를 정확하게 측정합니다.
                목표 글자수를 설정하고 실시간으로 진행률을 확인할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-3">🧹 텍스트 정리 및 서식</h3>
              <p className="text-muted-foreground leading-relaxed">
                복사-붙여넣기 과정에서 생긴 불필요한 줄바꿈, 공백, 탭 문자를 자동으로 정리합니다. 중복된 줄 제거, 빈 줄
                정리, 양쪽 공백 제거 등 다양한 정리 기능을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-3">🔤 대소문자 및 언어 변환</h3>
              <p className="text-muted-foreground leading-relaxed">
                영문 텍스트의 대문자, 소문자, 타이틀 케이스, 문장 케이스 변환을 지원합니다. 프로그래밍 작업 시 유용한
                camelCase, snake_case, kebab-case 변환도 가능합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-3">✨ 특수문자 및 기호</h3>
              <p className="text-muted-foreground leading-relaxed">
                제목, 닉네임, 게시물에 사용할 수 있는 다양한 특수문자와 유니코드 기호를 제공합니다. 클릭 한 번으로
                복사하여 어디든 붙여넣을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        {favoriteUtilities.length > 0 && (
          <section className="mb-12" aria-labelledby="favorites-section">
            <h2 id="favorites-section" className="text-xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              즐겨찾는 도구
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteUtilities.map((tool) => (
                <ToolCard key={tool.id} tool={tool} showFavorite />
              ))}
            </div>
          </section>
        )}

        {recentUtilities.length > 0 && (
          <section className="mb-12" aria-labelledby="recent-section">
            <h2 id="recent-section" className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              최근 사용 도구
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentUtilities.slice(0, 6).map((tool) => (
                <ToolCard key={tool.id} tool={tool} showFavorite />
              ))}
            </div>
          </section>
        )}

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="유틸 이름이나 키워드를 입력하세요. (예: 글자수, 줄바꿈, 대소문자)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory("전체")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "전체"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
            }`}
          >
            전체
          </button>
          {UTILITY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredUtilities.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-2">검색 결과가 없습니다.</p>
            <p className="text-muted-foreground/60 text-sm">다른 키워드를 입력해 보세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUtilities.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showFavorite />
            ))}
          </div>
        )}
      </div>

      <section className="py-12 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center">텍스터브 사용 가이드</h2>
          <div className="prose prose-slate max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl border mb-6">
              <h3 className="text-lg font-semibold mb-3">어떻게 사용하나요?</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. 위에서 필요한 도구를 선택하거나 검색합니다</li>
                <li>2. 도구 페이지에서 텍스트를 입력하거나 붙여넣습니다</li>
                <li>3. 실시간으로 처리된 결과를 확인합니다</li>
                <li>4. 결과를 복사하여 원하는 곳에 사용합니다</li>
              </ol>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-3">누가 사용하면 좋나요?</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                텍스터브는 텍스트 작업을 하는 모든 분들에게 유용합니다:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>작가 및 블로거:</strong> 글자수 체크, 문장 정리, 서식 변환
                </li>
                <li>
                  <strong>학생:</strong> 자기소개서 글자수 측정, 리스트 정리
                </li>
                <li>
                  <strong>개발자:</strong> 케이스 변환, HTML/마크다운 변환, 슬러그 생성
                </li>
                <li>
                  <strong>마케터:</strong> SEO 메타 태그 길이 체크, 텍스트 추출
                </li>
                <li>
                  <strong>일반 사용자:</strong> 특수문자 입력, 텍스트 정리
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
