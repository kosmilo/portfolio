import React from "react";
import "../Styles/projectPage.css";
import petsVSBots01 from "../assets/PetsVSBots01.png";

const Project04 = () => {
    return (
        <>
            <h1>Pets VS Bots</h1>
            <div className="project-page-content">
                <div className="content-container-left-lean">
                    <div>
                        <ul className="project-status">
                            <li>Status: Finished</li>
                            <li>Tools and Software: Unity, Blender</li>
                            <li>Languages: C#</li>
                        </ul>
                        <p>
                            This game was made over a weekend for MixJam 2023, where I was given themes 'guns', 'robot' and 'animals'. It's
                            a wave-based shooter with two types of robot enemies.
                        </p>
                        <p>The end result ended up being rather buggy due the short timeframe, but it was a good learning experiment.</p>
                        <p>
                            The game is up on <a href="https://kosmilo.itch.io/pets-vs-bots">Itch.io</a>.
                        </p>
                    </div>
                    <img src={petsVSBots01} className="project-image" />
                </div>
            </div>
        </>
    );
};

export default Project04;
