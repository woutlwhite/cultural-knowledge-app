import './App.scss';
import Home from './pages/Home';
import Country from './pages/Country';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:countryCode" element={<Country />} />
        </Routes>
        <footer className='app-footer'>
          {language === 'en' ? (
            <span onClick={() => changeLanguage('de')} className={`fi fi-gb country-icon`}></span>
            )  : (
            <span onClick={() => changeLanguage('en')} className={`fi fi-de country-icon`}></span>
          )}
        </footer>
    </Router>
  );
}

export default App;
