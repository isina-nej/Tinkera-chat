"use client";

import Link from "next/link";
import { Github, Linkedin, MessageSquareMore, Twitter } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";

export function Footer() {
  const copy = useSiteCopy().footer;

  return (
    <footer className="border-t border-border/70 bg-background py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,0.7fr)]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <MessageSquareMore className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-sm font-semibold text-foreground">Ovea</span>
                <span className="block text-[11px] text-muted-foreground">{copy.tagline}</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy.description}</p>
            <div className="mt-5 flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="rounded-full border border-border/70 p-2 transition-colors hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="rounded-full border border-border/70 p-2 transition-colors hover:text-foreground">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-border/70 p-2 transition-colors hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {copy.groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground">{group.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/70 pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ovea. {copy.copyright}
        </div>
      </div>
    </footer>
  );
}
