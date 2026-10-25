import { experts } from "@/data/experts";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ExpertCard } from "@/components/experts/ExpertCard";

export function ExpertsPreview() {
  return (
    <Section tone="ivory" labelledBy="experts-heading">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="experts-heading"
          eyebrow="Meet the Experts"
          title="The People Behind Your Care"
          description="Placeholder profiles are shown below. The clinic will add verified team details."
        />
        <ButtonLink href="/experts" variant="outline" className="self-start lg:self-auto">
          Meet Our Team
        </ButtonLink>
      </div>
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {experts.map((e, i) => (
          <li key={e.slug}>
            <Reveal delay={i * 0.08} className="h-full">
              <ExpertCard expert={e} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
