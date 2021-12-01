import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledSignup from "../styled-components/StyledSignup";

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
      <StyledSignup>
        <div className="img-box">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="wireframe on an iPad"
          />
        </div>
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
                  placeholder="schrutefarms@gmail.com"
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
      </StyledSignup>
    </div>
  );
};

export default Login;
