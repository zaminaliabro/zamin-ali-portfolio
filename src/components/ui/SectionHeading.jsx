import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-cyan-400/90 mb-3">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-slate-400 text-base sm:text-lg ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
