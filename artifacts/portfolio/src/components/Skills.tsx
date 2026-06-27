import { motion } from "framer-motion";
import { Code, Terminal, Monitor, PenTool, Database, Laptop, Wrench, Settings, Search, MessageSquare, Clock, Users, BrainCircuit, CheckCircle, HeadphonesIcon, MousePointer2 } from "lucide-react";

const technicalSkills = [
  { name: "Python", icon: Terminal, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "HTML", icon: Code, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "CSS", icon: PenTool, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "JavaScript", icon: Database, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "Computer Troubleshooting", icon: Wrench, color: "text-slate-500", bg: "bg-slate-500/10" },
  { name: "Technical Support", icon: Settings, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { name: "IT Assistance", icon: Monitor, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Virtual Assistance", icon: Laptop, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Microsoft Office", icon: MousePointer2, color: "text-rose-500", bg: "bg-rose-500/10" },
  { name: "Google Workspace", icon: Search, color: "text-green-500", bg: "bg-green-500/10" },
];

const softSkills = [
  { name: "Fast Learner", icon: BrainCircuit },
  { name: "Problem Solving", icon: Wrench },
  { name: "Time Management", icon: Clock },
  { name: "Communication", icon: MessageSquare },
  { name: "Adaptability", icon: Settings },
  { name: "Teamwork", icon: Users },
  { name: "Attention to Detail", icon: Search },
  { name: "Responsibility", icon: CheckCircle },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Code size={20} />
                </div>
                Technical Skills
              </h3>
              <p className="text-muted-foreground text-sm ml-13">Tools and technologies I work with</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-full ${skill.bg} ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <span className="font-medium text-sm text-center text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Users size={20} />
                </div>
                Soft Skills
              </h3>
              <p className="text-muted-foreground text-sm ml-13">Interpersonal and professional attributes</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {softSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                      <Icon size={18} />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
