import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            ukr: {
                translation: {
                    Portfolio: "Портфоліо",
                    English: "Англійська",
                    Ukrainian: "Українська",
                    Projects: "Проєкти",
                    "Main Page": "Головна сторінка",
                    Language: "Мова",
                },
            },
        },
    });
