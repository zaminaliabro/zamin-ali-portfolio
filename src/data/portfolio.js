import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss,
  SiRedux, SiTypescript, SiVite,
} from "react-icons/si";

export const profile = {
  name: "Zamin Ali",
  role: "MERN Stack Developer",
  tagline:
    "I design and build fast, scalable web applications with React, Node.js and modern JavaScript — turning ideas into clean, production-ready products.",
  email: "info@ingramsparkservices.com",
  location: "Pakistan",
  github: "https://github.com/zaminaliabro",
  linkedin: "https://linkedin.com/",
  resumeUrl: "/Zamin-Ali-CV.pdf",
};

export const stats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Months of Learning & Building", value: 10, suffix: "+" },
  { label: "Technologies Learned", value: 8, suffix: "+" },
  { label: "Lines of Code", value: 50, suffix: "K+" },
];

export const skills = [
  { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", level: 88, icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", level: 85, icon: FaNodeJs, color: "#3C873A" },
  { name: "Express", level: 84, icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", level: 82, icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git / GitHub", level: 85, icon: FaGitAlt, color: "#F05032" },
];

export const floatingIcons = [
  FaReact, SiJavascript, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss, FaGitAlt, SiRedux,
];

export const projects = [
  {
    title: "Jobify — PERN Job Portal",
    description:
      "A full-stack job portal where candidates browse and apply to listings while recruiters post jobs and move applicants through a hiring pipeline, with JWT-based auth throughout.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    live: "https://jobify-mern-job-portal.vercel.app",
    github: "https://github.com/zaminaliabro/jobify-mern-job-portal",
    accent: "from-indigo-500 to-cyan-400",
  },
  {
    title: "Brew Haven — Cafe Website & Admin Dashboard",
    description:
      "A cafe ordering website with a full admin dashboard for managing the menu, orders and content, backed by a PostgreSQL + Express API.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "React Router"],
    live: "https://coffee-frontend-t8fj.vercel.app",
    github: "https://github.com/zaminaliabro/-Coffee-frontend",
    accent: "from-amber-500 to-orange-400",
  },
  {
    title: "Evently — Event Booking Platform",
    description:
      "A responsive event booking platform where users browse upcoming events, view full details, and reserve tickets online.",
    tech: ["React", "Tailwind CSS", "React Router"],
    live: "https://event-management-1lwi.vercel.app",
    github: "https://github.com/zaminaliabro/Event-Management",
    accent: "from-sky-500 to-blue-400",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive, and accessible user interfaces with React, Tailwind CSS, and modern animation libraries.",
    icon: "code",
  },
  {
    title: "MERN Development",
    description:
      "End-to-end web applications using MongoDB, Express, React and Node.js — from database design to deployment.",
    icon: "layers",
  },
  {
    title: "REST API Development",
    description:
      "Designing secure, scalable REST APIs with proper authentication, validation, and clean documentation.",
    icon: "server",
  },
  {
    title: "Responsive Web Design",
    description:
      "Crafting pixel-perfect layouts that work beautifully across mobile, tablet, and desktop devices.",
    icon: "device",
  },
];

export const education = [
  {
    title: "MERN Stack Development",
    org: "Saylani Mass IT Training (SMIT)",
    period: "2024 — 2025",
    description:
      "Intensive hands-on program covering React, Node.js, Express, MongoDB, REST APIs, and full-stack project development.",
  },
  {
    title: "Continuous Self-Learning",
    org: "Docs, Courses & Real Projects",
    period: "Ongoing",
    description:
      "Constantly exploring new tools like PostgreSQL, TypeScript and system design to grow beyond the MERN stack fundamentals.",
  },
];

export const techIconMap = { SiTypescript, SiVite, FaHtml5, FaCss3Alt, FaGithub };
