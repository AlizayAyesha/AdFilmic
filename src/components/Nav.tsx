"use client";

import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <a className="nav-logo" href="#hero">
        AdFilmic
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Work</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="theme-btn" onClick={toggleTheme} type="button">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
