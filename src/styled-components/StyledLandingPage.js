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
    /* background-color: #e9f1f7; */
    background-color: #faedaf;
  }
  & .four {
    /* background-color: #ffba01; */
    background-color: #fcde67;
  }

  & section.aboutContainer {
    display: flex;
    & div.aboutTitle {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 50vh;
      max-width: 60%;
      padding: 0 5%;
      & h1 {
        text-align: center;
        font-size: 1.75rem;
      }
      & h2 {
        text-align: right;
        text-transform: none;
        font-size: 2.5rem;
        & span {
          color: #5bccf6;
          text-shadow: 0.025em 0.025em 0.025em #393d3f;
        }
      }
    }
    & div.aboutParagraph {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 40%;
      text-transform: none;
      font-weight: 300;
      font-size: 1.5rem;
      padding: 0 5%;
      & img {
        width: 100%;
        margin-bottom: 5%;
        /* outline: 0.25em solid #5bccf6; */
        /* outline-offset: 0.25em; */
        box-shadow: 0.2em 0.2em 0.2em #393d3f;
      }
    }
  }
`;

export default StyledLandingPage;
