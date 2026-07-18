import { Mic, Paperclip, Send, Smile } from "lucide-react";

type PreviewComposerProps = {
  placeholder: string;
  labels: {
    attachFile: string;
    emoji: string;
    voiceMessage: string;
    sendMessage: string;
  };
};

export function PreviewComposer({ placeholder, labels }: PreviewComposerProps) {
  return (
    <div className="border-t border-border/70 bg-card/70 p-3 sm:p-4">
      <div className="flex items-center gap-2 rounded-[1.1rem] border border-border/70 bg-background/70 px-3 py-2.5">
        <button
          type="button"
          aria-label={labels.attachFile}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
        >
          <Paperclip className="h-4 w-4" />
        </button>
        <div className="flex-1 px-1 text-sm text-muted-foreground">{placeholder}</div>
        <button
          type="button"
          aria-label={labels.emoji}
          className="hidden h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground sm:flex"
        >
          <Smile className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={labels.voiceMessage}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mic className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={labels.sendMessage}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03]"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
