import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="flex justify-center mt-5">
            {t("Lytvyneko Rostyslav")} 2025
        </footer>
    );
}
