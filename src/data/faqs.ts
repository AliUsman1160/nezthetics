import type { FAQGroup, FAQItem } from "@/types";

/**
 * General information only. Answers do not constitute personal medical advice
 * and should be reviewed and adapted by the clinic.
 */
export const faqGroups: FAQGroup[] = [
  {
    id: "general",
    title: "General Information",
    items: [
      { question: "What is Nezthetics Aesthetics Clinic?", answer: "Nezthetics is an aesthetics and skincare clinic focused on personalised consultations and thoughtfully considered care. Please contact the clinic directly for confirmed details about its services." },
      { question: "Does an online inquiry give me medical advice?", answer: "No. The website provides general information only. Nothing on it is medical advice, and an inquiry is not a confirmed appointment." },
      { question: "Where can I find the clinic's contact details?", answer: "See the Contact page. The clinic will publish its verified address, phone number and email there." },
    ],
  },
  {
    id: "treatments",
    title: "Treatments",
    items: [
      { question: "How do I choose the right treatment?", answer: "The best starting point is a consultation, where your goals, skin and health are discussed with a professional. Suitability varies from person to person." },
      { question: "Are results guaranteed?", answer: "No. Individual responses differ, and no treatment can offer guaranteed outcomes. The clinic can explain realistic expectations." },
      { question: "Are all treatments suitable for everyone?", answer: "No. Some treatments are not appropriate for certain skin types, health conditions or circumstances. A professional assessment determines suitability." },
    ],
  },
  {
    id: "consultations",
    title: "Consultations",
    items: [
      { question: "Do I need a consultation before treatment?", answer: "Requirements vary by treatment. Many clinics require an assessment first. Confirm with the clinic what applies to the treatment you are interested in." },
      { question: "What happens at a consultation?", answer: "You can expect to discuss your goals, skin and relevant health information, and to learn about options, considerations and next steps. There is no obligation to proceed." },
      { question: "What should I bring?", answer: "Questions, a list of medication and allergies, and details of your current skincare routine can all be helpful." },
    ],
  },
  {
    id: "preparation-aftercare",
    title: "Preparation and Aftercare",
    items: [
      { question: "How should I prepare for an appointment?", answer: "Preparation depends on the treatment. The clinic will provide specific instructions. In general, share your medical history, medication and recent skin treatments." },
      { question: "Where can I learn about treatment aftercare?", answer: "Aftercare is specific to each treatment. The clinic will explain it at your appointment, and each treatment page offers general considerations. Ask the clinic if you have questions afterwards." },
      { question: "What if I am concerned after a treatment?", answer: "Contact the clinic promptly. If you feel unwell or need urgent help, seek medical attention through the appropriate services." },
    ],
  },
  {
    id: "appointments",
    title: "Appointments",
    items: [
      { question: "How do I book a consultation?", answer: "Use the inquiry form on the Contact page or contact the clinic directly. Note that this website is a frontend demo and does not send or confirm bookings." },
      { question: "Is the inquiry form a confirmed booking?", answer: "No. Submitting the form does not book an appointment. The clinic must confirm any booking directly with you." },
      { question: "Can I change or cancel an appointment?", answer: "Please contact the clinic directly. Its policies will be shared when you book." },
    ],
  },
];

export const faqPreview: FAQItem[] = [
  faqGroups[1].items[0],
  faqGroups[2].items[0],
  faqGroups[3].items[0],
  faqGroups[3].items[1],
];
