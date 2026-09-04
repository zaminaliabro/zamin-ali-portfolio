import { FiCode, FiCoffee, FiTarget } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Counter from "./ui/Counter";
import { stats } from "../data/portfolio";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    text: "I write maintainable, well-structured code that scales with the product.",
  },
  {
    icon: FiTarget,
    title: "Detail Oriented",
    text: "Pixel-perfect UI and thoughtful UX are non-negotiable in every build.",
  },
  {
    icon: FiCoffee,
    title: "Always Learning",
    text: "Constantly exploring new tools, patterns and best practices in the JS ecosystem.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into real, working products"
          subtitle="A quick look at who I am, what drives me, and where my journey as a developer is headed."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-cyan-400/10 blur-2xl -z-10" />
              <div className="glass rounded-3xl p-8">
                <p className="text-slate-300 leading-relaxed">
                  I'm <span className="text-white font-semibold">Zamin Ali</span>, a MERN Stack
                  Developer passionate about building full-stack web applications that are fast,
                  reliable and genuinely enjoyable to use. My journey started with curiosity about
                  how websites work, and grew into a focused path through Saylani's MERN program
                  and countless self-built projects.
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Today, I work across the entire stack — from crafting responsive React
                  interfaces to designing REST APIs and modeling data in MongoDB and PostgreSQL —
                  always aiming for clean architecture and a great user experience.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Problem Solver", "Team Player", "Fast Learner", "Detail Focused"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 text-cyan-300 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.15 + i * 0.1}>
                <div className="group glass rounded-2xl p-6 h-full hover:border-cyan-400/30 border border-transparent transition-colors">
                  <h.icon className="text-2xl text-cyan-300 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  <h3 className="font-display font-semibold text-white mb-1.5">{h.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
              >
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-xs sm:text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
