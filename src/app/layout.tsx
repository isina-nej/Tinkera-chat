import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chat.tinkera.org"),
  title: {
    default: "Tinkera Chat",
    template: "%s | Tinkera Chat",
  },
  description:
    "Private chats, groups, and channels in one place.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tinkera Chat",
    description: "Private chats, groups, and channels in one place.",
    url: "https://chat.tinkera.org",
    siteName: "Tinkera Chat",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tinkera Chat - Private chats, groups, and channels",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinkera Chat",
    description: "Private chats, groups, and channels in one place.",
    images: ["/og-image.png"],
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
