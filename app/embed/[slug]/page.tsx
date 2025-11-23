import { notFound } from "next/navigation"
import { UTILITIES } from "@/lib/utilities-registry"
import { TextStudioMain } from "@/components/text-studio/text-studio-main"

interface EmbedPageProps {
  params: {
    slug: string
  }
  searchParams: {
    theme?: "light" | "dark" | "auto"
    lang?: string
    [key: string]: string | string[] | undefined
  }
}

export function generateStaticParams() {
  const embeddableTools = ["char-counter", "slug-generator", "title-length-checker", "meta-description-checker"]
  return UTILITIES.filter((tool) => embeddableTools.includes(tool.slug)).map((tool) => ({
    slug: tool.slug,
  }))
}

export default function EmbedPage({ params, searchParams }: EmbedPageProps) {
  const tool = UTILITIES.find((t) => t.slug === params.slug)

  if (!tool) {
    notFound()
  }

  const embeddableTools = ["char-counter", "slug-generator", "title-length-checker", "meta-description-checker"]
  if (!embeddableTools.includes(tool.slug)) {
    notFound()
  }

  const activeTab = tool.tabId || "cleanup"
  const theme = searchParams.theme || "light"

  const themeClasses =
    theme === "dark"
      ? "bg-slate-900 text-white"
      : theme === "auto"
        ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white"
        : "bg-white text-slate-900"

  return (
    <div className={`min-h-screen ${themeClasses} p-4`}>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="text-center pb-2 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold">{tool.name}</h2>
          <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{tool.description}</p>
        </div>

        <TextStudioMain key={tool.slug} initialTab={activeTab} toolId={tool.slug} searchParams={searchParams} />

        <div className="text-center pt-2">
          <a
            href={
              typeof window !== "undefined" ? `${window.location.origin}/tools/${tool.slug}` : `/tools/${tool.slug}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs ${theme === "dark" ? "text-slate-400 hover:text-slate-300" : "text-slate-500 hover:text-slate-700"} transition-colors`}
          >
            Powered by 텍스터브
          </a>
        </div>
      </div>
    </div>
  )
}
