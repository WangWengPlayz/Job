import { motion } from "framer-motion";
import { Award, FileText, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-primary">Certifications</span> & Achievements
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Certification Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FileText size={28} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold mb-2">
                  <CheckCircle size={12} />
                  <span>TESDA Certified</span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Information and Communication Technology (ICT) NC II
                </h3>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                NC II Passer
              </p>
            </div>
          </motion.div>

          {/* Achievement Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-card rounded-2xl border border-border p-8 hover:border-amber-500/50 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Award size={28} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold mb-2">
                  <Award size={12} />
                  <span>Academic Excellence</span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Graduated With Honors
                </h3>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                RNC Technical Learning Center Inc.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
