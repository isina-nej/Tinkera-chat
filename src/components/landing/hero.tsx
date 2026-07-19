"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Waves, Waypoints } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";
import { ChatAppPreview } from "@/components/preview/chat-app-preview";

const icons = [Sparkles, Waypoints, Waves];

export function Hero() {
  const copy = useSiteCopy().hero;

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="surface-grid absolute inset-0 opacity-40" />
      </div>

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            {copy.badge}
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-gradient sm:text-6xl lg:text-7xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {copy.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/app/auth/register"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
            >
              {copy.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/app/auth/register"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border/70 bg-card/70 px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {copy.secondaryCta}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {copy.pillars.map((pillar, index) => {
              const Icon = icons[index];
              return (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {pillar}
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="float-soft absolute -left-4 top-10 hidden rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-xl shadow-foreground/10 backdrop-blur md:block">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{copy.livePresenceLabel}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{copy.livePresenceValue}</p>
          </div>
          <div
            className="float-soft absolute -right-4 top-20 hidden rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-xl shadow-foreground/10 backdrop-blur lg:block"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{copy.sharedLabel}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{copy.sharedValue}</p>
          </div>
          <ChatAppPreview mode="dashboard" className="min-h-[620px]" />
        </div>
      </div>
    </section>
  );
}
