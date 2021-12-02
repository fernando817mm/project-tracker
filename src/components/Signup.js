import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledSignup from "../styled-components/StyledSignup";
import Wave from "react-wavify";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formValue, setFormValue] = useState(initialState);
  // const { push } = useHistory();

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <div className="bg">
      <Wave
        fill="rgba(255, 186, 1, 0.8)"
        paused={false}
        options={{
          height: 60,
          amplitude: 60,
          speed: 0.15,
          points: 4,
        }}
        className="signup-background"
      />
      <Wave
        fill="rgba(252, 222, 103, 0.8)"
        paused={false}
        options={{
          height: 70,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
        className="signup-background"
      />
      <Wave
        fill="rgba(250, 243, 192, 0.8)"
        paused={false}
        options={{
          height: 120,
          amplitude: 40,
          speed: 0.25,
          points: 5,
        }}
        className="signup-background"
      />
      <StyledSignup>
        <div className="content-box">
          <div className="form-box">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  value={formValue.firstName}
                />
              </div>
              <div className="input-box">
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  value={formValue.lastName}
                />
              </div>
              <div className="input-box">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formValue.email}
                />
              </div>
              <div className="input-box">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={formValue.password}
                />
              </div>
              <div className="input-box">
                <button className="button">Sign up</button>
              </div>
              <div className="input-box">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </StyledSignup>
    </div>
  );
};

export default Signup;
