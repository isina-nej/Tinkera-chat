import { Check, CheckCheck, FileText, Play, Reply } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatMessage } from "@/data/mock-chat-data";

type PreviewMessageProps = {
  message: ChatMessage;
  isCurrentUser: boolean;
  showAvatar?: boolean;
  groupMode?: boolean;
};

export function PreviewMessage({
  message,
  isCurrentUser,
  showAvatar = true,
  groupMode = false,
}: PreviewMessageProps) {
  const statusIcon =
    message.status === "read" ? (
      <CheckCheck className="h-3.5 w-3.5 text-primary" />
    ) : message.status === "delivered" ? (
      <CheckCheck className="h-3.5 w-3.5 text-muted-foreground" />
    ) : message.status === "sent" ? (
      <Check className="h-3.5 w-3.5 text-muted-foreground" />
    ) : null;

  return (
    <div className={cn("flex gap-3", isCurrentUser && "flex-row-reverse")}>
      {!isCurrentUser && showAvatar ? (
        <div className="mt-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-secondary text-[11px] font-semibold text-foreground">
          {message.senderAvatar}
        </div>
      ) : null}
      <div className={cn("max-w-[82%] space-y-2", isCurrentUser ? "items-end" : "items-start")}>
        {groupMode && !isCurrentUser ? (
          <p className="pl-1 text-[11px] font-medium text-muted-foreground">{message.senderName}</p>
        ) : null}
        <div
          className={cn(
            "rounded-[1.25rem] border px-3.5 py-3 text-sm shadow-sm",
            isCurrentUser
              ? "rounded-br-md border-primary/30 bg-primary text-primary-foreground"
              : "rounded-bl-md border-border/70 bg-card/90 text-foreground"
          )}
        >
          {message.reply ? (
            <div
              className={cn(
                "mb-2 flex items-start gap-2 rounded-xl border px-2.5 py-2 text-xs",
                isCurrentUser
                  ? "border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground/80"
                  : "border-border/70 bg-muted/60 text-muted-foreground"
              )}
            >
              <Reply className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span className="line-clamp-2">{message.reply}</span>
            </div>
          ) : null}

          {message.text ? (
            <p
              className={cn(
                "leading-6",
                message.mention && !isCurrentUser && "font-medium text-primary"
              )}
            >
              {message.text}
            </p>
          ) : null}

          {message.kind === "file" && message.file ? (
            <div
              className={cn(
                "mt-3 flex items-center gap-3 rounded-2xl border px-3 py-3",
                isCurrentUser
                  ? "border-primary-foreground/15 bg-primary-foreground/10"
                  : "border-border/70 bg-background/70"
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/70 text-foreground">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-sm font-medium">{message.file.name}</p>
                <p className={cn("text-xs", isCurrentUser ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {message.file.size}
                </p>
              </div>
            </div>
          ) : null}

          {message.kind === "voice" && message.voice ? (
            <div
              className={cn(
                "mt-3 flex items-center gap-3 rounded-2xl border px-3 py-3",
                isCurrentUser
                  ? "border-primary-foreground/15 bg-primary-foreground/10"
                  : "border-border/70 bg-background/70"
              )}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground">
                <Play className="ml-0.5 h-4 w-4" />
              </div>
              <div className="flex flex-1 items-end gap-1">
                {message.voice.waveform.map((bar, index) => (
                  <span
                    key={`${message.id}-${index}`}
                    className={cn(
                      "w-1 rounded-full",
                      isCurrentUser ? "bg-primary-foreground/75" : "bg-primary/65"
                    )}
                    style={{ height: `${bar / 2}px` }}
                  />
                ))}
              </div>
              <span className={cn("text-xs", isCurrentUser ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {message.voice.duration}
              </span>
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "flex items-center gap-2 pl-1 text-[11px] text-muted-foreground",
            isCurrentUser && "justify-end pr-1"
          )}
        >
          <span>{message.time}</span>
          {statusIcon}
        </div>

        {message.reactions?.length ? (
          <div className={cn("flex gap-2 pl-1", isCurrentUser && "justify-end pr-1")}>
            {message.reactions.map((reaction) => (
              <span
                key={`${message.id}-${reaction.emoji}`}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px]",
                  reaction.active
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border/70 bg-card text-muted-foreground"
                )}
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.count}</span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
