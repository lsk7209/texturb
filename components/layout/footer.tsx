export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-2">텍스터브</h3>
            <p className="text-sm text-muted-foreground">글 쓰는 사람을 위한 텍스트 유틸리티 작업실</p>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 텍스터브. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
