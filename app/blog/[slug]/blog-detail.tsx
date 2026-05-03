import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { getBlogPostBySlug, BLOG_POSTS } from "@/lib/blog-registry";
import { BlogViewTracker } from "@/components/analytics-tracker";
import { BlogFAQSection } from "@/components/blog-faq-section";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { getBlogFAQBySlug } from "@/lib/blog-faq-registry";
import { AEOSummarySection } from "@/components/aeo-summary-section";

interface BlogDetailProps {
  slug: string;
}

export function BlogDetail({ slug }: BlogDetailProps) {
  const post = getBlogPostBySlug(slug);
  const faqData = getBlogFAQBySlug(slug);

  if (!post) {
    notFound();
  }

  // 마크다운을 HTML로 변환 (표, 인용구, 코드블록, 헤더, 리스트, 인라인 지원)
  const formatContent = (text: string) => {
    // 1. 코드 블록 추출·보호
    const codeBlocks: string[] = [];
    let processed = text.replace(/```([\s\S]*?)```/g, (_, code) => {
      const idx = codeBlocks.length;
      codeBlocks.push(
        `<pre class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`,
      );
      return `%%CB${idx}%%`;
    });

    // 2. 인라인 요소 처리
    processed = processed
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">$1</code>',
      )
      .replace(
        /\*\*([^*]+)\*\*/g,
        '<strong class="font-bold text-slate-900">$1</strong>',
      )
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

    // 3. 줄 단위 블록 파싱
    const lines = processed.split("\n");
    const output: string[] = [];
    let i = 0;

    const parseRow = (row: string): string[] => {
      const parts = row.split("|");
      return parts.slice(1, parts.length - 1).map((c) => c.trim());
    };

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      // 코드 블록 복원
      if (/%%CB\d+%%/.test(trimmed)) {
        output.push(trimmed.replace(/%%CB(\d+)%%/g, (_, n) => codeBlocks[+n]));
        i++;
        continue;
      }

      // 표(table) 처리
      if (trimmed.startsWith("|")) {
        const rows: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          rows.push(lines[i].trim());
          i++;
        }
        const sepIdx = rows.findIndex((r) => /^\|[\s\-:|]+\|$/.test(r));
        if (sepIdx > 0) {
          const headers = parseRow(rows[0])
            .map(
              (h) =>
                `<th class="px-4 py-2 bg-slate-100 font-semibold text-left text-slate-700 border border-slate-200 text-sm">${h}</th>`,
            )
            .join("");
          const bodyRows = rows
            .slice(sepIdx + 1)
            .map((r) => {
              const cells = parseRow(r)
                .map(
                  (c) =>
                    `<td class="px-4 py-2 border border-slate-200 text-slate-600 text-sm">${c}</td>`,
                )
                .join("");
              return `<tr class="even:bg-slate-50">${cells}</tr>`;
            })
            .join("");
          output.push(
            `<div class="overflow-x-auto my-6 rounded-lg border border-slate-200"><table class="w-full border-collapse"><thead><tr>${headers}</tr></thead><tbody>${bodyRows}</tbody></table></div>`,
          );
        } else {
          rows.forEach((r) => output.push(`<p class="mb-3">${r}</p>`));
        }
        continue;
      }

      // 인용구(blockquote) 처리
      if (trimmed.startsWith(">")) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith(">")) {
          quoteLines.push(lines[i].replace(/^>\s?/, "").trim());
          i++;
        }
        output.push(
          `<blockquote class="border-l-4 border-blue-400 pl-4 py-3 my-4 bg-blue-50 rounded-r-lg text-slate-700">${quoteLines.join("<br />")}</blockquote>`,
        );
        continue;
      }

      // 헤더
      if (/^###\s/.test(trimmed)) {
        output.push(
          `<h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">${trimmed.replace(/^###\s/, "")}</h3>`,
        );
        i++;
        continue;
      }
      if (/^##\s/.test(trimmed)) {
        output.push(
          `<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">${trimmed.replace(/^##\s/, "")}</h2>`,
        );
        i++;
        continue;
      }
      if (/^#\s/.test(trimmed)) {
        output.push(
          `<h2 class="text-3xl font-bold text-slate-900 mt-8 mb-6">${trimmed.replace(/^#\s/, "")}</h2>`,
        );
        i++;
        continue;
      }

      // 리스트
      if (/^[-•]\s/.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
        const items: string[] = [];
        const isOrdered = /^\d+\.\s/.test(trimmed);
        while (
          i < lines.length &&
          (/^[-•]\s/.test(lines[i].trim()) || /^\d+\.\s/.test(lines[i].trim()))
        ) {
          const content = lines[i]
            .trim()
            .replace(/^[-•]\s/, "")
            .replace(/^\d+\.\s/, "");
          items.push(`<li class="mb-1.5">${content}</li>`);
          i++;
        }
        const tag = isOrdered ? "ol" : "ul";
        const cls = isOrdered
          ? "list-decimal list-inside space-y-1 my-4 text-slate-600"
          : "list-disc list-inside space-y-1 my-4 text-slate-600";
        output.push(`<${tag} class="${cls}">${items.join("")}</${tag}>`);
        continue;
      }

      // 빈 줄
      if (trimmed === "") {
        i++;
        continue;
      }

      // 일반 텍스트
      output.push(`<p class="mb-3 leading-relaxed">${line}</p>`);
      i++;
    }

    return output.join("");
  };

  // AEO 요약 섹션용 질문과 답변 — 포스트에 명시된 경우 우선 사용 (GEO 최적화)
  const aeoQuestion =
    post.aeoQuestion ??
    (post.title.includes("?") ? post.title : `${post.title}에 대해 알아보세요`);
  const aeoAnswer = post.aeoAnswer ?? post.description;

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <BlogViewTracker slug={slug} />
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
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* AEO 요약 섹션 */}
          <div className="p-8 md:p-12">
            <AEOSummarySection
              question={aeoQuestion}
              answer={aeoAnswer}
              keywords={post.targetKeywords}
            />
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
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {post.cta.text}
                  </h2>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              추가 참고 자료
            </h2>
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
                  {link.description && (
                    <p className="text-sm text-slate-600 mt-1 ml-6">
                      {link.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 관련 블로그 포스트 */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            다른 글 보기
          </h2>
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
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </div>

      {faqData && faqData.items.length > 0 && (
        <BlogJsonLd faqItems={faqData.items} />
      )}
    </div>
  );
}
