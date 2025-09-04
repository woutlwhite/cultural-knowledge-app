import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const MobileNav = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(menuOpen) {
            // trigger animation on mount
            requestAnimationFrame(() => setAnimate(true));
        } else {
            setAnimate(false);
        }
    }, [menuOpen]);
    
    return (
        <div className="nav mobile">
            {menuOpen 
            ? (
                <div className={`mobile-navigation ${animate ? "expanded" : ""}`} id="mobileNavigation">
                    <div className="mobile-navigation-overlay" onClick={() => setMenuOpen(!menuOpen)}></div>
                    <nav>
                        <NavLink onClick={() => setMenuOpen(!menuOpen)} className={({ isActive }) => isActive ? "active" : ""} to="/">{t("home")}</NavLink>
                        <NavLink onClick={() => setMenuOpen(!menuOpen)} className={({ isActive }) => isActive ? "active" : ""} to="/about-us">{t("aboutUs")}</NavLink>
                        <NavLink onClick={() => setMenuOpen(!menuOpen)} className={({ isActive }) => isActive ? "active" : ""} to="/contact">{t("contact")}</NavLink>
                    </nav>
                    <LanguageSwitcher />
                    <span id="closeMenu" className="close-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <CloseIcon />
                    </span>
                </div>
            )
            : (
                <span id="openMenu" className="open-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <MenuIcon />
                </span>
            )}
        </div>
    )
}