"use client";

import { useSiteCopy } from "@/components/site-copy";
import { ChatAppPreview } from "@/components/preview/chat-app-preview";

export function GroupsSection() {
  const copy = useSiteCopy().groups;

  return (
    <section id="groups" className="bg-muted/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <ChatAppPreview mode="group" className="min-h-[540px]" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2 className="section-title mt-3">{copy.title}</h2>
            <p className="section-copy mt-4">{copy.description}</p>
            <div className="mt-8 grid gap-3">
              {copy.points.map((point) => (
                <div key={point} className="surface-panel px-4 py-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
