"use client"

import { useState, useCallback } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EditorPanel } from "@/components/text-studio/editor-panel"
import { PreviewPanel } from "@/components/text-studio/preview-panel"
import { toolRegistry } from "@/lib/tool-registry"
import { ErrorBoundary } from "@/components/error-boundary"

export type TabId = "cleanup" | "transform" | "analysis" | "highlight"

interface TextStudioMainProps {
  // New prop names (preferred)
  toolId?: string
  value?: string
  onChange?: (value: string) => void
  onPreviewChange?: (preview: string) => void
  externalActiveTab?: string
  onTabChange?: (tab: string) => void

  // Legacy prop names (for compatibility)
  initialTab?: string
  initialText?: string
  activeTab?: TabId
  inputText?: string
  previewText?: string
  onInputChange?: (text: string) => void
  onTextChange?: (text: string) => void
  searchParams?: { [key: string]: string | string[] | undefined }
  enableTracking?: boolean
}

export function TextStudioMain(props: TextStudioMainProps) {
  const {
    toolId,
    value,
    onChange,
    onPreviewChange,
    externalActiveTab,
    onTabChange,
    // Legacy props
    initialTab,
    initialText,
    activeTab: legacyActiveTab,
    inputText,
    previewText,
    onInputChange,
    onTextChange,
    searchParams,
    enableTracking = true,
  } = props

  // State management
  const [internalText, setInternalText] = useState(initialText || "")
  const [internalTab, setInternalTab] = useState<TabId>((initialTab || "cleanup") as TabId)
  const [previewOutput, setPreviewOutput] = useState(previewText || "")

  // Determine controlled vs uncontrolled mode
  const isControlled = value !== undefined || inputText !== undefined
  const currentText = value ?? inputText ?? internalText
  const currentTab = (externalActiveTab || legacyActiveTab || internalTab) as TabId

  // Text change handler
  const handleTextUpdate = useCallback(
    (newText: string) => {
      if (value !== undefined) {
        onChange?.(newText)
      } else if (inputText !== undefined) {
        onInputChange?.(newText)
      } else {
        setInternalText(newText)
      }
      onTextChange?.(newText)
    },
    [value, inputText, onChange, onInputChange, onTextChange],
  )

  // Tab change handler
  const handleTabUpdate = useCallback(
    (newTab: string) => {
      if (externalActiveTab === undefined && legacyActiveTab === undefined) {
        setInternalTab(newTab as TabId)
      }
      onTabChange?.(newTab)
    },
    [externalActiveTab, legacyActiveTab, onTabChange],
  )

  // Preview change handler
  const handlePreviewUpdate = useCallback(
    (preview: string) => {
      setPreviewOutput(preview)
      onPreviewChange?.(preview)
    },
    [onPreviewChange],
  )

  // Get current tool component
  const ActiveToolComponent = toolId ? toolRegistry[toolId] : toolRegistry[currentTab]

  return (
    <div className="flex h-full flex-col">
      <Tabs value={currentTab} onValueChange={handleTabUpdate} className="flex flex-1 flex-col">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="cleanup">정리</TabsTrigger>
          <TabsTrigger value="transform">변환</TabsTrigger>
          <TabsTrigger value="analysis">분석</TabsTrigger>
          <TabsTrigger value="highlight">강조</TabsTrigger>
        </TabsList>

        <div className="flex flex-1 gap-4 overflow-hidden pt-4">
          <ErrorBoundary>
            <EditorPanel text={currentText} onTextChange={handleTextUpdate} activeTab={currentTab} />
          </ErrorBoundary>

          <TabsContent value="cleanup" className="m-0 flex-1">
            <PreviewPanel preview={previewOutput} />
          </TabsContent>
          <TabsContent value="transform" className="m-0 flex-1">
            <PreviewPanel preview={previewOutput} />
          </TabsContent>
          <TabsContent value="analysis" className="m-0 flex-1">
            <PreviewPanel preview={previewOutput} />
          </TabsContent>
          <TabsContent value="highlight" className="m-0 flex-1">
            <PreviewPanel preview={previewOutput} />
          </TabsContent>
        </div>

        {ActiveToolComponent && (
          <div className="mt-4">
            <ActiveToolComponent text={currentText} onPreview={handlePreviewUpdate} />
          </div>
        )}
      </Tabs>
    </div>
  )
}
