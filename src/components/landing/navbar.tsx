"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Languages, Menu, MessageSquareMore, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { useSiteCopy } from "@/components/site-copy";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { toggleLanguage } = useLanguage();
  const copy = useSiteCopy().navbar;

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <MessageSquareMore className="h-5 w-5" />
          </span>
          <div>
            <span className="block text-sm font-semibold tracking-tight text-foreground">Ovea</span>
            <span className="block text-[11px] text-muted-foreground">{copy.brandTagline}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {copy.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label={copy.languageLabel}
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-border/70 bg-card/70 px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Languages className="h-4 w-4" />
            <span>{copy.languageShort}</span>
          </button>
          <button
            type="button"
            aria-label={copy.toggleTheme}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:text-foreground"
          >
            {isDark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <Link href="/chat" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {copy.signIn}
          </Link>
          <Link
            href="/chat"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
          >
            {copy.getStarted}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={copy.languageLabel}
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-border/70 bg-card/70 px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Languages className="h-4 w-4" />
            <span>{copy.languageShort}</span>
          </button>
          <button
            type="button"
            aria-label={copy.toggleTheme}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:text-foreground"
          >
            {isDark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? copy.closeNavigation : copy.openNavigation}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="section-shell py-4">
            <div className="space-y-1">
              {copy.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-2 border-t border-border/70 pt-4 sm:grid-cols-2">
              <Link
                href="/chat"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl border border-border/70 px-4 py-3 text-center text-sm font-medium text-foreground"
              >
                {copy.signIn}
              </Link>
              <Link
                href="/chat"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                {copy.getStarted}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
