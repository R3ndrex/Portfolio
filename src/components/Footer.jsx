import { useTranslation } from "react-i18next";
import GithubImage from "../assets/github-light.svg";
export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="flex border-t-1 border-slate-200 self-center w-[60%] flex-col items-center pt-5 pb-5 gap-5 bg-white">
            <a
                href="https://github.com/R3ndrex/Portfolio"
                target="_blank"
                className="flex justify-center gap-5"
            >
                <span className="flex items-center">Source</span>
                <img src={GithubImage} alt="github-image" width="50" />
            </a>
            <div>{t("Lytvyneko Rostyslav")} 2025</div>
        </footer>
    );
}
