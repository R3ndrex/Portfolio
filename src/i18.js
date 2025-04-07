import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
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
                    Source: "Джерело",
                    "CV-Generator is a web application for creating and customizing your resume. It allows users to choose from pre-made templates that can be customized to suit their personal preferences.":
                        "CV-Generator — це веб-додаток для створення та налаштування резюме. Він дозволяє користувачам вибирати готові шаблони, які можна налаштувати відповідно до їхніх особистих уподобань.",
                    "Shopping Cart Simulator is a simple and user-friendly web application for simulating online shopping. Product data is fetched from the Fake Store API, and the cart allows you to add, remove, and purchase items.":
                        "Shopping Cart Simulator — це проста та зручна веб-програма для імітації покупок в Інтернеті. Дані про продукт отримуються з API Fake Store, а кошик дозволяє додавати, видаляти та купувати товари.",
                    Live: "Уживу",
                    "Hi, Im Rostyslav Lytvynenko.":
                        "Привіт, я Литвиненко Ростислав",
                    "Software Engineer": "Інженер-програміст",
                    "Rostyslav Lytvynenko": "Литвиненко Ростислав",
                },
            },
        },
    });
