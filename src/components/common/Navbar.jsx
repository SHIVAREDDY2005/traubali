import {
  useEffect,
  useEffectEvent,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navMenu } from "../../constants/siteData";

// Controls the floating top navigation and the fullscreen menu overlay.
function Navbar() {
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 36 : false,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Switches the navbar styling once the page moves past the hero threshold.
  const handleScroll = useEffectEvent(() => {
    setScrolled(window.scrollY > 36);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuClasses = scrolled
    ? "bg-[#173B2C] text-[#E7C06B] shadow-[0_16px_60px_rgba(6,30,21,0.18)]"
    : "bg-[#173B2C] text-[#E7C06B]";

  // Opens the fullscreen navigation drawer.
  const handleMenuOpen = () => setMenuOpen(true);

  // Closes the fullscreen navigation drawer.
  const handleMenuClose = () => setMenuOpen(false);

  // Smooth-scrolls to internal anchors or opens external links in a new tab.
  const handleNavClick = (href) => {
    handleMenuClose();

    if (!href.startsWith("#")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          className={`flex w-full items-center px-7 py-5 transition-all duration-300 sm:px-8 xl:px-7 ${menuClasses}`}
        >
          <section className="flex flex-1 items-center gap-3 sm:gap-5">
            <button
              type="button"
              className="hidden min-w-14 border border-current px-5 py-[0.97rem] text-[1rem] leading-none lg:inline-flex lg:items-center lg:justify-center"
            >
              EN
            </button>
            <button
              type="button"
              onClick={handleMenuOpen}
              className="group flex items-center gap-2 py-2 text-[1.05rem] tracking-[0.01em] sm:text-[1.1rem]"
              aria-label="Open menu"
            >
              <span>Menu</span>
              <span className="relative block h-3 w-14 overflow-hidden">
                <span className="absolute left-0 top-[2px] h-px w-full bg-current transition-all duration-300 group-hover:w-11/12" />
                <span className="absolute bottom-[2px] left-0 h-px w-6 bg-current transition-all duration-300 group-hover:w-10/12" />
              </span>
            </button>
          </section>

          <section className="flex justify-center">
            <a href="#top" className="block">
              <img
                src="/taru-mark.svg"
                alt="Taru Bali"
                className={`w-auto transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-18 sm:h-24"}`}
              />
            </a>
          </section>

          <section className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
            <a
              href="https://shop.tarubali.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-current px-8 py-[0.97rem] text-[1rem] leading-none lg:inline-flex lg:items-center lg:justify-center"
            >
              Shop
            </a>
            <button
              type="button"
              onClick={() => handleNavClick("#story")}
              className="border border-[#B8924F] bg-[#B8924F] px-8 py-[0.97rem] text-[1rem] leading-none text-[#173B2C]"
            >
              Partnership
            </button>
          </section>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(13,59,42,0.95)] text-[#F5F1E8] backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col px-5 pb-10 pt-6 sm:px-8 xl:px-10"
            >
              <div className="flex items-center justify-between">
                <img src="/taru-mark.svg" alt="Taru Bali" className="h-18 w-auto sm:h-20" />
                <button
                  type="button"
                  onClick={handleMenuClose}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B8924F]/40 text-[#F5F1E8] transition-transform duration-300 hover:scale-105"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid flex-1 gap-12 pt-16 xl:grid-cols-[1fr_1fr] xl:gap-24 xl:pt-24">
                <div className="space-y-10">
                  <div>
                    <p className="menu-group-title">Products</p>
                    <ul className="mt-5 space-y-3">
                      {navMenu.products.map((item, index) => (
                        <li key={item.label}>
                          <motion.button
                            type="button"
                            onClick={() => handleNavClick(item.href)}
                            className="menu-overlay-link"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 + index * 0.06 }}
                          >
                            {item.label}
                          </motion.button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="menu-group-title">Navigate</p>
                    <ul className="mt-5 space-y-3">
                      {navMenu.navigate.map((item, index) => (
                        <li key={item.label}>
                          <motion.button
                            type="button"
                            onClick={() => handleNavClick(item.href)}
                            className="menu-overlay-link"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18 + index * 0.06 }}
                          >
                            {item.label}
                          </motion.button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-12 xl:items-end">
                  <div className="max-w-[36rem] space-y-5 xl:text-right">
                    <p className="menu-group-title">Luxury Body Care</p>
                    <h2 className="font-display text-[2.8rem] uppercase leading-[0.92] tracking-[-0.06em] sm:text-[4rem] xl:text-[5.4rem]">
                      Discover our products
                    </h2>
                    <p className="max-w-[30rem] text-[0.98rem] leading-7 text-[#F5F1E8]/78 xl:ml-auto">
                      Botanical body oils and soaps from Bali, formulated with a
                      refined blend of plant-based ingredients and a calm,
                      premium visual rhythm.
                    </p>
                  </div>

                  <div className="grid gap-5 text-[0.98rem] sm:grid-cols-2 xl:w-full xl:max-w-[34rem]">
                    {navMenu.footer.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className="w-fit border-b border-[#F5F1E8]/55 pb-1 text-left transition-opacity duration-300 hover:opacity-65 xl:ml-auto xl:text-right"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
