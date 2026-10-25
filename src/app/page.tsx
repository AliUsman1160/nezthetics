import { buildMetadata } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Hero } from "@/components/home/Hero";
import { ClinicIntroduction } from "@/components/home/ClinicIntroduction";
import { FeaturedTreatments } from "@/components/home/FeaturedTreatments";
import { Philosophy } from "@/components/home/Philosophy";
import { WhyNezthetics } from "@/components/home/WhyNezthetics";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ConsultationJourney } from "@/components/home/ConsultationJourney";
import { ExpertsPreview } from "@/components/home/ExpertsPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = buildMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClinicIntroduction />
      <FeaturedTreatments />
      <Philosophy />
      <WhyNezthetics />
      <AboutPreview />
      <ConsultationJourney />
      <ExpertsPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
