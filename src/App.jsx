import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Project01 from "./Pages/ProjectPage01.jsx";
import Project02 from "./Pages/ProjectPage02.jsx";
import Project03 from "./Pages/ProjectPage03.jsx";
import Project04 from "./Pages/ProjectPage04.jsx";
import Project05 from "./Pages/ProjectPage05.jsx";
import Project06 from "./Pages/ProjectPage06.jsx";
import About from "./Pages/About.jsx";
import Layout from "./Components/Layout";

const App = () => {
    return (
        <BrowserRouter basename="/portfolio/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<Layout />}>
                    {/* Projects */}
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/bad-trip" element={<Project01 />} />
                    <Route
                        path="/projects/exodus-escape-from-the-lab"
                        element={<Project02 />}
                    />
                    <Route path="/projects/pumpkin-head" element={<Project03 />} />
                    <Route path="/projects/pets-vs-bots" element={<Project04 />} />
                    <Route path="/projects/untitled-text-game" element={<Project05 />} />
                    <Route path="/projects/upside-down" element={<Project06 />} />
                    {/* Posts */}

                    {/* About Me */}
                    <Route path="/about-me" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
