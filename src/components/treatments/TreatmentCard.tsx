import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/types";
import { cn } from "@/lib/utils";

const aspects = {
  tall: "aspect-[4/5]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
  hero: "aspect-[4/3] lg:aspect-auto lg:min-h-[28rem] lg:flex-1",
} as const;

export type CardVariant = keyof typeof aspects;

export function TreatmentCard({
  treatment,
  variant = "tall",
  className,
}: {
  treatment: Treatment;
  variant?: CardVariant;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-line bg-white transition-[border-color,box-shadow] duration-500 ease-premium hover:border-champagne/60 hover:shadow-[0_24px_60px_-30px_rgba(56,44,41,0.35)]",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden bg-beige", aspects[variant])}>
        <Image
          src={treatment.image.src}
          alt={treatment.image.alt}
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
        />
      </div>
      <div className={cn("flex flex-col p-6 sm:p-7", variant === "hero" ? "lg:flex-none" : "flex-1")}>
        <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-champagne-deep">
          {treatment.category}
        </p>
        <h3 className="text-2xl sm:text-[1.75rem]">{treatment.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{treatment.shortDescription}</p>
        <Link
          href={`/treatments/${treatment.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-[0.74rem] font-medium uppercase tracking-[0.16em] after:absolute after:inset-0 after:content-[''] hover:border-champagne-deep hover:text-champagne-deep"
        >
          Learn More
          <span className="sr-only"> about {treatment.name}</span>
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
