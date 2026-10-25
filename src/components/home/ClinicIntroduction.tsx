import Image from "next/image";
import { MessageCircle, SlidersHorizontal, Sprout } from "lucide-react";
import { images } from "@/data/images";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { icon: MessageCircle, title: "Personalized consultations", text: "Time to talk through your goals and ask questions." },
  { icon: SlidersHorizontal, title: "Individual considerations", text: "Options discussed with your skin and circumstances in mind." },
  { icon: Sprout, title: "A welcoming experience", text: "A calm, unhurried setting designed to put you at ease." },
];

export function ClinicIntroduction() {
  return (
    <Section tone="white" labelledBy="intro-heading">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <Image
              src={images.towelBrush.src}
              alt={images.towelBrush.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 hidden aspect-square w-2/5 overflow-hidden border-8 border-white bg-beige sm:block lg:-right-10">
            <Image
              src={images.dropperWhite.src}
              alt={images.dropperWhite.alt}
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <SectionHeading
            id="intro-heading"
            eyebrow="The Nezthetics Approach"
            title="Thoughtful Care. Beautifully Personal."
            description="We believe aesthetic care should begin with listening. By understanding your individual goals first, we can discuss what options may be appropriate and help you make informed, unhurried decisions."
          />
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="border-t border-line pt-5">
                <Icon aria-hidden className="mb-4 size-6 text-champagne-deep" strokeWidth={1.25} />
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <TextLink href="/about">Discover Our Philosophy</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
