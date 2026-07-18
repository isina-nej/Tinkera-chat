"use client";

import {
  Bell,
  FileText,
  MessageSquare,
  MessageSquareReply,
  Mic,
  Search,
  ShieldCheck,
  UserCircle2,
  Users,
} from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";

const icons = [
  MessageSquare,
  Users,
  ShieldCheck,
  MessageSquareReply,
  FileText,
  Mic,
  Search,
  Bell,
  UserCircle2,
];

export function Features() {
  const copy = useSiteCopy().features;

  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="section-title mt-3">{copy.title}</h2>
          <p className="section-copy mt-4 max-w-2xl">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {copy.items.map((feature, index) => {
            const Icon = icons[index];
            const wide = index < 2;
            return (
              <article
                key={feature.title}
                className={`surface-panel p-6 ${wide ? "xl:col-span-6" : "xl:col-span-4"}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
