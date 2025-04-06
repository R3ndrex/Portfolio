import { Trans, useTranslation } from "react-i18next";
import Stack from "./Stack";
import CVImage from "../assets/cv.png";
import ShopppingImage from "../assets/shopping.png";
const projects = [
    {
        title: "CV Generator",
        image: CVImage,
        alt: "cv-generator-image",
        link: "https://github.com/R3ndrex/CV-Generator",
        description:
            "CV-Generator is a web application for creating and customizing your resume. It allows users to choose from pre-made templates that can be customized to suit their personal preferences.",
    },
    {
        title: "Shopping Cart Simulator",
        image: ShopppingImage,
        alt: "shopping-site-image",
        link: "https://github.com/R3ndrex/Shopping-Cart",
        description:
            "Shopping Cart Simulator is a simple and user-friendly web application for simulating online shopping. Product data is fetched from the Fake Store API, and the cart allows you to add, remove, and purchase items.",
    },
];

export default function MainContent() {
    const { t } = useTranslation();
    return (
        <main className="w-[70%] self-center flex flex-col gap-5 bg-white ">
            <section>
                <h2 className="mb-5 text-5xl pb-0 mb-3 pt-3">
                    {t("About Me")}
                </h2>
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
            <section id="projects">
                <h2 className="sticky top-[5rem] mb-5 text-5xl pb-0 mb-3 pt-3">
                    {t("Projects")}
                </h2>
                <ul className="projects flex flex-col gap-5">
                    {projects.map((project) => {
                        return (
                            <li className="project flex flex-col w-[75%]">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    width={800}
                                />
                                <h3 className="text-4xl p-5">
                                    {project.title}
                                </h3>
                                <p className="p-5">{project.description}</p>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}
