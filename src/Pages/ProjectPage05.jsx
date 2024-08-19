import React from "react";
import "../Styles/projectPage.css";
import textAdventure01 from "../assets/TextAdventure01.png";
import textAdventure02 from "../assets/TextAdventure02.png";

const Project05 = () => {
    return (
        <>
            <h1>Untitled Text Game</h1>
            <div className="project-page-content">
                <div className="content-container-left-lean">
                    <div>
                        <p>This text-based horror game takes inspiration from old adventure games that run on the console window.</p>
                        <ul className="project-status">
                            <li>Status: On hold</li>
                            <li>Tools and Software: VS Code</li>
                            <li>Languages: C#</li>
                        </ul>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <img src={textAdventure01} />
                        <img src={textAdventure02} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project05;
