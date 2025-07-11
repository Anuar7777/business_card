import { useState, memo } from "react";
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
      className="sm:block hidden fixed bg-[#2e2e2e] text-green-400 z-50 right-10 bottom-6 cursor-pointer px-3 py-2 rounded-md font-semibold active:scale-95"
      onClick={toggleLanguage}>
      {languages[currentLanguageIndex].toUpperCase()}
    </button>
  );
};

export default memo(LanguageToggle);
