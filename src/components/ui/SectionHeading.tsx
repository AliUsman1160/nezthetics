import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-4 text-[0.72rem] font-medium uppercase tracking-[0.28em]",
        tone === "light" ? "text-champagne-deep" : "text-champagne",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} className={cn("mb-6", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag id={id} className="text-[2.25rem] sm:text-5xl lg:text-[3.5rem]">
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ink-soft" : "text-ivory/75",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
