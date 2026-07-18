import { Info, Phone, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatMessage, Presence } from "@/data/mock-chat-data";
import { PreviewComposer } from "./preview-composer";
import { PreviewMessage } from "./preview-message";

type PreviewChatProps = {
  title: string;
  subtitle: string;
  avatar: string;
  presence?: Presence;
  messages: ChatMessage[];
  composerPlaceholder: string;
  pinnedLabel?: string;
  typingLabel?: string;
  groupMode?: boolean;
  compact?: boolean;
};

function presenceLabel(presence?: Presence) {
  if (presence === "online") return { dot: "bg-success", text: "Online" };
  if (presence === "focus") return { dot: "bg-primary", text: "Focus mode" };
  if (presence === "away") return { dot: "bg-warning", text: "Away" };
  return { dot: "bg-muted-foreground/40", text: "Offline" };
}

export function PreviewChat({
  title,
  subtitle,
  avatar,
  presence = "online",
  messages,
  composerPlaceholder,
  pinnedLabel,
  typingLabel,
  groupMode = false,
  compact = false,
}: PreviewChatProps) {
  const current = messages[0]?.senderId;
  const presenceState = presenceLabel(presence);

  return (
    <section className="flex min-h-0 flex-1 flex-col bg-card/20">
      <div className="flex items-center justify-between gap-3 border-b border-border/70 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-secondary text-sm font-semibold text-foreground">
            {avatar}
            <span className={cn("absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card", presenceState.dot)} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground sm:text-base">{title}</h3>
            <p className="text-xs text-muted-foreground">{subtitle || presenceState.text}</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 text-muted-foreground sm:flex">
          <button type="button" aria-label="Voice call" className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent transition-colors hover:border-border/70 hover:bg-muted/60 hover:text-foreground">
            <Phone className="h-4 w-4" />
          </button>
          <button type="button" aria-label="Video call" className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent transition-colors hover:border-border/70 hover:bg-muted/60 hover:text-foreground">
            <Video className="h-4 w-4" />
          </button>
          <button type="button" aria-label="Conversation details" className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent transition-colors hover:border-border/70 hover:bg-muted/60 hover:text-foreground">
            <Info className="h-4 w-4" />
          </button>
        </div>
      </div>

      {pinnedLabel ? (
        <div className="border-b border-border/70 bg-primary/8 px-4 py-2 text-xs font-medium text-primary sm:px-5">
          {pinnedLabel}
        </div>
      ) : null}

      <div className={cn("flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-5", compact ? "min-h-[300px]" : "min-h-[420px]")}>
        <div className="flex justify-center">
          <span className="rounded-full border border-border/70 bg-card px-3 py-1 text-[11px] text-muted-foreground">
            Today
          </span>
        </div>
        {messages.map((message) => (
          <PreviewMessage
            key={message.id}
            message={message}
            groupMode={groupMode}
            isCurrentUser={message.senderId === current}
          />
        ))}
        {typingLabel ? (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-secondary text-[11px] font-semibold text-foreground">
              {avatar}
            </div>
            <div className="rounded-full border border-border/70 bg-card px-3 py-2 text-xs text-muted-foreground">
              <span className="mr-2">{typingLabel}</span>
              <span className="inline-flex gap-1 align-middle">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" style={{ animationDelay: "0.15s" }} />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" style={{ animationDelay: "0.3s" }} />
              </span>
            </div>
          </div>
        ) : null}
      </div>

      <PreviewComposer placeholder={composerPlaceholder} />
    </section>
  );
}
