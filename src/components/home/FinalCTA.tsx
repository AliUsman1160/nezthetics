import Image from "next/image";
import { images } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="on-dark bg-espresso text-ivory">
      <Container className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-0 px-0 sm:px-0 lg:grid-cols-2 lg:px-0">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[34rem]">
          <Image
            src={images.portraitSoft.src}
            alt={images.portraitSoft.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <Reveal className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Eyebrow tone="dark" className="mb-6">
            Begin Today
          </Eyebrow>
          <h2 id="final-cta-heading" className="text-4xl sm:text-5xl lg:text-6xl">
            Your Journey Begins With a Conversation.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/75">
            Explore your options and take the first step toward a more personalized approach to aesthetic care.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="light">
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="/treatments" variant="ghostLight">
              Explore Treatments
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
