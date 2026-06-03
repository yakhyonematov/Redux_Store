import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);

  };

  return {
    t,
    changeLanguage,
    currentLang: i18n.language,
  };
};
