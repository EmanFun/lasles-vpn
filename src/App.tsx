import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";

import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";

import { IntlProvider } from "react-intl";
import { LangType } from "./@types";

const getLocale = (): LangType => {
  const locale = navigator.language;
  return locale.startsWith("es") ? "es" : "en";
};

const messages = {
  en: English,
  es: Spanish,
};

function App() {
  const [locale, setLocale] = useState(getLocale());

  const switchLanguage = (lang: LangType) => {
    setLocale(lang);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Landing switchLanguage={switchLanguage} locale={locale} />
            }
          />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
