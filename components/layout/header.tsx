"use client"

import { useState } from "react"
import Link from "next/link"
import { PenTool, LayoutGrid, Map, BookOpen, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

/**
 * Component: Header
 * 사이트 상단 네비게이션 헤더 컴포넌트
 * 모바일 반응형 네비게이션 포함
 * @example <Header />
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shrink-0">
              <PenTool className="w-4 h-4" aria-hidden="true" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline-block">텍스터브</span>
            <span className="font-bold text-lg tracking-tight sm:hidden">TS</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground" aria-label="주요 네비게이션">
            <Link href="/tools" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1">
              전체 도구
            </Link>
            <Link href="/workflows" className="flex items-center gap-1.5 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1">
              <Map className="w-4 h-4" aria-hidden="true" />
              워크플로
            </Link>
            <Link href="/guides" className="flex items-center gap-1.5 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              가이드
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1">
              소개
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          
          {/* 모바일 메뉴 */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="메뉴 열기"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle>메뉴</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8" aria-label="모바일 네비게이션">
                <Link
                  href="/tools"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <LayoutGrid className="w-5 h-5" aria-hidden="true" />
                  전체 도구
                </Link>
                <Link
                  href="/workflows"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Map className="w-5 h-5" aria-hidden="true" />
                  워크플로
                </Link>
                <Link
                  href="/guides"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                  가이드
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  서비스 소개
                </Link>
                <div className="border-t border-border pt-4 mt-4">
                  <Link
                    href="/privacy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    개인정보처리방침
                  </Link>
                  <Link
                    href="/terms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    이용약관
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* 데스크톱 전체 도구 버튼 */}
          <Link
            href="/tools"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            전체 도구
          </Link>
        </div>
      </div>
    </header>
  )
}
