import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { RESUME_EN, RESUME_RU } from "../config/env";

const ProfileLinks = () => {
  const { t } = useTranslation("links");

  const resumeURL = t("resumeName") === "resume_en" ? RESUME_EN : RESUME_RU;

  const socialLinks = [
    { href: "https://www.linkedin.com/in/anuar-aman/", icon: <FaLinkedin /> },
    { href: "https://github.com/Anuar7777", icon: <FaGithub /> },
    { href: "https://t.me/Jasulanuly", icon: <RiTelegram2Fill /> },
  ];

  return (
    <nav className="z-10 flex w-full backdrop-blur-md justify-between flex-row py-4 items-center px-10 top-0 bg-transparent sticky">
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
        className="resume-button"
        href={resumeURL}
        target="_blank"
        rel="noopener noreferrer">
        <span>{t("button")}</span>
      </a>
    </nav>
  );
};

export default ProfileLinks;
