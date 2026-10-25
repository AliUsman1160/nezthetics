import Image from "next/image";
import { Check, Info } from "lucide-react";
import type { Treatment } from "@/types";
import { Section } from "@/components/ui/Container";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-ink-soft">
          <Check aria-hidden className="mt-1 size-4 shrink-0 text-champagne-deep" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-6 text-3xl sm:text-4xl">{title}</h2>
      {children}
    </div>
  );
}

export function TreatmentDetails({ treatment }: { treatment: Treatment }) {
  return (
    <>
      <header className="bg-beige/50 pb-16 pt-32 sm:pt-40 lg:pb-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Breadcrumbs
              items={[{ label: "Treatments", href: "/treatments" }, { label: treatment.name }]}
            />
            <Reveal>
              <Eyebrow className="mb-6">{treatment.category}</Eyebrow>
              <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl">{treatment.name}</h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
                {treatment.shortDescription}
              </p>
              <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <ButtonLink href={`/contact?treatment=${treatment.slug}`}>Book a Consultation</ButtonLink>
                <ButtonLink href="/treatments" variant="outline">
                  All Treatments
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-beige">
              <Image
                src={treatment.image.src}
                alt={treatment.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </header>

      <Section tone="white" className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-16 lg:col-span-8">
            <Block title="Overview">
              <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{treatment.overview}</p>
            </Block>
            <Block title="Who may consider this">
              <BulletList items={treatment.whoMayConsider} />
            </Block>
            <Block title="Potential benefits">
              <BulletList items={treatment.potentialBenefits} />
            </Block>
            <Block title="The general process">
              <ol className="space-y-8">
                {treatment.process.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line pt-6">
                    <span className="font-serif text-3xl text-champagne-deep">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="mb-2 font-serif text-2xl">{step.title}</h3>
                      <p className="text-ink-soft">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Block>
            <div className="grid gap-12 sm:grid-cols-2">
              <Block title="Preparation">
                <BulletList items={treatment.preparation} />
              </Block>
              <Block title="Recovery and aftercare">
                <BulletList items={treatment.aftercare} />
              </Block>
            </div>
            <Block title="Common questions">
              <Accordion items={treatment.faqs} />
            </Block>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="border border-line bg-ivory p-7">
                <h2 className="font-serif text-2xl">Talk to the clinic</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Suitability, risks, duration, recovery and cost are individual and are discussed at consultation.
                </p>
                <ButtonLink href={`/contact?treatment=${treatment.slug}`} className="mt-6 w-full">
                  Book a Consultation
                </ButtonLink>
              </div>
              <div className="flex gap-3 border border-line p-5 text-sm leading-relaxed text-ink-soft">
                <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-champagne-deep" />
                <p>
                  This page offers general information only and is not medical advice. Results cannot be guaranteed,
                  and no treatment is suitable for everyone. A professional assessment is required.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
