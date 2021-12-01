import styled from "styled-components";

const StyledNavigation = styled.div`
  position: fixed;
  width: 100%;
  height: 5vh;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .nav-links {
    display: flex;
    width: 10%;
    justify-content: space-around;
    align-items: center;
  }
  & a {
    color: #393d3f;
    text-decoration: none;
    font-weight: 500;
  }
  & a svg {
    margin-left: 0.25%;
    width: 125%;
    height: auto;
    transform: rotate(45deg);
  }
`;

export default StyledNavigation;
