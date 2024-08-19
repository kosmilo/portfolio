import React from "react";
import "../Styles/projectPage.css";
import shelving01 from "../assets/Shelving01.png";
import shelvingGameplay from "../assets/ShelvingGameplay.mp4";

const Project03 = () => {
    return (
        <>
            <h1>Shelving</h1>
            <div className="project-page-content">
                <div className="content-container-left-lean">
                    <div>
                        <p>
                            <i>Shelving</i> is an entry for Trijam #283 where the goal was to have a finished game within just three hours.
                            All programming and visuals were done by me, though I did use premade assets for sound effects and music as the
                            rules allowed. In the end I went 20 minutes over the three hours, making the total development time exactly 200
                            minutes.
                        </p>
                        <p>The game itself is not very complicated:</p>
                        <blockquote cite="https://kosmilo.itch.io/shelving">
                            Ghosts are being a menace and dropping your books all over the library. Grab them and put them back to the
                            shelves.
                        </blockquote>
                        <blockquote cite="https://kosmilo.itch.io/shelving">
                            Silverfish will eat your books, so don't let them get to the shelves! You can pick them up and throw them into
                            the fireplace to get rid of them.
                        </blockquote>
                        <p>
                            The theme of the jam was "grabbing mechanic", and the game is up on{" "}
                            <a href="https://kosmilo.itch.io/shelving">Itch.io</a>.
                        </p>
                        <ul className="project-status">
                            <li>Status: Finished</li>
                            <li>Completed on: 19/8/2024</li>
                            <li>Tools and Software: Unity, Krita</li>
                            <li>Languages: C#</li>
                        </ul>
                    </div>
                    <img src={shelving01} className="project-image" />
                </div>
            </div>
            <div className="video-container">
                <video controls disablePictureInPicture muted controlsList="nodownload">
                    <source src={shelvingGameplay} type="video/mp4" />
                    Could't display video, no browser support :/
                </video>
            </div>
        </>
    );
};

export default Project03;
