import React from "react";
import "../css/home.css";
import {
  FaAngleDoubleDown,
  FaGithub,
  FaLinkedin,
  FaItchIo,
} from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="container">
      <div className="introduction">
        <div className="title">
          <p>Hello there! I'm</p>
          <h1>Milo Koskela</h1>
        </div>
        <div className="subtitle">
          <hr className="line" />
          <p>Game & Software Developer</p>
        </div>

        {/* Socials */}
        <div className="socials">
          <a href="https://www.linkedin.com/in/milokoskela/" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="https://kosmilo.itch.io/" aria-label="Itch.io">
            <FaItchIo aria-hidden="true" />
          </a>
          <a href="https://github.com/kosmilo" aria-label="Github">
            <FaGithub aria-hidden="true" />
          </a>
        </div>
        
        {/* Scroll hint */}
        <div className="scroll-hint bounce-anim">
          <FaAngleDoubleDown aria-hidden="true" /> <p>Scroll down</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
