"use client";

import { CheckCircle2 } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";
import { ChatAppPreview } from "@/components/preview/chat-app-preview";

export function PrivateChatSection() {
  const copy = useSiteCopy().privateChat;

  return (
    <section id="private-chat" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2 className="section-title mt-3">{copy.title}</h2>
            <p className="section-copy mt-4">{copy.description}</p>
            <ul className="mt-8 space-y-4">
              {copy.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ChatAppPreview mode="private" className="min-h-[520px]" />
        </div>
      </div>
    </section>
  );
}
