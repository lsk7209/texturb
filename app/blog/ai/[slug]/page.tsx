import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/db/post-queries";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);
  if (!post) return { title: "글을 찾을 수 없습니다" };
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/ai/${slug}` },
  };
}

export default async function AiBlogPost({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);
  if (!post) notFound();
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.summary}</p>
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
