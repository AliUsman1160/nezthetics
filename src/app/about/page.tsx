import Image from "next/image";
import { buildMetadata } from "@/lib/utils";
import { images } from "@/data/images";
import type { ImageAsset } from "@/types";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/ui/ConsultationCTA";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { journeySteps } from "@/components/home/ConsultationJourney";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about the Nezthetics approach to aesthetic care: listening first, explaining clearly and personalizing every conversation.",
  path: "/about",
});

const values = [
  { title: "Respect", text: "Your goals, your pace and your decisions are always yours." },
  { title: "Honesty", text: "Clear, balanced information, including what a treatment may not be able to do." },
  { title: "Care", text: "Thoughtful attention before, during and after your visit." },
  { title: "Discretion", text: "A private, comfortable setting where you can speak openly." },
];

function Editorial({
  id,
  eyebrow,
  title,
  children,
  image,
  flip,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: ImageAsset;
  flip?: boolean;
  tone: "ivory" | "white";
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <div className="relative aspect-[4/3] overflow-hidden bg-beige lg:aspect-[5/6]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
          <SectionHeading id={id} eyebrow={eyebrow} title={title} />
          <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-ink-soft">{children}</div>
        </Reveal>
      </div>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nezthetics"
        title="Care That Begins With a Conversation"
        description="Nezthetics is built around a simple idea: people deserve clear information, thoughtful guidance and an approach that respects their individual goals."
        breadcrumbs={[{ label: "About" }]}
        image={images.facialTouch}
      />

      <Editorial
        id="philosophy"
        eyebrow="Our Philosophy"
        title="Beauty Is Personal"
        image={images.dropperPalm}
        tone="white"
      >
        <p>
          Every person arrives with a different story, different concerns and different goals. We believe
          aesthetic care should start with understanding those, not with a menu of treatments.
        </p>
        <p>
          That means listening first, explaining options in plain language and never suggesting that any treatment
          is right for everyone.
        </p>
      </Editorial>

      <Editorial
        id="approach"
        eyebrow="Personalized Care"
        title="An Approach Shaped Around You"
        image={images.creamJar}
        flip
        tone="ivory"
      >
        <p>
          Your consultation is a chance to share your goals, ask questions and understand what different options
          may involve, including preparation, recovery where relevant and aftercare.
        </p>
        <p>
          Recommendations follow a professional assessment. There is no obligation to proceed, and you can take
          time to decide.
        </p>
        <TextLink href="/treatments">Explore Treatments</TextLink>
      </Editorial>

      <Section tone="dark" labelledBy="values-heading">
        <SectionHeading
          id="values-heading"
          tone="dark"
          eyebrow="Values and Principles"
          title="What Guides Our Care"
        />
        <ul className="mt-14 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <li key={v.title} className="bg-espresso p-8 lg:p-10">
              <span className="font-serif text-4xl text-champagne">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-2xl text-ivory">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Editorial
        id="environment"
        eyebrow="The Clinic Environment"
        title="A Calm, Welcoming Space"
        image={images.spaLounge}
        tone="white"
      >
        <p>
          We aim to create an environment that feels unhurried and comfortable, where you can ask anything and take
          the time you need.
        </p>
        <p className="text-sm">
          Images on this site are stock photography used as placeholders and do not show the clinic.
        </p>
        <TextLink href="/gallery">View the Gallery</TextLink>
      </Editorial>

      <Section tone="beige" labelledBy="experience-heading">
        <SectionHeading
          id="experience-heading"
          align="center"
          eyebrow="The Consultation Experience"
          title="What to Expect"
        />
        <ol className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {journeySteps.map((s) => (
            <li key={s.number} className="bg-ivory p-8 lg:p-10">
              <span className="font-serif text-4xl text-champagne-deep">{s.number}</span>
              <h3 className="mt-5 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <ConsultationCTA />
    </>
  );
}
