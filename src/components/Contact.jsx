import LinkedInImage from "../assets/linkedin.svg";
import MailImage from "../assets/email.svg";
import GithubImage from "../assets/github-light.svg";
import { useTranslation } from "react-i18next";

const contact = [
    {
        icon: LinkedInImage,
        data: "https://www.linkedin.com/in/r3ndrex",
    },
    {
        icon: MailImage,
        data: "litvinenkorostislav222@gmail.com",
    },
    {
        icon: GithubImage,
        data: "https://github.com/R3ndrex",
    },
];

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section className="bg-slate-100">
            <div className="w-[60%] ml-auto mr-auto p-7">
                <h2 className="mb-5 text-5xl pb-0 mb-3 pt-3">{t("Contact")}</h2>
                <p className="text-xl pb-5">
                    {t(
                        "Feel free to contact me or check me out on other platforms"
                    )}
                </p>
                <ul className="border-white border-4 border-l-slate-300 p-5">
                    {contact.map(({ icon, data }) => (
                        <li className="flex gap-5 text-xl">
                            <img src={icon} alt="contact-icon" width={20} />{" "}
                            <a
                                className="text-sky-400 break-all"
                                href={
                                    data.includes("gmail.com")
                                        ? `https://mail.google.com/mail/?view=cm&to=${data}`
                                        : data
                                }
                                target="_blank"
                            >
                                {data}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
