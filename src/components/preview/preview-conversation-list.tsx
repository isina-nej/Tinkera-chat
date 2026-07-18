import { Hash, Search, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConversationItem } from "@/data/mock-chat-data";

type PreviewConversationListProps = {
  conversations: ConversationItem[];
  compact?: boolean;
  labels: {
    eyebrow: string;
    title: string;
    searchAria: string;
    pinned: string;
    directMessage: string;
  };
};

function presenceColor(presence?: string) {
  if (presence === "online") return "bg-success";
  if (presence === "focus") return "bg-primary";
  if (presence === "away") return "bg-warning";
  return "bg-muted-foreground/40";
}

export function PreviewConversationList({
  conversations,
  compact = false,
  labels,
}: PreviewConversationListProps) {
  return (
    <div
      className={cn(
        "border-r border-border/70 bg-card/40",
        compact ? "w-full" : "w-[312px]"
      )}
    >
      <div className="border-b border-border/70 px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {labels.eyebrow}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{labels.title}</h3>
          </div>
          <button
            type="button"
            aria-label={labels.searchAria}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2 p-3">
        {conversations.map((conversation, index) => (
          <div
            key={conversation.id}
            className={cn(
              "rounded-2xl border px-3 py-3 transition-colors",
              index === 0
                ? "border-primary/30 bg-primary/8"
                : "border-transparent bg-transparent hover:border-border/70 hover:bg-muted/50"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-secondary text-sm font-semibold text-foreground">
                {conversation.type === "channel" ? (
                  <Hash className="h-4 w-4" />
                ) : conversation.type === "group" ? (
                  <Users className="h-4 w-4" />
                ) : (
                  conversation.avatar
                )}
                <span
                  className={cn(
                    "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card",
                    presenceColor(conversation.presence)
                  )}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-foreground">{conversation.name}</p>
                  <span className="text-[11px] text-muted-foreground">{conversation.time}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {conversation.subtitle}
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-muted-foreground">
                    {conversation.members ?? (conversation.pinned ? labels.pinned : labels.directMessage)}
                  </span>
                  {conversation.unread > 0 ? (
                    <span className="inline-flex min-w-[1.35rem] items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      {conversation.unread}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
