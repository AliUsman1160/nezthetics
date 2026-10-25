import { buildMetadata } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "A visual look at the atmosphere and details we aim to create at Nezthetics Aesthetics Clinic.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Space Designed Around You"
        description="Calm interiors, quiet details and considered textures. Images shown are licensed stock photography used as placeholders; they are not photographs of the clinic, its team or its clients."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <Section tone="ivory" className="py-16 lg:py-24">
        <GalleryGrid />
      </Section>
      <ConsultationCTA />
    </>
  );
}
