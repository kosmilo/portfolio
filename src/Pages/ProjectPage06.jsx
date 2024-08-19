import React from "react";
import "../Styles/projectPage.css";
import upsideDown01 from "../assets/UpsideDown01.png";
import upsideDown02 from "../assets/UpsideDown02.png";
import upsideDownGameplay from "../assets/UpsideDownGameplay.mp4";

const Project06 = () => {
    return (
        <>
            <h1>Upside Down</h1>
            <div className="project-page-content">
                <div className="content-container-left-lean">
                    <div>
                        <p>
                            Upside Down is a simple puzzle platformer that plays around the mechanic of being able to reverse gravity. The
                            goal of the game is to touch the green platform to get to the next level. It also has cubes that player can push
                            around and two other kinds of platforms; a blue one that switches the gravity, and a pink one that makes the
                            corresponding platform or wall disapear.
                        </p>
                        <p>
                            The goal of this project was to get familiar with basics of Unity. The finished game can be found{" "}
                            <a href="https://kosmilo.itch.io/upside-down">here on Itch.io</a>.
                        </p>
                        <ul className="project-status">
                            <li>Status: Finished</li>
                            <li>Tools and Software: Unity, Krita</li>
                            <li>Languages: C#</li>
                        </ul>

                        <div className="video-container" style={{marginTop:"4rem"}}>
                            <video controls disablePictureInPicture muted controlsList="nodownload">
                                <source src={upsideDownGameplay} type="video/mp4" />
                                Could't display video, no browser support :/
                            </video>
                        </div>
                    </div>
                    <div>
                        <img src={upsideDown01} className="project-image" style={{ marginBottom: "2rem" }} />
                        <img src={upsideDown02} className="project-image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project06;
