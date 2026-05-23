import { motion } from "framer-motion";

// Reuses the same fade-and-rise animation for sections as they enter the viewport.
function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
  y = 48,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
