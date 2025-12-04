import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-registry"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "블로그 - 텍스트 작업 팁과 가이드 | 텍스터브",
  description: "글자수 세기, 줄바꿈 정리, 텍스트 변환 등 텍스트 작업에 관한 실용적인 팁과 가이드를 확인하세요.",
  keywords: [
    "텍스트 작업 팁",
    "글자수 세기 가이드",
    "텍스트 편집 블로그",
    "글쓰기 팁",
    "텍스트 도구 활용법",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "블로그 - 텍스트 작업 팁과 가이드 | 텍스터브",
    description: "글자수 세기, 줄바꿈 정리, 텍스트 변환 등 텍스트 작업에 관한 실용적인 팁과 가이드를 확인하세요.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"}/blog`,
    type: "website",
    locale: "ko_KR",
    siteName: "텍스터브",
  },
  twitter: {
    card: "summary_large_image",
    title: "블로그 - 텍스트 작업 팁과 가이드 | 텍스터브",
    description: "글자수 세기, 줄바꿈 정리, 텍스트 변환 등 텍스트 작업에 관한 실용적인 팁과 가이드를 확인하세요.",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">블로그</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            텍스트 작업에 관한 실용적인 팁, 가이드, 그리고 최신 정보를 확인하세요.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">아직 게시된 글이 없습니다.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  {post.category && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-600">
                      <Tag className="w-3 h-3 mr-1.5" />
                      {post.category}
                    </div>
                  )}
                  <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                    읽기 <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-slate-600 mb-6 line-clamp-2">{post.description}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

