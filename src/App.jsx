import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";

const App = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;