import React from "react";
import StyledLandingPage from "../styled-components/StyledLandingPage";
import StyledContainer from "../styled-components/StyledContainer";
import Wave from "react-wavify";
import portrait from "./../images/portrait.jpeg";

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
      <StyledContainer className="one" id="home">
        <h1>
          <div className="title first">Fernando</div>
          <div className="title second">Martinez</div>
          <div className="title third">Full Stack Developer</div>
        </h1>
        <p className="title fourth">
          scroll for more information<div className="scroll-down"></div>
        </p>
      </StyledContainer>
      <div className="info two" id="about">
        <section className="aboutContainer">
          <div className="aboutTitle">
            <h1>About me</h1>
            <h2>
              <span>¡Hola! I'm Fernando Mauricio Martinez</span> (he/him) - a
              Texas-born, first-generation Mexican-American Full-Stack Developer
            </h2>
          </div>
          <div className="aboutParagraph">
            <img
              src={portrait}
              alt="Fernando with Colorado mountains in the background."
            />
            <p>
              After graduating high school with a STEM endorsement, I attended
              and graduated Bloom Institute of Technology, formerly known as
              Lambda School. Reinforcing and adding new skills to my arsenal.
              Skills such as (in no specific order); HTML, CSS, Javascript,
              React, Redux, Git, Less, Node, SQL, Python, etc.
            </p>
          </div>
        </section>
      </div>
      <div className="info three" id="projects">
        <h1>Projects</h1>
      </div>
      <div className="info four" id="contact">
        <h1>Contact</h1>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
