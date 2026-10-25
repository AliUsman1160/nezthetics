"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  tone = "light",
  headingLevel: Heading = "h3",
}: {
  items: FAQItem[];
  tone?: "light" | "dark";
  headingLevel?: "h3" | "h4";
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("border-t", tone === "light" ? "border-line" : "border-ivory/15")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question} className={cn("border-b", tone === "light" ? "border-line" : "border-ivory/15")}>
            <Heading className="font-sans text-base font-medium leading-snug tracking-normal">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-champagne-deep"
              >
                <span className="font-serif text-xl leading-snug sm:text-2xl">{item.question}</span>
                <Plus
                  aria-hidden
                  className={cn("size-5 shrink-0 transition-transform duration-300", isOpen && "rotate-45")}
                />
              </button>
            </Heading>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-2xl pb-7 leading-relaxed", tone === "light" ? "text-ink-soft" : "text-ivory/75")}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
