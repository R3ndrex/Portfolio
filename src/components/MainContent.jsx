import ReactImage from "../assets/react.svg";
import ReactRouterImage from "../assets/reactrouter.svg";
import ViteImage from "../assets/vitejs.svg";
import VitestImage from "../assets/vitest.svg";
import CSSImage from "../assets/css_old.svg";
import HTMLImage from "../assets/javascript.svg";
import JavaScriptImage from "../assets/html5.svg";
import { Trans, useTranslation } from "react-i18next";

const stack = [
    {
        image: HTMLImage,
        alt: "html5-image",
    },
    {
        image: CSSImage,
        alt: "css-image",
    },
    {
        image: JavaScriptImage,
        alt: "javascript-image",
    },
    {
        image: ReactImage,
        alt: "react-image",
    },
    {
        image: ReactRouterImage,
        alt: "react--router-image",
    },
    {
        image: ViteImage,
        alt: "vite-image",
    },
    {
        image: VitestImage,
        alt: "vitest-image",
    },
];

export default function MainContent() {
    const { t } = useTranslation();
    return (
        <main className="w-[70ch] ml-auto mr-auto flex flex-col gap-5">
            <h2 className="bg-red-300 pb-3 pt-3">{t("About Me")}</h2>
            <Trans i18nKey="AboutText">
                <p>
                    I am a frontend developer with a strong foundation in HTML,
                    CSS, and JavaScript. I enjoy building intuitive and
                    interactive web applications, learning new technologies, and
                    improving my coding skills. I am focused on mastering React
                    and frontend best practices. I like solving problems,
                    optimizing user experiences, and writing clean, maintainable
                    code. Looking for a web development position where I can
                    contribute to impactful projects and enhance my frontend
                    expertise
                </p>
            </Trans>
            <h2>{t("My stack")}</h2>
            <ul className="flex gap-1">
                {stack.map((element) => (
                    <li>
                        <img src={element.image} alt={element.alt} width="50" />
                    </li>
                ))}
            </ul>
        </main>
    );
}
