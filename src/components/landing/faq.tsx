"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is this platform?",
    answer:
      "Ovea is a modern communication platform for private conversations, group rooms, public and private channels, files, voice messages, and organized collaboration.",
  },
  {
    question: "Can I create private groups?",
    answer:
      "Yes. Groups can be scoped to the people who need them, while public spaces stay easier to discover.",
  },
  {
    question: "What is the difference between groups and channels?",
    answer:
      "Groups are shared conversation rooms for active discussion. Channels are structured topic spaces that can be public, private, or announcement-only.",
  },
  {
    question: "Can channels be private?",
    answer:
      "Yes. Private channels are useful for leadership conversations, planning, moderation, and other restricted discussions.",
  },
  {
    question: "Does it support mobile devices?",
    answer:
      "Yes. The interface is designed to simplify itself on smaller screens instead of shrinking the desktop layout.",
  },
  {
    question: "Can I send files and voice messages?",
    answer:
      "Yes. File sharing and voice messages are part of the same messaging flow shown throughout the landing page and demo.",
  },
  {
    question: "Is there a dark mode?",
    answer:
      "Yes. The landing page includes a light and dark mode switch, and the visual system supports both.",
  },
  {
    question: "Do I need to install an application?",
    answer:
      "No. This demo is shown as a web experience. Product packaging can support browser-based access without requiring a native install.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">FAQ</p>
          <h2 className="section-title mt-3">Common questions, answered directly.</h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faqs.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const isOpen = openIndex == index;
            return (
              <div key={item.question} className="surface-panel overflow-hidden">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-medium text-foreground sm:text-lg">{item.question}</span>
                    <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", isOpen && "rotate-180")}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-7 text-muted-foreground sm:px-6 sm:text-base"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
