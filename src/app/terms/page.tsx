import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions placeholder for Nezthetics Aesthetics Clinic.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage title="Terms and Conditions" label="terms and conditions" />;
}
