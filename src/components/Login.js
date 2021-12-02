import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledLogin from "../styled-components/StyledLogin";
import Wave from "react-wavify";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);

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
        className="login-background"
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
        className="login-background"
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
        className="login-background"
      />
      <StyledLogin>
        <div className="content-box">
          <div className="form-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button className="button">Login</button>
              </div>
              <div className="input-box">
                <p>
                  Don't have an account? <Link to="/signup">Register here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </StyledLogin>
    </div>
  );
};

export default Login;
