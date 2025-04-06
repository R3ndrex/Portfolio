import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return <footer>{t("Lytvyneko Rostyslav")} 2025</footer>;
}
