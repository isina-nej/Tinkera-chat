export type Presence = "online" | "focus" | "away" | "offline";
export type ConversationType = "private" | "group" | "channel";
export type MessageKind = "text" | "file" | "voice";

export type UserProfile = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  presence: Presence;
};

export type SidebarItem = {
  id: string;
  label: string;
  icon: "messages" | "notifications" | "groups" | "channels" | "settings";
  active?: boolean;
  unread?: number;
};

export type ConversationItem = {
  id: string;
  type: ConversationType;
  name: string;
  subtitle: string;
  time: string;
  unread: number;
  avatar: string;
  presence?: Presence;
  members?: string;
  muted?: boolean;
  pinned?: boolean;
};

export type Reaction = {
  emoji: string;
  count: number;
  active?: boolean;
};

export type ChatMessage = {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  time: string;
  kind?: MessageKind;
  text?: string;
  reply?: string;
  reactions?: Reaction[];
  status?: "sent" | "delivered" | "read";
  mention?: boolean;
  file?: {
    name: string;
    size: string;
  };
  voice?: {
    duration: string;
    waveform: number[];
  };
};

export type ChannelCard = {
  id: string;
  name: string;
  visibility: "Public" | "Private" | "Announcement";
  description: string;
  members: string;
  activity: string;
};

export const users: Record<string, UserProfile> = {
  current: {
    id: "u1",
    name: "Alex Morgan",
    avatar: "AM",
    role: "Product lead",
    presence: "online",
  },
  sarah: {
    id: "u2",
    name: "Sarah Chen",
    avatar: "SC",
    role: "Design lead",
    presence: "online",
  },
  maya: {
    id: "u3",
    name: "Maya Johnson",
    avatar: "MJ",
    role: "Community manager",
    presence: "focus",
  },
  david: {
    id: "u4",
    name: "David Miller",
    avatar: "DM",
    role: "Engineering",
    presence: "away",
  },
  nina: {
    id: "u5",
    name: "Nina Patel",
    avatar: "NP",
    role: "Operations",
    presence: "online",
  },
};

export const sidebarItems: SidebarItem[] = [
  { id: "messages", label: "Messages", icon: "messages", active: true },
  { id: "notifications", label: "Notifications", icon: "notifications", unread: 3 },
  { id: "groups", label: "Groups", icon: "groups" },
  { id: "channels", label: "Channels", icon: "channels" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export const conversations: ConversationItem[] = [
  {
    id: "c1",
    type: "private",
    name: users.sarah.name,
    subtitle: "Draft looks sharp. Want me to tighten the hero copy too?",
    time: "10:42",
    unread: 0,
    avatar: users.sarah.avatar,
    presence: users.sarah.presence,
    pinned: true,
  },
  {
    id: "c2",
    type: "group",
    name: "Product launch",
    subtitle: "Maya: I pinned the final rollout checklist.",
    time: "09:15",
    unread: 4,
    avatar: "PL",
    members: "12 members",
    pinned: true,
  },
  {
    id: "c3",
    type: "channel",
    name: "#design",
    subtitle: "David shared the motion timing spec.",
    time: "08:56",
    unread: 2,
    avatar: "#",
    members: "Open channel",
  },
  {
    id: "c4",
    type: "channel",
    name: "#announcements",
    subtitle: "Release 2.4 ships today at 16:00 UTC.",
    time: "Yesterday",
    unread: 1,
    avatar: "📢",
    members: "Broadcast",
    muted: true,
  },
];

export const privateMessages: ChatMessage[] = [
  {
    id: "pm1",
    senderId: users.sarah.id,
    senderName: users.sarah.name,
    senderAvatar: users.sarah.avatar,
    time: "10:02",
    text: "Morning. I merged the onboarding copy update and left two notes on the hero.",
  },
  {
    id: "pm2",
    senderId: users.current.id,
    senderName: users.current.name,
    senderAvatar: users.current.avatar,
    time: "10:05",
    reply: "Can you make the CTA more direct?",
    text: "Saw them. I am tightening the headline and keeping the supporting text shorter.",
    status: "read",
  },
  {
    id: "pm3",
    senderId: users.sarah.id,
    senderName: users.sarah.name,
    senderAvatar: users.sarah.avatar,
    time: "10:11",
    kind: "file",
    text: "Here is the latest fig file and the spacing notes.",
    file: {
      name: "ovea-landing-v3.fig",
      size: "4.2 MB",
    },
  },
  {
    id: "pm4",
    senderId: users.current.id,
    senderName: users.current.name,
    senderAvatar: users.current.avatar,
    time: "10:17",
    kind: "voice",
    voice: {
      duration: "0:28",
      waveform: [24, 40, 34, 55, 42, 30, 20, 28, 52, 44],
    },
    reactions: [{ emoji: "🔥", count: 2, active: true }],
    status: "delivered",
  },
  {
    id: "pm5",
    senderId: users.sarah.id,
    senderName: users.sarah.name,
    senderAvatar: users.sarah.avatar,
    time: "10:21",
    text: "Perfect. I will polish the empty state after lunch.",
    reactions: [{ emoji: "👍", count: 1 }],
  },
];

export const groupMessages: ChatMessage[] = [
  {
    id: "gm1",
    senderId: users.maya.id,
    senderName: users.maya.name,
    senderAvatar: users.maya.avatar,
    time: "09:02",
    text: "Reminder: launch room opens at 15:30. Please keep blockers in thread replies.",
    reactions: [{ emoji: "✅", count: 5 }],
  },
  {
    id: "gm2",
    senderId: users.david.id,
    senderName: users.david.name,
    senderAvatar: users.david.avatar,
    time: "09:11",
    text: "Mentioning @Alex — I shipped the reduced-motion fallback for typing indicators.",
    mention: true,
  },
  {
    id: "gm3",
    senderId: users.current.id,
    senderName: users.current.name,
    senderAvatar: users.current.avatar,
    time: "09:14",
    text: "Nice. Keep the animation subtle. We want presence cues, not visual noise.",
    status: "read",
    reactions: [{ emoji: "🫡", count: 3 }],
  },
  {
    id: "gm4",
    senderId: users.nina.id,
    senderName: users.nina.name,
    senderAvatar: users.nina.avatar,
    time: "09:18",
    kind: "file",
    text: "Shared the rollout checklist and contact sheet.",
    file: {
      name: "launch-checklist.pdf",
      size: "860 KB",
    },
  },
];

export const channelCards: ChannelCard[] = [
  {
    id: "public",
    name: "#general",
    visibility: "Public",
    description: "Open discussion for everyone in the workspace.",
    members: "2.4k members",
    activity: "312 posts today",
  },
  {
    id: "private",
    name: "#product-leadership",
    visibility: "Private",
    description: "Invite-only planning and internal decision making.",
    members: "18 members",
    activity: "8 active threads",
  },
  {
    id: "announcement",
    name: "#announcements",
    visibility: "Announcement",
    description: "Important updates with controlled posting permissions.",
    members: "Everyone follows",
    activity: "1 release note today",
  },
];
