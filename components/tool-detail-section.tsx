import Link from "next/link"
import { ExternalLink, Workflow, BookOpen, Wrench } from "lucide-react"
import { getToolDetailById } from "@/lib/tool-details-registry"
import { UTILITIES } from "@/lib/utilities-registry"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"
import { GUIDES } from "@/lib/guides-registry"

interface ToolDetailSectionProps {
  toolId: string
}

export function ToolDetailSection({ toolId }: ToolDetailSectionProps) {
  const detail = getToolDetailById(toolId)

  if (!detail) {
    return null
  }

  const relatedTools = detail.relatedToolIds
    .map((id) => UTILITIES.find((u) => u.id === id))
    .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined)

  const relatedWorkflows = detail.relatedWorkflowIds
    .map((id) => WORKFLOW_PRESETS.find((w) => w.id === id))
    .filter((workflow): workflow is NonNullable<typeof workflow> => workflow !== undefined)

  const relatedGuides = detail.relatedGuideSlugs
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter((guide): guide is NonNullable<typeof guide> => guide !== undefined)

  return (
    <div className="space-y-8 py-8 border-t border-border">
      {/* Use Cases Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-primary" aria-hidden="true" />이 도구로 해결할 수 있는 상황
        </h2>
        <ul className="space-y-2 list-none">
          {detail.useCases.map((useCase, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-1 shrink-0" aria-hidden="true">
                •
              </span>
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tips Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Wrench className="w-5 h-5 text-primary" aria-hidden="true" />
          사용 팁
        </h2>
        <ul className="space-y-2 list-none">
          {detail.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-1 shrink-0" aria-hidden="true">
                💡
              </span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">함께 쓰면 좋은 도구</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="p-4 border border-border rounded-lg hover:border-primary hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold">{tool.name}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                </div>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Workflows & Guides Section */}
      {(relatedWorkflows.length > 0 || relatedGuides.length > 0) && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">관련 워크플로 · 가이드</h2>
          <div className="space-y-3">
            {relatedWorkflows.map((workflow) => (
              <Link
                key={workflow.id}
                href={`/workflow/${workflow.slug}`}
                className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <Workflow className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium group-hover:text-primary transition-colors">{workflow.title}</div>
                  <div className="text-sm text-muted-foreground truncate">{workflow.description}</div>
                </div>
              </Link>
            ))}
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <BookOpen className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium group-hover:text-primary transition-colors">{guide.title}</div>
                  <div className="text-sm text-muted-foreground truncate">{guide.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
