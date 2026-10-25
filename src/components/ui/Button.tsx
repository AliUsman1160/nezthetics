import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "ghostLight";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] px-7 py-3 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-champagne-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  light: "bg-champagne text-espresso hover:bg-ivory",
  ghostLight: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const classes = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

/** Understated text link with an animated underline. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 border-b border-current pb-1 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:text-champagne-deep",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
