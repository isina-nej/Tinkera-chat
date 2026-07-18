import Link from "next/link";
import { Github, Linkedin, MessageSquareMore, Twitter } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Private Chat", href: "#private-chat" },
      { label: "Groups", href: "#groups" },
      { label: "Channels", href: "#channels" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
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
                <span className="block text-[11px] text-muted-foreground">One place for every conversation</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Modern messaging for private conversations, group coordination, community channels,
              files, and voice messages.
            </p>
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

          {footerGroups.map((group) => (
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
          © {new Date().getFullYear()} Ovea. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
