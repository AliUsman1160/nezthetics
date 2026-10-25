import type { ImageAsset } from "@/types";

/**
 * Central image registry. All files live in /public/images and are licensed
 * stock photography (Unsplash License) used as PLACEHOLDERS. They are not
 * photographs of the clinic, its team, its patients or its treatments.
 * Swap `src` / `alt` here to replace an image everywhere it is used.
 */
const stock = "Stock photograph (placeholder): ";

export const images = {
  heroPortrait: {
    src: "/images/hero-model-v3.jpg",
    alt: `Placeholder photograph: woman with long dark hair and glowing skin, one hand at her collarbone, in a white sleeveless top against a soft light-grey backdrop`,
  },
  portraitSoft: {
    src: "/images/portrait-soft.jpg",
    alt: `${stock}calm outdoor portrait of a woman with short auburn hair`,
  },
  facialBrush: {
    src: "/images/facial-brush.jpg",
    alt: `${stock}person relaxing during a facial with a mask being applied`,
  },
  facialMask: {
    src: "/images/facial-mask.jpg",
    alt: `${stock}person resting with a cream face mask and headband`,
  },
  facialTouch: {
    src: "/images/facial-touch.jpg",
    alt: `${stock}person lying back during a gentle facial`,
  },
  serumEucalyptus: {
    src: "/images/serum-eucalyptus.jpg",
    alt: `${stock}glass dropper bottle on a wooden board with eucalyptus leaves`,
  },
  dropperPalm: {
    src: "/images/dropper-palm.jpg",
    alt: `${stock}amber dropper bottle with a soft palm-leaf shadow on a beige wall`,
  },
  dropperWhite: {
    src: "/images/dropper-white.jpg",
    alt: `${stock}white dropper bottle with a gold collar on pale marble`,
  },
  dropperHand: {
    src: "/images/dropper-hand.jpg",
    alt: `${stock}a drop of golden oil falling from a dropper onto a hand`,
  },
  creamJar: {
    src: "/images/cream-jar.jpg",
    alt: `${stock}hands holding a small jar of cream`,
  },
  towelBrush: {
    src: "/images/towel-brush.jpg",
    alt: `${stock}folded towel, wooden brush and soap on a pale ceramic dish`,
  },
  lotionLinen: {
    src: "/images/lotion-linen.jpg",
    alt: `${stock}white skincare tube resting on soft white linen`,
  },
  bottleTowel: {
    src: "/images/bottle-towel.jpg",
    alt: `${stock}white pump bottle beside a folded towel and a candle`,
  },
  dropsHand: {
    src: "/images/drops-hand.jpg",
    alt: `${stock}hands holding a small amber bottle dispensing oil`,
  },
  spaLounge: {
    src: "/images/spa-lounge.jpg",
    alt: `${stock}calm lounge area with rattan chair beside a plunge pool`,
  },
  bathtub: {
    src: "/images/bathtub.jpg",
    alt: `${stock}serene bathroom with a freestanding tub and a palm plant`,
  },
  neutralLounge: {
    src: "/images/neutral-lounge.jpg",
    alt: `${stock}bright, neutral-toned living space with soft furnishings`,
  },
  plantsInterior: {
    src: "/images/plants-interior.jpg",
    alt: `${stock}warm interior with plants and a sideboard`,
  },
} satisfies Record<string, ImageAsset>;
