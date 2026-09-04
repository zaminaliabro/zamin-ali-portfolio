import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "./ui/Reveal";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const glow = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgba(99,102,241,0.18), transparent 70%)`;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
    rotateY.set(((px / rect.width) - 0.5) * 10);
    rotateX.set(((py / rect.height) - 0.5) * -10);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="group relative rounded-2xl glass overflow-hidden h-full"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: glow }}
        />

        <div className={`h-44 sm:h-52 w-full bg-gradient-to-br ${project.accent} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl sm:text-3xl font-bold text-white/90 drop-shadow-lg px-6 text-center">
              {project.title}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative z-20 p-6">
          <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <FiGithub /> Code
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
