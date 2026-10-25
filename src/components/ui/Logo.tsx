import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Placeholder typographic logo. Not an official brand mark; replace with the
 * clinic's real branding when available.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const color = tone === "dark" ? "text-ink" : "text-ivory";
  return (
    <Link
      href="/"
      aria-label="Nezthetics Aesthetics Clinic, home"
      className={cn("group inline-flex items-center gap-3", color, className)}
    >
      <svg viewBox="0 0 32 32" fill="none" aria-hidden className="size-7 shrink-0 sm:size-[30px]">
        <circle cx="16" cy="16" r="15.25" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
        <path
          d="M10.5 22V10l11 12V10"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.15rem] font-medium tracking-[0.24em] sm:text-[1.35rem] sm:tracking-[0.3em]">NEZTHETICS</span>
        <span className="mt-1.5 text-[0.5rem] font-medium tracking-[0.36em] opacity-70 sm:text-[0.55rem] sm:tracking-[0.42em]">
          AESTHETICS CLINIC
        </span>
      </span>
    </Link>
  );
}
