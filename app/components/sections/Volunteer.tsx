"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { cardVariants, gridVariants, headerVariants, viewport } from "../../lib/motion";

export type VolunteerItem = {
  title: string;
  description: string;
  image: string;
};

const volunteers: VolunteerItem[] = [
  {
    title: "PearlHack 2.0 — Program Team",
    description:
      "Worked with the program team for PearlHack 2.0, an inter-university ideathon and designathon women's hackathon organized by IEEE, WIE, and ICARC — collaborating with a dedicated team and partners to deliver a successful event.",
    image: "/volunteer/volunteer.jpg",
  },
];

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Volunteer"
            description="Giving back through community work and volunteering beyond academics."
            className="mb-16"
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {volunteers.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#0a1530] border border-[#00df82]/10 rounded-2xl overflow-hidden hover:border-[#00df82]/40 transition-colors duration-300 h-full"
            >
              <div className="relative w-full aspect-[16/10] bg-[#010a1f]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-sans font-bold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  );
}
