import { useEffect, useRef, useState } from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Worklife from "./sections/Worklife";
import Contact from "./sections/Contact";
import ProfileLinks from "./components/ProfileLinks";
import SIdeNav from "./components/SIdeNav";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)?.target;
        if (visible) {
          setActiveSection(visible.id);
        }
      },
      {
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.current?.observe(section));

    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
    };
  }, []);

  return (
    <div className="app-layout">
      <SIdeNav activeSection={activeSection} />
      <main id="top" className="relative bg-[#111111]">
        <LanguageToggle />
        <ProfileLinks />
        <section id="hero" data-section>
          <Hero />
        </section>
        <section id="about" data-section>
          <About />
        </section>
        <section id="projects" data-section>
          <Projects />
        </section>
        <section id="worklife" data-section>
          <Worklife />
        </section>
        <section id="contact" data-section>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
