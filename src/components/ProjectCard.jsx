import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <section className="project-card ">
      {!project.video ? (
        <img src={project.graphic} />
      ) : (
        <video width="100%" autoPlay="true" muted="true" loop="true">
          <source src={project.graphic} type="video/mp4" />
        </video>
      )}

      <div className="text">
        <h3>{project.title}</h3>
        {project.description !== undefined && <p>{project.description}</p>}
        {project.status !== undefined && <p>Status: {project.status}</p>}
        {project.tools !== undefined && (
          <p>Tools and Software: {project.tools}</p>
        )}
        {project.langs !== undefined && <p>Languages: {project.langs}</p>}
        {project.github !== undefined && (
          <p>
            Link: <a href={project.github}>Github</a>
          </p>
        )}
        {project.itch !== undefined && (
          <p>
            Link: <a href={project.itch}>Itch.io</a>
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
