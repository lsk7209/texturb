import Link from "next/link"
import { ArrowRight, PenTool, FileText, Table, Code } from "lucide-react"
import { WORKFLOW_PRESETS } from "@/lib/workflows-registry"

const iconMap = {
  PenTool: PenTool,
  FileText: FileText,
  Table: Table,
  Code: Code,
}

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">상황별 워크플로</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            블로그 포스팅부터 보고서 작성까지, 상황에 딱 맞는 도구 조합으로 작업을 더 빠르게 끝내세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {WORKFLOW_PRESETS.map((workflow) => {
            const Icon = iconMap[workflow.icon as keyof typeof iconMap] || PenTool
            return (
              <Link
                key={workflow.id}
                href={`/workflows/${workflow.id}`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                    시작하기 <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{workflow.title}</h2>
                <p className="text-slate-600 mb-6">{workflow.description}</p>
                <div className="space-y-3">
                  {workflow.steps.map((step, index) => (
                    <div key={step.stepId} className="flex items-center text-sm text-slate-500">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold mr-3">
                        {index + 1}
                      </span>
                      {step.title}
                    </div>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
