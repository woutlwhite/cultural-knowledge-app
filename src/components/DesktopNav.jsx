import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const DesktopNav = () => {
    const { t } = useTranslation();

    return (
        <aside className="nav desktop">
            <nav className="desktop-navigation">
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">{t("home")}</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about-us">{t("aboutUs")}</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contact">{t("contact")}</NavLink>
            </nav>
        </aside>
    )
}