import { ArrowUp } from "lucide-react";
import { Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, "#hero")}
              className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2 mb-4 w-fit"
            >
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
                M
              </span>
              Mart.
            </a>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              An aspiring ICT professional dedicated to building practical digital solutions, offering reliable technical support, and continuously learning new technologies.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/MartJohnFloresLabaco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[['About', 'about'], ['Skills', 'skills'], ['Services', 'services'], ['Experience', 'projects']].map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, `#${id}`)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-3">
              <p className="truncate" title="mart.john.flores.labaco.official@gmail.com">
                mart.john.flores.labaco.official@gmail.com
              </p>
              <p>+63 930 296 3465</p>
              <p>Calauag, Quezon, Philippines</p>
            </address>
          </div>

        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mart John F. Labaco. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <span className="text-rose-500">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
