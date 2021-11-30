import styled from "styled-components";

const StyledContainer = styled.div`
  width: 75%;
  font-size: 4.5em;
  text-transform: uppercase;
  font-family: "Nanum Myeongjo", serif;
  font-weight: bold;
  letter-spacing: 0.125em;
  line-height: 1.25em;
  /* border: 2px solid red; */
  & p {
    font-size: 0.25em;
    text-transform: lowercase;
    font-weight: 800;
  }
  & span {
    color: #5bccf6;
  }
`;

export default StyledContainer;
