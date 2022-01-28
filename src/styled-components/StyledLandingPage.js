import styled from "styled-components";

const StyledLandingPage = styled.div`
  position: relative;
  /* background-color: #faf3c0; */
  background-color: white;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  color: #393d3f;
  font-family: "Sora", sans-serif;
  scroll-behavior: smooth;

  & div.info {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    text-transform: uppercase;
    font-weight: bold;
    scroll-snap-align: start;
  }
  & .landing-background {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  /* All should have the bg-color: #faf3c0 - These are for when each page has its own content */
  & .two {
    background-color: #fcde67;
    /* background-color: #faedaf; */
  }
  & .three {
    background-color: #e9f1f7;
    /* background-color: #faedaf; */
  }
  & .four {
    background-color: #ffba01;
    /* background-color: #faedaf; */
  }
`;

export default StyledLandingPage;
