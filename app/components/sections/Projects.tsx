"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const viewport = { once: true, amount: 0.2 } as const;

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
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  company?: string;
  role?: string;
  /** LinkedIn embed — used as media when no image */
  linkedinEmbedSrc?: string;
};

const projects: Project[] = [
  {
    title: "Monaro Lands",
    description:
      "A modern real estate website for Monaro Lands, developed as a team project during my internship at Sphiria Digital Studio. I contributed as a Frontend Developer, focusing on responsive UI, page layouts, and a polished user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend"],
    liveUrl: "https://monarolands.com/",
    image: "/projects/monaro.png",
    company: "Team project at Sphiria Digital Studio",
    role: "Frontend Developer",
  },
  {
    title: "My Sky Travels",
    description:
      "A full-stack travel platform for My Sky Travels, developed as a team project during my internship at Sphiria Digital Studio. I contributed as a Full Stack Developer across frontend and backend features alongside other developers.",
    tags: ["Full Stack", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://myskytravels.com/",
    image: "/projects/mysky.png",
    company: "Team project at Sphiria Digital Studio",
    role: "Full Stack Developer",
  },
  {
    title: "DocBook",
    description:
      "A full-stack DocBook app I built while following a YouTube tutorial, then reviewed and customized to strengthen my MERN stack skills. Demo walkthrough is shared on LinkedIn.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    linkedinEmbedSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7306929079423827968?compact=1",
    role: "Full Stack Developer",
    company: "YouTube tutorial project",
    githubUrl: "https://github.com/prabodhahdev/DocBook",
  },
  {
    title: "eSabraHub",
    description:
      "A university group project built with the MERN stack. I contributed as a Full Stack Developer across the React frontend and Node.js / Express backend with MongoDB.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    linkedinEmbedSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7295401694396309504?compact=1",
    role: "Full Stack Developer",
    company: "University Group Project",
    githubUrl:"https://github.com/prabodhahdev/eSabraHub",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Projects"
            description="Selected work from my internship at Sphiria Digital Studio, university group projects, and personal projects I have built."
            className="mb-16"
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-[#0a1530] border border-[#00df82]/10 rounded-2xl overflow-hidden hover:border-[#00df82]/40 transition-colors duration-300 h-full"
            >
              {project.linkedinEmbedSrc && !project.image ? (
                <div className="relative w-full overflow-hidden bg-[#010a1f] border-b border-[#00df82]/10 flex justify-center">
                  <iframe
                    src={project.linkedinEmbedSrc}
                    title={`${project.title} LinkedIn video`}
                    width={504}
                    height={399}
                    className="w-full max-w-[504px] border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              ) : project.image ? (
                <div className="relative aspect-video overflow-hidden bg-[#010a1f]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1530] via-[#010a1f]/10 to-transparent" />
                </div>
              ) : null}

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-sans text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {(project.company || project.role) && (
                  <p className="text-[#00df82] text-sm font-semibold mb-3">
                    {[project.role, project.company].filter(Boolean).join(" · ")}
                  </p>
                )}

                <p className="text-[var(--muted)] text-base leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full border border-[#00df82]/25 text-[#00df82]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 border border-[#00df82] text-[#00df82] rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 border border-white/20 text-white rounded-full px-5 py-2 text-sm font-semibold hover:border-[#00df82] hover:text-[#00df82] btn-glow transition-colors duration-300"
                      >
                        <FaGithub size={14} />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  );
}
