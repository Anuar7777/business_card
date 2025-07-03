import SlideMaskReveal from "../framer/SlideMaskReveal";
import type { IJob } from "../types";

const Job = ({
  companyName,
  position,
  location,
  date,
  text,
  tech,
  link,
}: IJob) => {
  return (
    <div className="mt-7 flex flex-col border-b border-[#2e2e2e] pb-5 px-3">
      <div className="flex justify-between">
        <SlideMaskReveal width="fit-content" overflow="hidden">
          {link ? (
            <a
              href={link}
              className="cursor-pointer text-gray-200 text-2xl font-extrabold"
              target="_blank"
              rel="noopener noreferrer">
              {companyName}
            </a>
          ) : (
            <h3>{companyName}</h3>
          )}
        </SlideMaskReveal>
        <SlideMaskReveal width="fit-content" overflow="hidden">
          <span className="text-[#d6d7db] font-medium text-lg">{date}</span>
        </SlideMaskReveal>
      </div>

      <div className="flex justify-between mt-3.5">
        <SlideMaskReveal width="fit-content" overflow="hidden">
          <span className="font-medium text-lg">{position}</span>
        </SlideMaskReveal>
        <SlideMaskReveal width="fit-content" overflow="hidden">
          <span className="font-medium text-lg">{location}</span>
        </SlideMaskReveal>
      </div>
      <SlideMaskReveal width="fit-content" overflow="hidden">
        <p className="mt-3.5 mb-6">{text}</p>
      </SlideMaskReveal>
      <SlideMaskReveal width="fit-content" overflow="hidden">
        <div className="flex flex-wrap gap-3 px-1">
          {tech.map((techItem) => (
            <div key={techItem} className="stack-item">
              {techItem}
            </div>
          ))}
        </div>
      </SlideMaskReveal>
    </div>
  );
};

export default Job;
