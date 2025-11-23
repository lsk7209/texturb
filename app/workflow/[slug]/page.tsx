"use client"

import { useState, useEffect } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react"
import { getWorkflowBySlug } from "@/lib/workflows-registry"
import { getUtilityBySlug } from "@/lib/utilities-registry"

export default function WorkflowRunPage() {
  const params = useParams()
  const workflow = getWorkflowBySlug(params.slug as string)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  if (!workflow) {
    notFound()
  }

  const currentStep = workflow.steps[currentStepIndex]
  const currentTool = getUtilityBySlug(currentStep.toolId)
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === workflow.steps.length - 1

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentStepIndex])

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Workflow Header */}
      <div className="bg-card border-b border-border sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Link
                href="/workflows"
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                title="워크플로 목록으로"
                aria-label="워크플로 목록으로 돌아가기"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="min-w-0">
                <h1 className="font-bold text-foreground truncate">{workflow.title}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                  <span className="font-medium text-foreground">
                    단계 {currentStepIndex + 1}/{workflow.steps.length}
                  </span>
                  <span className="text-border" aria-hidden="true">
                    |
                  </span>
                  <span className="truncate">{currentStep.title}</span>
                </div>
              </div>
            </div>
            {/* Progress indicators - desktop only */}
            <div
              className="hidden md:flex items-center gap-2 shrink-0"
              role="progressbar"
              aria-valuenow={currentStepIndex + 1}
              aria-valuemin={1}
              aria-valuemax={workflow.steps.length}
              aria-label="워크플로 진행도"
            >
              {workflow.steps.map((step, idx) => (
                <div key={step.stepId} className="flex items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentStepIndex
                        ? "bg-foreground ring-4 ring-muted"
                        : idx < currentStepIndex
                          ? "bg-foreground"
                          : "bg-border"
                    }`}
                    aria-label={`${step.title} - ${idx < currentStepIndex ? "완료" : idx === currentStepIndex ? "진행 중" : "대기"}`}
                  />
                  {idx < workflow.steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 transition-colors ${idx < currentStepIndex ? "bg-foreground" : "bg-border"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-8 space-y-8">
        {/* Step Guide Card */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 font-bold text-lg">
              {currentStepIndex + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-foreground mb-2">{currentStep.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{currentStep.description}</p>

              {currentTool && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/tools/${currentTool.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {currentTool.name} 열기
                  </Link>
                  <p className="text-sm text-muted-foreground flex items-center">
                    새 탭에서 도구를 사용하고 작업을 마치면 '다음 단계'를 눌러주세요.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All Steps Overview */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="font-bold text-foreground mb-4">전체 단계 미리보기</h3>
          <div className="space-y-3">
            {workflow.steps.map((step, idx) => {
              const tool = getUtilityBySlug(step.toolId)
              const isComplete = idx < currentStepIndex
              const isCurrent = idx === currentStepIndex

              return (
                <div
                  key={step.stepId}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                    isCurrent ? "bg-primary/5 border border-primary/20" : isComplete ? "bg-muted/50" : ""
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      isComplete
                        ? "bg-primary text-primary-foreground"
                        : isCurrent
                          ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isComplete ? "✓" : idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground text-sm">
                      {step.title}
                      {isCurrent && <span className="ml-2 text-xs text-primary font-bold">(현재)</span>}
                    </div>
                    {tool && <div className="text-xs text-muted-foreground mt-1">사용 도구: {tool.name}</div>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Footer - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50 shadow-lg">
          <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={isFirstStep}
              className="px-4 md:px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="이전 단계로 이동"
            >
              이전 단계
            </button>

            {isLastStep ? (
              <Link
                href="/workflows"
                className="flex items-center gap-2 px-4 md:px-6 py-2.5 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                워크플로 완료
              </Link>
            ) : (
              <button
                onClick={() => setCurrentStepIndex((prev) => Math.min(workflow.steps.length - 1, prev + 1))}
                className="flex items-center gap-2 px-4 md:px-6 py-2.5 text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="다음 단계로 이동"
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
