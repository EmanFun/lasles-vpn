import React from "react";
import { LangType } from "../../@types";
import { useIntl } from "react-intl";

interface LanguageSelectorProps {
  switchLanguage: (lang: LangType) => void;
  currentLanguage: LangType;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  switchLanguage,
}) => {
  const intl = useIntl();
  return (
    <div className="flex gap-2 sm:flex-col sm:gap-1">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-4 py-2 sm:px-5 sm:py-1  sm:rounded-full sm:text-xs rounded ${
          currentLanguage === "en" ? "bg-secondary text-white" : "bg-white "
        }`}
      >
        {intl.formatMessage({ id: "Language.en" })}
      </button>
      <button
        onClick={() => switchLanguage("es")}
        className={`px-4 py-2 sm:px-5 sm:py-1  sm:rounded-full sm:text-xs rounded ${
          currentLanguage === "es" ? "bg-secondary text-white" : "bg-white "
        }`}
      >
        {intl.formatMessage({ id: "Language.es" })}
      </button>
    </div>
  );
};

export default LanguageSelector;
