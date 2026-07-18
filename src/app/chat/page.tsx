import Link from "next/link";
import { ArrowLeft, MonitorSmartphone, Sparkles } from "lucide-react";
import { ChatAppPreview } from "@/components/preview/chat-app-preview";

export default function ChatDemoPage() {
  return (
    <div className="min-h-screen bg-background pb-12 pt-6">
      <div className="section-shell space-y-8">
        <div className="surface-panel flex flex-col gap-6 px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Frontend-only chat demo
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Static mock data. No backend, no auth, no database. Just the product feel,
                  layout rhythm, and the messaging surfaces from the landing page.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Preview mode
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <MonitorSmartphone className="h-3.5 w-3.5 text-primary" />
                Responsive layouts
              </span>
            </div>
          </div>
          <div className="min-h-[620px]">
            <ChatAppPreview mode="dashboard" className="h-full min-h-[620px]" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-panel overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Private conversations</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Replies, file sharing, reactions, voice clips, and clean message context.
              </p>
            </div>
            <ChatAppPreview mode="private" className="min-h-[420px]" />
          </div>
          <div className="surface-panel overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Mobile-friendly</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Smaller surfaces simplify the interface instead of shrinking everything.
              </p>
            </div>
            <div className="flex justify-center">
              <ChatAppPreview mode="mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
