import { skills } from "../data/portfolio";

const items = [...skills, ...skills];

export default function TechMarquee() {
  return (
    <div className="relative py-7 border-y border-white/5 overflow-hidden bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

      <div className="flex w-max gap-14 animate-marquee">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-2.5 shrink-0 text-slate-500">
            <s.icon size={20} style={{ color: s.color }} className="opacity-80" />
            <span className="font-mono text-sm">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
