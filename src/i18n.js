import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        settings: "Settings",
        notifications: "Enable Notifications",
        on: "ON",
        off: "OFF",
        language: "Language",
      },
    },
    hi: {
      translation: {
        settings: "सेटिंग्स",
        notifications: "सूचनाएँ सक्षम करें",
        on: "चालू",
        off: "बंद",
        language: "भाषा",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
