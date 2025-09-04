import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(
        localStorage.getItem("i18nextLng") || "en"
    );

    const changeLanguage = (l) => {
        setLanguage(l);
        i18n.changeLanguage(l);
        localStorage.setItem("i18nextLng", l);
    };

    return (
        <>
            {language === "en" ? (
                <span
                    onClick={() => changeLanguage("de")}
                    className={`fi fi-de country-icon`}
                    ></span>
            ) : (
                <span
                    onClick={() => changeLanguage("en")}
                    className={`fi fi-gb country-icon`}
                ></span>
            )}
        </>

    )

}