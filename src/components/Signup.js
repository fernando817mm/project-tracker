import React, { useState } from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import StyledSignup from "../styled-components/StyledSignup";

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
      <StyledSignup>
        <div className="content-box">
          <div className="form-box">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <span>first name</span>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Dwight"
                  onChange={handleChange}
                  value={formValue.firstName}
                />
              </div>
              <div className="input-box">
                <span>last name</span>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Schrute"
                  onChange={handleChange}
                  value={formValue.lastName}
                />
              </div>
              <div className="input-box">
                <span>email</span>
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
                <span>password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
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
        <div className="img-box">
          <img
            src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="wireframe on an iPad"
          />
        </div>
      </StyledSignup>
    </div>
  );
};

export default Signup;
