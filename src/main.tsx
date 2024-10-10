import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";

import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";

import { IntlProvider } from "react-intl";

const getLocale = (): "es" | "en" => {
  const locale = navigator.language;
  return locale.startsWith("es") ? "es" : "en";
};

const messages = {
  en: English,
  es: Spanish,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntlProvider locale={getLocale()} messages={messages[getLocale()]}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </IntlProvider>
  </StrictMode>
);
