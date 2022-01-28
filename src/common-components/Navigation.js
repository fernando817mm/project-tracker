import React from "react";
import StyledNavigation from "../styled-components/StyledNavigation";
// import { NavLink } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  return (
    <StyledNavigation>
      <a href="#home">
        <h2>
          F<span className="lastInitial">M</span>
        </h2>
      </a>
      <div className="nav-links">
        {/* <NavLink to="/signup" className="navButton">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="navButton">
          Login
        </NavLink> */}
        <a href="#about" className="navButton">
          About
        </a>
        <a href="#projects" className="navButton">
          Projects
        </a>
        <a href="#contact" className="navButton">
          Contact
        </a>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
