import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

const Navbar = () => {
  const { t } = useTranslation("navbar");

  const resumeURL = t("resumeName");

  const socialLinks = [
    { href: "https://www.linkedin.com/in/anuar-aman/", icon: <FaLinkedin /> },
    { href: "https://github.com/Anuar7777", icon: <FaGithub /> },
    { href: "https://t.me/Jasulanuly", icon: <RiTelegram2Fill /> },
  ];

  return (
    <nav className="z-20 flex w-full backdrop-blur-md justify-between flex-row py-4 items-center px-10 top-0 bg-transparent sticky">
      <div className="flex justify-between gap-3">
        {socialLinks.map(({ href, icon }, idx) => (
          <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
            {React.cloneElement(icon, {
              className:
                "text-2xl text-[#7e7e82] hover:text-green-400 cursor-pointer transition-colors duration-400",
            })}
          </a>
        ))}
      </div>
      <a
        href={resumeURL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0aff9d] text-xl pt-[8px] pb-[10px] px-[22px]  
    border-[#0aff9d] border-[1px] rounded-md hover:text-black z-[60] relative ease-in-out duration-150
    before:z-[9] before:content-[' '] before:absolute before:bg-green-400 before:border-green-400
    before:top-0 before:left-0 before:w-[0%] before:h-[0%] before:rounded-l-md 
    before:transition-all before:duration-200 before:ease-in-out
    hover:before:rounded-md hover:before:w-full hover:before:h-full
  ">
        {t("button")}
      </a>
    </nav>
  );
};

export default Navbar;
