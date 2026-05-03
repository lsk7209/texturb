"use client";

import { useBlogView, useGuideView, useToolView } from "@/hooks/use-analytics";

export function BlogViewTracker({ slug }: { slug: string }) {
  useBlogView(slug);
  return null;
}

export function GuideViewTracker({ slug }: { slug: string }) {
  useGuideView(slug);
  return null;
}

export function ToolViewTracker({ toolId }: { toolId: string }) {
  useToolView(toolId);
  return null;
}
