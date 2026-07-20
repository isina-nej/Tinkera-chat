import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chat.tinkera.org"),
  title: {
    default: "Tinkera Chat",
    template: "%s | Tinkera Chat",
  },
  description: "چت خصوصی، گروه‌ها و کانال‌ها در یک جا",
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    title: "Tinkera Chat",
    description: "چت خصوصی، گروه‌ها و کانال‌ها در یک جا",
    url: "https://chat.tinkera.org/app",
    siteName: "Tinkera Chat",
    images: [
      {
        url: "/app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tinkera Chat - چت خصوصی، گروه‌ها و کانال‌ها",
      },
    ],
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinkera Chat",
    description: "چت خصوصی، گروه‌ها و کانال‌ها در یک جا",
    images: ["/app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
