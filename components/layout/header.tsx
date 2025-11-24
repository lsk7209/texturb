import Link from "next/link"
import { PenTool, LayoutGrid, Map, BookOpen } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

/**
 * Component: Header
 * 사이트 상단 네비게이션 헤더 컴포넌트
 * @example <Header />
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <PenTool className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline-block">텍스터브</span>
            <span className="font-bold text-lg tracking-tight sm:hidden">TS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/tools" className="hover:text-foreground transition-colors">
              전체 도구
            </Link>
            <Link href="/workflows" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Map className="w-4 h-4" />
              워크플로
            </Link>
            <Link href="/guides" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <BookOpen className="w-4 h-4" />
              가이드
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              소개
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Link
            href="/tools"
            className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <LayoutGrid className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">전체 도구</span>
            <span className="sm:hidden">도구</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
