import { buildMetadata } from "@/lib/utils";
import { experts } from "@/data/experts";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { Reveal } from "@/components/ui/Reveal";
import { ExpertCard } from "@/components/experts/ExpertCard";

export const metadata = buildMetadata({
  title: "Our Experts",
  description: "Meet the team behind Nezthetics Aesthetics Clinic. Placeholder profiles pending verified team details.",
  path: "/experts",
});

export default function ExpertsPage() {
  const hasPlaceholders = experts.some((e) => e.isPlaceholder);
  return (
    <>
      <PageHero
        eyebrow="Our Experts"
        title="The People Behind Your Care"
        description="Care is only as good as the people delivering it. Our team profiles will introduce each practitioner's role, approach and verified qualifications."
        breadcrumbs={[{ label: "Our Experts" }]}
      />
      <Section tone="ivory" className="py-16 lg:py-24">
        {hasPlaceholders && (
          <p className="mb-12 max-w-2xl border-l-2 border-champagne-deep pl-5 text-sm text-ink-soft">
            <strong className="font-medium text-ink">Development placeholders.</strong> The profiles below are not real
            people. Replace them in <code className="text-xs">src/data/experts.ts</code> with the clinic&apos;s
            verified team details.
          </p>
        )}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {experts.map((e, i) => (
            <li key={e.slug}>
              <Reveal delay={i * 0.08} className="h-full">
                <ExpertCard expert={e} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <ConsultationCTA />
    </>
  );
}
