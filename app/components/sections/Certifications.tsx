"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { cardVariants, gridVariants, headerVariants, viewport } from "../../lib/motion";

export type Certification = {
  title: string;
  logo: string;
  url?: string;
};

const certifications: Certification[] = [
  {
    title: "Foundation of Project Management",
    logo: "/certifications/google.svg",
    url: "https://www.coursera.org/account/accomplishments/verify/PEJAA0M6ROG8",
  },
  {
    title: "Learning Next.js",
    logo: "/certifications/linkedin.svg",
    url: "https://www.linkedin.com/learning/certificates/20cb25e34758a0b957c794f277cb31138e9532bec8380dd32dc8c985cdf06d06?trk=share_certificate",
  },
  {
    title: "JavaScript Essential Training",
    logo: "/certifications/linkedin.svg",
    url: "https://www.linkedin.com/learning/certificates/cd847be7446fafd7fe75ebac42e1172ee746563b257a3fd74095bb5853f8c335?trk=share_certificate",
  },
  {
    title: "CSS (Basic)",
    logo: "/certifications/hackerrank.png",
    url: "https://www.hackerrank.com/certificates/iframe/dcee72df8ee4",
  },
  {
    title: "JavaScript for Beginners",
    logo: "/certifications/simpli.png",
    url: "https://drive.google.com/file/d/1V-QAuedVNARHSKZOjDLXI0zFj-_lB4f1/view?usp=sharing",
  },
  {
    title: "React (Basic)",
    logo: "/certifications/hackerrank.png",
    url: "https://www.hackerrank.com/certificates/iframe/9dd7601ffb51",
  },
];

type HackathonCertificate = {
  title: string;
  issuer: string;
  image: string;
};

const hackathons: HackathonCertificate[] = [
  {
    title: "PYHACK 2.0 — Certificate of Commendation",
    issuer: "IEEE WIE Affinity Group of IIT",
    image: "/certifications/hack.png",
  },
];

function HackathonCard({ item }: { item: HackathonCertificate }) {
  return (
    <motion.article
      variants={cardVariants}
      className="flex flex-col min-w-0 rounded-2xl border border-[#00df82]/15 bg-[#0a1530] overflow-hidden hover:border-[#00df82]/35 transition-colors duration-300"
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#010a1f]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-3 sm:p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="px-5 py-4 border-t border-[#00df82]/10">
        <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug">
          {item.title}
        </h3>
        <p className="text-[var(--muted)] text-sm mt-1">{item.issuer}</p>
      </div>
    </motion.article>
  );
}

function CertificationCard({ item }: { item: Certification }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className="flex flex-col items-center text-center bg-[#0a1530] border border-[#00df82]/10 rounded-2xl p-6 sm:p-8 hover:border-[#00df82]/40 transition-colors duration-300 min-w-0"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#010a1f] border border-[#00df82]/15 flex items-center justify-center overflow-hidden">
        <Image
          src={item.logo}
          alt=""
          fill
          className="object-contain p-3"
          sizes="96px"
        />
      </div>

      <h3 className="font-sans text-base sm:text-lg font-bold text-white mt-5 leading-snug break-words">
        {item.title}
      </h3>

      {item.url && (
        <motion.a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 mt-5 border border-[#00df82] text-[#00df82] rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300"
        >
          <ExternalLink size={14} />
          View
        </motion.a>
      )}
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Certifications"
            description="Hackathon commendation and online course certifications in web development and project management."
          />
        </motion.div>

        <div id="hackathons" className="mt-12 md:mt-16">
          <motion.h3
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="font-sans text-xl sm:text-2xl font-semibold text-[#00df82] text-center"
          >
            Hackathons
          </motion.h3>

          <motion.div
            className="mx-auto max-w-2xl mt-8 sm:mt-10"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {hackathons.map((item) => (
              <HackathonCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-20">
          <motion.h3
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="font-sans text-xl sm:text-2xl font-semibold text-[#00df82] text-center"
          >
            Online Courses
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {certifications.map((item) => (
              <CertificationCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
