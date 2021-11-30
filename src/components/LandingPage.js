import React from "react";
import StyledLandingPage from "../styled-components/StyledLandingPage";
import StyledContainer from "../styled-components/StyledContainer";
import Navigation from "../common-components/Navigation";
import { ReactComponent as Logo } from "../icons/arrow_drop_down_black_24dp.svg";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <StyledLandingPage>
        <StyledContainer>
          <h1>
            welcome<span>,</span>
            <br />
            to the <span>-</span>
            <br />
            project tracker
            <br />
          </h1>
          <p>
            scroll to register <Logo />
          </p>
        </StyledContainer>
      </StyledLandingPage>
    </>
  );
};

export default LandingPage;
