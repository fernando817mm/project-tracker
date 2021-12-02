import styled from "styled-components";

const StyledNavigation = styled.div`
  position: fixed;
  width: 100%;
  height: 5vh;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 2%;
  z-index: 100;
  & .nav-links {
    display: flex;
    width: 12.5%;
    justify-content: space-between;
    align-items: center;
  }
  & a {
    color: #393d3f;
    text-decoration: none;
    font-weight: bolder;
  }
  & .nav-links a::after {
    content: "";
    background: #5bccf6;
    display: block;
    margin-top: 5%;
    height: 0.25em;
    width: 0;
    transition: all ease-in-out 0.15s;
  }
  & .nav-links a:hover::after {
    width: 100%;
  }
  & .nav-links a.active::after {
    width: 100%;
  }
  & a svg {
    margin-left: 0.25%;
    width: 125%;
    height: auto;
    transform: rotate(45deg);
  }
`;

export default StyledNavigation;
