import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "../data/portfolio";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const contactLinks = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "/in/zamin-ali", href: profile.linkedin },
  { icon: FiGithub, label: "GitHub", value: "@zaminaliabro", href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New portfolio message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Send failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Web3Forms send failed:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[var(--color-surface)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-lg font-semibold text-white mb-6">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl p-3 hover:bg-white/5 transition-colors group"
                  >
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 shrink-0">
                      <c.icon className="text-slate-950" size={18} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">{c.label}</span>
                      <span className="block text-sm text-slate-200 group-hover:text-white transition-colors">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Your Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Your Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 font-semibold text-slate-950 disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <FiCheckCircle /> Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <FiAlertCircle /> Failed, try again
                  </>
                ) : (
                  <>
                    <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
