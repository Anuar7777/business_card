import { useTranslation } from "react-i18next";
import SlideMaskReveal from "../framer/SlideMaskReveal";
import RevealFadeUp from "../framer/RevealFadeUp";
import React from "react";

const Hero = () => {
  const { t } = useTranslation("hero");

  const dots = Array.from({ length: 450 }, (_, i) => (
    <div
      key={i}
      className="rounded-lg w-6 h-7 duration-150 ease-out hover:ease-in hover:bg-[#555555] flex items-center justify-center group">
      <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#131313] to-[#525252] group-hover:to-green-400" />
    </div>
  ));

  return (
    <div className="flex relative justify-center h-[calc(100vh-80px)] items-center">
      <div className="relative flex flex-col max-w-[902px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] max-xl:mr-0 xl:mr-[200px]">
        <RevealFadeUp zIndex={50}>
          <h1 className="relative mb-7">
            {t("title")}
            <span>.</span>
          </h1>
        </RevealFadeUp>
        <SlideMaskReveal width="fit-content" overflow="hidden" zIndex={50}>
          <h3 className="text-4xl font-normal text-gray-200 relative z-20">
            {t("subtitle.white")}{" "}
            <span className="font-bold text-green-400">
              {t("subtitle.neon")}
            </span>
          </h3>
        </SlideMaskReveal>
        <SlideMaskReveal width="fit-content" overflow="hidden" zIndex={50}>
          <p className="mt-[24px] relative z-20">{t("description")}</p>
        </SlideMaskReveal>
        <SlideMaskReveal width="fit-content" overflow="hidden" zIndex={50}>
          <a href="#contact" className="mt-6 animated-button">
            <span>{t("buttonText")}</span>
          </a>
        </SlideMaskReveal>

        <div
          className="absolute flex flex-wrap w-[600px] h-[560px] max-[760px]:w-full  max-[760px]:right-0 
       max-lg:right-[50px] right-[0px] top-[-70px] overflow-hidden max-[580px]:right-[0px] z-40">
          {dots}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
