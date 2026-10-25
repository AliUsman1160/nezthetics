import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}

/** Consistent vertical rhythm for page sections. */
export function Section({
  children,
  className,
  id,
  tone = "ivory",
  labelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "white" | "beige" | "dark";
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-ivory text-ink",
    white: "bg-white text-ink",
    beige: "bg-beige/60 text-ink",
    dark: "bg-espresso text-ivory on-dark",
  };
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-20 sm:py-24 lg:py-32", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
