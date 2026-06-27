import { motion } from "framer-motion";
import { Lock, Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderProjects = [
  {
    title: "Web App",
    description: "A modern web application built with React and Tailwind CSS. Full features and source code will be revealed soon.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageClass: "bg-blue-500/10"
  },
  {
    title: "Python Script",
    description: "An automated data processing script that streamlines repetitive tasks and generates formatted reports.",
    technologies: ["Python", "Pandas", "Automation"],
    imageClass: "bg-emerald-500/10"
  },
  {
    title: "Automation Tool",
    description: "A desktop automation utility designed to improve workflow efficiency for common administrative tasks.",
    technologies: ["Python", "PyAutoGUI", "Selenium"],
    imageClass: "bg-amber-500/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
            Featured <span className="text-primary">Projects</span>
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
            Projects coming soon. I am continuously building new applications and expanding my portfolio.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {placeholderProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col h-full group"
            >
              {/* Image Placeholder */}
              <div className={`relative h-48 ${project.imageClass} flex flex-col items-center justify-center`}>
                <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Lock size={32} className="text-foreground mb-2" />
                  <span className="font-semibold text-foreground">Coming Soon</span>
                </div>
                <Code2 size={48} className="text-foreground/20" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/80 text-foreground shadow-sm">
                    {project.title}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" disabled>
                    <Github size={14} /> Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 gap-2" disabled>
                    <ExternalLink size={14} /> Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
