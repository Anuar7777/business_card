import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import hero_en from "../locales/en/hero.json";
import about_en from "../locales/en/about.json";
import projects_en from "../locales/en/projects.json";

import hero_ru from "../locales/ru/hero.json";
import about_ru from "../locales/ru/about.json";
import projects_ru from "../locales/ru/projects.json";

const resources = {
  en: {
    hero: hero_en,
    about: about_en,
    projects: projects_en,
  },
  ru: {
    hero: hero_ru,
    about: about_ru,
    projects: projects_ru,
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
