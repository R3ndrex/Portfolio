import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "./locales/en/en.json";
import ukLang from "./locales/uk/uk.json";
import ruLang from "./locales/ru/ru.json";

const resources = {
    uk: { translation: ukLang },
    en: { translation: enLang },
    ru: { translation: ruLang },
};
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: resources,
        interpolation: {
            escapeValue: false,
        },
    });
