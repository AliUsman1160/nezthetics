/**
 * Soft "glow" backdrop for the hero: warm light washes, thin champagne ripple
 * rings behind the portrait and a fine flowing line. Purely decorative.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* warm light washes */}
      <div className="absolute -left-32 -top-20 h-[32rem] w-[32rem] rounded-full bg-[#f3e6d2]/70 blur-3xl" />
      <div className="absolute right-[6%] top-[14%] h-[30rem] w-[30rem] rounded-full bg-[#f8eecb]/70 blur-3xl" />
      <div className="absolute -bottom-32 left-[28%] h-[24rem] w-[34rem] rounded-full bg-[#f1e4d0]/60 blur-3xl" />

      {/* ripple rings centred behind the portrait */}
      <svg
        viewBox="0 0 800 800"
        className="absolute right-[-6rem] top-1/2 hidden h-[52rem] w-[52rem] -translate-y-1/2 lg:block"
        fill="none"
        stroke="#c9ad85"
        strokeWidth="1"
      >
        <circle cx="400" cy="400" r="150" opacity="0.38" />
        <circle cx="400" cy="400" r="230" opacity="0.3" />
        <circle cx="400" cy="400" r="310" opacity="0.22" />
        <circle cx="400" cy="400" r="390" opacity="0.14" />
      </svg>

      {/* fine flowing line across the lower hero */}
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-40 w-full opacity-70 sm:h-52"
        fill="none"
        stroke="#d6bf9b"
        strokeWidth="1"
      >
        <path d="M0 220 C 240 120, 420 280, 700 190 S 1160 90, 1440 190" opacity="0.7" />
        <path d="M0 250 C 260 160, 440 300, 720 220 S 1180 130, 1440 225" opacity="0.4" />
      </svg>
    </div>
  );
}
