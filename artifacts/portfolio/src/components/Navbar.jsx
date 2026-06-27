import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  return <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"}`}
  >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
    href="#hero"
    onClick={(e) => scrollToSection(e, "#hero")}
    className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2"
    data-testid="link-logo"
  >
          <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
            M
          </span>
          Mart.
        </a>

        {
    /* Desktop Nav */
  }
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => <li key={link.name}>
                <a
    href={link.href}
    onClick={(e) => scrollToSection(e, link.href)}
    className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"}`}
    data-testid={`link-nav-${link.name.toLowerCase()}`}
  >
                  {link.name}
                </a>
              </li>)}
          </ul>
          
          <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
    data-testid="button-theme-toggle"
    aria-label="Toggle theme"
  >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {
    /* Mobile Toggle */
  }
        <div className="flex items-center gap-4 lg:hidden">
          <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
    data-testid="button-theme-toggle-mobile"
  >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="p-2 text-foreground"
    data-testid="button-mobile-menu"
  >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {
    /* Mobile Menu */
  }
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className="lg:hidden bg-background border-b border-border overflow-hidden"
  >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => <li key={link.name}>
                  <a
    href={link.href}
    onClick={(e) => scrollToSection(e, link.href)}
    className={`block text-base font-medium py-2 transition-colors ${activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"}`}
  >
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </motion.div>}
      </AnimatePresence>
    </header>;
}
