import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Tokens et socle d’abord : le CSS des composants doit pouvoir les surcharger.
import "./styles/tokens.css";
import "./styles/base.css";
import { App } from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Élément racine introuvable");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
