import styled from "styled-components";

const StyledNavigation = styled.div`
  position: fixed;
  width: 100%;
  height: 5vh;
  max-width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  & svg {
    margin-left: 0.25%;
    width: 2.25%;
    height: auto;
    transform: rotate(45deg);
  }
`;

export default StyledNavigation;
