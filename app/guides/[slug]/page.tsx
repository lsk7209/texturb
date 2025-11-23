"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Map, PenTool } from "lucide-react"
import { getGuideBySlug } from "@/lib/guides-registry"
import { getUtilityBySlug } from "@/lib/utilities-registry"
import { useGuideView } from "@/hooks/use-analytics"
import { GuideFAQSection } from "@/components/guide-faq-section"
import { GuideJsonLd } from "@/components/guide-json-ld"
import { getGuideFAQBySlug } from "@/lib/guide-faq-registry"

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)
  const faqData = getGuideFAQBySlug(params.slug)

  useGuideView(params.slug)

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
                  href={`/workflow/${guide.relatedWorkflowId}`} // Updated href to use /workflow/[slug]
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

              return (
                <section key={index} className="relative">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">{section.content}</p>

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

        <GuideFAQSection guideSlug={params.slug} />
      </div>

      {faqData && faqData.items.length > 0 && <GuideJsonLd faqItems={faqData.items} />}
    </div>
  )
}
