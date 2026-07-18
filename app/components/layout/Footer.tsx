"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { socials } from "../../data/socials";
import { viewport } from "../../lib/motion";
import { scrollToSectionId } from "../../lib/scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-[#00df82]/10 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5 }}
    >
      <SectionContainer className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <p className="text-[var(--muted)] text-sm">
          © {year}{" "}
          <span className="text-white font-medium">Prabodha Harshani</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full border border-[#00df82]/30 flex items-center justify-center text-[#00df82] hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300"
              >
                <Icon size={14} />
              </motion.a>
            );
          })}
        </div>

        <motion.button
          type="button"
          onClick={() => scrollToSectionId("home")}
          aria-label="Back to top"
          title="Back to top"
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full border border-[#00df82] flex items-center justify-center text-[#00df82] hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300 cursor-pointer"
        >
          <ArrowUp size={16} />
        </motion.button>
      </SectionContainer>
    </motion.footer>
  );
}
