import { useLocation, Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Country() {
    const location = useLocation();
    const { code, name } = location.state || {};

    var data = require('../data/countryData.json');
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
                    <b>Area:</b> {country.area} km²
                </div>
                <div className="country-data__population">
                    <b>Population:</b> {country.area} Mio.
                </div>
            </div>
            <div className="country-section country-traditions">
                <div className="general">
                    {country.traditions}
                </div>
                <div className="examples">
                    <b>Tradition examples:</b> {country.traditionExamples.join(", ")}
                </div>
            </div>
            <div className="country-section country-food">
                <div className="general">
                    {country.food}
                </div>
                <div className="examples">
                    <b>Cuisine examples:</b> {country.foodExamples.join(", ")}
                </div>
            </div>
        </div>
    )
}