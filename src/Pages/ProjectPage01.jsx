import React from "react";
import "../Styles/projectPage.css";
import badTrip01 from "../assets/BadTrip01.png";
import badTrip02 from "../assets/BadTrip02.png";

const Project01 = () => {
    return (
        <>
            <h1>Bad Trip</h1>
            <div className="project-page-content">
                <div className="content-container-left-lean">
                    <div>
                        <p>
                            <i>Bad Trip</i> is a Subway Surfers -style actions runner spiced with sick music and surfing. The game is
                            currently in development, and we plan on releasing it for Android.
                        </p>
                        <p>
                            I have worked on a handfull of things in the project, from player movement to the in-game shop, though I'd say
                            my biggest contributions have been integrading Unity's Addressables to the project and handling additive scene
                            loading to reduce load times.
                        </p>
                        <p>
                            I joined midway through the development, and I'm currently the only programmer on the team. Which, I suppose,
                            also makes me the lead programmer by techicality. 🤔
                        </p>
                        <p>
                            The game has a devlog at <a href="https://itch.io/t/2789776/bad-trip-wip">Itch.io</a> where you can find more
                            information on our current progress as well as other people developing the game.
                        </p>
                        <ul className="project-status">
                            <li>Status: In development</li>
                            <li>Tools and Software: Unity</li>
                            <li>Languages: C#</li>
                        </ul>
                    </div>
                    <div className="image-container">
                        <img src={badTrip01} />
                        <img src={badTrip02} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project01;
