"use client";

import { useSiteCopy } from "@/components/site-copy";

export function SocialProof() {
  const copy = useSiteCopy().socialProof;

  return (
    <section className="pb-8 pt-2 sm:pb-10">
      <div className="section-shell">
        <div className="surface-panel px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {copy.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{copy.title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {copy.marks.map((mark) => (
              <div
                key={mark}
                className="rounded-2xl border border-border/70 bg-background/70 px-4 py-4 text-center text-sm font-medium text-foreground"
              >
                {mark}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
