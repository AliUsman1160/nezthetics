import { PageHero } from "./PageHero";
import { Section } from "./Container";

/** Neutral placeholder shell for legal copy the clinic must supply. */
export function LegalPage({ title, label }: { title: string; label: string }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={`This ${label} is a placeholder. The clinic must supply its own reviewed legal text before launch.`}
        breadcrumbs={[{ label: title }]}
      />
      <Section tone="white" className="py-16 lg:py-20">
        <div className="max-w-2xl space-y-5 text-ink-soft">
          <p>
            No legal terms have been written for this site. Replace this page with your {label}, prepared or
            reviewed by a qualified professional, covering how the clinic handles enquiries and personal data.
          </p>
          <p>
            The inquiry form on this demo site does not transmit or store any information, so no personal data is
            collected by it.
          </p>
        </div>
      </Section>
    </>
  );
}
