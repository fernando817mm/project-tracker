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
    & svg {
      width: 2.5%;
      height: auto;
    }
  }
  & span {
    color: #5bccf6;
  }
`;

export default StyledContainer;
