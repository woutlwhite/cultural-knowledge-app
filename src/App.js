import "./App.scss";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(
        localStorage.getItem("i18nextLng") || "en"
    );

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    };

    return (
        <Router>
            <aside>
                <nav>
                    <Link to="/home">{t("home")}</Link>
                    <Link to="/about-us">{t("aboutUs")}</Link>
                    <Link to="/contact">{t("contact")}</Link>
                </nav>
            </aside>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/countries/:countryCode"
                        element={<Country />}
                    />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </main>
            <footer className="app-footer">
                {language === "en" ? (
                    <span
                        onClick={() => changeLanguage("de")}
                        className={`fi fi-gb country-icon`}
                    ></span>
                ) : (
                    <span
                        onClick={() => changeLanguage("en")}
                        className={`fi fi-de country-icon`}
                    ></span>
                )}
            </footer>
        </Router>
    );
}

export default App;
