"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { getNavHeight, isNavScrollingActive, scrollToSectionId } from "../../lib/scroll";

const navLinks = [
  "Home",
  "Skills",
  "Projects",
  "Experience",
  "About",
  "Certifications",
  "Contact",
];

const scrollSpySections = [
  { id: "home", link: "Home" },
  { id: "skills", link: "Skills" },
  { id: "projects", link: "Projects" },
  { id: "experience", link: "Experience" },
  { id: "about", link: "About" },
  { id: "education", link: "About" },
  { id: "blogs", link: "About" },
  { id: "volunteer", link: "About" },
  { id: "certifications", link: "Certifications" },
  { id: "hackathons", link: "Certifications" },
  { id: "contact", link: "Contact" },
];

function getSectionId(link: string) {
  return link.toLowerCase();
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    function updateActiveSection() {
      const navHeight = getNavHeight();
      const triggerLine = navHeight + 24;
      let currentLink = navLinks[0];

      for (const section of scrollSpySections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= triggerLine) {
          currentLink = section.link;
        }
      }

      setActive((prev) => (prev === currentLink ? prev : currentLink));
      ticking = false;
    }

    function onScroll() {
      if (isNavScrollingActive()) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function handleNavClick(link: string) {
    const sectionId = getSectionId(link);
    const wasMenuOpen = menuOpen;

    setActive(link);
    setMenuOpen(false);

    if (wasMenuOpen) {
      window.setTimeout(() => scrollToSectionId(sectionId), 320);
      return;
    }

    scrollToSectionId(sectionId);
  }

  return (
    <header
      data-site-header
      className="fixed top-0 left-0 z-50 w-full pointer-events-none"
    >
      <SectionContainer className="pt-4 sm:pt-5 pointer-events-auto">
        <nav className="rounded-2xl border border-white/10 bg-[#010a1f]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <div className="px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => handleNavClick("Home")}
              className="font-sans font-bold text-2xl sm:text-3xl text-white cursor-pointer shrink-0"
            >
              PH<span className="text-[#00df82] text-xs">dev</span>
            </button>

            <ul className="hidden lg:flex items-center gap-6 xl:gap-7 text-white font-medium">
              {navLinks.map((link) => {
                const isActive = active === link;

                return (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link)}
                      className={`cursor-pointer text-sm xl:text-base ${
                        isActive
                          ? "text-[#00df82]"
                          : "hover:text-[#00df82] transition-colors"
                      }`}
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => handleNavClick("Contact")}
              className="hidden lg:inline-block shrink-0 bg-[#00df82] text-[#010a1f] font-semibold px-5 xl:px-6 py-2.5 rounded-full hover:bg-[#00df82]/90 btn-glow btn-glow-solid transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </button>

            <button
              type="button"
              className="lg:hidden text-white cursor-pointer shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
              menuOpen ? "max-h-[28rem]" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-5 px-4 pb-5 border-t border-white/10 pt-5">
              {navLinks.map((link) => {
                const isActive = active === link;

                return (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link)}
                      className={`cursor-pointer ${
                        isActive
                          ? "text-[#00df82] text-lg"
                          : "text-white text-lg hover:text-[#00df82] transition"
                      }`}
                    >
                      {link}
                    </button>
                  </li>
                );
              })}

              <button
                type="button"
                onClick={() => handleNavClick("Contact")}
                className="bg-[#00df82] text-[#010a1f] font-semibold px-6 py-3 rounded-full hover:bg-[#00df82]/90 btn-glow btn-glow-solid transition-all duration-300 cursor-pointer"
              >
                Hire Me
              </button>
            </ul>
          </div>
        </nav>
      </SectionContainer>
    </header>
  );
}
