import "flag-icons/css/flag-icons.min.css";
import { useNavigate } from "react-router-dom";

export const CountryLink = ({countryCode, countryName }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("countries/" + countryCode, { state: { code: countryCode, name: countryName } });
    };

    return (
        <div onClick={handleClick} className="country-link-container">
            <span className={`fi fi-${countryCode} country-icon`}></span>
            <h2 className="country-title">{countryName}</h2>
        </div>
    )
}