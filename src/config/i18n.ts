import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import hero_en from "../locales/en/hero.json";

import hero_ru from "../locales/ru/hero.json";

const resources = {
  en: {
    hero: hero_en,
  },
  ru: {
    hero_ru,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
