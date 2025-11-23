import { FileX, AlignJustify, Type, Sparkles } from "lucide-react"

export function UseCasesSection() {
  const cases = [
    {
      icon: FileX,
      title: "복붙하면 줄바꿈이 깨질 때",
      desc: "PDF나 웹사이트에서 복사한 글의 엉망인 줄바꿈과 공백을 깔끔하게 정리해보세요.",
    },
    {
      icon: AlignJustify,
      title: "자소서·블로그 글자수 맞추고 싶을 때",
      desc: "공백 포함/제외 글자수를 확인하고 목표 분량에 맞춰 글을 다듬어보세요.",
    },
    {
      icon: Type,
      title: "영어 제목·소제목 대소문자 규칙이 헷갈릴 때",
      desc: "Title Case나 Sentence case 등 표준 표기법으로 한 번에 변환하세요.",
    },
    {
      icon: Sparkles,
      title: "제목·닉네임을 특수문자로 꾸미고 싶을 때",
      desc: "눈에 띄는 화살표, 별, 괄호 등 특수문자를 찾아 클릭 한 번으로 넣어보세요.",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto">
      <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">이 도구로 이런 상황을 해결할 수 있어요</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <item.icon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
