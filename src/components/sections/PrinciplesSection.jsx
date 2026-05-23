import { Play } from "lucide-react";
import Reveal from "../animations/Reveal";
import { principlesData } from "../../constants/siteData";

// Summarizes the brand principles and pairs them with a cinematic preview tile.
function PrinciplesSection() {
  return (
    <section id={principlesData.id} className="relative px-5 py-18 sm:px-6 sm:py-24 xl:px-8 xl:py-28">
      <div className="mx-auto grid max-w-[1480px] gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
        <Reveal>
          <div>
            <h2 className="mx-auto max-w-[16ch] text-center font-display text-[2.4rem] uppercase leading-[0.94] tracking-[-0.06em] text-[#173B2C] sm:text-[3.4rem] xl:mx-0 xl:text-left xl:text-[4.4rem]">
              {principlesData.title}
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {principlesData.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.4rem] border border-[#B8924F]/20 bg-[rgba(255,255,255,0.58)] p-6 shadow-[0_14px_40px_rgba(49,57,36,0.05)] backdrop-blur-sm"
                >
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 object-contain"
                  />
                  <h3 className="mt-5 text-[0.95rem] font-semibold tracking-[0.08em] text-[#173B2C]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[#355242]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="xl:pl-8">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#B8924F]/28 bg-white shadow-[0_20px_70px_rgba(50,58,40,0.12)]">
            <img
              src={principlesData.videoThumb}
              alt="Taru Bali ritual film preview"
              loading="lazy"
              decoding="async"
              className="h-[34rem] w-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-full bg-[rgba(90,67,43,0.68)] px-5 py-2.5 text-sm text-white backdrop-blur-md">
              <span>Play Video</span>
              <Play className="h-4 w-4 fill-current" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PrinciplesSection;
