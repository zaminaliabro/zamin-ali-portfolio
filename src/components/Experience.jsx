import { FiBriefcase } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Professional experience building and shipping real client work."
        />

        <div className="mt-16 relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <Reveal key={exp.role + exp.org} delay={i * 0.15}>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400">
                    <FiBriefcase className="text-slate-950" size={18} />
                  </div>
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-cyan-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 font-medium mb-3">{exp.org}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm text-slate-400 leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
