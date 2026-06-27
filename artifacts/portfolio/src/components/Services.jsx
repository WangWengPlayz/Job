import { motion } from "framer-motion";
import { Laptop, Wrench, Settings, Store, MessageSquare, Cpu, HardDrive, FileText } from "lucide-react";
const services = [
  {
    title: "Virtual Assistant",
    description: "Administrative support, scheduling, email management, and daily operational tasks to keep things running smoothly.",
    icon: Laptop,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/50"
  },
  {
    title: "Technical Support",
    description: "Hardware and software troubleshooting assistance to diagnose and resolve issues efficiently.",
    icon: Settings,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/50"
  },
  {
    title: "IT Assistant",
    description: "General IT support, system maintenance, and day-to-day technical assistance for individuals or teams.",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/50"
  },
  {
    title: "Computer Assembly & Repair",
    description: "Building, upgrading, and repairing desktop computers \u2014 from selecting parts to full hardware installation.",
    icon: HardDrive,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    borderColor: "hover:border-orange-500/50"
  },
  {
    title: "Computer Troubleshooting",
    description: "Diagnosing and resolving hardware issues, OS problems, performance slowdowns, and software conflicts.",
    icon: Wrench,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    borderColor: "hover:border-rose-500/50"
  },
  {
    title: "Document & Presentation Assistance",
    description: "Creating and formatting documents, spreadsheets, and presentations using Microsoft Office and Google Workspace.",
    icon: FileText,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    borderColor: "hover:border-sky-500/50"
  },
  {
    title: "Technology Shop Assistant",
    description: "Customer service, product guidance, and tech recommendations in a retail or shop environment.",
    icon: Store,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    borderColor: "hover:border-amber-500/50"
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
export default function Services() {
  return <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-4"
  >
            My <span className="text-primary">Services</span>
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
            How I can help you or your business get things done.
          </motion.p>
        </div>

        <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  >
          {services.map((service) => {
    const Icon = service.icon;
    return <motion.div
      key={service.title}
      variants={itemVariants}
      className={`bg-card border border-border rounded-2xl p-6 transition-all duration-300 ${service.borderColor} hover:-translate-y-1 hover:shadow-lg`}
      data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
                <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>;
  })}

          <motion.div
    variants={itemVariants}
    className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors cursor-pointer group"
    onClick={() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
    data-testid="service-card-contact-cta"
  >
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Need something else?</h3>
            <p className="text-primary text-sm font-medium">Let's discuss your requirements &rarr;</p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
