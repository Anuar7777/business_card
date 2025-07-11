import { useTranslation } from "react-i18next";
import { FaEnvelope } from "react-icons/fa";
import RevealFadeUp from "../framer/RevealFadeUp";
import SlideMaskReveal from "../framer/SlideMaskReveal";
import { memo } from "react";

const Contact = () => {
  const { t } = useTranslation("contact");

  const descriptionParts = t("description", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[1094px] px-[96px] max-md:px-[26px] md:px-[46px] lg:px-[96px]">
        <div className="max-w-[700px]">
          <RevealFadeUp>
            <h1 className="text-center mb-7">
              Contact
              <span>.</span>
            </h1>
          </RevealFadeUp>
          <SlideMaskReveal width="fit-content" overflow="hidden">
            <p className="text-center xl">
              {descriptionParts[0]}{" "}
              <a
                href="https://www.linkedin.com/in/anuar-aman/"
                target="_blank"
                className="text-green-400"
                rel="noreferrer noopener">
                {" "}
                LinkedIn
              </a>{" "}
              {descriptionParts[1]}{" "}
              <a
                href="https://t.me/Jasulanuly"
                target="_blank"
                className="text-green-400"
                rel="noreferrer noopener">
                Telegram
              </a>
            </p>
          </SlideMaskReveal>

          <div className="flex justify-center text-center mt-5 font-bold text-[#dadbe0] text-3xl max-sm:text-xl">
            <SlideMaskReveal width="fit-content" overflow="hidden">
              <a
                className="flex gap-2 text-center hover:text-green-400 transition-colors duration-400 items-center active:scale-95"
                href="mailto:aman_anuar@mail.ru">
                <FaEnvelope className="text-xl relative top-1" />{" "}
                aman_anuar@mail.ru
              </a>
            </SlideMaskReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
