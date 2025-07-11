import { useTranslation } from "react-i18next";
import { memo } from "react";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <div className="flex justify-center sm:h-[calc(100vh-80px)] items-center ">
      <div className="flex flex-col max-w-[902px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] max-xl:mr-0 xl:mr-[200px] max-sm:text-center">
        <h1 className="mb-7 max-sm:mt-20.5">
          {t("title")}
          <span>.</span>
        </h1>

        <h3 className="text-4xl font-normal text-gray-200 max-sm:text-2xl">
          {t("subtitle.white")}{" "}
          <span className="font-bold text-green-400">{t("subtitle.neon")}</span>
        </h3>

        <p className="mt-[24px] relative z">{t("description")}</p>

        <div>
          <a href="#contact" className="mt-6 animated-button">
            <span>{t("buttonText")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
