import Link from "next/link"
import { ArrowRight, BookOpen, Map } from "lucide-react"
import { GUIDES } from "@/lib/guides-registry"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">사용 가이드</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            텍스터브를 200% 활용하는 방법과 상황별 텍스트 작업 노하우를 확인하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                  읽기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{guide.title}</h2>
              <p className="text-slate-600 mb-6 line-clamp-2">{guide.description}</p>
              {guide.relatedWorkflowId && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                  <Map className="w-3 h-3 mr-1.5" />
                  관련 워크플로 포함
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
