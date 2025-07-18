import { useTranslation } from "react-i18next";
import Job from "../components/Job";
import type { IJob } from "../types";
import RevealFadeUp from "../framer/RevealFadeUp";
import { memo } from "react";

const Worklife = () => {
  const { t } = useTranslation("worklife");

  const experienceItems = t("items", { returnObjects: true }) as IJob[];

  return (
    <div className="flex relative justify-center sm:min-h-screen mt-17 max-sm:mt-0">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[46px] md:px-[46px] lg:px-[96px]">
        <div className="flex justify-between items-center gap-8 mt-20.5">
          <RevealFadeUp>
            <h2>
              Worklife
              <span>.</span>
            </h2>
          </RevealFadeUp>

          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
        </div>

        <div className="flex flex-col mt-8.5">
          {experienceItems.map((job, idx) => (
            <Job
              key={idx + job.companyName}
              companyName={job.companyName}
              position={job.position}
              location={job.location}
              date={job.date}
              text={job.text}
              tech={job.tech}
              link={job?.link}
            />
          ))}
          <hr className="border-t-0 border-b w-full border-b-[#302f2f]" />
        </div>
      </div>
    </div>
  );
};

export default memo(Worklife);
