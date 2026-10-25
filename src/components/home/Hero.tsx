import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HeroMedia } from "./HeroMedia";
import { HeroBackdrop } from "./HeroBackdrop";

const values = ["Listen first", "Personalized options", "Clear guidance"];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-ivory">
      <HeroBackdrop />
      <Container className="relative grid items-center gap-16 pb-10 pt-28 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-16 lg:pt-36 xl:gap-16">
        <div className="flex flex-col lg:pr-6">
          <Reveal y={16}>
            <Eyebrow className="mb-8">Personalized Aesthetic Care</Eyebrow>
          </Reveal>
          <Reveal y={28} delay={0.12}>
            <h1 id="hero-heading" className="text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[5rem] xl:text-[5.5rem]">
              Your Skin. Your Confidence.{" "}
              <em className="font-normal italic text-champagne-deep">Your Kind of Beautiful.</em>
            </h1>
          </Reveal>
          <Reveal y={20} delay={0.28}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Discover a thoughtful approach to aesthetic care, where personalized consultations and carefully
              considered treatments put your needs first.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="/treatments" variant="outline">
                Explore Treatments
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal y={12} delay={0.45}>
            <ul className="mt-12 hidden max-w-md items-center gap-0 border-t border-line pt-6 sm:flex">
              {values.map((v, i) => (
                <li
                  key={v}
                  className={`flex-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink-soft ${
                    i > 0 ? "border-l border-line pl-5" : ""
                  }`}
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <HeroMedia />
      </Container>
      <p className="px-5 pb-6 text-xs text-ink-soft sm:px-8 lg:text-right">Placeholder photography</p>
    </section>
  );
}
