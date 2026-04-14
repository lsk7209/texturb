import type { ReactNode } from "react";

// 어드민 섹션의 공통 쉘은 각 페이지에서 직접 인증을 처리하도록 단순화.
// 로그인 페이지는 인증 체크가 필요 없고, 보호된 페이지는 자체적으로
// requireAdminAuth()를 호출한다.
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
