import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/utils";
import { CONTACT_PLACEHOLDER, siteConfig } from "@/lib/config";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a consultation inquiry with Nezthetics Aesthetics Clinic. This site is a frontend demo and does not send messages.",
  path: "/contact",
});

const cards = [
  { icon: MapPin, label: "Visit", value: siteConfig.contact.address },
  { icon: Phone, label: "Call", value: siteConfig.contact.phone },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: Clock, label: "Opening hours", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Consultation"
        description="Tell us a little about what you would like to explore. An inquiry is not a confirmed appointment, and nothing here constitutes medical advice."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Section tone="ivory" className="py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="mb-8 text-3xl sm:text-4xl">Consultation inquiry</h2>
            <Suspense fallback={<div className="h-96 animate-pulse bg-beige/60" aria-hidden />}>
              <ContactForm />
            </Suspense>
          </div>
          <aside aria-labelledby="details-heading" className="lg:col-span-5">
            <h2 id="details-heading" className="mb-8 text-3xl sm:text-4xl">
              Clinic details
            </h2>
            <ul className="space-y-4">
              {cards.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-5 border border-line bg-white p-6">
                  <Icon aria-hidden strokeWidth={1.25} className="mt-1 size-6 shrink-0 text-champagne-deep" />
                  <div>
                    <h3 className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-soft">
                      {label}
                    </h3>
                    <p className={value ? "mt-1" : "mt-1 italic text-ink-soft"}>{value ?? CONTACT_PLACEHOLDER}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Verified clinic contact details will appear here once supplied in{" "}
              <code className="text-xs">src/lib/config.ts</code>.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
