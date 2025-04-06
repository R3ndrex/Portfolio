import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <div className="mb-[5rem] text-6xl title text-center h-[100vh] bg-white flex justify-center items-center">
                <h1>
                    <span>
                        {" "}
                        {t("Hi, Im Rostyslav Lytvynenko.")} <br />
                    </span>
                    <span className="title-profession">
                        {t("Software Engineer")}
                    </span>
                </h1>
            </div>
            <MainContent />
            <Footer />
        </>
    );
}

export default App;
