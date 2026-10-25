import { Info } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const journeySteps = [
  { number: "01", title: "Tell Us Your Goals", text: "Share your concerns and what you would like to explore." },
  { number: "02", title: "Discuss Your Options", text: "Arrange a consultation to discuss suitability and treatment considerations." },
  { number: "03", title: "Plan Your Next Steps", text: "Review the agreed plan and any relevant preparation or aftercare information." },
];

export function ConsultationJourney() {
  return (
    <Section tone="white" labelledBy="journey-heading">
      <SectionHeading
        id="journey-heading"
        align="center"
        eyebrow="The Consultation Journey"
        title="Three Simple Steps"
      />
      <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
        {journeySteps.map((s, i) => (
          <li key={s.number} className="relative">
            <Reveal delay={i * 0.1}>
              <span className="relative inline-flex size-12 items-center justify-center rounded-full border border-champagne bg-white font-serif text-xl text-champagne-deep">
                {s.number}
              </span>
              <h3 className="mt-6 text-2xl sm:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-16 flex max-w-xl items-start gap-3 text-sm text-ink-soft">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-champagne-deep" />
        Online inquiries are not confirmed medical appointments. The clinic will contact you to discuss next steps.
      </p>
    </Section>
  );
}
