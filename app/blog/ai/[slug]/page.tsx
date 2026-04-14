import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/db/post-queries";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import type { Components } from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);
  if (!post) return { title: "글을 찾을 수 없습니다" };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com";
  return {
    title: `${post.title} | 텍스처브`,
    description: post.summary,
    alternates: { canonical: `/blog/ai/${slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${baseUrl}/blog/ai/${slug}`,
      type: "article",
      locale: "ko_KR",
    },
  };
}

// 마크다운 커스텀 컴포넌트 — 읽기 좋은 블로그 스타일
const mdComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-slate-800 mt-7 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[17px] leading-[1.85] text-slate-700 mb-5">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-900">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 space-y-2.5 pl-5 list-none">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 space-y-2.5 pl-5 list-decimal">{children}</ol>
  ),
  li: ({ children, ...props }) => {
    const isOrdered = (props as { ordered?: boolean }).ordered;
    return (
      <li
        className={`text-[17px] leading-[1.8] text-slate-700 ${
          isOrdered
            ? "pl-1"
            : "relative before:absolute before:-left-4 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-400"
        }`}
      >
        {children}
      </li>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-200 pl-5 my-6 text-slate-600 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-slate-100 text-slate-800 text-[14px] px-1.5 py-0.5 rounded font-mono">
      {children}
    </code>
  ),
  hr: () => <hr className="my-8 border-slate-100" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

// ol 내 li는 list-decimal에 맞게 별도 처리
const mdComponentsWithOl: Components = {
  ...mdComponents,
};

export default async function AiBlogPost({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);
  if (!post) notFound();

  const publishDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-white">
      {/* 상단 네비 */}
      <div className="border-b border-slate-100 bg-white sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-5 h-12 flex items-center">
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            블로그
          </Link>
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-5 pt-12 pb-20">
        {/* 메타 */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-[16px] text-slate-500 leading-relaxed mb-4">
            {post.summary}
          </p>
          {publishDate && (
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {publishDate}
            </div>
          )}
        </div>

        {/* 구분선 */}
        <hr className="border-slate-100 mb-8" />

        {/* 본문 */}
        <div>
          <ReactMarkdown components={mdComponentsWithOl}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* 하단 CTA */}
        <div className="mt-14 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-sm font-medium text-slate-700 mb-1">
            텍스처브 — 텍스트 작업실
          </p>
          <p className="text-sm text-slate-500 mb-4">
            글자수 세기, 줄바꿈 정리, 마크다운 변환 등 30개 이상의 무료 텍스트
            도구
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            도구 바로 쓰기 →
          </Link>
        </div>
      </article>
    </main>
  );
}
