import React from "react";
import StyledLandingPage from "../styled-components/StyledLandingPage";
import StyledContainer from "../styled-components/StyledContainer";
import Wave from "react-wavify";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Wave
        fill="rgba(255, 186, 1, 0.8)"
        paused={false}
        options={{
          height: 60,
          amplitude: 60,
          speed: 0.15,
          points: 4,
        }}
        className="landing-background"
      />
      <Wave
        fill="rgba(252, 222, 103, 0.8)"
        paused={false}
        options={{
          height: 70,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
        className="landing-background"
      />
      <Wave
        fill="rgba(250, 243, 192, 0.8)"
        paused={false}
        options={{
          height: 120,
          amplitude: 40,
          speed: 0.25,
          points: 5,
        }}
        className="landing-background"
      />
      <StyledContainer className="one">
        <h1>
          <div className="title first">
            welcome<span>,</span>
          </div>
          <div className="title second">
            to the <span>-</span>
          </div>
          <div className="title third">project tracker</div>
        </h1>
        <p className="title fourth">
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
