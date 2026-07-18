"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { cardVariants, gridVariants, headerVariants, viewport } from "../../lib/motion";

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  platform: string;
  url: string;
  image: string;
  readTime?: string;
};

const blogs: BlogPost[] = [
  {
    title: "Software Architectures for Mobile Computing",
    excerpt:
      "Mobile apps have become part of everyday life. People use them for banking, shopping, learning, entertainment, transport, and communication. Users expect these apps to be fast, secure, and easy to use. Behind every successful mobile app, there is a strong software architecture...",
    date: "May 2026",
    platform: "Medium",
    url: "https://medium.com/@prabodhahdev/software-architectures-for-mobile-computing-13bbc570bf0a",
    image: "/blogs/blog-mb.webp",
    readTime: "4 min read",
  },
  {
    title: "Understanding React Hooks: A Beginner-Friendly Guide",
    excerpt:
      "React Hooks revolutionized the way developers write functional components, making state management and side effects easier to handle. Before hooks, managing component state and lifecycle in React required class components...",
    date: "Mar 2025",
    platform: "Medium",
    url: "https://medium.com/@prabodhahdev/understanding-react-hooks-a-beginner-friendly-guide-4281d1b856c0",
    image: "/blogs/react.webp",
    readTime: "3 min read",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Blogs"
            description="Articles and write-ups on web development, learning, and my journey in tech."
            className="mb-16"
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {blogs.map((post) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-[#0a1530] border border-[#00df82]/10 rounded-2xl overflow-hidden hover:border-[#00df82]/40 transition-colors duration-300 min-w-0 h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#010a1f]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1530]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border border-[#00df82]/30 text-[#00df82] bg-[#010a1f]/80">
                  {post.platform}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6 min-w-0">
                <div className="flex items-center gap-2 text-[var(--muted)] text-xs sm:text-sm mb-3">
                  <Calendar size={14} className="shrink-0" />
                  <span>{post.date}</span>
                  {post.readTime && (
                    <>
                      <span aria-hidden>·</span>
                      <span>{post.readTime}</span>
                    </>
                  )}
                </div>

                <h3 className="font-sans text-lg sm:text-xl font-bold text-white leading-snug break-words">
                  {post.title}
                </h3>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed mt-3 flex-1 break-words">
                  {post.excerpt}
                </p>

                <motion.a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 mt-5 border border-[#00df82] text-[#00df82] rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300 w-fit"
                >
                  <ExternalLink size={14} />
                  Read Article
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  );
}
