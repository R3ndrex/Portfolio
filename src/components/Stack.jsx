import ReactImage from "../assets/react.svg";
import ReactRouterImage from "../assets/reactrouter.svg";
import ViteImage from "../assets/vitejs.svg";
import VitestImage from "../assets/vitest.svg";
import CSSImage from "../assets/css_old.svg";
import JavaScriptImage from "../assets/javascript.svg";
import HTMLImage from "../assets/html5.svg";
import { useTranslation } from "react-i18next";

const stack = [
    {
        image: HTMLImage,
        alt: "html",
    },
    {
        image: CSSImage,
        alt: "css",
    },
    {
        image: JavaScriptImage,
        alt: "javascript",
    },
    {
        image: ReactImage,
        alt: "react",
    },
    {
        image: ReactRouterImage,
        alt: "react-router",
    },
    {
        image: ViteImage,
        alt: "vite",
    },
    {
        image: VitestImage,
        alt: "vitest",
    },
];

export default function Stack() {
    const { t } = useTranslation();
    return (
        <section className="bg-slate-100">
            <div className="w-[60%] ml-auto mr-auto p-7">
                <h2 className=" mb-5 text-5xl mb-3 pt-3">{t("My stack")}</h2>
                <ul className="flex gap-3 relative">
                    {stack.map(({ image, alt }) => (
                        <li className="flex items-center" key={alt}>
                            <img src={image} alt={alt} width="50" />
                            <span className="tooltip absolute bg-black text-white top-[100%] p-5 hidden z-1 capitalize">
                                {alt}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
