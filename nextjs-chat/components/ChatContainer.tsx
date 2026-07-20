'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Trash2, Edit2, X, Send } from 'lucide-react';

interface Message {
  id: string;
  content?: string;
  imageUrl?: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
  createdAt: string;
}

interface Chat {
  id: string;
  name: string;
  isPrivate: boolean;
  members: Array<{
    user: { id: string; name: string | null; email: string };
  }>;
}

interface ChatContainerProps {
  token: string;
  userEmail: string;
  chatId: string;
  onChatDeleted?: () => void;
}

function getRoleFromToken(token: string): string | null {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    return payload.role || null;
  } catch (e) {
    return null;
  }
}

export default function ChatContainer({ token, userEmail, chatId, onChatDeleted }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chat, setChat] = useState<Chat | null>(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [role, setRole] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (token) {
      const r = getRoleFromToken(token);
      setRole(r);
    }
  }, [token]);

  const fetchChat = async () => {
    try {
      const response = await fetch(`/app/api/chats/${chatId}`, {
        headers: { Authorization: `Bearer ${token}`,
      });

      if (response.ok) {
        const data = await response.json();
        setChat(data.data.chat);
      }
    } catch (error) {
      console.error('Failed to fetch chat:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/app/api/chats/${chatId}/messages`, {
        headers: { Authorization: `Bearer ${token}`,
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data.data.messages || []);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatId && token) {
      fetchChat();
      fetchMessages();
    }
  }, [chatId, token]);

  useEffect(() => {
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [chatId, token]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      return;
    }

    setSending(true);
    try {
      const response = await fetch(`/app/api/chats/${chatId}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content.trim() }),
      });

      if (response.ok) {
        setContent('');
        await fetchMessages();
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    if (!confirm('این پیام حذف شود؟')) return;

    try {
      const response = await fetch(`/app/api/messages/${messageId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}`,
      });

      if (response.ok) {
        await fetchMessages();
      } else {
        const errorData = await response.json();
        alert('خطا در حذف پیام: ' + (errorData.error || 'خطای ناشناخته'));
      }
    } catch (error) {
      alert('خطا در حذف پیام: ' + String(error));
    }
  };

  const handleEditMessage = async (messageId: string, newContent: string) => {
    if (!newContent.trim()) return;

    try {
      const response = await fetch(`/app/api/messages/${messageId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newContent }),
      });

      if (response.ok) {
        setEditingId(null);
        setEditContent('');
        await fetchMessages();
      } else {
        const errorData = await response.json();
        alert('خطا در ویرایش پیام: ' + (errorData.error || 'خطای ناشناخته'));
      }
    } catch (error) {
      alert('خطا در ویرایش پیام: ' + String(error));
    }
  };

  const startEditing = (message: Message) => {
    setEditingId(message.id);
    setEditContent(message.content || '');
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditContent('');
  };

  const handleDeleteChat = async () => {
    if (!confirm('این چت و تمام پیام‌های آن حذف شوند؟')) return;

    setDeleting(true);
    try {
      const response = await fetch(`/app/api/chats/${chatId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}`,
      });

      if (response.ok) {
        onChatDeleted?.();
      } else {
        const errorData = await response.json();
        alert('خطا در حذف چت: ' + (errorData.error || 'خطای ناشناخته'));
      }
    } catch (error) {
      alert('خطا در حذف چت: ' + String(error));
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background rounded-xl border border-border overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <div>
          <h3 className="font-semibold">{chat?.name || 'چت'}</h3>
          <p className="text-xs text-muted-foreground">
            {chat?.members.length || 0} عضو • {messages.length} پیام
          </p>
        </div>
        <button
          onClick={handleDeleteChat}
          disabled={deleting}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors disabled:opacity-50"
        >
          <Trash2 className="w-4 h-4" />
          حذف چت
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            پیامی وجود ندارد. اولین پیام را بفرستید.
          </div>
        ) : (
          messages.map((message) => {
            const isOwnMessage = message.user.email === userEmail;
            const isEditing = editingId === message.id;

            return (
              <div
                key={message.id}
                className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${isOwnMessage ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div className="flex items-center gap-2 px-1">
                    <span className="text-xs text-muted-foreground">
                      {message.user.name || message.user.email}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(message.createdAt).toLocaleTimeString('fa-IR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>

                  {isEditing ? (
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="text"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleEditMessage(message.id, editContent);
                          } else if (e.key === 'Escape') {
                            cancelEditing();
                          }
                        }}
                        className="flex-1 px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                      <button
                        onClick={() => handleEditMessage(message.id, editContent)}
                        className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="p-2 rounded-lg hover:bg-accent"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`px-4 py-2.5 rounded-2xl ${
                        isOwnMessage
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-card border border-border rounded-bl-md'
                      }`}
                    >
                      {message.content && <p className="text-sm whitespace-pre-wrap">{message.content}</p>}
                      {message.imageUrl && (
                        <img 
                          src={message.imageUrl} 
                          alt="تصویر" 
                          className="mt-2 max-w-full rounded-lg" 
                        />
                      )}
                    </div>
                  )}

                  {isOwnMessage && !isEditing && (
                    <div className="flex gap-1 px-1">
                      <button
                        onClick={() => startEditing(message)}
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(message.id)}
                        className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-card">
        <div className="flex gap-2">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={sending || !content.trim()}
            className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">ارسال</span>
          </button>
        </div>
      </form>
    </div>
  );
}
