import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      curX += (x - curX) * 0.12;
      curY += (y - curY) * 0.12;
      el.style.transform = `translate3d(${curX - 250}px, ${curY - 250}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[500px] w-[500px] rounded-full hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
