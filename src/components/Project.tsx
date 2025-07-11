import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { IProject } from "../types";
import SlideMaskReveal from "../framer/SlideMaskReveal";
import { memo } from "react";

const Project = ({
  live,
  github,
  smallText,
  tech,
  name,
  heroImg,
}: IProject) => {
  return (
    <div className="flex flex-col">
      <div className="cursor-pointer relative overflow-hidden rounded-xl bg-[#232323]">
        <img
          className="h-[252px] w-full rounded-lg relative top-4 duration-150 hover:ease-in ease-out scale-90 hover:rotate-2 hover:scale-95"
          src={heroImg}
          alt={name}
          loading="lazy"
        />
      </div>

      <SlideMaskReveal width="100%" overflow="hidden">
        <div className="flex justify-between items-center gap-3 mt-5">
          <h3 className="cursor-pointer">{name}</h3>
          <hr className="border-t-0 border-b w-4/5 border-b-[#adadad]" />
          <div className="flex justify-between gap-4">
            {!!github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-[#7e7e82] hover:text-green-400 cursor-pointer transition-colors duration-400" />
              </a>
            )}

            {!!live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-2xl text-[#7e7e82] hover:text-green-400 cursor-pointer transition-colors duration-400" />
              </a>
            )}
          </div>
        </div>
      </SlideMaskReveal>

      <SlideMaskReveal width="fit-content" overflow="hidden">
        <p className="text-green-400 mt-3.5 font-medium">{tech}</p>
      </SlideMaskReveal>
      <SlideMaskReveal width="fit-content" overflow="hidden">
        <p className="text-[#c0c1c7] text-xl mt-3.5">{smallText}</p>
      </SlideMaskReveal>
    </div>
  );
};

export default memo(Project);
