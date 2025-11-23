import { Lock } from "lucide-react"

export function PrivacyMessage() {
  return (
    <div className="space-y-2 text-center">
      <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
        <Lock className="w-3 h-3" />
        <span>입력한 텍스트는 서버에 저장되지 않고 브라우저 안에서만 처리됩니다.</span>
      </div>
      <p className="text-xs text-slate-400">
        최근 작업 내용은 브라우저에만 임시 저장되며, [삭제하기]를 눌러 언제든지 지울 수 있습니다.
      </p>
    </div>
  )
}
