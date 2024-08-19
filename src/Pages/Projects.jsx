import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/projects.css";
import exodusImg from "../assets/ExodusEscapeFromTheLab02.png";
import badTripImg from "../assets/BadTrip02.png";
import shelvingImg from "../assets/Shelving01.png";
import petsVSBotsImg from "../assets/PetsVSBots01.png";
import textAdventureImg from "../assets/TextAdventure02.png";
import upsideDownImg from "../assets/UpsideDown02.png";

const projectList = [
    {
        name: "Bad Trip",
        url: "bad-trip",
        description: "Level-based runner",
        image: badTripImg,
        imageAlt: "Screenshot from the game Bad Trip featuring player character surfing between rocks.",
        tags: ["Team"],
    },
    {
        name: "Exodus: Escape from the Lab",
        url: "exodus-escape-from-the-lab",
        description: "Puzzle horror game",
        image: exodusImg,
        imageAlt: "Dirty laboratory room from the game Exodus: Escape from the Lab with the player's inventory on the side.",
        tags: ["Team"],
    },
    {
        name: "Shelving",
        url: "shelving",
        description: "A game made in 3 hours and 20 minutes for Trijam #283",
        image: shelvingImg,
        imageAlt: "Screenshot from the game.",
        tags: ["GameJam", "Published", "Solo"],
    },
    {
        name: "Pets VS Bots",
        url: "pets-vs-bots",
        image: petsVSBotsImg,
        description: "Game entry for MixJam 2023",
        imageAlt: "Screenshot from the game Pets VS Bots featuring a low poly cat with two guns on it's back.",
        tags: ["GameJam", "Published", "Solo"],
    },
    {
        name: "Untitled Text Game",
        url: "untitled-text-game",
        description: "Text based horror game that runs on the Windows console",
        image: textAdventureImg,
        imageAlt: "",
        tags: ["Solo"],
    },
    {
        name: "Upside Down",
        url: "upside-down",
        description: "Puzzle platformer build around the mechanic of being able to reverse gravity",
        image: upsideDownImg,
        imageAlt: "Screenshot from the game Upside Down featuring one of the puzzles.",
        tags: ["Published", "Solo"],
    },
];

const Projects = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const SelectTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            if (selectedTags.includes("Team") && tag == "Solo") setSelectedTags([...selectedTags.filter((t) => t !== "Team"), tag]);
            else if (selectedTags.includes("Solo") && tag == "Team") setSelectedTags([...selectedTags.filter((t) => t !== "Solo"), tag]);
            else {
                setSelectedTags([...selectedTags, tag]);
            }
        }
    };

    const FilterProject = (project) => {
        let hasTags = true;
        selectedTags.forEach((tag) => {
            hasTags = project.tags.includes(tag) && hasTags;
        });
        return hasTags ? (
            <ProjectCard
                url={project.url}
                name={project.name}
                description={project.description}
                headerImage={project.image}
                headerImageAlt={project.imageAlt}
            />
        ) : null;
    };

    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of the projects I've been a part of.</p>
            {/* Tag list */}
            <div className="tag-container">
                <ul className="tag-list">
                    <li>
                        <TagButton
                            name="Solo"
                            isSelected={selectedTags.includes("Solo")}
                            SelectTag={() => {
                                SelectTag("Solo");
                            }}
                        />
                    </li>
                    <li>
                        <TagButton
                            name="Team"
                            isSelected={selectedTags.includes("Team")}
                            SelectTag={() => {
                                SelectTag("Team");
                            }}
                        />
                    </li>
                    <li>
                        <TagButton
                            name="Game Jam &#x23F3;"
                            isSelected={selectedTags.includes("GameJam")}
                            SelectTag={() => {
                                SelectTag("GameJam");
                            }}
                        />
                    </li>
                    <li>
                        <TagButton
                            name="Published &#x1F3C1;"
                            isSelected={selectedTags.includes("Published")}
                            SelectTag={() => {
                                SelectTag("Published");
                            }}
                        />
                    </li>
                </ul>
            </div>

            {/* Project list */}
            <ul className="project-list">
                {projectList.map((project) => {
                    return selectedTags.length == 0 ? (
                        <ProjectCard
                            url={project.url}
                            name={project.name}
                            description={project.description}
                            headerImage={project.image}
                            headerImageAlt={project.imageAlt}
                        />
                    ) : (
                        FilterProject(project)
                    );
                })}
            </ul>
        </div>
    );
};

const TagButton = ({ name, isSelected, SelectTag }) => {
    return (
        <button onClick={SelectTag} className={isSelected == true ? "selected" : ""}>
            {name}
        </button>
    );
};

const ProjectCard = ({ url, name, description, headerImage, headerImageAlt }) => {
    return (
        <li className="project-card">
            <Link to={"/projects/" + url}>
                <div className="project-image-container">
                    <img src={headerImage} alt={headerImageAlt} />
                </div>
                <div className="project-description-container">
                    <span>{name}</span>
                    <hr style={{ marginBottom: "0.5rem", marginTop: "2px" }} />
                    <p>{description}</p>
                </div>
            </Link>
        </li>
    );
};

export default Projects;
