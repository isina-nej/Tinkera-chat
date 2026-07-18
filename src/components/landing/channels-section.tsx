import { Hash, Lock, Megaphone } from "lucide-react";
import { channelCards } from "@/data/mock-chat-data";

const iconMap = {
  Public: Hash,
  Private: Lock,
  Announcement: Megaphone,
} as const;

const accentMap = {
  Public: "text-primary bg-primary/10 border-primary/20",
  Private: "text-warning bg-warning/10 border-warning/20",
  Announcement: "text-success bg-success/10 border-success/20",
} as const;

export function ChannelsSection() {
  return (
    <section id="channels" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Channels showcase
          </p>
          <h2 className="section-title mt-3">Organize public discussion, private coordination, and broadcast updates.</h2>
          <p className="section-copy mt-4">
            Channels give large spaces real structure. Open rooms stay discoverable, private rooms stay
            controlled, and announcement streams stay clean when one-to-many communication matters.
          </p>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_0.95fr]">
          {channelCards.map((channel) => {
            const Icon = iconMap[channel.visibility];
            return (
              <article key={channel.id} className="surface-panel p-6">
                <div className={`inline-flex rounded-2xl border px-3 py-2 ${accentMap[channel.visibility]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{channel.name}</h3>
                  <span className="text-xs text-muted-foreground">{channel.visibility}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{channel.description}</p>
                <div className="mt-5 rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-3">
                    <span>{channel.members}</span>
                    <span>{channel.activity}</span>
                  </div>
                </div>
              </article>
            );
          })}

          <aside className="surface-panel p-6 xl:row-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Permissions
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Role-aware structure</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>Public channels help people discover shared context without asking for access first.</p>
              <p>Private channels keep sensitive planning scoped to the right members.</p>
              <p>Announcement channels let admins publish high-signal updates without chat drift.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
