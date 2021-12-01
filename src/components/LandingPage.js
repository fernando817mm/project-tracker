import React from "react";
import StyledLandingPage from "../styled-components/StyledLandingPage";
import StyledContainer from "../styled-components/StyledContainer";

const LandingPage = () => {
  return (
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
          scroll for more information <div className="scroll-down"></div>
        </p>
      </StyledContainer>
      <div className="info two">
        <h1>Second Page</h1>
      </div>
      <div className="info three">
        <h1>Third Page</h1>
      </div>
      <div className="info four">
        <h1>Fourth Page</h1>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
