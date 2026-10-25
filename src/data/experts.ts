import type { Expert } from "@/types";

/**
 * DEVELOPMENT PLACEHOLDERS. These are not real people. Replace each entry with
 * the clinic's verified team details (name, title, qualifications, portrait)
 * and set `isPlaceholder: false`. Never list a qualification that has not been
 * confirmed by the clinic.
 */
export const experts: Expert[] = [
  {
    slug: "team-member-one",
    name: "Team Member Name",
    title: "Clinical Lead (placeholder title)",
    bio: "Placeholder biography. Replace with a short, verified introduction describing this practitioner's role and approach to patient care.",
    practiceAreas: ["Skin consultations", "Treatment planning"],
    qualifications: [],
    image: null,
    isPlaceholder: true,
  },
  {
    slug: "team-member-two",
    name: "Team Member Name",
    title: "Aesthetic Practitioner (placeholder title)",
    bio: "Placeholder biography. Replace with verified details about this practitioner's responsibilities and areas of interest.",
    practiceAreas: ["Facial care", "Aftercare guidance"],
    qualifications: [],
    image: null,
    isPlaceholder: true,
  },
  {
    slug: "team-member-three",
    name: "Team Member Name",
    title: "Client Care Coordinator (placeholder title)",
    bio: "Placeholder biography. Replace with verified details about how this team member supports clients before and after their visit.",
    practiceAreas: ["Client enquiries", "Appointment coordination"],
    qualifications: [],
    image: null,
    isPlaceholder: true,
  },
];
