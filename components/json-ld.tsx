/**
 * Component: JsonLd
 * JSON-LD 구조화된 데이터를 삽입하는 컴포넌트
 * @param {Record<string, unknown>} data - JSON-LD 데이터 객체 [Required]
 * @example <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite" }} />
 */
interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
