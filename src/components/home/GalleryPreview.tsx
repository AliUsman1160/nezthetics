import Image from "next/image";
import { images } from "@/data/images";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const tiles = [
  { image: images.bathtub, className: "col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto" },
  { image: images.dropperPalm, className: "aspect-[3/4]" },
  { image: images.facialMask, className: "aspect-[3/4]" },
  { image: images.serumEucalyptus, className: "aspect-[3/4] sm:aspect-auto" },
  { image: images.plantsInterior, className: "aspect-[3/4] sm:aspect-auto" },
];

export function GalleryPreview() {
  return (
    <Section tone="white" labelledBy="gallery-preview-heading">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="gallery-preview-heading"
          eyebrow="The Gallery"
          title="A Space Designed Around You"
          description="Imagery below is licensed stock photography used to illustrate the atmosphere we aim to create."
        />
        <ButtonLink href="/gallery" variant="outline" className="self-start lg:self-auto">
          View the Gallery
        </ButtonLink>
      </div>
      <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 lg:h-[40rem]">
        {tiles.map((t, i) => (
          <li key={t.image.src} className={`relative overflow-hidden bg-beige ${t.className}`}>
            <Reveal delay={i * 0.06} className="absolute inset-0">
              <Image
                src={t.image.src}
                alt={t.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-premium hover:scale-105"
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
