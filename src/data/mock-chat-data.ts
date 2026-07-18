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

export const users = {
  current: {
    avatar: "AM",
  },
};
