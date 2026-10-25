import { treatments } from "@/data/treatments";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard, type CardVariant } from "@/components/treatments/TreatmentCard";

// Editorial rhythm: one large card, one tall, then rows of three with alternating crops.
const layout: { span: string; variant: CardVariant }[] = [
  { span: "lg:col-span-7", variant: "hero" },
  { span: "lg:col-span-5", variant: "tall" },
  { span: "lg:col-span-4", variant: "wide" },
  { span: "lg:col-span-4", variant: "wide" },
  { span: "lg:col-span-4", variant: "wide" },
  { span: "lg:col-span-4", variant: "tall" },
  { span: "lg:col-span-4", variant: "tall" },
  { span: "lg:col-span-4", variant: "tall" },
];

export function FeaturedTreatments() {
  return (
    <Section tone="ivory" labelledBy="treatments-heading">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading id="treatments-heading" eyebrow="Explore Our Services" title="Care That Starts With You" />
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Sample service categories for illustration. The clinic will confirm the treatments it offers.
        </p>
      </div>
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {treatments.slice(0, layout.length).map((t, i) => (
          <li key={t.slug} className={layout[i].span}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <TreatmentCard treatment={t} variant={layout[i].variant} />
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-14 text-center">
        <ButtonLink href="/treatments" variant="outline">
          View All Treatments
        </ButtonLink>
      </div>
    </Section>
  );
}
