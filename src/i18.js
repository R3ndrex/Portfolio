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
                    AboutText: `Я розробник фронтенду з міцною основою в HTML,
                    CSS i JavaScript. Мені подобається будувати інтуїтивно зрозумілі та
                    інтерактивні веб-додатки, вивчення нових технологій та
                    вдосконалення моїх навичок кодування. Я зосереджений на освоєнні React
                    i найкращих практик фронтенду. Я люблю вирішувати проблеми,
                    оптимізувати взаємодію з користувачем i писати чистий, зручний для обслуговування
                    код. Шукаю вакансію веб-розробника, де я можу
                    зробити внесок y ефективні проєкти та покращити мій рівень знання фронтенду`,
                    "About Me": "Про мене",
                    "My stack": "Мій стек",
                    "Lytvyneko Rostyslav": "Литвиненко Ростислав",
                },
            },
        },
    });
