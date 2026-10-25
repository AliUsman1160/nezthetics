"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Info } from "lucide-react";
import { treatments } from "@/data/treatments";
import { whatsappLink } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";

interface Values {
  treatment: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof Values, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!emailPattern.test(v.email.trim())) e.email = "Please enter a valid email address, for example name@example.com.";
  if (v.phone.trim() && v.phone.replace(/\D/g, "").length < 7)
    e.phone = "Please enter a valid phone number, or leave this blank.";
  if (v.date) {
    const chosen = new Date(`${v.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime()) || chosen < today) e.date = "Please choose a date today or in the future.";
  }
  if (!v.message.trim()) e.message = "Please tell us a little about what you would like to discuss.";
  else if (v.message.trim().length < 10) e.message = "Please add a little more detail (at least 10 characters).";
  if (!v.consent) e.consent = "Please confirm you understand how this form works.";
  return e;
}

const fieldClass =
  "w-full rounded-[2px] border bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-ink-soft/60 focus:border-champagne-deep";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {optional && <span className="ml-1 font-normal text-ink-soft">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-[#a23b2e]">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const preselected = useSearchParams().get("treatment") ?? "";
  const initialTreatment = treatments.some((t) => t.slug === preselected) ? preselected : "";

  // Held in component memory only. Nothing is stored in the browser or sent anywhere.
  const [values, setValues] = useState<Values>({
    treatment: initialTreatment,
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "demo">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const ariaFor = (key: keyof Values) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });
  const borderFor = (key: keyof Values) => (errors[key] ? "border-[#a23b2e]" : "border-line");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Values)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("demo");
      requestAnimationFrame(() => noticeRef.current?.focus());
    }, 600);
  };

  const wa = whatsappLink("Hello, I would like to ask about a consultation.");

  if (status === "demo") {
    return (
      <div
        ref={noticeRef}
        tabIndex={-1}
        role="status"
        className="border border-champagne/60 bg-white p-8 outline-none sm:p-10"
      >
        <Info aria-hidden className="mb-5 size-8 text-champagne-deep" />
        <h2 className="text-3xl sm:text-4xl">This is a frontend demo</h2>
        <p className="mt-4 text-ink-soft">
          Your inquiry has not been sent. Please contact the clinic directly using its verified contact details.
          No appointment has been booked or requested.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Edit my details
          </Button>
          {wa && (
            <ButtonLink href={wa} external>
              Message on WhatsApp
            </ButtonLink>
          )}
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-note" className="space-y-6">
      <p id="form-note" className="flex gap-3 border border-line bg-white p-4 text-sm text-ink-soft">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-champagne-deep" />
        <span>
          Demo form: submitting does not send your details anywhere. Please do not enter sensitive health
          information.
        </span>
      </p>

      <Field id="treatment" label="Treatment of interest" optional>
        <select
          id="treatment"
          name="treatment"
          value={values.treatment}
          onChange={(e) => set("treatment", e.target.value)}
          className={`${fieldClass} ${borderFor("treatment")}`}
        >
          <option value="">Not sure yet</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={`${fieldClass} ${borderFor("name")}`}
            {...ariaFor("name")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={`${fieldClass} ${borderFor("email")}`}
            {...ariaFor("email")}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={`${fieldClass} ${borderFor("phone")}`}
            {...ariaFor("phone")}
          />
        </Field>
        <Field id="date" label="Preferred date" optional error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
            className={`${fieldClass} ${borderFor("date")}`}
            {...ariaFor("date")}
          />
        </Field>
      </div>

      <Field id="message" label="How can we help?" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${fieldClass} ${borderFor("message")} resize-y`}
          {...ariaFor("message")}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-1 size-5 shrink-0 accent-[#8a6c4a]"
            {...ariaFor("consent")}
          />
          <label htmlFor="consent" className="text-sm text-ink-soft">
            I understand this is an inquiry only, not a confirmed appointment or medical advice, and that this demo
            does not transmit my details.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-2 text-sm text-[#a23b2e]">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Checking…" : "Submit Inquiry"}
      </Button>
    </form>
  );
}
