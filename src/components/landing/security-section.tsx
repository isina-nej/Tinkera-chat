"use client";

import { KeyRound, LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";

const icons = [ShieldCheck, KeyRound, Smartphone, LockKeyhole];

export function SecuritySection() {
  const copy = useSiteCopy().security;

  return (
    <section id="security" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2 className="section-title mt-3">{copy.title}</h2>
            <p className="section-copy mt-4">{copy.description}</p>
            <div className="surface-panel mt-8 p-5">
              <p className="text-sm font-semibold text-foreground">{copy.sessionTitle}</p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">{copy.currentSessionDevice}</p>
                    <p className="text-xs">{copy.currentSessionMeta}</p>
                  </div>
                  <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    {copy.active}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">{copy.mobileDevice}</p>
                    <p className="text-xs">{copy.mobileMeta}</p>
                  </div>
                  <button type="button" className="text-xs font-medium text-primary">
                    {copy.review}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.cards.map((card, index) => {
              const Icon = icons[index];
              return (
                <article key={card.title} className="surface-panel p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
