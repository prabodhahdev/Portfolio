"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import {
  gridVariants,
  headerVariants,
  timelineItemVariants,
  viewport,
} from "../../lib/motion";

export type EducationItem = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  studyType: string;
  result?: string;
  logo: string;
  url?: string;
};

const connectorColors = ["#00df82", "#38bdf8", "#818cf8", "#f472b6"];

const education: EducationItem[] = [
  {
    degree: "BSc (Hons) in Software Engineering",
    institution: "Sabaragamuwa University of Sri Lanka",
    startDate: "2022",
    endDate: "Present",
    duration: "Final Year",
    location: "Belihuloya, Sri Lanka",
    studyType: "Full-time",
    logo: "/education/susl.png",
    url: "https://www.sab.ac.lk/",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Sri Sumangala National College",
    startDate: "2020",
    endDate: "2022",
    duration: "3 yrs",
    location: "Nuwara Eliya, Sri Lanka",
    studyType: "Secondary Education",
    result: "Physical Science Stream",
    logo: "/education/snc.png",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Sri Sumangala National College",
    startDate: "2015",
    endDate: "2018",
    duration: "3 yrs",
    location: "Nuwara Eliya, Sri Lanka",
    studyType: "Secondary Education",
    result: "7A's",
    logo: "/education/snc.png",
  },
];

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <motion.div
      className="w-full min-w-0"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex rounded-2xl border border-[#00df82]/25 bg-[#0a1530] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:border-[#00df82]/45 transition-colors">
        <div className="relative shrink-0 w-20 sm:w-28 md:w-32 self-stretch min-h-[120px] sm:min-h-[140px] bg-[#010a1f] border-r border-[#00df82]/15">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.institution} website`}
              className="absolute inset-0 block hover:bg-white/5 transition-colors"
            >
              <Image
                src={item.logo}
                alt={`${item.institution} logo`}
                fill
                className="object-contain p-3 sm:p-5"
                sizes="(max-width: 640px) 80px, 128px"
              />
            </a>
          ) : (
            <Image
              src={item.logo}
              alt={`${item.institution} logo`}
              fill
              className="object-contain p-3 sm:p-5"
              sizes="(max-width: 640px) 80px, 128px"
            />
          )}
        </div>

        <div className="flex-1 p-3 sm:p-5 flex flex-col justify-center text-left min-w-0">
          <p className="font-sans font-bold text-[#00df82] text-xs sm:text-base">
            {item.startDate} – {item.endDate}
          </p>
          <h3 className="font-sans font-bold text-white text-sm sm:text-lg mt-1.5 sm:mt-2 leading-snug break-words">
            {item.degree}
          </h3>
          <p className="text-white/90 text-xs sm:text-base mt-1.5 sm:mt-2 leading-snug break-words">
            {item.institution}
          </p>
          {item.result && (
            <p className="text-[#00df82] text-xs sm:text-sm font-semibold mt-1.5 sm:mt-2 break-words">
              {item.result}
            </p>
          )}
          <p className="text-[var(--muted)] text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed break-words">
            {item.location}
          </p>
          <p className="text-[var(--muted)]/80 text-[11px] sm:text-xs mt-1 break-words">
            {item.studyType} · {item.duration}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineCircle({
  index,
  color,
}: {
  index: number;
  color: string;
}) {
  return (
    <motion.div
      className="relative z-10 w-14 h-14 rounded-full border-[3px] flex items-center justify-center bg-[#010a1f] font-sans font-bold text-white text-lg shadow-[0_0_0_6px_#010a1f] shrink-0"
      style={{ borderColor: color }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      {index + 1}
    </motion.div>
  );
}

function TimelineConnector({ color }: { color: string }) {
  return (
    <motion.span
      className="h-0.5 w-10 sm:w-16 md:w-24 lg:w-32 shrink-0"
      style={{ backgroundColor: color }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-hidden
    />
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Education"
            description="My academic background and the institutions that shaped my learning journey."
            className="mb-16 md:mb-20"
          />
        </motion.div>

        <div className="relative w-full min-w-0">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/15 hidden md:block"
            aria-hidden
          />

          <motion.div
            className="space-y-16 md:space-y-24"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;
              const color = connectorColors[index % connectorColors.length];

              return (
                <motion.article
                  key={item.degree + item.institution}
                  className="min-w-0"
                  variants={timelineItemVariants()}
                >
                  <div className="md:hidden flex gap-3 w-full min-w-0">
                    <div className="flex flex-col items-center shrink-0">
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] flex items-center justify-center bg-[#010a1f] font-sans font-bold text-white text-sm sm:text-base"
                        style={{ borderColor: color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={viewport}
                        transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
                      >
                        {index + 1}
                      </motion.div>
                      {index < education.length - 1 && (
                        <div className="w-px flex-1 min-h-16 bg-white/15 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <EducationCard item={item} />
                    </div>
                  </div>

                  <div className="hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 lg:gap-x-6 w-full">
                    {isLeft ? (
                      <>
                        <div className="flex items-center justify-end w-full min-w-0">
                          <div className="w-full min-w-0">
                            <EducationCard item={item} />
                          </div>
                          <TimelineConnector color={color} />
                        </div>
                        <TimelineCircle index={index} color={color} />
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <TimelineCircle index={index} color={color} />
                        <div className="flex items-center justify-start w-full min-w-0">
                          <TimelineConnector color={color} />
                          <div className="w-full min-w-0">
                            <EducationCard item={item} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
