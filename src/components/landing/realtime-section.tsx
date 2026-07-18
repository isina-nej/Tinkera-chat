"use client";

import { BellRing, CheckCheck, CircleDotDashed, RadioTower, Users } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";

const signalIcons = [CircleDotDashed, CheckCheck, BellRing];

export function RealtimeSection() {
  const copy = useSiteCopy().realtime;

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2 className="section-title mt-3">{copy.title}</h2>
            <p className="section-copy mt-4">{copy.description}</p>
            <div className="mt-8 space-y-3">
              {copy.signals.map((signal, index) => {
                const Icon = signalIcons[index];
                return (
                  <div key={signal.title} className="surface-panel flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{signal.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">{signal.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <RadioTower className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{copy.liveStatusTitle}</p>
                    <p className="text-xs text-muted-foreground">{copy.liveStatusSubtitle}</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-border/70 bg-card/90 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>{copy.mayaTyping}</span>
                    <span className="inline-flex gap-1">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" style={{ animationDelay: "0.15s" }} />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" style={{ animationDelay: "0.3s" }} />
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span>{copy.lastDelivered}</span>
                    <CheckCheck className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
              <div className="rounded-[1.35rem] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{copy.presenceTitle}</p>
                    <p className="text-xs text-muted-foreground">{copy.presenceSubtitle}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/90 px-4 py-3">
                    <span>{copy.onlineNow}</span>
                    <span className="font-medium text-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/90 px-4 py-3">
                    <span>{copy.unreadMentions}</span>
                    <span className="font-medium text-foreground">3</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/90 px-4 py-3">
                    <span>{copy.activeThreads}</span>
                    <span className="font-medium text-foreground">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
