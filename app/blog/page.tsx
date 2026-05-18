import Link from "next/link";
import { ArrowRight, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-registry";
import { getPublishedPosts } from "@/lib/db/post-queries";
import type { Metadata } from "next";

export const revalidate = 3600;

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: "블로그 - 텍스트 작업 팁과 가이드 | 텍스터브",
  description:
    "글자수 세기, 줄바꿈 정리, 텍스트 변환 등 텍스트 작업에 관한 실용적인 팁과 가이드를 확인하세요.",
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
    description:
      "글자수 세기, 줄바꿈 정리, 텍스트 변환 등 텍스트 작업에 관한 실용적인 팁과 가이드를 확인하세요.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://texturb.com"}/blog`,
    type: "website",
    locale: "ko_KR",
    siteName: "텍스터브",
  },
  twitter: {
    card: "summary_large_image",
    title: "블로그 - 텍스트 작업 팁과 가이드 | 텍스터브",
    description:
      "글자수 세기, 줄바꿈 정리, 텍스트 변환 등 텍스트 작업에 관한 실용적인 팁과 가이드를 확인하세요.",
  },
};

// 6개 메인 카테고리 그룹과 각 그룹에 속하는 원본 카테고리 매핑
const CATEGORY_GROUPS: Record<string, { label: string; keywords: string[] }> = {
  "글자수·분량": {
    label: "글자수·분량",
    keywords: ["글자수", "분량", "콘텐츠 분량"],
  },
  "비즈니스·업무": {
    label: "비즈니스·업무",
    keywords: ["비즈니스", "업무", "직장", "고객 서비스", "이메일", "회의", "회계", "세무"],
  },
  "법률·행정": {
    label: "법률·행정",
    keywords: ["법률", "행정", "공문서", "공공", "사회보장", "사회복지", "가족법", "노동", "지식재산", "부동산"],
  },
  "마케팅·콘텐츠": {
    label: "마케팅·콘텐츠",
    keywords: ["마케팅", "SNS", "블로그", "SEO", "콘텐츠", "이커머스", "앱 마케팅", "영상", "소셜"],
  },
  "기술·AI": {
    label: "기술·AI",
    keywords: ["기술", "AI", "텍스트 도구", "텍스트 편집", "챗봇", "데이터", "번역"],
  },
  "취업·교육": {
    label: "취업·교육",
    keywords: ["취업", "자소서", "교육", "학술", "창업", "LinkedIn"],
  },
};

const ALL_CATEGORIES = [
  { key: "전체", label: "전체" },
  ...Object.entries(CATEGORY_GROUPS).map(([key, { label }]) => ({ key, label })),
];

function mapCategoryToGroup(category: string | undefined): string {
  if (!category) return "기타";
  for (const [groupKey, { keywords }] of Object.entries(CATEGORY_GROUPS)) {
    if (keywords.some((kw) => category.includes(kw))) return groupKey;
  }
  return "기타";
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page: pageParam, category: categoryParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const selectedCategory = categoryParam ?? "전체";

  const staticPosts = getAllBlogPosts();
  const { data: aiPosts } = await getPublishedPosts("blog", 50);

  const allPosts = [
    ...staticPosts.map((p) => ({
      key: p.slug,
      href: `/blog/${p.slug}`,
      title: p.title,
      description: p.description,
      category: p.category,
      date: p.publishedAt,
      group: mapCategoryToGroup(p.category),
    })),
    ...(aiPosts ?? []).map((p) => ({
      key: `ai-${p.id}`,
      href: `/blog/ai/${p.slug}`,
      title: p.title,
      description: p.summary,
      category: undefined as string | undefined,
      date: p.published_at ?? p.created_at,
      group: "기타",
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredPosts =
    selectedCategory === "전체"
      ? allPosts
      : allPosts.filter((p) => p.group === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(1, totalPages));
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const pagePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  const buildHref = (page: number, cat?: string) => {
    const c = cat ?? selectedCategory;
    const params = new URLSearchParams();
    if (c !== "전체") params.set("category", c);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">블로그</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            텍스트 작업에 관한 실용적인 팁, 가이드, 그리고 최신 정보를
            확인하세요.
          </p>
        </div>

        {/* 카테고리 필터 메뉴 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_CATEGORIES.map(({ key, label }) => {
            const count =
              key === "전체"
                ? allPosts.length
                : allPosts.filter((p) => p.group === key).length;
            const isActive = selectedCategory === key;
            return (
              <Link
                key={key}
                href={buildHref(1, key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {label}
                <span
                  className={`ml-1.5 text-xs ${isActive ? "text-blue-200" : "text-slate-400"}`}
                >
                  {count}
                </span>
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">해당 카테고리에 게시된 글이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {pagePosts.map((post) => (
                <Link
                  key={post.key}
                  href={post.href}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    {post.category ? (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-600">
                        <Tag className="w-3 h-3 mr-1.5" />
                        {post.category}
                      </div>
                    ) : (
                      <div />
                    )}
                    <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                      읽기 <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {new Date(post.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <Link
                  href={buildHref(safePage - 1)}
                  aria-label="이전 페이지"
                  className={`p-2 rounded-lg border transition-colors ${
                    safePage <= 1
                      ? "border-slate-200 text-slate-300 pointer-events-none"
                      : "border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Link>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - safePage) <= 2
                  )
                  .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                    if (idx > 0 && p - (arr[idx - 1] as number) > 1)
                      acc.push("…");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item, idx) =>
                    item === "…" ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-2 text-slate-400 select-none"
                      >
                        …
                      </span>
                    ) : (
                      <Link
                        key={item}
                        href={buildHref(item as number)}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
                          item === safePage
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400"
                        }`}
                      >
                        {item}
                      </Link>
                    )
                  )}

                <Link
                  href={buildHref(safePage + 1)}
                  aria-label="다음 페이지"
                  className={`p-2 rounded-lg border transition-colors ${
                    safePage >= totalPages
                      ? "border-slate-200 text-slate-300 pointer-events-none"
                      : "border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            )}

            <p className="text-center text-sm text-slate-400 mt-4">
              {selectedCategory !== "전체" && (
                <span className="text-blue-500 font-medium mr-1">
                  [{selectedCategory}]
                </span>
              )}
              전체 {filteredPosts.length}개 · {safePage} / {totalPages} 페이지
            </p>
          </>
        )}
      </div>
    </div>
  );
}
