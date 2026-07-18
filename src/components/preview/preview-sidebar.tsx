import { Bell, Hash, MessageSquare, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItem, users } from "@/data/mock-chat-data";

type PreviewSidebarProps = {
  items: SidebarItem[];
  compact?: boolean;
};

const iconMap = {
  messages: MessageSquare,
  notifications: Bell,
  groups: Users,
  channels: Hash,
  settings: Settings,
} as const;

export function PreviewSidebar({ items, compact = false }: PreviewSidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col justify-between border-r border-border/70 bg-card/60",
        compact ? "w-[72px] px-2 py-3" : "w-[88px] px-3 py-4"
      )}
    >
      <div className="space-y-4">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20">
          OV
        </div>
        <div className="space-y-2">
          {items.slice(0, 4).map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                className={cn(
                  "relative mx-auto flex h-11 w-11 items-center justify-center rounded-2xl text-muted-foreground transition-colors",
                  item.active
                    ? "bg-primary/12 text-primary"
                    : "hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4.5 w-4.5" />
                {item.unread ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                    {item.unread}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          aria-label="Settings"
          className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Settings className="h-4.5 w-4.5" />
        </button>
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-secondary text-xs font-semibold text-foreground">
          {users.current.avatar}
        </div>
      </div>
    </aside>
  );
}
