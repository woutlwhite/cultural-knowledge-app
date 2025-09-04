import "./App.scss";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
    return (
        <Router>
            <DesktopNav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/countries/:countryCode"
                        element={<Country />}
                    />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </main>
            <footer className="app-footer">
                <LanguageSwitcher />
            </footer>
        </Router>
    );
}

export default App;
