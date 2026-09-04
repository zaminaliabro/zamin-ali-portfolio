import { FiBookOpen } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Education"
          title="My learning journey"
          subtitle="The path that shaped my skills as a MERN Stack Developer."
        />

        <div className="mt-16 relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <Reveal key={edu.title} delay={i * 0.15}>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400">
                    <FiBookOpen className="text-slate-950" size={18} />
                  </div>
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold text-white">{edu.title}</h3>
                      <span className="font-mono text-xs text-cyan-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 font-medium mb-2">{edu.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{edu.description}</p>
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
