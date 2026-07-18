"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
} from "react-icons/si";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const viewport = { once: true, amount: 0.25 } as const;

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Firebase", icon: SiFirebase, color: "#ffcb2b" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Skills"
            description="Aspiring Software Engineer currently pursuing my BSc in Software Engineering at Sabaragamuwa University of Sri Lanka. I work on building modern web applications and AI-driven systems."
            className="mb-16"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0a1530] border border-[#00df82]/10 rounded-xl flex flex-col items-center justify-center gap-4 py-8 px-4 hover:border-[#00df82]/40 transition-colors duration-300"
              >
                <Icon size={44} color={skill.color} />
                <span className="text-white text-md font-semibold tracking-wide text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionContainer>
    </section>
  );
}
