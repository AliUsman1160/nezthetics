import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const hasSample = testimonials.some((t) => t.isSample);
  return (
    <Section tone="beige" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        align="center"
        eyebrow="Client Experiences"
        title="Experiences That Matter"
      />
      {hasSample && (
        <p className="mx-auto mt-6 w-fit border border-champagne-deep/40 px-4 py-2 text-center text-xs uppercase tracking-[0.16em] text-champagne-deep">
          Sample content for layout only. Not real client reviews.
        </p>
      )}
      <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
        {testimonials.map((t, i) => (
          <li key={t.quote}>
            <Reveal delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col border border-line bg-white p-8 lg:p-10">
                <span aria-hidden className="font-serif text-6xl leading-none text-champagne">
                  “
                </span>
                <blockquote className="mt-2 flex-1 font-serif text-xl leading-snug sm:text-2xl">{t.quote}</blockquote>
                <figcaption className="mt-8 border-t border-line pt-5 text-sm">
                  <span className="font-medium">{t.author}</span>
                  <span className="text-ink-soft"> · {t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
