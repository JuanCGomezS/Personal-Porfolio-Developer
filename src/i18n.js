import i18n from "i18next";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

i18n.init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en",
  fallbacklng: "en",
  interpolation: {
    escapevalue: false,
  },
});

export default i18n;
