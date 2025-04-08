// hooks/useTranslation.js
import translations from "./component/translations.js";

const useTranslation = () => {
  const lang = localStorage.getItem("lang") || "en";
  return translations[lang];
};

export default useTranslation;
