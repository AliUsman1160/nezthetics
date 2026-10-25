"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menu is "open" only for the path it was opened on, so navigating closes it
  // without needing an effect.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const menuOpen = openFor === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-premium",
        solid ? "border-line bg-ivory/95 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[0.74rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-champagne-deep",
                      active ? "text-ink" : "text-ink-soft",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-champagne-deep transition-transform duration-300 ease-premium",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-[2px] bg-ink px-6 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-champagne-deep sm:inline-flex"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpenFor(pathname)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex size-11 items-center justify-center text-ink xl:hidden"
          >
            <Menu aria-hidden className="size-6" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setOpenFor(null)} pathname={pathname} />
    </header>
  );
}
