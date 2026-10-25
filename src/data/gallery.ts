import type { GalleryItem } from "@/types";
import { images } from "./images";

/** Placeholder stock imagery. None of these show the real clinic, team or patients. */
export const galleryItems: GalleryItem[] = [
  { id: "spa-lounge", image: images.spaLounge, caption: "A quiet lounge corner: the calm we aim for in every space.", category: "Interiors", aspect: "landscape" },
  { id: "dropper-palm", image: images.dropperPalm, caption: "Soft light and natural shadow.", category: "Skincare Details", aspect: "tall" },
  { id: "facial-mask", image: images.facialMask, caption: "Treatment-room ambience (illustrative).", category: "Ambience", aspect: "landscape" },
  { id: "towel-brush", image: images.towelBrush, caption: "Soft textures and neutral tones.", category: "Brand", aspect: "tall" },
  { id: "bathtub", image: images.bathtub, caption: "Serene, uncluttered spaces.", category: "Interiors", aspect: "landscape" },
  { id: "serum", image: images.serumEucalyptus, caption: "Natural materials, considered details.", category: "Skincare Details", aspect: "portrait" },
  { id: "bottle-towel", image: images.bottleTowel, caption: "Quiet, restorative details.", category: "Ambience", aspect: "square" },
  { id: "neutral-lounge", image: images.neutralLounge, caption: "Light-filled, neutral interiors.", category: "Interiors", aspect: "landscape" },
  { id: "lotion", image: images.lotionLinen, caption: "Clean, minimal product styling.", category: "Brand", aspect: "tall" },
  { id: "cream-jar", image: images.creamJar, caption: "Hydration and everyday care.", category: "Skincare Details", aspect: "portrait" },
  { id: "facial-touch", image: images.facialTouch, caption: "Gentle, unhurried care (illustrative).", category: "Ambience", aspect: "landscape" },
  { id: "facial-brush", image: images.facialBrush, caption: "A relaxed treatment-room moment (illustrative).", category: "Ambience", aspect: "landscape" },
  { id: "drops-hand", image: images.dropsHand, caption: "Natural oils and quiet textures.", category: "Skincare Details", aspect: "landscape" },
  { id: "plants",image: images.plantsInterior, caption: "Warmth, plants and natural light.", category: "Interiors", aspect: "tall" },
];

export const galleryCategories = ["All", "Interiors", "Skincare Details", "Ambience", "Brand"] as const;
