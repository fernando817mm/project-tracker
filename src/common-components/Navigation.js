import React from "react";
import StyledNavigation from "../styled-components/StyledNavigation";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/">
        <h2>
          F<span className="lastInitial">M</span>
        </h2>
      </NavLink>
      <div className="nav-links">
        <a href="#about" className="navButton">
          About
        </a>
        <NavLink to="/projects" className="navButton">
          Projects
        </NavLink>
        <a href="#contact" className="navButton">
          Contact
        </a>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
