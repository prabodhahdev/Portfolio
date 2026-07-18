import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Volunteer from "./components/sections/Volunteer";
import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen pt-24 sm:pt-28">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Education />
        <Blogs />
        <Volunteer />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
