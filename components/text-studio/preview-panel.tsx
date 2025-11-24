import { Card, CardContent } from "@/components/ui/card"

interface PreviewPanelProps {
  preview: string
}

// Preview panel for displaying transformed text
export function PreviewPanel({ preview }: PreviewPanelProps) {
  return (
    <Card className="h-full flex flex-col shadow-sm">
      <CardContent className="flex-1 p-4 sm:p-5 md:p-6 overflow-auto min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
        {preview ? (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm sm:text-base leading-relaxed">{preview}</pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm sm:text-base text-center px-4">
            변환 결과가 여기에 표시됩니다
          </div>
        )}
      </CardContent>
    </Card>
  )
}
