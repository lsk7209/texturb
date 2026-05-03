import { JsonLd } from "./json-ld"
import { getAbsoluteUrl } from "@/lib/site-config"
import type { BlogFAQItem } from "@/lib/blog-faq-registry"
import type { BlogPost } from "@/lib/blog-registry"

interface BlogJsonLdProps {
  faqItems: BlogFAQItem[]
}

export function BlogJsonLd({ faqItems }: BlogJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return <JsonLd data={data} />
}

interface BlogArticleJsonLdProps {
  post: BlogPost
}

export function BlogArticleJsonLd({ post }: BlogArticleJsonLdProps) {
  const url = post.canonicalUrl || getAbsoluteUrl(`/blog/${post.slug}`)
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "텍스터브",
      url: getAbsoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "텍스터브",
      url: getAbsoluteUrl("/"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: getAbsoluteUrl(`/blog/${post.slug}/opengraph-image`),
    keywords: post.targetKeywords?.join(", "),
    articleSection: post.category,
    inLanguage: "ko-KR",
  }
  return <JsonLd data={data} />
}

export function BlogBreadcrumbJsonLd({ post }: BlogArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: getAbsoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "블로그", item: getAbsoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: getAbsoluteUrl(`/blog/${post.slug}`) },
    ],
  }
  return <JsonLd data={data} />
}
