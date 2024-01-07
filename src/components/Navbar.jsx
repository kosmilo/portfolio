import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      // Check if the user has scrolled exactly the screen height
      setScrolled(scrollPosition >= screenHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile navigation (hamburger menu)
  const toggleNav = () => {
    const nav = document.querySelector("header nav");
    if (isOpen) {
      setTimeout(() => {
        nav.classList.add("mobile-disable");
      }, 400);
    } else {
      nav.classList.remove("mobile-disable");
    }
    setIsOpen(!isOpen);
  };

  return (
    <header className={(isOpen ? "open " : "") + (scrolled ? "solid-bg" : "")}>
      {/* Hamburger icon (visible only on mobile) */}
      <div id="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={toggleNav}
          color="#f2f2f2"
          size={28}
          distance="lg"
        />
      </div>

      {/* Navigation */}
      <nav className="mobile-disable container">
        <ul>
          <li>
            <a
              onClick={() => {
                setIsOpen(false);
              }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsOpen(false);
              }}
              href="#projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
