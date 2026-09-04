import { motion } from "framer-motion";
import { FiCode, FiLayers, FiServer, FiSmartphone } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { services } from "../data/portfolio";

const iconMap = {
  code: FiCode,
  layers: FiLayers,
  server: FiServer,
  device: FiSmartphone,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-[var(--color-surface)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          subtitle="From pixel-perfect interfaces to robust backend systems — here's how I can help bring your project to life."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl glass p-7 h-full overflow-hidden hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 mb-5"
                    >
                      <Icon className="text-slate-950" size={22} />
                    </motion.div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
