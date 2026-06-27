import { motion } from "framer-motion";
import { GraduationCap, Calendar, Languages, Globe } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Education & <span className="text-primary">Languages</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold">Academic Journey</h3>
            </motion.div>

            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[1.15rem] top-4 bottom-4 w-px bg-border"></div>
              {/* Timeline Line (Mobile) */}
              <div className="md:hidden absolute left-0 top-4 bottom-4 w-px bg-border"></div>

              {/* Timeline Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative md:pl-12 mb-10 group"
              >
                <div className="absolute left-[-2.35rem] md:left-2 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors z-10"></div>
                
                <div className="bg-card border border-border p-6 rounded-2xl group-hover:border-primary/50 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-foreground">Senior High School Graduate</h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold w-fit">
                      Graduated with Honors
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium text-primary mb-2">Information and Communication Technology (ICT)</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted-foreground mt-4">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={16} /> RNC Technical Learning Center Inc.
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative md:pl-12 group"
              >
                <div className="absolute left-[-2.35rem] md:left-2 top-1 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground group-hover:border-blue-500 transition-colors z-10"></div>
                
                <div className="bg-card/50 border border-border p-6 rounded-2xl group-hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-foreground">Incoming College Student</h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold w-fit">
                      <Calendar size={12} /> August 2026
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mt-2">Continuing education and advancing technical knowledge</p>
                  
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-4">
                    <GraduationCap size={16} /> RNC Technical Learning Center Inc.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                <Languages size={20} />
              </div>
              <h3 className="text-2xl font-bold">Languages</h3>
            </motion.div>

            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border p-5 rounded-2xl flex items-center gap-4 hover:border-teal-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                  <span className="font-bold text-lg">PH</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Filipino</h4>
                  <p className="text-sm text-muted-foreground">Native / Mother Tongue</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border p-5 rounded-2xl flex items-center gap-4 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">English</h4>
                  <p className="text-sm text-muted-foreground">Conversational</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
