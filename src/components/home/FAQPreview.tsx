import { faqPreview } from "@/data/faqs";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FAQPreview() {
  return (
    <Section tone="white" labelledBy="faq-preview-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-preview-heading"
            eyebrow="Questions"
            title="Good to Know Before You Visit"
            description="General information to help you prepare. Requirements vary by treatment, so always confirm details with the clinic."
          />
          <div className="mt-10">
            <ButtonLink href="/faq" variant="outline">
              View All FAQs
            </ButtonLink>
          </div>
        </div>
        <Reveal className="lg:col-span-8">
          <Accordion items={faqPreview} />
        </Reveal>
      </div>
    </Section>
  );
}
