import { useState } from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);
  const ProjectModalHandler = (value) => {
    setIsOpenProjectModal(value);
  };

  return (
    <>
      <main id="top" className="relative bg-[#111111]">
        <section id="hero" data-section>
          <Hero />
        </section>
        <section id="about" className="mt-[150px]" data-section>
          <About />
        </section>
        <section id="projects" className="mt-[150px]" data-section>
          <Projects modalHandler={ProjectModalHandler} />
        </section>
        <section id="experience" data-section>
          <Experience />
        </section>
        <section id="contact" className="mt-[50px]">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
