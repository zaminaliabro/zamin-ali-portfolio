import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { profile, floatingIcons } from "../data/portfolio";

const floatPositions = [
  { top: "12%", left: "8%", size: 36, delay: 0 },
  { top: "20%", left: "85%", size: 44, delay: 0.6 },
  { top: "68%", left: "6%", size: 32, delay: 1.1 },
  { top: "78%", left: "88%", size: 40, delay: 0.3 },
  { top: "42%", left: "94%", size: 28, delay: 1.6 },
  { top: "8%", left: "48%", size: 26, delay: 0.9 },
  { top: "88%", left: "45%", size: 30, delay: 1.3 },
  { top: "55%", left: "3%", size: 24, delay: 1.9 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-28 pb-20"
    >
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-indigo-600/30 blur-[120px] animate-blob" />
        <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-blob [animation-delay:4s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px] animate-blob [animation-delay:8s]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />
      </div>

      {/* Floating tech icons */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatPositions.map((p, i) => {
          const Icon = floatingIcons[i % floatingIcons.length];
          return (
            <motion.div
              key={i}
              className="absolute animate-float"
              style={{ top: p.top, left: p.left, animationDelay: `${p.delay}s` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ delay: 0.8 + p.delay, duration: 0.6 }}
            >
              <motion.div
                className="grid place-items-center rounded-2xl glass text-cyan-300"
                style={{ width: p.size + 20, height: p.size + 20 }}
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              >
                <Icon size={p.size * 0.55} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-slate-300 mb-8"
        >
          <HiOutlineSparkles className="text-cyan-400" />
          Available for freelance & full-time roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
        >
          Hi, I'm <span className="text-gradient bg-[length:200%_auto] animate-shimmer">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 font-mono text-lg sm:text-2xl text-cyan-300 h-10"
        >
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React & Node.js Engineer",
              2000,
              "REST API Builder",
              2000,
              "UI/UX Focused Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow"
          >
            View My Work
            <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <FiArrowDown />
            </motion.span>
          </motion.a>
          <motion.a
            href={profile.resumeUrl}
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 font-semibold text-white hover:border-cyan-400/40 transition-colors"
          >
            <FiDownload />
            Download CV
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-300 transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <FiArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
