import { HeartHandshake, MessageCircle, ClipboardList, Sprout } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  { icon: MessageCircle, title: "Personalized Consultations", text: "Your goals and questions come first, in a conversation that is never rushed." },
  { icon: Sprout, title: "A Welcoming Environment", text: "A calm, considered setting where you can feel comfortable asking anything." },
  { icon: ClipboardList, title: "Clear Treatment Guidance", text: "Plain-language information about options, preparation and aftercare." },
  { icon: HeartHandshake, title: "Thoughtful Follow-Up", text: "Support after your visit, so you know who to ask and what to expect." },
];

export function WhyNezthetics() {
  return (
    <Section tone="ivory" labelledBy="why-heading">
      <SectionHeading id="why-heading" eyebrow="Why Nezthetics" title="Care Designed Around You" />
      <ul className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="group border-b border-r border-line bg-ivory transition-colors duration-500 hover:bg-white">
            <Reveal delay={i * 0.06} className="h-full p-8 lg:p-10">
              <Icon
                aria-hidden
                strokeWidth={1.1}
                className="mb-8 size-9 text-champagne-deep transition-transform duration-500 ease-premium group-hover:-translate-y-1"
              />
              <h3 className="text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
