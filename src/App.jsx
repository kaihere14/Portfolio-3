import { useEffect } from "react";
import Portfolio from "./pages/hero";
import {Analytics} from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    if (window.__ONEKO_LOADED__) return;
    window.__ONEKO_LOADED__ = true;

    const script = document.createElement("script");
    script.src = "/oneko/oneko.js"; // ✅ absolute root path
    script.defer = true;

    document.body.prepend(script);
  }, []);

  return (
    <>
      <Portfolio />
      <Analytics />
    </>
  )
}

export default App;
