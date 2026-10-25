import { Section } from "./Container";
import { ButtonLink } from "./Button";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Compact dark CTA band reused across inner pages. */
export function ConsultationCTA({
  title = "Ready to start a conversation?",
  text = "Tell us what you would like to explore. An inquiry is not a confirmed appointment, and the clinic will discuss suitability with you.",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  href?: string;
}) {
  return (
    <Section tone="dark" className="py-20 sm:py-24 lg:py-28" labelledBy="consultation-cta">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow tone="dark" className="mb-6 justify-center">
          Consultation
        </Eyebrow>
        <h2 id="consultation-cta" className="text-4xl sm:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-ivory/75">{text}</p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={href} variant="light">
            Book a Consultation
          </ButtonLink>
          <ButtonLink href="/treatments" variant="ghostLight">
            Explore Treatments
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
