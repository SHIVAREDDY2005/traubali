import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { aboutData } from "../../constants/siteData";

// Introduces the brand story and supporting ingredient notes in an editorial layout.
function AboutSection() {
  return (
    <section
      id={aboutData.id}
      className="relative px-5 py-18 sm:px-6 sm:py-24 xl:px-8 xl:py-30"
    >
      <div className="mx-auto max-w-[1480px]">
        <Reveal>
          <header className="flex justify-start xl:justify-end">
            <h2 className="display-section max-w-[8.2ch] text-left xl:max-w-[13ch] xl:text-right">
              {aboutData.title}
            </h2>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 xl:mt-24 xl:ml-auto xl:w-[56%]">
            <div className="relative flex justify-between gap-8">
              <article className="w-full xl:w-[84%]">
                <div className="space-y-6 text-[1rem] leading-8 text-[#355242] sm:text-[1.06rem]">
                  {aboutData.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <p className="mt-8 text-[1rem] font-semibold text-[#1E4334] sm:text-[1.04rem]">
                  Some ingredients include:
                </p>

                <ul className="mt-4 ml-5 list-disc space-y-3 text-[0.98rem] leading-7 text-[#28493A] sm:text-[1.03rem]">
                  {aboutData.ingredients.map((item) => (
                    <li key={item.name}>
                      <span className="font-semibold text-[#173B2C]">{item.name}</span>{" "}
                      <span className="italic text-[#456555]">{item.note}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={aboutData.ctaPrimary.href} className="luxury-solid-button">
                    {aboutData.ctaPrimary.label}
                  </a>
                  <a href={aboutData.ctaSecondary.href} className="luxury-solid-button">
                    {aboutData.ctaSecondary.label}
                  </a>
                </div>
              </article>

              <aside className="relative hidden xl:block xl:w-[16%]">
                {aboutData.illustrations.map((item, index) => (
                  <motion.img
                    key={item.alt}
                    src={item.image}
                    alt={item.alt}
                    aria-hidden="true"
                    animate={{ opacity: [0.36, 0.9, 0.36], y: [0, -6, 0] }}
                    transition={{
                      duration: index === 0 ? 4.8 : 5.5,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className={`absolute w-[7.8rem] origin-bottom-right ${item.className}`}
                  />
                ))}
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
