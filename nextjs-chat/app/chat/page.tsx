'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatContainer from '@/components/ChatContainer';
import ChatSidebar from '@/components/ChatSidebar';
import CreateChatModal from '@/components/CreateChatModal';
import { ThemeToggle } from '@/components/ThemeToggle';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface Chat {
  id: string;
  name: string;
  isPrivate: boolean;
  _count: { messages: number };
  members: Array<{
    user: { id: string; name: string | null; email: string };
  }>;
}

export default function ChatPage() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creatingChat, setCreatingChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (!storedToken || !storedUser) {
      router.push('/auth/login');
      return;
    }

    setToken(storedToken);
    setUser(JSON.parse(storedUser));
    setLoading(false);
  }, [router]);

  const fetchChats = async () => {
    if (!token) return;

    try {
      const response = await fetch('/app/api/chats', {
        headers: { Authorization: `Bearer ${token}`
      });

      if (response.ok) {
        const data = await response.json();
        const fetchedChats = data.data.chats || [];
        setChats(fetchedChats);

        if (fetchedChats.length > 0 && !currentChatId) {
          setCurrentChatId(fetchedChats[0].id);
        }
      }
    } catch (error) {
      console.error('Failed to fetch chats:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchChats();
    }
  }, [token]);

  const handleCreateChat = async (name: string, isPrivate: boolean) => {
    if (!token) return;

    setCreatingChat(true);
    try {
      const response = await fetch('/app/api/chats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, isPrivate })
      });

      if (response.ok) {
        const data = await response.json();
        await fetchChats();
        setCurrentChatId(data.data.chat.id);
      }
    } catch (error) {
      console.error('Failed to create chat:', error);
    } finally {
      setCreatingChat(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/auth/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">در حال بارگیری...</p>
        </div>
      </div>
    );
  }

  if (!token || !user) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-semibold">T</span>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Tinkera Chat</h1>
            <p className="text-xs text-muted-foreground">خوش آمدید، {user.name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
          >
            خروج
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <ChatSidebar
          chats={chats}
          currentChatId={currentChatId}
          onChatSelect={setCurrentChatId}
          onCreateChat={() => setShowCreateModal(true)}
        />

        <div className="flex-1 overflow-hidden">
          {currentChatId ? (
            <ChatContainer 
              token={token} 
              userEmail={user.email} 
              chatId={currentChatId}
              onChatDeleted={() => {
                setCurrentChatId(null);
                fetchChats();
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <div className="text-center">
                <p className="mb-4">چتی انتخاب نشده</p>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
                >
                  ساخت چت جدید
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <CreateChatModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateChat}
        loading={creatingChat}
      />
    </div>
  );
}
