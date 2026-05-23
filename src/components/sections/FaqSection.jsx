import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Reveal from "../animations/Reveal";
import { faqData } from "../../constants/siteData";

// Renders the tabbed FAQ area and keeps only one answer open at a time.
function FaqSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentTab = faqData.tabs[activeTab];

  // Switches FAQ groups and resets the accordion to the first question.
  const handleTabChange = (index) => {
    setActiveTab(index);
    setOpenIndex(0);
  };

  // Opens the clicked answer or closes it if it is already expanded.
  const handleItemToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id={faqData.id} className="relative bg-[#F1EEE4] px-5 py-18 sm:px-6 sm:py-24 xl:px-8 xl:py-28">
      <div className="mx-auto max-w-[1480px]">
        <Reveal>
          <div className="space-y-10">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
              <h2 className="display-section max-w-[12ch] text-[#173B2C]">
                Frequently asked Questions
              </h2>

              <div className="w-full max-w-[22rem]">
                <div className="flex gap-6">
                  {faqData.tabs.map((tab, index) => (
                    <button
                      key={tab.label}
                      type="button"
                      onClick={() => handleTabChange(index)}
                      className={`pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-opacity duration-300 ${
                        activeTab === index
                          ? "text-[#173B2C]"
                          : "text-[#173B2C]/55 hover:text-[#173B2C]/85"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="mt-2 h-px bg-[#173B2C]/20">
                  <motion.div
                    className="h-full bg-[#173B2C]"
                    animate={{
                      width: "50%",
                      x: activeTab === 0 ? "0%" : "100%",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {currentTab.items.map((item, index) => {
                const open = openIndex === index;

                return (
                  <article
                    key={item.question}
                    className={`overflow-hidden rounded-[1.2rem] border transition-colors duration-300 ${
                      open
                        ? "border-[#173B2C] bg-[#173B2C] text-[#F5F1E8]"
                        : "border-[#173B2C]/16 bg-[rgba(255,255,255,0.78)] text-[#173B2C]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleItemToggle(index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="text-[0.98rem] font-semibold sm:text-[1.05rem]">
                        {item.question}
                      </span>
                      <ChevronRight
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          open ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-5 pb-5 pt-1 text-[0.96rem] leading-7 text-current/86 sm:px-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>

            <p className="text-[1rem] font-medium text-[#28493A]">
              Have a specific question?{" "}
              <a href="#footer" className="luxury-link inline-block text-[#173B2C]">
                Contact us
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FaqSection;
