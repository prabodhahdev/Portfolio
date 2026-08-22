"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, GraduationCap } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  headerVariants,
  listItemVariants,
  listVariants,
  viewport,
} from "../../lib/motion";
import { scrollToSectionId } from "../../lib/scroll";

const aboutPoints = [
  "Fast learner, always up for a new challenge",
  "Passionate about web development",
  "Detail-oriented and driven to build things that work well",
  "Curious by nature, always exploring new tech",
  "Calm under pressure, even when deadlines are tight",
  "Team player with a problem-solving mindset",
  "Enthusiastic chess player",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="About Me"
            description="A little more about who I am, what I study, and what I love building."
            className="mb-16"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 rounded-2xl border border-[#00df82]/20 bg-[#00df82]/5" />
              <div className="relative rounded-2xl overflow-hidden border border-[#00df82]/25 bg-[#0a1530] aspect-[4/5]">
                <Image
                  src="/profile3.png"
                  alt="Prabodha Harshani"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
              Who I am
            </h3>

            <button
              type="button"
              onClick={() => scrollToSectionId("education")}
              className="inline-flex items-center gap-2 rounded-full border border-[#00df82]/35 bg-[#00df82]/10 px-4 py-2 text-sm text-[#00df82] hover:border-[#00df82] hover:bg-[#00df82]/15 transition-colors duration-300 cursor-pointer mb-6"
            >
              <GraduationCap size={15} className="shrink-0" />
              <span>
                Bsc (Hons) in Software Engineering · Sabaragamuwa University of Sri Lanka
              </span>
            </button>

            <motion.ul
              className="space-y-4"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {aboutPoints.map((point) => (
                <motion.li
                  key={point}
                  variants={listItemVariants}
                  className="flex items-start gap-4"
                >
                  <span className="shrink-0 w-7 h-7 rounded-full border border-[#00df82] flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-[#00df82]" strokeWidth={3} />
                  </span>
                  <span className="text-[var(--muted)] text-lg leading-relaxed">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
