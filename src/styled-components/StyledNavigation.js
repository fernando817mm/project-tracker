import styled from "styled-components";

const StyledNavigation = styled.div`
  height: 5vh;
  max-width: 100%;
  background-color: #faf3c0;
  display: flex;
  align-items: center;
  & svg {
    padding: 2% 1.5%;
    margin-top: 2%;
    width: 2.25%;
    height: auto;
    transform: rotate(45deg);
  }
`;

export default StyledNavigation;
