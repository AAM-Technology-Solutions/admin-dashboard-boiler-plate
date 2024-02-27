/* eslint-disable @typescript-eslint/explicit-function-return-type */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import rawTranslations from "./translation.json";
// Define the shape of your translation JSON
type RawTranslations = Record<string, Record<string, string>>;
// Transform the raw translations to the i18next format
const transformTranslations = (raw: RawTranslations) => {
  const languages: Record<string, Record<string, string>> = {};

  Object.keys(raw).forEach((key) => {
    Object.keys(raw[key]).forEach((lang) => {
      languages[lang] = languages[lang] || {};
      languages[lang][key] = raw[key][lang];
    });
  });

  return languages;
};

const translations = transformTranslations(rawTranslations);

void i18n.use(initReactI18next).init({
  resources: translations,
  lng: localStorage.getItem('local')??"en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
