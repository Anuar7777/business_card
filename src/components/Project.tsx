import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { IProject } from "../types";

const Project = ({
  live,
  github,
  bigText,
  smallText,
  tech,
  imgs,
  name,
  modalHandler,
  openSpan,
  heroImg,
}: IProject) => {
  // TODO: Should add modal window
  console.log(bigText + imgs + modalHandler + openSpan);
  return (
    <div className="flex flex-col">
      <div className="cursor-pointer relative overflow-hidden rounded-xl bg-[#232323]">
        <img
          className="h-[232px] w-full rounded-lg relative top-5 duration-150 group-hover:ease-in ease-out scale-85 group-hover:rotate-2 group-hover:scale-90"
          src={heroImg}
          alt={name}
        />
      </div>

      <div className="flex justify-between items-center gap-3 mt-5">
        <h3>{name}</h3>
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

      <p className="text-green-400 mt-3.5 font-medium">{tech}</p>

      <p className="text-[#c0c1c7] text-xl mt-3.5">{smallText}</p>
    </div>
  );
};

export default Project;
