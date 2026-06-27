import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";
function AnimatedCounter({ end, label, icon: Icon, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2e3;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);
  return <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card border border-border rounded-2xl p-6 text-center hover-elevate transition-all"
  >
      <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Icon size={24} />
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">{count === end && end === 1 ? count : count}</div>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>;
}
export default function About() {
  return <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-4"
  >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    className="w-20 h-1 bg-primary mx-auto rounded-full"
  />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="lg:col-span-7 space-y-6"
  >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm Mart John F. Labaco, but you can simply call me Mart. I recently graduated from RNC Technical Learning Center Inc. as an ICT student and will begin my college studies there in August 2026.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am passionate about technology and enjoy learning new skills, solving technical problems, and helping others through digital solutions. As an ICT NC II passer and an honor graduate, I am eager to begin my professional career and continuously improve my knowledge and experience in the IT industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium text-foreground">
              I am currently seeking a work-from-home opportunity where I can contribute my skills, grow professionally, and deliver reliable, high-quality results. Whether working as a Virtual Assistant, IT Support, Technical Assistant, or another technology-related role, I am committed to being a dependable and hardworking member of your team.
            </p>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg shadow-primary/20"
  >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase size={20} /> Career Objective
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-sm md:text-base">
                To secure a remote position where I can apply my ICT knowledge, technical skills, and strong work ethic while gaining valuable professional experience. I aim to contribute to the success of the organization by providing reliable, efficient, and high-quality work while continuously developing my expertise in technology and customer support.
              </p>
            </motion.div>
            
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-card border border-border rounded-2xl p-8 shadow-sm"
  >
              <h3 className="text-xl font-bold mb-4 text-foreground">What Makes Me Different</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am a fast learner who enjoys taking on new challenges and adapting to different work environments. I approach every task with dedication, responsibility, and attention to detail. I believe in continuous improvement, effective communication, and maintaining a positive attitude, allowing me to deliver quality results consistently. I am committed to growing with the company and becoming a dependable team member who can be trusted with important responsibilities.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <AnimatedCounter end={1} label="Certification" icon={Award} delay={0.1} />
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-card border border-border rounded-2xl p-6 text-center hover-elevate transition-all"
  >
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
              <GraduationCap size={24} />
            </div>
            <div className="text-xl md:text-2xl font-bold text-foreground mb-2 mt-3">Honor Graduate</div>
            <p className="text-sm text-muted-foreground font-medium">RNC Technical Learning Center</p>
          </motion.div>
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="bg-card border border-border rounded-2xl p-6 text-center hover-elevate transition-all"
  >
            <div className="w-12 h-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
              <Briefcase size={24} />
            </div>
            <div className="text-xl md:text-2xl font-bold text-foreground mb-2 mt-3">Ready to Work</div>
            <p className="text-sm text-muted-foreground font-medium">Seeking Remote Opportunities</p>
          </motion.div>
        </div>
      </div>
    </section>;
}
