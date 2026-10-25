import type { Metadata } from "next";
import { siteConfig } from "./config";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappLink(message?: string): string | null {
  const number = siteConfig.contact.whatsappNumber?.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.name;
  return {
    title: title ?? { absolute: siteConfig.name },
    description,
    alternates: siteConfig.url ? { canonical: path } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      type: "website",
      locale: "en",
      url: siteConfig.url ? path : undefined,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
