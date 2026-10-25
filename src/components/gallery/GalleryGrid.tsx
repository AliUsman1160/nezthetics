"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

type Category = (typeof galleryCategories)[number];

const aspectClass = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
} as const;

export function GalleryGrid() {
  const [category, setCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((i) => i.category === category)),
    [category],
  );
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="mb-12 flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setOpenIndex(null);
            }}
            className={cn(
              "min-h-11 rounded-[2px] border px-5 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
              category === c
                ? "border-ink bg-ink text-ivory"
                : "border-line bg-white text-ink-soft hover:border-ink hover:text-ink",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
        {items.map((item, i) => (
          <li key={item.id} className="mb-4 break-inside-avoid sm:mb-5 lg:mb-6">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              className="group relative block w-full overflow-hidden bg-beige text-left"
            >
              <span className={cn("relative block", aspectClass[item.aspect])}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                />
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-4 pt-12 text-sm text-ivory opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.2em] text-champagne">
                  {item.category}
                </span>
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={openIndex} onClose={close} onIndexChange={setOpenIndex} />
    </div>
  );
}
