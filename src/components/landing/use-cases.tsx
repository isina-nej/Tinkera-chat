"use client";

import { useSiteCopy } from "@/components/site-copy";

export function UseCases() {
  const copy = useSiteCopy().useCases;

  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="section-title mt-3">{copy.title}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {copy.items.map((item) => (
            <article key={item.title} className="surface-panel p-5">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
