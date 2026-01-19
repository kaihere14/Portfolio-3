import { useEffect } from "react";
import Portfolio from "./pages/hero";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Dnsworking from "./pages/Blogs/Dnsworking";
import CurlGuide from "./pages/Blogs/CurlGuide";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <div>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/blogs/how-dns-resolution-works"
            element={<Dnsworking />}
          />
          <Route path="/blogs/what-is-curl" element={<CurlGuide />} />
        </Routes>
      </div>
      <Analytics />
    </>
  );
}

export default App;
