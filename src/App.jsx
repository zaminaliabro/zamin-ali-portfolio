import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] grid place-items-center bg-[var(--color-bg)]"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl font-bold text-white"
            >
              Zamin<span className="text-gradient">.dev</span>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: loading ? 0.7 : 0 }}
        className="relative"
      >
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Education />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
