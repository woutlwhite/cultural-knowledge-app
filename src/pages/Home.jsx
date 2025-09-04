import { useState, useEffect } from 'react';
import { ScrollHintArrow } from '../components/ScrollHintArrow';
import { CountryLink } from '../components/CountryLink';
import { useTranslation } from 'react-i18next';
import { MobileNav } from '../components/MobileNav';

export default function Home() {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Get scroll percentage (0 to 1)
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight;

            // Clamp between 0 and 0.7 for nice effect
            setOpacity(Math.min(scrollFraction, 0.7));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        
    }, []);


    const styles = {
        overlay: { backgroundColor: `rgba(0, 0, 0, ${opacity})` }
    }

    return (
        <div className="fullpage home">
            <header>
                <MobileNav />
            </header>
            {/* Overlay used for darker background when scrolling */}
            <div style={styles.overlay} className="home-overlay"></div>

            {/* Container with content */}
            <div className="home-container">
                <h1 className="home-title">{t('homeTitle')}</h1>
                <p className="home-info-text">
                    {t('homeText')}
                </p>

                <ScrollHintArrow />
            </div>

            <div className="countries-container">
                <CountryLink countryCode="at" countryName={t('austria')} />
                <CountryLink countryCode="sk" countryName={t('slovakia')} />
                <CountryLink countryCode="hu" countryName={t('hungary')} />
                <CountryLink countryCode="si" countryName={t('slovenia')} />
                <CountryLink countryCode="it" countryName={t('italy')} />
                <CountryLink countryCode="ch" countryName={t('switzerland')} />
                <CountryLink countryCode="li" countryName={t('liechtenstein')} />
                <CountryLink countryCode="de" countryName={t('germany')} />
                <CountryLink countryCode="cz" countryName={t('czechRepublic')} />
            </div>
        </div>
    )
}

