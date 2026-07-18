import { cn } from "@/lib/utils";
import {
  conversations,
  groupMessages,
  privateMessages,
  sidebarItems,
  users,
} from "@/data/mock-chat-data";
import { PreviewChat } from "./preview-chat";
import { PreviewConversationList } from "./preview-conversation-list";
import { PreviewSidebar } from "./preview-sidebar";

type ChatAppPreviewProps = {
  mode?: "dashboard" | "private" | "group" | "mobile";
  className?: string;
};

export function ChatAppPreview({
  mode = "dashboard",
  className,
}: ChatAppPreviewProps) {
  if (mode === "private") {
    return (
      <div className={cn("surface-panel overflow-hidden", className)}>
        <PreviewChat
          title={users.sarah.name}
          subtitle="Design lead · Online"
          avatar={users.sarah.avatar}
          presence={users.sarah.presence}
          messages={privateMessages}
          typingLabel="Sarah is typing"
          composerPlaceholder="Message Sarah about launch notes..."
        />
      </div>
    );
  }

  if (mode === "group") {
    return (
      <div className={cn("surface-panel overflow-hidden", className)}>
        <PreviewChat
          title="Product launch"
          subtitle="12 members · 7 online now"
          avatar="PL"
          presence="focus"
          messages={groupMessages}
          groupMode
          pinnedLabel="Pinned: final rollout checklist and escalation contacts"
          typingLabel="Nina is writing in thread"
          composerPlaceholder="Reply to the group or start a thread..."
        />
      </div>
    );
  }

  if (mode === "mobile") {
    return (
      <div className={cn("w-[320px] rounded-[2rem] border border-border/70 bg-card/90 p-2 shadow-2xl shadow-foreground/10", className)}>
        <div className="overflow-hidden rounded-[1.6rem] border border-border/70 bg-background">
          <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Ovea mobile</p>
              <h3 className="text-sm font-semibold">Private chat</h3>
            </div>
            <div className="rounded-full border border-border/70 px-2 py-1 text-[10px] text-muted-foreground">
              Online
            </div>
          </div>
          <PreviewChat
            title={users.sarah.name}
            subtitle="Online"
            avatar={users.sarah.avatar}
            presence={users.sarah.presence}
            messages={privateMessages.slice(1)}
            composerPlaceholder="Write a message"
            compact
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("surface-panel overflow-hidden", className)}>
      <div className="flex h-full min-h-[560px] w-full overflow-hidden bg-card/30">
        <div className="hidden md:block">
          <PreviewSidebar items={sidebarItems} />
        </div>
        <div className="hidden lg:block">
          <PreviewConversationList conversations={conversations} />
        </div>
        <PreviewChat
          title={users.sarah.name}
          subtitle="Design lead · Online"
          avatar={users.sarah.avatar}
          presence={users.sarah.presence}
          messages={privateMessages}
          typingLabel="Sarah is typing"
          composerPlaceholder="Write a message, drop a file, or record a voice note..."
        />
      </div>
    </div>
  );
}
