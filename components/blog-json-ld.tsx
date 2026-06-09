import { JsonLd } from "./json-ld"
import type { BlogFAQItem } from "@/lib/blog-faq-registry"
import type { BlogPost } from "@/lib/blog-registry"
import { getAbsoluteUrl } from "@/lib/site-config"

interface BlogJsonLdProps {
  faqItems?: BlogFAQItem[]
  post?: BlogPost
}

export function BlogJsonLd({ faqItems = [], post }: BlogJsonLdProps) {
  const graph: Record<string, unknown>[] = []

  if (post) {
    const canonicalUrl = getAbsoluteUrl(`/blog/${post.slug}`)
    graph.push(
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription || post.description || post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Organization",
          name: post.author || "텍스터브 편집팀",
        },
        publisher: {
          "@type": "Organization",
          name: "텍스터브",
          url: getAbsoluteUrl("/"),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        url: canonicalUrl,
        inLanguage: "ko-KR",
        keywords: post.targetKeywords || post.tags,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: getAbsoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "블로그",
            item: getAbsoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    )
  }

  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    })
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  }

  return <JsonLd data={data} />
}

