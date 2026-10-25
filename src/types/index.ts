export interface ImageAsset {
  src: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  id: string;
  title: string;
  items: FAQItem[];
}

export type TreatmentCategory =
  | "Consultation"
  | "Facial Care"
  | "Skin Renewal"
  | "Concern-Specific";

export interface Treatment {
  slug: string;
  name: string;
  category: TreatmentCategory;
  shortDescription: string;
  overview: string;
  image: ImageAsset;
  /** Larger editorial card on the homepage grid. */
  featured?: boolean;
  whoMayConsider: string[];
  potentialBenefits: string[];
  process: { title: string; text: string }[];
  preparation: string[];
  aftercare: string[];
  faqs: FAQItem[];
  related: string[];
}

export interface Expert {
  slug: string;
  name: string;
  title: string;
  bio: string;
  practiceAreas: string[];
  /** Only list qualifications that have been verified by the clinic. */
  qualifications: string[];
  image: ImageAsset | null;
  isPlaceholder: boolean;
}

export type GalleryCategory = "Interiors" | "Skincare Details" | "Ambience" | "Brand";

export interface GalleryItem {
  id: string;
  image: ImageAsset;
  caption: string;
  category: GalleryCategory;
  /** Tailwind aspect class, used to vary the masonry rhythm. */
  aspect: "portrait" | "landscape" | "square" | "tall";
}

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  isSample: boolean;
}
