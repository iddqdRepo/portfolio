import React from "react";
import Particles from "react-particles-js";
import "../styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="sticky">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#timeline">Work</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <div className="animation start-home"></div>
      </nav>
    </>
  );
};

export default Navbar;
