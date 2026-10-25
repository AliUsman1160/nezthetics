import type { Treatment } from "@/types";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TreatmentCard } from "./TreatmentCard";

export function RelatedTreatments({ treatments }: { treatments: Treatment[] }) {
  if (!treatments.length) return null;
  return (
    <Section tone="beige" labelledBy="related-heading">
      <SectionHeading id="related-heading" eyebrow="You may also like" title="Related Treatments" />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {treatments.map((t) => (
          <li key={t.slug}>
            <TreatmentCard treatment={t} variant="wide" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
