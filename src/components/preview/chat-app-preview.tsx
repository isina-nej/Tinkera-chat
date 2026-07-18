"use client";

import { cn } from "@/lib/utils";
import { useMockChatData, useSiteCopy } from "@/components/site-copy";
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
  const previewCopy = useSiteCopy().preview;
  const { users, sidebarItems, conversations, privateMessages, groupMessages } = useMockChatData();

  const chatLabels = {
    voiceCall: previewCopy.voiceCall,
    videoCall: previewCopy.videoCall,
    details: previewCopy.details,
    today: previewCopy.today,
    attachFile: previewCopy.attachFile,
    emoji: previewCopy.emoji,
    voiceMessage: previewCopy.voiceMessage,
    sendMessage: previewCopy.sendMessage,
    presence: previewCopy.presence,
  };

  const listLabels = {
    eyebrow: previewCopy.conversationEyebrow,
    title: previewCopy.conversationTitle,
    searchAria: previewCopy.searchConversations,
    pinned: previewCopy.pinned,
    directMessage: previewCopy.directMessage,
  };

  if (mode === "private") {
    return (
      <div className={cn("surface-panel overflow-hidden", className)}>
        <PreviewChat
          title={users.sarah.name}
          subtitle={previewCopy.privateSubtitle}
          avatar={users.sarah.avatar}
          presence={users.sarah.presence}
          messages={privateMessages}
          typingLabel={previewCopy.typingSarah}
          composerPlaceholder={previewCopy.privateComposer}
          labels={chatLabels}
        />
      </div>
    );
  }

  if (mode === "group") {
    return (
      <div className={cn("surface-panel overflow-hidden", className)}>
        <PreviewChat
          title={previewCopy.groupTitle}
          subtitle={previewCopy.groupSubtitle}
          avatar="PL"
          presence="focus"
          messages={groupMessages}
          groupMode
          pinnedLabel={previewCopy.groupPinned}
          typingLabel={previewCopy.groupTyping}
          composerPlaceholder={previewCopy.groupComposer}
          labels={chatLabels}
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
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{previewCopy.mobileEyebrow}</p>
              <h3 className="text-sm font-semibold">{previewCopy.mobileTitle}</h3>
            </div>
            <div className="rounded-full border border-border/70 px-2 py-1 text-[10px] text-muted-foreground">
              {previewCopy.mobileStatus}
            </div>
          </div>
          <PreviewChat
            title={users.sarah.name}
            subtitle={previewCopy.mobileStatus}
            avatar={users.sarah.avatar}
            presence={users.sarah.presence}
            messages={privateMessages.slice(1)}
            composerPlaceholder={previewCopy.mobileComposer}
            compact
            labels={chatLabels}
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
          <PreviewConversationList conversations={conversations} labels={listLabels} />
        </div>
        <PreviewChat
          title={users.sarah.name}
          subtitle={previewCopy.dashboardSubtitle}
          avatar={users.sarah.avatar}
          presence={users.sarah.presence}
          messages={privateMessages}
          typingLabel={previewCopy.typingSarah}
          composerPlaceholder={previewCopy.composerMain}
          labels={chatLabels}
        />
      </div>
    </div>
  );
}
