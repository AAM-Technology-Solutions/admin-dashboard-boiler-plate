import { useTranslation } from 'react-i18next';

const useTranslate = ():any => {
  const { i18n } = useTranslation();

  const translate = (key: string):string => {
    const currentLanguage = i18n.language;
    if (currentLanguage && i18n?.options?.resources?.[currentLanguage]) {
      const translations: any = i18n.options.resources[currentLanguage];
      if (key in translations) {
        return translations[key];
      }
    }
    // If the translation is not available for the current language, return the key itself
    return key;
  };

  return translate;
};

export default useTranslate;
