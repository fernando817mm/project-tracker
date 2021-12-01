import React from "react";
import { ReactComponent as Logo } from "../icons/attach_file_black_24dp.svg";
import StyledNavigation from "../styled-components/StyledNavigation";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;