"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"
import { getBlogPostBySlug, BLOG_POSTS } from "@/lib/blog-registry"
import { useBlogView } from "@/hooks/use-analytics"
import { BlogFAQSection } from "@/components/blog-faq-section"
import { BlogJsonLd } from "@/components/blog-json-ld"
import { getBlogFAQBySlug } from "@/lib/blog-faq-registry"
import { AEOSummarySection } from "@/components/aeo-summary-section"

interface BlogDetailClientProps {
  slug: string
}

export function BlogDetailClient({ slug }: BlogDetailClientProps) {
  const post = getBlogPostBySlug(slug)
  const faqData = getBlogFAQBySlug(slug)

  useBlogView(slug)

  if (!post) {
    notFound()
  }

  // 마크다운 형식의 텍스트를 HTML로 변환하는 함수
  const formatContent = (text: string) => {
    let formatted = text
      // 코드 블록 처리 (```로 감싼 부분)
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">$1</code></pre>')
      // 인라인 코드 처리 (`로 감싼 부분)
      .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // 볼드 텍스트 처리 (**텍스트**)
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
      // 이탤릭 텍스트 처리 (*텍스트*)
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
      // 줄바꿈 처리
      .split("\n")
      .map((line, idx, arr) => {
        // 빈 줄은 <br>로 처리
        if (line.trim() === "") {
          return idx < arr.length - 1 ? "<br />" : ""
        }
        // 리스트 항목 처리 (- 또는 숫자.)
        if (/^[-•]\s/.test(line.trim()) || /^\d+\.\s/.test(line.trim())) {
          return `<li class="ml-4 mb-2">${line.replace(/^[-•]\s/, "").replace(/^\d+\.\s/, "")}</li>`
        }
        // 헤더 처리 (##, ###)
        if (/^###\s/.test(line.trim())) {
          return `<h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">${line.replace(/^###\s/, "")}</h3>`
        }
        if (/^##\s/.test(line.trim())) {
          return `<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">${line.replace(/^##\s/, "")}</h2>`
        }
        // 일반 텍스트
        return `<p class="mb-3 leading-relaxed">${line}</p>`
      })
      .join("")

    // 리스트 항목들을 <ul>로 감싸기
    formatted = formatted.replace(/(<li[^>]*>.*?<\/li>(?:\s*<br \/>)?)+/g, (match) => {
      return `<ul class="list-disc list-inside space-y-2 my-4">${match.replace(/<br \/>/g, "")}</ul>`
    })

    return formatted
  }

  // AEO 요약 섹션용 질문과 답변 추출 (제목과 설명에서)
  const aeoQuestion = post.title.includes("?") ? post.title : `${post.title}에 대해 알아보세요`
  const aeoAnswer = post.description

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          블로그 목록으로
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12 border-b border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              {post.category && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-600">
                  <Tag className="w-3 h-3 mr-1.5" />
                  {post.category}
                </div>
              )}
              <div className="flex items-center text-sm text-slate-500">
                <Calendar className="w-4 h-4 mr-1.5" />
                {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">{post.description}</p>
          </div>

          {/* AEO 요약 섹션 */}
          <div className="p-8 md:p-12">
            <AEOSummarySection question={aeoQuestion} answer={aeoAnswer} keywords={post.targetKeywords} />
          </div>

          {/* 본문 내용 */}
          <div className="p-8 md:p-12">
            <div
              className="text-slate-600 leading-relaxed text-lg prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>

          {/* CTA 섹션 */}
          {post.cta && (
            <section className="p-8 md:p-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{post.cta.text}</h2>
                </div>
                <Link
                  href={post.cta.link}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  바로 가기 →
                </Link>
              </div>
            </section>
          )}
        </article>

        {/* FAQ 섹션 */}
        <BlogFAQSection blogSlug={slug} />

        {/* 내부 링크 섹션 */}
        {post.inlinks && post.inlinks.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">관련 글</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.inlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {link.text}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 외부 링크 섹션 */}
        {post.outlinks && post.outlinks.length > 0 && (
          <section className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">추가 참고 자료</h2>
            <ul className="space-y-3">
              {post.outlinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                  >
                    <span>{link.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {link.description && <p className="text-sm text-slate-600 mt-1 ml-6">{link.description}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 관련 블로그 포스트 */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">다른 글 보기</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{relatedPost.description}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>

      {faqData && faqData.items.length > 0 && <BlogJsonLd faqItems={faqData.items} />}
    </div>
  )
}

