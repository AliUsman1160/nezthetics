import Image from "next/image";
import type { ImageAsset } from "@/types";
import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Shared hero for inner pages: light, editorial, with an optional image. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  image?: ImageAsset;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-beige/50 pb-16 pt-32 sm:pt-40 lg:pb-24">
      <Container className={image ? "grid items-center gap-12 lg:grid-cols-12" : ""}>
        <div className={image ? "lg:col-span-7" : "max-w-3xl"}>
          <Breadcrumbs items={breadcrumbs} />
          <Reveal>
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
            {children && <div className="mt-8">{children}</div>}
          </Reveal>
        </div>
        {image && (
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-beige lg:aspect-[4/5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
