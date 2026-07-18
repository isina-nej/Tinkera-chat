"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";

export function FinalCta() {
  const copy = useSiteCopy().finalCta;

  return (
    <section className="pb-20 pt-6 sm:pb-24">
      <div className="section-shell">
        <div className="surface-panel relative overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.22),transparent_52%)]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{copy.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/chat"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
              >
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border/70 bg-card/70 px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
