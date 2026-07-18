import { CheckCircle2 } from "lucide-react";
import { ChatAppPreview } from "@/components/preview/chat-app-preview";

const bullets = [
  "Per-chat privacy and notification controls without extra setup.",
  "Replies, reactions, files, and voice notes in the same message flow.",
  "Online state, delivery status, and read cues that stay lightweight.",
  "Searchable history for decisions, files, and the small details that matter later.",
];

export function PrivateChatSection() {
  return (
    <section id="private-chat" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Private chat
            </p>
            <h2 className="section-title mt-3">One-on-one conversations that still feel structured.</h2>
            <p className="section-copy mt-4">
              Talk directly, share context, send a quick voice note, and keep the conversation clean
              enough that you can return to it later without digging.
            </p>
            <ul className="mt-8 space-y-4">
              {bullets.map((item) => (
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
