import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/FB_IMG_1774714053691_1782577306962.jpg";
import { getAvailability, getJobType, getStatusLabel } from "@/lib/availability";

const titles = [
  "ICT Graduate",
  "Computer Technician",
  "Virtual Assistant",
  "Aspiring IT Professional"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [avStatus, setAvStatus] = useState(getAvailability);
  const [avJobType, setAvJobType] = useState(getJobType);

  useEffect(() => {
    const onChanged = () => {
      setAvStatus(getAvailability());
      setAvJobType(getJobType());
    };
    window.addEventListener("availability-changed", onChanged);
    return () => window.removeEventListener("availability-changed", onChanged);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        currentTitle.substring(0, displayText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 dark:to-background z-[-1]"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 blur-[128px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/10 blur-[128px] rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-medium text-sm mb-6 transition-colors ${
              avStatus === "available"
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
            }`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${avStatus === "available" ? "bg-green-500" : "bg-rose-500"}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${avStatus === "available" ? "bg-green-500" : "bg-rose-500"}`}></span>
              </span>
              {getStatusLabel(avStatus, avJobType)}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-primary">Mart</span>
            </h1>

            <div className="h-10 md:h-14 mb-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                {displayText}
                <span className="animate-pulse ml-1 inline-block w-[3px] h-[1em] bg-primary align-middle"></span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Building practical digital solutions with dedication, continuous learning, and a passion for helping people through technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" onClick={() => scrollTo("contact")} className="w-full sm:w-auto gap-2" data-testid="button-hire-me">
                Hire Me <ArrowRight size={18} />
              </Button>
              <div className="relative w-full sm:w-auto group">
                <Button size="lg" variant="outline" disabled className="w-full sm:w-auto gap-2" data-testid="button-download-cv">
                  Download CV <Download size={18} />
                </Button>
                <span className="absolute -top-3 -right-2 bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full rotate-12 z-10">Coming Soon</span>
              </div>
              <Button size="lg" variant="ghost" onClick={() => scrollTo("contact")} className="w-full sm:w-auto gap-2 hover:bg-primary/10 hover:text-primary" data-testid="button-contact">
                Contact Me <Cpu size={18} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-full animate-[spin_8s_linear_infinite] blur-2xl"></div>
              <div className="absolute inset-2 md:inset-4 rounded-full border-4 border-background shadow-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Mart John F. Labaco"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-4 md:-left-8 bg-card p-3 md:p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu size={20} />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-muted-foreground font-medium">Specialist</p>
                  <p className="font-bold text-sm">IT Support</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-4 md:-right-8 bg-card p-3 md:p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <ArrowRight size={20} />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-muted-foreground font-medium">Available</p>
                  <p className="font-bold text-sm">Remote Work</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
