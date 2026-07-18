const useCases = [
  {
    title: "For teams",
    description: "Ship work with direct messages, focused rooms, and searchable decisions that do not vanish in side tools.",
  },
  {
    title: "For communities",
    description: "Run public discussion, private moderation, and announcements in one structured environment.",
  },
  {
    title: "For friends",
    description: "Keep casual group chat, shared files, and voice notes lightweight without losing core messaging basics.",
  },
  {
    title: "For creators",
    description: "Separate fan spaces, member-only channels, and update streams while keeping engagement personal.",
  },
  {
    title: "For organizations",
    description: "Use permission-aware channels and visible session control when communication spans many roles.",
  },
];

export function UseCases() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Use cases
          </p>
          <h2 className="section-title mt-3">A communication platform that adapts to who is using it.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {useCases.map((item) => (
            <article key={item.title} className="surface-panel p-5">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
