"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

interface BreadcrumbNavProps {
  items: Array<{
    label: string
    href?: string
  }>
}

/**
 * Component: BreadcrumbNav
 * 현재 페이지 위치를 표시하는 breadcrumb 네비게이션
 * @param {Array} items - breadcrumb 항목 배열 [Required]
 * @example <BreadcrumbNav items={[{ label: "홈", href: "/" }, { label: "도구", href: "/tools" }, { label: "글자수 세기" }]} />
 */
export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  if (items.length === 0) return null

  return (
    <Breadcrumb className="mb-4 sm:mb-6">
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-sm sm:text-base">{item.label}</BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      {index === 0 && <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />}
                      <span>{item.label}</span>
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <span className="text-sm sm:text-base text-muted-foreground">{item.label}</span>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </BreadcrumbSeparator>
              )}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

