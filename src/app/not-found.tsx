import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-beige/50 pb-24 pt-40 sm:pt-52 sm:pb-32">
      <Container className="max-w-3xl text-center">
        <Eyebrow className="mb-6 justify-center">Error 404</Eyebrow>
        <h1 className="text-5xl sm:text-7xl">This page could not be found.</h1>
        <p className="mx-auto mt-7 max-w-md text-ink-soft">
          The page may have moved or never existed. Let us help you find your way back.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/treatments" variant="outline">
            Explore Treatments
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
