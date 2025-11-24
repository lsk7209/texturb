import Link from "next/link"

/**
 * Component: Footer
 * 사이트 하단 푸터 컴포넌트
 * 법적 페이지 링크 및 사이트 정보 포함
 * @example <Footer />
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8 sm:py-10 md:py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-bold text-base sm:text-lg leading-tight">텍스터브</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              글 쓰는 사람을 위한 텍스트 유틸리티 작업실
            </p>
            <Link
              href="/about"
              className="text-sm text-primary hover:underline inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5"
            >
              서비스 소개 →
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-sm sm:text-base leading-tight">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/tools" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
                >
                  전체 도구
                </Link>
              </li>
              <li>
                <Link 
                  href="/workflows" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
                >
                  워크플로
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
                >
                  사용 가이드
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
                >
                  서비스 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-sm sm:text-base leading-tight">법적 정보</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>© {currentYear} 텍스터브. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@texturb.com"
                className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
