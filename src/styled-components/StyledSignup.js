import styled from "styled-components";

const StyledSignup = styled.div`
  position: relative;
  width: 50%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  /* background-color: rgb(252, 222, 103); */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0 0.1em 0.4em; */
  z-index: 10;

  & .img-box {
    position: relative;
    width: 50%;
    height: 100%;
  }

  & .img-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 1;
  }

  & .img-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  & .content-box .form-box {
    width: 100%;
  }

  & .content-box .form-box h2 {
    width: 100%;
    color: #393d3f;
    font-size: 2.25em;
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 10%;
    display: inline-block;
    letter-spacing: 0.125em;
    text-align: center;
    /* text-shadow: 0px 2px 3px rgba(3, 14, 18, 0.53); */
  }

  & .content-box .form-box .input-box {
    margin-bottom: 5%;
  }

  & .content-box .form-box .input-box span {
    font-size: 1.2rem;
    margin-bottom: 2.5%;
    display: inline-block;
    color: #393d3f;
    font-weight: bolder;
    letter-spacing: 0.125em;
  }

  & .content-box .form-box .input-box input {
    width: 100%;
    padding: 2% 5%;
    outline: none;
    font-weight: bolder;
    border: 0.125em solid #393d3f;
    font-size: 1.25rem;
    color: #030e12;
    background: transparent;
    border-radius: 2em;
    transition: all ease-in 0.1s;

    &:focus {
      border: 0.125em solid #5bccf6;
    }
  }

  & .content-box .form-box .input-box button {
    width: 100%;
    padding: 2% 5%;
    outline: none;
    font-weight: 800;
    outline: none;
    border: none;
    font-size: 1.125rem;
    letter-spacing: 0.05em;
    color: white;
    background: #5bccf6;
    border-radius: 2em;
    cursor: pointer;

    &:hover {
      background: #2274a5;
    }
  }

  & .content-box .form-box .input-box p {
    color: #4f4f4f;
    text-align: center;
  }

  & .content-box .form-box .input-box p a {
    color: #5bccf6;
    font-weight: bold;
  }

  #firstName,
  #lastName,
  #email,
  #password {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    & .img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & .content-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    & .content-box .form-box {
      width: 100%;
      padding: 5%;
      background: rgba(255, 255, 255, 0.9);
      margin: 5%;
    }
  }
`;
export default StyledSignup;
