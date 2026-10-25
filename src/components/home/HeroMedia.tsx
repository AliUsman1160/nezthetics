"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/images";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero imagery: a compact rounded portrait (capped width so the photo is never
 * stretched past its resolution), a small detail image and a note card.
 */
export function HeroMedia() {
  return (
    <div className="relative mx-auto w-full max-w-[24rem] pb-20 sm:max-w-[30rem] lg:max-w-[32rem] lg:ml-auto lg:mr-0">
      <motion.div
        className="relative aspect-[6/5] w-full overflow-hidden rounded-[2rem] bg-beige"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.3, ease }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <Image
            src={images.heroPortrait.src}
            alt={images.heroPortrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 32rem, (min-width: 640px) 30rem, 24rem"
            className="object-cover object-[50%_15%]"
          />
        </motion.div>
        {/* Softens the photo into the ivory palette. */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-ivory/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 -left-6 hidden aspect-[3/4] w-28 overflow-hidden border-[6px] border-ivory bg-beige shadow-[0_20px_50px_-20px_rgba(48,37,33,0.5)] sm:block lg:-left-14 lg:w-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease }}
      >
        <Image
          src={images.dropperPalm.src}
          alt={images.dropperPalm.alt}
          fill
          sizes="128px"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 max-w-[15rem] border border-line bg-ivory p-4 shadow-[0_20px_50px_-25px_rgba(48,37,33,0.45)] sm:-right-2 sm:max-w-[16rem] sm:p-4 lg:-right-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease }}
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-champagne-deep">Consultation-led</p>
        <p className="mt-2 font-serif text-lg leading-snug sm:text-xl">Every plan begins with a conversation.</p>
      </motion.div>
    </div>
  );
}
