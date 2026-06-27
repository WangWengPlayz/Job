import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PrivacyModal from "@/components/PrivacyModal";
import HireMeFAB from "@/components/HireMeFAB";
export default function Home() {
  return <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <PrivacyModal />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <HireMeFAB />
    </div>;
}
