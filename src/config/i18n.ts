import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import hero_en from "../locales/en/hero.json";
import about_en from "../locales/en/about.json";
import projects_en from "../locales/en/projects.json";
import experience_en from "../locales/en/experience.json";
import contact_en from "../locales/en/contact.json";
import links_en from "../locales/en/links.json";

import hero_ru from "../locales/ru/hero.json";
import about_ru from "../locales/ru/about.json";
import projects_ru from "../locales/ru/projects.json";
import experience_ru from "../locales/ru/experience.json";
import contact_ru from "../locales/ru/contact.json";
import links_ru from "../locales/ru/links.json";

const resources = {
  en: {
    hero: hero_en,
    about: about_en,
    projects: projects_en,
    experience: experience_en,
    contact: contact_en,
    links: links_en,
  },
  ru: {
    hero: hero_ru,
    about: about_ru,
    projects: projects_ru,
    experience: experience_ru,
    contact: contact_ru,
    links: links_ru,
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
