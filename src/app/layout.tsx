import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "اویا — یک‌جا برای همه گفتگوها",
    template: "%s | Ovea",
  },
  description:
    "اویا یک پلتفرم ارتباطی مدرن برای گفتگوی خصوصی، گروه‌ها، کانال‌ها، فایل‌ها، پیام صوتی و همکاری منظم است.",
  openGraph: {
    title: "اویا — یک‌جا برای همه گفتگوها",
    description:
      "گفتگوی خصوصی، گروه‌ها، کانال‌ها، فایل‌ها، پیام صوتی و ارتباط لحظه‌ای در یک پلتفرم مدرن.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "اویا — یک‌جا برای همه گفتگوها",
    description:
      "پیام‌رسانی مدرن برای تیم‌ها، کامیونیتی‌ها و گفتگوهای خصوصی.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
