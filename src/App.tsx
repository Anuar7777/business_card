import { useState } from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import ProfileLinks from "./components/ProfileLinks";

function App() {
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);
  const ProjectModalHandler = (value) => {
    setIsOpenProjectModal(value);
  };

  return (
    <div>
      <main id="top" className="relative bg-[#111111]">
        <ProfileLinks />
        <section id="hero" data-section>
          <Hero />
        </section>
        <section id="about" className="mt-[150px]" data-section>
          <About />
        </section>
        <section id="projects" className="mt-[150px]" data-section>
          <Projects modalHandler={ProjectModalHandler} />
        </section>
        <section id="experience" className="mt-[150px]" data-section>
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
