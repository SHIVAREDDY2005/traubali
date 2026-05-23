import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { ingredientStoryData, footerData } from "../../constants/siteData";

// Highlights the ingredient philosophy inside the dark full-width story band.
function IngredientsSection() {
  return (
    <section className="relative overflow-hidden bg-[#173B2C] text-[#F5F1E8]">
      <img
        src={footerData.borderProper}
        alt=""
        className="h-12 w-full object-cover"
        loading="lazy"
      />

      <div
        id={ingredientStoryData.id}
        className="mx-auto max-w-[1560px] px-5 py-20 sm:px-6 sm:py-24 xl:px-8 xl:py-28"
      >
        <div className="relative min-h-[42rem] overflow-hidden rounded-[2rem] border border-[#B8924F]/18 bg-[#173B2C] px-5 py-14 sm:px-8 xl:min-h-[56rem] xl:px-10 xl:py-16">
          <div className="absolute inset-y-0 left-0 w-full xl:w-[38%]">
            <img
              src={ingredientStoryData.background}
              alt="Balinese heritage portrait"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#173B2C] via-[#173B2C]/88 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="grid gap-8 xl:grid-cols-[1fr_auto_1fr] xl:items-start">
              <div className="space-y-2 text-[0.95rem] text-[#F5F1E8]/88">
                <p>Taru (Balinese for Nature)</p>
              </div>

              <div className="hidden xl:flex xl:justify-center">
                <svg
                  viewBox="0 0 520 120"
                  className="h-[7rem] w-[32rem] text-[#F5F1E8]/42"
                  fill="none"
                >
                  <path
                    d="M10 32C126 10 155 102 274 96C374 91 390 31 510 25"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <text
                    x="232"
                    y="80"
                    fill="currentColor"
                    style={{ fontSize: "14px", letterSpacing: "0.02em" }}
                  >
                    Bali (Islands Roots)
                  </text>
                </svg>
              </div>

              <div className="space-y-2 xl:text-right">
                <p className="text-[0.95rem] text-[#F5F1E8]/88">
                  A return to the island&apos;s roots, rituals, and natural balance.
                </p>
              </div>
            </div>

            <Reveal className="mx-auto mt-12 max-w-[60rem] text-center xl:mt-0">
              <p className="accent-script text-[#D7AF5E]">
                {ingredientStoryData.overline}
              </p>
              <h2 className="mt-3 font-display text-[2.3rem] uppercase leading-[0.94] tracking-[-0.06em] text-[#F3EFE5] sm:text-[3.6rem] xl:text-[5.2rem]">
                {ingredientStoryData.title}
              </h2>
              <p className="mx-auto mt-6 max-w-[46rem] text-[1rem] leading-8 text-[#F5F1E8]/78 sm:text-[1.08rem]">
                {ingredientStoryData.description}
              </p>
              <a href={ingredientStoryData.cta.href} className="luxury-link mt-6 inline-block text-[#D7AF5E]">
                {ingredientStoryData.cta.label}
              </a>
            </Reveal>

            <div className="relative mt-14 hidden xl:block xl:h-40">
              {ingredientStoryData.floatingImages.map((item) => (
                <motion.figure
                  key={item.alt}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: item.position === "top-right" ? 7 : 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`absolute overflow-hidden rounded-[1rem] border border-[#D7AF5E]/24 shadow-[0_24px_80px_rgba(6,17,12,0.4)] ${
                    item.position === "top-right"
                      ? "right-16 top-0 w-28"
                      : "bottom-0 left-8 w-28"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[8.5rem] w-full object-cover"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img
        src={footerData.borderProper}
        alt=""
        className="h-12 w-full object-cover"
        loading="lazy"
      />
    </section>
  );
}

export default IngredientsSection;
