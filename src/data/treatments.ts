import type { Treatment, TreatmentCategory } from "@/types";
import { images } from "./images";

/**
 * SAMPLE SERVICE LIST. These are editable examples only. The clinic has not
 * confirmed that it offers any of them. Replace, rewrite or delete entries
 * before launch. Suitability, risks and timings are decided at consultation.
 */

const consultNote =
  "Every treatment decision follows a professional assessment. Details such as duration, recovery and cost vary from person to person and are discussed at consultation.";

export const treatmentCategories: TreatmentCategory[] = [
  "Consultation",
  "Facial Care",
  "Skin Renewal",
  "Concern-Specific",
];

export const treatments: Treatment[] = [
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    category: "Skin Renewal",
    shortDescription:
      "A considered approach to skin that feels tired or uneven, shaped around your goals and a professional assessment.",
    overview: `Skin rejuvenation is a broad term for approaches that aim to support the look and feel of skin over time. At Nezthetics, the starting point is a conversation about what you would like to explore, followed by a discussion of which options, if any, may be appropriate for you. ${consultNote}`,
    image: images.facialTouch,
    featured: true,
    whoMayConsider: [
      "People who feel their skin looks dull, tired or uneven and would like to talk through options.",
      "Those who want a plan built around their own skin rather than a one-size-fits-all routine.",
      "Anyone who would like clear information before deciding whether to proceed.",
    ],
    potentialBenefits: [
      "A clearer understanding of your skin and what may suit it.",
      "A personalised plan that reflects your preferences and lifestyle.",
      "Some people notice a fresher-looking appearance; individual responses vary and results are not guaranteed.",
    ],
    process: [
      { title: "Consultation", text: "Discuss your goals, skin history and any concerns with a member of the team." },
      { title: "Assessment", text: "Your skin and general suitability are reviewed professionally." },
      { title: "Planning", text: "Appropriate options, considerations and expectations are explained so you can decide." },
      { title: "Follow-up", text: "Progress and next steps are reviewed as agreed with the clinic." },
    ],
    preparation: [
      "Bring a list of current skincare products, medications and any skin concerns.",
      "Let the clinic know about allergies, sensitivities or previous skin treatments.",
      "Follow any specific preparation instructions the clinic gives you.",
    ],
    aftercare: [
      "Aftercare depends on the approach chosen and will be explained by the clinic.",
      "Ask the clinic what to expect and when to seek advice after a treatment.",
    ],
    faqs: [
      { question: "Is skin rejuvenation right for me?", answer: "Suitability depends on your skin, health and goals. This can only be established through a professional consultation." },
      { question: "How many sessions might I need?", answer: "This varies between individuals and approaches. The clinic can explain what a plan might involve after assessing you." },
    ],
    related: ["facial-treatments", "skin-hydration", "anti-aging-treatments"],
  },
  {
    slug: "facial-treatments",
    name: "Facial Treatments",
    category: "Facial Care",
    shortDescription:
      "Restorative, skin-focused facials chosen to complement your skin's needs on the day.",
    overview: `Facials combine cleansing, skin-focused techniques and calming care in a quiet setting. The approach is adapted to your skin's needs and preferences. ${consultNote}`,
    image: images.facialMask,
    whoMayConsider: [
      "People who would like dedicated time for skin-focused care.",
      "Those who want advice on adapting their routine to their skin.",
      "Anyone preparing for an occasion who would like to discuss suitable options in advance.",
    ],
    potentialBenefits: [
      "A calming, unhurried experience.",
      "Guidance on caring for your skin at home.",
      "Skin may feel refreshed afterwards; individual experiences differ.",
    ],
    process: [
      { title: "Skin conversation", text: "Share how your skin feels and any sensitivities." },
      { title: "Tailored care", text: "Steps and products are selected with your skin in mind." },
      { title: "Home guidance", text: "You receive suggestions on caring for your skin between visits." },
    ],
    preparation: [
      "Arrive with a clean, comfortable face where possible, unless advised otherwise.",
      "Mention any recent skin treatments or reactions to products.",
    ],
    aftercare: [
      "The clinic will advise on products and sun protection suited to your skin.",
      "If you notice anything unexpected, contact the clinic for guidance.",
    ],
    faqs: [
      { question: "Do I need a consultation first?", answer: "The clinic can confirm whether a consultation is required before booking. Requirements vary by treatment." },
      { question: "Can I have a facial with sensitive skin?", answer: "Often adjustments can be discussed, but this needs to be assessed individually. Tell the clinic about any sensitivities." },
    ],
    related: ["skin-hydration", "skin-rejuvenation", "personalized-skin-consultations"],
  },
  {
    slug: "acne-and-blemish-care",
    name: "Acne and Blemish Care",
    category: "Concern-Specific",
    shortDescription:
      "Supportive, judgement-free guidance for breakouts, blemishes and the skin concerns that come with them.",
    overview: `Breakouts and blemishes affect people in different ways and for different reasons. Care starts by understanding your skin and history, so that suitable options can be discussed. ${consultNote}`,
    image: images.dropperPalm,
    whoMayConsider: [
      "People experiencing recurring breakouts or marks they would like to discuss.",
      "Those unsure which products or approaches suit their skin.",
      "Anyone who would like a professional opinion on a persistent concern.",
    ],
    potentialBenefits: [
      "A clearer picture of what may be contributing to your concerns.",
      "A structured plan and realistic expectations.",
      "Some people see improvement over time; outcomes vary and cannot be promised.",
    ],
    process: [
      { title: "Listen", text: "Describe your skin history, routine and what has or has not helped." },
      { title: "Assess", text: "A professional reviews your skin and any relevant health information." },
      { title: "Plan", text: "Suitable options and a realistic timeline are discussed." },
      { title: "Review", text: "Progress is reviewed and the plan adjusted where appropriate." },
    ],
    preparation: [
      "List the products you currently use, including prescribed treatments.",
      "Note anything that seems to trigger flare-ups.",
    ],
    aftercare: [
      "Guidance depends on the approach you and the clinic agree.",
      "Avoid picking at skin and follow the clinic's advice on products and sun protection.",
    ],
    faqs: [
      { question: "Is this the same as medical treatment for acne?", answer: "Some concerns may need medical assessment. The clinic can advise on whether another professional should be involved." },
      { question: "How long until I might see a difference?", answer: "Timelines differ widely. A professional can give a more realistic view after assessing your skin." },
    ],
    related: ["chemical-peels", "personalized-skin-consultations", "skin-hydration"],
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    category: "Skin Renewal",
    shortDescription:
      "Exfoliating treatments that may be discussed for texture and tone, selected only after assessment.",
    overview: `Chemical peels use carefully selected formulations intended to exfoliate the skin's surface. They are not suitable for everyone, and the type and strength depend on your skin and circumstances. ${consultNote}`,
    image: images.dropperHand,
    whoMayConsider: [
      "People interested in discussing options for skin texture or tone.",
      "Those who understand that suitability and timing need professional assessment.",
    ],
    potentialBenefits: [
      "A smoother-feeling surface for some people.",
      "A route to discuss tone and texture concerns.",
      "Results and experiences vary; none are guaranteed.",
    ],
    process: [
      { title: "Consultation", text: "Your skin, health, medication and expectations are reviewed." },
      { title: "Suitability check", text: "The clinic decides whether a peel is appropriate and, if so, which kind." },
      { title: "Treatment", text: "Where suitable, the treatment is carried out as explained to you in advance." },
      { title: "Aftercare", text: "You receive written or verbal guidance on caring for your skin afterwards." },
    ],
    preparation: [
      "Share your full skincare routine, including active ingredients.",
      "Tell the clinic about sun exposure, recent treatments and medication.",
      "Follow any pre-treatment instructions exactly as given.",
    ],
    aftercare: [
      "Skin can be more sensitive afterwards; the clinic will explain what to expect.",
      "Sun protection and gentle products are commonly advised.",
      "Contact the clinic if you have concerns about how your skin is responding.",
    ],
    faqs: [
      { question: "Will there be downtime?", answer: "It depends on the type of peel and your skin. Recovery expectations are explained at consultation." },
      { question: "Are peels suitable for every skin type?", answer: "No. Suitability and risks must be assessed individually by a professional." },
    ],
    related: ["skin-rejuvenation", "acne-and-blemish-care", "anti-aging-treatments"],
  },
  {
    slug: "laser-treatments",
    name: "Laser Treatments",
    category: "Skin Renewal",
    shortDescription:
      "An area to explore with the clinic if energy-based treatments are part of your goals.",
    overview: `Energy-based treatments differ widely in purpose, technology and suitability. This page is a placeholder for the clinic to describe what it genuinely offers. Until then, please treat it as general information only. ${consultNote}`,
    image: images.dropperWhite,
    whoMayConsider: [
      "People curious about advanced options who would like an honest discussion of suitability.",
      "Those who want to understand risks and alternatives before deciding.",
    ],
    potentialBenefits: [
      "A clear explanation of what a given technology can and cannot do.",
      "Individual outcomes vary and cannot be guaranteed.",
    ],
    process: [
      { title: "Consultation", text: "Goals, skin type, history and expectations are discussed in detail." },
      { title: "Assessment", text: "A suitably qualified professional determines whether treatment is appropriate." },
      { title: "Consent and planning", text: "Risks, alternatives and aftercare are explained before any decision." },
    ],
    preparation: [
      "Follow all preparation instructions provided by the clinic.",
      "Share any medication, recent sun exposure or previous procedures.",
    ],
    aftercare: [
      "Aftercare depends on the specific treatment and will be provided by the clinic.",
      "Seek advice from the clinic if you are concerned about your recovery.",
    ],
    faqs: [
      { question: "Is a laser treatment safe for me?", answer: "Safety and suitability depend on you and the specific treatment. A professional assessment is essential." },
      { question: "How many sessions will I need?", answer: "This varies and can only be advised after assessment." },
    ],
    related: ["skin-rejuvenation", "personalized-skin-consultations", "chemical-peels"],
  },
  {
    slug: "anti-aging-treatments",
    name: "Anti-Aging Treatments",
    category: "Concern-Specific",
    shortDescription:
      "Age-aware care that respects who you are, with options discussed honestly and without pressure.",
    overview: `Ageing is natural, and what people want from aesthetic care differs. This approach centres on your own goals, with realistic information about what different options may involve. ${consultNote}`,
    image: images.serumEucalyptus,
    whoMayConsider: [
      "People who would like to discuss changes they notice in their skin.",
      "Those seeking preventative or maintenance-minded advice.",
      "Anyone who values a straightforward, unpressured conversation.",
    ],
    potentialBenefits: [
      "Informed choices based on your goals.",
      "A plan that favours a natural, individual look.",
      "Outcomes differ between people and are never guaranteed.",
    ],
    process: [
      { title: "Understand", text: "Talk through what you would like to change, or keep exactly as it is." },
      { title: "Assess", text: "A professional reviews your skin and suitability for any option." },
      { title: "Decide", text: "Options, risks and alternatives are explained so you can choose at your own pace." },
    ],
    preparation: [
      "Think about what matters most to you before the consultation.",
      "Bring details of medication, allergies and previous aesthetic treatments.",
    ],
    aftercare: [
      "Guidance depends entirely on the approach chosen.",
      "The clinic will explain what to expect and who to contact with questions.",
    ],
    faqs: [
      { question: "Will treatment change how I look?", answer: "Your goals are discussed first. The clinic can explain realistic expectations, and nothing is guaranteed." },
      { question: "Is there an ideal age to start?", answer: "There is no single answer. It depends on your skin and goals, and can be discussed at consultation." },
    ],
    related: ["skin-rejuvenation", "skin-hydration", "chemical-peels"],
  },
  {
    slug: "skin-hydration",
    name: "Skin Hydration",
    category: "Facial Care",
    shortDescription:
      "Comfort-focused care for skin that feels dry, tight or in need of a little more moisture.",
    overview: `Skin that feels dry or tight can have many causes. Hydration-focused care looks at your routine, environment and skin type to discuss suitable steps. ${consultNote}`,
    image: images.creamJar,
    whoMayConsider: [
      "People whose skin often feels dry or tight.",
      "Those wanting to refine a home routine.",
    ],
    potentialBenefits: [
      "Advice tailored to your skin's needs.",
      "Skin may feel more comfortable; individual results vary.",
    ],
    process: [
      { title: "Skin review", text: "Discuss how your skin behaves across the day and seasons." },
      { title: "Recommendations", text: "Suitable in-clinic care and home products are talked through." },
      { title: "Follow-up", text: "Adjust your plan as your skin changes." },
    ],
    preparation: [
      "Bring the products you use now, or photos of their ingredient lists.",
      "Mention any skin conditions or sensitivities.",
    ],
    aftercare: [
      "The clinic can advise on gentle routines and sun protection.",
      "Contact the clinic if irritation develops.",
    ],
    faqs: [
      { question: "Is persistent dryness something to worry about?", answer: "It can sometimes relate to other factors. If you are concerned, speak with a healthcare professional." },
      { question: "Do I need to buy products?", answer: "That is a conversation for the clinic. You should always feel free to ask questions and decide at your own pace." },
    ],
    related: ["facial-treatments", "skin-rejuvenation", "personalized-skin-consultations"],
  },
  {
    slug: "personalized-skin-consultations",
    name: "Personalized Skin Consultations",
    category: "Consultation",
    shortDescription:
      "An unhurried conversation about your skin, your goals and the options that may suit you.",
    overview: `Everything at Nezthetics begins with a conversation. A consultation is a chance to share your goals, ask questions and understand what different options may involve, with no obligation to proceed. ${consultNote}`,
    image: images.portraitSoft,
    featured: true,
    whoMayConsider: [
      "Anyone new to aesthetic care who would like to start with information.",
      "People unsure which treatment, if any, is right for them.",
      "Existing clients who would like to review their plan.",
    ],
    potentialBenefits: [
      "Clear, understandable information.",
      "A chance to ask anything before making decisions.",
      "A personalised view of suitable next steps.",
    ],
    process: [
      { title: "Share your goals", text: "Tell us what you would like to explore." },
      { title: "Talk through options", text: "Discuss suitability and considerations." },
      { title: "Agree next steps", text: "Decide whether and how to proceed, at your pace." },
    ],
    preparation: [
      "Write down your questions and goals.",
      "Bring a list of medication, allergies and current skincare.",
    ],
    aftercare: [
      "A consultation does not itself require aftercare.",
      "If you go on to have treatment, aftercare guidance will be provided.",
    ],
    faqs: [
      { question: "Will I be pressured to book a treatment?", answer: "A consultation is for information. Your decisions are your own." },
      { question: "What should I bring?", answer: "Your questions, details of medication and allergies, and anything about your current routine you would like to discuss." },
    ],
    related: ["skin-rejuvenation", "facial-treatments", "acne-and-blemish-care"],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getRelatedTreatments(treatment: Treatment) {
  return treatment.related
    .map((slug) => getTreatment(slug))
    .filter((t): t is Treatment => Boolean(t));
}
