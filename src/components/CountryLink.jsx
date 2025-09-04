import "flag-icons/css/flag-icons.min.css";
import {Link} from "react-router-dom";

export const CountryLink = ({countryCode, countryName }) => {
    return (
        <Link 
            to={`/countries/${countryCode}`}
            state={{code: countryCode, name: countryName }}
            className="country-link-container">
                
            <span className={`fi fi-${countryCode} country-icon`}></span>
            <h2 className="country-title">{countryName}</h2>
        </Link>
    )
}