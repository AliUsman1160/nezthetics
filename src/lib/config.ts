/**
 * Single source of truth for business details.
 * Nothing here is verified clinic information. Replace the `null` values with
 * the clinic's real details; UI that depends on them appears automatically.
 */
export const siteConfig = {
  name: "Nezthetics Aesthetics Clinic",
  shortName: "Nezthetics",
  description:
    "Nezthetics Aesthetics Clinic: personalized aesthetic and skincare consultations in a calm, welcoming setting.",
  /** Set NEXT_PUBLIC_SITE_URL (e.g. https://example.com) to enable canonical URLs and absolute OG URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? null,

  contact: {
    address: null as string | null,
    phone: null as string | null,
    email: null as string | null,
    hours: null as string | null,
    /** Digits only, with country code, e.g. "447700900000". Leave null to hide the WhatsApp CTA. */
    whatsappNumber: null as string | null,
  },

  /** Add real profile URLs to enable. Placeholders render as inactive labels. */
  social: [
    { label: "Instagram", href: null as string | null },
    { label: "Facebook", href: null as string | null },
    { label: "TikTok", href: null as string | null },
  ],

  legal: {
    privacyHref: "/privacy",
    termsHref: "/terms",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Experts", href: "/experts" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_PLACEHOLDER = "To be added by the clinic";
