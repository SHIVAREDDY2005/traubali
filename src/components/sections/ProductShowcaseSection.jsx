import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { productSections } from "../../constants/siteData";

// Renders the alternating product spotlight blocks for the oil and soap ranges.
function ProductShowcaseSection() {
  return (
    <section id="products" className="px-5 py-18 sm:px-6 sm:py-24 xl:px-8 xl:py-28">
      <div className="mx-auto max-w-[1480px] space-y-24 xl:space-y-28">
        {productSections.map((product, index) => (
          <div
            key={product.id}
            id={product.id}
            className={`grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-center xl:gap-16 ${
              product.reverse ? "xl:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal delay={index * 0.04}>
              <div className={`space-y-6 ${product.reverse ? "xl:text-right" : ""}`}>
                <header className="space-y-5 leading-none">
                  <div className={product.reverse ? "xl:ml-auto" : ""}>
                    <span className="accent-script block text-[#A77D39]">
                      {product.kicker}
                    </span>
                    <h2 className="font-display text-[2.55rem] uppercase leading-[0.92] tracking-[-0.06em] text-[#173B2C] sm:text-[3.7rem] xl:text-[4.8rem]">
                      {product.title}
                    </h2>
                  </div>

                  <div className={`flex flex-wrap gap-3 ${product.reverse ? "xl:justify-end" : ""}`}>
                    {product.pills.map((pill) => (
                      <span key={pill} className="pill-tag">
                        {pill}
                      </span>
                    ))}
                  </div>

                  <img
                    src={product.icon}
                    alt=""
                    loading="lazy"
                    className={`h-16 w-16 object-contain ${product.reverse ? "xl:ml-auto" : ""}`}
                  />
                </header>

                <div className="space-y-5 text-[1rem] leading-8 text-[#28493A] sm:text-[1.08rem]">
                  {product.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className={`flex flex-wrap gap-4 ${product.reverse ? "xl:justify-end" : ""}`}>
                  <a href={product.ctaPrimary.href} className="luxury-solid-button">
                    {product.ctaPrimary.label}
                  </a>
                  <a
                    href={product.ctaSecondary.href}
                    target={product.ctaSecondary.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.ctaSecondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="luxury-link inline-flex items-center"
                  >
                    {product.ctaSecondary.label}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08 + index * 0.04}>
              <div className={`grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] ${product.reverse ? "xl:[&>*:first-child]:order-2" : ""}`}>
                <div className="flex gap-3 overflow-x-auto sm:flex-col">
                  {product.thumbs.map((thumb) => (
                    <motion.figure
                      key={thumb.alt}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="overflow-hidden rounded-[1rem] border border-[#B8924F]/28 bg-white shadow-[0_12px_35px_rgba(61,57,40,0.07)]"
                    >
                      <img
                        src={thumb.image}
                        alt={thumb.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-20 object-cover sm:h-[5.2rem] sm:w-full"
                      />
                    </motion.figure>
                  ))}
                </div>

                <motion.figure
                  whileHover={{ scale: 1.01 }}
                  className="overflow-hidden rounded-[1.6rem] border border-[#B8924F]/32 bg-[#F7F4EC] shadow-[0_20px_70px_rgba(50,58,40,0.1)]"
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </motion.figure>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcaseSection;
