import { useState } from "react";
import i18next from "i18next";

const languages = ["en", "ru"] as const;

type Language = (typeof languages)[number];

const LanguageToggle = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);

  const toggleLanguage = () => {
    const nextIndex = (currentLanguageIndex + 1) % languages.length;
    const nextLang: Language = languages[nextIndex];
    i18next.changeLanguage(nextLang);
    setCurrentLanguageIndex(nextIndex);
  };

  return (
    <button
      className="fixed bg-[#2e2e2e] text-green-400 z-50 right-7 bottom-5 cursor-pointer px-3 py-2 rounded-md font-semibold"
      onClick={toggleLanguage}>
      {languages[currentLanguageIndex].toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
