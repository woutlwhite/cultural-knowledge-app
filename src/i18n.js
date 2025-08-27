import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        homeTitle: "Cultural Knowledge",
        homeText: "Discover countries from all over the world – with exciting facts, pictures, and cultural highlights. Simply click on a country tile and learn everything you need to know about this destination on the details page.",
        country: "Country",
        area: "Area",
        population: "Population",
        traditionExamples: "Tradition examples",
        foodExamples: "Cuisine Examples",
      }
    },
    de: {
      translation: {
        homeTitle: "Kulturelles Wissen",
        homeText: "Entdecke Länder aus aller Welt – mit spannenden Fakten, Bildern und kulturellen Highlights. Klicke einfach auf eine Länder-Kachel und erfahre auf der Detailseite alles Wissenswerte über dieses Reiseziel.",
        country: "Land",
        area: "Fläche",
        population: "Bevölkerung",
        traditionExamples: "Beispiele von Traditionen",
        foodExamples: "Beispiele aus der lokalen Küche",
      }
    }
  },

  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // react already escapes
  }
});

export default i18n;