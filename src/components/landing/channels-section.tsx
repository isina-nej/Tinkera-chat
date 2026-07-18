"use client";

import { Hash, Lock, Megaphone } from "lucide-react";
import { useMockChatData, useSiteCopy } from "@/components/site-copy";

const iconMap = {
  Public: Hash,
  Private: Lock,
  Announcement: Megaphone,
} as const;

const accentMap = {
  Public: "text-primary bg-primary/10 border-primary/20",
  Private: "text-warning bg-warning/10 border-warning/20",
  Announcement: "text-success bg-success/10 border-success/20",
} as const;

export function ChannelsSection() {
  const copy = useSiteCopy().channels;
  const { channelCards } = useMockChatData();

  return (
    <section id="channels" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="section-title mt-3">{copy.title}</h2>
          <p className="section-copy mt-4">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_0.95fr]">
          {channelCards.map((channel) => {
            const Icon = iconMap[channel.visibility];
            return (
              <article key={channel.id} className="surface-panel p-6">
                <div className={`inline-flex rounded-2xl border px-3 py-2 ${accentMap[channel.visibility]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{channel.name}</h3>
                  <span className="text-xs text-muted-foreground">
                    {copy.visibilityLabels[channel.visibility]}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{channel.description}</p>
                <div className="mt-5 rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-3">
                    <span>{channel.members}</span>
                    <span>{channel.activity}</span>
                  </div>
                </div>
              </article>
            );
          })}

          <aside className="surface-panel p-6 xl:row-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.permissionsEyebrow}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{copy.permissionsTitle}</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              {copy.permissionsPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
