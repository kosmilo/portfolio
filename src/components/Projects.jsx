import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import exodusImg from "../imgs/exodus-server-puzzle.png";
import textAdventureImg from "../imgs/text-adventure.png";
import webPortfolioImg from "../imgs/web-portfolio.png";
import pumpkinHeadGameplay from "../imgs/pumpkin-head-gameplay.mp4";
import upsidedownGameplay from "../imgs/upsidedown-gameplay.mp4";
import petsVsBotsGameplay from "../imgs/pets-vs-bots-gameplay.mp4";

const Projects = () => {
  const [filter, setFilter] = useState("");

  const projects = [
    {
      title: "Exodus - Escape from the Lab",
      type: "game",
      graphic: exodusImg,
      status: "Finished (Unreleased)",
      tools: "Unity and Blender",
      langs: "C#",
      github: "https://github.com/kosmilo/Exodus-Escape-from-the-lab",
      description:
        "Exodus is a puzzle horror game where the player is trying to escape an underground laboratory while avoiding the dangerous results of failed human experiments. This was a group project, where I was mainly responsible for the enemy (lab monster) and two of the puzzles. ",
    },
    {
      title: "Pumpkin Head",
      type: "game",
      graphic: pumpkinHeadGameplay,
      video: true,
      status: "On hold",
      tools: "Unity and Krita",
      langs: "C#",
      itch: "https://kosmilo.itch.io/pumpkin-head",
      description:
        "Pumpkin Head is a short action platformer in which the player takes the role of a pumpkin headed character trying to save their friend from shadow monsters. It was made as a school asssignement, where we had to design and build a 2D platformer with enemies and a few levels. ",
    },
    {
      title: "Untitled Text Game",
      type: "game",
      graphic: textAdventureImg,
      status: "Ongoing",
      tools: "VS Code",
      langs: "C#",
      github: "https://github.com/kosmilo/TextAdventure",
      description:
        "This text-based horror game is still in development. It takes inspiration from old text-based adventure games, and runs on the Windows console. ",
    },
    {
      title: "Pets VS Bots",
      type: "game",
      graphic: petsVsBotsGameplay,
      video: true,
      status: "Finished",
      tools: "Unity and Blender",
      langs: "C#",
      itch: "https://kosmilo.itch.io/pets-vs-bots",
      description:
        "This game was made over a weekend for MixJam 2023, where I was given themes 'guns', 'robot' and 'animals'. It's a wave-based shooter with two types of robot enemies. ",
    },
    {
      title: "Web Portfolio",
      type: "web",
      graphic: webPortfolioImg,
      tools: "VS Code",
      langs: "Javascript (React)",
      github: "https://github.com/kosmilo/portfolio",
      description: "This one-page portfolio was made with React. ",
    },
    {
      title: "Upside Down",
      type: "game",
      graphic: upsidedownGameplay,
      video: true,
      status: "Finished (Unreleased)",
      tools: "Unity",
      langs: "C#",
      github: "https://github.com/kosmilo/Upside-Down",
      description:
        "Upside Down is a simple puzzle platformer, and it is one of the first games I've made. In the game the player has to solve puzzles and touch the green platform to get to the next level. It also has cubes that player can push around and two other kinds of platforms; a blue one that switches the gravity, and a pink one that makes the corresponding platform or wall disapear. ",
    },
  ];

  return (
    <section id="projects" className="container">
      <h2>Projects</h2>

      {/* Project filters */}
      <div className="tabs">
        <button
          onClick={() => {
            setFilter("");
          }}
          className={filter == "" ? "selected" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("game");
          }}
          className={filter == "game" ? "selected" : ""}
        >
          Games
        </button>
        <button
          onClick={() => {
            setFilter("web");
          }}
          className={filter == "web" ? "selected" : ""}
        >
          Web
        </button>
      </div>

      <div className="project-list">
        {projects
          .filter((p) => p.type == filter || filter == "")
          .map((p) => {
            return <ProjectCard key={p.title} project={p} />;
          })}
      </div>
    </section>
  );
};

export default Projects;
