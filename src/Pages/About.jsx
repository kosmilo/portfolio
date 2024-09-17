import { React } from "react";
import "../Styles/about.css";

const About = () => {
    return (
        <div>
            <h1 style={{ marginBottom: "1rem" }}>Who is Milo?</h1>
            <div>
                <p>Hi, that's me! 👋🏻</p>
                <p>
                    I'm a junior software and game developer from Finland. I currently study game development at a vocational school OSAO, and take physics, chemistry and mathematics, as well as
                    English and Finnish language, at Oulu Upper Secondary School for Adults (Oulun Aikuislukio).
                </p>
                <p>When I'm not coding or studying I like play video games, make 3D models and read. Some of my all time favourite games include Undertale, Portal and the Outer Worlds.</p>
                <p>
                    As of now I'm working along a team of amazing people on a mobile game <i>Bad Trip</i>. Beside that I, of course, have a plethora of ongoing personal projects which I plan on
                    finishing one day.
                </p>
                <p>And if you were to ask what my dream is I'd say it is to one day be a part of a succesfull game studio and develop games that people will remember. </p>
            </div>
        </div>
    );
};

export default About;
