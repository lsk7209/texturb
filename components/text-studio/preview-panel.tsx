import { Card, CardContent } from "@/components/ui/card"

interface PreviewPanelProps {
  preview: string
}

// Preview panel for displaying transformed text
export function PreviewPanel({ preview }: PreviewPanelProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-1 p-4 overflow-auto">
        {preview ? (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm">{preview}</pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            변환 결과가 여기에 표시됩니다
          </div>
        )}
      </CardContent>
    </Card>
  )
}
