import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleNav = () => {
        const nav = document.querySelector(".main-nav");
        if (mobileNavOpen) nav.classList.remove("open");
        else nav.classList.add("open");
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <>
            <div className="baseLayout">
                <header className="top-bar">
                    <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
                        Milo Koskela - Programmer Portfolio
                    </Link>
                    <div>
                        <button
                            onClick={() => {
                                toggleNav();
                            }}
                            className="hamburger"
                        >
                            <div className="hamburger-bar"></div>
                            <div className="hamburger-bar"></div>
                            <div className="hamburger-bar"></div>
                        </button>
                        <nav className="main-nav">
                            <Link
                                onClick={() => {
                                    toggleNav();
                                }}
                                to="/projects"
                            >
                                Projects
                            </Link>
                            <Link
                                onClick={() => {
                                    toggleNav();
                                }}
                                to="/about-me"
                            >
                                About
                            </Link>
                        </nav>
                    </div>
                </header>
                <hr style={{ marginBottom: "1rem" }} />
                <main id="page-content">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Layout;
