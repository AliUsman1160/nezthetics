"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/types";

const iconButton =
  "inline-flex size-12 items-center justify-center rounded-full border border-ivory/30 bg-espresso/60 text-ivory backdrop-blur transition-colors hover:bg-ivory hover:text-espresso";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const count = items.length;

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (index === null || count === 0) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") onIndexChange((index + 1) % count);
      else if (event.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      else if (event.key === "Tab") {
        // Keep focus inside the dialog.
        const dialog = document.getElementById("lightbox-dialog");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, count, onClose, onIndexChange]);

  const item = index !== null ? items[index] : null;
  const go = (delta: number) => index !== null && onIndexChange((index + delta + count) % count);

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          id="lightbox-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="on-dark fixed inset-0 z-[60] flex flex-col bg-espresso/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStart.current;
            touchStart.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between px-4 py-4 text-ivory sm:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-ivory/70" aria-live="polite">
              {index + 1} / {count}
            </p>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image viewer" className={iconButton}>
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <div
            className="relative mx-auto min-h-0 w-full max-w-6xl flex-1 px-4 sm:px-8"
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <div className="relative h-full w-full">
              <Image
                key={item.id}
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-5 text-ivory sm:px-8">
            <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={iconButton}>
              <ChevronLeft aria-hidden className="size-5" />
            </button>
            <p className="max-w-xl text-center text-sm text-ivory/85">{item.caption}</p>
            <button type="button" onClick={() => go(1)} aria-label="Next image" className={iconButton}>
              <ChevronRight aria-hidden className="size-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
