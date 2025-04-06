import { useTranslation } from "react-i18next";

const languages = [{ value: "ukr", title: "Ukrainian" }];

export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <header className="sticky top-0 bg-white">
            <h1>{t("Portfolio")}</h1>
            <nav>
                <button>{t("Main Page")}</button>
                <button>{t("Projects")}</button>
                <select
                    className="p-2 pl-0"
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    name="languageList"
                    id="languageList"
                    defaultValue={i18n.language}
                >
                    {languages.map(({ value, title }) => (
                        <option
                            value={value}
                            disabled={i18n.resolvedLanguage === value}
                            key={value}
                        >
                            {t(title)}
                        </option>
                    ))}
                    <option value="en">{t("English")}</option>
                </select>
            </nav>
        </header>
    );
}
