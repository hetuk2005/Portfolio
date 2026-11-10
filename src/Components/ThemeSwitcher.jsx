import { useState } from "react";
import "../Style/theme-switcher.css";

const themeOptions = [
  { id: "glassmorphism", label: "Glassmorphism" },
  { id: "neumorphism", label: "Neumorphism" },
  { id: "bento-ui", label: "Bento UI" },
  { id: "claymorphism", label: "Claymorphism" },
  { id: "auror-ui", label: "Auror UI" },
  { id: "liquid-glass", label: "Liquid Glass" },
  { id: "brutalism", label: "Brutalism" },
  { id: "minimalism", label: "Minimalism" },
];

export function ThemeSwitcher({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-switcher">
      <div
        className="theme-switcher__menu"
        id="portfolio-theme-options"
        role="group"
        aria-label="Choose a portfolio style"
        hidden={!open}
      >
        {themeOptions.map((option) => (
          <button
            className={`theme-switcher__option${theme === option.id ? " is-active" : ""}`}
            key={option.id}
            type="button"
            aria-pressed={theme === option.id}
            onClick={() => onThemeChange(option.id)}
          >
            <span>{option.label}</span>
            {theme === option.id && <span aria-hidden="true">✓</span>}
          </button>
        ))}
      </div>

      <button
        className="theme-switcher__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="portfolio-theme-options"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        Styles
        <span className="theme-switcher__indicator" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
    </div>
  );
}
