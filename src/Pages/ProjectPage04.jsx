import React from "react";
import "../Styles/projectPage.css";
import petsVSBots01 from "../assets/PetsVSBots01.png";

const Project04 = () => {
    return (
        <>
            <h1>Pets VS Bots</h1>
            <div className="project-page-content">
                <div className="text-image-container">
                    <div>
                        <p>
                            This game was made over a weekend for MixJam 2023, where I was
                            given themes 'guns', 'robot' and 'animals'. It's a wave-based
                            shooter with two types of robot enemies.
                        </p>
                        <p>
                            The end result ended up being rather buggy due the short
                            timeframe, but it was a good learning experiment.
                        </p>
                        <ul className="project-status">
                            <li>Status: Finished</li>
                            <li>Tools and Software: Unity, Blender</li>
                            <li>Languages: C#</li>
                        </ul>
                    </div>
                    <img src={petsVSBots01} className="projectImage" />
                </div>
            </div>
        </>
    );
};

export default Project04;
