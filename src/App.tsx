import { AppDemo } from "./components/AppDemo";
import { Footer } from "./components/Footer";
import { Funders } from "./components/Funders";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Neutrality } from "./components/Neutrality";
import { PromiseBand } from "./components/Promise";

export function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Journey />
        <AppDemo />
        <Neutrality />
        <PromiseBand />
        <Funders />
      </main>
      <Footer />
    </>
  );
}
