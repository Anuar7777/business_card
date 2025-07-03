import { useTranslation } from "react-i18next";
import Job from "../components/Job";

const Worklife = () => {
  const { t } = useTranslation("experience");

  const experienceItems = t("items", { returnObjects: true });

  return (
    <div className="flex relative justify-center min-h-screen">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[46px] md:px-[46px] lg:px-[96px]">
        <div className="flex justify-between items-center gap-8">
          <h2>
            Worklife
            <span>.</span>
          </h2>

          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
        </div>

        <div className="flex flex-col mt-10">
          {experienceItems.map((job, index) => (
            <Job
              key={index + job.companyName}
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

export default Worklife;
