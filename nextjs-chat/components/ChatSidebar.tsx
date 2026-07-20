'use client';

import { useState } from 'react';
import { Plus, Users, Lock } from 'lucide-react';

interface Chat {
  id: string;
  name: string;
  isPrivate: boolean;
  _count: { messages: number };
  members: Array<{
    user: { id: string; name: string | null; email: string };
  }>;
}

interface ChatSidebarProps {
  chats: Chat[];
  currentChatId: string | null;
  onChatSelect: (chatId: string) => void;
  onCreateChat: () => void;
  loading?: boolean;
}

export default function ChatSidebar({ 
  chats, 
  currentChatId, 
  onChatSelect, 
  onCreateChat,
  loading 
}: ChatSidebarProps) {
  return (
    <div className="w-72 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-lg">چت‌ها</h2>
        <button
          onClick={onCreateChat}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          title="چت جدید"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-center text-muted-foreground">در حال بارگذاری...</div>
        ) : chats.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            چتی وجود ندارد
          </div>
        ) : (
          <div className="p-2 space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onChatSelect(chat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-right transition-colors ${
                  currentChatId === chat.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
              >
                <div className="flex-shrink-0">
                  {chat.isPrivate ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Users className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{chat.name}</div>
                  <div className="text-xs opacity-70">
                    {chat._count.messages} پیام • {chat.members.length} عضو
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
