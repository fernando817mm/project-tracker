import React from "react";
import StyledLandingPage from "../styled-components/StyledLandingPage";
import StyledContainer from "../styled-components/StyledContainer";
import { ReactComponent as Logo } from "../icons/attach_file_black_24dp.svg";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Logo />
      <StyledContainer>
        <h1>
          welcome<span>,</span>
          <br />
          to the <span>-</span>
          <br />
          project tracker
          <br />
        </h1>
        <p>scroll to register</p>
      </StyledContainer>
    </StyledLandingPage>
  );
};

export default LandingPage;
