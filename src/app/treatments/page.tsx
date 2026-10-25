import { buildMetadata } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { TreatmentExplorer } from "@/components/treatments/TreatmentExplorer";

export const metadata = buildMetadata({
  title: "Treatments",
  description:
    "Explore sample aesthetic and skincare treatment categories at Nezthetics, with general information and guidance to discuss at a consultation.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Treatments"
        title="Treatments, Thoughtfully Explained"
        description="Browse sample treatment categories and find general information. The clinic will confirm the services it offers, and suitability is always discussed at consultation."
        breadcrumbs={[{ label: "Treatments" }]}
      />
      <Section tone="ivory" className="py-16 lg:py-24">
        <TreatmentExplorer />
      </Section>
      <ConsultationCTA
        title="Not sure where to begin?"
        text="A consultation is a good place to start. Tell us what you would like to explore and the clinic will talk through suitable options."
      />
    </>
  );
}
