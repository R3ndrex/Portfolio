import { Trans, useTranslation } from "react-i18next";
import Stack from "./Stack";
import Projects from "./Projects";

export default function MainContent() {
    const { t } = useTranslation();
    return (
        <main className="self-center flex flex-col gap-[5rem] bg-white ">
            <section className="bg-slate-100">
                <div className="w-[60%] ml-auto mr-auto p-7">
                    <h2 className="mb-5 text-5xl pb-0 mb-3 pt-3">
                        {t("About Me")}
                    </h2>
                    <Trans i18nKey="AboutText">
                        <p className="text-xl">
                            I am a frontend developer with a strong foundation
                            in HTML, CSS, and JavaScript. I enjoy building
                            intuitive and interactive web applications, learning
                            new technologies, and improving my coding skills. I
                            am focused on mastering React and frontend best
                            practices. I like solving problems, optimizing user
                            experiences, and writing clean, maintainable code.
                            Looking for a web development position where I can
                            contribute to impactful projects and enhance my
                            frontend expertise
                        </p>
                    </Trans>
                </div>
            </section>
            <Stack />
            <Projects />
        </main>
    );
}
