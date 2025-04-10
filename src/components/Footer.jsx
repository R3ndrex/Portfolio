import { useTranslation } from "react-i18next";
import GithubImage from "../assets/github-light.svg";
export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="flex border-t-1 border-slate-200 items-center justify-center pt-5 pb-5 gap-5 bg-white">
            <a
                href="https://github.com/R3ndrex/Portfolio"
                target="_blank"
                className="flex justify-center gap-2"
            >
                <span className="flex items-center">{t("Source")}</span>
                <img
                    src={GithubImage}
                    className="github-image"
                    alt="github-image"
                    width="30"
                    loading="lazy"
                />
            </a>
            <div>{t("Lytvyneko Rostyslav")} 2025</div>
        </footer>
    );
}
