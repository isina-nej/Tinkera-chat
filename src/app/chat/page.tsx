"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const chatAppUrl = process.env.NODE_ENV === "production" ? "/app/auth/login" : "http://localhost:3002/app/auth/login";

export default function ChatRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.assign(chatAppUrl);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div className="space-y-3 rounded-lg border border-border/70 bg-card px-6 py-8 shadow-sm">
        <p className="text-lg font-medium">در حال انتقال به صفحه ورود چت...</p>
        <p className="text-sm text-muted-foreground">اگر به‌صورت خودکار هدایت نشدید، روی <a className="text-primary underline" href={chatAppUrl}>این لینک</a> کلیک کنید.</p>
      </div>
    </div>
  );
}
