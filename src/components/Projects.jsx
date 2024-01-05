import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "Project 1"
        },
        {
            title: "Project 2"
        },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projects.map((p) => {return (<ProjectCard key={p.title} project={p}/>)})}
        </section>
    )
}

export default Projects;