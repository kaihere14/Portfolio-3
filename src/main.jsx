import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// SEO: Ensure root div is accessible and semantic
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.setAttribute("role", "main");
  rootElement.setAttribute("aria-label", "Arman Thakur Portfolio Main Content");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
