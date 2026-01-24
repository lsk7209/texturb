import Link from "next/link"
import { getToolContent } from "@/lib/tool-content"
import { getUtilityBySlug } from "@/lib/utilities-registry"
import { GUIDES } from "@/lib/guides-registry"
import { Lightbulb, HelpCircle, ArrowRight } from "lucide-react"

interface ToolContentSectionProps {
  toolId: string
}

export function ToolContentSection({ toolId }: ToolContentSectionProps) {
  const content = getToolContent(toolId)

  if (!content) {
    return null
  }

  // Markdown to HTML formatter (simple regex based)
  const formatContent = (text: string) => {
    let formatted = text
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm font-mono">$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">$1</code>')
      // Bold
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
      // Italic
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
      // Headers
      .replace(/^###\s+(.+)$/gm, '<h3 class="text-lg font-bold text-foreground mt-6 mb-3">$1</h3>')
      .replace(/^##\s+(.+)$/gm, '<h2 class="text-xl font-bold text-foreground mt-8 mb-4 border-b pb-2">$1</h2>')
      // Lists (Hyphen or Asterisk)
      .replace(/^[-*]\s+(.+)$/gm, '<li class="ml-4 mb-1 pl-1">$1</li>')
      // Ordered Lists
      .replace(/^(\d+)\.\s+(.+)$/gm, '<li class="ml-4 mb-1 pl-1 list-decimal">$2</li>')
    // Paragraphs (simplified: double newline to paragraph, but here we handle line by line in split)
    // Actually regex global replace for block elements is safer if we don't split by newline first for everything.
    // Let's stick to the BlogDetailClient approach of split/map for simplicity and consistency.
    return text
      .split("\n")
      .map((line, idx) => {
        const trimmed = line.trim();
        if (trimmed === "") return '<div class="h-4"></div>';
        if (trimmed.startsWith("### ")) return `<h3 class="text-lg font-bold text-foreground mt-6 mb-3">${trimmed.substring(4)}</h3>`;
        if (trimmed.startsWith("## ")) return `<h2 class="text-xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>${trimmed.substring(3)}</h2>`;
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) return `<li class="ml-4 mb-2 flex gap-2 items-start"><span class="text-primary mt-1.5">•</span><span>${trimmed.substring(2)}</span></li>`;
        if (/^\d+\.\s/.test(trimmed)) return `<div class="ml-4 mb-2 flex gap-2 items-start"><span class="text-primary font-bold min-w-[1.2em]">${trimmed.match(/^\d+/)![0]}.</span><span>${trimmed.replace(/^\d+\.\s/, "")}</span></div>`;
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) return `<p class="mb-3 font-bold">${trimmed.replace(/\*\*/g, "")}</p>`;

        // Inline formatting for paragraphs
        let processedLine = line
          .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
          .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">$1</code>');

        return `<p class="mb-3 leading-relaxed text-muted-foreground">${processedLine}</p>`;
      })
      .join("");
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Comprehensive Guide (New High Value Content) */}
      {content.guideContent && (
        <section className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
          <div
            className="prose prose-slate max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: formatContent(content.guideContent) }}
          />
        </section>
      )}

      {/* Usage Tips */}
      {content.usageTips.length > 0 && (
        <section className="bg-card border border-border rounded-lg p-5 sm:p-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary shrink-0" />
            <span>사용 팁</span>
          </h2>
          <ul className="space-y-2.5 sm:space-y-3">
            {content.usageTips.map((tip, index) => (
              <li key={index} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <span className="text-primary font-bold shrink-0">{index + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section className="bg-card border border-border rounded-lg p-5 sm:p-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary shrink-0" />
            <span>자주 묻는 질문</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {content.faq.map((item, index) => (
              <div key={index} className="border-b border-border last:border-0 pb-3 sm:pb-4 last:pb-0">
                <h3 className="font-medium mb-2 text-sm sm:text-base leading-tight">{item.question}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Tools and Guides */}
      {(content.relatedTools.length > 0 || content.relatedGuides.length > 0) && (
        <section className="bg-card border border-border rounded-lg p-5 sm:p-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">관련 도구 및 가이드</h2>

          {content.relatedTools.length > 0 && (
            <div className="mb-6 last:mb-0">
              <h3 className="text-sm sm:text-base font-medium text-muted-foreground mb-3">관련 도구</h3>
              <div className="grid gap-2.5 sm:gap-3">
                {content.relatedTools.map((toolId) => {
                  const tool = getUtilityBySlug(toolId)
                  if (!tool) return null
                  return (
                    <Link
                      key={toolId}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-md bg-muted/50 hover:bg-muted transition-all group border border-transparent hover:border-border shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base leading-tight mb-1">{tool.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {tool.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-3" />
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {content.relatedGuides.length > 0 && (
            <div>
              <h3 className="text-sm sm:text-base font-medium text-muted-foreground mb-3">관련 가이드</h3>
              <div className="grid gap-2.5 sm:gap-3">
                {content.relatedGuides.map((guideSlug) => {
                  const guide = GUIDES.find((g) => g.slug === guideSlug)
                  if (!guide) return null
                  return (
                    <Link
                      key={guideSlug}
                      href={`/guides/${guide.slug}`}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-md bg-muted/50 hover:bg-muted transition-all group border border-transparent hover:border-border shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base leading-tight mb-1">{guide.title}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {guide.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-3" />
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
