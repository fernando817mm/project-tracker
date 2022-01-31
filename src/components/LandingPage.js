import React from "react";
import StyledLandingPage from "../styled-components/StyledLandingPage";
import StyledContainer from "../styled-components/StyledContainer";
import Wave from "react-wavify";
import portrait from "./../images/portrait.jpeg";
import benito from "./../images/benito.jpeg";
import droplet from "./../images/droplet.jpeg";
import hike from "./../images/hike.jpeg";
import mexico from "./../images/mexico.jpeg";
import tree from "./../images/tree.jpeg";
import squat from "./../images/squat.svg";

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
      <div className="bg">
        <Wave
          fill="rgba(255, 186, 1, 0.8)"
          paused={false}
          options={{
            height: 60,
            amplitude: 60,
            speed: 0.15,
            points: 4,
          }}
          className="about-background"
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
          className="about-background"
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
          className="about-background"
        />
        <div className="info two" id="about">
          <section className="aboutContainer">
            <div className="aboutTitle">
              <h1>About me</h1>
              <h2>
                <span>¡Hola! I'm Fernando Mauricio Martinez</span> (he/him) - a
                Texas-born, first-generation Mexican-American Full-Stack
                Developer
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
      </div>
      <div className="bg">
        <Wave
          fill="rgba(34, 116, 165, 0.8)"
          paused={false}
          options={{
            height: 60,
            amplitude: 60,
            speed: 0.15,
            points: 4,
          }}
          className="photo-background"
        />
        <Wave
          fill="rgba(91, 204, 246, 0.8)"
          paused={false}
          options={{
            height: 70,
            amplitude: 40,
            speed: 0.25,
            points: 3,
          }}
          className="photo-background"
        />
        <Wave
          fill="rgba(233, 241, 247, 0.8)"
          paused={false}
          options={{
            height: 120,
            amplitude: 40,
            speed: 0.25,
            points: 5,
          }}
          className="photo-background"
        />
        <div className="info three" id="projects">
          <section className="photoContainer">
            <div className="photoParagraph">
              <h1>Photography</h1>
              <p>
                When I'm not coding, I like to spend as much time as possible
                outside, exploring with my camera & dog (<span>Benito</span>). I
                shoot on a <span>Canon EOS Rebel T4i</span>, and sometimes just
                on my phone.
              </p>
            </div>
            <div className="photoTitle">
              <div className="image-row">
                <img
                  className="image image-01"
                  src={benito}
                  alt="Happy dog laying on ground facing up"
                />
                <img
                  className="image image-02"
                  src={droplet}
                  alt="Water droplet on tip of branch with blurry background"
                />
                <img
                  className="image image-06"
                  src={squat}
                  alt="Male character svg"
                />
              </div>
              <div className="image-row">
                <img
                  className="image image-03"
                  src={hike}
                  alt="Dog on hike with harness looking away from camera. Large hills in background"
                />
                <img
                  className="image image-04"
                  src={mexico}
                  alt="Sidewalk in Mexico with graffiti"
                />
                <img
                  className="image image-05"
                  src={tree}
                  alt="Sun rays shining through leaf-less tree in the winter"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="info four" id="contact">
        <h1>Contact</h1>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
