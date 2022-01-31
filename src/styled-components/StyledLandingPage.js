import styled from "styled-components";

const StyledLandingPage = styled.div`
  position: relative;
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
  & .two {
    position: relative;
    z-index: 10;
  }
  & .three {
    position: relative;
    z-index: 10;
  }
  & .four {
    /* background-color: #ffba01; */
    background-color: #fcde67;
  }

  & section.aboutContainer,
  section.photoContainer {
    display: flex;
    & div.aboutTitle,
    div.photoTitle {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 50vh;
      width: 60%;
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
          /* text-shadow: 0.025em 0.025em 0.025em #393d3f; */
        }
      }
    }
    & div.aboutParagraph,
    div.photoParagraph {
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
        box-shadow: 0.2em 0.2em 0.2em #393d3f;
      }
    }
    & div.photoParagraph {
      justify-content: space-evenly;
      & h1 {
        text-align: center;
        font-size: 1.75rem;
        font-weight: 600;
        text-transform: uppercase;
      }
      & p {
        font-size: 1.5rem;
        text-transform: none;
        font-weight: 550;
        & span {
          color: #ffba01;
          text-shadow: 0.02em 0.02em 0.02em #393d3f;
        }
      }
    }
    & div.photoTitle {
      margin: 5% 20% 0 0;
      height: 60vh;
      & .image-row {
        display: flex;
        height: 50%;
        width: 100%;
        margin: 2% 2%;
        padding: 0;
      }
      & img {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        height: 100%;
        width: auto;
        margin: 0 1%;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
      & .image-01 {
        flex: 1;
      }
      & .image-02 {
        flex: 2;
      }
      & .image-03 {
        flex: 1;
      }
      & .image-04 {
        flex: 2;
      }
      & .image-05 {
        flex: 2;
      }
      & .image-06 {
        flex: 2;
        transform: scaleX(-1);
        padding-right: 10%;
        box-shadow: none;
      }
    }
  }
`;

export default StyledLandingPage;
