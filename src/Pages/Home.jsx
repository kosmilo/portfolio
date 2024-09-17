import { React } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/home.css";
import FaGithub from "../assets/FaGithub.svg";
import FaItchIo from "../assets/FaItchIo.svg";
import FaLinkedin from "../assets/FaLinkedin.svg";
import catImg from "../assets/cat.png";

const Home = () => {
    return (
        <div className="content-halved" style={{ padding: "20px 40px" }}>
            {/* Left side */}
            <div>
                <h1 style={{ fontSize: "inherit", marginBottom: "8px" }}>
                    Hello there! My name is
                    <br />
                    <span style={{ fontSize: "40px", fontWeight: "bold" }}>Milo Koskela</span>
                </h1>
                <p>
                    and I'm a game and software developer from Finland. I also go by the alias Kosmilo. Here I've collected some of my projects and other relevant and
                    not-so-relevant-but-still-kinda-fun content.
                </p>
                <p>milokoskela@gmail.com</p>

                {/* Socials */}
                <div className="socials">
                    <a href="https://www.linkedin.com/in/milokoskela/" aria-label="LinkedIn">
                        <img src={FaLinkedin} />
                    </a>
                    <a href="https://kosmilo.itch.io/" aria-label="Itch.io">
                        <img src={FaItchIo} />
                    </a>
                    <a href="https://github.com/kosmilo" aria-label="Github">
                        <img src={FaGithub} />
                    </a>
                </div>
                <img src={catImg} id="cat" style={{ left: "2px", transform: "scaleX(-1)" }} />
            </div>
            {/* Right side */}
            <div>
                <nav className="home-nav">
                    <NavLink to={"/projects"}>Projects</NavLink>
                    <NavLink to={"/about-me"}>About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Home;
