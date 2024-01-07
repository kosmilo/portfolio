import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ParticleBg from "./components/ParticleBg";

function App() {
  return (
    <div>
      <ParticleBg />
      <Navbar />
      <main>
        <Home />
        <div id="projects-bg">
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App;
