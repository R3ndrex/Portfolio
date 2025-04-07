import { useTranslation } from "react-i18next";

const languages = [{ value: "ukr", title: "Ukrainian" }];

export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <header className="flex border-b-1 z-1 border-slate-200 items-center justify-between fixed w-[100%] bg-transparent">
            <h1 className="p-[1rem]">R3ndrex</h1>
            <nav className="flex gap-6">
                <a className="flex items-center p-[1rem]" href="#">
                    {t("Main Page")}
                </a>
                <a className="flex items-center p-[1rem]" href="#projects">
                    {t("Projects")}
                </a>
                <select
                    className="p-[1rem] pl-0"
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
