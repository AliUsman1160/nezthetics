import Link from "next/link";
import { CONTACT_PLACEHOLDER, navLinks, siteConfig } from "@/lib/config";
import { treatments } from "@/data/treatments";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { CurrentYear } from "./CurrentYear";

const linkClass = "text-sm text-ivory/70 transition-colors hover:text-champagne";
const headingClass = "mb-6 font-sans text-[0.72rem] font-medium uppercase tracking-[0.24em] text-champagne";

export function Footer() {
  const { contact, social } = siteConfig;
  const contactRows = [
    { label: "Address", value: contact.address },
    { label: "Phone", value: contact.phone },
    { label: "Email", value: contact.email },
    { label: "Hours", value: contact.hours },
  ];

  return (
    <footer className="on-dark bg-espresso text-ivory">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              Personalized aesthetic and skincare care, shaped by listening first and explaining clearly.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social media">
              {social.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center border border-ivory/25 px-4 text-[0.7rem] uppercase tracking-[0.16em] transition-colors hover:border-champagne hover:text-champagne"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span
                      title="Social profile to be added by the clinic"
                      className="inline-flex min-h-10 items-center border border-ivory/15 px-4 text-[0.7rem] uppercase tracking-[0.16em] text-ivory/45"
                    >
                      {s.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className={headingClass}>Explore</h2>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className={linkClass}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Treatments" className="lg:col-span-3">
            <h2 className={headingClass}>Treatments</h2>
            <ul className="space-y-3">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link href={`/treatments/${t.slug}`} className={linkClass}>
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={headingClass}>Contact</h2>
            <dl className="space-y-4 text-sm">
              {contactRows.map((row) => (
                <div key={row.label}>
                  <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-ivory/45">{row.label}</dt>
                  <dd className={row.value ? "text-ivory/80" : "italic text-ivory/50"}>
                    {row.value ?? CONTACT_PLACEHOLDER}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href={siteConfig.legal.privacyHref} className="transition-colors hover:text-champagne">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={siteConfig.legal.termsHref} className="transition-colors hover:text-champagne">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
