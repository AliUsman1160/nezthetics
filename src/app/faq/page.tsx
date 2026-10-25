import { buildMetadata } from "@/lib/utils";
import { faqGroups } from "@/data/faqs";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { Accordion } from "@/components/ui/Accordion";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "General answers about treatments, consultations, preparation, aftercare and appointments at Nezthetics Aesthetics Clinic.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="General information to help you prepare. It is not personal medical advice, and requirements vary by treatment, so please confirm specifics with the clinic."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <Section tone="white" className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <nav aria-label="FAQ categories" className="lg:col-span-3">
            <ul className="space-y-3 lg:sticky lg:top-28">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="text-sm text-ink-soft transition-colors hover:text-champagne-deep">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16 lg:col-span-9">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-heading`} className="scroll-mt-28">
                <h2 id={`${g.id}-heading`} className="mb-6 text-3xl sm:text-4xl">
                  {g.title}
                </h2>
                <Accordion items={g.items} headingLevel="h3" />
              </section>
            ))}
          </div>
        </div>
      </Section>
      <ConsultationCTA
        title="Still have a question?"
        text="Get in touch and the clinic will be happy to help. For anything urgent or medical, please seek appropriate professional care."
      />
    </>
  );
}
