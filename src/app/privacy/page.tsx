import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Nezthetics Aesthetics Clinic.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" label="privacy policy" />;
}
