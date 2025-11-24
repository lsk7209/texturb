import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "개인정보처리방침 | 텍스터브",
  description: "텍스터브의 개인정보처리방침입니다.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">개인정보처리방침</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground/80">최종 수정일: 2025년 1월</p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. 개인정보의 처리 목적</h2>
              <p>
                텍스터브(이하 "본 사이트")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>서비스 제공: 텍스트 편집 도구 제공 및 기능 개선</li>
                <li>통계 분석: 서비스 이용 통계 및 분석 (익명화된 데이터)</li>
                <li>고객 지원: 문의사항 응대 및 피드백 처리</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. 개인정보의 처리 및 보유기간</h2>
              <p>
                본 사이트는 사용자가 입력한 텍스트 데이터를 서버에 저장하지 않습니다. 모든 텍스트 처리는 사용자의 브라우저에서만 이루어지며, 서버로 전송되지 않습니다.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>서비스 이용 기록: 익명화된 통계 데이터만 수집 (영구 보관)</li>
                <li>쿠키: 서비스 이용 편의를 위한 쿠키 사용 (브라우저 설정에 따라 관리)</li>
                <li>로컬 스토리지: 최근 작업 내용은 사용자 브라우저에만 저장 (사용자가 삭제 가능)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. 개인정보의 제3자 제공</h2>
              <p>
                본 사이트는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>법령에 의해 수사기관의 요구가 있는 경우</li>
                <li>Google Analytics: 익명화된 방문 통계 수집 (Google 개인정보처리방침 적용)</li>
                <li>Google AdSense: 광고 서비스 제공 (Google 개인정보처리방침 적용)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. 개인정보처리의 위탁</h2>
              <p>
                본 사이트는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Vercel: 웹 호스팅 서비스 (데이터 저장 없음)</li>
                <li>Google Analytics: 방문 통계 분석 (익명화된 데이터)</li>
                <li>Google AdSense: 광고 서비스</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. 정보주체의 권리·의무 및 행사방법</h2>
              <p>
                사용자는 언제든지 다음의 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리 정지 요구</li>
              </ul>
              <p className="mt-4">
                위 권리 행사는 본 사이트의 연락처를 통해 요청하실 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. 쿠키의 운영 및 거부</h2>
              <p>
                본 사이트는 사용자에게 개인화된 서비스를 제공하기 위해 쿠키를 사용합니다. 쿠키는 웹사이트를 방문할 때 사용자의 브라우저에 저장되는 작은 텍스트 파일입니다.
              </p>
              <p className="mt-4">
                사용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹 브라우저 설정에서 쿠키 허용 여부를 선택할 수 있습니다. 다만, 쿠키 설치를 거부할 경우 서비스 이용에 어려움이 있을 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. 개인정보 보호책임자</h2>
              <p>
                본 사이트의 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold">개인정보 보호책임자</p>
                <p>이메일: contact@texturb.com</p>
                <p className="text-sm mt-2">정보주체께서는 본 사이트의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. 개인정보처리방침 변경</h2>
              <p>
                이 개인정보처리방침은 2025년 1월부터 적용되며, 법령 및 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항의 시행 7일 전부터 본 사이트의 공지사항을 통하여 고지할 것입니다.
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

