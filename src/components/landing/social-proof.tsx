const audiences = ["Teams", "Communities", "Friends", "Organizations", "Creators"];
const marks = ["Northstar", "Pulse Studio", "Juniper", "Arc Society", "Mosaic Labs"];

export function SocialProof() {
  return (
    <section className="pb-8 pt-2 sm:pb-10">
      <div className="section-shell">
        <div className="surface-panel px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Designed for every communication layer
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Built for teams, communities, friends, and organizations.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {marks.map((mark) => (
              <div
                key={mark}
                className="rounded-2xl border border-border/70 bg-background/70 px-4 py-4 text-center text-sm font-medium text-foreground"
              >
                {mark}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
