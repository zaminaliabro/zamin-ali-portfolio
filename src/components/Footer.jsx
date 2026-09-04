import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";

const socials = [
  { icon: FiGithub, href: profile.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500">
          © 2026 <span className="text-slate-300 font-medium">{profile.name}</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="grid place-items-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
            >
              <s.icon size={16} />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#home"
          aria-label="Back to top"
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-slate-950"
        >
          <FiArrowUp size={16} />
        </motion.a>
      </div>
    </footer>
  );
}
