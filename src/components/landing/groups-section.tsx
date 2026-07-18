import { ChatAppPreview } from "@/components/preview/chat-app-preview";

const groupPoints = [
  "Pinned updates keep launch, ops, and community rooms aligned.",
  "Mentions, thread-ready replies, and shared files reduce follow-up noise.",
  "Presence makes it clear who is online, focused, or away before you ping them.",
];

export function GroupsSection() {
  return (
    <section id="groups" className="bg-muted/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <ChatAppPreview mode="group" className="min-h-[540px]" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Group chat showcase
            </p>
            <h2 className="section-title mt-3">Shared rooms for product teams, friend groups, and active communities.</h2>
            <p className="section-copy mt-4">
              Groups give every room a clear center of gravity: one place for status updates,
              active members, pinned context, and fast back-and-forth conversation.
            </p>
            <div className="mt-8 grid gap-3">
              {groupPoints.map((point) => (
                <div key={point} className="surface-panel px-4 py-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
