import { useLocation, Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Country() {
    const location = useLocation();
    const { code, name } = location.state || {};
    const { t } = useTranslation();
    
    const language = localStorage.getItem('i18nextLng') || 'en';
    console.log(language);

    var data = (language === 'en') ? require('../data/countryData_en.json') : require('../data/countryData_de.json');
    const country = data.find((c) => c.code === code);
    console.log(country);

    return (
        <div className="fullpage country">
            <header>
                <Link to="/">
                    <ArrowBackIcon />
                </Link>
                <h1 className="country-name">{name}</h1>
                <span className={`fi fi-${code} country-icon`}></span>
            </header>
            <div className="country-section country-data">
                <div className="country-data__area">
                    <b>{t('area')}:</b> {country.area} km²
                </div>
                <div className="country-data__population">
                    <b>{t('population')}:</b> {country.population} Mio.
                </div>
            </div>
            <div className="country-section country-traditions">
                <div className="general">
                    {country.traditions}
                </div>
                <div className="examples">
                    <b>{t('traditionExamples')}:</b> {country.traditionExamples.join(", ")}
                </div>
            </div>
            <div className="country-section country-food">
                <div className="general">
                    {country.food}
                </div>
                <div className="examples">
                    <b>{t('foodExamples')}:</b> {country.foodExamples.join(", ")}
                </div>
            </div>
        </div>
    )
}