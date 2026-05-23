import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "../animations/Reveal";
import { heroData } from "../../constants/siteData";
import whiteLogo  from "../../assets/images/white.png";
import bali  from "../../assets/images/bali.png";
// Builds the landing hero, including the sticky bottle motion and looping image rail.
function HeroSection() {
  const sectionRef = useRef(null);
  const heroScrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroScrollRef,
    offset: ["start start", "end 35%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.28,
  });

  const bottleRotate = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [0, -4, -10, -15]);

  // Duplicates the card list so the marquee can loop without a visible seam.
  const marqueeCards = [...heroData.cards, ...heroData.cards];

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-visible px-5 pt-28 sm:px-6 sm:pt-32 xl:px-8 xl:pt-34"
    >
      <div ref={heroScrollRef} className="relative pb-16 sm:pb-20 xl:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="sticky top-0 z-30 -mb-[27.5rem] flex h-[51.25rem] items-center justify-center overflow-hidden sm:-mb-[35rem] sm:h-[64rem] lg:-mb-[45.5rem] lg:h-[85.5rem] xl:-mb-[27.5rem] xl:h-[51.25rem]">
            <motion.div
              style={{ rotate: bottleRotate }}
              className="bottle will-change-transform"
            >
              <figure className="h-[17rem] w-auto origin-center rotate-[15deg] transition-transform duration-500 ease-in-out sm:h-[20rem] lg:h-[21.875rem] xl:h-[17rem]">
                <img
                  src={heroData.bottle}
                  alt="Taru Bali herbal oil bottle"
                  loading="eager"
                  className="pointer-events-none h-full w-auto object-contain drop-shadow-[0_24px_46px_rgba(40,30,14,0.22)]"
                />
              </figure>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-[1480px]">
          <div className="space-y-[7.5rem] sm:space-y-[9rem]">
            <section className="relative flex h-[51.25rem] flex-col items-center justify-center px-4 pt-20 text-center sm:h-[64rem] sm:px-5 lg:h-[85.5rem] xl:h-[51.25rem]">
              <Reveal className="flex justify-center">
                <img
                  src={whiteLogo}
                  alt="Taru Bali"
                  className="h-20 w-auto sm:h-24 xl:h-[7rem]"
                />
              </Reveal>

              <div className="relative mt-5 flex h-full w-full flex-col items-center sm:mt-7 xl:mt-1">
                <Reveal delay={0.08}>
                  <h1 className="display-hero max-w-[13ch] px-3 text-[#173B2C] sm:max-w-none">
                    {heroData.title}
                  </h1>
                </Reveal>

                <motion.img
                  src={bali}
                  alt="From Bali"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.8 }}
                  className="pointer-events-none absolute top-[47%] z-10 w-[13rem] sm:top-[50%] sm:w-[15.2rem] xl:-mt-10 xl:w-[22rem]"
                />

                <div className="absolute inset-x-0 bottom-4 flex w-full items-end justify-between sm:bottom-4 xl:bottom-1">
                  <div className="hidden pl-6 xl:block">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.75 }}
                      className="flex flex-col items-center text-[#1F4334]"
                    >
                      <img
                        src="/hero-arrow.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-[13.2rem] w-auto"
                      />
                    </motion.div>
                  </div>

                  <Reveal delay={0.25} className="mx-auto">
                    <p className="text-balance text-[1.08rem] font-medium tracking-[0.01em] text-[#224535] sm:text-[1.22rem]">
                      {heroData.eyebrow}
                    </p>
                  </Reveal>

                  <div className="hidden w-[4.5rem] xl:block" />
                </div>
              </div>
            </section>

            <div className="-mx-5 overflow-hidden sm:-mx-6 xl:-mx-8">
              <div className="hero-marquee px-5 sm:px-6 xl:px-8">
                <div className="hero-marquee-track">
                  {marqueeCards.map((card, index) => (
                    <motion.figure
                      key={`${card.alt}-${index}`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.35 }}
                      className="relative h-[17rem] w-[13rem] shrink-0 overflow-visible sm:h-[19rem] sm:w-[14.6rem] xl:h-[21.5rem] xl:w-[18rem]"
                    >
                      <div className="pointer-events-none absolute inset-0 z-20 scale-[1.03]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.525 319.08"
                          className="h-full w-full"
                        >
                          <path
                            d="M68.993,23.392c32.939-33.578,109.121-31.15,135.1,8.255,1.512,2.293,4.616,9.782,6.085,10.835,3.96,2.838,14.25-.873,18.444,2.484,2.443,1.955,2.5,8.072,3.424,11.1,3.2,10.465,11.1,14.17,22.255,16.972,3.391.851,5.916.24,8.82,2.631a7.606,7.606,0,0,1,2.847,5.382L265.6,316.272c-1,1.692-2.952,2.267-5.058,2.2l-255.357,0c-6.923-.741-4.574-6.514-4.648-10.663C-.819,231.895.907,155.8.269,79.845c1.769-6.9,10.305-6.187,16.634-8.218,9.227-2.962,14.507-7.786,17.059-16.138.8-2.615,1.186-7.762,2.682-9.673,4.377-5.594,16.715,1.4,20.885-5.319,4.182-6.735,5.3-10.823,11.465-17.1"
                            transform="translate(0.252 0.304)"
                            fill="none"
                            stroke="#927634"
                            strokeWidth="0.6"
                          />
                        </svg>
                      </div>
                      <div className="scalloped-frame h-full w-full overflow-hidden rounded-[1.4rem] bg-[#F5F1E8] shadow-[0_12px_40px_rgba(112,94,56,0.08)]">
                        <img
                          src={card.image}
                          alt={card.alt}
                          loading="eager"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </motion.figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
