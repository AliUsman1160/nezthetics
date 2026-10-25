"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { treatmentCategories, treatments } from "@/data/treatments";
import type { TreatmentCategory } from "@/types";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";
import { TreatmentCard } from "./TreatmentCard";

type Filter = "All" | TreatmentCategory;

export function TreatmentExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return treatments.filter((t) => {
      const matchesCategory = category === "All" || t.category === category;
      const matchesQuery =
        !q ||
        [t.name, t.shortDescription, t.category].some((field) => field.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const filtersActive = query.trim() !== "" || category !== "All";
  const clear = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div>
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="treatment-search" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-soft">
            Search treatments
          </label>
          <Search aria-hidden className="pointer-events-none absolute bottom-3.5 left-4 size-4 text-ink-soft" />
          <input
            id="treatment-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. hydration, peel, consultation"
            autoComplete="off"
            className="h-12 w-full rounded-[2px] border border-line bg-white pl-11 pr-4 text-base outline-none transition-colors placeholder:text-ink-soft/70 focus:border-champagne-deep"
          />
        </div>

        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {(["All", ...treatmentCategories] as Filter[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "min-h-11 rounded-[2px] border px-5 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                category === c
                  ? "border-ink bg-ink text-ivory"
                  : "border-line bg-white text-ink-soft hover:border-ink hover:text-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 flex min-h-8 items-center justify-between gap-4 text-sm text-ink-soft">
        <p role="status" aria-live="polite">
          Showing {results.length} of {treatments.length} treatments
        </p>
        {filtersActive && (
          <button
            type="button"
            onClick={clear}
            className="inline-flex items-center gap-1.5 border-b border-current pb-0.5 text-ink hover:text-champagne-deep"
          >
            <X aria-hidden className="size-3.5" />
            Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {results.map((t, i) => (
            <li key={t.slug}>
              <TreatmentCard treatment={t} variant={i % 3 === 1 ? "wide" : "tall"} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="border border-dashed border-line bg-white px-6 py-16 text-center">
          <h2 className="text-3xl">No treatments match your search</h2>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Try a different word or clear the filters. If you cannot find what you are looking for, the clinic can
            advise at a consultation.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button onClick={clear}>Clear filters</Button>
            <ButtonLink href="/contact" variant="outline">
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
