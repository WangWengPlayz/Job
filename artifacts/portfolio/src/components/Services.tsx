import { motion } from "framer-motion";
import { Laptop, Wrench, Settings, Terminal, ShieldAlert, Code, Store, MessageSquare } from "lucide-react";

const services = [
  {
    title: "Virtual Assistant",
    description: "Administrative support, scheduling, email management and daily operational tasks.",
    icon: Laptop,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/50"
  },
  {
    title: "Technical Support",
    description: "Hardware and software troubleshooting assistance to ensure smooth operations.",
    icon: ShieldAlert,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/50"
  },
  {
    title: "IT Assistant",
    description: "General IT support, system maintenance tasks, and basic network assistance.",
    icon: Settings,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/50"
  },
  {
    title: "Python Development",
    description: "Scripts, automation, data processing, and basic Python applications.",
    icon: Terminal,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    borderColor: "hover:border-yellow-500/50"
  },
  {
    title: "Computer Troubleshooting",
    description: "Diagnosing and resolving hardware issues, OS problems, and software conflicts.",
    icon: Wrench,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    borderColor: "hover:border-rose-500/50"
  },
  {
    title: "Basic Web Development",
    description: "HTML/CSS/JS websites, simple landing pages, and web maintenance.",
    icon: Code,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    borderColor: "hover:border-indigo-500/50"
  },
  {
    title: "Technology Shop Assistant",
    description: "Customer service, product assistance, and tech recommendations.",
    icon: Store,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    borderColor: "hover:border-orange-500/50"
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
  return (
    <section id="services" className="py-24 bg-background">
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
            How I can help you or your business succeed in the digital space.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                variants={itemVariants}
                className={`bg-card border border-border rounded-2xl p-6 transition-all duration-300 ${service.borderColor} hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
          
          <motion.div 
            variants={itemVariants}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors cursor-pointer group"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Need something else?</h3>
            <p className="text-primary text-sm font-medium">Let's discuss your requirements &rarr;</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
