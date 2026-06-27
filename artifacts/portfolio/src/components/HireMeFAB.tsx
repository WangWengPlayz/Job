import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function HireMeFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="hire-fab"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 340, damping: 26 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-full shadow-lg shadow-primary/30 cursor-pointer"
          aria-label="Hire Me"
          data-testid="button-hire-fab"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
          <Briefcase size={18} className="shrink-0 relative z-10" />
          <span className="relative z-10 text-sm">Hire Me</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
