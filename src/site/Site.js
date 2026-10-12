import React, {useContext, useEffect} from "react";
import StyleContext from "../contexts/StyleContext";
import {blogSection} from "../portfolio";
import {profile} from "./content";
import {
  Hero,
  Experience,
  Projects,
  Skills,
  Education,
  Certifications,
  Writing,
  Contact
} from "./Sections";
import "./site.scss";

const sections = [
  {id: "experience", label: "Experience", Component: Experience},
  {id: "projects", label: "Projects", Component: Projects},
  {id: "skills", label: "Skills", Component: Skills},
  {id: "education", label: "Education", Component: Education},
  {id: "certifications", label: "Certifications", Component: Certifications},
  {
    id: "writing",
    label: "Writing",
    Component: Writing,
    enabled: blogSection.display
  },
  {id: "contact", label: "Contact", Component: Contact}
].filter(s => s.enabled !== false);

function ThemeToggle() {
  const {isDark, changeTheme} = useContext(StyleContext);
  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={changeTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z" />
        </svg>
      )}
    </button>
  );
}

export default function Site() {
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="brand">
            <span className="brand-slash">~/</span>
            {profile.name.split(" ")[0].toLowerCase()}
          </a>
          <nav className="nav" aria-label="Sections">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container">
        <Hero />
        {sections.map(({id, Component}, i) => (
          <Component key={id} number={String(i + 1).padStart(2, "0")} />
        ))}
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
