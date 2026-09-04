import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[var(--color-surface)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="The core tools and languages I use daily to design, build and ship full-stack applications."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.06}>
              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid place-items-center h-9 w-9 rounded-lg bg-white/5 border border-white/10"
                      style={{ color: skill.color }}
                    >
                      <skill.icon size={18} />
                    </span>
                    <span className="font-medium text-slate-200">{skill.name}</span>
                  </div>
                  <span className="font-mono text-sm text-cyan-300">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
