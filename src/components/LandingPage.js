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
        <StyledContainer className="one">
          <h1>
            welcome<span>,</span>
            <br />
            to the <span>-</span>
            <br />
            project tracker
            <br />
          </h1>
          <p>
            scroll for more information <Logo />
          </p>
        </StyledContainer>
        <div className="info two">
          <h1>First Page</h1>
        </div>
        <div className="info three">
          <h1>Second Page</h1>
        </div>
        <div className="info four">
          <h1>Third Page</h1>
        </div>
      </StyledLandingPage>
    </>
  );
};

export default LandingPage;
