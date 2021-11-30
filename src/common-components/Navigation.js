import React from "react";
import { ReactComponent as Logo } from "../icons/attach_file_black_24dp.svg";
import StyledNavigation from "../styled-components/StyledNavigation";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Logo />
      <div className="nav-links">
        <a href="#" className="navLink"></a>
        <a href="#" className="navLink"></a>
        <a href="#" className="navLink"></a>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
