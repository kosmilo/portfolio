import React from "react";
import "../Styles/projectPage.css";
import pumkinHead01 from "../assets/pumkinHead.png";

const Project03 = () => {
    return (
        <>
            <h1>Pumpkin Head</h1>
            <div className="project-page-content">
                <div className="text-image-container">
                    <div>
                        <p>
                            Pumpkin Head is a short action platformer in which the player
                            takes the role of a pumpkin headed character trying to save
                            their friend from shadow monsters. It was made as a school
                            asssignement, where we designed and built a 2D platformer with
                            enemies and a few different areas.
                        </p>
                        <ul className="project-status">
                            <li>Status: Finished (Abandoned)</li>
                            <li>Tools and Software: Unity, Krita</li>
                            <li>Languages: C#</li>
                        </ul>
                    </div>
                    <img src={pumkinHead01} className="projectImage" />
                </div>
            </div>
        </>
    );
};

export default Project03;
