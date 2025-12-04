"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Map, PenTool } from "lucide-react"
import { getGuideBySlug, GUIDES } from "@/lib/guides-registry"
import { getUtilityBySlug } from "@/lib/utilities-registry"
import { useGuideView } from "@/hooks/use-analytics"
import { GuideFAQSection } from "@/components/guide-faq-section"
import { GuideJsonLd } from "@/components/guide-json-ld"
import { getGuideFAQBySlug } from "@/lib/guide-faq-registry"

interface GuideDetailClientProps {
  slug: string
}

export function GuideDetailClient({ slug }: GuideDetailClientProps) {
  const guide = getGuideBySlug(slug)
  const faqData = getGuideFAQBySlug(slug)

  useGuideView(slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/guides"
          className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          가이드 목록으로
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12 border-b border-slate-100">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{guide.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">{guide.description}</p>

            {guide.relatedWorkflowId && (
              <div className="mt-8">
                <Link
                  href={`/workflow/${guide.relatedWorkflowId}`}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Map className="w-5 h-5 mr-2" />이 가이드대로 워크플로 시작하기
                </Link>
              </div>
            )}
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {guide.sections.map((section, index) => {
              const tool = section.relatedToolId ? getUtilityBySlug(section.relatedToolId) : null

              // 마크다운 형식의 텍스트를 HTML로 변환하는 간단한 함수
              const formatContent = (text: string) => {
                let formatted = text
                  // 코드 블록 처리 (```로 감싼 부분)
                  .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">$1</code></pre>')
                  // 인라인 코드 처리 (`로 감싼 부분)
                  .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                  // 볼드 텍스트 처리 (**텍스트**)
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
                  // 줄바꿈 처리
                  .split('\n')
                  .map((line, idx, arr) => {
                    // 빈 줄은 <br>로 처리
                    if (line.trim() === '') {
                      return idx < arr.length - 1 ? '<br />' : ''
                    }
                    // 리스트 항목 처리 (- 또는 숫자.)
                    if (/^[-•]\s/.test(line.trim()) || /^\d+\.\s/.test(line.trim())) {
                      return `<li class="ml-4 mb-2">${line.replace(/^[-•]\s/, '').replace(/^\d+\.\s/, '')}</li>`
                    }
                    // 헤더 처리 (##)
                    if (/^##\s/.test(line.trim())) {
                      return `<h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">${line.replace(/^##\s/, '')}</h3>`
                    }
                    // 일반 텍스트
                    return `<p class="mb-3">${line}</p>`
                  })
                  .join('')
                
                // 리스트 항목들을 <ul>로 감싸기
                formatted = formatted.replace(/(<li[^>]*>.*?<\/li>(?:\s*<br \/>)?)+/g, (match) => {
                  return `<ul class="list-disc list-inside space-y-2 my-4">${match.replace(/<br \/>/g, '')}</ul>`
                })
                
                return formatted
              }

              return (
                <section key={index} className="relative">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                  <div 
                    className="text-slate-600 leading-relaxed mb-6 text-lg prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatContent(section.content) }}
                  />

                  {tool && (
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="inline-flex items-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all group w-full md:w-auto"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-900 mr-4 group-hover:scale-105 transition-transform">
                        <PenTool className="w-5 h-5" />
                      </div>
                      <div className="flex-1 mr-4">
                        <div className="font-bold text-slate-900 mb-0.5">{tool.name}</div>
                        <div className="text-sm text-slate-500">바로 사용해보기</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    </Link>
                  )}
                </section>
              )
            })}
          </div>
        </article>

        <GuideFAQSection guideSlug={slug} />

        {/* CTA 섹션 - 사용자 행동 유도 */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">지금 바로 시작해보세요</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            이 가이드에서 배운 내용을 바로 실전에 적용해보세요. 텍스터브의 다양한 도구를 사용하여 텍스트 작업을 더 효율적으로 할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tools"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              모든 도구 보기 →
            </Link>
            {guide.relatedWorkflowId && (
              <Link
                href={`/workflow/${guide.relatedWorkflowId}`}
                className="px-6 py-3 bg-white text-slate-900 border-2 border-slate-300 rounded-xl font-bold hover:border-slate-400 transition-colors shadow-sm hover:shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                워크플로 시작하기 →
              </Link>
            )}
          </div>
        </section>

        {/* 관련 가이드 섹션 - Inlink */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">관련 가이드</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {GUIDES.filter((g) => g.slug !== slug)
              .slice(0, 2)
              .map((relatedGuide) => (
                <Link
                  key={relatedGuide.slug}
                  href={`/guides/${relatedGuide.slug}`}
                  className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {relatedGuide.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{relatedGuide.description}</p>
                </Link>
              ))}
          </div>
        </section>

        {/* 외부 참고 자료 - Outlink */}
        <section className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">추가 참고 자료</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
              >
                <span>Google SEO 가이드</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-slate-600 mt-1 ml-6">
                Google에서 제공하는 검색 엔진 최적화 가이드라인을 확인하세요.
              </p>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
              >
                <span>웹 접근성 가이드라인 (WCAG)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-slate-600 mt-1 ml-6">
                웹 콘텐츠 접근성 가이드라인을 참고하여 더 나은 콘텐츠를 작성하세요.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {faqData && faqData.items.length > 0 && <GuideJsonLd faqItems={faqData.items} />}
    </div>
  )
}

