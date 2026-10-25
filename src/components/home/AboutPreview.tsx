import Image from "next/image";
import { images } from "@/data/images";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPreview() {
  return (
    <Section tone="beige" labelledBy="about-preview-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden bg-beige lg:aspect-[5/6]">
            <Image
              src={images.spaLounge.src}
              alt={images.spaLounge.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-ink-soft">Illustrative stock photography, not the Nezthetics clinic.</p>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <SectionHeading
            id="about-preview-heading"
            eyebrow="About Nezthetics"
            title="Care Beyond the Treatment Room"
            description="At Nezthetics, the experience begins with a conversation. We believe people deserve clear information, thoughtful guidance, and an approach that respects their individual goals."
          />
          <div className="mt-10">
            <ButtonLink href="/about">Meet Nezthetics</ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
