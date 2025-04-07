import { useTranslation } from "react-i18next";
import CVImage from "../assets/cv.png";
import ShopppingImage from "../assets/shopping.png";
import CustomSearch from "../assets/googlecustom.png";

const projects = [
    {
        title: "CV Generator",
        image: CVImage,
        alt: "cv-generator-image",
        link: "https://github.com/R3ndrex/CV-Generator",
        live: "https://vercel.com/r3ndrexs-projects/cv-generator",
        description:
            "CV-Generator is a web application for creating and customizing your resume. It allows users to choose from pre-made templates that can be customized to suit their personal preferences.",
    },
    {
        title: "Shopping Cart Simulator",
        image: ShopppingImage,
        alt: "shopping-site-image",
        link: "https://github.com/R3ndrex/Shopping-Cart",
        live: "https://vercel.com/r3ndrexs-projects/shopping-cart",
        description:
            "Shopping Cart Simulator is a simple and user-friendly web application for simulating online shopping. Product data is fetched from the Fake Store API, and the cart allows you to add, remove, and purchase items.",
    },
    {
        title: "Custom Google Search",
        image: CustomSearch,
        alt: "custom-google-search-image",
        link: "https://github.com/R3ndrex/CustomGoogleSearch",
        live: "https://custom-google-search-mu.vercel.app",
        description:
            "This site provides a custom google search with ability to set safe mode removing all 18+ content. Each search is displayed on a unique page using react router, page title changes depending on a search prompt",
    },
];

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projects">
            <h2 className="project-title top-[5rem] mb-5 text-5xl pb-0 mb-3 pt-3">
                {t("Projects")}
            </h2>
            <ul className="relative flex flex-col gap-5">
                {projects.map((project) => (
                    <li className="project p-5 flex flex-col">
                        <img
                            src={project.image}
                            loading="lazy"
                            alt={project.alt}
                        />
                        <h3 className="text-4xl p-5 pl-0">{project.title}</h3>
                        <p className="p-5 pl-0">{t(project.description)}</p>
                        <div className="flex items-center gap-5">
                            <a
                                className="text-xl bg-sky-500 text-white rounded-2xl link pb-2 pt-2 pl-4 pr-4"
                                href={project.link}
                                target="_blank"
                            >
                                {t("Source")}
                            </a>
                            <a
                                className="text-xl bg-sky-500 text-white rounded-2xl link pb-2 pt-2 pl-4 pr-4"
                                href={project.live}
                                target="_blank"
                            >
                                {t("Live")}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
