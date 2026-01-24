import Link from "next/link"
import { Mail, MessageSquare, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "문의하기 - 텍스터브 | 연락처 및 고객지원",
    description: "텍스터브에 대한 문의사항, 기능 제안, 버그 신고 등을 환영합니다. 이메일 또는 피드백 양식을 통해 연락해 주세요.",
    keywords: ["텍스터브 문의", "고객지원", "연락처", "기능 제안", "버그 신고"],
    alternates: {
        canonical: "/contact",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-2xl">
                <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-primary" />
                    </div>

                    <h1 className="text-3xl font-bold mb-4">문의하기</h1>
                    <p className="text-muted-foreground mb-10 leading-relaxed">
                        텍스터브를 이용해 주셔서 감사합니다.<br />
                        궁금한 점이나 제안하고 싶은 내용이 있다면 언제든지 말씀해 주세요.
                    </p>

                    <div className="space-y-6">
                        <div className="p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/50 transition-colors group text-left">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                                    <Mail className="w-5 h-5 text-slate-600" />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-lg mb-1">이메일 문의</h2>
                                    <p className="text-muted-foreground text-sm mb-3">
                                        일반적인 문의, 제휴 제안, 기타 모든 사항
                                    </p>
                                    <a
                                        href="mailto:contact@texturb.com"
                                        className="text-primary font-medium hover:underline flex items-center gap-1.5"
                                    >
                                        contact@texturb.com <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/50 transition-colors group text-left">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                                    <MessageSquare className="w-5 h-5 text-slate-600" />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-lg mb-1">기능 제안 및 버그 신고</h2>
                                    <p className="text-muted-foreground text-sm mb-3">
                                        새로운 기능 아이디어나 발견한 오류를 알려주세요.
                                    </p>
                                    <a
                                        href="https://github.com/lsk7209/texturb/issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-medium hover:underline flex items-center gap-1.5"
                                    >
                                        GitHub Issues 바로가기 <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">
                            자주 묻는 질문은 각 도구 페이지의 FAQ 섹션이나 <Link href="/guides" className="text-primary hover:underline">가이드</Link>를 참고해 주세요.
                        </p>
                        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900">
                            ← 홈으로 돌아가기
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
