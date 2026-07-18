import {
  Bell,
  FileText,
  MessageSquare,
  MessageSquareReply,
  Mic,
  Search,
  ShieldCheck,
  UserCircle2,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Private messaging",
    description: "Clean one-to-one conversations with replies, read state, and lightweight controls.",
    icon: MessageSquare,
  },
  {
    title: "Group chats",
    description: "Bring teams, friends, and communities into structured shared rooms.",
    icon: Users,
  },
  {
    title: "Channels",
    description: "Use public, private, and announcement spaces to organize topics at scale.",
    icon: ShieldCheck,
  },
  {
    title: "Threads",
    description: "Keep the main timeline calm by moving side discussions into replies.",
    icon: MessageSquareReply,
  },
  {
    title: "File sharing",
    description: "Share docs, images, audio, and media without leaving the conversation flow.",
    icon: FileText,
  },
  {
    title: "Voice messages",
    description: "Drop a voice clip when text is too slow or too flat for the moment.",
    icon: Mic,
  },
  {
    title: "Search",
    description: "Find people, messages, files, and decisions before they disappear into history.",
    icon: Search,
  },
  {
    title: "Notifications",
    description: "Stay informed with mention-aware alerts instead of noisy all-or-nothing pings.",
    icon: Bell,
  },
  {
    title: "Profiles and presence",
    description: "Show status, role, and availability so people know when and how to reach you.",
    icon: UserCircle2,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Core features
          </p>
          <h2 className="section-title mt-3">Everything needed to keep conversations clear and fast.</h2>
          <p className="section-copy mt-4 max-w-2xl">
            Ovea keeps private chat, groups, channels, files, and presence in one system so work,
            community activity, and casual conversation stay connected.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const wide = index < 2;
            return (
              <article
                key={feature.title}
                className={`surface-panel p-6 ${wide ? "xl:col-span-6" : "xl:col-span-4"}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
