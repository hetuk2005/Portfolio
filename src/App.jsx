import { useEffect, useState } from "react";

import "./App.css";
import { Home } from "./Pages/home";
import { BentoHome } from "./Components/bentoHome";
import { ClayHome } from "./Components/clayHome";
import { ThemeSwitcher } from "./Components/themeSwitcher";

const themes = [
  "glassmorphism",
  "neumorphism",
  "bento-ui",
  "claymorphism",
  "auror-ui",
  "liquid-glass",
  "brutalism",
  "minimalism",
];

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return themes.includes(savedTheme) ? savedTheme : "glassmorphism";
  } catch {
    return "glassmorphism";
  }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still works for this visit if storage is unavailable.
    }
  }, [theme]);

  return (
    <div className="portfolio-app" data-theme={theme}>
      <div className="background"></div>
      <div className="background1"></div>
      <div className="background2"></div>
      {theme === "claymorphism" ? (
        <ClayHome />
      ) : theme === "bento-ui" ? (
        <BentoHome />
      ) : (
        <main className="glass">
          <Home />
        </main>
      )}
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
    </div>
  );
}

export default App;
