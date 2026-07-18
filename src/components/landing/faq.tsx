"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSiteCopy } from "@/components/site-copy";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();
  const copy = useSiteCopy().faq;

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="section-title mt-3">{copy.title}</h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {copy.items.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="surface-panel overflow-hidden">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start sm:px-6"
                  >
                    <span className="text-base font-medium text-foreground sm:text-lg">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                        isOpen && "rotate-180"
                      )}
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
