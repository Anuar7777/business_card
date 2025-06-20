import { useTranslation } from "react-i18next";

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
    <div className="flex relative justify-center h-screen items-center">
      <div className="relative flex flex-col max-w-[902px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] max-xl:mr-0 xl:mr-[200px]">
        <h1 className="text-gray-200 max-md:text-6xl text-8xl font-extrabold tracking-tighter relative z-20 mb-7">
          {t("title")}
        </h1>
        <h3 className="text-4xl font-normal text-gray-200 relative z-20">
          {t("subtitle.white")}{" "}
          <span className="font-bold text-green-400">{t("subtitle.neon")}</span>
        </h3>
        <p className="mt-[24px] text-gray-300 text-lg relative z-20">
          {t("description")}
        </p>

        <a href="#contact">
          <button className="mt-[24px] bg-green-400 text-xl rounded-md py-[10px] px-[22px] relative z-20 cursor-pointer transition-colors duration-400 hover:bg-[#08e68ae9]">
            {t("buttonText")}
          </button>
        </a>
        <div
          className="absolute flex flex-wrap w-[600px] h-[560px] max-[760px]:w-full  max-[760px]:right-0 
       max-lg:right-[50px] right-[0px] top-[-100px] z-10 overflow-hidden  max-[580px]:right-[0px]">
          {dots}
        </div>
      </div>
    </div>
  );
};

// return (
//     <>
//       <div className="flex relative justify-center h-screen items-center ">
//         <div className="relative flex flex-col max-w-[902px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] max-xl:mr-0 xl:mr-[200px]">
//           <Reveal>
//             <h1 className="text-[#ebecf3] max-md:text-6xl text-8xl font-extrabold tracking-tighter relative z-20 mb-7">
//               {t("hero.title")}
//               <span className="text-neon">.</span>
//             </h1>
//           </Reveal>
//           <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
//             <h3 className="text-4xl  font-normal text-[#ebecf3] relative z-20">
//               {t("hero.subtitle.white")}{" "}
//               <span className="font-bold text-neon">
//                 {t("hero.subtitle.neon")}
//               </span>
//             </h3>
//           </SlideReveal>
//           <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
//             <p className="mt-[24px] text-[#c0c1c7] text-lg relative z-20">
//               {t("hero.description")}
//             </p>
//           </SlideReveal>
//           <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
//             <a href="#contact">
//               <button className="mt-[24px] rounded-md py-[10px] px-[22px] bg-neon text-xl relative z-20">
//                 {t("hero.buttonText")}
//               </button>
//             </a>
//           </SlideReveal>
//           <div
//             className="absolute flex flex-wrap w-[600px] h-[560px] max-[760px]:w-full  max-[760px]:right-0
//        max-lg:right-[50px] right-[0px] top-[-100px] z-10 overflow-hidden  max-[580px]:right-[0px]"
//           >
//             {dots}
//           </div>
//         </div>
//       </div>
//     </>

export default Hero;
