import { motion } from "framer-motion";
import { Briefcase, Clock } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            My hands-on experience and practical accomplishments so far.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center"
            data-testid="card-experience-placeholder"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Briefcase size={36} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Building My Experience</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am an ICT graduate who is eager to gain my first professional experience. I am hardworking, reliable, and fully committed to learning on the job and contributing to a team from day one.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                {
                  icon: Clock,
                  title: "Computer Assembly",
                  desc: "Hands-on experience building and upgrading desktop PCs during my ICT studies."
                },
                {
                  icon: Clock,
                  title: "Office Productivity Tools",
                  desc: "Proficient in Google Docs, Sheets, Slides, Microsoft Word, Excel, and PowerPoint."
                },
                {
                  icon: Clock,
                  title: "Hardware Troubleshooting",
                  desc: "Practiced diagnosing and resolving common hardware and software issues."
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-muted/50 rounded-xl p-5 border border-border">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <Icon size={18} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
