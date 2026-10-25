import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { number: "01", title: "Listen First", text: "Understand individual concerns and expectations." },
  {
    number: "02",
    title: "Personalized Approach",
    text: "Discuss suitable options based on individual needs and professional assessment.",
  },
  {
    number: "03",
    title: "Care With Clarity",
    text: "Explain treatment considerations, expected recovery where applicable, and aftercare guidance.",
  },
];

export function Philosophy() {
  return (
    <Section tone="dark" labelledBy="philosophy-heading">
      <Reveal>
        <SectionHeading
          id="philosophy-heading"
          tone="dark"
          align="center"
          eyebrow="Our Philosophy"
          title="Beauty Is Personal. Your Care Should Be Too."
          description="Every person brings a different story, different concerns, and different goals. Our approach begins with understanding what matters to you."
          className="max-w-3xl"
        />
      </Reveal>
      <ol className="mt-16 grid gap-px bg-ivory/15 sm:mt-20 md:grid-cols-3">
        {pillars.map((p, i) => (
          <li key={p.number} className="bg-espresso">
            <Reveal delay={i * 0.1} className="h-full px-2 py-10 md:px-8 lg:px-10">
              <span className="font-serif text-5xl text-champagne">{p.number}</span>
              <h3 className="mt-6 text-2xl text-ivory sm:text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-ivory/70">{p.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
