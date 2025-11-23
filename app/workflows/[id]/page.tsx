"use client"

import { useState, useEffect } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react"
import { getWorkflowById } from "@/lib/workflows-registry"
import { getUtilityBySlug } from "@/lib/utilities-registry"
import { TextStudioMain } from "@/components/text-studio/text-studio-main"

export default function WorkflowRunPage() {
  const params = useParams()
  const workflow = getWorkflowById(params.id as string)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  if (!workflow) {
    notFound()
  }

  const currentStep = workflow.steps[currentStepIndex]
  const currentTool = getUtilityBySlug(currentStep.toolId)
  const isLastStep = currentStepIndex === workflow.steps.length - 1

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentStepIndex])

  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-20">
      {/* Workflow Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/workflows"
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                title="워크플로 목록으로"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-bold text-slate-900">{workflow.title}</h1>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-0.5">
                  <span className="font-medium text-slate-900">
                    단계 {currentStepIndex + 1}/{workflow.steps.length}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span>{currentStep.title}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {workflow.steps.map((step, idx) => (
                <div key={step.stepId} className="flex items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      idx === currentStepIndex
                        ? "bg-slate-900 ring-4 ring-slate-100"
                        : idx < currentStepIndex
                          ? "bg-slate-900"
                          : "bg-slate-200"
                    }`}
                  />
                  {idx < workflow.steps.length - 1 && (
                    <div className={`w-8 h-0.5 ${idx < currentStepIndex ? "bg-slate-900" : "bg-slate-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-8">
        {/* Step Guide Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="font-bold text-lg">{currentStepIndex + 1}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-slate-900 mb-1">{currentStep.description}</h2>
              <p className="text-slate-600 text-sm">
                이 단계에서는 <strong>{currentTool?.name}</strong> 도구를 사용합니다. 작업을 마치면 하단의 '다음 단계'
                버튼을 눌러주세요.
              </p>
            </div>
          </div>
        </div>

        {/* Tool Area */}
        <div className="mb-8">
          {currentTool && (
            <TextStudioMain key={currentTool.slug} initialTab={currentTool.tabId} toolId={currentTool.id} />
          )}
        </div>

        {/* Navigation Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50">
          <div className="container mx-auto max-w-5xl flex items-center justify-between">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
              className="px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              이전 단계
            </button>

            {isLastStep ? (
              <Link
                href="/workflows"
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                워크플로 완료
              </Link>
            ) : (
              <button
                onClick={() => setCurrentStepIndex((prev) => Math.min(workflow.steps.length - 1, prev + 1))}
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all"
              >
                다음 단계
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
