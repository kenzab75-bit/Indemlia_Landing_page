import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";
import { IconArrowRight } from "./Icons";
import "./Header.css";

export function Header() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${lifted ? " header--lifted" : ""}`}>
      <div className="header__inner shell">
        <a className="header__brand" href="#top" aria-label="Indemlia, accueil">
          <Wordmark size={30} />
        </a>

        <nav className="header__nav" aria-label="Navigation principale">
          <a className="header__link" href="#parcours">
            Le parcours
          </a>
          <a className="header__link" href="#application">
            L’application
          </a>
          <a className="header__link" href="#neutralite">
            Notre neutralité
          </a>
        </nav>

        {/* Porte secondaire, discrète : mutuelles, employeurs, collectivités. */}
        <a className="header__funders" href="#organisations">
          <span>Vous financez pour vos publics</span>
          <IconArrowRight size={15} />
        </a>
      </div>
    </header>
  );
}
