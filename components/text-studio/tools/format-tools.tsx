"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  applyFormatTransform,
  DEFAULT_FORMAT_OPTIONS,
  type FormatOptions,
} from "@/lib/format-transforms";
import { renderFormatControls } from "./format-controls";

interface FormatToolsProps {
  text: string;
  onPreviewChange?: (text: string) => void;
  toolId?: string;
}

export function FormatTools({
  text,
  onPreviewChange,
  toolId,
}: FormatToolsProps) {
  const { toast } = useToast();
  const [opts, setOpts] = useState<FormatOptions>(DEFAULT_FORMAT_OPTIONS);

  const preview = useMemo(
    () => applyFormatTransform(text, toolId, opts),
    [text, toolId, opts],
  );

  useEffect(() => {
    onPreviewChange?.(preview);
  }, [preview, onPreviewChange]);

  const handleChange = useCallback(
    <K extends keyof FormatOptions>(key: K, value: FormatOptions[K]) => {
      setOpts((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(preview);
    toast({ description: "결과가 클립보드에 복사되었습니다.", duration: 2000 });
  }, [preview, toast]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {renderFormatControls(toolId, opts, handleChange, handleCopy)}
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">미리보기</Label>
          <div className="w-full h-[160px] p-3 rounded border border-slate-200 bg-white text-sm text-slate-600 overflow-y-auto whitespace-pre-wrap">
            {preview || (
              <span className="text-slate-300">결과가 여기에 표시됩니다.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
