import { KeyRound, LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";

const cards = [
  {
    title: "Privacy controls",
    copy: "Tune notifications, room visibility, and conversation preferences at the chat, group, or channel level.",
    icon: ShieldCheck,
  },
  {
    title: "Account safety",
    copy: "Review active devices, limit access, and keep sign-in surfaces understandable for real people.",
    icon: KeyRound,
  },
  {
    title: "Session management",
    copy: "See where your account is active and revoke sessions that no longer belong in the loop.",
    icon: Smartphone,
  },
  {
    title: "Permission-aware channels",
    copy: "Separate public discussion, private planning, and broadcast updates with clear posting rules.",
    icon: LockKeyhole,
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Security and privacy
            </p>
            <h2 className="section-title mt-3">Accurate controls, clear access, and sensible defaults.</h2>
            <p className="section-copy mt-4">
              Ovea focuses on the things a communication product should state clearly: private conversations,
              session visibility, account safety, and role-based channel permissions.
            </p>
            <div className="surface-panel mt-8 p-5">
              <p className="text-sm font-semibold text-foreground">Active sessions</p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">MacBook Pro · Chrome</p>
                    <p className="text-xs">Current session · London</p>
                  </div>
                  <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">iPhone · Mobile app</p>
                    <p className="text-xs">Last seen 4 min ago</p>
                  </div>
                  <button type="button" className="text-xs font-medium text-primary">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="surface-panel p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
