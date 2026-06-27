import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Briefcase, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function PrivacyModal() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const agreed = localStorage.getItem("portfolio-privacy-agreed");
    if (!agreed) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAgree = () => {
    localStorage.setItem("portfolio-privacy-agreed", "true");
    setVisible(false);
  };
  return <AnimatePresence>
      {visible && <motion.div
    key="privacy-backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.6)" }}
  >
          <motion.div
    key="privacy-modal"
    initial={{ opacity: 0, scale: 0.88, y: 24 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.92, y: 16 }}
    transition={{ type: "spring", stiffness: 320, damping: 28, delay: 0.05 }}
    className="relative bg-card border border-border rounded-3xl shadow-2xl max-w-lg w-full p-8 text-center overflow-hidden"
    data-testid="modal-privacy"
  >
            {
    /* Top accent bar */
  }
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-t-3xl" />

            {
    /* Icon */
  }
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <ShieldCheck size={36} />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome to My Portfolio
            </h2>
            <p className="text-sm text-primary font-semibold mb-6">
              Please read before continuing
            </p>

            <div className="bg-muted/60 rounded-2xl p-5 text-left mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Briefcase size={16} />
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  This website was created <strong>solely for professional and job-seeking purposes</strong>. It is intended for potential employers and recruiters who wish to learn about my qualifications and experience.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                  <UserCheck size={16} />
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  If you are <strong>not here to hire</strong> or explore my professional background, I kindly ask that you <strong>respect my privacy</strong> and the effort put into building this portfolio.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
              By clicking <strong>"I Agree & Continue"</strong>, you acknowledge that you have read this notice and agree to use this website for its intended purpose only. This notice will not appear again on your device.
            </p>

            <Button
    size="lg"
    className="w-full gap-2 text-base font-semibold"
    onClick={handleAgree}
    data-testid="button-privacy-agree"
  >
              <ShieldCheck size={20} />
              I Agree &amp; Continue
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              &copy; 2026 Mart John F. Labaco. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>}
    </AnimatePresence>;
}
