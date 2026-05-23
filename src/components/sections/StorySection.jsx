import Reveal from "../animations/Reveal";
import { partnershipData } from "../../constants/siteData";

// Presents the partnership story and reseller call to action.
function StorySection() {
  return (
    <section id={partnershipData.id} className="px-5 py-18 sm:px-6 sm:py-24 xl:px-8 xl:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="rounded-[2rem] border border-[#947534]/28 bg-[rgba(248,244,236,0.82)] p-6 shadow-[0_18px_70px_rgba(55,49,34,0.08)] backdrop-blur-sm sm:p-8 xl:p-10">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-center xl:gap-14">
            <Reveal>
              <figure className="overflow-hidden rounded-[1.5rem] border border-[#B8924F]/22 bg-white">
                <img
                  src={partnershipData.image}
                  alt="Taru Bali partnership portrait"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-6 text-center xl:text-left">
                <p className="accent-script text-[#A77D39]">
                  {partnershipData.overline}
                </p>
                <h2 className="font-display text-[2.55rem] uppercase leading-[0.94] tracking-[-0.06em] text-[#173B2C] sm:text-[3.7rem] xl:text-[5rem]">
                  {partnershipData.title}
                </h2>
                <p className="mx-auto max-w-[40rem] text-[1rem] leading-8 text-[#2F4B3C] sm:text-[1.08rem] xl:mx-0">
                  {partnershipData.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 xl:justify-start">
                  <a href={partnershipData.primaryCta.href} className="luxury-solid-button">
                    {partnershipData.primaryCta.label}
                  </a>
                  <a href={partnershipData.secondaryCta.href} className="luxury-link inline-flex items-center">
                    {partnershipData.secondaryCta.label}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
