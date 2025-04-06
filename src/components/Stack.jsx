import ReactImage from "../assets/react.svg";
import ReactRouterImage from "../assets/reactrouter.svg";
import ViteImage from "../assets/vitejs.svg";
import VitestImage from "../assets/vitest.svg";
import CSSImage from "../assets/css_old.svg";
import HTMLImage from "../assets/javascript.svg";
import JavaScriptImage from "../assets/html5.svg";
import { useTranslation } from "react-i18next";

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

export default function Stack() {
    const { t } = useTranslation();
    return (
        <section>
            <h2 className=" mb-5 text-5xl mb-3 pt-3">{t("My stack")}</h2>
            <ul className="flex gap-1">
                {stack.map(({ image, alt }) => (
                    <li className="flex items-center" key={alt}>
                        <img src={image} alt={alt} width="50" />
                    </li>
                ))}
            </ul>
        </section>
    );
}
