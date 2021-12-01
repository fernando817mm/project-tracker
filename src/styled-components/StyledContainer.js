import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  height: 100vh;
  font-size: 4em;
  text-transform: uppercase;
  font-family: "Nanum Myeongjo", serif;
  font-weight: bold;
  letter-spacing: 0.125em;
  line-height: 1.25em;
  text-align: right;
  scroll-snap-align: start;
  & p {
    font-size: 0.25em;
    text-transform: lowercase;
    font-weight: 800;
    display: flex;
    justify-content: right;
    text-align: right;
    align-items: center;
    width: auto;
    position: relative;
    & svg {
      width: 2.5%;
      height: auto;
    }
  }
  & span {
    color: #5bccf6;
  }

  & .scroll-down {
    height: 2em;
    width: 1.5em;
    position: absolute;
    right: -4%;
    cursor: pointer;
  }

  & .scroll-down::before,
  .scroll-down::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 0.8em;
    width: 0.8em;
    transform: translate(-50%, -100%) rotate(45deg);
    border: 3px solid #5bccf6;
    border-left: transparent;
    border-top: transparent;
    animation: scroll-down 1s ease-in-out infinite;
  }

  & .scroll-down::after {
    top: 20%;
    animation-delay: 0.375s;
  }

  @keyframes scroll-down {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 100%;
    }
  }
`;

export default StyledContainer;
