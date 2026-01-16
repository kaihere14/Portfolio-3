import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Portfolio from "./pages/hero";

const App = () => {
  return (
    <div>
      <Portfolio />
      <Analytics />
    </div>
  );
};


export default App;