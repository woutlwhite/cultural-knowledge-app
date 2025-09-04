import { useTranslation } from "react-i18next";
import { useState } from "react";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(
        localStorage.getItem("i18nextLng") || "en"
    );

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    };

    return (
        <>
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
        </>

    )

}