import Reveal from "../animations/Reveal";
import { footerData } from "../../constants/siteData";

// Closes the experience with calls to action, navigation, and compliance details.
function Footer() {
  // Returns visitors to the top of the one-page layout with smooth scrolling.
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id={footerData.id} className="relative overflow-hidden bg-[#173B2C] text-[#F5F1E8]">
      <img
        src={footerData.borderProper}
        alt=""
        className="h-12 w-full object-cover"
        loading="lazy"
      />

      <div className="mx-auto max-w-[1560px] px-5 py-14 sm:px-6 sm:py-16 xl:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-10 sm:gap-12">
            <img src="/logo.webp" alt="Taru Bali" className="h-28 sm:h-32" />

            <div className="text-center">
              <h2 className="mx-auto max-w-[14ch] font-display text-[2.4rem] uppercase leading-[0.95] tracking-[-0.06em] text-[#F3EEE4] sm:text-[3.6rem] xl:text-[4.6rem]">
                {footerData.ctaTitle}
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href={footerData.ctaPrimary.href} className="luxury-solid-button">
                  {footerData.ctaPrimary.label}
                </a>
                <a
                  href={footerData.ctaSecondary.href}
                  className="luxury-link inline-flex items-center text-[#F5F1E8]"
                >
                  {footerData.ctaSecondary.label}
                </a>
              </div>
            </div>

            <div className="grid w-full gap-12 xl:grid-cols-[1.1fr_auto_0.9fr] xl:items-start">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="menu-group-title text-[#F5F1E8]/88">Index</h3>
                  <ul className="mt-5 space-y-3 text-[0.98rem] text-[#F5F1E8]/82">
                    {footerData.links.index.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="luxury-link !border-[#F5F1E8]/42 !text-[#F5F1E8]"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="menu-group-title text-[#F5F1E8]/88">Social</h3>
                  <ul className="mt-5 space-y-3 text-[0.98rem] text-[#F5F1E8]/82">
                    {footerData.links.social.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="luxury-link !border-[#F5F1E8]/42 !text-[#F5F1E8]"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center gap-5">
                {footerData.certifications.map((badge, index) => (
                  <figure
                    key={badge}
                    className="h-20 w-20 overflow-hidden rounded-full border border-[#B8924F]/22"
                  >
                    <img
                      src={badge}
                      alt={`Certification ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </figure>
                ))}
              </div>

              <div className="space-y-6 xl:text-right">
                <button
                  type="button"
                  onClick={handleBackToTop}
                  className="luxury-link inline-block !border-[#F5F1E8]/42 !text-[#F5F1E8]"
                >
                  Back to Top
                </button>

                <div className="flex items-center gap-6 xl:justify-end">
                  <figure className="w-40">
                    <img
                      src={footerData.halalBadge}
                      alt="Halal certification"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-contain"
                    />
                  </figure>
                </div>

                <p className="max-w-[24rem] text-[0.82rem] leading-6 text-[#F5F1E8]/72 xl:ml-auto">
                  All applications are based on traditional use and personal
                  experience. Taru Bali is not a medicine and makes no
                  therapeutic claims.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 border-t border-[#B8924F]/18 pt-8 text-center text-[0.8rem] text-[#F5F1E8]/62 xl:flex-row xl:items-center xl:justify-between">
              <p>&copy; Taru Bali 2026</p>
              <p>
                Made With Love By{" "}
                <a
                  href="https://twomoonsstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-link !border-[#F5F1E8]/42 !text-[#F5F1E8]"
                >
                  Two Moons Studio
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="rotate-180">
        <img
          src={footerData.borderProper}
          alt=""
          className="h-12 w-full object-cover"
          loading="lazy"
        />
      </div>
    </footer>
  );
}

export default Footer;
