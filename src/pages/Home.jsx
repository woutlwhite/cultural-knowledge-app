import { useState, useEffect } from 'react';
import { ScrollHintArrow } from '../components/ScrollHintArrow';
import { CountryLink } from '../components/CountryLink';

export default function Home() {

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
            {/* Overlay used for darker background when scrolling */}
            <div style={styles.overlay} className="home-overlay"></div>

            {/* Container with content */}
            <div className="home-container">
                <h1 className="home-title">Cultural Knowledge</h1>
                <p className="home-info-text">
                    Entdecke Länder aus aller Welt – mit spannenden Fakten, Bildern und kulturellen Highlights.
                    Klicke einfach auf eine Länder-Kachel und erfahre auf der Detailseite alles Wissenswerte über dieses Reiseziel.
                </p>

                <ScrollHintArrow />
            </div>

            <div className="countries-container">
                <CountryLink countryCode="at" countryName="Austria" />
                <CountryLink countryCode="sk" countryName="Slovakia" />
                <CountryLink countryCode="hu" countryName="Hungary" />
                <CountryLink countryCode="si" countryName="Slovenia" />
                <CountryLink countryCode="it" countryName="Italy" />
                <CountryLink countryCode="ch" countryName="Switzerland" />
                <CountryLink countryCode="li" countryName="Liechtenstein" />
                <CountryLink countryCode="de" countryName="Germany" />
                <CountryLink countryCode="cz" countryName="Czech Republic" />
            </div>
        </div>
    )
}

