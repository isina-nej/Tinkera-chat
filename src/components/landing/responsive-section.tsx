"use client";

import { useSiteCopy } from "@/components/site-copy";
import { ChatAppPreview } from "@/components/preview/chat-app-preview";

export function ResponsiveSection() {
  const copy = useSiteCopy().responsive;

  return (
    <section id="responsive" className="bg-muted/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl text-center sm:mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="section-title mt-3">{copy.title}</h2>
          <p className="section-copy mt-4">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="surface-panel overflow-hidden p-4 sm:p-5">
            <p className="mb-4 text-sm font-medium text-muted-foreground">{copy.desktop}</p>
            <ChatAppPreview mode="dashboard" className="min-h-[500px]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="surface-panel overflow-hidden p-4 sm:p-5">
              <p className="mb-4 text-sm font-medium text-muted-foreground">{copy.tablet}</p>
              <ChatAppPreview mode="private" className="min-h-[360px]" />
            </div>
            <div className="surface-panel overflow-hidden p-4 sm:p-5">
              <p className="mb-4 text-sm font-medium text-muted-foreground">{copy.mobile}</p>
              <div className="flex justify-center">
                <ChatAppPreview mode="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
