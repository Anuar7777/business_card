import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaArrowRight, FaCode } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import type { IStack } from "../types";
import RevealFadeUp from "../framer/RevealFadeUp";
import SlideMaskReveal from "../framer/SlideMaskReveal";
import { memo } from "react";

const About = () => {
  const { t } = useTranslation("about");

  const descriptionParagraphs = t("description", {
    returnObjects: true,
  }) as string[];
  const workStackItems = t("workStack", { returnObjects: true }) as IStack;
  const famStackItems = t("funStack", { returnObjects: true }) as IStack;

  return (
    <div className="flex relative justify-center mt-17 max-sm:mt-0">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8 mt-20.5">
          <RevealFadeUp>
            <h2>
              About<span>.</span>
            </h2>
          </RevealFadeUp>

          <hr className="w-full border-b border-b-gray-300 border-t-0" />
        </div>
        <div className="grid grid-cols-[1fr_300px] gap-10 mt-[34px] max-md:grid-cols-1">
          <div className="flex flex-col gap-5">
            {!!descriptionParagraphs &&
              descriptionParagraphs.map((paragraph, idx) => (
                <SlideMaskReveal
                  width="fit-content"
                  overflow="hidden"
                  key={idx}>
                  <p key={idx}>{paragraph}</p>
                </SlideMaskReveal>
              ))}
            <SlideMaskReveal width="fit-content" overflow="hidden">
              <div className="flex items-center gap-5 pt-1">
                <div className="flex items-center gap-3">
                  <p className="font-medium text-green-400">
                    {t("linksTitle")}
                  </p>
                  <FaArrowRight className="text-green-400 font-light" />
                </div>
                <div className="flex justify-between gap-4 ">
                  <a
                    href="https://www.linkedin.com/in/anuar-aman/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <FaLinkedin className="text-2xl text-[#7e7e82] hover:text-green-400 cursor-pointer transition-colors duration-400" />
                  </a>
                  <a
                    href="https://github.com/Anuar7777"
                    target="_blank"
                    rel="noreferrer noopener">
                    <FaGithub className="text-2xl text-[#7e7e82] hover:text-green-400 cursor-pointer transition-colors duration-400" />
                  </a>
                  <a
                    href="https://t.me/Jasulanuly"
                    target="_blank"
                    rel="noreferrer noopener">
                    <RiTelegram2Fill className="text-2xl text-[#7e7e82] hover:text-green-400 cursor-pointer transition-colors duration-400" />
                  </a>
                </div>
              </div>
            </SlideMaskReveal>
          </div>
          <div className="flex flex-col gap-2.5">
            <SlideMaskReveal>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <FaCode className="text-2xl text-green-400" />
                  <h3>{workStackItems.title}</h3>
                </div>

                <div className="stack-flex">
                  {workStackItems.items.map((item, index) => (
                    <p key={index} className="stack-item">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </SlideMaskReveal>
            <SlideMaskReveal>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <FaBookOpen className="text-2xl text-green-400" />
                  <h3>{famStackItems.title}</h3>
                </div>
                <div className="stack-flex">
                  {famStackItems.items.map((item, index) => (
                    <p key={index} className="stack-item">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </SlideMaskReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
