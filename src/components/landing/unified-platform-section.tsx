"use client";

import { Bell, FileText, MessageSquareText, Search, Users } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";

const foundationIcons = [MessageSquareText, Users, Search];
const systemIcons = [Search, Bell, FileText];

export function UnifiedPlatformSection() {
  const copy = useSiteCopy().unified;

  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="section-title mt-3">{copy.title}</h2>
          <p className="section-copy mt-4">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="grid gap-4">
            {copy.foundations.map((item, index) => {
              const Icon = foundationIcons[index];
              return (
                <div key={item.title} className="surface-panel flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
              {copy.becomes}
            </div>
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.workspaceEyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{copy.workspaceTitle}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {copy.systems.map((system, index) => {
                const Icon = systemIcons[index];
                return (
                  <div key={system} className="rounded-2xl border border-border/70 bg-background/70 p-4 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground">{system}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
