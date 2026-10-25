import Image from "next/image";
import type { Expert } from "@/types";

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        {expert.image ? (
          <Image
            src={expert.image.src}
            alt={expert.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center" role="img" aria-label="Portrait placeholder">
            <span aria-hidden className="font-serif text-8xl text-champagne/70">
              {expert.name.charAt(0)}
            </span>
          </div>
        )}
        {expert.isPlaceholder && (
          <span className="absolute left-4 top-4 bg-espresso px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ivory">
            Demo profile
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl">{expert.name}</h3>
        <p className="mt-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-champagne-deep">
          {expert.title}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{expert.bio}</p>
        {expert.qualifications.length > 0 && (
          <p className="mt-4 text-sm text-ink-soft">
            <span className="font-medium text-ink">Qualifications: </span>
            {expert.qualifications.join(", ")}
          </p>
        )}
        <ul className="mt-5 flex flex-wrap gap-2">
          {expert.practiceAreas.map((a) => (
            <li key={a} className="border border-line px-3 py-1 text-xs text-ink-soft">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
