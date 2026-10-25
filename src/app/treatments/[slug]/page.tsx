import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getRelatedTreatments, getTreatment, treatments } from "@/data/treatments";
import { buildMetadata } from "@/lib/utils";
import { TreatmentDetails } from "@/components/treatments/TreatmentDetails";
import { RelatedTreatments } from "@/components/treatments/RelatedTreatments";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/treatments/[slug]">) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return buildMetadata({
    title: treatment.name,
    description: treatment.shortDescription,
    path: `/treatments/${treatment.slug}`,
  });
}

export default function TreatmentPage({ params }: PageProps<"/treatments/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-beige/50" aria-hidden />}>
      <TreatmentContent params={params} />
    </Suspense>
  );
}

async function TreatmentContent({ params }: Pick<PageProps<"/treatments/[slug]">, "params">) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  return (
    <>
      <TreatmentDetails treatment={treatment} />
      <RelatedTreatments treatments={getRelatedTreatments(treatment)} />
      <ConsultationCTA
        href={`/contact?treatment=${treatment.slug}`}
        title={`Interested in ${treatment.name}?`}
        text="Speak with the clinic about whether it may be suitable for you. Suitability, risks and outcomes are discussed at consultation."
      />
    </>
  );
}
