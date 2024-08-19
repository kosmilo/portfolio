import React from "react";
import "../Styles/projectPage.css";
import exodus01 from "../assets/ExodusEscapeFromTheLab01.png";
import exodus02 from "../assets/ExodusEscapeFromTheLab02.png";

const Project02 = () => {
    return (
        <>
            <h1>Exodus: Escape from the Lab</h1>
            <div className="project-page-content">
                <p>
                    <i>Exodus: Escape from the Lab</i> is a puzzle horror game where the player is trying to escape an underground
                    laboratory while avoiding the dangerous results of failed human experiments. This was a school project, where I was
                    mainly responsible for the enemy and two of the puzzles.
                </p>
                <p>
                    This was the third game I've made, and the first 3D game I worked on. There was still much learning when developing, and
                    there are many things I would do differently now.
                </p>
                <ul className="project-status">
                    <li>Status: Finished (Unreleased)</li>
                    <li>Tools and Software: Unity, Blender</li>
                    <li>Languages: C#</li>
                </ul>
                <div className="image-container">
                    <img src={exodus01} />
                    <img src={exodus02} />
                </div>
            </div>
        </>
    );
};

export default Project02;
