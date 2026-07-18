"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import SectionContainer from "../layout/SectionContainer";
import { socials } from "../../data/socials";

const roles = [
  "Software Engineer",
  "Web Developer",
  "Frontend Developer",
  "Full Stack Developer",
];

const ROLE_INTERVAL_MS = 2000;

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut, delay: 0.25 },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
      delay: 0.55 + index * 0.08,
    },
  }),
};

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, ROLE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="py-16 md:py-24 min-h-[calc(100vh-5rem)]">
      <SectionContainer className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          className="order-2 md:order-1"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative h-6 md:h-7 mb-4 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="absolute inset-0 text-[var(--muted)] text-sm md:text-base tracking-wide uppercase"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Hello I&apos;m
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#00df82] leading-tight mb-6"
          >
            Prabodha Harshani
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[var(--muted)] text-lg leading-relaxed mb-10 max-w-xl"
          >
            Aspiring Software Engineer passionate about
            building modern web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-[#00df82] text-[#00df82] rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300"
            >
              <FaDownload size={14} />
              DOWNLOAD CV
            </motion.a>

            <div className="flex items-center gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    custom={index}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-[#00df82] flex items-center justify-center text-[#00df82] hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00df82]/70 ring-spin" />
            <div className="absolute inset-5 sm:inset-6 rounded-full overflow-hidden bg-[#0a1530]">
              <Image
                src="/profile1.png"
                alt="Prabodha Harshani"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
              />
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
