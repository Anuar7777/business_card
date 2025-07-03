import { useTranslation } from "react-i18next";
import Project from "../components/Project";
import type { IProject, ModalHandler } from "../types";
import RevealFadeUp from "../framer/RevealFadeUp";

const Projects = ({ modalHandler }: { modalHandler: ModalHandler }) => {
  const { t } = useTranslation("projects");

  const projects = t("items", { returnObjects: true }) as IProject[];

  return (
    <div className="flex relative justify-center min-h-screen">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8">
          <RevealFadeUp>
            <h2>
              Projects
              <span>.</span>
            </h2>
          </RevealFadeUp>

          <hr className="w-full border-b border-b-gray-300 border-t-0" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-[34px] max-md:grid-cols-1">
          {projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              live={project.live}
              github={project.github}
              bigText={project.bigText}
              smallText={project.smallText}
              tech={project.tech}
              imgs={project.imgs}
              modalHandler={modalHandler}
              openSpan={project.openSpan}
              heroImg={project.heroImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
