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

  return (
    <div className="space-y-8">
      {/* Usage Tips */}
      {content.usageTips.length > 0 && (
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            사용 팁
          </h2>
          <ul className="space-y-3">
            {content.usageTips.map((tip, index) => (
              <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-primary font-bold shrink-0">{index + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {content.faq.map((item, index) => (
              <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <h3 className="font-medium mb-2 text-sm">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Tools and Guides */}
      {(content.relatedTools.length > 0 || content.relatedGuides.length > 0) && (
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">관련 도구 및 가이드</h2>

          {content.relatedTools.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">관련 도구</h3>
              <div className="grid gap-2">
                {content.relatedTools.map((toolId) => {
                  const tool = getUtilityBySlug(toolId)
                  if (!tool) return null
                  return (
                    <Link
                      key={toolId}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-sm">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {content.relatedGuides.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">관련 가이드</h3>
              <div className="grid gap-2">
                {content.relatedGuides.map((guideId) => {
                  const guide = GUIDES.find((g) => g.id === guideId)
                  if (!guide) return null
                  return (
                    <Link
                      key={guideId}
                      href={`/guides/${guide.slug}`}
                      className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-sm">{guide.title}</div>
                        <div className="text-xs text-muted-foreground">{guide.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
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
