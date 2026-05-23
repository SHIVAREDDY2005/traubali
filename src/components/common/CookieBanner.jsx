import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Shows a dismissible cookie notice without interrupting the page layout.
function CookieBanner() {
  const [visible, setVisible] = useState(true);

  // Hides the banner for the current session after any user choice.
  const handleDismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-40 max-w-[24rem] rounded-[1.1rem] border border-[#0D3B2A]/20 bg-[rgba(245,241,232,0.96)] p-5 shadow-[0_18px_60px_rgba(39,49,32,0.12)] backdrop-blur-xl sm:bottom-6 sm:left-6"
        >
          <h3 className="font-display text-[2.05rem] leading-none text-[#1D4736]">
            COOKIES
          </h3>
          <p className="mt-4 max-w-[18rem] text-[0.96rem] leading-6 text-[#2C4A3B]/88">
            We use cookies to improve your experience, analyze site traffic,
            and personalize content.
          </p>

          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={handleDismiss}
              className="luxury-solid-button min-w-[7.8rem] !px-5 !py-3"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="luxury-outline-button min-w-[6rem] !px-5 !py-3 text-[#1D4736]"
            >
              Deny
            </button>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className="mt-4 border-b border-[#1D4736]/45 pb-0.5 text-[0.95rem] text-[#2C4A3B] transition-opacity duration-300 hover:opacity-70"
          >
            Customize Preferences
          </button>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}

export default CookieBanner;
