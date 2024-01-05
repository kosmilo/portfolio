import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar/>
        <main>
          <Home/>
          <Projects/>
        </main>
    </div>
  );
}

export default App;
