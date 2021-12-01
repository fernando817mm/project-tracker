import styled from "styled-components";

const StyledLandingPage = styled.div`
  background-color: #faf3c0;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  color: #393d3f;
  & div.info {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    text-transform: uppercase;
    font-family: "Nanum Myeongjo", serif;
    font-weight: bold;
    scroll-snap-align: start;
  }

  /* All should have the bg-color: #faf3c0 - These are for when each page has its own content */
  & .two {
    background-color: #fcde67;
  }
  & .three {
    background-color: #e9f1f7;
  }
  & .four {
    background-color: #ffba01;
  }
`;

export default StyledLandingPage;
