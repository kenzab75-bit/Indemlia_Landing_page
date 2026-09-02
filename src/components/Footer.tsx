import { Wordmark } from "./Logo";
import { IconInfo } from "./Icons";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer is-deep">
      <div className="footer__inner shell">
        <div className="footer__brand">
          <Wordmark size={30} />
          <p className="footer__baseline">
            Le copilote neutre des victimes d’accident de la route.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Liens de bas de page">
          <a href="#parcours">Le parcours</a>
          <a href="#application">L’application</a>
          <a href="#neutralite">Notre neutralité</a>
          <a href="#organisations">Organisations</a>
        </nav>

        <p className="footer__legal">
          <IconInfo size={16} className="icon" />
          <span>
            Indemlia délivre une <strong>information générale</strong> sur le
            parcours d’indemnisation. Il ne fournit ni conseil juridique ni
            conseil médical individualisé, et ne se substitue ni à un avocat, ni
            à un médecin, ni à un médecin-conseil de victime.
          </span>
        </p>

        <div className="footer__base">
          <p>© {new Date().getFullYear()} Indemlia</p>
          <nav className="footer__minor" aria-label="Informations légales">
            {/* TODO : brancher sur les pages légales une fois rédigées. */}
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Accessibilité</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
