import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div id="q" className="page">
        <Navbar />
        <Home />
      </div>
      <div id="a" className="page"></div>
    </div>
  );
}

export default App;
