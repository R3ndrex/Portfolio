import { Trans, useTranslation } from "react-i18next";
import Stack from "./Stack";

export default function MainContent() {
    const { t } = useTranslation();
    return (
        <main className="w-[60%] self-center flex flex-col gap-5 bg-white ">
            <section>
                <h2 className="mb-5 bg-red-300 pb-3 pt-3">{t("About Me")}</h2>
                <Trans i18nKey="AboutText">
                    <p>
                        I am a frontend developer with a strong foundation in
                        HTML, CSS, and JavaScript. I enjoy building intuitive
                        and interactive web applications, learning new
                        technologies, and improving my coding skills. I am
                        focused on mastering React and frontend best practices.
                        I like solving problems, optimizing user experiences,
                        and writing clean, maintainable code. Looking for a web
                        development position where I can contribute to impactful
                        projects and enhance my frontend expertise
                    </p>
                </Trans>
            </section>
            <Stack />
        </main>
    );
}
