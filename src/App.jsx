import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <div className="mb-[5rem] text-6xl title text-center h-[100vh] bg-white flex justify-center items-center">
                <h1>
                    <span> Hi, Im Rostyslav Lytvynenko.</span> <br />
                    <span className="title-profession"> Software Engineer</span>
                </h1>
            </div>
            <MainContent />
            <Footer />
        </>
    );
}

export default App;
