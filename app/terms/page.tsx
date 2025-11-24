import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "이용약관 | 텍스터브",
  description: "텍스터브의 이용약관입니다.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">이용약관</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground/80">최종 수정일: 2025년 1월</p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제1조 (목적)</h2>
              <p>
                본 약관은 텍스터브(이하 "본 사이트")가 제공하는 온라인 서비스의 이용과 관련하여 본 사이트와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제2조 (정의)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>"본 사이트"란 텍스터브가 제공하는 텍스트 편집 도구 서비스를 의미합니다.</li>
                <li>"이용자"란 본 사이트에 접속하여 본 약관에 따라 본 사이트가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                <li>"서비스"란 본 사이트가 제공하는 모든 텍스트 편집 도구 및 관련 기능을 의미합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제3조 (약관의 게시와 개정)</h2>
              <p>
                본 사이트는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 본 사이트는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제4조 (서비스의 제공 및 변경)</h2>
              <p>
                본 사이트는 다음과 같은 서비스를 제공합니다:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>텍스트 편집 도구 (글자수 세기, 줄바꿈 정리, 대소문자 변환 등)</li>
                <li>텍스트 변환 도구 (마크다운 변환, 슬러그 생성 등)</li>
                <li>텍스트 분석 도구 (문장 수, 문단 수 세기 등)</li>
                <li>기타 본 사이트가 추가 개발하거나 제휴계약 등을 통해 제공하는 일체의 서비스</li>
              </ul>
              <p className="mt-4">
                본 사이트는 서비스의 내용을 변경할 수 있으며, 변경 시에는 사전에 공지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제5조 (서비스의 중단)</h2>
              <p>
                본 사이트는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 본 사이트는 사전에 공지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제6조 (이용자의 의무)</h2>
              <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>신청 또는 변경 시 허위 내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>본 사이트가 게시한 정보의 변경</li>
                <li>본 사이트가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>본 사이트와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>본 사이트 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 본 사이트에 공개 또는 게시하는 행위</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제7조 (개인정보보호)</h2>
              <p>
                본 사이트는 이용자의 개인정보 보호를 위하여 노력합니다. 이용자의 개인정보 보호에 관해서는 관련법령 및 본 사이트가 정하는 "개인정보처리방침"에 정한 바에 따릅니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제8조 (저작권의 귀속 및 이용제한)</h2>
              <p>
                본 사이트가 작성한 저작물에 대한 저작권 기타 지적재산권은 본 사이트에 귀속합니다. 이용자는 본 사이트를 이용함으로써 얻은 정보 중 본 사이트에게 지적재산권이 귀속된 정보를 본 사이트의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제9조 (면책조항)</h2>
              <p>
                본 사이트는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 본 사이트는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">제10조 (준거법 및 관할법원)</h2>
              <p>
                본 약관의 해석 및 본 사이트와 이용자 간의 분쟁에 대하여는 대한민국 법을 적용하며, 본 사이트와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/" className="text-primary hover:underline">
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

